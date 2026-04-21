# UMS QA Index

Retrieval-oriented QA index converted from the UMS source manual.

### Account Registration

#### What is this
Create a UMS account with email and activate it through email verification.

#### When to use
Use this when a new customer or operator needs first-time access to UMS.

#### Related user questions
- how to register ums account
- ums sign up steps
- create new account in ums
- i cant register ums why
- where is register button
- email activation for ums account
- new user onboarding ums
- how to open ums account

#### Entry Path
- Login page: `https://uhomeov.urovo.com/customerui/login`

#### Steps
1. Open the login page.
2. Click **Sign Up**.
3. Enter email and password.
4. Click **Register Now**.
5. Open the activation email and click **Activate account**.
6. Log in and submit company information for approval.

#### Result
- Account is created after email activation.
- Company profile enters approval flow.

#### Rules
- Email activation is required before login.
- Company approval is required before full platform access.

#### Related terms
- account registration
- sign up
- email activation
- company approval

### Account Login

#### What is this
Sign in to UMS with account credentials and verification code.

#### When to use
Use this for daily platform access after account activation and approval.

#### Related user questions
- how to login ums
- ums login with verification code
- why ums login failed
- login page for ums
- cant login after register
- where to enter verification code
- ums account sign in
- login blocked in ums

#### Entry Path
- Login page: `https://uhomeov.urovo.com/customerui/login`

#### Steps
1. Open the login page.
2. Enter registered email and password.
3. Enter the verification code.
4. Click **Login**.

#### Result
- User enters UMS home page.

#### Rules
- Verification code is mandatory.
- Login is available only after account activation and company approval.

#### Related terms
- login
- verification code
- sign in

### Dashboard Overview

#### What is this
Dashboard shows device totals, abnormal status, warning logs, map distribution, and flow usage.

#### When to use
Use this for daily monitoring of fleet health and quick anomaly checks.

#### Related user questions
- what is dashboard in ums
- how to check device health ums
- where to see abnormal devices
- warning log on dashboard
- dashboard map and flow usage
- monitor all devices in ums
- dashboard not updating
- how to open dashboard

#### Entry Path
- Dashboard

#### Steps
1. Log in to UMS.
2. Click **Dashboard** from the left menu.
3. Review **Online/Total Devices** and **Added Within 7 Days**.
4. Check abnormal cards and warning logs.
5. Open map and flow cards for distribution and usage view.

#### Result
- Current fleet status is visible from one page.
- Abnormal device counts and warning data are available for drill-down.

#### Rules
- Dashboard data is dynamic and updates on refresh.

#### Related terms
- dashboard
- device abnormal status
- warning log
- flow usage

### Change Profile Picture

#### What is this
Update user avatar image from account menu.

#### When to use
Use this when account profile image needs to be changed.

#### Related user questions
- change avatar in ums
- how to upload profile picture
- avatar upload failed ums
- image format for avatar
- max avatar size ums
- update account photo
- where is change picture
- profile image not accepted

#### Entry Path
- Dashboard account menu → Change Picture

#### Steps
1. Click account icon at top-right.
2. Select **Change Picture**.
3. Click **Avatar Upload**.
4. Select an image file and upload.

#### Result
- New avatar is applied to account profile.

#### Rules
- Supported format: JPG/JPEG.
- Maximum file size: 500KB.

#### Related terms
- avatar
- profile picture
- account menu

### About Us / FAQ / Privacy

#### What is this
Account menu page that includes FAQ, compatibility information, and privacy policy.

#### When to use
Use this when users need help docs, supported model info, or policy documents.

#### Related user questions
- where is faq in ums
- device compatibility list ums
- privacy policy in ums
- terms of service ums
- how to open about us
- supported device models
- faq search in ums
- policy page not found

#### Entry Path
- Dashboard account menu → About Us

#### Steps
1. Click account icon at top-right.
2. Select **About Us**.
3. Open **Common Problem (FAQ)** for issue search.
4. Open **Adaptation Situation** to view supported models.
5. Open **Privacy Policy** for terms and privacy content.

#### Result
- User can access product help and policy references.

#### Related terms
- about us
- faq
- adaptation situation
- privacy policy

### App Upload

#### What is this
Upload APK and create app metadata in App Store.

#### When to use
Use this when publishing a new application to your channel app library.

#### Related user questions
- how to upload apk to ums
- app upload in app store
- add app package in ums
- upload apk failed
- where to set app compatibility
- app signature field ums
- create app record ums
- publish new app version base

#### Entry Path
- App Store → App Upload

#### Steps
1. Go to **App Store → App Upload**.
2. Click **Upload**.
3. Select or drag APK file.
4. Fill app fields: name, description, catalog, compatibility, signature, producer, version description.

#### Options
- **Device Type / Compatibility**: controls which devices can detect/install the app.
- **Signature / Signature Remark**: package signature and explanation.
- **Language / Producer / Remarks**: display and vendor metadata.

#### Result
- App entry is created in App Upload list.

#### Rules
- Compatibility must match target models for discoverability.

#### Related terms
- app upload
- apk upload
- app metadata
- compatibility

### App Upgrade - Normal Upgrade

#### What is this
Create a full release upgrade that replaces previous version for all devices.

#### When to use
Use this for general release after validation is complete.

#### Related user questions
- normal upgrade ums meaning
- full launch app upgrade
- replace old version in ums
- upgrade apk for all devices
- app release to everyone
- how to do normal upgrade
- official version upgrade ums
- new version not replacing old

#### Entry Path
- App Store → App Upload → Detail → Version Management

#### Steps
1. Open target app in **Version Management**.
2. Click **Upgrade**.
3. Upload new APK.
4. Enter upgrade description.
5. Save as **Normal Upgrade**.

#### Result
- New version replaces old version.
- All eligible devices can detect the new version.

#### Related terms
- normal upgrade
- full release
- version management

### App Upgrade - Gray Scale Upgrade

#### What is this
Release a version to selected SN devices for phased rollout.

#### When to use
Use this for canary testing before full release.

#### Related user questions
- grayscale upgrade ums
- phased rollout by sn
- canary release in ums
- limit upgrade to test devices
- only some devices see new app
- gray release setup
- how to set sn list upgrade
- grayscale version not visible

#### Entry Path
- App Store → App Upload → Detail → Version Management

#### Steps
1. Open target app in **Version Management**.
2. Click **Upgrade**.
3. Upload APK.
4. Select **Gray Scale Upgrade**.
5. Enter SN list and upgrade description.
6. Save.

#### Result
- Only selected SN devices can detect that version.

#### Rules
- Gray scale package requires manual download from App Store.
- Gray scale package cannot be pushed by Application Deployment.

#### Related terms
- gray scale upgrade
- phased rollout
- SN release

### Suspend and Resume App Release

#### What is this
Temporarily stop or restore app availability for a released package.

#### When to use
Use this when a version must be paused due to issue or restored after fix.

#### Related user questions
- suspend app release ums
- pause issue button
- resume app release
- restore issue app
- stop devices from seeing version
- app release emergency stop
- re-enable paused release
- paused version still visible

#### Entry Path
- App Store → App Upload → Version Management

#### Steps
1. Locate target package in version list.
2. Click **Pause Issue** to suspend.
3. To resume, click **Restore Issue**.

#### Result
- Suspended version is not discoverable by devices.
- Restored version becomes discoverable again.

#### Related terms
- pause issue
- restore issue
- suspend release

### Upload Multiple Versions

#### What is this
Upload multiple APK versions under one app with coverage or multi-version mode.

#### When to use
Use this when managing parallel versions or replacement tracks.

#### Related user questions
- upload multiple apk versions ums
- coverage upgrade mode
- keep multiple versions in app upload
- same package different signature
- version upload rules ums
- duplicate version error
- manage historical versions
- multi-version app strategy

#### Entry Path
- App Store → App Upload → Detail → Version Management → Normal Upgrade → Upload Multiple Versions

#### Steps
1. Open target app **Version Management**.
2. Click **Upload Multiple Versions**.
3. Choose mode: **Coverage Upgrade** or **Upload Multiple Versions**.
4. Upload APK files.
5. Save.

#### Rules
- Same package + same signature + same version is not allowed.
- Same package + different signature is allowed.
- Different package name is not allowed in this app entry.

#### Related terms
- upload multiple versions
- coverage upgrade
- app version matrix

### App List Publishing

#### What is this
Control app visibility in App List by partial launch, full launch, or adjustment.

#### When to use
Use this to decide which groups can discover a specific app.

#### Related user questions
- how to publish app to group
- partial launch vs full launch
- app list adjust distribution
- app not visible for some groups
- make app available to all groups
- app shelf operation
- add apps button in app list
- remove group from app visibility

#### Entry Path
- App Store → App List

#### Steps
1. Open **App Store → App List**.
2. Select app and choose **Add Partially** or **Add Apps**.
3. For partial launch, choose target groups.
4. For full launch, confirm all-group launch.
5. Use **Adjust** to add/remove groups later.

#### Result
- App discoverability is updated based on selected groups.

#### Rules
- New groups are not auto-included after partial launch.
- New groups are auto-included after full launch.

#### Related terms
- app list
- app shelf
- partial launch
- full launch

### App Removal from App List

#### What is this
Remove app from App List so devices can no longer detect it.

#### When to use
Use this when app should no longer be distributed.

#### Related user questions
- remove app from app list
- app still visible after removal
- how to unpublish app
- stop app distribution ums
- remove apps button
- device still detects removed app
- delete from app store list
- app off shelf ums

#### Entry Path
- App Store → App List

#### Steps
1. Open **App List**.
2. Select target app.
3. Click **Remove Apps**.
4. Confirm removal.

#### Result
- App is removed from App List.
- Devices cannot newly detect it from App Store.

#### Related terms
- app removal
- off shelf
- remove apps

### Banner Management (Add / Edit / Delete)

#### What is this
Manage device carousel banners with image and URL.

#### When to use
Use this for promotions, announcements, or campaign links.

#### Related user questions
- add banner in ums
- edit banner image link
- delete banner
- banner format requirement
- banner upload size limit
- carousel banner not showing
- banner max count ums
- banner url click behavior

#### Entry Path
- App Store → Banner Management

#### Steps
1. Open **Banner Management**.
2. Click **Add** to upload image and set URL.
3. Click existing banner to **Edit** image/link when needed.
4. Click **Delete** to remove banner.

#### Result
- Banner carousel is updated on device side after refresh.

#### Rules
- Image format: JPG/PNG.
- Max image size: 500KB.
- Maximum 5 banners.

#### Related terms
- banner
- carousel
- banner url

### Add Group

#### What is this
Create device groups manually or by Excel batch template.

#### When to use
Use this before assigning devices and pushing rules by organizational structure.

#### Related user questions
- how to add group in ums
- create group manually
- batch create groups by excel
- group template download
- group name limit
- import groups from file
- delete existing groups before import
- new group not shown

#### Entry Path
- Group Management → Group Overview

#### Steps
1. Open **Group Management**.
2. For manual mode, click **Add Group** and enter group fields.
3. For batch mode, click **Batch Add**, download template, fill rows, upload file.

#### Options
- Group name, location, manager, contact info, remarks.
- Batch option: delete existing groups before import.

#### Result
- New groups are created in group tree/list.

#### Related terms
- add group
- batch add group
- group template

### Edit and Delete Group

#### What is this
Modify group metadata or remove a group from hierarchy.

#### When to use
Use this when group structure or ownership info changes.

#### Related user questions
- edit group info ums
- delete group with devices
- cannot delete group with subgroup
- update group manager
- remove old group
- group delete rule ums
- how to rename group
- group deletion failed

#### Entry Path
- Group Management → Group Overview

#### Steps
1. Select a group.
2. Click **Edit** to update fields and submit.
3. To remove, click **Delete** and confirm.

#### Result
- Group info is updated or group is removed.

#### Rules
- Group with subgroups cannot be deleted.
- If group has devices, devices move to **Ungrouped** on deletion.

#### Related terms
- edit group
- delete group
- ungrouped

### Import Devices (Batch Binding)

#### What is this
Batch assign devices from Ungrouped into target groups via Excel.

#### When to use
Use this during large-scale onboarding or regrouping.

#### Related user questions
- import devices to group
- batch bind device by excel
- why import says grouped
- ungrouped required for import
- device sn not found import
- duplicate sn in template
- group binding template
- bulk device assignment ums

#### Entry Path
- Group Management → Group Overview → Import Devices

#### Steps
1. Click **Import Devices**.
2. Download Excel template.
3. Fill device SN and target group.
4. Upload template file.

#### Result
- Valid SN devices are bound to specified groups.

#### Rules
- Only **Ungrouped** devices can be assigned by this batch import.
- Already grouped devices cannot be reassigned by this flow.

#### Related terms
- import devices
- batch binding
- ungrouped devices

### Bound Devices (Manual Binding)

#### What is this
Manually bind one or more SN devices to selected group.

#### When to use
Use this for quick one-off assignment without Excel import.

#### Related user questions
- manual bind device to group
- bound devices action in group
- add single device by sn
- group bind failed
- can i bind grouped device
- bind button in group page
- how to submit bound devices
- device not added to group

#### Entry Path
- Group Management → Group Overview → Bound Devices

#### Steps
1. Select target group.
2. Click **Bound Devices**.
3. Enter device SN.
4. Click **Add**.
5. Click **Submit**.

#### Result
- Entered SN device is bound to selected group.

#### Rules
- Only devices in **Ungrouped** can be manually bound.

#### Related terms
- manual binding
- bound devices
- group assignment

### File Distribution

#### What is this
Distribute files to target path on terminal devices.

#### When to use
Use this for remote file push, config file delivery, or asset distribution.

#### Related user questions
- how to distribute file
- send file to terminal
- push file to device path
- file distribution ums
- where to set target path
- overwrite original file option
- file push failed
- device did not download file

#### Entry Path
- Remote Management → Remote Management → Batch Operations → File Distribution

#### Steps
1. Open **Batch Operations**.
2. Select **File Distribution**.
3. Enter **Target Path**.
4. Configure overwrite/notification options.

#### Options
- **Target Path**: destination directory on device.
- **Cover the Original File**: overwrite same-name file if enabled.
- **Remind after successful download**: show device notification when enabled.

#### Result
- Device downloads file to target path.
- Target folder is auto-created if missing.

#### Rules
- Max file size: 100MB.

#### Related terms
- file distribution
- file push
- target path
- overwrite

### Push Message

#### What is this
Send notification message to selected devices.

#### When to use
Use this for operation alerts and user communication.

#### Related user questions
- push message to device ums
- broadcast message to terminals
- max message length
- message not showing on device
- send reminder to terminals
- push notification from ums
- message delivery failed
- where is push message action

#### Entry Path
- Remote Management → Remote Management → Batch Operations → Push Message

#### Steps
1. Open **Batch Operations**.
2. Select **Push Message**.
3. Enter message content.

#### Result
- Device receives a message notification.

#### Rules
- Max message length: 1000 characters.

#### Related terms
- push message
- device notification
- broadcast

### Freeze / Unfreeze Device

#### What is this
Remotely disable or re-enable device usability.

#### When to use
Use this for security control, theft response, or temporary lock.

#### Related user questions
- freeze device remotely
- unfreeze device in ums
- disable terminal from console
- lock screen command ums
- freeze not working
- unfreeze action missing
- authorization for freeze
- device still usable after freeze

#### Entry Path
- Remote Management → Remote Management → Batch Manage / Batch Operations

#### Steps
1. Select target group or devices.
2. Open **Batch Manage** or **Batch Operations**.
3. Choose **Freeze Device** or **Unfreeze Device**.
4. Confirm task submission.

#### Result
- Freeze: device enters locked/disabled state.
- Unfreeze: device returns to normal usable state.

#### Rules
- Function requires authorization.

#### Related terms
- freeze device
- unfreeze
- remote lock

### WIFI Settings - Add and Push Rule

#### What is this
Create WIFI deployment rule and push it by group or SN.

#### When to use
Use this for remote WIFI provisioning at scale.

#### Related user questions
- add wifi rule in ums
- push wifi config to group
- wifi deploy by sn
- wifi rule progress meaning
- hidden network option
- wifi push failed
- devices not connecting to pushed ssid
- where is wifi settings page

#### Entry Path
- Remote Management → Configuration Deployment → WIFI Settings

#### Steps
1. Click **Add**.
2. Enter SSID, security type, and password.
3. Save rule.
4. Click **Push**.
5. Choose **Group Push** or **SN Push**.
6. Select targets and click **Publish/OK**.

#### Result
- Rule status becomes **Pushed**.
- Target devices attempt connection to configured SSID.

#### Rules
- Editing pushed rule re-pushes rule and resets progress to 0.
- Removing pushed group from rule disconnects that WIFI and clears deployment data.

#### Related terms
- wifi settings
- wifi deployment
- group push
- sn push

### Function Settings - Add and Push Rule

#### What is this
Create and push policy to disable selected device functions.

#### When to use
Use this to restrict risky functions for managed devices.

#### Related user questions
- disable device functions remotely
- function settings rule ums
- push function rule by group
- function rule by sn
- function settings record
- edit function setting rule
- delete function rule effect
- latest rule takes effect?

#### Entry Path
- Remote Management → Configuration Deployment → Function Settings

#### Steps
1. Click **Add**.
2. Enter rule name.
3. Set disabled items to **Yes**.
4. Save rule.
5. Click **Push**, choose Group or SN target, and confirm.

#### Result
- Selected functions are disabled on target devices after execution.

#### Rules
- Rule name cannot be duplicated.
- For same group, latest pushed function rule takes effect.

#### Related terms
- function settings
- disable functions
- remote policy

### WIFI Whitelist - Add and Push Rule

#### What is this
Restrict device WIFI list to approved SSIDs only.

#### When to use
Use this for controlled network environments.

