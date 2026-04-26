# Frequently Asked Questions

Click any question below to expand the answer.

## What can I see in the Remote Management page?

In the **Remote Management** page, you can view the status of terminals, including:

- Online status (This is the status of MQTT, which is the Push Service of UMS)
- Network status
- Battery status

You can also search by:

- SN
- Terminal model

---

## How does the device communicate with the UMS backend?

There are two communication mechanisms:

### 1. HTTP Polling

The device periodically sends HTTP requests based on the polling interval:

- Check unfinished tasks (GET)
- Check configuration deployment (GET)
- Report device information (POST)

### 2. MQTT Push

- When UMS pushes tasks or configurations
- The backend sends them via MQTT instantly
- The device responds immediately

👉 In short:

- HTTP = periodic sync
- MQTT = real-time push

---

## Will deleting a configuration take effect immediately?

No.

Deleting a configuration will **NOT trigger MQTT push**, so it will not take effect immediately.

### When will it take effect?

- The configuration will only be updated during the next **HTTP polling cycle**

👉 In short:
Deletion is passive and depends on polling, not real-time push

---

## How can I force a configuration update after deleting it?

You need to **restart the device**.

### Why?

- When the device boots and reconnects to the internet:
  - It will immediately perform HTTP polling
  - The latest configuration will be applied

👉 Restart = fastest way to sync configuration

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

## What should I do if the device shows offline?

Please follow these steps:

1. Ensure the device has a **stable network connection**
2. **Restart the device**

If the device still shows offline:

- Extract the **UMS Log**
- Send it to the **UMS team for analysis**

### Note

- The online status reflects the **MQTT connection state**
- MQTT connects when the device first goes online after boot
- If the connection drops:
  - It will retry several times
  - After multiple failures, it will stop retrying until the device is restarted

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
- Send/Push/Distribute file
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

- Disable Home Button
- Disable Dropdown Menu(Status Bar)
- Disable Input Input
- Disable third-party installation
- Disable USB
- Disable ADB(USB debugging)
- Disable Bluetooth
- Disable WiFi
- Disable App Uninstall
- Disable third-party installation

And more.

---

## Can I deploy APN settings remotely?

Yes.

UMS supports deploying **APN configuration** to terminals remotely.

---

## Can I send Android intents through UMS?

Yes.

UMS supports sending **Android intents(Activity, Service, Broadcast)** when needed.

---

## What's the difference between Operation and Deployment Rules?

They are different in **execution behavior** and **persistence**.

### Operation

- Operation is a **one-time task**
- The device executes it once, and then the task is finished
- It will **not be executed again automatically**

### Deployment Rules

- Deployment Rules represent the **desired configuration state** of a device
- The device will continuously ensure its configuration matches the pushed rule
- If the device changes its group, it will:
  - Stop following the old group configuration
  - Automatically apply the **new group's configuration**

---

## Can I deploy applications remotely in Remote Management?

Yes.

In **Application Management**, you can:

- Deploy applications
- Set the App whitelist

---

## Does UMS support GPS locationing of terminals or geofencing?

Yes.

In **Location Management**, UMS supports GPS locationing of terminals and geofencing for terminals.

This helps you:

- Monitor terminal locations
- You can set geofencing rule remotely, including
  - Fench Range,
  - Actions(Disable Network, Freeze Device, Ring Device) to be done when out of range,
  - E-Mail that receives notification when out of range.
- You can view all the geofencing warning records in the "Fench Warning Record" page.

Note: the current minimal Fence Radius can be set is 50 meters.

---

## What is Device Configuration used for?

In **Device Configuration**, you can choose:

- Existing device configuration
- Custom device configuration

This is used to control how terminals communicate with the UMS server and how logs are handled.

---

## What does "Push Setting" mean?

Push Setting controls how tasks and configurations are delivered.

### Enabled

- UMS pushes tasks/configurations via **MQTT**
- Device responds **immediately**

### Disabled

- No real-time push
- Device retrieves tasks/configurations during **HTTP polling**

👉 In short:

- ON = real-time
- OFF = periodic check

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

**Stage Management** only works with **U-Stage**, which is a specialized configuration app developed by UROVO.

Using this feature, you can push many kinds of configurations beyond the standard options already covered in UMS.

