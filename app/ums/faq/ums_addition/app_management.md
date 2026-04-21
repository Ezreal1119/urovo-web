# UMS App Management – FAQ

## How do I upload an application in UMS?

Go to **App Store → App Upload**, then:

1. Upload APK.
2. Enter **Application Name** and **Description**.
3. Select catalog.
4. Upload description image (optional).
5. Enter application signature.

You can modify app information anytime after upload.

---

## Can I update or upgrade an app after uploading?

Yes.

- You can edit app info anytime.
- You can upgrade the app in **Version Management**.

---

## What are the different app upload types in UMS?

There are **3 types**:

### 1. Coverage Upgrade (Most common)

- Updates the **official version** (shown on App Market homepage).
- Requirements:
  - Must use **higher version**
  - Must use **same signature**

If not, upgrade will fail.

---

### 2. Multi-version Upload

- Does **NOT change official version**
- Version only visible in **App Detail page**
- No restrictions:
  - Can upload lower version
  - Can use different signature

⚠️ Cannot directly become official version  
→ Must delete it first, then re-upload via **Coverage Upgrade**

---

### 3. Grayscale Upload

- Similar to coverage upgrade
- Only applies to **selected devices/groups**
- Requirements:
  - Must use **same signature**

Features:

- Control rollout by SN
- Pause/resume upgrade
- Upgrade grayscale version
- Convert to official version when stable

---

## What is the “official version” of an app?

The **official version** is:

- The version shown on the **App Market homepage**
- The default version users see and download

---

## What's the difference between publishing an uploaded app by "Add Apps" and by "Group Shelf"?

They are different in **publish scope** and **future group control**.

### Add Apps

- Publishes the uploaded app to **all groups**

- You **cannot later restrict or adjust** the target groups

- If you create **new groups in the future**, those groups will also be able to download the app from App Market

### Group Shelf

- Publishes the uploaded app only to the **selected groups**

- You can later click **"Adjust"** in the **Published App List** to modify the target groups

- Only terminals in those selected groups can download the app from App Market

- If you create **new groups later**, they will **not** see this app in App Market unless you adjust the group scope

---

## What is the difference between App List left and right side?

### Left side:

- **Published apps**
- Available for download in App Market

### Right side:

- **Uploaded but NOT published apps**
- Must be manually published to be available

---

## Can I control which devices can download an app?

Yes.

You can:

- Assign app availability by **group**
- Control which terminals can download from App Market

---

## Can I lock a specific app version?

Yes.

You can:

- Fix a specific version
- Make other versions **inaccessible** by adjusting group settings

---

## How do I deploy applications to devices?

Go to:

**Remote Management → Application Management → Application Deployment**

Steps:

1. Create deployment rule
2. Select one or more apps (must be published)
3. Choose deploy mode:
   - Silent Installation
   - Download & Prompt
4. Set deploy time
5. Click **Push**
6. Select target group → Confirm

---

## What happens after pushing an app deployment?

- App is **automatically downloaded and installed** on devices
- Execution depends on device status

---

## How do I update apps already deployed?

If the app has a new official version:

- An **“Update App”** button appears
- Click it to push update

---

## Can I restrict apps on devices?

Yes.

Use **Application Whitelist** to:

- Allow only specific apps
- Prevent malicious or unauthorized apps

---

## Can I uninstall apps remotely?

Yes.

Go to:

**Remote Management**

Then:

- Enter **package name**
- Execute uninstall operation

---

## What is the Banner used for?

Banner is an image displayed on the **App Market Home Page**.

- It supports a **hyperlink**

- You can customize it to any URL (e.g. business website)

- Users will be redirected once they click the banner

---

## Does Application Whitelist work on both POS and PDA?

No.

- **Only PDA is supported**

- POS uses **APK signature control**

- Only APKs signed with the authorized certificate can be installed

  (except Non-financial POS)

---

## What happens to already installed apps after enabling App Whitelist?

- Apps **NOT in the whitelist will be uninstalled after reboot**

- Please use this feature carefully

---

## What happens if I install an app NOT in the whitelist?

Installation will fail with: `Failure [INSTALL_FAILED_INVALID_APK: Scanning Failed.: VerifyInernalSign failed]`

---

## Can I block app installation from sources outside App Market?

Yes.

Go to:

**Remote Management → Configuration Deployment → Function Settings**

Enable:

- `ThirdPartyApplication Installation Disable = Yes`

---

## What happens if I install third-party apps after disabling it?

Installation will fail with: `Failure [INSTALL_FAILED_INVALID_APK: not allow to install third part app]`

---

## How can I remotely configure an App?

Recommended approach:

1. Implement **FileObserver** inside the app
2. Use **File Distribution** in UMS to push config files
3. App detects file changes → automatically updates configuration

---

## How to deploy a web-based app?

You can:

- Use **UStage** and **Configuration Management**
- Push a **shortcut** to Enterprise Launcher

This allows launching web apps like native apps
