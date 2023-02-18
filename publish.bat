npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/shunichkaaaa/edu_db_labs_IO-12_Group-4 master:gh-pages

cd ..\..\..