#### Related user questions
- wifi whitelist settings ums
- only show allowed ssid
- add wifi whitelist rule
- push wifi whitelist
- one group one whitelist?
- whitelist edit and re-push
- delete whitelist restore all wifi
- inherited ssid from wifi config

#### Entry Path
- Remote Management → Configuration Deployment → WIFI Whitelist Settings

#### Steps
1. Click **Add**.
2. Enter rule name and select target group.
3. Add whitelist SSIDs (manual or inherited from WIFI config).
4. Save rule.
5. Click **Push** and confirm.

#### Result
- Device WIFI list shows only approved whitelist SSIDs.

#### Rules
- One whitelist rule corresponds to one group.
- Rule name cannot be duplicated.

#### Related terms
- wifi whitelist
- approved ssid
- network restriction

### APN Settings - Add and Push Rule

#### What is this
Configure APN profiles remotely and push them to devices.

#### When to use
Use this when SIM data network must use managed APN settings.

#### Related user questions
- add apn rule in ums
- remote apn configuration
- push apn by group
- push apn by sn
- apn rule delete behavior
- multiple apn rules same group
- device not using pushed apn
- where is apn settings

#### Entry Path
- Remote Management → Configuration Deployment → APN Settings

#### Steps
1. Click **Add**.
2. Enter APN fields (APN, MCC, MNC, proxy, auth, protocol, etc.).
3. Save rule.
4. Click **Push** and choose Group or SN targets.
5. Confirm push.

#### Result
- Device stores pushed APN and connects using latest executed APN profile.

#### Rules
- Rule name cannot be duplicated.
- Deleting one APN rule does not remove APNs pushed by other rules.

#### Related terms
- apn settings
- mobile network
- apn push

### Send Script - Add and Push Rule

#### What is this
Push script instructions to launch app or run intent remotely.

#### When to use
Use this for remote trigger workflows and app automation.

#### Related user questions
- send script to device ums
- start app by action remotely
- run intent from ums
- script parameter types
- push script by sn
- script executed but no effect
- send script rule record
- delete send script rule

#### Entry Path
- Remote Management → Configuration Deployment → Send Script

#### Steps
1. Click **Add**.
2. Choose script type: **Start APP** or **Run Intent**.
3. Enter action/package/class and parameters.
4. Save rule.
5. Click **Push**, choose Group or SN targets, and publish.

#### Options
- Start APP: action or package+class.
- Run Intent: action required.
- Parameter types: int, boolean, string, float, long.

#### Result
- Target devices execute startup/intent instruction.

#### Rules
- Rule name cannot be duplicated.
- Target app must support corresponding action/intent.

#### Related terms
- send script
- run intent
- start app

### Log Management

#### What is this
Create tasks to extract UMS logs, system logs, or specified files from devices.

#### When to use
Use this for troubleshooting and remote diagnostics.

#### Related user questions
- extract ums log from device
- collect system log remotely
- extract specified file path
- log task failed file not exist
- where to create log task
- log management steps
- remote troubleshooting logs
- download extracted log

#### Entry Path
- Remote Management → Log Management

#### Steps
1. Click **New Log Task**.
2. Select target devices or groups.
3. Choose log type (UMS/System/Specified File).
4. Set required parameters (time/path).
5. Click **OK**.

#### Result
- Log extraction task is created.
- Generated logs/files appear in task/result list for download.

#### Rules
- For specified file extraction, invalid or empty path returns execution failed.

#### Related terms
- log management
- ums log
- system log
- specified file

### Remote Log

#### What is this
View execution records of remote operations and download related logs.

#### When to use
Use this to audit execution history and verify task outcome.

#### Related user questions
- where to view remote operation history
- check push task progress
- download log from remote log
- remote log details per device
- how to filter remote records
- operation status timeline ums
- view log button meaning
- task history not found

#### Entry Path
- Remote Management → Remote Log

#### Steps
1. Open **Remote Log**.
2. Filter by device SN, operation type, and time range.
3. Click **Query**.
4. Open **Details** for per-device status.
5. Click **View Log** to download available logs.

#### Result
- Execution history and per-device outcome are displayed.

#### Related terms
- remote log
- execution history
- task details

### Device Restore

#### What is this
Run remote password clear or factory reset operations.

#### When to use
Use this for account recovery or complete device reset.

#### Related user questions
- clear lock screen password remotely
- remote factory reset in ums
- device restore menu
- restore factory warning
- reset device from console
- lock password cleanup
- factory reset failed
- what data will be deleted

#### Entry Path
- Remote Management → Device Restore

#### Steps
1. Open **Device Restore**.
2. Choose **Clear Lock Screen Password** or **Restore Factory Settings**.
3. Select target devices.
4. Confirm execution.

#### Result
- Password clear switches device to slide unlock.
- Factory reset returns device to initial state.

#### Rules
- Factory reset deletes apps and data.

#### Related terms
- device restore
- clear password
- factory reset

### Application Deployment

#### What is this
Create and push app deployment policy with install mode, schedule, and launch behavior.

#### When to use
Use this for remote app installation or rollout control.

#### Related user questions
- create application deployment policy
- silent install vs download notification
- deploy app by group
- deploy app by sn
- default launch after install
- deployment progress status
- edit deployment policy re-push
- delete deployment policy

#### Entry Path
- Remote Management → Application Management → Application Deployment

#### Steps
1. Click **Add**.
2. Enter policy name and select app/version.
3. Choose deployment method and deployment time.
4. Set default launch behavior.
5. Save policy.
6. Click **Push** and choose Group or SN targets.

#### Options
- Deployment method: Silent Installation / Download Notification.
- Deployment time: Deploy Now / Deploy on the Hour.
- Default Launch: Yes/No.

#### Result
- Deployment task is distributed to selected targets with progress tracking.

#### Rules
- Higher version overrides lower version.
- Editing pushed policy re-pushes and resets progress.

#### Related terms
- application deployment
- silent install
- deployment policy

### Application Whitelist

#### What is this
Restrict allowed applications on devices by whitelist rule.

#### When to use
Use this for strict app governance and kiosk-like control.

#### Related user questions
- application whitelist in ums
- add whitelist rule
- push whitelist to devices
- non-whitelist apps removed?
- edit whitelist app list
- delete whitelist and restore
- one group one whitelist
- app blocked by whitelist

#### Entry Path
- Remote Management → Application Management → Application Whitelist

#### Steps
1. Click **Add**.
2. Enter rule name and add allowed apps/package names.
3. Save rule.
4. Click **Push** and confirm warning.
5. Use **Edit** or **Delete** when needed.

#### Result
- Only whitelisted apps remain allowed to run/install.
- Non-whitelisted apps are removed after enforcement.

#### Rules
- One group can have one whitelist rule.
- Ensure required deployed/launcher apps are included in whitelist.

#### Related terms
- app whitelist
- allowed apps
- app restriction

### Location Management (Geo-Fence)

#### What is this
Configure geo-fence boundaries and out-of-range actions for devices.

#### When to use
Use this for asset protection and movement control.

#### Related user questions
- setup geo fence in ums
- device out of range action
- location alert email
- disable data outside fence
- geo fence ring device
- map radius setting ums
- location management config
- fence rule not triggered

#### Entry Path
- Remote Management → Location Management

#### Steps
1. Select target group.
2. Set fence center and radius by map click or coordinate input.
3. Enable fence switch.
4. Configure out-of-range actions.
5. Enter alert email and save.

#### Result
- Device executes configured actions when leaving fence.
- Alert email and event logs are generated.

#### Related terms
- geo-fence
- location management
- out-of-range

### Device Configuration

#### What is this
Configure location precision mode, polling frequency, and related behavior.

#### When to use
Use this to balance tracking precision versus power/data usage.

#### Related user questions
- device configuration modes ums
- high precision balanced energy saving
- custom polling time
- push setting enabled meaning
- log retention in device config
- location update interval
- battery usage from precision mode
- config not applied to group

#### Entry Path
- Remote Management → Device Configuration

#### Steps
1. Open **Device Configuration**.
2. Choose default scope or group scope.
3. Select mode: High Precision / Balanced / Energy Saving / Custom.
4. Set additional parameters and save.

#### Options
- Polling interval by mode.
- Custom mode fields for push/polling/map behavior.
- Log retention period.

#### Result
- Target scope receives updated configuration behavior.

#### Related terms
- device configuration
- precision mode
- polling

### Remote Desktop

#### What is this
Start real-time remote control session for device UI.

#### When to use
Use this for remote support and live troubleshooting.

#### Related user questions
- start remote desktop in ums
- remote control device screen
- remote desktop authorization needed
- remote desktop not connecting
- control buttons in remote session
- lock unlock from remote desktop
- mouse simulate touch
- remote support for terminal

#### Entry Path
- Remote Management → Remote Desktop

#### Steps
1. Open **Remote Desktop**.
2. Select target device.
3. Click **Start Remote**.
4. Use control panel for Home/Back/Menu/Lock/Volume actions.

#### Result
- Remote session opens and device desktop can be controlled.

#### Rules
- Feature requires authorization.

#### Related terms
- remote desktop
- remote control
- support session

### Upload Configuration from Terminal

#### What is this
Create configuration rule in UMS from UStage terminal upload.

#### When to use
Use this when terminal-side configuration should be synced to UMS quickly.

#### Related user questions
- upload config from terminal ustage
- terminal config to ums
- auto create config rule
- configure management new rule
- scanner system config upload
- not published status after upload
- where is uploaded config
- ustage upload not showing

#### Entry Path
- Stage Management → Configure Management

#### Steps
1. On terminal, open **UStage**.
2. Upload device configuration to UMS.
3. Open **Configure Management** list and find new rule.

#### Result
- Configuration rule is auto-created in UMS.
- Initial status is **Not Published**.

#### Related terms
- ustage upload
- configure management
- terminal upload

### Upload Configuration File

#### What is this
Upload exported configuration file to create configuration rule in UMS.

#### When to use
Use this when configuration is prepared offline and imported from PC.

#### Related user questions
- upload configuration file to ums
- import exported ustage config
- configure management file upload
- overwrite same config name
- create new rule from config file
- not published after upload
- config upload duplicate behavior
- how to import scanner config file

#### Entry Path
- Stage Management → Configure Management

#### Steps
1. Export configuration file from terminal UStage.
2. Copy file to PC.
3. Open **Configure Management**.
4. Upload configuration file.

#### Result
- Configuration rule is created automatically.

#### Rules
- Same config name from same device may overwrite previous rule.
- Different config name creates a new rule.

#### Related terms
- upload config file
- import configuration
- configure management

### Generate QR Code

#### What is this
Generate QR code from configuration rule for device-side import.

#### When to use
Use this for local/offline rollout to same model devices.

#### Related user questions
- generate qr code for config
- device scan qr import config
- download config qr image
- qr code config content
- stage management qr export
- qr import for same model
- where is generate qr button
- qr config not working

#### Entry Path
- Stage Management → Configure Management

#### Steps
1. Select a configuration rule.
2. Click QR code generation action.
3. View generated QR code.
4. Download QR image if needed.

#### Result
- QR code is generated and can be scanned by devices for configuration import.

#### Related terms
- qr code
- config import
- offline deployment

### Publish Configuration Rule - Group Publish

#### What is this
Publish configuration rule to selected groups.

#### When to use
Use this when a rule should apply to all devices under specific groups.

#### Related user questions
- group publish configuration rule
- push config to groups
- configure management publish by group
- subgroup association option
- select device type for publish
- group publish progress 0
- config rule not executed in group
- how to publish stage rule

#### Entry Path
- Stage Management → Configure Management

#### Steps
1. Select configuration rule.
3. Choose **Group Publish**.
4. Select one or more groups.
5. Choose all devices or specific device type.

#### Result
- Rule status changes to **Published**.
- Target devices receive rule and execute if type matches.

#### Related terms
- group publish
- config rule push
- published status

### Publish Configuration Rule - SN Publish

#### What is this
Publish configuration rule to specific SN devices.

#### When to use
Use this for targeted rollout outside full group scope.

#### Related user questions
- publish config by sn
- sn publish stage management
- batch import sn for publish
- target specific devices config
- sn publish progress
- config not applied to listed sn
- template import sn publish
- stage rule by sn

#### Entry Path
- Stage Management → Configure Management

#### Steps
1. Select configuration rule.
3. Choose **SN Publish**.
4. Add SN manually or by template import.

#### Result
- Rule is pushed to listed SN devices.
- Progress starts from 0 / pushed device count.

#### Related terms
- sn publish
- targeted rollout
- config push

### Delete Configuration Rule

#### What is this
Remove configuration rule from Configure Management.

#### When to use
Use this when obsolete or wrong configuration should stop distribution.

#### Related user questions
- delete configuration rule ums
- remove stage config rule
- delete rule effect on pending devices
- config still visible after delete
- stop rule execution
- where is delete in configure management
- delete pushed config
- rule cleanup stage management

#### Entry Path
- Stage Management → Configure Management

#### Steps
1. Find target rule in list.
2. Click **Delete**.
3. Confirm deletion.

#### Result
- Rule is removed from list.
- Devices not yet executed will no longer execute that rule.

#### Related terms
- delete config rule
- configure management delete
- rule cleanup

### Device Brief

#### What is this
Query and export bound device summary and details.

#### When to use
Use this to audit device ownership and activation timeline.

#### Related user questions
- device brief page ums
- query device by sn
- export device brief excel
- see first activation time
- find last online time
- device not bound to account
- filter by device type
- device brief report

#### Entry Path
- Data Center → Device Brief

#### Steps
1. Open **Device Brief**.
2. Set filters such as SN, device type, activation time.
3. Click **Query**.
4. Review result list.
5. Click **Export** when needed.

#### Result
- Filtered device records are displayed.
- Export file is generated for current query set.

#### Related terms
- device brief
- device query
- export excel

### Flow Management - Data Usage

#### What is this
View overall mobile data consumption and export report.

#### When to use
Use this to monitor traffic baseline and trend over time.

#### Related user questions
- flow management data usage
- total mobile data in ums
- export flow report
- line chart traffic view
- table view traffic usage
- average daily flow per device
- change query date for traffic
- flow report download

#### Entry Path
- Data Center → Flow Management → Data Usage

#### Steps
1. Open **Flow Management**.
2. Select **Data Usage** tab.
3. Set query date range.
4. Click **Query**.
5. Switch table/line chart if needed.
6. Click **Export Report**.

#### Result
- Total and average flow metrics are shown.
- Current query result can be exported.

#### Rules
- Only mobile data is counted; WIFI traffic is excluded.

#### Related terms
- data usage
- flow management
- traffic report

### Flow Management - Application Rank

#### What is this
Query app-level traffic ranking for a single SN device.

#### When to use
Use this when diagnosing which app consumes most traffic on one device.

#### Related user questions
- app traffic rank by sn
- top 20 apps by traffic
- application rank in flow management
- sn traffic query ums
- export app rank report
- app data consumption analysis
- query app traffic by date
- traffic heavy app check

#### Entry Path
- Data Center → Flow Management → Application Rank

#### Steps
1. Open **Application Rank**.
2. Enter device SN.
3. Select date range.
4. Click **Query**.
5. Click **Export Report** if needed.

#### Result
- Top traffic-consuming apps for SN are displayed.

#### Related terms
- application rank
- app traffic
- sn flow

### Flow Management - Group Rank

#### What is this
Query traffic ranking across selected groups.

#### When to use
Use this for comparing traffic usage between teams or sites.

#### Related user questions
- group traffic ranking ums
- compare flow by group
- average daily flow per group
- group rank export report
- group details traffic
- which group uses most data
- query multiple groups flow
- traffic ranking not correct

#### Entry Path
- Data Center → Flow Management → Group Rank

#### Steps
1. Open **Group Rank**.
2. Select one or more groups.
3. Select date range.
4. Click **Query**.
5. Click **Details** for group device breakdown.
6. Click **Export Report** when needed.

#### Result
- Group-level traffic ranking and averages are displayed.

#### Related terms
- group rank
- group traffic
- flow comparison

### Flow Management - Limit Reminder

#### What is this
Set daily traffic threshold and reminder/report schedule.

#### When to use
Use this for overuse alerting and cost control.

#### Related user questions
- set flow limit reminder
- daily data threshold ums
- traffic alert email time
- device exceeds limit record
- limit reminder settings
- one record per day rule
- overuse alert in flow management
- save reminder failed

#### Entry Path
- Data Center → Flow Management → Limit Reminder

#### Steps
1. Click **Limit Reminder**.
2. Enter daily data limit (1-9999).
3. Set daily report email time.
4. Save settings.

#### Result
- Exceeding devices generate reminder records.
- Daily report email can be sent at configured time.

#### Rules
- For same device/day, multiple exceed events display as one record.

#### Related terms
- limit reminder
- traffic threshold
- daily alert

### Data Report - Add Report Rule

#### What is this
Create report rule for device basic data or app information.

#### When to use
Use this to define reusable reporting templates.

#### Related user questions
- add data report rule
- create report template ums
- basic device info report
- app info report rule
- data report field selection
- report name required
- add multiple apps in report
- report rule setup failed

#### Entry Path
- Data Center → Data Reports

#### Steps
1. Click **Add**.
2. Enter report name.
3. Select report type.
4. Configure report content fields/app list.

#### Result
- New report rule appears in Data Reports list.

#### Related terms
- add data report
- report rule
- data reports

### Data Report - Export by Account / SN

#### What is this
Export report data by account scope or SN scope.

#### When to use
Use this for scheduled audit exports or ad-hoc data pulls.

#### Related user questions
- export data report by account
- export report by sn
- download exported report file
- export history view
- report export failed
- account export vs sn export
- batch import sn for export
- last export time meaning

#### Entry Path
- Data Center → Data Reports

