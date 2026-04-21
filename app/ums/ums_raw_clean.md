# 1. Summary

The Agent Management Platform is designed for agents to manage devices and services.

It provides a one-stop solution including:

- Device management
- Application management
- Business tenant management

---

# 2. System Overview

The platform is intended for agents.

### Key capabilities

- Invite customers to register accounts
- Manage customer devices
- Upload applications directly
- Publish apps to U-Store without internal review from Partner Connect
- Batch device management
- Device monitoring
- Account management

---

# 3. Account Registration and Login

## 3.1 Registration

Users can create an account via email registration.

#### Steps

1. Open the browser and go to:
   `https://uhomeov.urovo.com/customerui/login`

2. Click **Sign Up**

3. Enter:
   - Email
   - Password

4. Click **Register Now**

5. Check your email inbox

6. Click **Activate account** from the activation email

7. Log in after activation

8. On first login:
   - Submit company information
   - Wait for Urovo approval

9. After approval, the platform becomes available for use

#### Notes

- Email activation is required before login
- Company approval is required before full platform access

---

## 3.2 Login

After account activation and company approval, users can log in to the platform.

#### Steps

1. Go to the login page

2. Enter:
   - Registered email
   - Password
   - Verification code

3. Click **Login**

#### Notes

- Verification code is required during login
- Login is available only after account activation and company approval

---

## 3.3 First Login Experience

After successful login, users enter the UMS homepage.

#### Main interface areas

- Main function overview
- Left-side navigation menu
- Top-right controls:
  - Logout
  - Language switch between Chinese and English

---

## Related Terms

- agent management platform
- UMS
- account registration
- email activation
- company approval
- login
- device management
- application management
- U-Store

---

# 4. Application Functions

## 4.1 Dashboard

### 4.1.1 Dashboard Overview

After company approval, log in to access the **Dashboard**.

#### Steps to access

1. Log in with:
   - Username (email)
   - Password
   - Verification code

2. From the left menu, click **Dashboard**

---

### Dashboard Components

#### 1. Total Devices

- **Online Devices / Total Devices**
  - Real-time dynamic data
  - Updates on page refresh

- **Added Within 7 Days**
  - Number of devices activated in the past 7 days
  - Updated dynamically

---

#### 2. Device Abnormal Status

Displays abnormal device conditions with detailed drill-down support.

Each item includes:

- Total count
- Device SN list
- Device group
- Export capability (via pop-up)

##### Types

- **Battery < 20%**
  - Devices with low battery

- **Disabled Devices**
  - Devices currently disabled

- **Offline Devices**
  - Devices not connected to network

- **Offline > 48h**
  - Devices that went offline within the past 48 hours

- **Unreported > 48h**
  - Devices that have not uploaded data for 48 hours

---

#### 3. Warning Log

Displays alert records including:

- Warning type (e.g. geofence, limit alerts)
- Device SN
- Device remarks
- Timestamp

---

#### 4. Device Map

- Visual map of device distribution
- Supports zoom via mouse scroll

---

#### 5. Flow Usage

- Displays traffic/data usage
- Data is consistent with Flow Management module

---

### 4.1.2 Change Profile Picture

#### Steps

1. Click account icon (top-right corner)
2. Select **Change Picture**
3. Click **Avatar Upload**
4. Upload image

#### Requirements

- Format: JPG / JPEG
- Size: ≤ 500KB

---

### 4.1.3 About Us

#### Steps

1. Click account icon (top-right corner)
2. Select **About Us**

---

### Features inside "About Us"

#### 1. Common Problem (FAQ)

- Contains common issues and solutions
- Supports keyword search

---

#### 2. Adaptation Situation (Device Compatibility)

- Lists all supported device models
- Searchable by model number

---

#### 3. Privacy Policy

- Includes:
  - UMS Terms of Service
  - Privacy Policy

---

### 4.1.4 Version History

#### Steps

1. Click account icon (top-right corner)
2. Select **Version History**

#### Function

- View historical updates for:
  - UMS Web platform
  - Terminal APP
- Includes:
  - Feature updates
  - Optimization details

---

### 4.1.5 Feedback

#### Steps

1. Click account icon (top-right corner)
2. Select **Feedback**

#### Function

- Submit:
  - Issues
  - Suggestions
  - Improvement ideas

- Used as official feedback channel
- Helps improve platform and services

---

## Notes

- Dashboard data is dynamic and updates on refresh
- Most dashboard modules support drill-down and export
- Device abnormal statuses are key for monitoring large deployments

---

## Related Terms

- dashboard
- device monitoring
- device abnormal status
- warning log
- device map
- flow usage
- avatar upload
- FAQ
- version history
- feedback
- device management

---

## 4.2 App Store

The App Store module is used for:

- Uploading applications
- Publishing apps
- Managing versions
- Device compatibility checking
- App download and installation
- Banner (advertising) management

---

### 4.2.1 App Upload

#### 4.2.1.1 Add App

#### Steps

1. Go to:
   **App Store → App Upload**

2. Click **Upload**

3. Upload APK:
   - Click to select OR drag & drop APK file

4. Fill in application information:
   - **App Name**
     - Auto-parsed from APK
     - Can be edited manually

   - **App Description**
     - Brief introduction of app features and purpose

   - **Catalog (Industry)**
     - Used for classification and search

   - **Device Type / Compatibility**
     - Defines which devices can detect/install the app

   - **Signature**
     - Auto-parsed from APK
     - Can be manually edited

   - **Signature Remark**
     - Optional description for signature

   - **Language**
     - Based on device environment

   - **Producer**
     - Developer / company name

   - **Version Description**
     - Description of this version

   - **Remarks**
     - Additional notes

5. Click **Save**

---

#### 4.2.1.2 Edit App

#### Steps

1. Go to:
   **App Upload → Detail → App Detail**

2. Edit:
   - App name
   - Description
   - Industry classification
   - Device type

---

#### 4.2.1.3 App Upgrade

#### Steps

1. Go to:
   **App Upload → Detail → Version Management**

2. Click **Upgrade**

3. Upload new APK

---

### Upgrade Types

#### 1. Normal Upgrade (Full Launch)

- Upload new APK
- Enter upgrade description
- Save

Result:

- New version replaces old version
- All devices can detect the new version

---

#### 2. Gray Scale Upgrade (Gated Release)

- Upload new APK
- Specify device SN list
- Enter upgrade description
- Save

Result:

- Only selected devices can detect the new version
- Used for limited testing

---

#### 3. Overwritten Upgrade (for existing grayscale)

- Upload new APK
- Applies to same SN range
- Can adjust SN list if needed

---

### Notes

- Gray scale versions:
  - Require manual download from App Store
  - Cannot be pushed via Application Deployment
- Official versions:
  - Support push deployment
- Recommended:
  - Limit grayscale devices (e.g. ≤ 10)

---

#### 4.2.1.4 Suspend App Release

Used to temporarily stop app availability.

#### Steps

1. Click **Pause Issue** on grayscale package

Result:

- Devices cannot detect this version

---

#### Resume Release

- Click **Restore Issue**
- Devices regain access

---

#### Additional Actions

- **Convert to Official Version**
- **Coverage Upgrade**
- **Adjust Grayscale Range**

---

#### 4.2.1.5 Upload Multiple Versions

#### Entry Path

1. Go to:
   **App Upload → Detail → Version Management**

2. Click:
   **Normal Upgrade → Upload Multiple Versions**

---

### Modes

#### 1. Coverage Upgrade

- Only allows:
  - Same package name
  - Same signature
  - Higher version

- All versions stored as history
- Supports:
  - Edit / Delete / Download

---

#### 2. Upload Multiple Versions

- Allows multiple APKs
- Package name can be same
- Signature can differ

If signature not recognized:

- Enter manually

---

### Rules

- Same package + same signature + same version → ❌ Not allowed
- Same package + different signature → ✅ Allowed
- Different package name → ❌ Not allowed
- Correct signature required for installation

---

#### 4.2.1.6 Delete App

#### Steps

1. Click **Delete** in App Upload page

#### Result

- App is permanently removed
- Devices cannot detect it anymore

#### Notes

- Deletion is irreversible
- Installed apps remain on devices
- Deleted apps disappear from App Store

---

### 4.2.2 App List

Displays all applications under the account:

- Official versions
- Full launch apps
- Grayscale apps

Supports search by:

- Device model
- App name

---

### App Publishing (App Shelf)

#### 1. Manual Launch

##### A. Partial Launch (by group)

- Select app → Click **Add Partially**
- Choose target device group

Result:

- Only selected groups can detect app

Notes:

- New groups do NOT automatically get the app
- Must use **Adjust** to include them

---

##### B. Full Launch (All groups)

- Select app(s)
- Click **Add Apps**

Result:

- App available to all groups
- Future groups automatically included

---

#### 2. Automatic Upload

- All apps visible to all accounts
- All devices can detect apps
- New apps auto-published

⚠️ Use with caution

---

#### 3. Adjust App Distribution

- Click **Adjust**
- Add/remove device groups

Result:

- Removed groups → cannot detect app
- Added groups → can detect app

---

### App Removal

#### Steps

1. Select app
2. Click **Remove Apps**

Result:

- App removed from App Store
- Devices cannot detect it

---

### App Details

- View:
  - App name
  - Version
  - Device compatibility
  - Version description

#### Note

