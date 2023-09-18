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
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:boldak/<USERNAME>.github.io.git master

# # if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Dmutre/edu_db_labs-IM-21.git master:gh-pages

# if someone uses http request
# git push -f https://github.com/Dmutre/edu_db_labs-IM-21.git master:gh-pages

# if your default branch is main
# git push -f git@github.com:Dmutre/edu_db_labs-IM-21.git main:gh-pages

cd -
