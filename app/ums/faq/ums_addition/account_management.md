# Frequently Asked Questions

Click any question below to expand the answer.

## What is Authorization Control used for?

Authorization Control is used to create and manage **operator accounts** for your organization.

With operator accounts, multiple people can work together in the same UMS organization.

You can also:

- Adjust operator permissions
- Transfer administrator permission
- Remove unused operator accounts

---

## How do I create an operator account in UMS?

Go to:

**Account Center → Authorization Control**

Then:

1. Click **Add**
2. Enter the new email address
3. Click **Confirm**

The operator account will be activated after the user confirms registration from the email.

---

## Can I change the permissions of an operator account?

Yes.

You can adjust the permission setup of an operator account at any time.

It is recommended to grant only the permissions that are necessary in order to reduce security risks.

---

## Can I transfer administrator permission to another account?

Yes.

You can transfer administrator permission to any operator account if needed.

⚠️ Please note:

- After transfer, your current account will lose administrator permission
- You should be careful before performing this action

---

## Can I delete an operator account?

Yes.

If an operator account is no longer needed, you can delete it anytime by clicking the **Remove** button on the right side.

---

## What is the difference between an operator account and a sub-account?

They are different in **scope** and **ownership**.

### Operator account

- Belongs to the same organization
- Helps multiple users work together in the same UMS account
- Can access the same organization resources, depending on granted permissions

### Sub-account

- Represents another organization
- Can only manage terminals distributed to that sub-organization
- Cannot access terminals belonging to other organizations

---

## What is a sub-account used for?

A sub-account is used when you want to distribute terminals to another organization and let their people manage those terminals in UMS.

This ensures:

- Each organization can only manage its own terminals
- Organizations are isolated from each other

---

## How do I create a sub-account?

Go to:

**Sub-account → Sub-Account Brief**

Then create either:

- **Controlled sub-account**
- **Independent sub-account**

---

## How do I distribute terminals to a sub-account?

Go to:

**Device Manager → Distribute Device**

Then you can distribute terminals to any created sub-organization:

- **One by one manually**
- **In batch by template upload**

For batch distribution:

1. Download the template
2. Fill in the table
3. Upload the file

---

## Can I change the sub-account owner of a terminal after distribution?

Yes.

After distributing a terminal, you can change its owner by clicking:

**Replace the Sub-account**

Then:

1. Select the new sub-organization
2. Click **Distribute**

---

## Can I revoke terminal distribution from a sub-account?

Yes.

You can revoke the distribution of a terminal by clicking:

**Unbind**

This applies to both:

- Controlled sub-account
- Independent sub-account

---

## What is the difference between a controlled sub-account and an independent sub-account?

The main difference is whether the parent account can still access and control the sub-account platform.

### Controlled sub-account

- Parent account can enter the platform by clicking **To Manage**
- Parent account can still perform operations inside that platform

### Independent sub-account

- Parent account cannot access the platform
- There is no **To Manage** option

---

## Can a controlled sub-account upload applications?

No.

A controlled sub-account cannot upload applications freely.

For example:

- There is no **App Upload** option in its platform

---

## Can an independent sub-account upload and publish applications?

Yes.

An independent sub-account can upload and publish applications freely.

---

## What is the difference in account creation between controlled and independent sub-accounts?

### Independent sub-account

- You must enter an **email address** during creation

### Controlled sub-account

- There is no email field during creation
- If login access is needed, you must enter that platform and create an **operator account** there

---

## Can the parent account access a controlled sub-account directly?

Yes.

For a controlled sub-account, the parent account can click **To Manage** to enter the sub-account platform and perform operations there.

---

## Can the parent account access an independent sub-account directly?

No.

For an independent sub-account, the parent account cannot enter its platform.

There is no **To Manage** option.

---

## Are there different types of controlled sub-accounts?

Yes.

There are **four types of controlled accounts**.

Although none of them can upload applications like an independent account, their permissions regarding **publishing applications** are different.

---

## What is the "Completely independent and free App market"(first) mode of a controlled sub-account?

The first mode means:

- The sub-account can freely choose which applications to publish to App Market
- The selectable range is the **full uploaded application list** in the parent account
- The sub-account still cannot upload new applications

---

## What is the "Clone the Apps of the parent account"(second) mode of a controlled sub-account?

The second mode means:

- The published application list of the sub-account is exactly the same as the parent account
- It updates automatically when the parent updates its publish list
- The sub-account cannot change it

This is only a synchronized display mode.

---

## What is the "Select from the App market of the parent account"(third) mode of a controlled sub-account?

The third mode means:

- The sub-account can customize its published application list
- But the selectable range is **not** the full uploaded app list of the parent account
- The selectable range is only the **published applications of the parent account**

---

## What is the "Parent account sets up Apps for sub-account"(fourth) mode of a controlled sub-account?

The fourth mode means:

- The published application list is fully controlled by the parent account
- The sub-account cannot change it at all

This is similar to the second mode in terms of no editing rights.

---

## What is the default controlled-account application mode?

The **fourth mode** is the default option.

You can still change it later and choose the most suitable mode for each sub-organization.
