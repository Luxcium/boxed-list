#!/bin/env zsh
pwd

rm -rf dist
rm -rf out
tsc -b ./tsconfig.build.json
cp 'LICENSE' './dist'
cp '.npmignore' './dist'
cp 'PARADÖX.JPEG' './dist'
cp 'README.md' './dist'
cp 'package.json' './dist'
cp 'package-lock.json' './dist'
rm -f *.tgz
cd ./dist;
rm -rf tests
pwd
npm pack --pack-destination ../