#### Steps
1. Select target report rule.
2. Click **Export**.
3. Choose **Account Export** or **SN** mode.
4. Select accounts or input/import SN list.
5. Click **OK**.
6. Open **Export History** and download file.

#### Result
- Excel report file is generated.
- Last export time is updated.

#### Related terms
- export data report
- account export
- sn export
- export history

### Data Report - Subscribe

#### What is this
Schedule report delivery to email by account or SN subscription.

#### When to use
Use this for recurring daily reporting to stakeholders.

#### Related user questions
- subscribe data report email
- daily report mail ums
- account subscription vs sn subscription
- multiple emails separator
- stop subscription
- continue subscription
- report mail delayed
- subscription setup failed

#### Entry Path
- Data Center → Data Reports

#### Steps
1. Select report rule.
2. Click **Subscribe**.
3. Enter recipient emails (semicolon separated).
4. Choose **Account Subscription** or **SN Subscription**.
5. Set target accounts/SNs and confirm.
6. Manage status in **History Subscription**.

#### Result
- Report emails are sent on schedule.

#### Rules
- Large dataset may delay generation and email delivery.

#### Related terms
- subscribe report
- email delivery
- history subscription

### Distribute Device

#### What is this
Bind channel devices to subordinate accounts.

#### When to use
Use this for ownership assignment under sub-account structure.

#### Related user questions
- distribute device to sub account
- bind device to subordinate account
- batch distribute by sn
- replace sub account for device
- unbind distributed device
- distribute in batches button
- device assign failed
- sub-account binding process

#### Entry Path
- Device Manager → Distribute Device

#### Steps
1. Select device(s) in list.
2. Click **Distribute in Batches** or single bind action.
3. Select target sub-account.
4. Click **Binding** / confirm.

#### Result
- Device is assigned to selected sub-account.

#### Related terms
- distribute device
- sub-account binding
- device assignment

### Device Transfer

#### What is this
Transfer device ownership from current agent to another agent.

#### When to use
Use this for channel handover or organizational transfer.

#### Related user questions
- transfer device to another agent
- batch transfer devices ums
- recipient company number
- transfer in batches flow
- transfer failed
- can i cancel unfinished transfer
- transfer status query
- donate device action

#### Entry Path
- Device Manager → Device Transfer

#### Steps
1. Select single device or open **Transfer in Batches**.
2. Add SNs manually or by template.
3. Enter recipient company number.
4. Click **Confirm Donate**.

#### Result
- Valid devices are transferred to target agent.

#### Related terms
- device transfer
- confirm donate
- agent handover

### Transfer Record

#### What is this
View transfer and receipt history with status.

#### When to use
Use this to audit completed and unfinished transfer operations.

#### Related user questions
- view transfer record ums
- unfinished transfer list
- finished transfer history
- search transfer by sn
- transfer record filter by time
- cancel pending transfer
- refuse transfer action
- receipt history page

#### Entry Path
- Device Manager → Transfer Record

#### Steps
1. Open **Transfer Record**.
2. Filter by SN, date range, and type.
3. Click **Query**.
4. For unfinished record, use available actions (Cancel/Refuse) when applicable.

#### Result
- Matching transfer records and statuses are displayed.

#### Related terms
- transfer record
- unfinished
- finished

### Device Binding (Company-level)

#### What is this
Directly bind or delete devices at first-level company account scope.

#### When to use
Use this for high-permission ownership maintenance.

#### Related user questions
- company level device binding
- add device in device binding module
- batch add device binding
- batch delete bound devices
- permission required for device binding
- first-level agent only?
- import template for binding
- bound device cleanup

#### Entry Path
- Device Manager → Device Binding

#### Steps
1. For single bind, click **Add** and enter device fields.
2. For batch bind, click **Batch Add**, download template, fill, and import.
3. For cleanup, select devices and run batch delete.

#### Result
- Devices are bound to or removed from company-level management list.

#### Rules
- Module is available to first-level agent/company accounts with authorization.

#### Related terms
- device binding
- batch add
- batch delete

### Boot Animation - Add Rule

#### What is this
Create boot animation policy using default animation or uploaded ZIP package.

#### When to use
Use this for startup branding and custom boot experience.

#### Related user questions
- add boot animation rule
- upload boot animation zip
- boot animation config fields
- apply to own device option
- boot animation preview failed
- default animation vs upload zip
- rule not pushed yet
- boot animation setup ums

#### Entry Path
- System Customization → Boot Animation

#### Steps
1. Click **Add**.
2. Enter configuration name.
3. Select animation type (Default or Upload Compressed Package).
4. Upload ZIP if custom package is used.
5. Click **OK**.

#### Result
- Boot animation rule is created with **Not Pushed** status.

#### Rules
- Rule name should be unique for easier management.

#### Related terms
- boot animation
- add rule
- zip package

### Boot Animation - Push Rule

#### What is this
Push boot animation rule to groups or SN targets.

#### When to use
Use this to activate startup animation on target device fleet.

#### Related user questions
- push boot animation to group
- boot animation sn push
- boot animation progress
- rule status pushed
- why progress is 0
- boot animation not applied
- push record view
- device did not download zip

#### Entry Path
- System Customization → Boot Animation

#### Steps
1. Select boot animation rule.
2. Click **Push**.
3. Choose **Group Push** or **SN Push**.
4. Select targets or import SN list.
5. Click **Confirm/Publish**.

#### Result
- Rule status becomes **Pushed**.
- Devices download package and use animation on restart/startup.

#### Rules
- Progress = successful devices / total pushed devices.

#### Related terms
- push boot animation
- group push
- sn push

### Boot Animation - Edit / Delete Rule

#### What is this
Modify existing boot animation rule or remove it from list.

#### When to use
Use this to update boot media or retire obsolete policy.

#### Related user questions
- edit boot animation rule
- delete boot animation rule
- re-push after edit
- progress reset after edit
- delete rule device behavior
- still using old animation after delete
- boot animation rollback
- remove boot policy

#### Entry Path
- System Customization → Boot Animation

#### Steps
1. Select rule and click **Edit** to change name/type/package, then save.
2. To remove, select rule and click **Delete**, then confirm.

#### Result
- Edit: rule is re-pushed and progress resets.
- Delete: rule is removed from list.

#### Rules
- Devices that already applied animation may continue using it after rule deletion.

#### Related terms
- edit boot animation
- delete boot animation
- re-push

### Kiosk Mode - Add and Push Rule

#### What is this
Create and deploy single-app lock policy with unlock password.

#### When to use
Use this for dedicated-use terminals that must stay in one app.

#### Related user questions
- enable kiosk mode ums
- add kiosk rule
- set kiosk unlock password
- push kiosk by group
- push kiosk by sn
- exit kiosk mode how
- kiosk app selection rules
- kiosk not taking effect

#### Entry Path
- System Customization → Kiosk Mode

#### Steps
1. Click **Add**.
2. Enter configuration name and unlock password.
3. Select one target application.
4. Save rule.
5. Click **Push** and choose Group or SN targets.

#### Result
- Target devices enter kiosk mode with selected app locked.

#### Rules
- App must already be installed on device.
- Exit requires long-press Back and correct password.

#### Related terms
- kiosk mode
- single-app lock
- unlock password

### Auto-start Application - Add and Push Rule

#### What is this
Set default app to auto-launch on device startup/restart.

#### When to use
Use this when startup workflow must always open specific app.

#### Related user questions
- auto start app on boot ums
- add default application rule
- push default app rule
- startup app not launching
- app selection for auto start
- delete auto-start rule effect
- re-push after edit auto-start
- boot launch behavior

#### Entry Path
- System Customization → Auto-start Application

#### Steps
1. Click **Add**.
2. Enter configuration name.
3. Select one application.
4. Save rule.
5. Click **Push** and choose Group or SN targets.

#### Result
- Selected app launches automatically on startup/restart on target devices.

#### Rules
- Selected app must be pre-installed.

#### Related terms
- auto-start app
- default application
- startup launch

### Customized Desktop - Add and Push Rule

#### What is this
Deploy custom launcher desktop rule using custom or standard template method.

#### When to use
Use this for branded launcher and desktop layout control.

#### Related user questions
- customized desktop rule ums
- add custom desktop launcher
- custom template vs standard template
- push custom desktop by group
- push desktop by sn
- desktop rule record view
- delete desktop rule effect
- return to android desktop

#### Entry Path
- System Customization → Customized Desktop

#### Steps
1. Click **Add**.
2. Choose desktop type and configuration method.
3. Upload launcher APK/config file or fill standard fields.
4. Save rule.
5. Click **Push** and choose Group or SN targets.

#### Result
- Target devices receive and apply custom desktop configuration.

#### Rules
- Rule name cannot be duplicated.
- Latest pushed desktop rule takes effect for same group.

#### Related terms
- customized desktop
- launcher apk
- desktop rule

### Change Password

#### What is this
Update current account password in personal information page.

#### When to use
Use this for periodic credential rotation or compromised password recovery.

#### Related user questions
- change password in ums
- password policy requirements
- save new password failed
- current password incorrect
- where to update password
- account security update
- password complexity ums
- reset my ums password

#### Entry Path
- Account Center → Personal Information → Change Password

#### Steps
1. Enter current password.
2. Enter new password and confirm it.

#### Result
- Account password is updated.

#### Rules
- Minimum 8 characters.
- Must include uppercase, lowercase, numbers, and special characters.

#### Related terms
- change password
- password policy
- account security

### Change Bound Email

#### What is this
Replace account bound email with verification flow.

#### When to use
Use this when account email ownership changes.

#### Related user questions
- change bound email ums
- update login email
- email verification code for change email
- logged out after changing email
- next login with new email?
- change email failed
- where to modify bound email
- new email not receiving code

#### Entry Path
- Account Center → Personal Information → Change Bound Email

#### Steps
1. Enter current password and new email.
2. Click **Send Verification Code**.
3. Enter received verification code.

#### Result
- Bound email is updated.
- Current session is logged out.

#### Rules
- Next login must use new email.

#### Related terms
- bound email
- email change
- verification code

### Authorization Control - Add Operator and Permissions

#### What is this
Manage operator accounts, assign permissions, and control access scope.

#### When to use
Use this when delegating operations to team members.

#### Related user questions
- add operator in ums
- operator invitation email
- modify operator permissions
- permission not effective
- search operator by merchant
- assign menu permissions
- operator activation status
- operator access control

#### Entry Path
- Account Center → Authorization Control

#### Steps
1. Click **Add Operator**.
2. Enter operator email and name.
3. Confirm creation.
4. In permission column, open permission selector.
5. Check required permissions and save.

#### Result
- Operator account is created and invited by email.
- Selected permissions are applied after operator login.

#### Related terms
- authorization control
- operator management
- permission assignment

### Transfer Administrator Authority

#### What is this
Transfer admin role from current administrator to another operator.

#### When to use
Use this during role handover or organization ownership change.

#### Related user questions
- transfer admin authority ums
- change administrator account
- admin transfer steps
- old admin becomes operator?
- admin transfer failed
- password required for transfer
- who gets full permissions
- revoke current admin

#### Entry Path
- Account Center → Authorization Control

#### Steps
1. Click **Transfer**.
2. Select target operator.
3. Enter current administrator password.
4. Confirm transfer.

#### Result
- Selected operator becomes new administrator.
- Original administrator becomes operator.

#### Related terms
- admin transfer
- administrator authority
- role handover

### Add Sub-account (Controlled / Independent)

#### What is this
Create subordinate accounts under parent account with controlled or independent model.

#### When to use
Use this for multi-tenant hierarchy and delegated management.

#### Related user questions
- add sub account ums
- controlled vs independent sub account
- create independent sub account with admin email
- add controlled sub account
- sub account activation email
- sub account hierarchy setup
- no login for controlled account
- sub account creation failed

#### Entry Path
- Sub-account → Sub-account Brief

#### Steps
1. Click **Add Controlled Sub-account** or **Add Independent Sub-account**.
2. Enter required fields (name, abbreviation, contact, and admin email for independent type).
4. For independent account, complete email temporary-password activation.

#### Result
- New sub-account is created under parent hierarchy.

#### Related terms
- sub-account
- controlled sub-account
- independent sub-account

### Change App Market Mode (Controlled Sub-account)

#### What is this
Switch app market control mode for controlled sub-account.

#### When to use
Use this to decide whether child account follows parent app strategy or independent selection.

#### Related user questions
- change app market mode for controlled account
- clone parent apps to sub account
- independent app market for child account
- parent controlled app list setting
- sub account app permissions
- settings button in sub account
- app market mode update not applied
- controlled account app policy

#### Entry Path
- Sub-account → Sub-account Brief

#### Steps
1. Select controlled sub-account.
2. Click **Settings**.
3. Choose desired app market mode.
4. Click **Submit**.

#### Result
- App market behavior updates immediately for that controlled sub-account.

#### Related terms
- app market mode
- controlled account settings
- parent app control

### Transfer Controlled to Independent Sub-account

#### What is this
Convert controlled sub-account into independent sub-account.

#### When to use
Use this when child account needs autonomous operation and own admin.

#### Related user questions
- transfer controlled to independent account
- convert sub account type
- set admin email for transfer
- dynamic password email for transfer
- sub account conversion steps
- transfer failed in sub account module
- independent account activation after transfer
- change child account ownership model

#### Entry Path
- Sub-account → Sub-account Brief

#### Steps
1. Select controlled sub-account.
2. Click **Set** then **Transfer**.
3. Enter admin email.
4. Receive dynamic password by email.
5. Log in and set new password.

#### Result
- Sub-account type changes to independent.

#### Related terms
- sub-account transfer
- controlled to independent
- account conversion

### Review Sub-merchants

#### What is this
Review newly registered independent sub-merchants and approve/reject onboarding.

#### When to use
Use this when processing registration approvals for subordinate merchants.

#### Related user questions
- review sub merchant registration
- approve new sub account
- reject sub merchant with reason
- review sub merchants page
- audit passed vs review failed
- sub account cannot use platform after reject
- resubmit company info after rejection
- onboarding review workflow

#### Entry Path
- Sub-account → Review Sub-merchants

#### Steps
1. Open **Review Sub-merchants**.
2. Select pending registration.
3. Choose pass or fail.
4. If fail, enter rejection reason and submit.

#### Result
- Approved account can use platform features.
- Rejected account receives reason email and must resubmit for review.

#### Related terms
- review sub-merchants
- audit passed
- review failed
# UMS QA Index

Retrieval-oriented QA topics converted from the UMS source manual.

### Device Map

#### What is this
Visual map of device distribution.

#### When to use
Use this when you need to perform device map in daily UMS operations.

#### Related user questions
- how to use device map in ums
- where to find device map menu
- device map step by step
- i cannot do device map, why
- device map failed, what should i check
- how do i run device map
- need help for device map
- can i do device map by group

#### Entry Path
- Data Center → Device Map

#### Steps
1. Go to **Data Center → Device Map**.

#### Related terms
- device map
- ums
- operation

### About Us

#### What is this
This section covers about us operations in UMS.

#### When to use
Use this when you need to perform about us in daily UMS operations.

#### Related user questions
- how to use about us in ums
- where to find about us menu
- about us step by step
- i cannot do about us, why
- about us failed, what should i check
- how do i run about us
- need help for about us
- can i do about us by group

#### Entry Path
- Dashboard

#### Steps
1. Click account icon (top-right corner)
2. Select **About Us**

#### Related terms
- about us
- ums
- operation

### Version History

#### What is this
View historical updates for:.

#### When to use
Use this when you need to perform version history in daily UMS operations.

#### Related user questions
- how to use version history in ums
- where to find version history menu
- version history step by step
- i cannot do version history, why
- version history failed, what should i check
- how do i run version history
- need help for version history
- can i do version history by group

#### Entry Path
- Dashboard

#### Steps
1. Click account icon (top-right corner)
2. Select **Version History**

#### Related terms
- version history
- ums
- operation

### Feedback

#### What is this
Submit:.

#### When to use
Use this when you need to perform feedback in daily UMS operations.

#### Related user questions
- how to use feedback in ums
- where to find feedback menu
- feedback step by step
- i cannot do feedback, why
- feedback failed, what should i check
- how do i run feedback
- need help for feedback
- can i do feedback by group

#### Entry Path
- Dashboard

#### Steps
1. Click account icon (top-right corner)
2. Select **Feedback**

#### Related terms
- feedback
- ums
- operation

### Add App

#### What is this
This section covers add app operations in UMS.

#### When to use
Use this when you need to perform add app in daily UMS operations.

#### Related user questions
- how to use add app in ums
- where to find add app menu
- add app step by step
- i cannot do add app, why
- add app failed, what should i check
- how do i run add app
- need help for add app
- can i do add app by group

#### Entry Path
- App Store → App Upload

#### Steps
1. Go to **App Store → App Upload**.
2. Click **Add**.

#### Result
- A new item/rule is created and listed.

#### Related terms
- add app
- ums
- operation

### Edit App

#### What is this
This section covers edit app operations in UMS.

#### When to use
Use this when you need to perform edit app in daily UMS operations.

#### Related user questions
- how to use edit app in ums
- where to find edit app menu
- edit app step by step
- i cannot do edit app, why
- edit app failed, what should i check
- how do i run edit app
- need help for edit app
- can i do edit app by group

#### Entry Path
- App Store → App Upload

#### Steps
1. Go to **App Store → App Upload**.
2. Click **Edit**.

#### Result
- Changes are saved and take effect after execution/push.

#### Related terms
- edit app
- ums
- operation

### Suspend App Release

#### What is this
Used to temporarily stop app availability.

#### When to use
Use this when you need to perform suspend app release in daily UMS operations.

#### Related user questions
- how to use suspend app release in ums
- where to find suspend app release menu
- suspend app release step by step
- i cannot do suspend app release, why
- suspend app release failed, what should i check
- how do i run suspend app release
- need help for suspend app release
- can i do suspend app release by group

