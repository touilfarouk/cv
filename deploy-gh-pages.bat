@echo off
REM GitHub Pages Deployment Script for Quasar Moneyballs (Windows)
REM This script builds and deploys the app to GitHub Pages

echo 🚀 Starting GitHub Pages deployment...

REM Build the app for GitHub Pages
echo 📦 Building app for GitHub Pages...
call npm run build:gh-pages

REM Navigate to the dist folder
cd dist\spa

REM Initialize git repo in dist folder
echo 📝 Initializing git repository...
git init
git add .
git commit -m "Deploy to GitHub Pages"

REM Push to gh-pages branch
echo 📤 Pushing to GitHub Pages...
git push -f git@github.com:touilfarouk/cv.git main:gh-pages

REM Go back to root directory
cd ..\..

echo ✅ Deployment complete! Your app should be available at:
echo https://touilfarouk.github.io/cv/
