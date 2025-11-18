# Dr. Shuvodeep De - Professional Resume Website

A modern, responsive personal website showcasing computational science and AI expertise. Built with vanilla HTML5, CSS3, and JavaScript (ES6+), optimized for GitHub Pages deployment.

![Website Preview](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 🌐 View Live Website

**👉 [Click here to view the live resume website](https://your-username.github.io/)**

> **Note:** Replace `your-username` with your actual GitHub username after deployment.
> See [DEPLOYMENT.md](DEPLOYMENT.md) for complete setup instructions.

---

## 🌟 Features

### Design & UI
- **Modern Academic Aesthetic**: Clean, professional design suitable for research positions
- **Dark Mode Toggle**: Automatic theme switching with localStorage persistence
- **Responsive Layout**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **Print-Friendly**: Optimized CSS for PDF export

### Content Sections
- **Hero Section**: Prominent name display with quick stats and social links
- **About & Education**: Professional summary and academic credentials
- **Core Expertise**: Interactive skill cards with icons
- **Research Experience**: Timeline visualization of career progression
- **Grants & Funding**: Highlighted funded projects
- **Awards & Honors**: Recognition and achievements
- **Professional Service**: Peer review, editorial roles, and conference leadership
- **Certifications**: Professional development credentials
- **Technical Skills**: Categorized skill tags with hover effects
- **Publications**: H-index badge with Google Scholar integration
- **GitHub Integration**: Live stats, top repositories, and language distribution
- **Contact Section**: Professional contact information and form

### Technical Features
- **GitHub API Integration**: Auto-fetch repositories, stars, followers, and languages
- **Rate Limit Handling**: Smart caching to avoid API limits
- **SEO Optimized**: Meta tags for search engines and social media
- **Schema.org Markup**: Structured data for enhanced search results
- **Accessibility**: ARIA labels and semantic HTML
- **Performance**: Lazy loading, debounced scroll events, and optimized assets

## 🚀 Quick Start

> **📘 For complete deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)**

### Three Simple Steps to Go Live:

1. **Clone and Customize**
   ```bash
   git clone https://github.com/yourusername/Curriculum-Vitae.git
   cd Curriculum-Vitae
   ```
   - Update `GITHUB_USERNAME` in `js/main.js`
   - Add your CV PDF to `assets/` folder
   - Verify personal information in `index.html`

2. **Rename Repository (for main site)**
   - For `https://your-username.github.io/`
   - Rename repo to: `your-username.github.io`
   - See [DEPLOYMENT.md](DEPLOYMENT.md) for details

3. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Source: **main** branch, **/ (root)** folder
   - Click **Save**
   - Visit your site in 2-3 minutes!

### Alternative: Quick Local Preview

View the site on your computer before deploying:

```bash
python3 -m http.server 8000
# Open: http://localhost:8000
```

---

### Option 1: GitHub Pages (Recommended)

1. **Fork or Clone this repository**
   ```bash
   git clone https://github.com/yourusername/Curriculum-Vitae.git
   cd Curriculum-Vitae
   ```

2. **Customize the content** (see [Customization Guide](#-customization-guide))

3. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Personal website"
   git push origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Under **Source**, select **main** branch and **/ (root)** folder
   - Click **Save**
   - Your site will be live at `https://yourusername.github.io/repository-name/`

### Option 2: Custom Domain with GitHub Pages

1. Follow steps 1-3 from Option 1

2. **Add custom domain**
   - Create a file named `CNAME` in the root directory
   ```bash
   echo "www.yourdomainname.com" > CNAME
   ```

3. **Configure DNS** at your domain registrar:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

4. **Enable HTTPS** in repository settings after DNS propagation

### Option 3: Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Curriculum-Vitae.git
   cd Curriculum-Vitae
   ```

2. **Start a local server**

   Using Python:
   ```bash
   python -m http.server 8000
   ```

   Using Node.js:
   ```bash
   npx http-server
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 🎨 Customization Guide

### Personal Information

Edit `index.html` to update your personal details:

#### Contact Information (lines 30-50)
```html
<meta name="author" content="Your Name, PhD">
<!-- Update name, email, phone, and social links -->
```

#### Hero Section (lines 100-150)
```html
<h1 class="hero-title">
    <span class="name-highlight">Your Name</span>, PhD
</h1>
<p class="hero-tagline">
    Your Title | Your Specialization
</p>
```

#### Quick Stats (lines 160-180)
```html
<div class="stat-number">20+</div> <!-- Update numbers -->
```

#### Social Links (lines 190-210)
```html
<a href="mailto:youremail@example.com">...</a>
<a href="https://linkedin.com/in/yourprofile">...</a>
```

### GitHub Integration

Update `js/main.js` (line 8):
```javascript
const GITHUB_USERNAME = 'your-github-username';
```

The site will automatically fetch:
- Repository count
- Total stars
- Follower count
- Top 6 repositories by stars
- Programming language statistics

### Color Scheme

Edit `css/styles.css` (lines 1-30) to customize colors:

```css
:root {
    --primary-color: #1a365d;      /* Main brand color */
    --accent-color: #0891b2;       /* Accent/highlight color */
    --bg-primary: #ffffff;         /* Background color */
    /* ... more variables ... */
}
```

### Content Updates

#### Research Experience
Edit `index.html` starting at line 300:
```html
<div class="timeline-item">
    <div class="timeline-date">2024 – Present</div>
    <h3>Your Position</h3>
    <h4>Your Institution</h4>
    <ul>
        <li>Achievement or responsibility 1</li>
        <li>Achievement or responsibility 2</li>
    </ul>
</div>
```

#### Publications
Update Google Scholar link (line 700):
```html
<a href="https://scholar.google.com/citations?user=YOUR_ID">
```

#### CV Download
Add your CV PDF to the `assets` folder and update the link:
```html
<a href="assets/Your_CV.pdf" download>Download CV</a>
```

## 📁 Project Structure

```
Curriculum-Vitae/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styles (light/dark themes)
├── js/
│   └── main.js            # JavaScript functionality
├── assets/                # Images, CV PDF, etc.
│   └── CV_Shuvodeep_De.pdf
├── CNAME                  # Custom domain (optional)
└── README.md              # This file
```

## 🔧 Advanced Configuration

### Changing Fonts

Edit `index.html` (line 50):
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update `css/styles.css`:
```css
body {
    font-family: 'YourFont', sans-serif;
}
```

### Adding New Sections

1. Add HTML in `index.html`:
```html
<section class="section new-section" id="new-section">
    <div class="container">
        <h2 class="section-title">New Section</h2>
        <!-- Your content -->
    </div>
</section>
```

2. Add navigation link:
```html
<a href="#new-section">New Section</a>
```

3. Style in `css/styles.css`:
```css
.new-section {
    background-color: var(--bg-primary);
}
```

### GitHub API Rate Limits

The site uses client-side caching (1 hour) to minimize API calls:
- Unauthenticated: 60 requests/hour per IP
- Authenticated: 5,000 requests/hour

To use authenticated requests, add a personal access token:

```javascript
// In js/main.js, modify fetch calls:
const response = await fetch(url, {
    headers: {
        'Authorization': 'token YOUR_GITHUB_TOKEN'
    }
});
```

⚠️ **Warning**: Never commit tokens to public repositories!

## 🎯 SEO Optimization

### Meta Tags
Already included for:
- Search engines (description, keywords)
- Social media (Open Graph, Twitter Cards)
- Structured data (Schema.org)

### Best Practices
1. **Add alt text** to any images you include
2. **Update meta descriptions** in `index.html`
3. **Submit sitemap** to Google Search Console
4. **Use descriptive URLs** for custom domains

### Generate Sitemap

Create `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://yourwebsite.com/</loc>
        <lastmod>2024-11-18</lastmod>
        <priority>1.0</priority>
    </url>
</urlset>
```

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ IE11 (requires polyfills)

## 🐛 Troubleshooting

### GitHub Stats Not Loading

1. **Check username**: Verify `GITHUB_USERNAME` in `js/main.js`
2. **Rate limits**: Wait 1 hour or use authenticated requests
3. **Network**: Check browser console for errors
4. **CORS**: If testing locally, use a local server (not `file://`)

### Dark Mode Not Persisting

1. Check localStorage is enabled in browser
2. Verify `THEME_KEY` is unique if you have multiple sites

### Images Not Showing

1. Verify file paths are correct (case-sensitive on GitHub Pages)
2. Check images are committed to repository
3. Use relative paths: `assets/image.jpg` not `/assets/image.jpg`

### Custom Domain Not Working

1. Wait for DNS propagation (up to 48 hours)
2. Verify CNAME file is in repository root
3. Check DNS settings at domain registrar
4. Ensure HTTPS is not enforced before DNS propagates

## 📊 Analytics (Optional)

### Google Analytics

Add before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Privacy-Focused Alternatives
- [Plausible Analytics](https://plausible.io/)
- [Fathom Analytics](https://usefathom.com/)
- [Simple Analytics](https://simpleanalytics.com/)

## 🔒 Security & Privacy

- ✅ No server-side code required
- ✅ No cookies (except analytics if added)
- ✅ No personal data collection
- ✅ GitHub API calls are client-side only
- ✅ Contact form uses mailto (no data stored)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Suggestions and improvements are welcome! Please open an issue or submit a pull request.

## 💡 Tips for Academic Websites

1. **Keep it updated**: Regularly add new publications and projects
2. **Professional email**: Use institutional or professional email
3. **High-quality photo**: Add a professional headshot in the hero section
4. **Research highlights**: Feature your most impactful work
5. **Accessibility**: Ensure content is accessible to all users
6. **Mobile-first**: Many visitors will view on mobile devices
7. **Load time**: Keep images optimized and code minimal
8. **Clear CTA**: Make it easy for recruiters/collaborators to contact you

## 📞 Support

For questions or issues:
1. Check the [Troubleshooting](#-troubleshooting) section
2. Review [GitHub Pages documentation](https://docs.github.com/en/pages)
3. Open an issue in this repository

## 🙏 Acknowledgments

- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Fonts**: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- **Hosting**: [GitHub Pages](https://pages.github.com/)
- **API**: [GitHub REST API](https://docs.github.com/en/rest)

---

**Built with ❤️ for Dr. Shuvodeep De**

*Last updated: November 18, 2024*
