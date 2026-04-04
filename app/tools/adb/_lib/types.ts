export type DeviceStatus =
  | "disconnected"
  | "connecting"
  | "connected"
  | "sideload";

export type DeviceInfo = {
  serialNo: string;
  buildNumber: string;
  customBuild: string;
};

export type InstallTaskStatus =
  | "idle"
  | "uploading"
  | "installing"
  | "success"
  | "error";