#### Entry Path
- App Store → App Upload

#### Steps
1. Go to **App Store → App Upload**.

#### Related terms
- suspend app release
- ums
- operation

### Resume Release

#### What is this
Click **Restore Issue**.

#### When to use
Use this when you need to perform resume release in daily UMS operations.

#### Related user questions
- how to use resume release in ums
- where to find resume release menu
- resume release step by step
- i cannot do resume release, why
- resume release failed, what should i check
- how do i run resume release
- need help for resume release
- can i do resume release by group

#### Entry Path
- App Store → App Upload

#### Steps
1. Go to **App Store → App Upload**.

#### Related terms
- resume release
- ums
- operation

### Delete App

#### What is this
This section covers delete app operations in UMS.

#### When to use
Use this when you need to perform delete app in daily UMS operations.

#### Related user questions
- how to use delete app in ums
- where to find delete app menu
- delete app step by step
- i cannot do delete app, why
- delete app failed, what should i check
- how do i run delete app
- need help for delete app
- can i do delete app by group

#### Entry Path
- App Store → App Upload

#### Steps
1. Go to **App Store → App Upload**.
2. Click **Delete**.

#### Result
- The selected item is removed and unavailable for new tasks.

#### Related terms
- delete app
- ums
- operation

### App List

#### What is this
Displays all applications under the account:.

#### When to use
Use this when you need to perform app list in daily UMS operations.

#### Related user questions
- how to use app list in ums
- where to find app list menu
- app list step by step
- i cannot do app list, why
- app list failed, what should i check
- how do i run app list
- need help for app list
- can i do app list by group

#### Entry Path
- App Store → App List

#### Steps
1. Go to **App Store → App List**.

#### Related terms
- app list
- ums
- operation

### App Publishing (App Shelf)

#### What is this
Select app → Click **Add Partially**.

#### When to use
Use this when you need to perform app publishing (app shelf) in daily UMS operations.

#### Related user questions
- how to use app publishing app shelf in ums
- where to find app publishing app shelf menu
- app publishing app shelf step by step
- i cannot do app publishing app shelf, why
- app publishing app shelf failed, what should i check
- how do i run app publishing app shelf
- need help for app publishing app shelf
- can i do app publishing app shelf by group

#### Entry Path
- Select app → Click Add Partially

#### Steps
1. Go to **Select app → Click Add Partially**.

#### Result
- Target devices/accounts receive the task and progress/status is updated.

#### Related terms
- app publishing (app shelf)
- ums
- operation

### Banner Management

#### What is this
Used for displaying advertising carousel on devices.

#### When to use
Use this when you need to perform banner management in daily UMS operations.

#### Related user questions
- how to use banner management in ums
- where to find banner management menu
- banner management step by step
- i cannot do banner management, why
- banner management failed, what should i check
- how do i run banner management
- need help for banner management
- can i do banner management by group

#### Entry Path
- App Store → Banner Management

#### Steps
1. Go to **App Store → Banner Management**.

#### Related terms
- banner management
- ums
- operation

### Add Banner

#### What is this
Format: JPG / PNG.

#### When to use
Use this when you need to perform add banner in daily UMS operations.

#### Related user questions
- how to use add banner in ums
- where to find add banner menu
- add banner step by step
- i cannot do add banner, why
- add banner failed, what should i check
- how do i run add banner
- need help for add banner
- can i do add banner by group

#### Entry Path
- App Store → Banner Management

#### Steps
1. Click **Add**
2. Upload image
3. Add target URL

#### Result
- Banner appears as carousel
- Clicking opens the URL

#### Rules
- Format: JPG / PNG
- Size: ≤ 500KB

#### Related terms
- add banner
- ums
- operation

### Edit Banner

#### What is this
Modify image or link.

#### When to use
Use this when you need to perform edit banner in daily UMS operations.

#### Related user questions
- how to use edit banner in ums
- where to find edit banner menu
- edit banner step by step
- i cannot do edit banner, why
- edit banner failed, what should i check
- how do i run edit banner
- need help for edit banner
- can i do edit banner by group

#### Entry Path
- App Store → Banner Management

#### Steps
1. Go to **App Store → Banner Management**.
2. Click **Edit**.

#### Result
- Changes are saved and take effect after execution/push.

#### Related terms
- edit banner
- ums
- operation

### Delete Banner

#### What is this
Click **Delete**.

#### When to use
Use this when you need to perform delete banner in daily UMS operations.

#### Related user questions
- how to use delete banner in ums
- where to find delete banner menu
- delete banner step by step
- i cannot do delete banner, why
- delete banner failed, what should i check
- how do i run delete banner
- need help for delete banner
- can i do delete banner by group

#### Entry Path
- App Store → Banner Management

#### Steps
1. Go to **App Store → Banner Management**.
2. Click **Delete**.

#### Result
- The selected item is removed and unavailable for new tasks.

#### Related terms
- delete banner
- ums
- operation

### Group Overview

#### What is this
By default, all devices belong to the **Ungrouped** group.

#### When to use
Use this when you need to perform group overview in daily UMS operations.

#### Related user questions
- how to use group overview in ums
- where to find group overview menu
- group overview step by step
- i cannot do group overview, why
- group overview failed, what should i check
- how do i run group overview
- need help for group overview
- can i do group overview by group

#### Entry Path
- Group Management → Group Overview

#### Steps
1. Go to **Group Management → Group Overview**.

#### Related terms
- group overview
- ums
- operation

### Edit Group

#### What is this
This section covers edit group operations in UMS.

#### When to use
Use this when you need to perform edit group in daily UMS operations.

#### Related user questions
- how to use edit group in ums
- where to find edit group menu
- edit group step by step
- i cannot do edit group, why
- edit group failed, what should i check
- how do i run edit group
- need help for edit group
- can i do edit group by group

#### Entry Path
- Group Management → Group Overview

#### Steps
1. Go to **Group Management → Group Overview**.
2. Click **Edit**.

#### Result
- Changes are saved and take effect after execution/push.

#### Related terms
- edit group
- ums
- operation

### Delete Group

#### What is this
This section covers delete group operations in UMS.

#### When to use
Use this when you need to perform delete group in daily UMS operations.

#### Related user questions
- how to use delete group in ums
- where to find delete group menu
- delete group step by step
- i cannot do delete group, why
- delete group failed, what should i check
- how do i run delete group
- need help for delete group
- can i do delete group by group

#### Entry Path
- Group Management → Group Overview

#### Steps
1. Go to **Group Management → Group Overview**.
2. Click **Delete**.

#### Result
- The selected item is removed and unavailable for new tasks.

#### Related terms
- delete group
- ums
- operation

### Export Group

#### What is this
This section covers export group operations in UMS.

#### When to use
Use this when you need to perform export group in daily UMS operations.

#### Related user questions
- how to use export group in ums
- where to find export group menu
- export group step by step
- i cannot do export group, why
- export group failed, what should i check
- how do i run export group
- need help for export group
- can i do export group by group

#### Entry Path
- Group Management → Group Overview

#### Steps
1. Go to **Group Management → Group Overview**.
2. Click **Export**.

#### Result
- Export task/file is generated and available for download.

#### Related terms
- export group
- ums
- operation

### Bind Device (Search & View)

#### What is this
This section covers bind device (search & view) operations in UMS.

#### When to use
Use this when you need to perform bind device (search & view) in daily UMS operations.

#### Related user questions
- how to use bind device search view in ums
- where to find bind device search view menu
- bind device search view step by step
- i cannot do bind device search view, why
- bind device search view failed, what should i check
- how do i run bind device search view
- need help for bind device search view
- can i do bind device search view by group

#### Entry Path
- Group Management → Group Overview

#### Steps
1. Go to **Group Management → Group Overview**.
2. Click **Bind**.

#### Result
- Target devices/accounts receive the task and progress/status is updated.

#### Related terms
- bind device (search & view)
- ums
- operation

### Deploy Applications (Group View)

#### What is this
This section covers deploy applications (group view) operations in UMS.

#### When to use
Use this when you need to perform deploy applications (group view) in daily UMS operations.

#### Related user questions
- how to use deploy applications group view in ums
- where to find deploy applications group view menu
- deploy applications group view step by step
- i cannot do deploy applications group view, why
- deploy applications group view failed, what should i check
- how do i run deploy applications group view
- need help for deploy applications group view
- can i do deploy applications group view by group

#### Entry Path
- Group Management → Notes

#### Steps
1. Go to **Group Management → Notes**.

#### Result
- Target devices/accounts receive the task and progress/status is updated.

#### Related terms
- deploy applications (group view)
- ums
- operation

### Remote Management

#### What is this
View device information remotely.

#### When to use
Use this when you need to perform remote management in daily UMS operations.

#### Related user questions
- how to use remote management in ums
- where to find remote management menu
- remote management step by step
- i cannot do remote management, why
- remote management failed, what should i check
- how do i run remote management
- need help for remote management
- can i do remote management by group

#### Entry Path
- Function overview → Notes

#### Steps
1. Go to **Function overview → Notes**.

#### Related terms
- remote management
- ums
- operation

### Configuration Deployment

#### What is this
Remotely configure device system settings.

#### When to use
Use this when you need to perform configuration deployment in daily UMS operations.

#### Related user questions
- how to use configuration deployment in ums
- where to find configuration deployment menu
- configuration deployment step by step
- i cannot do configuration deployment, why
- configuration deployment failed, what should i check
- how do i run configuration deployment
- need help for configuration deployment
- can i do configuration deployment by group

#### Entry Path
- Function overview → Remote Management

#### Steps
1. Go to **Function overview → Remote Management**.

#### Result
- Target devices/accounts receive the task and progress/status is updated.

#### Related terms
- configuration deployment
- ums
- operation

### Application Management

#### What is this
Remotely install applications.

#### When to use
Use this when you need to perform application management in daily UMS operations.

#### Related user questions
- how to use application management in ums
- where to find application management menu
- application management step by step
- i cannot do application management, why
- application management failed, what should i check
- how do i run application management
- need help for application management
- can i do application management by group

#### Entry Path
- Function overview → Remote Log

#### Steps
1. Go to **Function overview → Remote Log**.

#### Related terms
- application management
- ums
- operation

### Location Management

#### What is this
View device geographic location.

#### When to use
Use this when you need to perform location management in daily UMS operations.

#### Related user questions
- how to use location management in ums
- where to find location management menu
- location management step by step
- i cannot do location management, why
- location management failed, what should i check
- how do i run location management
- need help for location management
- can i do location management by group

#### Entry Path
- Function overview → Remote Log

#### Steps
1. Go to **Function overview → Remote Log**.

#### Related terms
- location management
- ums
- operation

### Move To

#### What is this
Used to move devices to another group.

#### When to use
Use this when you need to perform move to in daily UMS operations.

#### Related user questions
- how to use move to in ums
- where to find move to menu
- move to step by step
- i cannot do move to, why
- move to failed, what should i check
- how do i run move to
- need help for move to
- can i do move to by group

#### Entry Path
- Use Batch Manage → Move To

#### Steps
1. Go to **Use Batch Manage → Move To**.

#### Options
- Move selected devices:
- Use **Batch Operations**
- Move all devices in a group:
- Use **Batch Manage → Move To**

#### Related terms
- move to
- ums
- operation

### Extract Device Log

#### What is this
Used to remotely extract device system logs.

#### When to use
Use this when you need to perform extract device log in daily UMS operations.

#### Related user questions
- how to use extract device log in ums
- where to find extract device log menu
- extract device log step by step
- i cannot do extract device log, why
- extract device log failed, what should i check
- how do i run extract device log
- need help for extract device log
- can i do extract device log by group

#### Entry Path
- Remote Management → Remote Management → Batch Operations

#### Steps
1. Go to **Remote Management → Remote Management → Batch Operations**.

#### Result
- Device receives command
- Device uploads logs
- Logs must be downloaded from:

#### Related terms
- extract device log
- ums
- operation

### Shutdown / Restart

#### What is this
Used to remotely power off or reboot the device.

#### When to use
Use this when you need to perform shutdown / restart in daily UMS operations.

#### Related user questions
- how to use shutdown restart in ums
- where to find shutdown restart menu
- shutdown restart step by step
- i cannot do shutdown restart, why
- shutdown restart failed, what should i check
- how do i run shutdown restart
- need help for shutdown restart
- can i do shutdown restart by group

#### Entry Path
- Operation Details → Extract Device Log

#### Steps
1. Go to **Operation Details → Extract Device Log**.

#### Result
- Device executes shutdown or restart after receiving command

#### Related terms
- shutdown / restart
- ums
- operation

### Device Ring

#### What is this
Used to remotely ring a device for locating it nearby.

#### When to use
Use this when you need to perform device ring in daily UMS operations.

#### Related user questions
- how to use device ring in ums
- where to find device ring menu
- device ring step by step
- i cannot do device ring, why
- device ring failed, what should i check
- how do i run device ring
- need help for device ring
- can i do device ring by group

#### Entry Path
- Remote Management → Remote Management → Batch Operations

#### Steps
1. Go to **Remote Management → Remote Management → Batch Operations**.

#### Result
- Device rings at maximum volume
- Ringing stops only after:
- Shutdown
- Restart

#### Related terms
- device ring
- ums
- operation

### WIFI Settings

#### What is this
Used to create and push WIFI connection rules.

#### When to use
Use this when you need to perform wifi settings in daily UMS operations.

#### Related user questions
- how to use wifi settings in ums
- where to find wifi settings menu
- wifi settings step by step
- i cannot do wifi settings, why
- wifi settings failed, what should i check
- how do i run wifi settings
- need help for wifi settings
- can i do wifi settings by group

#### Entry Path
- Remote Management → Configuration Deployment → WIFI Settings

#### Steps
1. Go to **Remote Management → Configuration Deployment → WIFI Settings**.

#### Related terms
- wifi settings
- ums
- operation

### Add WIFI deployment rule

#### What is this
SSID.

#### When to use
Use this when you need to perform add wifi deployment rule in daily UMS operations.

#### Related user questions
- how to use add wifi deployment rule in ums
- where to find add wifi deployment rule menu
- add wifi deployment rule step by step
- i cannot do add wifi deployment rule, why
- add wifi deployment rule failed, what should i check
- how do i run add wifi deployment rule
- need help for add wifi deployment rule
- can i do add wifi deployment rule by group

#### Entry Path
- Remote Management → Configuration Deployment → WIFI Settings

#### Steps
1. Click **Add**
2. Enter:

#### Result
- Rule is created
- Initial status:
- **Not Pushed**

#### Rules
- If **Hidden Network** is enabled:
- Device can auto-connect to hidden WIFI within range
- The previous **Only allow this WIFI** option has been removed
- WIFI display on device is now controlled by **WIFI Whitelist**

#### Related terms
- add wifi deployment rule
- ums
- operation

### Push WIFI deployment rule

#### What is this
Rule status becomes:.

#### When to use
Use this when you need to perform push wifi deployment rule in daily UMS operations.

#### Related user questions
- how to use push wifi deployment rule in ums
- where to find push wifi deployment rule menu
- push wifi deployment rule step by step
- i cannot do push wifi deployment rule, why
- push wifi deployment rule failed, what should i check
- how do i run push wifi deployment rule
- need help for push wifi deployment rule
- can i do push wifi deployment rule by group

#### Entry Path
- Remote Management → Configuration Deployment → WIFI Settings

#### Steps
1. Click **Push**
2. Select one or more groups
3. Click **Next**
4. Add device SN:

#### Result
- Rule status becomes:
- **Pushed**
- Initial progress:
- **0**
- Progress starts from:
- **0 / pushed device count**

#### Related terms
- push wifi deployment rule
- ums
- operation

### Method 1: Group Push

#### What is this
This section covers method 1: group push operations in UMS.

#### When to use
Use this when you need to perform method 1: group push in daily UMS operations.

#### Related user questions
- how to use method 1 group push in ums
- where to find method 1 group push menu
- method 1 group push step by step
- i cannot do method 1 group push, why
- method 1 group push failed, what should i check
- how do i run method 1 group push
- need help for method 1 group push
- can i do method 1 group push by group

#### Entry Path
- Operation Details → Push WIFI deployment rule

#### Steps
1. Click **Push**
2. Select one or more groups
3. Click **Next**

#### Result
- Target devices/accounts receive the task and progress/status is updated.

#### Related terms
- method 1: group push
- ums
- operation

### Method 2: SN Push

#### What is this
Single SN manually.

#### When to use
Use this when you need to perform method 2: sn push in daily UMS operations.

#### Related user questions
- how to use method 2 sn push in ums
- where to find method 2 sn push menu
- method 2 sn push step by step
- i cannot do method 2 sn push, why
- method 2 sn push failed, what should i check
- how do i run method 2 sn push
- need help for method 2 sn push
- can i do method 2 sn push by group

#### Entry Path
- Operation Details → Push WIFI deployment rule

#### Steps
1. Click **Push**
2. Add device SN:

#### Result
- Target devices/accounts receive the task and progress/status is updated.

#### Related terms
- method 2: sn push
- ums
- operation

### Edit WIFI deployment rule

#### What is this
Policy name.

#### When to use
Use this when you need to perform edit wifi deployment rule in daily UMS operations.

#### Related user questions
- how to use edit wifi deployment rule in ums
- where to find edit wifi deployment rule menu
- edit wifi deployment rule step by step
- i cannot do edit wifi deployment rule, why
- edit wifi deployment rule failed, what should i check
- how do i run edit wifi deployment rule
- need help for edit wifi deployment rule
- can i do edit wifi deployment rule by group

#### Entry Path
- Remote Management → Configuration Deployment → WIFI Settings

#### Steps
1. Click **Edit**
2. Modify:
3. Save changes

#### Result
- Rule is pushed again
- Progress resets to **0**

#### Related terms
- edit wifi deployment rule
- ums
- operation

### View WIFI deployment record

