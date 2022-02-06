#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# deploying to a custom domain
echo 'db_project.local' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/LazarievIvan/project_control_system master:gh-pages

cd -
