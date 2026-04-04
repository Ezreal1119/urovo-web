"use client";

import * as React from "react";
import {
  ChevronRight,
  Folder,
  File,
  RefreshCw,
  Upload,
  Search,
  ArrowLeft,
  Download,
  Trash2,
  HardDrive,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
  Dialog,
} from "@/components/ui/dialog";

type ExplorerItem = {
  name: string;
  type: "folder" | "file";
  size?: string;
  modifiedAt?: string;
  permissions?: string;
};

const ROOT_PATH = "/sdcard/";

export function FileExplorerPanel({ isConnected }: { isConnected: boolean }) {
  const [currentPath, setCurrentPath] = React.useState(ROOT_PATH);
  const [search, setSearch] = React.useState("");
  const [selectedName, setSelectedName] = React.useState<string | null>(null);
  const [items, setItems] = React.useState<ExplorerItem[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const [isUploading, setIsUploading] = React.useState(false);
  const [isDownloading, setIsDownloading] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const prevConnectedRef = React.useRef(false);
  const isComposingRef = React.useRef(false);
  const uploadInputRef = React.useRef<HTMLInputElement | null>(null);
  const [previewOpen, setPreviewOpen] = React.useState(false);
  const [previewTitle, setPreviewTitle] = React.useState("");
  const [previewContent, setPreviewContent] = React.useState("");
  const [isPreviewLoading, setIsPreviewLoading] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (!isMounted) return;

    if (isConnected) {
      void loadDirectory(ROOT_PATH);
    } else {
      setItems([]);
      setSelectedName(null);
      setSearch("");
      setCurrentPath(ROOT_PATH);
      setIsLoading(false);
    }
  }, [isConnected, isMounted]);

  const pathSegments = React.useMemo(() => {
    const relative = currentPath.startsWith(ROOT_PATH)
      ? currentPath.slice(ROOT_PATH.length)
      : "";
    return relative.split("/").filter(Boolean);
  }, [currentPath]);

  React.useEffect(() => {
    if (!isMounted) return;
    void loadDirectory(currentPath);
  }, [isMounted]);

  const filteredItems = React.useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return items;

    return items.filter((item) => item.name.toLowerCase().includes(q));
  }, [items, search]);

  const selectedItem = filteredItems.find((item) => item.name === selectedName);

  async function loadDirectory(path: string) {
    if (typeof window === "undefined") return;

    const adbService = (window as any).adbService;

    if (!adbService) {
      setItems([]);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);

      const safePath = normalizeToRoot(path);
      const output = await adbService.run(`ls -l "${safePath}"`);
      const parsed = parseLsOutput(output);

      setItems(parsed);
      setSelectedName(null);
      setCurrentPath(safePath);
    } catch (error) {
      console.error(error);
      setItems([]);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleUpload(file: File) {
    if (typeof window === "undefined") return;

    const adbService = (window as any).adbService;

    if (!adbService) {
      console.error("ADB not connected");
      return;
    }

    try {
      setIsUploading(true);

      const remotePath = await adbService.pushFile(file, currentPath);

      console.log(`[upload] Uploaded to ${remotePath}`);
      await loadDirectory(currentPath);
    } catch (error) {
      console.error("[upload] failed:", error);
    } finally {
      setIsUploading(false);
    }
  }

  async function handleDownload() {
    if (typeof window === "undefined") return;
    if (!selectedItem) return;

    const adbService = (window as any).adbService;

    if (!adbService) {
      console.error("ADB not connected");
      return;
    }

    if (typeof adbService.pullFile !== "function") {
      console.error("adbService.pullFile is not implemented");
      return;
    }

    try {
      setIsDownloading(true);

      let remotePath = `${currentPath}${selectedItem.name}`;
      let downloadName = selectedItem.name;
      let tempZipPath: string | null = null;

      if (selectedItem.type === "folder") {
        const safeFolderName = selectedItem.name.replace(/[^\w.-]+/g, "_");
        const tempZipPath = `/sdcard/Download/${safeFolderName}_${Date.now()}.tar`;

        const zipCommand =
          `cd ${shellEscape(currentPath)} && ` +
          `tar -cf ${shellEscape(tempZipPath)} ${shellEscape(selectedItem.name)}`;

        await adbService.run(zipCommand);

        remotePath = tempZipPath;
        downloadName = `${selectedItem.name}.tar`;
      }

      const fileData: Uint8Array = await adbService.pullFile(remotePath);
      const normalized = new Uint8Array(fileData);
      const blob = new Blob([normalized]);

      if ("showSaveFilePicker" in window) {
        const handle = await (window as any).showSaveFilePicker({
          suggestedName: downloadName,
          types: [
            {
              description: "Downloaded File",
              accept: {
                "application/octet-stream": [getFileExtension(downloadName)],
              },
            },
          ],
        });

        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = downloadName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      if (tempZipPath) {
        try {
          await adbService.run(`rm -f ${shellEscape(tempZipPath)}`);
        } catch (error) {
          console.error("[download] failed to delete temp zip:", error);
        }
      }

      console.log(`[download] Downloaded ${remotePath}`);
    } catch (error) {
      console.error("[download] failed:", error);
    } finally {
      setIsDownloading(false);
    }
  }

  async function handleDelete() {
    if (!selectedItem) return;

    const adbService = (window as any).adbService;

    if (!adbService) {
      console.error("ADB not connected");
      return;
    }

    const targetPath = `${currentPath}${selectedItem.name}${
      selectedItem.type === "folder" ? "/" : ""
    }`;

    try {
      setIsDeleting(true);

      if (selectedItem.type === "folder") {
        await adbService.run(`rm -rf "${targetPath}"`);
      } else {
        await adbService.run(`rm -f "${targetPath}"`);
      }

      console.log(`[delete] Removed ${targetPath}`);
      await loadDirectory(currentPath);
    } catch (error) {
      console.error("[delete] failed:", error);
    } finally {
      setIsDeleting(false);
    }
  }

  async function handlePreviewFile(item: ExplorerItem) {
    if (typeof window === "undefined") return;
    if (item.type !== "file") return;

    const adbService = (window as any).adbService;
    if (!adbService) {
      console.error("ADB not connected");
      return;
    }

    if (!isLikelyTextFile(item.name)) {
      setPreviewTitle(item.name);
      setPreviewContent(
        "Preview is only supported for text-like files at the moment.",
      );
      setPreviewOpen(true);
      return;
    }

    const remotePath = `${currentPath}${item.name}`;

    try {
      setIsPreviewLoading(true);
      setPreviewTitle(item.name);
      setPreviewContent("");
      setPreviewOpen(true);

      const command = `cat ${shellEscape(remotePath)}`;
      const output = await adbService.run(command);

      setPreviewContent(output || "(Empty file)");
    } catch (error) {
      console.error("[preview] failed:", error);
      setPreviewContent("Failed to load file content.");
      setPreviewOpen(true);
    } finally {
      setIsPreviewLoading(false);
    }
  }

  function handleEnterFolder(name: string) {
    const nextPath = normalizeToRoot(
      `${currentPath.endsWith("/") ? currentPath : `${currentPath}/`}${name}/`,
    );
    setCurrentPath(nextPath);
    setSelectedName(null);
    void loadDirectory(nextPath);
  }

  function handleBack() {
    if (currentPath === ROOT_PATH) return;

    const relative = currentPath.slice(ROOT_PATH.length).replace(/\/$/, "");
    const parts = relative.split("/").filter(Boolean);
    parts.pop();

    const next = parts.length ? `${ROOT_PATH}${parts.join("/")}/` : ROOT_PATH;

    setCurrentPath(next);
    setSelectedName(null);
    void loadDirectory(next);
  }

  return (
    <section className="space-y-5">
      <input
        ref={uploadInputRef}
        type="file"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            void handleUpload(file);
          }
          e.currentTarget.value = "";
        }}
      />

      <div className="flex h-[720px] min-h-0 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02))] shadow-[0_20px_70px_rgba(0,0,0,0.28)]">
        {/* Top bar */}
        <div className="border-b border-white/8 px-5 py-4 md:px-6">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <HardDrive className="size-5 text-blue-200" />
                </div>

                <div>
                  <div className="text-sm font-semibold text-white">
                    Device Storage
                  </div>
                  <div className="text-xs text-foreground/45">
                    Read, manage, and prepare transfer tasks
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-sm text-foreground/65">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentPath === ROOT_PATH}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 transition hover:bg-white/[0.07] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowLeft className="size-4" />
                  Back
                </button>

                <div className="flex flex-wrap items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] px-2 py-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentPath(ROOT_PATH);
                      setSelectedName(null);
                      void loadDirectory(ROOT_PATH);
                    }}
                    className="rounded-lg px-2 py-1 text-foreground/70 transition hover:bg-white/[0.06] hover:text-white"
                  >
                    sdcard
                  </button>

                  {pathSegments.map((seg, index) => (
                    <React.Fragment key={`${seg}-${index}`}>
                      <ChevronRight className="size-3.5 text-foreground/30" />
                      <button
                        type="button"
                        onClick={() => {
                          const next =
                            ROOT_PATH +
                            pathSegments.slice(0, index + 1).join("/") +
                            "/";
                          setCurrentPath(next);
                          setSelectedName(null);
                          void loadDirectory(next);
                        }}
                        className="rounded-lg px-2 py-1 text-foreground/70 transition hover:bg-white/[0.06] hover:text-white"
                      >
                        {seg}
                      </button>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-foreground/35" />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onCompositionStart={() => {
                    isComposingRef.current = true;
                  }}
                  onCompositionEnd={() => {
                    isComposingRef.current = false;
                  }}
                  onKeyDown={(e) => {
                    if (isComposingRef.current) return;
                    if (e.nativeEvent.isComposing) return;

                    if (e.key === "Enter") {
                      e.preventDefault();

                      const firstFolder = filteredItems.find(
                        (item) => item.type === "folder",
                      );

                      if (firstFolder) {
                        handleEnterFolder(firstFolder.name);
                      }
                    }
                  }}
                  placeholder="Search current folder..."
                  className="h-11 w-full rounded-2xl border border-white/10 bg-white/[0.04] pl-10 pr-12 text-sm text-foreground outline-none placeholder:text-foreground/30 focus:border-white/15 focus:bg-white/[0.05]"
                />

                {search.trim().length > 0 && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 z-10 flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-foreground/45 transition hover:bg-white/[0.08] hover:text-white"
                    aria-label="Clear search"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                <ExplorerActionButton
                  icon={Upload}
                  label={isUploading ? "Uploading..." : "Upload"}
                  onClick={() => {
                    uploadInputRef.current?.click();
                  }}
                  disabled={!isConnected || isUploading}
                />
                <ExplorerActionButton
                  icon={Download}
                  label={isDownloading ? "Downloading..." : "Download"}
                  onClick={() => {
                    void handleDownload();
                  }}
                  disabled={!isConnected || !selectedItem || isDownloading}
                />
                <ExplorerActionButton
                  icon={Trash2}
                  label={isDeleting ? "Deleting..." : "Delete"}
                  onClick={() => {
                    void handleDelete();
                  }}
                  disabled={!isConnected || !selectedItem || isDeleting}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="min-h-0 min-w-0 flex flex-1 flex-col">
          <div className="grid grid-cols-[1.8fr_0.7fr_0.9fr_0.8fr] gap-3 border-b border-white/8 px-5 py-3 text-xs font-medium uppercase tracking-[0.12em] text-foreground/35 md:px-6">
            <div>Name</div>
            <div>Size</div>
            <div>Modified</div>
            <div>Permissions</div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto">
            {isLoading ? (
              <div className="flex min-h-[260px] items-center justify-center px-6 text-sm text-foreground/35">
                Loading directory...
              </div>
            ) : !isMounted ? (
              <div className="flex min-h-[260px] items-center justify-center px-6 text-sm text-foreground/35">
                Preparing explorer...
              </div>
            ) : !isConnected ? (
              <div className="flex min-h-[260px] items-center justify-center px-6 text-sm text-foreground/35">
                Connect a device first to browse files.
              </div>
            ) : filteredItems.length === 0 ? (
              <div className="flex min-h-[260px] items-center justify-center px-6 text-sm text-foreground/35">
                No files found in this directory.
              </div>
            ) : (
              filteredItems.map((item, index) => {
                const isSelected = selectedName === item.name;

                return (
                  <button
                    key={`${currentPath}-${item.type}-${item.name}-${index}`}
                    type="button"
                    onClick={(e) => {
                      setSelectedName(item.name);

                      if (e.detail === 2) {
                        if (item.type === "folder") {
                          handleEnterFolder(item.name);
                        } else {
                          void handlePreviewFile(item);
                        }
                      }
                    }}
                    className={cn(
                      "grid w-full grid-cols-[1.8fr_0.7fr_0.9fr_0.8fr] gap-3 border-b border-white/[0.05] px-5 py-4 text-left transition md:px-6",
                      isSelected
                        ? "bg-blue-500/[0.08]"
                        : "hover:bg-white/[0.03]",
                    )}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className={cn(
                          "flex size-10 shrink-0 items-center justify-center rounded-2xl border",
                          item.type === "folder"
                            ? "border-amber-400/20 bg-amber-400/[0.08] text-amber-200"
                            : "border-white/10 bg-white/[0.04] text-foreground/70",
                        )}
                      >
                        {item.type === "folder" ? (
                          <Folder className="size-5" />
                        ) : (
                          <File className="size-4.5" />
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="truncate text-sm font-medium text-white">
                          {item.name}
                        </div>
                        <div className="mt-0.5 text-xs text-foreground/40">
                          {item.type === "folder" ? "Folder" : "Regular file"}
                        </div>
                      </div>
                    </div>

                    <div className="truncate text-sm text-foreground/60">
                      {item.type === "folder" ? "—" : item.size}
                    </div>

                    <div className="truncate text-sm text-foreground/60">
                      {item.modifiedAt || "—"}
                    </div>

                    <div className="truncate text-sm font-mono text-foreground/45">
                      {item.permissions || "—"}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          <div className="flex flex-col gap-3 border-t border-white/8 px-5 py-4 text-sm text-foreground/45 md:flex-row md:items-center md:justify-between md:px-6">
            <div>
              Current Path:{" "}
              <span className="font-mono text-foreground/65">
                {currentPath}
              </span>
            </div>
            <div>
              {filteredItems.length} item{filteredItems.length > 1 ? "s" : ""}{" "}
              in view
            </div>
          </div>
        </div>
      </div>
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent
          className="
      !w-[88vw] !max-w-[1100px]
      !h-[78vh]
      p-0
      overflow-hidden
      rounded-3xl
      border border-white/10
      bg-[rgba(10,10,14,0.92)]
      text-foreground
      shadow-[0_24px_80px_rgba(0,0,0,0.45)]
      backdrop-blur-2xl
    "
        >
          <DialogTitle className="sr-only">File Preview</DialogTitle>
          <DialogDescription className="sr-only">
            Preview text file content from the device.
          </DialogDescription>

          <div className="flex h-full min-h-0 flex-col">
            <div className="border-b border-white/10 px-6 py-4">
              <div className="text-sm font-semibold text-white">
                File Preview
              </div>
              <div className="mt-1 truncate text-xs text-foreground/45">
                {previewTitle}
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-auto px-6 py-5">
              {isPreviewLoading ? (
                <div className="flex h-full items-center justify-center text-sm text-foreground/40">
                  Loading file content...
                </div>
              ) : (
                <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-6 text-foreground/80">
                  {previewContent}
                </pre>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ExplorerActionButton({
  icon: Icon,
  label,
  onClick,
  className,
  disabled,
}: {
  icon: React.ElementType;
  label: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-foreground/75 transition hover:bg-white/[0.07] hover:text-white disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
    >
      <Icon className="size-4" />
      {label}
    </button>
  );
}

function parseLsOutput(output: string): ExplorerItem[] {
  const lines = output
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const result: ExplorerItem[] = [];

  for (const line of lines) {
    if (line.startsWith("total ")) continue;

    const parts = line.split(/\s+/);
    if (parts.length < 8) continue;

    const permissions = parts[0];
    if (
      !permissions.startsWith("d") &&
      !permissions.startsWith("-") &&
      !permissions.startsWith("l")
    ) {
      continue;
    }

    const sizeRaw = parts[4];
    const date = parts[5];
    const time = parts[6];
    const name = parts.slice(7).join(" ");
    if (!name) continue;

    result.push({
      name,
      type: permissions.startsWith("d") ? "folder" : "file",
      size: permissions.startsWith("d")
        ? undefined
        : formatFileSize(Number(sizeRaw)),
      modifiedAt: `${date} ${time}`,
      permissions,
    });
  }

  return result;
}

function formatFileSize(bytes: number): string {
  if (!Number.isFinite(bytes)) return "—";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function normalizeToRoot(path: string): string {
  if (!path || path === "/") return ROOT_PATH;

  let normalized = path.replace(/\\/g, "/");

  if (!normalized.startsWith(ROOT_PATH)) {
    normalized = ROOT_PATH;
  }

  if (!normalized.endsWith("/")) {
    normalized += "/";
  }

  return normalized;
}

function getFileExtension(fileName: string): string {
  const lastDot = fileName.lastIndexOf(".");
  if (lastDot <= 0 || lastDot === fileName.length - 1) {
    return ".bin";
  }
  return fileName.slice(lastDot);
}

function isLikelyTextFile(fileName: string) {
  const lower = fileName.toLowerCase();

  return [
    ".txt",
    ".log",
    ".xml",
    ".json",
    ".csv",
    ".md",
    ".ini",
    ".conf",
    ".cfg",
    ".prop",
    ".properties",
    ".html",
    ".htm",
    ".js",
    ".ts",
    ".tsx",
    ".jsx",
    ".css",
    ".java",
    ".kt",
    ".kts",
    ".sh",
    ".py",
    ".yml",
    ".yaml",
  ].some((ext) => lower.endsWith(ext));
}

function shellEscape(value: string) {
  return `'${value.replace(/'/g, `'\\''`)}'`;
}
