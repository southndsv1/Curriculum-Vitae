# 🚀 Enable GitHub Pages - Simple Guide

## ⚡ Quick Fix for 404 Error

Your website shows a 404 error because **GitHub Pages is not enabled yet**. Follow these simple steps to make it live:

---

## 📋 Step-by-Step Instructions (5 minutes)

### Step 1: Go to Repository Settings

1. **Open your repository on GitHub:**
   ```
   https://github.com/your-username/Curriculum-Vitae
   ```

2. **Click the "Settings" tab** (top right of the page)

### Step 2: Navigate to Pages

1. **In the left sidebar**, scroll down and click **"Pages"**

### Step 3: Configure Source

1. **Under "Build and deployment"**, find **"Source"**

2. **Click the dropdown** that says "None" or "Deploy from a branch"

3. **Select:** `Deploy from a branch`

4. **Under "Branch":**
   - **First dropdown:** Select `claude/build-researcher-resume-site-01KFcDYGTg7nJUMFD7RotBvJ`
     - (Or select `main` if you've merged the branch)
   - **Second dropdown:** Select `/ (root)`

5. **Click "Save"**

### Step 4: Wait for Deployment

1. **Refresh the page after 30 seconds**

2. **You should see a blue box** that says:
   ```
   Your site is ready to be published at https://your-username.github.io/Curriculum-Vitae/
   ```

3. **Wait 2-3 more minutes** for the actual deployment to complete

4. **The box will turn green** and say:
   ```
   ✅ Your site is live at https://your-username.github.io/Curriculum-Vitae/
   ```

### Step 5: Visit Your Site!

**Click the link** or manually visit:
```
https://your-username.github.io/Curriculum-Vitae/
```

**Replace `your-username`** with your actual GitHub username!

---

## 🎯 Want the Shorter URL?

To get `https://your-username.github.io/` instead of `https://your-username.github.io/Curriculum-Vitae/`:

### Option A: Rename Repository

1. Go to **Settings** (same place as before)
2. At the top, under **"Repository name"**
3. Change it to: `your-username.github.io`
   - Example: `shuvodeep-de.github.io`
4. Click **"Rename"**
5. Follow Steps 1-5 above again

### Option B: Create New Repository

1. Create a **new repository** named exactly: `your-username.github.io`
2. Push this code to it
3. Enable GitHub Pages

---

## 🔧 Before Sharing Your Live Site

Make sure to update:

### 1. GitHub Username (js/main.js, line 8)
```javascript
const GITHUB_USERNAME = 'your-actual-username';
```

### 2. Add Your CV PDF
Place your CV file in the `assets/` folder as:
```
assets/CV_Shuvodeep_De.pdf
```

### 3. Verify Personal Information
Check `index.html` for:
- ✅ Email address
- ✅ Phone number
- ✅ LinkedIn URL
- ✅ Google Scholar URL
- ✅ All sections are accurate

---

## 🖼️ Visual Guide

**GitHub Settings → Pages should look like this:**

```
┌─────────────────────────────────────────────────┐
│ Pages                                           │
├─────────────────────────────────────────────────┤
│                                                 │
│ Build and deployment                            │
│                                                 │
│ Source                                          │
│ ┌─────────────────────────────────────────┐   │
│ │ Deploy from a branch              ▼     │   │
│ └─────────────────────────────────────────┘   │
│                                                 │
│ Branch                                          │
│ ┌──────────────────┐  ┌──────────────────┐    │
│ │ claude/build...▼ │  │ / (root)      ▼  │    │
│ └──────────────────┘  └──────────────────┘    │
│                                                 │
│              [Save]                             │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## ✅ Checklist

- [ ] Went to repository Settings
- [ ] Clicked on Pages in sidebar
- [ ] Selected branch and / (root) folder
- [ ] Clicked Save
- [ ] Waited 2-3 minutes
- [ ] Visited the live site URL
- [ ] Site loads without 404 error! 🎉

---

## ❓ Troubleshooting

### Still seeing 404?

**Check these:**

1. **Did you click "Save"?** After selecting the branch
2. **Did you wait 2-3 minutes?** Deployment takes time
3. **Is the branch correct?** Make sure you selected the right branch
4. **Is the URL correct?** Use your actual GitHub username

### How do I know it's working?

**Go to Settings → Pages**

You should see a **green box** that says:
```
✅ Your site is live at https://your-username.github.io/Curriculum-Vitae/
```

### Need more help?

1. Check the detailed [DEPLOYMENT.md](DEPLOYMENT.md) guide
2. Review [GitHub Pages documentation](https://docs.github.com/en/pages)
3. Make sure your repository is **public** (not private)

---

## 🎉 Success!

Once you see your resume live, you can:

✅ Share the link with employers and colleagues
✅ Add it to your LinkedIn profile
✅ Include it in your email signature
✅ Pin the repository to your GitHub profile
✅ Update content anytime by pushing new commits

**Your professional resume website is now live! 🚀**