#### What is this
This section covers view wifi deployment record operations in UMS.

#### When to use
Use this when you need to perform view wifi deployment record in daily UMS operations.

#### Related user questions
- how to use view wifi deployment record in ums
- where to find view wifi deployment record menu
- view wifi deployment record step by step
- i cannot do view wifi deployment record, why
- view wifi deployment record failed, what should i check
- how do i run view wifi deployment record
- need help for view wifi deployment record
- can i do view wifi deployment record by group

#### Entry Path
- Remote Management → Configuration Deployment → WIFI Settings

#### Steps
1. Click **Record**
2. View deployment history
3. Click **View Push Content** to see rule details

#### Result
- Target devices/accounts receive the task and progress/status is updated.

#### Related terms
- view wifi deployment record
- ums
- operation

### Delete WIFI deployment rule

#### What is this
Rule is removed from list.

#### When to use
Use this when you need to perform delete wifi deployment rule in daily UMS operations.

#### Related user questions
- how to use delete wifi deployment rule in ums
- where to find delete wifi deployment rule menu
- delete wifi deployment rule step by step
- i cannot do delete wifi deployment rule, why
- delete wifi deployment rule failed, what should i check
- how do i run delete wifi deployment rule
- need help for delete wifi deployment rule
- can i do delete wifi deployment rule by group

#### Entry Path
- Remote Management → Configuration Deployment → WIFI Settings

#### Steps
1. Click **Delete**

#### Result
- Rule is removed from list
- Devices disconnect from that SSID
- Previous WIFI deployment data is deleted

#### Related terms
- delete wifi deployment rule
- ums
- operation

### Function Settings

#### What is this
Used to disable selected device functions remotely.

#### When to use
Use this when you need to perform function settings in daily UMS operations.

#### Related user questions
- how to use function settings in ums
- where to find function settings menu
- function settings step by step
- i cannot do function settings, why
- function settings failed, what should i check
- how do i run function settings
- need help for function settings
- can i do function settings by group

#### Entry Path
- Remote Management → Configuration Deployment → Function Settings

#### Steps
1. Go to **Remote Management → Configuration Deployment → Function Settings**.

#### Related terms
- function settings
- ums
- operation

### Add function setting rule

#### What is this
Default: **my function setting**.

#### When to use
Use this when you need to perform add function setting rule in daily UMS operations.

#### Related user questions
- how to use add function setting rule in ums
- where to find add function setting rule menu
- add function setting rule step by step
- i cannot do add function setting rule, why
- add function setting rule failed, what should i check
- how do i run add function setting rule
- need help for add function setting rule
- can i do add function setting rule by group

#### Entry Path
- Operation Details → Access path

#### Steps
1. Click **Add**
2. Enter rule name
3. For each function item that should be disabled:

#### Result
- Rule is created
- Initial status:
- **Not Pushed**

#### Rules
- Rule name cannot be duplicated
- If multiple function setting rules are pushed to the same group:
- Only the latest rule takes effect
- Earlier rules are marked as completed

#### Related terms
- add function setting rule
- ums
- operation

### Push function setting rule

#### What is this
Rule status becomes:.

#### When to use
Use this when you need to perform push function setting rule in daily UMS operations.

#### Related user questions
- how to use push function setting rule in ums
- where to find push function setting rule menu
- push function setting rule step by step
- i cannot do push function setting rule, why
- push function setting rule failed, what should i check
- how do i run push function setting rule
- need help for push function setting rule
- can i do push function setting rule by group

#### Entry Path
- Operation Details → Add function setting rule

#### Steps
1. Click **Push**
2. Select target group
3. Click **OK**
4. Add device SN:

#### Result
- Rule status becomes:
- **Pushed**
- Progress starts at:
- **0 / total devices**
- Device receives rule
- Selected functions are disabled
- **0 / pushed device count**

#### Related terms
- push function setting rule
- ums
- operation

### Edit function setting rule

#### What is this
Rule name.

#### When to use
Use this when you need to perform edit function setting rule in daily UMS operations.

#### Related user questions
- how to use edit function setting rule in ums
- where to find edit function setting rule menu
- edit function setting rule step by step
- i cannot do edit function setting rule, why
- edit function setting rule failed, what should i check
- how do i run edit function setting rule
- need help for edit function setting rule
- can i do edit function setting rule by group

#### Entry Path
- Operation Details → Push function setting rule

#### Steps
1. Click **Edit**
2. Modify:
3. Save changes

#### Result
- Rule is pushed again
- Progress resets to **0**

#### Related terms
- edit function setting rule
- ums
- operation

### View function setting record

#### What is this
This section covers view function setting record operations in UMS.

#### When to use
Use this when you need to perform view function setting record in daily UMS operations.

#### Related user questions
- how to use view function setting record in ums
- where to find view function setting record menu
- view function setting record step by step
- i cannot do view function setting record, why
- view function setting record failed, what should i check
- how do i run view function setting record
- need help for view function setting record
- can i do view function setting record by group

#### Entry Path
- Operation Details → Edit function setting rule

#### Steps
1. Click **Record**
2. View push history
3. Click **View Push Content** to see details

#### Related terms
- view function setting record
- ums
- operation

### Delete function setting rule

#### What is this
Rule is removed from list.

#### When to use
Use this when you need to perform delete function setting rule in daily UMS operations.

#### Related user questions
- how to use delete function setting rule in ums
- where to find delete function setting rule menu
- delete function setting rule step by step
- i cannot do delete function setting rule, why
- delete function setting rule failed, what should i check
- how do i run delete function setting rule
- need help for delete function setting rule
- can i do delete function setting rule by group

#### Entry Path
- Operation Details → View function setting record

#### Steps
1. Click **Delete**

#### Result
- Rule is removed from list
- Device restores default function state
- Previously disabled items are no longer restricted

#### Related terms
- delete function setting rule
- ums
- operation

### WIFI Whitelist Settings

#### What is this
Used to restrict device WIFI list display to approved SSIDs only.

#### When to use
Use this when you need to perform wifi whitelist settings in daily UMS operations.

#### Related user questions
- how to use wifi whitelist settings in ums
- where to find wifi whitelist settings menu
- wifi whitelist settings step by step
- i cannot do wifi whitelist settings, why
- wifi whitelist settings failed, what should i check
- how do i run wifi whitelist settings
- need help for wifi whitelist settings
- can i do wifi whitelist settings by group

#### Entry Path
- Remote Management → Configuration Deployment → WIFI Whitelist Settings

#### Steps
1. Go to **Remote Management → Configuration Deployment → WIFI Whitelist Settings**.

#### Related terms
- wifi whitelist settings
- ums
- operation

### Add WIFI whitelist rule

#### What is this
Default: **My WIFI whitelist**.

#### When to use
Use this when you need to perform add wifi whitelist rule in daily UMS operations.

#### Related user questions
- how to use add wifi whitelist rule in ums
- where to find add wifi whitelist rule menu
- add wifi whitelist rule step by step
- i cannot do add wifi whitelist rule, why
- add wifi whitelist rule failed, what should i check
- how do i run add wifi whitelist rule
- need help for add wifi whitelist rule
- can i do add wifi whitelist rule by group

#### Entry Path
- Remote Management → Configuration Deployment → WIFI Whitelist Settings

#### Steps
1. Click **Add**
2. Enter rule name
3. Select target group
4. Add whitelist SSIDs:

#### Result
- Rule is created
- Initial status:
- **Not Pushed**

#### Rules
- Rule name cannot be duplicated
- One rule corresponds to one group
- Group WIFI configuration SSIDs can be displayed as selectable whitelist items

#### Related terms
- add wifi whitelist rule
- ums
- operation

### Push WIFI whitelist rule

#### What is this
Rule status becomes:.

#### When to use
Use this when you need to perform push wifi whitelist rule in daily UMS operations.

#### Related user questions
- how to use push wifi whitelist rule in ums
- where to find push wifi whitelist rule menu
- push wifi whitelist rule step by step
- i cannot do push wifi whitelist rule, why
- push wifi whitelist rule failed, what should i check
- how do i run push wifi whitelist rule
- need help for push wifi whitelist rule
- can i do push wifi whitelist rule by group

#### Entry Path
- Remote Management → Configuration Deployment → WIFI Whitelist Settings

#### Steps
1. Click **Push**
2. Confirm push

#### Result
- Rule status becomes:
- **Pushed**
- Progress starts at:
- **0 / total devices**
- Device shows only approved whitelist WIFI on WIFI list page

#### Related terms
- push wifi whitelist rule
- ums
- operation

### Edit WIFI whitelist rule

#### What is this
Rule name.

#### When to use
Use this when you need to perform edit wifi whitelist rule in daily UMS operations.

#### Related user questions
- how to use edit wifi whitelist rule in ums
- where to find edit wifi whitelist rule menu
- edit wifi whitelist rule step by step
- i cannot do edit wifi whitelist rule, why
- edit wifi whitelist rule failed, what should i check
- how do i run edit wifi whitelist rule
- need help for edit wifi whitelist rule
- can i do edit wifi whitelist rule by group

#### Entry Path
- Remote Management → Configuration Deployment → WIFI Whitelist Settings

#### Steps
1. Click **Edit**
2. Modify:
3. Save changes

#### Result
- Rule is pushed again
- Progress resets to **0**

#### Rules
- Click **View More** to check SSIDs inherited from group WIFI configuration
- These inherited SSIDs cannot be edited here

#### Related terms
- edit wifi whitelist rule
- ums
- operation

### View WIFI whitelist record

#### What is this
This section covers view wifi whitelist record operations in UMS.

#### When to use
Use this when you need to perform view wifi whitelist record in daily UMS operations.

#### Related user questions
- how to use view wifi whitelist record in ums
- where to find view wifi whitelist record menu
- view wifi whitelist record step by step
- i cannot do view wifi whitelist record, why
- view wifi whitelist record failed, what should i check
- how do i run view wifi whitelist record
- need help for view wifi whitelist record
- can i do view wifi whitelist record by group

#### Entry Path
- Remote Management → Configuration Deployment → WIFI Whitelist Settings

#### Steps
1. Click **Record**
2. View push history
3. Click **View Push Content** to see details

#### Related terms
- view wifi whitelist record
- ums
- operation

### Delete WIFI whitelist rule

#### What is this
Rule is removed from list.

#### When to use
Use this when you need to perform delete wifi whitelist rule in daily UMS operations.

#### Related user questions
- how to use delete wifi whitelist rule in ums
- where to find delete wifi whitelist rule menu
- delete wifi whitelist rule step by step
- i cannot do delete wifi whitelist rule, why
- delete wifi whitelist rule failed, what should i check
- how do i run delete wifi whitelist rule
- need help for delete wifi whitelist rule
- can i do delete wifi whitelist rule by group

#### Entry Path
- Remote Management → Configuration Deployment → WIFI Whitelist Settings

#### Steps
1. Click **Delete**

#### Result
- Rule is removed from list
- Device returns to showing all detected WIFI networks

#### Related terms
- delete wifi whitelist rule
- ums
- operation

### APN Settings

#### What is this
Used to remotely configure APN and connect devices to the pushed APN.

#### When to use
Use this when you need to perform apn settings in daily UMS operations.

#### Related user questions
- how to use apn settings in ums
- where to find apn settings menu
- apn settings step by step
- i cannot do apn settings, why
- apn settings failed, what should i check
- how do i run apn settings
- need help for apn settings
- can i do apn settings by group

#### Entry Path
- Remote Management → Configuration Deployment → APN Settings

#### Steps
1. Go to **Remote Management → Configuration Deployment → APN Settings**.

#### Related terms
- apn settings
- ums
- operation

### Add APN setting rule

#### What is this
Rule name.

#### When to use
Use this when you need to perform add apn setting rule in daily UMS operations.

#### Related user questions
- how to use add apn setting rule in ums
- where to find add apn setting rule menu
- add apn setting rule step by step
- i cannot do add apn setting rule, why
- add apn setting rule failed, what should i check
- how do i run add apn setting rule
- need help for add apn setting rule
- can i do add apn setting rule by group

#### Entry Path
- Operation Details → Access path

#### Steps
1. Click **Add**
2. Enter rule information:
3. Click **OK**

#### Result
- Rule is created
- Initial status:
- **Not Pushed**

#### Rules
- Default rule name:
- **My APN Rule**
- Rule name cannot be duplicated
- If multiple APN rules are pushed to the same group:
- Multiple APNs are saved
- Device connects to the **latest executed APN**

#### Related terms
- add apn setting rule
- ums
- operation

### Push APN setting rule

#### What is this
Rule status becomes:.

#### When to use
Use this when you need to perform push apn setting rule in daily UMS operations.

#### Related user questions
- how to use push apn setting rule in ums
- where to find push apn setting rule menu
- push apn setting rule step by step
- i cannot do push apn setting rule, why
- push apn setting rule failed, what should i check
- how do i run push apn setting rule
- need help for push apn setting rule
- can i do push apn setting rule by group

#### Entry Path
- Operation Details → Add APN setting rule

#### Steps
1. Click **Push**
2. Select target group
3. Click **OK**
4. Add SN manually or via template import

#### Result
- Rule status becomes:
- **Pushed**
- Progress starts at:
- **0**
- Device saves pushed APN
- Device connects to latest pushed APN

#### Related terms
- push apn setting rule
- ums
- operation

### Edit APN setting rule

#### What is this
Rule name.

#### When to use
Use this when you need to perform edit apn setting rule in daily UMS operations.

#### Related user questions
- how to use edit apn setting rule in ums
- where to find edit apn setting rule menu
- edit apn setting rule step by step
- i cannot do edit apn setting rule, why
- edit apn setting rule failed, what should i check
- how do i run edit apn setting rule
- need help for edit apn setting rule
- can i do edit apn setting rule by group

#### Entry Path
- Operation Details → Push APN setting rule

#### Steps
1. Click **Edit**
2. Modify:
3. Save changes

#### Result
- Rule is pushed again
- Progress resets to **0**

#### Related terms
- edit apn setting rule
- ums
- operation

### View APN setting record

#### What is this
This section covers view apn setting record operations in UMS.

#### When to use
Use this when you need to perform view apn setting record in daily UMS operations.

#### Related user questions
- how to use view apn setting record in ums
- where to find view apn setting record menu
- view apn setting record step by step
- i cannot do view apn setting record, why
- view apn setting record failed, what should i check
- how do i run view apn setting record
- need help for view apn setting record
- can i do view apn setting record by group

#### Entry Path
- Operation Details → Edit APN setting rule

#### Steps
1. Click **Record**
2. View push history
3. Click **View Push Content** to see details

#### Related terms
- view apn setting record
- ums
- operation

### Delete APN setting rule

#### What is this
Rule is removed from list.

#### When to use
Use this when you need to perform delete apn setting rule in daily UMS operations.

#### Related user questions
- how to use delete apn setting rule in ums
- where to find delete apn setting rule menu
- delete apn setting rule step by step
- i cannot do delete apn setting rule, why
- delete apn setting rule failed, what should i check
- how do i run delete apn setting rule
- need help for delete apn setting rule
- can i do delete apn setting rule by group

#### Entry Path
- Operation Details → View APN setting record

#### Steps
1. Click **Delete**

#### Result
- Rule is removed from list
- Device deletes APN pushed by this rule
- Device restores default APN connection

#### Rules
- Deleting one APN rule does **not** delete other APNs pushed earlier

#### Related terms
- delete apn setting rule
- ums
- operation

### Add send script rule

#### What is this
Rule name.

#### When to use
Use this when you need to perform add send script rule in daily UMS operations.

#### Related user questions
- how to use add send script rule in ums
- where to find add send script rule menu
- add send script rule step by step
- i cannot do add send script rule, why
- add send script rule failed, what should i check
- how do i run add send script rule
- need help for add send script rule
- can i do add send script rule by group

#### Entry Path
- Remote Management → Configuration Deployment → Send Script

#### Steps
1. Click **Add**
2. Enter:

#### Options
- **Start APP**
- **Run Intent**
- Action
- Or:
- Application package name
- Application class name
- Action is required
- int

#### Result
- Even if script content is empty, the program can still read parameters
- If no matching parameter exists, default values are used

#### Rules
- Rule name cannot be duplicated
- The device can only start the app if:
- Action is provided
- Or package name + class name are correctly provided
- For intent execution:
- The target app must register the corresponding broadcast/action
- Script content supports typed key-value pairs

#### Related terms
- add send script rule
- ums
- operation

### Push send script rule

#### What is this
Rule status becomes:.

#### When to use
Use this when you need to perform push send script rule in daily UMS operations.

#### Related user questions
- how to use push send script rule in ums
- where to find push send script rule menu
- push send script rule step by step
- i cannot do push send script rule, why
- push send script rule failed, what should i check
- how do i run push send script rule
- need help for push send script rule
- can i do push send script rule by group

#### Entry Path
- Remote Management → Configuration Deployment → Send Script

#### Steps
1. Click **Push**
2. Select target group
3. Click **OK**
4. Add SN manually or via template import

#### Result
- Rule status becomes:
- **Pushed**
- Progress starts at:
- **0 / total devices**
- Device receives instruction
- Device executes the corresponding startup program or intent
- **0 / pushed device count**
- Target devices execute the send script rule

#### Related terms
- push send script rule
- ums
- operation

### Edit send script rule

#### What is this
Rule name.

#### When to use
Use this when you need to perform edit send script rule in daily UMS operations.

#### Related user questions
- how to use edit send script rule in ums
- where to find edit send script rule menu
- edit send script rule step by step
- i cannot do edit send script rule, why
- edit send script rule failed, what should i check
- how do i run edit send script rule
- need help for edit send script rule
- can i do edit send script rule by group

#### Entry Path
- Remote Management → Configuration Deployment → Send Script

#### Steps
1. Click **Edit**
2. Modify:
3. Save changes

