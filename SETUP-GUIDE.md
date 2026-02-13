# 📖 Detailed Setup Guide - EEGAI Jobs

## 🎯 Complete Deployment Walkthrough

This guide will walk you through **every single step** to get your job portal online.

---

## Part 1: GitHub Account Setup

### Step 1.1: Create GitHub Account

1. Open your browser
2. Go to: **https://github.com/signup**
3. You'll see a sign-up form:
   - **Email:** Enter your email address
   - **Password:** Create a strong password
   - **Username:** Choose a username (e.g., `eegaijobs`)
   - Click **Continue** after each field

4. **Verify your email:**
   - Check your email inbox
   - Click the verification link
   - You'll be redirected back to GitHub

5. **Answer survey questions** (optional - you can skip)

6. **You're done!** You now have a GitHub account

---

## Part 2: Create Repository

### Step 2.1: Create New Repository

1. **Once logged in to GitHub:**
   - Look at the top-right corner
   - Click the **"+"** icon
   - Select **"New repository"** from dropdown

2. **Fill in repository details:**
   
   **Repository name:** `eegai-jobs`  
   *(This will be part of your URL)*
   
   **Description:** (Optional)  
   `Tamil Nadu Employment Portal`
   
   **Visibility:**  
   ✅ Select **"Public"**  
   *(Must be public for free GitHub Pages)*
   
   **Initialize repository:**  
   ☐ Don't check any boxes  
   *(Leave them unchecked)*

3. **Click the green "Create repository" button**

### Step 2.2: You'll See an Empty Repository

You'll see a page with setup instructions. **Ignore them!**  
We'll upload files directly instead.

---

## Part 3: Upload Files

### Step 3.1: Prepare Your Files

On your computer, you should have these files:
- ✅ `index.html` (the main app file)
- ✅ `manifest.json` (PWA config)
- ✅ `sw.js` (service worker)
- ✅ `README.md` (documentation)

### Step 3.2: Upload to GitHub

1. **On the empty repository page:**
   - Look for the link that says: **"uploading an existing file"**
   - Click it

2. **Upload your files:**
   - You'll see a drag-and-drop area
   - Either:
     - **Drag and drop** all 4 files into the box
     - OR click **"choose your files"** and select them
   
3. **Important Check:**
   - Make sure all 4 files appear in the list
   - File names should be exact (case-sensitive)

4. **Commit the files:**
   - Scroll down
   - In the **"Commit changes"** box:
     - Keep the default message: "Add files via upload"
   - Click the green **"Commit changes"** button

5. **Wait for upload:**
   - You'll see a progress indicator
   - After a few seconds, files will appear in your repository

### Step 3.3: Verify Upload

You should now see:
- ✅ `index.html`
- ✅ `manifest.json`
- ✅ `sw.js`
- ✅ `README.md`

All listed in your repository.

---

## Part 4: Enable GitHub Pages

### Step 4.1: Go to Settings

