#!/bin/sh

#packages
echo adding changes
git add --all

echo commiting changes
git commit -m "pkg update"

echo pushing changes to repository
git push origin master