#### Result
- Rule is pushed again
- Progress resets to **0**

#### Related terms
- edit send script rule
- ums
- operation

### View send script record

#### What is this
This section covers view send script record operations in UMS.

#### When to use
Use this when you need to perform view send script record in daily UMS operations.

#### Related user questions
- how to use view send script record in ums
- where to find view send script record menu
- view send script record step by step
- i cannot do view send script record, why
- view send script record failed, what should i check
- how do i run view send script record
- need help for view send script record
- can i do view send script record by group

#### Entry Path
- Remote Management → Configuration Deployment → Send Script

#### Steps
1. Click **Record**
2. View push history
3. Click **View Push Content** to see details

#### Related terms
- view send script record
- ums
- operation

### Delete send script rule

#### What is this
Rule is removed from list.

#### When to use
Use this when you need to perform delete send script rule in daily UMS operations.

#### Related user questions
- how to use delete send script rule in ums
- where to find delete send script rule menu
- delete send script rule step by step
- i cannot do delete send script rule, why
- delete send script rule failed, what should i check
- how do i run delete send script rule
- need help for delete send script rule
- can i do delete send script rule by group

#### Entry Path
- Remote Management → Configuration Deployment → Send Script

#### Steps
1. Click **Delete**

#### Result
- Rule is removed from list
- Device receives delete instruction
- Previously pushed script content remains reflected on device page
- Device UI will not automatically revert
- Manual return to Android default desktop may be required

#### Related terms
- delete send script rule
- ums
- operation

### Extract UMS Log

#### What is this
Default option.

#### When to use
Use this when you need to perform extract ums log in daily UMS operations.

#### Related user questions
- how to use extract ums log in ums
- where to find extract ums log menu
- extract ums log step by step
- i cannot do extract ums log, why
- extract ums log failed, what should i check
- how do i run extract ums log
- need help for extract ums log
- can i do extract ums log by group

#### Entry Path
- Remote Management (Continued) → Log Types

#### Steps
1. Go to **Remote Management (Continued) → Log Types**.

#### Related terms
- extract ums log
- ums
- operation

### Extract System Log

#### What is this
Time range.

#### When to use
Use this when you need to perform extract system log in daily UMS operations.

#### Related user questions
- how to use extract system log in ums
- where to find extract system log menu
- extract system log step by step
- i cannot do extract system log, why
- extract system log failed, what should i check
- how do i run extract system log
- need help for extract system log
- can i do extract system log by group

#### Entry Path
- Remote Management (Continued) → Log Types

#### Steps
1. Select **System Log**
2. Set:
3. Click **OK**

#### Result
- Enables system logging remotely
- Logs generated within the period are uploaded automatically

#### Related terms
- extract system log
- ums
- operation

### Extract Specified File

#### What is this
Target directory path.

#### When to use
Use this when you need to perform extract specified file in daily UMS operations.

#### Related user questions
- how to use extract specified file in ums
- where to find extract specified file menu
- extract specified file step by step
- i cannot do extract specified file, why
- extract specified file failed, what should i check
- how do i run extract specified file
- need help for extract specified file
- can i do extract specified file by group

#### Entry Path
- Remote Management (Continued) → Log Types

#### Steps
1. Select **Specified File**
2. Enter:
3. Click **OK**

#### Rules
- If path does not exist or is empty:
- Status = **Execution Failed**
- Message = **File does not exist**

#### Related terms
- extract specified file
- ums
- operation

### Restore Factory Settings

#### What is this
Resets device to factory state.

#### When to use
Use this when you need to perform restore factory settings in daily UMS operations.

#### Related user questions
- how to use restore factory settings in ums
- where to find restore factory settings menu
- restore factory settings step by step
- i cannot do restore factory settings, why
- restore factory settings failed, what should i check
- how do i run restore factory settings
- need help for restore factory settings
- can i do restore factory settings by group

#### Entry Path
- Remote Management (Continued) → Functions

#### Steps
1. Go to **Remote Management (Continued) → Functions**.

#### Rules
- All apps and data will be deleted
- Use with caution

#### Related terms
- restore factory settings
- ums
- operation

### Deployment Method

#### What is this
**Silent Installation**.

#### When to use
Use this when you need to perform deployment method in daily UMS operations.

#### Related user questions
- how to use deployment method in ums
- where to find deployment method menu
- deployment method step by step
- i cannot do deployment method, why
- deployment method failed, what should i check
- how do i run deployment method
- need help for deployment method
- can i do deployment method by group

#### Entry Path
- Remote Management (Continued) → Configuration Options

#### Steps
1. Go to **Remote Management (Continued) → Configuration Options**.

#### Result
- Target devices/accounts receive the task and progress/status is updated.

#### Related terms
- deployment method
- ums
- operation

### Deployment Time

#### What is this
**Deploy Now**.

#### When to use
Use this when you need to perform deployment time in daily UMS operations.

#### Related user questions
- how to use deployment time in ums
- where to find deployment time menu
- deployment time step by step
- i cannot do deployment time, why
- deployment time failed, what should i check
- how do i run deployment time
- need help for deployment time
- can i do deployment time by group

#### Entry Path
- Remote Management (Continued) → Configuration Options

#### Steps
1. Go to **Remote Management (Continued) → Configuration Options**.

#### Result
- Target devices/accounts receive the task and progress/status is updated.

#### Related terms
- deployment time
- ums
- operation

### Push Deployment Policy

#### What is this
Unfinished / Completed / Failed / Total.

#### When to use
Use this when you need to perform push deployment policy in daily UMS operations.

#### Related user questions
- how to use push deployment policy in ums
- where to find push deployment policy menu
- push deployment policy step by step
- i cannot do push deployment policy, why
- push deployment policy failed, what should i check
- how do i run push deployment policy
- need help for push deployment policy
- can i do push deployment policy by group

#### Entry Path
- Remote Management (Continued) → Configuration Options

#### Steps
1. Click **Push**
2. Select group(s)
3. Click **Next**
4. Add SN:

#### Result
- Target devices/accounts receive the task and progress/status is updated.

#### Related terms
- push deployment policy
- ums
- operation

### Edit Policy

#### What is this
Policy re-pushed.

#### When to use
Use this when you need to perform edit policy in daily UMS operations.

#### Related user questions
- how to use edit policy in ums
- where to find edit policy menu
- edit policy step by step
- i cannot do edit policy, why
- edit policy failed, what should i check
- how do i run edit policy
- need help for edit policy
- can i do edit policy by group

#### Entry Path
- Remote Management (Continued) → Important Rules

#### Steps
1. Click **Edit**
2. Modify configuration
3. Save

#### Result
- Policy re-pushed
- Progress resets to **0**

#### Related terms
- edit policy
- ums
- operation

### View Records

#### What is this
Click **Record**.

#### When to use
Use this when you need to perform view records in daily UMS operations.

#### Related user questions
- how to use view records in ums
- where to find view records menu
- view records step by step
- i cannot do view records, why
- view records failed, what should i check
- how do i run view records
- need help for view records
- can i do view records by group

#### Entry Path
- Remote Management (Continued) → Edit Policy

#### Steps
1. Go to **Remote Management (Continued) → Edit Policy**.

#### Related terms
- view records
- ums
- operation

### Delete Policy

#### What is this
Click **Delete**.

#### When to use
Use this when you need to perform delete policy in daily UMS operations.

#### Related user questions
- how to use delete policy in ums
- where to find delete policy menu
- delete policy step by step
- i cannot do delete policy, why
- delete policy failed, what should i check
- how do i run delete policy
- need help for delete policy
- can i do delete policy by group

#### Entry Path
- Remote Management (Continued) → Execution Progress

#### Steps
1. Go to **Remote Management (Continued) → Execution Progress**.
2. Click **Delete**.

#### Result
- Policy removed
- Remaining tasks are terminated

#### Related terms
- delete policy
- ums
- operation

### Add Whitelist Rule

#### What is this
Rule name.

#### When to use
Use this when you need to perform add whitelist rule in daily UMS operations.

#### Related user questions
- how to use add whitelist rule in ums
- where to find add whitelist rule menu
- add whitelist rule step by step
- i cannot do add whitelist rule, why
- add whitelist rule failed, what should i check
- how do i run add whitelist rule
- need help for add whitelist rule
- can i do add whitelist rule by group

#### Entry Path
- Remote Management (Continued) → ⚠️ Important

#### Steps
1. Click **Add**
2. Enter:
3. Add multiple apps if needed

#### Result
- A new item/rule is created and listed.

#### Related terms
- add whitelist rule
- ums
- operation

### Push Whitelist

#### What is this
Only whitelist apps can run/install.

#### When to use
Use this when you need to perform push whitelist in daily UMS operations.

#### Related user questions
- how to use push whitelist in ums
- where to find push whitelist menu
- push whitelist step by step
- i cannot do push whitelist, why
- push whitelist failed, what should i check
- how do i run push whitelist
- need help for push whitelist
- can i do push whitelist by group

#### Entry Path
- Remote Management (Continued) → Notes

#### Steps
1. Click **Push**
2. Confirm warning

#### Result
- Only whitelist apps can run/install
- Other apps will be removed

#### Related terms
- push whitelist
- ums
- operation

### Edit Whitelist

#### What is this
Modify:.

#### When to use
Use this when you need to perform edit whitelist in daily UMS operations.

#### Related user questions
- how to use edit whitelist in ums
- where to find edit whitelist menu
- edit whitelist step by step
- i cannot do edit whitelist, why
- edit whitelist failed, what should i check
- how do i run edit whitelist
- need help for edit whitelist
- can i do edit whitelist by group

#### Entry Path
- Remote Management (Continued) → Push Whitelist

#### Steps
1. Go to **Remote Management (Continued) → Push Whitelist**.
2. Click **Edit**.

#### Result
- Rule re-pushed
- Progress resets to **0**

#### Related terms
- edit whitelist
- ums
- operation

### Delete Whitelist

#### What is this
Click **Delete**.

#### When to use
Use this when you need to perform delete whitelist in daily UMS operations.

#### Related user questions
- how to use delete whitelist in ums
- where to find delete whitelist menu
- delete whitelist step by step
- i cannot do delete whitelist, why
- delete whitelist failed, what should i check
- how do i run delete whitelist
- need help for delete whitelist
- can i do delete whitelist by group

#### Entry Path
- Remote Management (Continued) → Edit Whitelist

#### Steps
1. Go to **Remote Management (Continued) → Edit Whitelist**.
2. Click **Delete**.

#### Result
- Device returns to unrestricted state

#### Related terms
- delete whitelist
- ums
- operation

### Set Geo-Fence

#### What is this
Click map (center + radius).

#### When to use
Use this when you need to perform set geo-fence in daily UMS operations.

#### Related user questions
- how to use set geo fence in ums
- where to find set geo fence menu
- set geo fence step by step
- i cannot do set geo fence, why
- set geo fence failed, what should i check
- how do i run set geo fence
- need help for set geo fence
- can i do set geo fence by group

#### Entry Path
- Remote Management (Continued) → Access

#### Steps
1. Select group
2. Set location:
3. Enable fence switch
4. Add actions when out of range:
5. Enter alert email
6. Save configuration

#### Related terms
- set geo-fence
- ums
- operation

### Configure Management

#### What is this
This section covers configure management operations in UMS.

#### When to use
Use this when you need to perform configure management in daily UMS operations.

#### Related user questions
- how to use configure management in ums
- where to find configure management menu
- configure management step by step
- i cannot do configure management, why
- configure management failed, what should i check
- how do i run configure management
- need help for configure management
- can i do configure management by group

#### Entry Path
- Stage Management → Main capabilities

#### Steps
1. Go to **Stage Management → Main capabilities**.

#### Related terms
- configure management
- ums
- operation

### Publish Configuration Rule

#### What is this
Used to push a configuration rule to groups or specific SNs.

#### When to use
Use this when you need to perform publish configuration rule in daily UMS operations.

#### Related user questions
- how to use publish configuration rule in ums
- where to find publish configuration rule menu
- publish configuration rule step by step
- i cannot do publish configuration rule, why
- publish configuration rule failed, what should i check
- how do i run publish configuration rule
- need help for publish configuration rule
- can i do publish configuration rule by group

#### Entry Path
- Stage Management → Function overview

#### Steps
1. Go to **Stage Management → Function overview**.

#### Result
- Target devices/accounts receive the task and progress/status is updated.

#### Related terms
- publish configuration rule
- ums
- operation

### Group Publish

#### What is this
All devices in the group.

#### When to use
Use this when you need to perform group publish in daily UMS operations.

#### Related user questions
- how to use group publish in ums
- where to find group publish menu
- group publish step by step
- i cannot do group publish, why
- group publish failed, what should i check
- how do i run group publish
- need help for group publish
- can i do group publish by group

#### Entry Path
- Stage Management → Function overview

#### Steps
1. Select a configuration rule
3. Choose **Group Publish**
4. Select one or more groups
5. Optionally keep subgroup association enabled
6. Choose:

#### Result
- Rule status changes to:
- **Published**
- Initial progress:
- **0 / pushed device count**
- Devices in the selected group receive the configuration rule
- Only devices of the matching type execute the configuration

#### Related terms
- group publish
- ums
- operation

### SN Publish

#### What is this
Manually add a single SN.

#### When to use
Use this when you need to perform sn publish in daily UMS operations.

#### Related user questions
- how to use sn publish in ums
- where to find sn publish menu
- sn publish step by step
- i cannot do sn publish, why
- sn publish failed, what should i check
- how do i run sn publish
- need help for sn publish
- can i do sn publish by group

#### Entry Path
- Stage Management → Function overview

#### Steps
1. Select a configuration rule
3. Choose **SN Publish**
4. Add SNs:

#### Result
- Rule status changes to:
- **Pushed**
- Initial progress:
- **0 / pushed device count**
- Target devices receive the configuration rule
- Only devices of the matching type execute the configuration

#### Related terms
- sn publish
- ums
- operation

### Export

#### What is this
Click **Export**.

#### When to use
Use this when you need to perform export in daily UMS operations.

#### Related user questions
- how to use export in ums
- where to find export menu
- export step by step
- i cannot do export, why
- export failed, what should i check
- how do i run export
- need help for export
- can i do export by group

#### Entry Path
- Data Center → Query conditions

#### Steps
1. Go to **Data Center → Query conditions**.
2. Click **Export**.

#### Result
- Export task/file is generated and available for download.

#### Related terms
- export
- ums
- operation

### Application Brief

#### What is this
Used to view third-party application information on all devices under the account.

#### When to use
Use this when you need to perform application brief in daily UMS operations.

#### Related user questions
- how to use application brief in ums
- where to find application brief menu
- application brief step by step
- i cannot do application brief, why
- application brief failed, what should i check
- how do i run application brief
- need help for application brief
- can i do application brief by group

#### Entry Path
- Data Center → Application Brief

#### Steps
1. Go to **Data Center → Application Brief**.

#### Related terms
- application brief
- ums
- operation

### App Usage Time

#### What is this
Used to view usage duration of installed applications across devices.

#### When to use
Use this when you need to perform app usage time in daily UMS operations.

#### Related user questions
- how to use app usage time in ums
- where to find app usage time menu
- app usage time step by step
- i cannot do app usage time, why
- app usage time failed, what should i check
- how do i run app usage time
- need help for app usage time
- can i do app usage time by group

#### Entry Path
- Data Center → App Usage Time

#### Steps
1. Go to **Data Center → App Usage Time**.

#### Related terms
- app usage time
- ums
- operation

### Device Lifecycle

#### What is this
Used to view delivery and activation status of devices.

#### When to use
Use this when you need to perform device lifecycle in daily UMS operations.

#### Related user questions
- how to use device lifecycle in ums
- where to find device lifecycle menu
- device lifecycle step by step
- i cannot do device lifecycle, why
- device lifecycle failed, what should i check
- how do i run device lifecycle
- need help for device lifecycle
- can i do device lifecycle by group

#### Entry Path
- Data Center → Device Lifecycle

#### Steps
1. Go to **Data Center → Device Lifecycle**.

#### Related terms
- device lifecycle
- ums
- operation

### Flow Management

#### What is this
Used to view mobile data consumption for devices under the account.

#### When to use
Use this when you need to perform flow management in daily UMS operations.

#### Related user questions
- how to use flow management in ums
- where to find flow management menu
- flow management step by step
- i cannot do flow management, why
- flow management failed, what should i check
- how do i run flow management
- need help for flow management
- can i do flow management by group

#### Entry Path
- Data Center → Flow Management

#### Steps
1. Go to **Data Center → Flow Management**.

#### Related terms
- flow management
- ums
- operation

### Operation Log

#### What is this
Used to view platform operation records.

#### When to use
Use this when you need to perform operation log in daily UMS operations.

#### Related user questions
- how to use operation log in ums
- where to find operation log menu
- operation log step by step
- i cannot do operation log, why
- operation log failed, what should i check
- how do i run operation log
- need help for operation log
- can i do operation log by group

#### Entry Path
- Data Center → Operation Log

#### Steps
1. Go to **Data Center → Operation Log**.

#### Related terms
- operation log
- ums
- operation

### Data Report

#### What is this
Used to generate, export, and subscribe to device data reports.

#### When to use
Use this when you need to perform data report in daily UMS operations.

#### Related user questions
- how to use data report in ums
- where to find data report menu
- data report step by step
- i cannot do data report, why
- data report failed, what should i check
- how do i run data report
- need help for data report
- can i do data report by group

#### Entry Path
- Data Center → Data Reports

#### Steps
1. Go to **Data Center → Data Reports**.

#### Related terms
- data report
- ums
- operation

### Add Data Report

#### What is this
Used to create a new report rule.

#### When to use
Use this when you need to perform add data report in daily UMS operations.