1. **In your repository:**
   - Look at the top menu tabs
   - Find and click **"Settings"**
   - (It's the tab with a gear icon)

2. **If you don't see Settings:**
   - You might need to scroll the tabs horizontally
   - Or click the ≡ (three lines) icon to see more tabs

### Step 4.2: Find Pages Settings

1. **On the Settings page:**
   - Look at the **left sidebar**
   - Scroll down until you see **"Pages"**
   - Click **"Pages"**

### Step 4.3: Configure GitHub Pages

1. **Under "Build and deployment":**

   **Source:**  
   - Click the dropdown that says "None"
   - Select **"Deploy from a branch"**

   **Branch:**  
   - First dropdown: Select **"main"**  
   - Second dropdown: Select **"/ (root)"**
   
2. **Click the "Save" button**

### Step 4.4: Wait for Deployment

1. **You'll see a message:**
   - "GitHub Pages source saved."

2. **Refresh the page after 2-3 minutes**

3. **You'll see a success message:**
   ```
   Your site is live at https://YOUR-USERNAME.github.io/eegai-jobs/
   ```

4. **Click the URL to visit your site!**

---

## Part 5: Access Your Website

### Step 5.1: Find Your URL

Your website URL follows this pattern:
```
https://[YOUR-GITHUB-USERNAME].github.io/[REPOSITORY-NAME]/
```

**Example:**
- Username: `johndoe`
- Repository: `eegai-jobs`
- URL: `https://johndoe.github.io/eegai-jobs/`

### Step 5.2: Test Your Site

1. **Open the URL in your browser**

2. **You should see:**
   - EEGAI Jobs login page
   - Three role buttons: Employee, Employer, Admin
   - Clean, professional design

3. **Test the login:**
   - Username: `ravi@emp`
   - Password: `123`
   - Click "Sign In"

4. **If it works:**
   - 🎉 **Congratulations! Your site is LIVE!**

---

## Part 6: Share Your Website

### Option 1: Direct Link
```
https://YOUR-USERNAME.github.io/eegai-jobs/
```

### Option 2: Short Link (Free)

1. Go to: **https://bit.ly**
2. Paste your long URL
3. Click "Create"
4. Get short link like: `bit.ly/eegai-jobs-tamil`

### Option 3: QR Code

1. Go to: **https://qr-code-generator.com**
2. Enter your URL
3. Download QR code
4. Share in posters, flyers, WhatsApp

---

## Part 7: Install as Mobile App

### On Android:

1. **Open your website in Chrome:**
   - Visit your GitHub Pages URL
   - You'll see an **"📱 Install App"** button in the header
   - Click it
   - Confirm installation

2. **Alternative method:**
   - Tap the ⋮ (three dots) menu
   - Select "Add to Home screen"
   - Name it "EEGAI Jobs"
   - Tap "Add"

3. **Result:**
   - App icon appears on home screen
   - Opens like a native app
   - No browser UI

### On iPhone:

1. **Open in Safari:**
   - Visit your URL

2. **Tap the Share button:**
   - Look for 📤 icon at bottom
   - Tap it

3. **Add to Home Screen:**
   - Scroll down in the share menu
   - Find "Add to Home Screen"
   - Tap it
   - Name: "EEGAI Jobs"
   - Tap "Add"

4. **Done!**
   - App appears on home screen

---

## Part 8: Customization

### Change Your Details

1. **Download the index.html file:**
   - In GitHub, click `index.html`
   - Click the "Raw" button
   - Right-click → "Save As"
   - Save to your computer

2. **Open in text editor:**
   - Use Notepad (Windows)
   - Or TextEdit (Mac)
   - Or VS Code (recommended)

3. **Find and replace:**

   **Your Phone Number:**
   - Search for: `+91-9500400427`
   - Replace with: `+91-YOUR-NUMBER`

   **Your UPI ID:**
   - Search for: `eegaijobs@upi`
   - Replace with: `your-upi-id@bank`

4. **Save the file**

5. **Upload back to GitHub:**
   - Go to your repository
   - Click on `index.html`
   - Click the pencil icon (Edit)
   - Delete all content
   - Paste your new content
   - Scroll down
   - Click "Commit changes"

### Change Colors

In `index.html`, find this section (around line 30):

```css
:root{
  --primary:#4f46e5;  /* Main blue color */
  --secondary:#06b6d4; /* Cyan color */
  --accent:#f59e0b;   /* Orange color */
}
```

**Replace with your brand colors:**
```css
:root{
  --primary:#FF6B35;  /* Your brand color */
  --secondary:#004E89;
  --accent:#F77F00;
}
```

Use a color picker: https://colorpicker.me

---

## Part 9: Troubleshooting

### Problem: Site shows 404 error

**Solution:**
1. Check if GitHub Pages is enabled
2. Verify file name is exactly `index.html` (lowercase)
3. Wait 5 minutes after enabling Pages
4. Try incognito/private mode

### Problem: Site looks broken

**Solution:**
1. Clear browser cache: `Ctrl + Shift + Delete`
2. Hard refresh: `Ctrl + F5`
3. Check browser console (F12) for errors

### Problem: Login doesn't work

**Solution:**
1. Verify you're using correct credentials
2. Check browser console for JavaScript errors
3. Make sure localStorage is enabled

### Problem: PWA won't install

**Solution:**
1. Only works on HTTPS (GitHub Pages provides this)
2. Try on mobile device
3. Use Chrome or Edge browser
4. Clear browser data and try again

### Problem: Changes not showing

**Solution:**
1. Wait 2-3 minutes after uploading changes
2. Clear cache and hard refresh
3. Try incognito mode
4. Check if commit actually went through on GitHub

---

## Part 10: What Next?

### Immediate Actions:

1. **✅ Change admin password**
   - Edit the code
   - Create your own secure password

2. **✅ Test all features**
   - Register as employee
   - Register as employer
   - Post a job
   - Apply to job

3. **✅ Add your branding**
   - Logo
   - Colors
   - Contact information

### Marketing Your Portal:

1. **Social Media:**
   - Share on Facebook
   - Post on LinkedIn
   - Tweet about it
   - Instagram stories

2. **WhatsApp:**
   - Send to groups
   - Share link
   - Share QR code

3. **Email:**
   - Send to contacts
   - Newsletter
   - Email signature

4. **Offline:**
   - Print QR codes
   - Business cards
   - Posters
   - Flyers

---

## 📊 Expected Timeline

| Step | Time Required |
|------|--------------|
| Create GitHub account | 2 minutes |
| Create repository | 1 minute |
| Upload files | 2 minutes |
| Enable GitHub Pages | 1 minute |
| Wait for deployment | 3 minutes |
| Test website | 2 minutes |
| **Total** | **~10 minutes** |

---

## ✅ Final Checklist

Before you're done, verify:

- [ ] GitHub account created
- [ ] Repository named `eegai-jobs` created
- [ ] All 4 files uploaded successfully
- [ ] GitHub Pages enabled in Settings
- [ ] Website is accessible at your GitHub Pages URL
- [ ] Login works (tested with demo credentials)
- [ ] Mobile PWA installs successfully
- [ ] Contact details updated to yours
- [ ] Shared URL with at least one person

---

## 🎓 Learn More

- **GitHub Pages Docs:** https://docs.github.com/pages
- **PWA Guide:** https://web.dev/progressive-web-apps/
- **HTML/CSS Tutorial:** https://www.w3schools.com

---

## 🆘 Need Help?

**Can't figure something out?**

1. **Check GitHub Status:** https://githubstatus.com
2. **Try incognito mode** (rules out cache issues)
3. **Check browser console** (F12 key)
4. **Wait longer** (deployment can take up to 10 minutes)

**Still stuck?**
- Re-read this guide from the beginning
- Try on a different browser
- Clear all browser data and start fresh

---

## 🎉 Success!

If you've made it this far and your site is working:

**CONGRATULATIONS!** 🎊

You now have a:
- ✅ Professional job portal
- ✅ Mobile app (PWA)
- ✅ Free hosting (forever!)
- ✅ No monthly fees
- ✅ Your own web presence

**Share your success!**

Tweet: "Just launched my job portal at [your-url] using GitHub Pages! #EEGAIJobs #TamilNadu"

---

*Last Updated: February 2025*
*Version: 1.0*