- If multiple versions exist:
  - Highest official version is displayed

---

### 4.2.3 Banner Management

Used for displaying advertising carousel on devices.

---

### 1. Add Banner

#### Steps

1. Click **Add**
2. Upload image

#### Requirements

- Format: JPG / PNG
- Size: ≤ 500KB

3. Add target URL

#### Result

- Banner appears as carousel
- Clicking opens the URL

---

### 2. Edit Banner

- Modify image or link
- Changes take effect after device refresh

---

### 3. Delete Banner

- Click **Delete**

Result:

- Banner removed
- Devices cannot detect it

---

### Notes

- Maximum 5 banners allowed

---

## Related Terms

- app store
- app upload
- app upgrade
- grayscale release
- full launch
- version management
- app shelf
- banner
- device compatibility
- APK upload

---

## 4.3 Group Management

The Group Management module is used to organize devices into groups for easier management.

### Key capabilities

- Create and manage device groups
- Batch import groups
- Assign devices to groups
- Export group data
- View devices and applications by group

---

### 4.3.1 Group Overview

By default, all devices belong to the **Ungrouped** group.

### Key concepts

- **Device Count**
  - Number of devices in the current group

- **Total Device Count**
  - Includes devices in this group and all subgroups

- **Group QR Code**
  - Scan to assign a device to this group

---

#### 4.3.1.1 Add Group

### Method 1: Manual Creation

#### Steps

1. Go to **Group Management**
2. Click **Add Group**
3. Enter:
   - Group name (required, ≤ 30 characters)
   - Location (optional, ≤ 100 characters)
   - Manager name (optional, ≤ 30 characters)
   - Contact info (optional, ≤ 100 characters)
   - Remarks (optional, ≤ 100 characters)
4. Click **Confirm**

---

### Method 2: Batch Creation (Excel)

#### Steps

1. Click **Batch Add**
2. Download Excel template
3. Fill in:
   - Group name
   - Group hierarchy (optional)
   - Manager
   - Contact info
   - Location
   - Remarks
4. Upload the Excel file

#### Notes

- Optionally enable:
  - **Delete all existing groups before import**

---

#### 4.3.1.2 Edit Group

#### Steps

1. Select a group
2. Click **Edit**
3. Modify:
   - Group name
   - Location
   - Manager
   - Contact info
4. Click **Submit**

---

#### 4.3.1.3 Delete Group

#### Rules

- Groups with subgroups → ❌ Cannot be deleted
- Groups with devices → Devices move to **Ungrouped**

#### Steps

1. Select a group
2. Click **Delete**
3. Confirm deletion

---

#### 4.3.1.4 Export Group

#### Steps

1. Click **Export**

#### Result

- Downloads an Excel file containing:
  - All group information

---

#### 4.3.1.5 Import Devices (Batch Binding)

Used to assign multiple devices to groups.

#### Steps

1. Click **Import Devices**
2. Download Excel template
3. Fill in:
   - Device SN
   - Target group name
4. Upload the file
5. Click **Confirm**

---

### Rules

- Only devices in **Ungrouped** can be assigned
- Devices already in groups → ❌ Cannot be reassigned via batch

---

### Common Import Status

- **Ungrouped**
  - Device can be assigned

- **Grouped**
  - Device already belongs to another group

- **Not Existing**
  - Device SN not found

- **Duplicate**
  - SN already exists in template

---

#### 4.3.1.6 Bound Devices (Manual Binding)

Used to manually assign devices to a group.

#### Steps

1. Select a group
2. Click **Bound Devices**
3. Enter device SN
4. Click **Add**
5. Click **Submit**

---

### Notes

- Only **Ungrouped** devices can be bound

---

#### 4.3.1.7 Bind Device (Search & View)

#### Function

View all devices bound to the account.

#### Steps

1. Click **Bind Device**
2. Search by:
   - SN
   - Device model
3. Click **Query**

#### Displayed Info

- SN
- Device model
- Group name
- Activation time
- Delivery time

---

#### 4.3.1.8 Listing Applications

#### Function

View all applications available under the account.

#### Steps

1. Click **Listing Applications**
2. Search by app name

#### Displayed Info

- App name
- Version
- Package name
- Size
- Listing time

---

#### 4.3.1.9 Deploy Applications (Group View)

#### Function

View applications deployed to a group.

#### Steps

1. Click **Deploy Applications**
2. Search by app name

#### Displayed Info

- Deployment rule name
- App name
- Version
- Package name
- Push time

---

## Notes

- All devices start in **Ungrouped**
- Group structure affects app visibility and deployment
- Batch operations use Excel templates
- Device assignment is restricted to ungrouped devices

---

## Related Terms

- group management
- device grouping
- batch import
- device binding
- ungrouped devices
- group export
- device assignment
- application deployment

---

## 4.4 Remote Management

The Remote Management module is used for centralized device control, monitoring, and maintenance.

## Main functions

- Remote Management
- Configuration Deployment
- Log Management
- Remote Log
- Device Restore
- Application Management
- Location Management
- Device Configuration
- Remote Desktop

## Function overview

### Remote Management

- View device information remotely
- Perform batch operations
- Manage multiple devices at the same time

### Configuration Deployment

- Remotely configure device system settings
- Remotely configure network settings
- Supports batch push and policy deployment

#### Log Management

- Extract:
  - System logs
  - UMS logs
  - Specified files
- Supports export

### Remote Log

- View operation history
- View execution type and timestamp of remote tasks

#### Device Restore

- Clear screen lock password remotely
- Perform remote factory reset

#### Application Management

- Remotely install applications
- Remotely update applications
- Supports application whitelist management

#### Location Management

- View device geographic location
- Used for asset tracking and loss prevention

### Device Configuration

- Configure device power settings
- Configure traffic/data settings
- Can be applied by group

#### Remote Desktop

- Provides graphical remote control of device desktop
- Suitable for troubleshooting and remote support

---

### 4.4.1 Remote Management

## Access path

1. Go to:
   **Remote Management → Remote Management**

2. View all devices under the current account

## Device list information

The page displays:

- Total devices
- Online devices
- Device SN
- Device type
- Group name
- Online / offline status
- Network status
- Battery level
- Permissions
- Remarks

## Device status note

In **Remote Management → Device Configuration**:

- If **Push Settings = Yes**
  - Device status shows actual value:
    - Online
    - Offline

- If **Push Settings = No**
  - Device status shows:
    - NA

## View device details

### Steps

1. Click **Device Information**
2. View:
   - Native/system info
   - Hardware info
   - Network status
   - Application details

## Edit device remarks

1. Open device details
2. Click **Edit Remarks**
3. Update remark content

---

## Batch Manage (by group)

Used to perform operations on all devices in selected groups.

### Supported actions

- Freeze Device
- Unfreeze Device
- Move To
- Uninstall Applications
- File Distribution
- Push Message
- Extract Device Log
- Shutdown
- Restart
- Export Device Info

### Steps

1. Click **Batch Manage**
2. Select operation type
3. Select target group(s)
4. Click **Next**
5. Fill in required operation details
6. Submit task

### Notes

- Execution progress can be viewed in:
  **Remote Management → Remote Log**
- Extracted device logs must also be downloaded from:
  **Remote Log**

---

## Import Notes

Used to batch import device remarks.

### Steps

1. Click **Import Notes**
2. Download remark template
3. Fill in:
   - Device SN
   - Remark content
4. Upload the completed file
5. After successful import, remarks appear in the **Remarks** column

---

## Batch Operations (by selected devices)

Used to perform actions on selected devices instead of an entire group.

### Supported actions

- Freeze Device
- Unfreeze Device
- Move To
- Uninstall Applications
- File Distribution
- Push Message
- Extract Device Log
- Shutdown
- Restart
- Device Ring

### Steps

1. Select **All Devices** or a specific group
2. Check one or more devices
3. Click **Batch Operations**
4. Select the desired action
5. Fill in required information
6. Click **Confirm**

### Notes

- Execution progress can be viewed in:
  **Remote Management → Remote Log**
- Extracted logs must be downloaded from:
  **Remote Log**

---

## Operation Details

### Freeze / Unfreeze Device

Used to disable or enable device usage remotely.

#### Notes

- This function requires authorization
- If needed, contact sales or technical support to request access from the UMS team

#### Behavior

- Freeze:
  - Device receives disable command
  - Device enters lock screen
  - Device functions become unavailable

- Unfreeze:
  - Device receives enable command
  - Device returns to normal usable state

- Disable notification message can be customized during push

---

### Move To

Used to move devices to another group.

#### Two usage modes

- Move selected devices:
  - Use **Batch Operations**

- Move all devices in a group:
  - Use **Batch Manage → Move To**

---

### Uninstall Applications

Used to uninstall third-party applications remotely.

#### Methods

1. **Uninstall by App Name**
   - Select app name
   - Device uninstalls all matching apps

2. **Uninstall by Package Name**
   - Enter package name
   - Device uninstalls the matching app

---

### File Distribution

Used to distribute files to a target path on the device.

#### Rules

- Maximum file size: **100MB**

#### Steps

1. Select **File Distribution**
2. Enter target path
3. Choose file delivery rules
4. Click **Confirm**

#### Options

- **Target Path**
  - Specifies where the file should be stored
  - If folder does not exist, it will be created automatically

- **Cover the Original File**
  - Checked:
    - Existing file with same name will be overwritten
  - Not checked:
    - Existing file will be kept
    - New file downloads only if same-name file does not exist