---

## What can I customize in System Customization?

System Customization allows you to configure key system-level behaviors and UI elements of the device.

### Available Customization Options

#### Boot Animation

- Customize the device boot animation
- The uploaded animation must match the **correct screen resolution**

#### Kiosk Mode

- Lock the device into a specific application
- Users **cannot exit the app without a password**

#### Auto-start Application

- Set an application to **launch automatically when the device boots**

#### Customized Launcher

- Set an application as the **device launcher (home screen)**

### Launcher Templates

#### Custom Template

- Upload an APK
- The APK will be set as the **default launcher**

#### Standard Template

- Requires **Urovo Enterprise Launcher**
- You can:
  - Upload a configuration file (**Configuration File Upload**)
  - Or use a predefined template (**Standard Configuration**)
- Used to remotely configure launcher behavior

👉 In short:
System Customization is used for **boot behavior, app control, and launcher customization**

---

## What is Customized Desktop used for?

Customized Desktop is used to set an application as the default launcher of the device.

There are two types of templates available:

- **Custom Template:**
  You can upload an APK, which will be set as the default launcher directly.

- **Standard Template:**
  This requires Urovo's Enterprise Launcher to be installed on the device.
  You can either:
  - Upload a configuration file (Configuration File Upload), or
  - Use the default template (Standard Configuration)  
    to remotely configure the launcher behavior.

---

## Why does my app not take effect after setting it as Customized Desktop?

This is usually because the required intent categories are not declared in the APK.

To work as a Customized Desktop (Launcher), your app **must declare the following in the AndroidManifest.xml**:

```xml
<category android:name="android.intent.category.LAUNCHER" />
<category android:name="android.intent.category.HOME" />
<category android:name="android.intent.category.DEFAULT" />
```

---

## What happens if I enable Kiosk Mode, Customized Desktop, and Auto-start Application at the same time?

You should only use **one of these features at a time**.

These features are **mutually conflicting**, and enabling them together may cause unexpected behavior.

👉 Recommendation:

- Use only one mode depending on your use case

---

## Does UMS support Remote Desktop?

Yes.

UMS supports **Remote Desktop based on Awesun**.

- The built-in remote desktop capability is based on **Awesun**
- If you want to integrate a **third-party Remote Desktop service**, adaptation is required

---

## Does UMS support OTA Firmware Upgrade?

No.
UMS does not support OTA Firmware Upgrade.
However, **UTMS (Private Deployment of UMS)** supports OTA Firmware Upgrade.

👉 In short:

- UMS (Public Cloud): ❌ Not supported
- UTMS (Private Deployment): ✅ Supported

---

## From which section can I monitor device information and data in UMS?

You can monitor device information and data from the **Data Center** section.

It includes:

- Device location
- Installed applications
- App data usage
- Device activation time
- Device shipment (import) time

### Features

- Supports **search by SN**
- Supports **Excel export** on each page

👉 In short:
Data Center is the centralized place for **device monitoring and analytics**

---

## How can I view the device location distribution?

Go to:

**Data Center → Device Map**

### You can:

- Filter by **account or SN**
- View device locations on the map
- Export the data if needed

---

## How can I check which apps are installed on a device?

Go to:

**Data Center → Application Brief**

### You can view:

- App Name
- App Version

You can also export the data if needed.

---

## How can I check the app data usage of a device?

Go to:

**Data Center → Flow Management**

### You can view:

- Data usage charts
- Application data usage ranking
- Data usage alert records

---

## What should I do if UMS consumes too much data?

First, check whether there are **data-heavy operations**, such as:

- Large-scale app deployment
- Frequent configuration updates

### Important

- UMS itself consumes very little traffic  
  (each HTTP polling is only a few hundred KB)

### Optimization

- Increase the **polling time** to reduce traffic usage
- Maximum polling interval: **1440 minutes**

👉 Less polling = less data usage

You can also pull the UMS log("Remote Management → Log Management") from the terminal and send to UMS team for further analysis.

---

## How can I check when a device is registered into UMS or when a device is firstly online on UMS?

Go to:

**Data Center → Device Lifecycle**

### Definitions:

- **Shipment Date**: The time when the device is imported into UMS
- **Activation Time**: The time when the device is first detected online in UMS
