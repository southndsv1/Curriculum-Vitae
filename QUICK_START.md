# Quick Start Guide

## View the Website Locally

### Option 1: Python (Recommended)
```bash
cd /path/to/Curriculum-Vitae
python3 -m http.server 8000
```
Then open: http://localhost:8000

### Option 2: Node.js
```bash
npx http-server
```

### Option 3: VS Code
Install "Live Server" extension and click "Go Live"

## Add Your CV PDF

1. **Export your CV as PDF** from Word, LaTeX, or your preferred tool

2. **Rename the file** to: `CV_Shuvodeep_De.pdf`

3. **Place it in the `assets/` folder**:
   ```
   Curriculum-Vitae/
   └── assets/
       └── CV_Shuvodeep_De.pdf  ← Put your CV here
   ```

4. **Commit and push**:
   ```bash
   git add assets/CV_Shuvodeep_De.pdf
   git commit -m "Add CV PDF"
   git push
   ```

### Alternative: Use a Different Filename

If you prefer a different filename, update `index.html` line ~165:

```html
<!-- Change this: -->
<a href="assets/CV_Shuvodeep_De.pdf" download>

<!-- To this: -->
<a href="assets/your-filename.pdf" download>
```

## Customize GitHub Username

**IMPORTANT**: Update your GitHub username in `js/main.js` (line 8):

```javascript
const GITHUB_USERNAME = 'your-actual-github-username';
```

Without this, the GitHub stats section won't load your repositories.

## Deploy to GitHub Pages

1. **Merge to main branch** or create new repository
2. Go to **Settings** → **Pages**
3. Select source: **main branch** → **/ (root)**
4. Click **Save**
5. Wait 2-3 minutes for deployment
6. Visit: `https://yourusername.github.io/repository-name/`

## Test the Website

Open http://localhost:8000 and verify:
- ✅ Dark mode toggle works
- ✅ All sections display correctly
- ✅ Mobile menu works (resize browser)
- ✅ Social links work
- ✅ Contact form creates mailto link
- ✅ GitHub stats load (if username is set)
- ⚠️ CV download works (after adding PDF)

## Troubleshooting

**GitHub stats show "--"**
→ Update `GITHUB_USERNAME` in `js/main.js`

**CV download doesn't work**
→ Add your PDF to the `assets/` folder

**Website looks broken**
→ Use a local server, not `file://` protocol

**Dark mode doesn't persist**
→ Check if localStorage is enabled in browser

## Need Help?

Check the detailed README.md or open an issue on GitHub.