- **Remind after successful download**
  - Checked:
    - Device shows notification after download
  - Not checked:
    - Download happens silently

---

### Push Message

Used to send a message to terminal devices.

#### Steps

1. Enter message content
2. Click **Confirm**

#### Device behavior

- Device receives notification:
  - "A pushed message has been received. View it?"
- User can view immediately or later

#### Rules

- Maximum message length: **1000 characters**

---

### Extract Device Log

Used to remotely extract device system logs.

#### Behavior

- Device receives command
- Device uploads logs
- Logs must be downloaded from:
  **Remote Log**

---

### Shutdown / Restart

Used to remotely power off or reboot the device.

#### Behavior

- Device executes shutdown or restart after receiving command

---

### Device Ring

Used to remotely ring a device for locating it nearby.

#### Behavior

- Device rings at maximum volume
- Ringing stops only after:
  - Shutdown
  - Restart

---

### 4.4.2 Configuration Deployment

Configuration Deployment is used to remotely push configuration rules to devices.

---

#### 4.4.2.1 WIFI Settings

Used to create and push WIFI connection rules.

### Access path

1. Go to:
   **Remote Control / Remote Setting → WIFI Settings**

---

### Add WIFI deployment rule

#### Steps

1. Click **Add**
2. Enter:
   - SSID
   - Security type
   - Password
3. Click **Confirm**

#### Result

- Rule is created
- Initial status:
  - **Not Pushed**

#### Notes

- If **Hidden Network** is enabled:
  - Device can auto-connect to hidden WIFI within range
- The previous **Only allow this WIFI** option has been removed
- WIFI display on device is now controlled by **WIFI Whitelist**

---

### Push WIFI deployment rule

#### Method 1: Group Push

1. Click **Push**
2. Select one or more groups
3. Click **Next**

#### Result

- Rule status becomes:
  - **Pushed**
- Initial progress:
  - **0**

#### Progress meaning

- Progress = successful devices / total pushed devices
- Progress increases when devices connect to the target SSID

---

#### Method 2: SN Push

1. Click **Push**
2. Add device SN:
   - Single SN manually
   - Multiple SNs via template import
3. Click **Publish**

#### Result

- Rule status becomes:
  - **Pushed**
- Progress starts from:
  - **0 / pushed device count**

---

### Notes on WIFI push

- If a pushed group is later removed from the rule:
  - Devices disconnect from pushed WIFI
  - WIFI deployment data is deleted
- Devices moved into the group after push:
  - Will **not** automatically execute previous WIFI deployment

---

### Edit WIFI deployment rule

#### Steps

1. Click **Edit**
2. Modify:
   - Policy name
   - SSID
   - Security
   - Password
   - Other rule content
3. Save changes

#### Result

- Rule is pushed again
- Progress resets to **0**

---

### View WIFI deployment record

#### Steps

1. Click **Record**
2. View deployment history
3. Click **View Push Content** to see rule details

---

### Delete WIFI deployment rule

#### Steps

1. Click **Delete**

#### Result

- Rule is removed from list
- Devices disconnect from that SSID
- Previous WIFI deployment data is deleted

---

#### 4.4.2.2 Function Settings

Used to disable selected device functions remotely.

### Access path

1. Go to:
   **Remote Setting → Function Settings**

---

### Add function setting rule

#### Steps

1. Click **Add**
2. Enter rule name
   - Default: **my function setting**
3. For each function item that should be disabled:
   - Select **Yes**
4. Click **Add**

#### Result

- Rule is created
- Initial status:
  - **Not Pushed**

#### Notes

- Rule name cannot be duplicated
- If multiple function setting rules are pushed to the same group:
  - Only the latest rule takes effect
  - Earlier rules are marked as completed

---

### Push function setting rule

#### Method 1: Group Push

1. Click **Push**
2. Select target group
3. Click **OK**

#### Result

- Rule status becomes:
  - **Pushed**
- Progress starts at:
  - **0 / total devices**

#### Device behavior

- Device receives rule
- Selected functions are disabled

---

#### Method 2: SN Push

1. Click **Push**
2. Add device SN:
   - Single SN manually
   - Multiple SNs via template import
3. Click **Publish**

#### Result

- Rule status becomes:
  - **Pushed**
- Progress starts at:
  - **0 / pushed device count**

---

### Edit function setting rule

#### Steps

1. Click **Edit**
2. Modify:
   - Rule name
   - Disabled items
3. Save changes

#### Result

- Rule is pushed again
- Progress resets to **0**

---

### View function setting record

#### Steps

1. Click **Record**
2. View push history
3. Click **View Push Content** to see details

---

### Delete function setting rule

#### Steps

1. Click **Delete**

#### Result

- Rule is removed from list
- Device restores default function state
- Previously disabled items are no longer restricted

---

#### 4.4.2.3 WIFI Whitelist Settings

Used to restrict device WIFI list display to approved SSIDs only.

### Access path

1. Go to:
   **Remote Setting → WIFI Whitelist Setting**

---

### Add WIFI whitelist rule

#### Steps

1. Click **Add**
2. Enter rule name
   - Default: **My WIFI whitelist**
3. Select target group
   - Only one group can be selected
4. Add whitelist SSIDs:
   - Use SSIDs already pushed in WIFI configuration for that group
   - Or manually enter SSIDs
5. Click **Add**

#### Result

- Rule is created
- Initial status:
  - **Not Pushed**

#### Notes

- Rule name cannot be duplicated
- One rule corresponds to one group
- Group WIFI configuration SSIDs can be displayed as selectable whitelist items

---

### Push WIFI whitelist rule

#### Steps

1. Click **Push**
2. Confirm push

#### Result

- Rule status becomes:
  - **Pushed**
- Progress starts at:
  - **0 / total devices**

#### Device behavior

- Device shows only approved whitelist WIFI on WIFI list page

---

### Edit WIFI whitelist rule

#### Steps

1. Click **Edit**
2. Modify:
   - Rule name
   - Manually added whitelist SSIDs
3. Save changes

#### Result

- Rule is pushed again
- Progress resets to **0**

#### Additional note

- Click **View More** to check SSIDs inherited from group WIFI configuration
- These inherited SSIDs cannot be edited here

---

### View WIFI whitelist record

#### Steps

1. Click **Record**
2. View push history
3. Click **View Push Content** to see details

---

### Delete WIFI whitelist rule

#### Steps

1. Click **Delete**

#### Result

- Rule is removed from list
- Device returns to showing all detected WIFI networks

---

#### 4.4.2.4 APN Settings

Used to remotely configure APN and connect devices to the pushed APN.

### Access path

1. Go to:
   **Remote Setting → APN Settings**

---

### Add APN setting rule

#### Steps

1. Click **Add**
2. Enter rule information:
   - Rule name
   - APN name
   - APN
   - MCC
   - MNC
   - Proxy
   - Port
   - Server
   - MMSC
   - MMS proxy
   - MMS port
   - Authentication type
   - APN type
   - APN protocol
   - Other fields as needed
3. Click **OK**

#### Result

- Rule is created
- Initial status:
  - **Not Pushed**

#### Notes

- Default rule name:
  - **My APN Rule**
- Rule name cannot be duplicated
- If multiple APN rules are pushed to the same group:
  - Multiple APNs are saved
  - Device connects to the **latest executed APN**

---

### Push APN setting rule

#### Method 1: Group Push

1. Click **Push**
2. Select target group
3. Click **OK**

#### Result

- Rule status becomes:
  - **Pushed**
- Progress starts at:
  - **0**

#### Device behavior

- Device saves pushed APN
- Device connects to latest pushed APN

---

#### Method 2: SN Push

1. Click **Push**
2. Add SN manually or via template import
3. Click **Publish**

#### Result

- Rule status becomes:
  - **Pushed**
- Progress starts at:
  - **0**

#### Device behavior

- Device saves pushed APN
- Device connects to latest pushed APN

---

### Edit APN setting rule

#### Steps

1. Click **Edit**
2. Modify:
   - Rule name
   - APN fields
   - Other input items
3. Save changes

#### Result

- Rule is pushed again
- Progress resets to **0**

---

### View APN setting record

#### Steps

1. Click **Record**
2. View push history
3. Click **View Push Content** to see details

---

### Delete APN setting rule

#### Steps

1. Click **Delete**

#### Result

- Rule is removed from list
- Device deletes APN pushed by this rule
- Device restores default APN connection

#### Notes

- Deleting one APN rule does **not** delete other APNs pushed earlier

---

#### 4.4.2.5 Send Script

Used to remotely trigger app launch or intent execution on devices.

### Access path

1. Go to:
   **Remote Setting → Send Script**

---

### Add send script rule

#### Steps

1. Click **Add**
2. Enter:
   - Rule name
   - Execute Script type
   - Action or app information
   - Optional script content
3. Click **Save**

#### Execute Script options

- **Start APP**
- **Run Intent**

#### Supported inputs

For **Start APP**:

- Action
- Or:
  - Application package name
  - Application class name

For **Run Intent**:

- Action is required

#### Notes

- Rule name cannot be duplicated
- The device can only start the app if:
  - Action is provided
  - Or package name + class name are correctly provided
- For intent execution:
  - The target app must register the corresponding broadcast/action
- Script content supports typed key-value pairs

#### Example parameter types

