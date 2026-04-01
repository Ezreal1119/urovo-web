import { Adb, AdbDaemonTransport } from "@yume-chan/adb";
import { AdbDaemonWebUsbDeviceManager } from "@yume-chan/adb-daemon-webusb";
import AdbWebCredentialStore from "@yume-chan/adb-credential-web";

export type DeviceInfo = {
  serialNo: string;
  buildNumber: string;
  model: string;
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
        "WebUSB is not available in this browser or context. Please use Chrome/Edge on localhost or HTTPSS.",
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
    const [serialNo, buildNumber, vendorModel, project] = await Promise.all([
      this.getProp("ro.serialno"),
      this.getProp("ro.vendor.build.id"),
      this.getProp("ro.product.vendor.model"),
      this.getProp("pwv.project"),
    ]);

    return {
      serialNo: serialNo || "-",
      buildNumber: buildNumber || "-",
      model: [vendorModel, project].filter(Boolean).join(" / ") || "-",
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
}
