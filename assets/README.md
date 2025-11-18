# Assets Directory

This directory contains static assets for the website.

## Required Files

### CV PDF
Place your curriculum vitae PDF file here with the name referenced in `index.html`:
- Default name: `CV_Shuvodeep_De.pdf`
- Or update the link in `index.html` (search for "Download CV")

### Profile Image (Optional)
If you want to add a profile photo:
- Add image file (e.g., `profile.jpg`)
- Update the hero section in `index.html` to include an image element
- Update Open Graph meta tag with image path

### Other Assets
You can add:
- Publication figures
- Project screenshots
- Award certificates
- Conference photos
- Research diagrams

## Image Optimization Tips

1. **Compress images** before uploading:
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: < 200KB for photos, < 50KB for icons

2. **Use appropriate formats**:
   - Photos: JPG (compressed)
   - Graphics/logos: PNG or SVG
   - Icons: SVG (vector, scalable)

3. **Responsive images**:
   - Provide multiple sizes for different devices
   - Use `srcset` attribute in HTML

4. **Alt text**:
   - Always add descriptive alt text for accessibility

## Example Usage

```html
<!-- Profile photo in hero section -->
<div class="hero-image">
    <img src="assets/profile.jpg" alt="Dr. Shuvodeep De" />
</div>

<!-- Project screenshot -->
<img src="assets/project-screenshot.png" alt="Project name - key feature" />
```

## Note on GitHub Pages

- All files in this directory will be publicly accessible
- Do NOT store sensitive information or unpublished work
- Large files (>100MB) should be hosted elsewhere (e.g., Google Drive)
- Consider using a CDN for frequently accessed images