- int
- Boolean
- String
- float
- long

#### Parameter behavior

- Even if script content is empty, the program can still read parameters
- If no matching parameter exists, default values are used

---

### Push send script rule

#### Method 1: Group Push

1. Click **Push**
2. Select target group
3. Click **OK**

#### Result

- Rule status becomes:
  - **Pushed**
- Progress starts at:
  - **0 / total devices**

#### Device behavior

- Device receives instruction
- Device executes the corresponding startup program or intent

---

#### Method 2: SN Push

The source text in this section appears mixed with APN content, but the intended pattern is consistent with other remote-setting modules.

#### Recommended interpretation

1. Click **Push**
2. Add SN manually or via template import
3. Click **Publish**

#### Expected result

- Rule status becomes:
  - **Pushed**
- Progress starts at:
  - **0 / pushed device count**
- Target devices execute the send script rule

---

### Edit send script rule

#### Steps

1. Click **Edit**
2. Modify:
   - Rule name
   - Execute Script type
   - Action
   - Other inputs
3. Save changes

#### Result

- Rule is pushed again
- Progress resets to **0**

---

### View send script record

#### Steps

1. Click **Record**
2. View push history
3. Click **View Push Content** to see details

---

### Delete send script rule

#### Steps

1. Click **Delete**

#### Result

- Rule is removed from list
- Device receives delete instruction
- Previously pushed script content remains reflected on device page
- Device UI will not automatically revert
- Manual return to Android default desktop may be required

---

# Notes

- Remote operations often require devices to be online
- Many operations provide progress tracking
- Execution history is typically available in **Remote Log** or **Record**
- Editing a rule usually triggers a re-push and resets progress to **0**
- Several modules support both:
  - Group push
  - SN push

---

# Related Terms

- remote management
- batch operation
- freeze device
- file distribution
- push message
- device ring
- WIFI deployment
- WIFI whitelist
- APN settings
- function settings
- send script
- remote log

---

## 4.4 Remote Management (Continued)

---

### 4.4.3 Log Management

Used to remotely extract logs or files from devices.

### Steps

1. Go to:
   **Remote Management → Log Management**

2. Click **New Log Task**

3. Select:
   - Target devices (all devices or specific group)

4. Choose log type

5. Click **OK**

---

### Log Types

#### 1. Extract UMS Log

- Default option
- Extracts logs from: /uhome/log
- Logs are uploaded to:
  **Log Management list**

---

#### 2. Extract System Log

##### Steps

1. Select **System Log**
2. Set:

- Time range
- Duration
- File rules

3. Click **OK**

##### Behavior

- Enables system logging remotely
- Logs generated within the period are uploaded automatically

---

#### 3. Extract Specified File

##### Steps

1. Select **Specified File**
2. Enter:

- Target directory path

3. Click **OK**

##### Notes

- If path does not exist or is empty:
- Status = **Execution Failed**
- Message = **File does not exist**

---

### 4.4.4 Remote Log

Used to view execution records of remote operations.

### Steps

1. Go to:
   **Remote Management → Remote Record**

2. Filter by:

- Device SN
- Operation type
- Time range

3. Click **Query**

---

### Features

- View:
- Operation type
- Execution time
- Progress status

- Click **Details**
- View execution status per device

- Click **View Log**
- Download extracted logs

---

### 4.4.5 Device Restore

Used to reset device state remotely.

### Access

**Remote Management → Device Restore**

---

### Functions

#### 1. Clear Lock Screen Password

- Removes device lock password
- Device switches to:
- Slide-to-unlock

---

#### 2. Restore Factory Settings

- Resets device to factory state

##### Warning

- All apps and data will be deleted
- Use with caution

---

### 4.4.6 Application Management

Used to manage application deployment and control app execution.

---

#### 4.4.6.1 Application Deployment

### Steps to Create Policy

1. Go to:
   **Remote Management → Application Management → Application Deployment**

2. Click **Add**

3. Enter:

- Policy name
- Application(s)
- Deployment method
- Deployment time
- Default launch behavior

4. Click **OK**

---

### Configuration Options

#### 1. Application Selection

- Choose:
- Deploy App
- Other Versions
- Multiple apps can be added

---

#### 2. Deployment Method

- **Silent Installation**
- App installs automatically

- **Download Notification**
- Device prompts user before installation

---

#### 3. Deployment Time

- **Deploy Now**
- **Deploy on the Hour**

---

#### 4. Default Launch

- **Yes**
- App launches automatically after install

- **No**
- User must launch manually

---

### Push Deployment Policy

#### Method 1: Group Push

1. Click **Push**
2. Select group(s)
3. Click **Next**

##### Progress format

Unfinished / Completed / Failed / Total
Example: 30 / 20 / 50 / 100

---

#### Method 2: SN Push

1. Click **Push**
2. Add SN:
   - Manual input
   - Batch import
3. Click **Publish**

---

### Important Rules

- Higher version overrides lower version
- Same app with multiple rules:
  - Device executes highest version only
- Duplicate rules are prevented
- Always include version info in rule name

---

### Edit Policy

1. Click **Edit**
2. Modify configuration
3. Save

#### Result

- Policy re-pushed
- Progress resets to **0**

---

### View Records

- Click **Record**
- Click **Check Push Content** for details

---

### Execution Progress

#### Status Types

- **Unfinished**
  - Not yet executed

- **Completed**
  - Successfully executed

- **Terminated**
  - Reasons:
    - Same version already installed
    - Higher version already installed
    - Installation failed

---

### Delete Policy

- Click **Delete**

#### Result

- Policy removed
- Remaining tasks are terminated

---

#### 4.4.6.2 Application Whitelist

Controls which apps are allowed on devices.

### ⚠️ Important

- Non-whitelisted apps will be:
  - Automatically uninstalled

---

### Add Whitelist Rule

#### Steps

1. Click **Add**
2. Enter:
   - Rule name
   - Application name
   - Package name
3. Add multiple apps if needed
4. Click **Confirm**

---

### Notes

- Must include:
  - Apps from deployment
  - Apps from custom launcher
- Otherwise:
  - Those apps cannot be installed

- One group = one whitelist rule only

---

### Push Whitelist

1. Click **Push**
2. Confirm warning

#### Device behavior

- Only whitelist apps can run/install
- Other apps will be removed

---

### Edit Whitelist

- Modify:
  - Rule name
  - App list

#### Result

- Rule re-pushed
- Progress resets to **0**

---

### Delete Whitelist

- Click **Delete**

#### Result

- Device returns to unrestricted state

---

### 4.4.7 Location Management

Used to track device location and enforce geo-fencing rules.

### Access

**Remote Management → Location Management**

---

### Set Geo-Fence

#### Steps

1. Select group
2. Set location:
   - Click map (center + radius)
   - OR input:
     - Longitude
     - Latitude
     - Radius

3. Enable fence switch

4. Add actions when out of range:
   - Disable mobile data
   - Disable device
   - Trigger device ringing

5. Enter alert email

6. Save configuration

---

### Behavior

- Device checks location periodically
- If outside fence:
  - Executes restriction rules
  - Sends alert email
  - Logs event in system

---

### 4.4.8 Device Configuration

Used to configure power and data behavior.

### Access

**Remote Management → Device Configuration**

---

### Configuration Scope

- Default configuration:
  - Applies to all groups
- Group configuration:
  - Applies to selected group only

---

### Modes

#### 1. High Precision

- Frequent location updates
- Polling: 10 minutes

---

#### 2. Balanced

- Moderate updates
- Polling: 3 hours

---

#### 3. Energy Saving

- Low frequency updates
- Polling: 24 hours

---

#### 4. Custom

- Configure:
  - Push usage
  - Polling time
  - Map mode

---

### Additional Settings

#### Log Retention

- Default: 30 days
- Logs auto-deleted after expiration

---

### Notes

- Push enabled:
  - Device reacts immediately

- Push disabled:
  - Device waits for polling interval

- Higher precision → higher power & data usage

---

### 4.4.9 Remote Desktop

Used for real-time remote control of devices.

### ⚠️ Requirement

- Requires authorization
- Contact support to enable

---

### Steps

1. Go to:
   **Remote Management → Remote Desktop**

2. Click **Start Remote**

---

### Behavior

- Device launches:
  - RemoteControl App
- Remote session starts if connection succeeds

---

### Features

- Mouse simulates touch:
  - Click
  - Swipe
  - Scroll

- Control panel includes:
  - Home
  - Back
  - Menu
  - Quick settings
  - Lock / Unlock
  - Volume up / down
  - Scroll up / down

---

## Related Terms

- log management
- remote log
- device restore
- application deployment
- application whitelist
- geo-fencing
- device configuration
- remote desktop

---

## 4.5 Stage Management

Stage Management is used to upload, publish, and apply device configuration rules to groups or specific devices.

### Main capabilities

- Upload configuration from terminal devices
- Upload exported configuration files manually
- Generate QR codes for configuration import
- Publish configuration rules to groups or specific SNs
- Delete configuration rules

---

### 4.5.1 Configure Management

### Access path

1. Go to:
   **Stage Management → Configure Management**

2. View the configuration rule list

### Function overview

After a configuration rule is uploaded and published, devices in the selected group or devices matched by SN will automatically apply the configuration.

---

#### 4.5.1.1 Upload Configuration from Terminal

Used to upload configuration directly from a terminal device through **UStage**.

