#!/bin/bash

# GitHub Pages Deployment Script for Quasar Moneyballs
# This script builds and deploys the app to GitHub Pages

# Exit on any error
set -e

echo "🚀 Starting GitHub Pages deployment..."

# Build the app for GitHub Pages
echo "📦 Building app for GitHub Pages..."
npm run build:gh-pages

# Navigate to the dist folder
cd dist/spa

# Initialize git repo in dist folder
echo "📝 Initializing git repository..."
git init
git add .
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
echo "📤 Pushing to GitHub Pages..."
git push -f git@github.com:touilfarouk/cv.git main:gh-pages

# Go back to root directory
cd ../..

echo "✅ Deployment complete! Your app should be available at:"
echo "https://touilfarouk.github.io/cv/"
