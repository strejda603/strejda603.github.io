#!/bin/sh

#packages
echo "Building Packages list..."
dpkg-scanpackages -m ./debs > Packages

echo "Compressing Packages..."
bzip2 -5fkv Packages > Packages.bz2
xz -5fkev Packages > Packages.xz
xz -5fkev --format=lzma Packages > Packages.lzma

echo "Setting Permissions..."
chmod -R 644 debs/*
chmod 700 depictions/*
chmod 644 depictions/*/*
chmod -R 644 sileo-depictions/*
