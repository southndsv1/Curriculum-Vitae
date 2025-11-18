#!/bin/bash

# ========================================
# GitHub Pages Deployment Script
# ========================================
# This script helps deploy your resume website to GitHub Pages
# Run this script to make your website live!

echo "🚀 GitHub Pages Deployment Helper"
echo "===================================="
echo ""

# Step 1: Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run this script from the Curriculum-Vitae directory."
    exit 1
fi

echo "✅ Found index.html - we're in the right directory"
echo ""

# Step 2: Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"
echo ""

# Step 3: Options for deployment
echo "Choose your deployment option:"
echo ""
echo "Option 1: Merge to main branch and deploy"
echo "   → Your site will be at: https://your-username.github.io/Curriculum-Vitae/"
echo ""
echo "Option 2: Deploy from current branch"
echo "   → Your site will be at: https://your-username.github.io/Curriculum-Vitae/"
echo ""
echo "Option 3: I'll do it manually"
echo ""

read -p "Enter your choice (1, 2, or 3): " choice

case $choice in
    1)
        echo ""
        echo "🔄 Creating and pushing main branch..."
        git checkout -b main 2>/dev/null || git checkout main
        git merge $CURRENT_BRANCH --no-edit
        git push -u origin main
        echo ""
        echo "✅ Main branch created and pushed!"
        echo ""
        echo "📋 Next steps:"
        echo "1. Go to: https://github.com/your-username/Curriculum-Vitae/settings/pages"
        echo "2. Under 'Source', select: Branch: main, Folder: / (root)"
        echo "3. Click 'Save'"
        echo "4. Wait 2-3 minutes"
        echo "5. Visit: https://your-username.github.io/Curriculum-Vitae/"
        ;;
    2)
        echo ""
        echo "📋 Manual steps to deploy from current branch:"
        echo ""
        echo "1. Go to: https://github.com/your-username/Curriculum-Vitae/settings/pages"
        echo "2. Under 'Source', select:"
        echo "   - Branch: $CURRENT_BRANCH"
        echo "   - Folder: / (root)"
        echo "3. Click 'Save'"
        echo "4. Wait 2-3 minutes"
        echo "5. Visit: https://your-username.github.io/Curriculum-Vitae/"
        ;;
    3)
        echo ""
        echo "📋 Manual deployment instructions:"
        echo ""
        echo "To deploy to GitHub Pages:"
        echo "1. Push your code to GitHub (already done!)"
        echo "2. Go to repository Settings → Pages"
        echo "3. Select your branch and folder"
        echo "4. Click Save"
        echo "5. Wait for deployment"
        echo ""
        echo "See DEPLOYMENT.md for detailed instructions"
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "🎉 Setup complete! Don't forget to:"
echo "   1. Update GITHUB_USERNAME in js/main.js"
echo "   2. Add your CV PDF to assets/ folder"
echo "   3. Verify personal info in index.html"
echo ""
