# Frequently Asked Questions

Click any question below to expand the answer.

## What's the benefit of Group Management?

You can **Execute Tasks** or **Push Configuration** to a group of terminals, so all terminals in that group can execute the same task or have the same configuration.

## Can I bind terminal(s) to my UMS account by myself?

UMS doesn't currently support users binding terminals to a UMS account by themselves. Please fill in this **Form** and send it to UROVO's responsible Sales.  
(Only UTMS supports that.)

## How do I create groups or sub-groups?

- **One by One:** Click the **"+"** icon on the right of **"All Groups"**.
- **In Batch:** Click the **"Import"** button in the top-left corner, then fill in the template table and upload it.

## How do I bind terminal(s) with a group that I created?

- **One by One:** Click the group name first. Then click **"Bound Devices"**, and enter the serial numbers one by one.
- **In Batch:** Click the **"Import Devices"** button in the top-left corner, then fill in the template table and upload it.

## How do I change the grouping of terminals?

- **One by One:** Go to **"Remote Management" → "Remote Management"**. Then select one or more terminals. Click **"Operate in Batches" → "Move to"**, and select the new group.
- **In Batch:** Click the **"Import"** button in the top-left corner, then fill in the template table and upload it.

## How do I unbind terminals from its group?

- **One by One:** Go to **"Remote Management" → "Remote Management"**. Then select one or more terminals. Click **"Operate in Batches" → "Move to"**, and select **"Ungrouped Devices"**.
- **In Batch:** Click the **"Import"** button in the top-left corner, then fill in the template table with the group as **"Ungrouped Devices"** and upload it.

## How do I check all the bound terminals of a group?

**"Group Management" → "Group Management" → "Bind Device"**

## What's the difference between "Activation Time" and "Shipment Time" in Bind Device?

They represent **two different lifecycle stages** of a device.

### Activation Time

- The time when the device is **first seen ONLINE in UMS**
- Indicates when the device is **first activated and connected to the platform**

### Shipment Time

- The time when the device is **first registered (bound) to the account**
- Indicates when the device is **assigned/imported into your UMS account**

👉 In short:

- Activation Time = first time device goes online
- Shipment Time = first time device is bound to your account

## How do I check all published Apps (the ones shown on the App Market) of a group?

**"Group Management" → "Group Management" → "Shelf App"**

## How do I check all deployed Apps of a group?

**"Group Management" → "Group Management" → "Deploy App"**
