import type { WebAdbService } from "@/lib/adbService";

function shellEscape(value: string) {
  return `'${value.replace(/'/g, `'\\''`)}'`;
}

function getFileExtension(fileName: string): string {
  const lastDot = fileName.lastIndexOf(".");
  if (lastDot <= 0 || lastDot === fileName.length - 1) {
    return ".bin";
  }
  return fileName.slice(lastDot);
}

function splitRemoteFolderPath(absoluteFolderPath: string): {
  parent: string;
  base: string;
} {
  const trimmed = absoluteFolderPath.replace(/\/+$/, "");
  const lastSlash = trimmed.lastIndexOf("/");
  if (lastSlash <= 0) {
    throw new Error("Invalid remote folder path.");
  }
  return {
    parent: trimmed.slice(0, lastSlash),
    base: trimmed.slice(lastSlash + 1),
  };
}

async function remoteDirectoryExists(
  adb: WebAdbService,
  absolutePath: string,
): Promise<boolean> {
  try {
    await adb.run(`test -d ${shellEscape(absolutePath)}`);
    return true;
  } catch {
    return false;
  }
}

/**
 * 1) Verifies folder exists (no picker before this).
 * 2) Prompts save location when supported.
 * 3) Creates remote tar, pulls, writes locally, removes remote tar in finally.
 */
export async function downloadRemoteFolderToDisk(
  adb: WebAdbService,
  options: {
    absoluteFolderPath: string;
    suggestedDownloadBaseName: string;
  },
): Promise<void> {
  if (typeof adb.pullFile !== "function") {
    throw new Error("adbService.pullFile is not available.");
  }

  const folder = options.absoluteFolderPath.replace(/\/+$/, "") || "/";
  const { parent, base } = splitRemoteFolderPath(folder);

  const exists = await remoteDirectoryExists(adb, folder);
  if (!exists) {
    throw new Error(`Remote folder does not exist: ${folder}`);
  }

  const safeStem = options.suggestedDownloadBaseName.replace(/[^\w.-]+/g, "_");
  const downloadFileName = `${options.suggestedDownloadBaseName}.tar`;
  const deviceTarPath = `/sdcard/Download/${safeStem}_${Date.now()}.tar`;

  let saveHandle: { createWritable: () => Promise<FileSystemWritableFileStream> } | null =
    null;

  if (typeof window !== "undefined" && "showSaveFilePicker" in window) {
    saveHandle = await (window as any).showSaveFilePicker({
      suggestedName: downloadFileName,
      types: [
        {
          description: "Tar archive",
          accept: {
            "application/x-tar": [getFileExtension(downloadFileName)],
          },
        },
      ],
    });
  }

  let deviceTarCreated = false;
  try {
    const tarCommand =
      `cd ${shellEscape(parent)} && ` +
      `tar -cf ${shellEscape(deviceTarPath)} ${shellEscape(base)}`;

    await adb.run(tarCommand);
    deviceTarCreated = true;

    const fileData = await adb.pullFile(deviceTarPath);
    const blob = new Blob([new Uint8Array(fileData)]);

    if (saveHandle) {
      const writable = await saveHandle.createWritable();
      await writable.write(blob);
      await writable.close();
    } else if (typeof window !== "undefined") {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = downloadFileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    }
  } finally {
    if (deviceTarCreated) {
      try {
        await adb.run(`rm -f ${shellEscape(deviceTarPath)}`);
      } catch {
        // best-effort cleanup
      }
    }
  }
}
