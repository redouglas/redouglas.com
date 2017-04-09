#!/bin/bash

rm -rf docs
harp compile
mv www docs
git co docs/CNAME
echo 'done'
