#!/usr/bin/bash

echo "Start building"

echo "build spec"
cd webgpu/spec/
make
cp index.html docs/.vitepress/dist/webgpu.html
make clean

echo "build wgsl"
cd ../wgsl/
make index.html
cp webgpu/wgsl/index.html docs/.vitepress/dist/wgsl.html
make clean

echo "build explainer"
cd ../explainer/
make
cp webgpu/explainer/index.html docs/.vitepress/dist/explainer.html
make clean

echo "Finished"