#### Related user questions
- how to use add data report in ums
- where to find add data report menu
- add data report step by step
- i cannot do add data report, why
- add data report failed, what should i check
- how do i run add data report
- need help for add data report
- can i do add data report by group

#### Entry Path
- Data Center → Data Reports

#### Steps
1. Go to **Data Center → Data Reports**.
2. Click **Add**.

#### Result
- A new item/rule is created and listed.

#### Related terms
- add data report
- ums
- operation

### View Data Report

#### What is this
Used to view details of an existing report rule.

#### When to use
Use this when you need to perform view data report in daily UMS operations.

#### Related user questions
- how to use view data report in ums
- where to find view data report menu
- view data report step by step
- i cannot do view data report, why
- view data report failed, what should i check
- how do i run view data report
- need help for view data report
- can i do view data report by group

#### Entry Path
- Data Center → Data Reports

#### Steps
1. Go to **Data Center → Data Reports**.

#### Related terms
- view data report
- ums
- operation

### Export Data Report

#### What is this
Used to export report data by account or by SN.

#### When to use
Use this when you need to perform export data report in daily UMS operations.

#### Related user questions
- how to use export data report in ums
- where to find export data report menu
- export data report step by step
- i cannot do export data report, why
- export data report failed, what should i check
- how do i run export data report
- need help for export data report
- can i do export data report by group

#### Entry Path
- Data Center → Data Reports

#### Steps
1. Go to **Data Center → Data Reports**.
2. Click **Export**.

#### Result
- Export task/file is generated and available for download.

#### Related terms
- export data report
- ums
- operation

### Method 1: Export by Account

#### What is this
**Account Export**.

#### When to use
Use this when you need to perform method 1: export by account in daily UMS operations.

#### Related user questions
- how to use method 1 export by account in ums
- where to find method 1 export by account menu
- method 1 export by account step by step
- i cannot do method 1 export by account, why
- method 1 export by account failed, what should i check
- how do i run method 1 export by account
- need help for method 1 export by account
- can i do method 1 export by account by group

#### Entry Path
- Data Center → Steps

#### Steps
1. Click **Export**
2. Keep export method as:
3. Select target accounts
4. Click **OK**
5. Go to **Export History**
6. Click **View**
7. Download the Excel report

#### Result
- Report is exported
- **Last Export Time** is updated

#### Related terms
- method 1: export by account
- ums
- operation

### Download exported file

#### What is this
This section covers download exported file operations in UMS.

#### When to use
Use this when you need to perform download exported file in daily UMS operations.

#### Related user questions
- how to use download exported file in ums
- where to find download exported file menu
- download exported file step by step
- i cannot do download exported file, why
- download exported file failed, what should i check
- how do i run download exported file
- need help for download exported file
- can i do download exported file by group

#### Entry Path
- Data Center → Method 1: Export by Account

#### Steps
1. Go to **Export History**
2. Click **View**
3. Download the Excel report

#### Result
- Export task/file is generated and available for download.

#### Related terms
- download exported file
- ums
- operation

### Method 2: Export by SN

#### What is this
**SN**.

#### When to use
Use this when you need to perform method 2: export by sn in daily UMS operations.

#### Related user questions
- how to use method 2 export by sn in ums
- where to find method 2 export by sn menu
- method 2 export by sn step by step
- i cannot do method 2 export by sn, why
- method 2 export by sn failed, what should i check
- how do i run method 2 export by sn
- need help for method 2 export by sn
- can i do method 2 export by sn by group

#### Entry Path
- Or via Download Template → Batch Import

#### Steps
1. Click **Export**
2. Select export method:
3. Add SNs:
4. Click **OK**

#### Result
- Report is exported
- **Last Export Time** is updated

#### Related terms
- method 2: export by sn
- ums
- operation

### Subscribe Data Report

#### What is this
Used to send report results to email on a scheduled basis.

#### When to use
Use this when you need to perform subscribe data report in daily UMS operations.

#### Related user questions
- how to use subscribe data report in ums
- where to find subscribe data report menu
- subscribe data report step by step
- i cannot do subscribe data report, why
- subscribe data report failed, what should i check
- how do i run subscribe data report
- need help for subscribe data report
- can i do subscribe data report by group

#### Entry Path
- Data Center → Data Reports

#### Steps
1. Go to **Data Center → Data Reports**.
2. Click **Subscribe**.

#### Related terms
- subscribe data report
- ums
- operation

### Manage Subscription Status

#### What is this
Used to stop or resume existing subscriptions.

#### When to use
Use this when you need to perform manage subscription status in daily UMS operations.

#### Related user questions
- how to use manage subscription status in ums
- where to find manage subscription status menu
- manage subscription status step by step
- i cannot do manage subscription status, why
- manage subscription status failed, what should i check
- how do i run manage subscription status
- need help for manage subscription status
- can i do manage subscription status by group

#### Entry Path
- Data Center → SN Subscription

#### Steps
1. Open **History Subscription**
2. Click **View**
3. On the right side of the page, choose:

#### Related terms
- manage subscription status
- ums
- operation

### Delete Data Report

#### What is this
Used to remove a report rule.

#### When to use
Use this when you need to perform delete data report in daily UMS operations.

#### Related user questions
- how to use delete data report in ums
- where to find delete data report menu
- delete data report step by step
- i cannot do delete data report, why
- delete data report failed, what should i check
- how do i run delete data report
- need help for delete data report
- can i do delete data report by group

#### Entry Path
- Data Center → Data Reports

#### Steps
1. Go to **Data Center → Data Reports**.
2. Click **Delete**.

#### Result
- The selected item is removed and unavailable for new tasks.

#### Related terms
- delete data report
- ums
- operation

### Single Binding

#### What is this
Used to bind one device to a sub-account.

#### When to use
Use this when you need to perform single binding in daily UMS operations.

#### Related user questions
- how to use single binding in ums
- where to find single binding menu
- single binding step by step
- i cannot do single binding, why
- single binding failed, what should i check
- how do i run single binding
- need help for single binding
- can i do single binding by group

#### Entry Path
- Device Manager → Displayed information

#### Steps
1. Select a device
2. Click **Distribute in Batches** in the operation bar
3. Select a target sub-account in the pop-up window
4. Click **Binding**

#### Result
- The device is bound to the selected sub-account

#### Related terms
- single binding
- ums
- operation

### Unbind Device

#### What is this
Used to remove the device from the current sub-account.

#### When to use
Use this when you need to perform unbind device in daily UMS operations.

#### Related user questions
- how to use unbind device in ums
- where to find unbind device menu
- unbind device step by step
- i cannot do unbind device, why
- unbind device failed, what should i check
- how do i run unbind device
- need help for unbind device
- can i do unbind device by group

#### Entry Path
- Group Management → Group Overview

#### Steps
1. Select the bound device
2. Click **Unbind**

#### Result
- The device is returned from the sub-account

#### Rules
- After a device is successfully bound, it can detect applications under that sub-account

#### Related terms
- unbind device
- ums
- operation

### Batch Binding

#### What is this
Used to bind multiple devices to a sub-account.

#### When to use
Use this when you need to perform batch binding in daily UMS operations.

#### Related user questions
- how to use batch binding in ums
- where to find batch binding menu
- batch binding step by step
- i cannot do batch binding, why
- batch binding failed, what should i check
- how do i run batch binding
- need help for batch binding
- can i do batch binding by group

#### Entry Path
- Device Manager → Unbind Device

#### Steps
1. Click **Distribute in Batches** at the top right of the list
2. Add devices by one of the following methods:
3. Review the displayed device list and status
4. Select the target sub-account from the drop-down box in the upper left
5. Confirm the binding operation

#### Result
- All valid devices are bound to the selected sub-account

#### Related terms
- batch binding
- ums
- operation

### Single Transfer

#### What is this
Used to transfer one device to another agent.

#### When to use
Use this when you need to perform single transfer in daily UMS operations.

#### Related user questions
- how to use single transfer in ums
- where to find single transfer menu
- single transfer step by step
- i cannot do single transfer, why
- single transfer failed, what should i check
- how do i run single transfer
- need help for single transfer
- can i do single transfer by group

#### Entry Path
- Device Manager → Displayed information

#### Steps
1. Select a device
2. Click **Transfer**
3. Enter the target agent's company number in the pop-up window
4. Click **Confirm Donate**

#### Result
- The device is transferred to the target agent

#### Related terms
- single transfer
- ums
- operation

### Batch Transfer

#### What is this
Used to transfer multiple devices to another agent.

#### When to use
Use this when you need to perform batch transfer in daily UMS operations.

#### Related user questions
- how to use batch transfer in ums
- where to find batch transfer menu
- batch transfer step by step
- i cannot do batch transfer, why
- batch transfer failed, what should i check
- how do i run batch transfer
- need help for batch transfer
- can i do batch transfer by group

#### Entry Path
- Device Manager → Single Transfer

#### Steps
1. Click **Transfer in Batches**
2. Add devices by one of the following methods:
3. Review the displayed device list and status
4. Enter the recipient company number in the upper left
5. Click **Confirm Donate**

#### Result
- All valid devices are transferred to the target agent

#### Related terms
- batch transfer
- ums
- operation

### Device Binding

#### What is this
Used to bind devices directly to company accounts or remove bound devices.

#### When to use
Use this when you need to perform device binding in daily UMS operations.

#### Related user questions
- how to use device binding in ums
- where to find device binding menu
- device binding step by step
- i cannot do device binding, why
- device binding failed, what should i check
- how do i run device binding
- need help for device binding
- can i do device binding by group

#### Entry Path
- Device Manager → Device Binding

#### Steps
1. Go to **Device Manager → Device Binding**.
2. Click **Bind**.

#### Result
- Target devices/accounts receive the task and progress/status is updated.

#### Related terms
- device binding
- ums
- operation

### Single Device Binding

#### What is this
Used to bind one device to the agent account.

#### When to use
Use this when you need to perform single device binding in daily UMS operations.

#### Related user questions
- how to use single device binding in ums
- where to find single device binding menu
- single device binding step by step
- i cannot do single device binding, why
- single device binding failed, what should i check
- how do i run single device binding
- need help for single device binding
- can i do single device binding by group

#### Entry Path
- Device Manager → Device Binding

#### Steps
1. Click **Add**
2. Enter:

#### Result
- The device is bound to the agent account

#### Related terms
- single device binding
- ums
- operation

### Batch Delete

#### What is this
Used to delete multiple bound devices.

#### When to use
Use this when you need to perform batch delete in daily UMS operations.

#### Related user questions
- how to use batch delete in ums
- where to find batch delete menu
- batch delete step by step
- i cannot do batch delete, why
- batch delete failed, what should i check
- how do i run batch delete
- need help for batch delete
- can i do batch delete by group

#### Entry Path
- Device Manager → Single Device Binding

#### Steps
1. Go to **Device Manager → Single Device Binding**.
2. Click **Delete**.

#### Result
- Selected devices are removed from the management platform
- Deleted devices will no longer interact with the platform

#### Related terms
- batch delete
- ums
- operation

### Batch Add

#### What is this
Used to bind multiple devices by template import.

#### When to use
Use this when you need to perform batch add in daily UMS operations.

#### Related user questions
- how to use batch add in ums
- where to find batch add menu
- batch add step by step
- i cannot do batch add, why
- batch add failed, what should i check
- how do i run batch add
- need help for batch add
- can i do batch add by group

#### Entry Path
- Device Manager → Batch Delete

#### Steps
1. Click **Batch Add**
2. Download the template
3. Fill in the required information
4. Click **Import**
5. Upload the completed template file

#### Result
- Imported devices are bound to the agent account

#### Related terms
- batch add
- ums
- operation

### Boot Animation

#### What is this
Used to configure the boot animation shown when a device powers on or restarts.

#### When to use
Use this when you need to perform boot animation in daily UMS operations.

#### Related user questions
- how to use boot animation in ums
- where to find boot animation menu
- boot animation step by step
- i cannot do boot animation, why
- boot animation failed, what should i check
- how do i run boot animation
- need help for boot animation
- can i do boot animation by group

#### Entry Path
- System Customization → Boot Animation

#### Steps
1. Go to **System Customization → Boot Animation**.

#### Related terms
- boot animation
- ums
- operation

### Add Boot Animation Rule

#### What is this
This section covers add boot animation rule operations in UMS.

#### When to use
Use this when you need to perform add boot animation rule in daily UMS operations.

#### Related user questions
- how to use add boot animation rule in ums
- where to find add boot animation rule menu
- add boot animation rule step by step
- i cannot do add boot animation rule, why
- add boot animation rule failed, what should i check
- how do i run add boot animation rule
- need help for add boot animation rule
- can i do add boot animation rule by group

#### Entry Path
- System Customization → Boot Animation

#### Steps
1. Go to **System Customization → Boot Animation**.
2. Click **Add**.

#### Result
- A new item/rule is created and listed.

#### Related terms
- add boot animation rule
- ums
- operation

### Upload Compressed Package

#### What is this
Upload a custom ZIP package.

#### When to use
Use this when you need to perform upload compressed package in daily UMS operations.

#### Related user questions
- how to use upload compressed package in ums
- where to find upload compressed package menu
- upload compressed package step by step
- i cannot do upload compressed package, why
- upload compressed package failed, what should i check
- how do i run upload compressed package
- need help for upload compressed package
- can i do upload compressed package by group

#### Entry Path
- System Customization → Configuration fields

#### Steps
1. Go to **System Customization → Configuration fields**.
2. Click **Upload**.

#### Result
- A new item/rule is created and listed.

#### Related terms
- upload compressed package
- ums
- operation

### Push Boot Animation Rule

#### What is this
This section covers push boot animation rule operations in UMS.

#### When to use
Use this when you need to perform push boot animation rule in daily UMS operations.

#### Related user questions
- how to use push boot animation rule in ums
- where to find push boot animation rule menu
- push boot animation rule step by step
- i cannot do push boot animation rule, why
- push boot animation rule failed, what should i check
- how do i run push boot animation rule
- need help for push boot animation rule
- can i do push boot animation rule by group

#### Entry Path
- System Customization → Boot Animation

#### Steps
1. Go to **System Customization → Boot Animation**.
2. Click **Push**.

#### Result
- Target devices/accounts receive the task and progress/status is updated.

#### Related terms
- push boot animation rule
- ums
- operation

### Edit Boot Animation Rule

#### What is this
This section covers edit boot animation rule operations in UMS.

#### When to use
Use this when you need to perform edit boot animation rule in daily UMS operations.

#### Related user questions
- how to use edit boot animation rule in ums
- where to find edit boot animation rule menu
- edit boot animation rule step by step
- i cannot do edit boot animation rule, why
- edit boot animation rule failed, what should i check
- how do i run edit boot animation rule
- need help for edit boot animation rule
- can i do edit boot animation rule by group

#### Entry Path
- System Customization → Boot Animation

#### Steps
1. Go to **System Customization → Boot Animation**.
2. Click **Edit**.

#### Result
- Changes are saved and take effect after execution/push.

#### Related terms
- edit boot animation rule
- ums
- operation

### Delete Boot Animation Rule

#### What is this
This section covers delete boot animation rule operations in UMS.

#### When to use
Use this when you need to perform delete boot animation rule in daily UMS operations.

#### Related user questions
- how to use delete boot animation rule in ums
- where to find delete boot animation rule menu
- delete boot animation rule step by step
- i cannot do delete boot animation rule, why
- delete boot animation rule failed, what should i check
- how do i run delete boot animation rule
- need help for delete boot animation rule
- can i do delete boot animation rule by group

#### Entry Path
- System Customization → Boot Animation

#### Steps
1. Go to **System Customization → Boot Animation**.
2. Click **Delete**.

#### Result
- The selected item is removed and unavailable for new tasks.

#### Related terms
- delete boot animation rule
- ums
- operation

### Kiosk Mode

#### What is this
Kiosk Mode locks the device to one selected application.

#### When to use
Use this when you need to perform kiosk mode in daily UMS operations.

#### Related user questions
- how to use kiosk mode in ums
- where to find kiosk mode menu
- kiosk mode step by step
- i cannot do kiosk mode, why
- kiosk mode failed, what should i check
- how do i run kiosk mode
- need help for kiosk mode
- can i do kiosk mode by group

#### Entry Path
- System Customization → Kiosk Mode

#### Steps
1. Go to **System Customization → Kiosk Mode**.

#### Related terms
- kiosk mode
- ums
- operation

### Add Kiosk Mode Rule

#### What is this
This section covers add kiosk mode rule operations in UMS.

#### When to use
Use this when you need to perform add kiosk mode rule in daily UMS operations.

#### Related user questions
- how to use add kiosk mode rule in ums
- where to find add kiosk mode rule menu
- add kiosk mode rule step by step
- i cannot do add kiosk mode rule, why
- add kiosk mode rule failed, what should i check
- how do i run add kiosk mode rule
- need help for add kiosk mode rule
- can i do add kiosk mode rule by group

#### Entry Path
- System Customization → Kiosk Mode

#### Steps
1. Go to **System Customization → Kiosk Mode**.
2. Click **Add**.

#### Result
- A new item/rule is created and listed.

#### Related terms
- add kiosk mode rule
- ums
- operation

### Push Kiosk Mode Rule

#### What is this
This section covers push kiosk mode rule operations in UMS.

#### When to use
Use this when you need to perform push kiosk mode rule in daily UMS operations.

#### Related user questions
- how to use push kiosk mode rule in ums
- where to find push kiosk mode rule menu
- push kiosk mode rule step by step
- i cannot do push kiosk mode rule, why
- push kiosk mode rule failed, what should i check
- how do i run push kiosk mode rule
- need help for push kiosk mode rule
- can i do push kiosk mode rule by group

#### Entry Path
- System Customization → Kiosk Mode

#### Steps
1. Go to **System Customization → Kiosk Mode**.
2. Click **Push**.

#### Result
- Target devices/accounts receive the task and progress/status is updated.

