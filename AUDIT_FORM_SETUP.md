# Audit Form Setup Guide

This guide explains how to connect the **Free Growth Audit** form to receive submissions via **email (Formspree)** and **Google Sheets**.

---

## 1. Formspree (Email Notifications)

You already use Formspree for the Contact form. Set up a second form for audit submissions:

1. Go to [formspree.io/forms](https://formspree.io/forms) and click **New Form**
2. Name it something like "Growth Audit Submissions"
3. Set the recipient email (e.g. `thetimesdigitalmedia@gmail.com`)
4. Copy the **form endpoint** (looks like `https://formspree.io/f/xABcdEfG`)
5. Open `src/components/AuditForm.tsx` and replace the placeholder:

```tsx
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";
//                                            ^^^^^^^^^^^^
//                              Replace with your actual form ID
```

That's it. Every audit submission will now be emailed to you with all 8 fields.

---

## 2. Google Sheets (Spreadsheet Logging)

This uses a free Google Apps Script web app to append each submission as a new row.

### Step 1: Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet
2. Name it "Audit Submissions" (or whatever you like)
3. In **Row 1**, add these headers (exactly as shown):

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Timestamp | Name | Email | WhatsApp | Website | Business | Running Ads | Budget | Goal |

### Step 2: Add the Apps Script

1. In your spreadsheet, go to **Extensions > Apps Script**
2. Delete any existing code and paste this:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" }),
    data.name || "",
    data.email || "",
    data.whatsapp || "",
    data.website || "",
    data.business || "",
    data.runningAds || "",
    data.budget || "",
    data.goal || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Save** (Ctrl+S)

### Step 3: Deploy as Web App

1. Click **Deploy > New deployment**
2. Click the gear icon next to "Select type" and choose **Web app**
3. Set:
   - **Description**: "Audit form handler"
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Authorize** the script when prompted (click through the "unsafe" warning - it's your own script)
6. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/AKfyc.../exec`)

### Step 4: Paste the URL

Open `src/components/AuditForm.tsx` and set:

```tsx
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfyc.../exec";
//                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                        Replace with your actual Apps Script URL
```

---

## Testing

After setting up either or both endpoints:

1. Run `npm run dev`
2. Fill out the audit form on the homepage
3. Check:
   - **Formspree**: Check your email inbox (may take 1-2 minutes)
   - **Google Sheets**: Check your spreadsheet for the new row

> **Tip**: The form sends to both endpoints in parallel. If one fails, the other still works. Check the browser console for any error messages.

---

## Fields Submitted

| Field | Description | Example |
|-------|-------------|---------|
| `name` | Contact name | "Ahmed Khan" |
| `email` | Contact email | "ahmed@company.pk" |
| `whatsapp` | WhatsApp number (optional) | "+923001234567" |
| `website` | Website or Instagram | "company.pk" |
| `business` | What they sell and to whom | "Premium athleisure for women 25-40" |
| `runningAds` | Current ad status | "Yes" / "No" / "Stopped" |
| `budget` | Monthly budget range | "<$500" / "$500-2k" / "$2k-5k" / "$5k+" |
| `goal` | Primary 90-day goal | "More leads" / "More sales" / "Brand awareness" / "Launch" |
| `_subject` | Email subject (Formspree only) | "New Growth Audit Request from Ahmed Khan" |
