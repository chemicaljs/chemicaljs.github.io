#!/usr/bin/env bash
set -e

pnpm build

if [ ! -d "build" ]; then
  echo "Error: 'build' directory not found. Check your vite.config.js outDir setting."
  exit 1
fi

echo "Deploying build contents to gh-pages..."

git push origin `git subtree split --prefix build`:refs/heads/gh-pages --force

echo "Successfully deployed to GitHub pages!"
