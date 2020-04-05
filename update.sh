#!/bin/sh

#packages
echo "Building Packages list..."
dpkg-scanpackages -m ./debs > Packages

echo "Compressing Packages..."
bzip2 -5fkv Packages > Packages.bz2
xz -5fkev Packages > Packages.xz
xz -5fkev --format=lzma Packages > Packages.lzma

echo "Setting Permissions..."
chmod 750 debs
chmod 640 debs/*
chmod 750 depictions
chmod 750 depictions/*
chmod 640 depictions/*/*.html
chmod 750 depictions/*/screenshots
chmod 640 depictions/*/screenshots/*
chmod 750 depictions/resources
chmod 750 depictions/resources/*
chmod 640 depictions/resources/*/*
chmod 750 sileo-depictions
chmod 640 sileo-depictions/*

echo "DONE!"