#### Related terms
- push kiosk mode rule
- ums
- operation

### Edit Kiosk Mode Rule

#### What is this
This section covers edit kiosk mode rule operations in UMS.

#### When to use
Use this when you need to perform edit kiosk mode rule in daily UMS operations.

#### Related user questions
- how to use edit kiosk mode rule in ums
- where to find edit kiosk mode rule menu
- edit kiosk mode rule step by step
- i cannot do edit kiosk mode rule, why
- edit kiosk mode rule failed, what should i check
- how do i run edit kiosk mode rule
- need help for edit kiosk mode rule
- can i do edit kiosk mode rule by group

#### Entry Path
- System Customization → Kiosk Mode

#### Steps
1. Go to **System Customization → Kiosk Mode**.
2. Click **Edit**.

#### Result
- Changes are saved and take effect after execution/push.

#### Related terms
- edit kiosk mode rule
- ums
- operation

### Delete Kiosk Mode Rule

#### What is this
This section covers delete kiosk mode rule operations in UMS.

#### When to use
Use this when you need to perform delete kiosk mode rule in daily UMS operations.

#### Related user questions
- how to use delete kiosk mode rule in ums
- where to find delete kiosk mode rule menu
- delete kiosk mode rule step by step
- i cannot do delete kiosk mode rule, why
- delete kiosk mode rule failed, what should i check
- how do i run delete kiosk mode rule
- need help for delete kiosk mode rule
- can i do delete kiosk mode rule by group

#### Entry Path
- System Customization → Kiosk Mode

#### Steps
1. Go to **System Customization → Kiosk Mode**.
2. Click **Delete**.

#### Result
- The selected item is removed and unavailable for new tasks.

#### Related terms
- delete kiosk mode rule
- ums
- operation

### Auto-start Application

#### What is this
Used to set a default application that launches automatically when the device powers on or restarts.

#### When to use
Use this when you need to perform auto-start application in daily UMS operations.

#### Related user questions
- how to use auto start application in ums
- where to find auto start application menu
- auto start application step by step
- i cannot do auto start application, why
- auto start application failed, what should i check
- how do i run auto start application
- need help for auto start application
- can i do auto start application by group

#### Entry Path
- System Customization → Auto-start Application

#### Steps
1. Go to **System Customization → Auto-start Application**.

#### Related terms
- auto-start application
- ums
- operation

### Add Default Application Rule

#### What is this
This section covers add default application rule operations in UMS.

#### When to use
Use this when you need to perform add default application rule in daily UMS operations.

#### Related user questions
- how to use add default application rule in ums
- where to find add default application rule menu
- add default application rule step by step
- i cannot do add default application rule, why
- add default application rule failed, what should i check
- how do i run add default application rule
- need help for add default application rule
- can i do add default application rule by group

#### Entry Path
- System Customization → Auto-start Application

#### Steps
1. Go to **System Customization → Auto-start Application**.
2. Click **Add**.

#### Result
- A new item/rule is created and listed.

#### Related terms
- add default application rule
- ums
- operation

### Push Default Application Rule

#### What is this
This section covers push default application rule operations in UMS.

#### When to use
Use this when you need to perform push default application rule in daily UMS operations.

#### Related user questions
- how to use push default application rule in ums
- where to find push default application rule menu
- push default application rule step by step
- i cannot do push default application rule, why
- push default application rule failed, what should i check
- how do i run push default application rule
- need help for push default application rule
- can i do push default application rule by group

#### Entry Path
- System Customization → Auto-start Application

#### Steps
1. Go to **System Customization → Auto-start Application**.
2. Click **Push**.

#### Result
- Target devices/accounts receive the task and progress/status is updated.

#### Related terms
- push default application rule
- ums
- operation

### Edit Default Application Rule

#### What is this
This section covers edit default application rule operations in UMS.

#### When to use
Use this when you need to perform edit default application rule in daily UMS operations.

#### Related user questions
- how to use edit default application rule in ums
- where to find edit default application rule menu
- edit default application rule step by step
- i cannot do edit default application rule, why
- edit default application rule failed, what should i check
- how do i run edit default application rule
- need help for edit default application rule
- can i do edit default application rule by group

#### Entry Path
- System Customization → Auto-start Application

#### Steps
1. Go to **System Customization → Auto-start Application**.
2. Click **Edit**.

#### Result
- Changes are saved and take effect after execution/push.

#### Related terms
- edit default application rule
- ums
- operation

### Delete Default Application Rule

#### What is this
This section covers delete default application rule operations in UMS.

#### When to use
Use this when you need to perform delete default application rule in daily UMS operations.

#### Related user questions
- how to use delete default application rule in ums
- where to find delete default application rule menu
- delete default application rule step by step
- i cannot do delete default application rule, why
- delete default application rule failed, what should i check
- how do i run delete default application rule
- need help for delete default application rule
- can i do delete default application rule by group

#### Entry Path
- System Customization → Auto-start Application

#### Steps
1. Go to **System Customization → Auto-start Application**.
2. Click **Delete**.

#### Result
- The selected item is removed and unavailable for new tasks.

#### Related terms
- delete default application rule
- ums
- operation

### Customized Desktop

#### What is this
Used to deploy a custom launcher / desktop to devices.

#### When to use
Use this when you need to perform customized desktop in daily UMS operations.

#### Related user questions
- how to use customized desktop in ums
- where to find customized desktop menu
- customized desktop step by step
- i cannot do customized desktop, why
- customized desktop failed, what should i check
- how do i run customized desktop
- need help for customized desktop
- can i do customized desktop by group

#### Entry Path
- System Customization → Customized Desktop

#### Steps
1. Go to **System Customization → Customized Desktop**.

#### Related terms
- customized desktop
- ums
- operation

### Add Custom Desktop Rule

#### What is this
There are multiple ways to create a custom desktop rule.

#### When to use
Use this when you need to perform add custom desktop rule in daily UMS operations.

#### Related user questions
- how to use add custom desktop rule in ums
- where to find add custom desktop rule menu
- add custom desktop rule step by step
- i cannot do add custom desktop rule, why
- add custom desktop rule failed, what should i check
- how do i run add custom desktop rule
- need help for add custom desktop rule
- can i do add custom desktop rule by group

#### Entry Path
- System Customization → Function overview

#### Steps
1. Go to **System Customization → Function overview**.
2. Click **Add**.

#### Result
- A new item/rule is created and listed.

#### Related terms
- add custom desktop rule
- ums
- operation

### Method 2: Desktop Type = Standard Template + Configuration File Upload

#### What is this
Desktop Type = **Standard Template**.

#### When to use
Use this when you need to perform method 2: desktop type = standard template + configuration file upload in daily UMS operations.

#### Related user questions
- how to use method 2 desktop type standard template configuration file upload in ums
- where to find method 2 desktop type standard template configuration file upload menu
- method 2 desktop type standard template configuration file upload step by step
- i cannot do method 2 desktop type standard template configuration file upload, why
- method 2 desktop type standard template configuration file upload failed, what should i check
- how do i run method 2 desktop type standard template configuration file upload
- need help for method 2 desktop type standard template configuration file upload
- can i do method 2 desktop type standard template configuration file upload by group

#### Entry Path
- System Customization → Function overview

#### Steps
1. Click **Add**
2. Select:
3. Upload the configuration file

#### Result
- Rule is created
- Initial status:
- **Un-pushed**

#### Related terms
- method 2: desktop type = standard template + configuration file upload
- ums
- operation

### Push Custom Desktop Rule

#### What is this
This section covers push custom desktop rule operations in UMS.

#### When to use
Use this when you need to perform push custom desktop rule in daily UMS operations.

#### Related user questions
- how to use push custom desktop rule in ums
- where to find push custom desktop rule menu
- push custom desktop rule step by step
- i cannot do push custom desktop rule, why
- push custom desktop rule failed, what should i check
- how do i run push custom desktop rule
- need help for push custom desktop rule
- can i do push custom desktop rule by group

#### Entry Path
- System Customization → Notes

#### Steps
1. Go to **System Customization → Notes**.
2. Click **Push**.

#### Result
- Target devices/accounts receive the task and progress/status is updated.

#### Related terms
- push custom desktop rule
- ums
- operation

### Edit Custom Desktop Rule

#### What is this
This section covers edit custom desktop rule operations in UMS.

#### When to use
Use this when you need to perform edit custom desktop rule in daily UMS operations.

#### Related user questions
- how to use edit custom desktop rule in ums
- where to find edit custom desktop rule menu
- edit custom desktop rule step by step
- i cannot do edit custom desktop rule, why
- edit custom desktop rule failed, what should i check
- how do i run edit custom desktop rule
- need help for edit custom desktop rule
- can i do edit custom desktop rule by group

#### Entry Path
- System Customization → Notes

#### Steps
1. Go to **System Customization → Notes**.
2. Click **Edit**.

#### Result
- Changes are saved and take effect after execution/push.

#### Related terms
- edit custom desktop rule
- ums
- operation

### Delete Custom Desktop Rule

#### What is this
This section covers delete custom desktop rule operations in UMS.

#### When to use
Use this when you need to perform delete custom desktop rule in daily UMS operations.

#### Related user questions
- how to use delete custom desktop rule in ums
- where to find delete custom desktop rule menu
- delete custom desktop rule step by step
- i cannot do delete custom desktop rule, why
- delete custom desktop rule failed, what should i check
- how do i run delete custom desktop rule
- need help for delete custom desktop rule
- can i do delete custom desktop rule by group

#### Entry Path
- System Customization → Notes

#### Steps
1. Go to **System Customization → Notes**.
2. Click **Delete**.

#### Result
- The selected item is removed and unavailable for new tasks.

#### Related terms
- delete custom desktop rule
- ums
- operation

### Company Information

#### What is this
Used to view the company information submitted during registration.

#### When to use
Use this when you need to perform company information in daily UMS operations.

#### Related user questions
- how to use company information in ums
- where to find company information menu
- company information step by step
- i cannot do company information, why
- company information failed, what should i check
- how do i run company information
- need help for company information
- can i do company information by group

#### Entry Path
- Account Center → Company Information

#### Steps
1. Go to **Account Center → Company Information**.

#### Related terms
- company information
- ums
- operation

### Personal Information

#### What is this
Used to manage personal account settings.

#### When to use
Use this when you need to perform personal information in daily UMS operations.

#### Related user questions
- how to use personal information in ums
- where to find personal information menu
- personal information step by step
- i cannot do personal information, why
- personal information failed, what should i check
- how do i run personal information
- need help for personal information
- can i do personal information by group

#### Entry Path
- Account Center → Personal Information

#### Steps
1. Go to **Account Center → Personal Information**.

#### Related terms
- personal information
- ums
- operation

### Change Name

#### What is this
This section covers change name operations in UMS.

#### When to use
Use this when you need to perform change name in daily UMS operations.

#### Related user questions
- how to use change name in ums
- where to find change name menu
- change name step by step
- i cannot do change name, why
- change name failed, what should i check
- how do i run change name
- need help for change name
- can i do change name by group

#### Entry Path
- Account Center → Personal Information

#### Steps
1. Go to **Account Center → Personal Information**.

#### Result
- Changes are saved and take effect after execution/push.

#### Related terms
- change name
- ums
- operation

### Change Bound Phone Number

#### What is this
This section covers change bound phone number operations in UMS.

#### When to use
Use this when you need to perform change bound phone number in daily UMS operations.

#### Related user questions
- how to use change bound phone number in ums
- where to find change bound phone number menu
- change bound phone number step by step
- i cannot do change bound phone number, why
- change bound phone number failed, what should i check
- how do i run change bound phone number
- need help for change bound phone number
- can i do change bound phone number by group

#### Entry Path
- Account Center → Personal Information

#### Steps
1. Go to **Account Center → Personal Information**.

#### Result
- Changes are saved and take effect after execution/push.

#### Related terms
- change bound phone number
- ums
- operation

### Authorization Control

#### What is this
Used to manage operators, permissions, and administrator authority.

#### When to use
Use this when you need to perform authorization control in daily UMS operations.

#### Related user questions
- how to use authorization control in ums
- where to find authorization control menu
- authorization control step by step
- i cannot do authorization control, why
- authorization control failed, what should i check
- how do i run authorization control
- need help for authorization control
- can i do authorization control by group

#### Entry Path
- Account Center → Authorization Control

#### Steps
1. Go to **Account Center → Authorization Control**.

#### Related terms
- authorization control
- ums
- operation

### Add Operator

#### What is this
Email address.

#### When to use
Use this when you need to perform add operator in daily UMS operations.

#### Related user questions
- how to use add operator in ums
- where to find add operator menu
- add operator step by step
- i cannot do add operator, why
- add operator failed, what should i check
- how do i run add operator
- need help for add operator
- can i do add operator by group

#### Entry Path
- Account Center → Authorization Control

#### Steps
1. Click **Add Operator**
2. Enter:

#### Result
- The system sends an email to the operator
- The email contains the initial login password
- After first login, the operator status changes to:
- **Activated**

#### Related terms
- add operator
- ums
- operation

### Sub-account Overview

#### What is this
This section covers sub-account overview operations in UMS.

#### When to use
Use this when you need to perform sub-account overview in daily UMS operations.

#### Related user questions
- how to use sub account overview in ums
- where to find sub account overview menu
- sub account overview step by step
- i cannot do sub account overview, why
- sub account overview failed, what should i check
- how do i run sub account overview
- need help for sub account overview
- can i do sub account overview by group

#### Entry Path
- Sub-account → Sub-account Brief

#### Steps
1. Go to **Sub-account → Sub-account Brief**.

#### Related terms
- sub-account overview
- ums
- operation

### Add Sub-account

#### What is this
This section covers add sub-account operations in UMS.

#### When to use
Use this when you need to perform add sub-account in daily UMS operations.

#### Related user questions
- how to use add sub account in ums
- where to find add sub account menu
- add sub account step by step
- i cannot do add sub account, why
- add sub account failed, what should i check
- how do i run add sub account
- need help for add sub account
- can i do add sub account by group

#### Entry Path
- Sub-account → Sub-account Brief

#### Steps
1. Go to **Sub-account → Sub-account Brief**.
2. Click **Add**.

#### Result
- A new item/rule is created and listed.

#### Related terms
- add sub-account
- ums
- operation

### Add Controlled Sub-account

#### What is this
This section covers add controlled sub-account operations in UMS.

#### When to use
Use this when you need to perform add controlled sub-account in daily UMS operations.

#### Related user questions
- how to use add controlled sub account in ums
- where to find add controlled sub account menu
- add controlled sub account step by step
- i cannot do add controlled sub account, why
- add controlled sub account failed, what should i check
- how do i run add controlled sub account
- need help for add controlled sub account
- can i do add controlled sub account by group

#### Entry Path
- Sub-account → Sub-account Brief

#### Steps
1. Click **Add Controlled Sub-account**
2. Enter:

#### Options
- Click **To Manage** to:
- Add operators
- Enable login access for the sub-account

#### Result
- A new item/rule is created and listed.

#### Related terms
- add controlled sub-account
- ums
- operation

### Add Independent Sub-account

#### What is this
This section covers add independent sub-account operations in UMS.

#### When to use
Use this when you need to perform add independent sub-account in daily UMS operations.

#### Related user questions
- how to use add independent sub account in ums
- where to find add independent sub account menu
- add independent sub account step by step
- i cannot do add independent sub account, why
- add independent sub account failed, what should i check
- how do i run add independent sub account
- need help for add independent sub account
- can i do add independent sub account by group

#### Entry Path
- Sub-account → Sub-account Brief

#### Steps
1. Click **Add Independent Sub-account**
2. Enter:

#### Result
- A new item/rule is created and listed.

#### Related terms
- add independent sub-account
- ums
- operation

### Transfer Controlled → Independent Sub-account

#### What is this
This section covers transfer controlled → independent sub-account operations in UMS.

#### When to use
Use this when you need to perform transfer controlled → independent sub-account in daily UMS operations.

#### Related user questions
- how to use transfer controlled independent sub account in ums
- where to find transfer controlled independent sub account menu
- transfer controlled independent sub account step by step
- i cannot do transfer controlled independent sub account, why
- transfer controlled independent sub account failed, what should i check
- how do i run transfer controlled independent sub account
- need help for transfer controlled independent sub account
- can i do transfer controlled independent sub account by group

#### Entry Path
- Sub-account → Sub-account Brief

#### Steps
1. Go to **Sub-account → Sub-account Brief**.
2. Click **Transfer**.

#### Result
- Target devices/accounts receive the task and progress/status is updated.

#### Related terms
- transfer controlled → independent sub-account
- ums
- operation

### Manage Sub-account

#### What is this
This section covers manage sub-account operations in UMS.

#### When to use
Use this when you need to perform manage sub-account in daily UMS operations.

#### Related user questions
- how to use manage sub account in ums
- where to find manage sub account menu
- manage sub account step by step
- i cannot do manage sub account, why
- manage sub account failed, what should i check
- how do i run manage sub account
- need help for manage sub account
- can i do manage sub account by group

#### Entry Path
- Sub-account → Sub-account Types

#### Steps
1. Go to **Sub-account → Sub-account Types**.

#### Related terms
- manage sub-account
- ums
- operation

### Review Failed

#### What is this
Reason is sent to registered email.

#### When to use
Use this when you need to perform review failed in daily UMS operations.

#### Related user questions
- how to use review failed in ums
- where to find review failed menu
- review failed step by step
- i cannot do review failed, why
- review failed failed, what should i check
- how do i run review failed
- need help for review failed
- can i do review failed by group

#### Entry Path
- Sub-account → Review Results

#### Steps
1. Enter rejection reason
2. Submit feedback

#### Result
- Reason is sent to registered email
- Sub-account:
- Cannot use platform features
- Must resubmit company information for review

#### Related terms
- review failed
- ums
- operation