#### Steps

1. On the terminal device, open **UStage**
2. Upload the device configuration to UMS
3. UMS automatically creates a configuration rule under the corresponding account
4. Check the rule in the **Configure Management** list

#### Initial status

- **Not Published**

#### Supported configuration types

- **Scanner**
  - Scanner configuration only

- **System**
  - System configuration only

- **ScannerSystem**
  - Scanner + system configuration

#### Notes

- Terminal-side operation details are documented in the **UStage terminal guide**

---

#### 4.5.1.2 Upload Configuration File

Used to upload a configuration file that was exported from UStage.

#### Steps

1. On the terminal device, use **UStage** to export the configuration file to local storage
2. Copy the exported file to a PC
3. Go to **Configure Management**
4. Upload the configuration file
5. UMS automatically creates a configuration rule

#### Initial status

- **Not Published**

#### Notes

- If the same configuration is uploaded multiple times from the same device:
  - Same configuration name → previous rule is overwritten
  - Different configuration name → a new rule is created

---

#### 4.5.1.3 Generate QR Code

Used to convert a configuration rule into a QR code for device-side import.

#### Steps

1. Select a configuration rule
2. Generate the QR code
3. View or download the generated QR code

#### QR code content

- Configuration name
- Configuration type
- Prompt message
- QR code image
- Download option

#### Use case

- Devices of the same model/type can scan the QR code to import the same configuration
- Suitable for local or offline configuration import

---

#### 4.5.1.4 Publish Configuration Rule

Used to push a configuration rule to groups or specific SNs.

---

#### Group Publish

##### Steps

1. Select a configuration rule
2. Click **Publish**
3. Choose **Group Publish**
4. Select one or more groups
5. Optionally keep subgroup association enabled
6. Choose:
   - All devices in the group
   - Or only a specific device type
7. Click **Publish**

##### Result

- Rule status changes to:
  - **Published**
- Initial progress:
  - **0 / pushed device count**

##### Device behavior

- Devices in the selected group receive the configuration rule
- Only devices of the matching type execute the configuration

##### Progress meaning

- Progress = successfully executed devices / total pushed devices

---

#### SN Publish

##### Steps

1. Select a configuration rule
2. Click **Publish**
3. Choose **SN Publish**
4. Add SNs:
   - Manually add a single SN
   - Or batch import via template
5. Click **Publish**

##### Result

- Rule status changes to:
  - **Pushed**
- Initial progress:
  - **0 / pushed device count**

##### Device behavior

- Target devices receive the configuration rule
- Only devices of the matching type execute the configuration

##### Progress meaning

- Progress = successfully executed devices / total pushed devices

---

#### 4.5.1.5 Rule Priority

#### Note

- If multiple configuration rules are pushed to the same device:
  - The **latest rule** takes effect

---

#### 4.5.1.6 Delete Configuration Rule

Used to remove a configuration rule.

#### Steps

1. In **Configure Management**, click **Delete**

#### Result

- Rule is removed from the list
- Devices that have not yet received or executed the rule will no longer execute it
- Devices in the target group will no longer detect this configuration rule

---

## Notes

- Configuration rules can come from:
  - Direct terminal upload
  - Exported configuration file upload
- Rules are created automatically after upload
- New rules start in **Not Published** status
- QR code import is useful for same-model devices
- Latest pushed configuration overrides earlier ones on the same device

---

## Related Terms

- stage management
- configure management
- configuration rule
- UStage
- scanner configuration
- system configuration
- QR code import
- group publish
- SN publish
- device configuration

---

## 4.6 Data Center

The Data Center module is used by agents to monitor device, application, location, lifecycle, and traffic information across their own account and subordinate accounts.

### Main capabilities

- View device summary information
- View company and device distribution on a map
- View installed application information
- View app usage duration
- View device delivery and activation status
- View traffic usage and rankings
- Configure traffic limit reminders
- View platform operation logs
- View intelligent battery data
- Create and export custom data reports
- Subscribe to scheduled report emails

---

### 4.6.1 Device Brief

Used to view all devices bound to the current account and subordinate accounts.

### Access path

1. Go to:
   **Data Center → Device Brief**

2. View device information list

### Displayed information

- Device quantity
- Device owner
- Location
- Device type
- SN
- First online / first activation time
- Last online / last reported time

### Query conditions

You can filter by:

- SN
- Device type
- Last activation time

### Export

- Click **Export**
- Export current query result to Excel

### Notes

If some devices are not yet bound to your UMS account, provide the following to your agent or Urovo technical support:

- Device SN
- Device type (from device Settings page)
- Account email

They can bind the device to your account.

---

### 4.6.2 Device Map

Used to view company distribution and real-time device location distribution.

### Access path

1. Go to:
   **Data Center → Device Map**

### Modes

#### 1. Company Location Distribution

Shows:

- Registered company location
- Number of devices under that company

#### 2. Device Location Distribution

Click **Switch** to change to device location mode.

Shows:

- Real-time uploaded device location
- GPS point per device

Click a map point to view:

- Device SN
- Device type
- Source account / tenant

### Query conditions

You can search by:

- Tenant name
- SN
- Device type

### Export

After switching to **Device Location Distribution** mode:

- Click **Export Device Location**
- Export the device location table

### Notes

- Company location mode shows the company address, not the live device location
- Device location mode shows real-time uploaded device location
- If a subordinate account has more than 10 devices, clustered markers may be displayed

---

### 4.6.3 Application Brief

Used to view third-party application information on all devices under the account.

### Access path

1. Go to:
   **Data Center → Application Brief**

### Export

- Click **Export**
- Export the current query result

---

### 4.6.4 App Usage Time

Used to view usage duration of installed applications across devices.

### Access path

1. Go to:
   **Data Center → App Usage Time**

### Query conditions

You can search by:

- SN
- App name
- Package name
- Time range

### Export

- Click **Export**
- Export current query result

---

### 4.6.5 Device Lifecycle

Used to view delivery and activation status of devices.

### Access path

1. Go to:
   **Data Center → Device Lifecycle**

### Displayed information

- Delivery statistics
- Activation statistics
- Device SN
- Device type
- Delivery time
- Activation time

### Query conditions

You can filter by:

- SN
- Device type
- Delivery date
- Activation date

### Export

- Click **Export**
- Export lifecycle data to Excel

---

### 4.6.6 Flow Management

Used to view mobile data consumption for devices under the account.

### Access path

1. Go to:
   **Data Center → Flow Management**

### Notes

- By default, this page shows **mobile data usage for the last week**
- WIFI traffic is **not included**

---

#### 4.6.6.1 Data Usage

Used to view overall mobile data consumption for devices.

#### Features

- Default view:
  - Total mobile data usage in the last week
- Change query date range as needed
- Switch display style:
  - Table view
  - Line chart view

#### Export

- Click **Export Report**
- Export current query result

#### Metrics

- **Total Consumption Flow**
  - Total mobile data used by all devices during the selected period

- **Daily Flow per Device**
  - Total flow / (number of devices × number of query days)

---

#### 4.6.6.2 Application Rank

Used to view application-level traffic usage for a single device.

#### Steps

1. Enter device SN
2. Select date range
3. Click **Query**

#### Displayed information

- Total traffic during the period
- Average daily traffic during the period
- Top 20 applications by traffic usage

#### Export

- Click **Export Report**
- Export current query result

#### Metrics

- **Total Traffic During the Period**
  - Total mobile data used by the queried device during the selected period

- **Average Daily Flow During the Period**
  - Total traffic / number of query days

---

#### 4.6.6.3 Group Rank

Used to view traffic usage by group.

#### Steps

1. Select one or more groups
2. Select date range
3. Click **Query**

#### Displayed information

- Average daily traffic for selected groups
- Average daily traffic per device
- Group traffic ranking from high to low

#### Export

- Click **Export Report**
- Export current query result

#### Metrics

- **Total Traffic During the Period**
  - Total mobile traffic used by all devices in the group

- **Number of Devices**
  - Total device count in the group

- **Average Daily Flow During the Period**
  - Total traffic / number of query days

- **Average Daily Flow per Device**
  - Total traffic / (number of query days × number of devices)

#### Group details

- Click **Details**
- View traffic usage of all devices under the selected group
- Export result if needed

---

#### 4.6.6.4 Limit Reminder

Used to monitor and alert on daily mobile data overuse.

#### Steps

1. Click **Limit Reminder**
2. Enter daily data limit
   - Integer from **1 to 9999**
3. Select daily report email time
4. Save settings

#### Behavior

- The system compares uploaded traffic data against the limit
- If daily usage exceeds the limit:
  - A reminder record is created
  - Warning information is logged on the page

#### Email report

- By default, no email is sent
- Daily report can be sent at:
  - **17:00 Beijing Time**
- The report collects yesterday's data and sends it by email

#### Notes

- If a device exceeds the limit multiple times on the same day:
  - Only one record is displayed for that device on that day

---

### 4.6.7 Operation Log

Used to view platform operation records.

### Access path

1. Go to:
   **Data Center → Operation Log**

### Query conditions

You can filter by:

- Operator
- Menu
- Time
- Result

---

### 4.6.8 Intelligent Health Battery

Used to view intelligent battery-related data.

### Access path

1. Go to:
   **Data Center → Intelligent Health Battery**

### Query conditions

You can filter by:

- SN
- Associated account
- Reporting time

