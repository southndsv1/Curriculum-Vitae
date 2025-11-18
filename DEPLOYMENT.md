# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your resume website so anyone visiting your GitHub profile can view it live.

## 🎯 Two Deployment Options

### **Option 1: Main User Site (Recommended)**
Your resume will be at: `https://your-username.github.io/`

### **Option 2: Project Site**
Your resume will be at: `https://your-username.github.io/Curriculum-Vitae/`

---

## 📘 Option 1: Main User Site (username.github.io)

This makes your resume your **primary GitHub website** - perfect for a professional portfolio!

### Step 1: Rename Your Repository

**If creating a NEW repository:**
1. Go to GitHub → Click **"New repository"**
2. Name it **exactly**: `your-username.github.io`
   - Example: If your username is `shuvodeep-de`, name it `shuvodeep-de.github.io`
3. Set to **Public**
4. Click **Create repository**

**If using THIS repository:**
1. Go to repository **Settings**
2. Scroll to **Repository name**
3. Change name to: `your-username.github.io`
4. Click **Rename**

### Step 2: Push Your Code

```bash
# If you're starting fresh with the new repo:
git remote set-url origin https://github.com/your-username/your-username.github.io.git
git branch -M main
git push -u origin main

# If you renamed the existing repo:
# Just make sure your code is on the main branch
git checkout main  # or create: git checkout -b main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under **Source**:
   - Branch: **main**
   - Folder: **/ (root)**
3. Click **Save**

### Step 4: Wait and Visit

- Wait 1-3 minutes for deployment
- Visit: `https://your-username.github.io/`
- Your resume is now LIVE! 🎉

---

## 📗 Option 2: Project Site (Curriculum-Vitae)

Keep your repository named as-is. Your resume will be at a subfolder URL.

### Step 1: Ensure Code is Pushed

```bash
git checkout main  # or your primary branch
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under **Source**:
   - Branch: **main**
   - Folder: **/ (root)**
3. Click **Save**

### Step 3: Visit Your Site

- Wait 1-3 minutes
- Visit: `https://your-username.github.io/Curriculum-Vitae/`

---

## 🔗 Link from Your GitHub Profile

### Make Your Resume Discoverable

**1. Pin the Repository**
- Go to your GitHub profile
- Click **Customize your pins**
- Select your resume repository
- Click **Save pins**

**2. Add to Profile README**

Create/edit your profile README (`your-username/your-username/README.md`):

```markdown
## 👨‍🔬 About Me

Research Associate specializing in Computational Sciences & AI

📄 **[View My Resume →](https://your-username.github.io/)**

🔬 Research Interests: Multiphysics Simulations • HPC • Scientific AI
```

**3. Add Repository Description**
- Go to your resume repository
- Click the ⚙️ icon next to "About"
- Description: `Professional resume website showcasing computational science and AI expertise`
- Website: `https://your-username.github.io/`
- Topics: `resume`, `portfolio`, `github-pages`, `computational-science`, `research`
- Click **Save changes**

---

## 🎨 Customization Before Going Live

### Required Updates

#### 1. Update GitHub Username
Edit `js/main.js` (line 8):
```javascript
const GITHUB_USERNAME = 'your-actual-github-username';
```

#### 2. Add Your CV PDF
Place your CV in `assets/` folder as `CV_Shuvodeep_De.pdf`

#### 3. Verify Personal Information
Check `index.html` for:
- Email address
- Phone number
- LinkedIn URL
- Google Scholar URL
- All content accuracy

### Optional Customizations

#### Add Profile Photo
1. Add image to `assets/profile.jpg`
2. Edit `index.html` hero section:
```html
<div class="hero-content">
    <img src="assets/profile.jpg" alt="Dr. Shuvodeep De"
         style="width: 200px; height: 200px; border-radius: 50%; margin-bottom: 2rem;">
    <div class="hero-text">
        <!-- existing content -->
    </div>
</div>
```

#### Custom Domain (Optional)
1. Buy a domain (e.g., `shuvodeepde.com`)
2. Add `CNAME` file to repository root:
   ```
   www.shuvodeepde.com
   ```
3. Configure DNS at your domain registrar:
   - Add CNAME record: `www` → `your-username.github.io`
4. Enable HTTPS in GitHub Pages settings

---

## ✅ Deployment Checklist

Before going live, verify:

- [ ] Repository is named correctly (`username.github.io` or `Curriculum-Vitae`)
- [ ] Code is pushed to `main` branch
- [ ] GitHub Pages is enabled in Settings → Pages
- [ ] `GITHUB_USERNAME` is updated in `js/main.js`
- [ ] CV PDF is in `assets/` folder
- [ ] All personal information is accurate
- [ ] Social links work correctly
- [ ] Site loads at your GitHub Pages URL
- [ ] Dark mode toggle works
- [ ] Mobile responsive design works
- [ ] Repository is pinned to profile (optional)
- [ ] Profile README links to site (optional)

---

## 🧪 Testing Your Live Site

Once deployed, test:

1. **Visit the URL** - Does it load?
2. **Test all sections** - Scroll through the entire page
3. **Click all links** - Social media, Google Scholar, CV download
4. **Toggle dark mode** - Does it persist on refresh?
5. **Check GitHub stats** - Do your repos show up?
6. **Test mobile** - Resize browser or use phone
7. **Test contact form** - Does mailto work?
8. **Check print** - Press Ctrl+P (or Cmd+P), does it look good?

---

## 🔄 Updating Your Live Site

Whenever you make changes:

```bash
# Make your changes to the files
git add .
git commit -m "Update resume content"
git push

# GitHub Pages auto-rebuilds (wait 1-2 minutes)
```

---

## 🐛 Troubleshooting

### Site shows 404
- Check repository name matches `username.github.io` exactly
- Verify GitHub Pages is enabled in Settings
- Wait 5 minutes after enabling Pages
- Ensure files are on the correct branch

### GitHub stats don't load
- Update `GITHUB_USERNAME` in `js/main.js`
- Check browser console for errors
- Verify username is spelled correctly

### CV download doesn't work
- Add PDF file to `assets/` folder
- Ensure filename matches the link in `index.html`
- File must be committed and pushed

### Custom domain not working
- Wait up to 48 hours for DNS propagation
- Verify CNAME record at domain registrar
- Check `CNAME` file exists in repository root
- Ensure DNS points to correct GitHub Pages address

### Changes not appearing
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Wait 1-2 minutes for GitHub Pages rebuild
- Check that changes were committed and pushed

---

## 📊 Analytics (Optional)

Track visitors to your resume:

### Google Analytics
Add to `index.html` before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Privacy-Friendly Alternatives
- [Plausible Analytics](https://plausible.io/)
- [Fathom Analytics](https://usefathom.com/)
- [GoatCounter](https://www.goatcounter.com/) (Free!)

---

## 🎓 Best Practices for Academic Resumes

1. **Keep it updated** - Add new publications regularly
2. **Professional photo** - Add a high-quality headshot
3. **Verify links** - Check all URLs work before sharing
4. **Test on mobile** - Many visitors view on phones
5. **Monitor analytics** - See which sections get attention
6. **Share widely** - Add to email signatures, conference bios
7. **Regular backups** - Keep local copy of your code

---

## 📞 Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Review [QUICK_START.md](QUICK_START.md) for basics
- GitHub Pages docs: https://docs.github.com/en/pages
- Open an issue if you encounter problems

---

**Your professional resume website is ready to go live! 🚀**

Choose your deployment option above and follow the steps. In minutes, you'll have a beautiful, professional online presence.
