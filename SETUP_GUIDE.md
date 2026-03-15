# Central Valley Home Services — Website Setup Guide

## Files Included
- `index.html` — Your complete website (HTML + CSS + JS in one file)
- `images/logo.png` — Your shield logo
- `images/owner.png` — Your owner photo
- `GOOGLE_APPS_SCRIPT.js` — The Apps Script code for form-to-sheet integration

---

## Step 1: Deploy the Google Apps Script (connects the form to your Google Sheet)

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1cQMu8xp3nj0pdOlWb9TOXKfMiBrJsxGdVs9RBqB4lHo/edit
2. Click **Extensions** > **Apps Script**
3. Delete any existing code in the editor
4. Copy and paste the entire contents of `GOOGLE_APPS_SCRIPT.js` into the editor
5. Click **Save** (disk icon or Ctrl+S)
6. Click **Deploy** > **New deployment**
7. Click the gear icon next to "Select type" and choose **Web app**
8. Set the following:
   - **Description**: "CVHS Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
9. Click **Deploy**
10. Click **Authorize access** and follow the prompts to allow the script
11. **Copy the Web app URL** — it looks like: `https://script.google.com/macros/s/AKfyc.../exec`

## Step 2: Update the Website with Your Apps Script URL

1. Open `index.html` in a text editor
2. Search for `PLACEHOLDER` (Ctrl+F)
3. Replace the entire placeholder URL with your actual Web app URL from Step 1
4. Save the file

## Step 3: Deploy the Website

You have several options:

### Option A: Netlify (Free, Recommended)
1. Go to https://app.netlify.com
2. Drag and drop the entire `website` folder onto the deploy area
3. Your site will be live instantly with a free URL
4. You can connect a custom domain later

### Option B: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files from the `website` folder
3. Go to Settings > Pages > Source: main branch
4. Your site will be live at `yourusername.github.io/repo-name`

### Option C: Any Web Host
1. Upload the `website` folder contents to your hosting provider
2. Make sure `index.html` is at the root of your domain

## Step 4: Customize (Optional)
- Replace `(559) 000-0000` with your actual phone number
- Replace `info@centralvalleyhomeservices.com` with your actual email
- Update social media links in the footer
- Add your actual Google Business Profile link

---

## Google Sheet
- **Sheet Name**: CVHS Customer Leads
- **URL**: https://docs.google.com/spreadsheets/d/1cQMu8xp3nj0pdOlWb9TOXKfMiBrJsxGdVs9RBqB4lHo/edit
- **Columns**: Timestamp, Full Name, Email, Phone, Address, Service Needed, Preferred Date, Referral Source, Additional Details, Status
- **Status Options**: New Lead, Contacted, Follow-Up Sent, Qualified, Won, Lost

Every form submission automatically:
1. Adds a new row to the Google Sheet
2. Sends an email notification to patricklynch619@gmail.com
