#!/bin/env zsh
pwd
export TAG_=$(getstamp)
npm publish *.tgz --tag "$TAG_" --access public
echo ""
echo "$TAG_"
echo ""
