#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'i lost count what redeploy this is'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:LapaJr31/edu_db_labs.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:LapaJr31/ODB_lab.git master:gh-pages

cd -
