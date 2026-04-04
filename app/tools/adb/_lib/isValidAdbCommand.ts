export function isValidAdbCommand(command: string): {
  valid: boolean;
  reason: string;
} {
  const trimmed = command.trim();

  if (!trimmed) {
    return { valid: false, reason: "Command is empty." };
  }

  const blockedPrefixes = [
    "kill-server",
    "start-server",
    "pair",
    "tcpip",
    "usb",
    "connect",
    "disconnect",
    "mdns",
    "root",
    "unroot",
  ];

  const allowedPrefixes = [
    "shell ",
    "reboot",
    "reboot ",
    "push ",
    "pull ",
    "install ",
    "uninstall ",
    "logcat",
    "bugreport",
    "wait-for-",
    "jdwp",
    "reverse ",
    "forward ",
  ];

  if (
    blockedPrefixes.some(
      (prefix) => trimmed === prefix || trimmed.startsWith(prefix + " "),
    )
  ) {
    return {
      valid: false,
      reason: `Command "${trimmed}" is blocked in this panel.`,
    };
  }

  if (
    allowedPrefixes.some(
      (prefix) => trimmed === prefix.trim() || trimmed.startsWith(prefix),
    )
  ) {
    return { valid: true, reason: "" };
  }

  return {
    valid: false,
    reason: `Command "${trimmed}" is not in the allowed adb command list.`,
  };
}
