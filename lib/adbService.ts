import { Adb, AdbDaemonTransport } from "@yume-chan/adb";
import { AdbDaemonWebUsbDeviceManager } from "@yume-chan/adb-daemon-webusb";
import AdbWebCredentialStore from "@yume-chan/adb-credential-web";
import type { ReadableStream } from "@yume-chan/stream-extra";

export type DeviceInfo = {
  serialNo: string;
  buildNumber: string;
  customBuild: string;
};

export class WebAdbService {
  private manager: AdbDaemonWebUsbDeviceManager | null = null;
  private credentialStore: AdbWebCredentialStore;
  private adb: Adb | null = null;
  private transport: AdbDaemonTransport | null = null;

  constructor() {
    this.credentialStore = new AdbWebCredentialStore();
  }

  private getUsb() {
    const usb = (navigator as Navigator & { usb?: unknown }).usb;

    if (!usb) {
      throw new Error(
        "WebUSB is not available in this browser or context. Please use Chrome/Edge on localhost or HTTPS.",
      );
    }

    return usb as any;
  }

  async connect(): Promise<void> {
    if (!this.manager) {
      this.manager = new AdbDaemonWebUsbDeviceManager(this.getUsb() as any);
    }

    const device = await this.manager.requestDevice();

    if (!device) {
      throw new Error("No device selected");
    }

    const connection = await device.connect();

    this.transport = await AdbDaemonTransport.authenticate({
      serial: device.serial,
      connection,
      credentialStore: this.credentialStore,
    });

    this.adb = new Adb(this.transport);
  }

  async disconnect(): Promise<void> {
    try {
      await this.transport?.close();
    } finally {
      this.transport = null;
      this.adb = null;
    }
  }

  private ensureAdb(): Adb {
    if (!this.adb) {
      throw new Error("ADB is not connected");
    }
    return this.adb;
  }

  async run(command: string): Promise<string> {
    const adb = this.ensureAdb();
    const result = await adb.subprocess.noneProtocol.spawnWaitText(command);
    return result.trim();
  }

  async getProp(name: string): Promise<string> {
    return this.run(`getprop ${name}`);
  }

  async getDeviceInfo(): Promise<DeviceInfo> {
    const [serialNo, buildNumber, customBuild, vendorModel, project] =
      await Promise.all([
        this.getProp("ro.serialno"),
        this.getProp("ro.vendor.build.id"),
        this.getProp("ro.ufs.custom"),
        this.getProp("ro.product.vendor.model"),
        this.getProp("pwv.project"),
      ]);

    return {
      serialNo:
        [serialNo, [vendorModel, project].join("/")]
          .filter(Boolean)
          .join(" - ") || "-",
      buildNumber: buildNumber || "-",
      customBuild: customBuild || "-",
    };
  }

  async reboot(): Promise<void> {
    await this.run("reboot");
  }

  async rebootRecovery(): Promise<void> {
    await this.run("reboot recovery");
  }

  async powerOff(): Promise<void> {
    await this.run("reboot -p");
  }

  async installApk(
    file: File,
    options?: {
      onStageChange?: (stage: "uploading" | "installing") => void;
    },
  ): Promise<string> {
    const adb = this.ensureAdb();

    const fileName = file.name;
    const remotePath = `/data/local/tmp/${fileName}`;

    options?.onStageChange?.("uploading");

    const sync = await adb.sync();

    try {
      await sync.write({
        filename: remotePath,
        file: file.stream() as never as import("@yume-chan/stream-extra").ReadableStream<Uint8Array>,
      });
    } finally {
      await sync.dispose();
    }

    options?.onStageChange?.("installing");

    const result = await adb.subprocess.noneProtocol.spawnWaitText(
      `pm install -r "${remotePath}"`,
    );

    return result.trim();
  }

  async pushFile(
    file: File,
    remoteDir: string,
    options?: {
      onStageChange?: (stage: "uploading") => void;
    },
  ): Promise<string> {
    const adb = this.ensureAdb();

    const fileName = file.name;
    const normalizedDir = remoteDir.endsWith("/") ? remoteDir : `${remoteDir}/`;
    const remotePath = `${normalizedDir}${fileName}`;

    options?.onStageChange?.("uploading");

    const sync = await adb.sync();

    try {
      await sync.write({
        filename: remotePath,
        file: file.stream() as never as import("@yume-chan/stream-extra").ReadableStream<Uint8Array>,
      });
    } finally {
      await sync.dispose();
    }

    return remotePath;
  }

  async pullFile(remotePath: string): Promise<Uint8Array> {
    const adb = this.ensureAdb();
    const sync = await adb.sync();

    try {
      const stream = sync.read(remotePath);
      const reader = stream.getReader();

      const chunks: Uint8Array[] = [];
      let totalLength = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (!value) continue;

        chunks.push(value);
        totalLength += value.length;
      }

      const result = new Uint8Array(totalLength);
      let offset = 0;

      for (const chunk of chunks) {
        result.set(chunk, offset);
        offset += chunk.length;
      }

      return result;
    } finally {
      await sync.dispose();
    }
  }

  async pushFileToPath(
    file: File,
    remotePath: string,
    options?: {
      onStageChange?: (stage: "uploading") => void;
    },
  ): Promise<string> {
    const adb = this.ensureAdb();

    options?.onStageChange?.("uploading");

    const sync = await adb.sync();

    try {
      await sync.write({
        filename: remotePath,
        file: file.stream() as never as import("@yume-chan/stream-extra").ReadableStream<Uint8Array>,
      });
    } finally {
      await sync.dispose();
    }

    return remotePath;
  }
}