### Export

- Click **Export**
- Export current query result to Excel

---

### 4.6.9 Data Report

Used to generate, export, and subscribe to device data reports.

### Access path

1. Go to:
   **Data Center → Data Reports**

### Main functions

- Create report rules
- View report rules
- Export report data
- Subscribe to daily report emails
- Delete report rules

---

#### 4.6.9.1 Add Data Report

Used to create a new report rule.

### Steps

1. Click **Add**
2. Enter:
   - Report name
   - Report type
   - Report content
3. Click **Confirm**

### Report name

- Required field
- Should clearly identify the rule

### Report types

- **Basic Information of the Device**
- **Device Application Information**

### Report content

#### Basic Information of the Device

- Select the required information fields directly

#### Device Application Information

- Enter:
  - Application name
  - Package name

- To add multiple applications:
  - Click **Add Application**

---

#### 4.6.9.2 View Data Report

Used to view details of an existing report rule.

### Steps

1. In the rule list, click **View**

---

#### 4.6.9.3 Export Data Report

Used to export report data by account or by SN.

### Method 1: Export by Account

#### Steps

1. Click **Export**
2. Keep export method as:
   - **Account Export**
3. Select target accounts
4. Click **OK**

#### Result

- Report is exported
- **Last Export Time** is updated

#### Download exported file

1. Go to **Export History**
2. Click **View**
3. Download the Excel report

---

### Method 2: Export by SN

#### Steps

1. Click **Export**
2. Select export method:
   - **SN**
3. Add SNs:
   - Manually
   - Or via **Download Template → Batch Import**
4. Click **OK**

#### Result

- Report is exported
- **Last Export Time** is updated

#### Download exported file

- Same process as **Account Export**

---

#### 4.6.9.4 Subscribe Data Report

Used to send report results to email on a scheduled basis.

### Steps

1. Click **Subscribe**
2. Enter subscription email address
   - Multiple emails supported
   - Separate with semicolons `;`
3. Choose subscription mode:
   - Account Subscription
   - SN Subscription
4. Click **Confirm**

### Delivery time

- Reports are sent around **4:00 PM daily**

### Notes

- If the subscribed dataset is large:
  - Report generation may take longer
  - Email delivery may be delayed

---

### Account Subscription

#### Steps

1. Click **Subscribe**
2. Enter recipient email
3. Select **Account Subscription**
4. Select target account groups
5. Click **Confirm**

---

### SN Subscription

#### Steps

1. Click **Subscribe**
2. Enter recipient email
3. Select **SN Subscription**
4. Add SNs:
   - Manually
   - Or via template import
5. Click **Confirm**

---

### Manage Subscription Status

Used to stop or resume existing subscriptions.

#### Steps

1. Open **History Subscription**
2. Click **View**
3. On the right side of the page, choose:
   - **Stop Subscription**
   - **Continue Subscription**

---

#### 4.6.9.5 Delete Data Report

Used to remove a report rule.

### Steps

1. Click **Delete**
2. Confirm deletion

### Result

- Data retrieval stops
- Subscribed report emails stop being sent

---

## Notes

- Data Center supports both on-screen analysis and Excel export
- Most modules support filtering before export
- Flow Management only counts **mobile data**, not WIFI traffic
- Data Reports support both one-time export and daily email subscription

---

## Related Terms

- data center
- device brief
- device map
- application brief
- app usage time
- device lifecycle
- flow management
- application rank
- group rank
- limit reminder
- operation log
- intelligent battery
- data report
- account export
- SN export
- report subscription

---

## 4.7 Device Manager

The Device Manager module is used to manage device ownership and account assignment.

### Main capabilities

- Distribute devices to sub-accounts
- Transfer devices to other agents
- View transfer records
- Bind devices to company accounts
- Delete bound devices
- Batch import device bindings

---

### 4.7.1 Distribute Device

Used to assign devices from the current channel to subordinate accounts.

### Access scope

This page displays device distribution information for:

- Current account
- Sub-accounts

### Displayed information

- SN
- Device type
- Sub-account
- Operation status

---

### Single Binding

Used to bind one device to a sub-account.

#### Steps

1. Select a device
2. Click **Distribute in Batches** in the operation bar
3. Select a target sub-account in the pop-up window
4. Click **Binding**

#### Result

- The device is bound to the selected sub-account

---

### Replace Sub-Account

Used to move a bound device from one sub-account to another.

#### Steps

1. Select a device that has already been bound
2. Click **Replace Sub-account**
3. Select another sub-account
4. Confirm the operation

#### Result

- The device is reassigned to the new sub-account

---

### Unbind Device

Used to remove the device from the current sub-account.

#### Steps

1. Select the bound device
2. Click **Unbind**

#### Result

- The device is returned from the sub-account

#### Notes

- After a device is successfully bound, it can detect applications under that sub-account

---

### Batch Binding

Used to bind multiple devices to a sub-account.

#### Steps

1. Click **Distribute in Batches** at the top right of the list
2. Add devices by one of the following methods:
   - Enter SN manually and click **Add**
   - Download template and import in batch
3. Review the displayed device list and status
4. Select the target sub-account from the drop-down box in the upper left
5. Confirm the binding operation

#### Result

- All valid devices are bound to the selected sub-account

---

### 4.7.2 Device Transfer

Used to transfer devices from the current agent to another agent.

### Access scope

This page displays device distribution information for the current channel only.

### Displayed information

- SN
- Device type
- Sub-account
- Operation status

---

### Single Transfer

Used to transfer one device to another agent.

#### Steps

1. Select a device
2. Click **Transfer**
3. Enter the target agent's company number in the pop-up window
4. Click **Confirm Donate**

#### Result

- The device is transferred to the target agent

---

### Batch Transfer

Used to transfer multiple devices to another agent.

#### Steps

1. Click **Transfer in Batches**
2. Add devices by one of the following methods:
   - Enter SN manually and click **Add**
   - Download template and import in batch
3. Review the displayed device list and status
4. Enter the recipient company number in the upper left
5. Click **Confirm Donate**

#### Result

- All valid devices are transferred to the target agent

---

### 4.7.3 Transfer Record

Used to view device transfer and receipt history.

### Displayed information

- Transfer records
- Receipt records
- Operation status

### Query conditions

You can search by:

- SN
- Start time
- End time
- Type

---

### Record Status

#### Unfinished

Shows transfers that have not yet been accepted.

##### Available actions

- Cancel
- Refuse

---

#### Finished

Shows completed transfer or receipt operations.

---

### 4.7.4 Device Binding

Used to bind devices directly to company accounts or remove bound devices.

### Permission note

- This function is available only to **first-level agent (company) accounts**
- This function requires authorization

If you need access, contact your sales manager or technical support and request permission from the UMS team.

---

### Single Device Binding

Used to bind one device to the agent account.

#### Steps

1. Click **Add**
2. Enter:
   - Device SN
   - Device type
   - Other required device information
3. Click **Save**

#### Result

- The device is bound to the agent account

---

### Batch Delete

Used to delete multiple bound devices.

#### Result

- Selected devices are removed from the management platform
- Deleted devices will no longer interact with the platform

---

### Batch Add

Used to bind multiple devices by template import.

#### Steps

1. Click **Batch Add**
2. Download the template
3. Fill in the required information
4. Click **Import**
5. Upload the completed template file

#### Result

- Imported devices are bound to the agent account

---

## Notes

- Device distribution is used for assigning devices to sub-accounts
- Device transfer is used for giving devices to other agents
- Transfer records help track both sent and received devices
- Device Binding is a higher-permission function for direct company-level device ownership management

---

## Related Terms

- device manager
- distribute device
- sub-account binding
- device transfer
- transfer record
- device binding
- batch binding
- batch transfer
- device ownership
- agent account

---

## 4.8 System Customization

System Customization provides account-level customization features for devices.

### Main capabilities

- Set custom boot animation
- Enable kiosk mode (single-app lock mode)
- Set default auto-start application
- Deploy custom desktop / launcher

---

### 4.8.1 Boot Animation

Used to configure the boot animation shown when a device powers on or restarts.

### Access path

1. Go to:
   **System Customization → Boot Animation**

2. View the boot animation rule list

### Function overview

After a boot animation rule is added and pushed to devices:

- The device downloads the boot animation ZIP package
- The animation is used every time the device starts or restarts

---

#### 4.8.1.1 Add Boot Animation Rule

#### Steps

1. Click **Add**
2. Enter:
   - Configuration name
   - Animation type
3. Fill in the required content
4. Click **OK**

#### Initial status

- **Not Pushed**

#### Optional setting

- **Apply to own device**
  - The current account's device detects the uploaded boot animation
  - The device downloads the boot animation
  - The animation takes effect after restart

---

### Configuration fields

#### Configuration Name

- Required
- Used as the rule name

#### Animation Type

Required. Two options are available:

##### 1. Default Animation

- Uses the default Android boot animation

##### 2. Upload Compressed Package

- Upload a custom ZIP package
- You can refer to:
  - Template file
  - Picture production rules
- Click **Select ZIP Package** to upload

#### Preview behavior

- If parsing succeeds:
  - The boot animation preview is shown
- If parsing fails:
  - A failure prompt appears

---

#### 4.8.1.2 Push Boot Animation Rule

#### Method 1: Group Push

##### Steps

1. Click **Push**
2. Select one or more groups
3. Click **Confirm**

