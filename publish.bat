npm run docs:build
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/YehorSeniuk/IOO master:gh-pages

