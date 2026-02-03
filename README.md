# 1. Build the app for GitHub Pages
npm run build:gh-pages

# 2. Navigate to the dist folder
cd dist/spa

# 3. Initialize git repository (if not already done)
git init

# 4. Add all files
git add .

# 5. Commit the files
git commit -m "Deploy to GitHub Pages"

# 6. Push to gh-pages branch
git push -f git@github.com:touilfarouk/cv.git master:gh-pages

# 7. Go back to root directory
cd ../..
