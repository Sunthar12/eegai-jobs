# 🚀 EEGAI Jobs - GitHub Pages Deployment Guide

## 📦 Files Included

- `index.html` - Main application file
- `manifest.json` - PWA configuration
- `sw.js` - Service worker for offline support
- `README.md` - This file
- `SETUP.md` - Detailed setup instructions

## ⚡ Quick Setup (5 Minutes)

### Step 1: Create GitHub Account
1. Go to https://github.com/signup
2. Sign up (it's free!)
3. Verify your email

### Step 2: Create New Repository
1. Click the **"+"** button (top right)
2. Select **"New repository"**
3. **Repository name:** `eegai-jobs`
4. Select **"Public"**
5. Click **"Create repository"**

### Step 3: Upload Files
1. Click **"uploading an existing file"**
2. Drag and drop ALL files from this folder:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `README.md`
3. Click **"Commit changes"**

### Step 4: Enable GitHub Pages
1. Go to **Settings** tab
2. Click **"Pages"** in the left sidebar
3. Under **"Source"**, select **"main"** branch
4. Click **"Save"**
5. Wait 2-3 minutes

### Step 5: Your Site is LIVE! 🎉
Your website will be available at:
```
https://YOUR-USERNAME.github.io/eegai-jobs/
```

Replace `YOUR-USERNAME` with your actual GitHub username.

---

## 🎯 Default Login Credentials

### For Testing:
- **Employee:** Username: `ravi@emp` | Password: `123`
- **Employer:** Username: `abc@employer` | Password: `123`
- **Admin:** Username: `admin@eegai` | Password: `Admin@123`

**⚠️ IMPORTANT:** Change these credentials after deployment for security!

---

## 📱 Install as Mobile App (PWA)

### On Android (Chrome):
1. Open your website
2. Tap the **"Install App"** button in the header
3. Or: Menu → "Add to Home screen"
4. App appears on your home screen!

### On iPhone (Safari):
1. Open your website
2. Tap the **Share** button
3. Tap **"Add to Home Screen"**
4. Done!

---

## 🎨 Customization

### Change Company Name:
In `index.html`, find and replace:
- `EEGAI Jobs` → Your Company Name

### Change Colors:
In `index.html`, find the `:root` CSS section (around line 30):
```css
:root{
  --primary:#4f46e5;  /* Change this to your brand color */
  --secondary:#06b6d4;
  --accent:#f59e0b;
}
```

### Update Contact Information:
Search for `+91-9500400427` and replace with your number.

---

## 🔧 Features Included

✅ User Registration & Login  
✅ Job Posting (Employers)  
✅ Job Search (Employees)  
✅ Admin Dashboard  
✅ Mobile App (PWA)  
✅ Offline Support  
✅ Local Data Storage  
✅ Responsive Design  

---

## 📊 How It Works

1. **Data Storage:** All data is stored in the browser's localStorage
2. **No Backend Required:** Pure frontend application
3. **Works Offline:** After first visit, works without internet
4. **Free Forever:** GitHub Pages is 100% free

---

## 🌐 Custom Domain (Optional)

Want your own domain like `eegaijobs.com`?

1. Buy domain from:
   - Namecheap: https://www.namecheap.com (₹500-800/year)
   - GoDaddy: https://www.godaddy.com
   
2. In GitHub repository:
   - Settings → Pages → Custom domain
   - Enter: `www.eegaijobs.com`
   - Save

3. Update DNS records at your domain registrar:
   - Add CNAME record: `www` → `YOUR-USERNAME.github.io`

---

## 🆘 Troubleshooting

### Site not loading?
- Wait 5 minutes after enabling GitHub Pages
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito/private mode

### PWA not installing?
- Must be on HTTPS (GitHub Pages provides this automatically)
- Works best on Chrome/Edge browsers
- Try on mobile device

### Data not saving?
- Check if browser allows localStorage
- Disable incognito/private mode
- Try different browser

---

## 📈 Next Steps

After deployment:

1. **Create Your Own Admin Account:**
   - Login as admin
   - Change password in code
   - Create your real employer/employee accounts

2. **Add Real Data:**
   - Post actual jobs
   - Test the full workflow
   - Share with users

3. **Promote Your Site:**
   - Share on social media
   - WhatsApp groups
   - Email campaigns

---

## 💡 Pro Tips

1. **Regular Backups:**
   - Download user data using Excel export
   - Keep backups of important information

2. **Monitor Usage:**
   - Check browser console for errors
   - Test on different devices

3. **Update Content:**
   - Keep job listings fresh
   - Remove expired jobs regularly

---

## 📞 Support

Need help? 

- **Video Tutorial:** https://www.youtube.com/watch?v=QyFcl_Fba-k
- **GitHub Docs:** https://docs.github.com/pages
- **Check Issues:** https://github.com/YOUR-USERNAME/eegai-jobs/issues

---

## 📄 License

Free to use and modify for your employment portal needs.

---

## 🙏 Credits

Built with:
- Pure HTML/CSS/JavaScript
- XLSX.js for Excel export
- Chart.js for analytics
- Inter & Noto Sans Tamil fonts

---

## ✨ Success Checklist

- [ ] GitHub account created
- [ ] Repository created (`eegai-jobs`)
- [ ] All files uploaded
- [ ] GitHub Pages enabled
- [ ] Site is live and accessible
- [ ] Tested login on all user types
- [ ] PWA installs on mobile
- [ ] Customized with your branding

---

**🎉 Congratulations! Your job portal is now LIVE!**

Share your site: `https://YOUR-USERNAME.github.io/eegai-jobs/`

---

*Last Updated: February 2025*
