# Frequently Asked Questions

Click any question below to expand the answer.

## What can I see in the Remote Management page?

In the **Remote Management** page, you can view the status of terminals, including:

- Online status
- Network status
- Battery status

You can also search by:

- SN
- Terminal model

---

## How do I check detailed information of a terminal?

Go to **Remote Management**, then click **Device Information** on the right side of the target terminal.

There you can view:

- Firmware version
- Current location
- Memory usage
- Storage usage
- Network information
- Application-related information

---

## How do I export device information in batch?

1. Click **Batch Manage**
2. Select the target group
3. Choose **Export Device Info**
4. Click **Next**

The file will then be downloaded automatically in the browser.

---

## How do I execute remote operations on terminals?

There are two ways:

### 1. Manual selection

- Select terminals by checking the boxes
- Click **Operate in Batches**

### 2. By group

- Click **Batch Manage**
- Select the operation
- Select the target group

---

## What remote operations are supported in UMS?

UMS supports operations such as:

- Freeze device
- Unfreeze device
- Send message
- Send file
- Uninstall application
- Move device to another group
- Extract system log
- Restart device
- Shut down device
- Ring device

---

## How do I check whether a remote task succeeded or failed?

Go to **Remote Log**.

You can:

- Click **Details**
- Check whether the task is:
  - Still running
  - Successful
  - Failed

You can also export the report if needed.

---

## What is Device Restore used for?

In **Device Restore**, you can:

- Reset a terminal
- Delete its lock password if it was forgotten

---

## How do I remotely extract logs or files from a terminal?

Go to **Log Management**, then:

1. Click **Add Log Task**
2. Select the target terminal
3. Choose one of the following:
   - UMS log
   - System log
   - Specified File
4. If using **Specified File**, enter the target file path

After the terminal uploads the file, you can download it from the page anytime.

---

## Can I push WiFi settings remotely?

Yes.

In **Configuration Deployment**, you can push:

- WiFi SSID
- WiFi password

So the terminals can connect to that WiFi automatically.

---

## What is WiFi Whitelist used for?

WiFi Whitelist is used to restrict the terminal’s available WiFi options to only the SSIDs you define.

---

## What basic device settings can I deploy remotely?

In **Configuration Deployment**, you can deploy settings such as:

- Disable buttons
- Disable Bluetooth
- Disable WiFi
- Disable third-party installation

And more.

---

## Can I deploy APN settings remotely?

Yes.

UMS supports deploying **APN configuration** to terminals remotely.

---

## Can I send Android intents through UMS?

Yes.

UMS supports sending **Android intents** when needed.

---

## Can I deploy applications remotely in Remote Management?

Yes.

In **Application Management**, you can:

- Deploy applications
- Set the App whitelist

---

## Does UMS support geofencing?

Yes.

In **Location Management**, UMS supports geofencing for terminals.

This helps you:

- Monitor terminal locations
- Lock terminals remotely when they go out of the allowed area
- Receive email notifications when that happens

---

## What is Device Configuration used for?

In **Device Configuration**, you can choose:

- Existing device configuration
- Custom device configuration

This is used to control how terminals communicate with the UMS server and how logs are handled.

---

## What does polling time mean?

Polling time means:

- How often the terminals send HTTP requests to the UMS server

If you want:

- **Less data usage** → increase polling time
- **More frequent updates** → decrease polling time

---

## What does device log retention time mean?

Device log retention time means:

- How long the UMS log is stored on the terminal before being deleted

---

## What is Stage Management used for?

**Stage Management** only works with **U Stage**, which is a specialized configuration app developed by UROVO.

Using this feature, you can push many kinds of configurations beyond the standard options already covered in UMS.

---

## What can I customize in System Customization?

In **System Customization**, you can remotely set:

- Boot animation
- Kiosk application
- Auto-start application
- Default launcher
