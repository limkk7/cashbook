#!/usr/bi/env bash

yarn build &&
cd build
echo "cashbook.versionlin.xyz" > CNAME
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:versionlin7/cashbook-website.git &&
git push -u origin master -f
