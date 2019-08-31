#!/bin/sh

#packages
echo "Building Packages list..."
dpkg-scanpackages -m ./debs > Packages

echo "Compressing Packages..."
bzip2 -5fkv Packages > Packages.bz2
xz -5fkev Packages > Packages.xz
xz -5fkev --format=lzma Packages > Packages.lzma

#chmod
echo "Changing permissions..."
chmod +x packageInfo/*
chmod +x sileo-depictions/*