##### Result

- Rule status changes to:
  - **Pushed**
- Initial progress:
  - **0 / total devices**

##### Device behavior

- Device receives the rule
- Device downloads the ZIP package
- Device uses the boot animation on every startup / restart

##### Progress meaning

- Progress = successfully executed devices / total pushed devices

---

#### Method 2: SN Push

##### Steps

1. Click **Push**
2. Add SNs:
   - Manually add one SN
   - Or use **Download Template → Batch Import**
3. Click **Publish**

##### Result

- Rule status changes to:
  - **Pushed**
- Initial progress:
  - **0 / total devices**

##### Device behavior

- Device receives the rule
- Device downloads the ZIP package
- Device uses the boot animation on every startup / restart

##### Progress meaning

- Progress = successfully executed devices / total pushed devices

---

#### 4.8.1.3 Edit Boot Animation Rule

#### Steps

1. Click **Edit**
2. Modify:
   - Configuration name
   - Animation type
3. Save changes

#### Result

- The rule is pushed again
- Progress resets to **0**

#### Note

- If a pushed rule is edited successfully, it is re-pushed automatically

---

#### 4.8.1.4 Record

Used to view push history of a boot animation rule.

#### Steps

1. Click **Record**
2. View the push record table
3. Click **View Push Content** to view rule details

#### Notes

- Push content in the record view cannot be edited

---

#### 4.8.1.5 Delete Boot Animation Rule

#### Steps

1. Select the rule
2. Click **Delete**
3. Confirm deletion

#### Result

- The rule is removed from the list
- Devices that have not yet received or executed the rule will not execute it

#### Important note

- If a device has already applied the boot animation:
  - The device will continue using that boot animation even after the rule is deleted

---

### 4.8.2 Kiosk Mode

Kiosk Mode locks the device to one selected application.

### Function overview

After Kiosk Mode is enabled:

- Only the selected app can be used
- Other apps and functions are blocked

### Exit method

To exit Kiosk Mode:

1. Long press the virtual **Back** button
2. Enter the correct unlock password

---

#### 4.8.2.1 Add Kiosk Mode Rule

#### Steps

1. Click **Add**
2. Enter:
   - Configuration name
   - Unlock password
   - Application to lock
3. Click **OK**

#### Initial status

- **Not Pushed**

### Configuration fields

#### Configuration Name

- Required
- Used as the rule name

#### Unlock Password

- Required
- Used to exit Kiosk Mode

#### Application Selection

- Required
- Only one application can be selected per rule
- App list comes from the Application Market:
  - Listed apps
  - Unlisted apps

#### Note

- The app must already be installed on the device for Kiosk Mode to take effect

---

#### 4.8.2.2 Push Kiosk Mode Rule

#### Method 1: Group Push

##### Steps

1. Click **Push**
2. Select group(s)
3. Click **Confirm**

##### Result

- Rule status changes to:
  - **Pushed**
- Initial progress:
  - **0 / total devices**

##### Device behavior

- Device enables Kiosk Mode for the selected application
- Non-selected apps and functions become unavailable

##### Exit behavior

- Long press virtual **Back**
- Enter correct password to exit

##### Progress meaning

- Progress = successfully executed devices / total pushed devices

---

#### Method 2: SN Push

##### Steps

1. Click **Push**
2. Add SNs:
   - Manually
   - Or via **Download Template → Batch Import**
3. Click **Publish**

##### Result

- Rule status changes to:
  - **Pushed**
- Initial progress:
  - **0 / total devices**

##### Device behavior

- Device enables Kiosk Mode for the selected application

##### Progress meaning

- Progress = successfully executed devices / total pushed devices

---

#### 4.8.2.3 Edit Kiosk Mode Rule

#### Steps

1. Click **Edit**
2. Modify:
   - Configuration name
   - Unlock password
   - Selected application
3. Save changes

#### Result

- The rule is pushed again
- Progress resets to **0**

#### Note

- If a pushed rule is edited successfully, it is re-pushed automatically

---

#### 4.8.2.4 Record

Used to view push history of a Kiosk Mode rule.

#### Steps

1. Click **Record**
2. View the push record table
3. Click **View Push Content** to view pushed content details

#### Notes

- Record content cannot be edited

---

#### 4.8.2.5 Delete Kiosk Mode Rule

#### Steps

1. Select the rule
2. Click **Delete**
3. Confirm deletion

#### Result

- The rule is removed from the list
- Devices that have not received or executed the rule will not execute it

#### Important note

- If a device has already entered screen-dominating mode:
  - Deleting the rule means the device no longer needs to keep using that mode

---

### 4.8.3 Auto-start Application

Used to set a default application that launches automatically when the device powers on or restarts.

### Function overview

After the rule takes effect:

- The selected application opens automatically on every startup / restart

---

#### 4.8.3.1 Add Default Application Rule

#### Steps

1. Click **Add**
2. Enter:
   - Configuration name
   - Application selection
3. Click **OK**

#### Initial status

- **Not Pushed**

### Configuration fields

#### Configuration Name

- Required
- Used as the rule name

#### Application Selection

- Required
- Only one app can be selected per rule
- App list includes applications in the Application Market:
  - Listed apps
  - Unlisted apps

#### Note

- The application must already be installed on the device

---

#### 4.8.3.2 Push Default Application Rule

#### Method 1: Group Push

##### Steps

1. Click **Push**
2. Select group(s)
3. Click **Confirm**

##### Result

- Rule status changes to:
  - **Pushed**
- Initial progress:
  - **0 / total devices**

##### Device behavior

- The selected app opens automatically when the device powers on or restarts

##### Progress meaning

- Progress = successfully executed devices / total pushed devices

---

#### Method 2: SN Push

##### Steps

1. Click **Push**
2. Add SNs:
   - Manually
   - Or via **Download Template → Batch Import**
3. Click **Publish**

##### Result

- Rule status changes to:
  - **Pushed**
- Initial progress:
  - **0 / total devices**

##### Device behavior

- The selected app opens automatically when the device powers on or restarts

##### Progress meaning

- Progress = successfully executed devices / total pushed devices

---

#### 4.8.3.3 Edit Default Application Rule

#### Steps

1. Click **Edit**
2. Modify:
   - Configuration name
   - Selected application
3. Save changes

#### Result

- The rule is pushed again
- Progress resets to **0**

#### Note

- If a pushed rule is edited successfully, it is re-pushed automatically

---

#### 4.8.3.4 Record

Used to view push history of a default application rule.

#### Steps

1. Click **Record**
2. View the push record table
3. Click **View Push Content** to view pushed content details

---

#### 4.8.3.5 Delete Default Application Rule

#### Steps

1. Select the rule
2. Click **Delete**
3. Confirm deletion

#### Result

- The rule is removed from the list
- Devices that have not received or executed the rule will not execute it

#### Important note

- If the device has already executed the rule:
  - The default app will no longer open automatically after future startups / restarts once the rule is deleted

---

### 4.8.4 Customized Desktop

Used to deploy a custom launcher / desktop to devices.

### Access path

1. Go to:
   **System Customization → Customized Desktop**

2. View the custom desktop rule list

### Function overview

After a custom desktop rule is added and pushed:

- The device downloads the Launcher APK
- The custom desktop takes effect

---

#### 4.8.4.1 Add Custom Desktop Rule

There are multiple ways to create a custom desktop rule.

---

#### Method 1: Desktop Type = Custom Template

##### Steps

1. Click **Add**
2. Enter rule name
   - Default: **my custom rules**
3. Upload desktop APK on the custom template page
4. Click **Add**

##### Result

- Rule is created
- Initial status:
  - **Un-pushed**

---

#### Method 2: Desktop Type = Standard Template + Configuration File Upload

##### Steps

1. Click **Add**
2. Select:
   - Desktop Type = **Standard Template**
   - Configuration Method = **Configuration File Upload**
3. Upload the configuration file
4. Click **Add**

##### Result

- Rule is created
- Initial status:
  - **Un-pushed**

---

#### Method 3: Desktop Type = Standard Template + Standard Configuration

##### Steps

1. Click **Add**
2. Select:
   - Configuration Method = **Standard Configuration**
3. Enter:
   - Desktop Name
   - Admin Password
   - Desktop App Package Name
4. Select APP Icon Size
   - Default: **conventional**
5. Click **Confirm to Add**

##### Result

- Rule is created
- Initial status:
  - **Un-pushed**

---

### Notes

- Default rule name:
  - **My Custom Desktop Rules**
- Rule name cannot be duplicated
- If multiple custom desktop rules are pushed to the same group:
  - Only the latest rule takes effect

---

#### 4.8.4.2 Push Custom Desktop Rule

#### Method 1: Group Push

##### Steps

1. Click **Push**
2. Select group(s)
3. Click **OK**

##### Result

- Rule status changes to:
  - **Pushed**
- Progress starts from:
  - **0%**

##### Device behavior

- Device receives the custom desktop instruction
- Device applies the corresponding custom desktop configuration

##### Progress meaning

- Progress = successfully executed devices / total pushed devices

---

#### Method 2: SN Push

##### Steps

1. Click **Push**
2. Add SNs:
   - Manually
   - Or via **Download Template → Batch Import**
3. Click **Publish**

##### Result

- Rule status changes to:
  - **Pushed**
- Initial progress:
  - **0**

##### Device behavior

- Device receives the custom desktop instruction
- Device applies the corresponding custom desktop configuration

##### Progress meaning

- Progress = successfully executed devices / total pushed devices
- If all target devices succeed:
  - Progress = **100%**

---

#### 4.8.4.3 Edit Custom Desktop Rule

#### Steps

1. Click **Edit**
2. Modify:
   - Rule name
   - Desktop APK
   - Other custom desktop settings
3. Save changes

#### Result

- The rule is pushed again
- Progress resets to **0**

---

#### 4.8.4.4 Record

Used to view push history of a custom desktop rule.

#### Steps

1. Click **Record**
2. View the push record table
3. Click **View Push Content** to view detailed rule content

---

#### 4.8.4.5 Delete Custom Desktop Rule

#### Steps

1. Click **Delete**
2. Confirm deletion

#### Result

- The rule is removed from the list
- A delete instruction is sent to devices
- The downloaded desktop APK is removed
- The device returns to the default desktop rule of the application

#### Device-side behavior

- Press the **Home** button on the device
- Exit the Launcher desktop
- Return to the Android default desktop

---

## Notes

- Most customization rules support:
  - Group push
  - SN push
  - Edit
  - Record
  - Delete
- Editing an already-pushed rule causes the rule to be re-pushed
- Many customization features require the target application to already be installed on the device
- Deleting a rule does not always immediately reverse behavior on devices that already executed it

---

## Related Terms

- system customization
- boot animation
- kiosk mode
- dominance mode
- auto-start app
- default application
- customized desktop
- launcher APK
- group push
- SN push

---

## 4.9 Account Center

The Account Center module is used to view company information, update personal profile settings, and manage operator permissions.

### Main capabilities

- View registered company information
- Change personal password
- Update personal name
- Change bound email address
- Change bound phone number
- Add operators
- Modify operator permissions
- Transfer administrator authority

---

### 4.9.1 Company Information

Used to view the company information submitted during registration.

### Displayed information

- Registered company information
- Company ID / Company Number

### Notes

- Company information is **read-only**
- Registered company information can be viewed but cannot be modified

---

### 4.9.2 Personal Information

Used to manage personal account settings.

### Available actions

- Change password
- Change name
- Change bound email
- Change bound phone number

---

#### 4.9.2.1 Change Password

#### Steps

1. Enter:
   - Current password
   - New password
   - Confirm new password
2. Click **Save**

#### Password requirements

- At least **8 characters**
- Must include:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Special characters

---

#### 4.9.2.2 Change Name

#### Steps

1. Enter the new name
2. Click **Save**

---

#### 4.9.2.3 Change Bound Email

#### Steps

1. Enter:
   - Current password
   - New email address
2. Click **Send Verification Code**
3. Check the new email inbox
4. Enter the verification code
5. Click **Save**

#### Result

- The bound email is updated successfully
- The current session is logged out automatically
- Next login must use the **new email address**

---

#### 4.9.2.4 Change Bound Phone Number

#### Steps

1. Enter:
   - Current password
   - New phone number
2. Click **Save**

#### Result

- The new phone number is bound to the account

---

### 4.9.3 Authorization Control

Used to manage operators, permissions, and administrator authority.

### Displayed information

- Operator email
- Role
- Permissions

---

### Search Operator

#### Steps

1. Enter:
   - Merchant name
   - Or abbreviation
2. Click **Search**

#### Result

- Matching operator information is displayed

---

### Add Operator

#### Steps

1. Click **Add Operator**
2. Enter:
   - Email address
   - Name
3. Click **Confirm**

#### Result

- The system sends an email to the operator
- The email contains the initial login password
- After first login, the operator status changes to:
  - **Activated**

---

### Modify Operator Permissions

#### Steps

1. In the **Permissions** column, click the permission entry
2. In the permission selection pop-up window:
   - Check the required permissions
3. Save the changes

#### Result

- The operator receives the selected permissions after login

---

### Transfer Administrator Authority

Used to transfer the administrator role to another operator.

#### Steps

1. Click **Transfer**
2. Select the target operator
3. Enter the password of the currently logged-in administrator
4. Confirm the transfer

#### Result

- The selected operator becomes the new administrator
- The original administrator becomes an operator

#### Notes

- The new administrator receives full administrator authority
- The original administrator retains operator access
- Permissions can still be adjusted later

---

## Notes

- Company information is view-only
- Changing the bound email forces logout and requires login with the new email
- Operator accounts are created through email invitation
- Administrator authority transfer changes account roles immediately

---

## Related Terms

- account center
- company information
- personal information
- password change
- email binding
- phone binding
- authorization control
- operator management
- permission management
- administrator transfer

---

## 4.10 Sub-account

The Sub-account module is used to manage hierarchical accounts under a parent account.

### Main capabilities

- View all sub-accounts
- Create controlled or independent sub-accounts
- Configure app distribution strategy for sub-accounts
- Transfer sub-account types
- Manage sub-account operations
- Review newly registered sub-merchants

---

### 4.10.1 Sub-account Overview

### Access path

1. Go to:
   **Sub-account → Sub-account Brief**

### Displayed information

- All sub-accounts under the current account
- Includes:
  - Controlled sub-accounts
  - Independent sub-accounts

---

### Sub-account Types

#### 1. Controlled Sub-account

A controlled sub-account is fully managed by the parent account.

##### Characteristics

- No independent operators by default
- Parent account assigns operators
- Cannot upload applications
- App source comes from the parent account
- Limited permissions unless administrator rights are assigned

---

#### App Market Configuration Modes (Controlled Sub-account)

There are 4 ways to configure the app market for controlled sub-accounts:

##### a. Independent App Market

- Sub-account can freely select apps from the app market
- No restrictions from the parent account

---

##### b. Clone Parent Account Apps

- Sub-account app list is identical to the parent account
- Includes:
  - Same applications
  - Same auto-install settings
- Sub-account cannot manage or modify the app list
- App list is **read-only**

---

##### c. Select from Parent App Market

- Sub-account can only select apps available in the parent account’s app market

---

##### d. Parent-controlled App List

- Parent account fully defines available apps
- Sub-account cannot modify app list
- App list is **read-only**

---

#### 2. Independent Sub-account

An independent sub-account operates independently.

##### Characteristics

- Has its own operators
- Can:
  - Upload applications
  - Publish apps
  - Remove apps
- Full app management capability

---

#### 4.10.1.1 Add Sub-account

---

#### Add Controlled Sub-account

##### Steps

1. Click **Add Controlled Sub-account**
2. Enter:
   - Name
   - Abbreviation
   - Contact information
3. Click **Save**

##### Optional step

- Click **To Manage** to:
  - Add operators
  - Enable login access for the sub-account

---

#### Add Independent Sub-account

##### Steps

1. Click **Add Independent Sub-account**
2. Enter:
   - Name
   - Abbreviation
   - Contact information
   - Admin email
3. Click **Save**

##### Activation process

- System sends a **temporary password** to the email
- Login with the temporary password
- Set a new password
- Account is activated successfully

---

#### 4.10.1.2 Change App Market Mode (Controlled Sub-account)

#### Steps

1. Select a controlled sub-account
2. Click **Settings**
3. Choose one of the 4 app market modes
4. Click **Submit**

#### Result

- App market behavior is updated immediately

---

#### 4.10.1.3 Transfer Controlled → Independent Sub-account

#### Steps

1. Select a controlled sub-account
2. Click **Set**
3. Click **Transfer**
4. Enter admin email
5. Receive dynamic password via email
6. Login and set a new password

#### Result

- Sub-account becomes an **independent sub-account**

---

#### 4.10.1.4 Manage Sub-account

#### Steps

1. Select a controlled sub-account
2. Click **To Manage**

#### Result

- Enter sub-account environment
- Perform operations such as:
  - Device management
  - Application management

#### Exit

- Click **Return to Parent Account**

---

### Notes

- Sub-account functions are mostly the same as parent account, except:
  - No **Device Ownership** module
  - No **Sub-account management** module
- Available modules:
  - App Store
  - Remote Management
  - Data Center
  - Account Center

---

### Sub-account Hierarchy Rules

- Supports up to **5 levels**
- First-level (parent) account can create sub-accounts
- Sub-accounts can create their own sub-accounts (until level 5)
- Level 5 sub-accounts cannot create further sub-accounts
- Sub-account permissions are generally similar to parent account

---

### 4.10.2 Review Sub-merchants

Used to review newly registered independent sub-accounts.

### Access path

1. Go to:
   **Sub-account → Review Sub-merchants**

---

### Function overview

- View all registered sub-merchants
- Approve or reject registration requests

---

### Review Results

#### 1. Audit Passed

- Sub-account can:
  - Access all platform features
  - Use the system normally

---

#### 2. Review Failed

##### Steps

1. Enter rejection reason
2. Submit feedback

##### Result

- Reason is sent to registered email
- Sub-account:
  - Cannot use platform features
  - Must resubmit company information for review

---

## Notes

- Controlled sub-accounts are centrally managed by parent account
- Independent sub-accounts operate autonomously
- App distribution behavior depends on selected app market mode
- Sub-account hierarchy supports multi-level management (up to 5 levels)
- Review process is required for independent sub-account activation

---

## Related Terms

- sub-account
- controlled sub-account
- independent sub-account
- app market control
- account hierarchy
- sub-merchant review
- operator assignment
- account delegation
- device management hierarchy