#!/usr/bin/bash

echo "Start building"

echo "build en spec"
bikeshed --die-on=everything spec webgpu/spec/index.bs
cp webgpu/spec/index.html docs/.vuepress/dist/webgpu.html

echo "build en wgsl"
bikeshed --die-on=everything spec webgpu/wgsl/index.bs
cp webgpu/wgsl/index.html docs/.vuepress/dist/wgsl.html

echo "build zh spec"
bikeshed --die-on=everything spec webgpu/zh/spec/index.bs
cp webgpu/zh/spec/index.html docs/.vuepress/dist/zh/webgpu.html

echo "build zh wgsl"
bikeshed --die-on=everything spec webgpu/zh/wgsl/index.bs
cp webgpu/zh/wgsl/index.html docs/.vuepress/dist/zh/wgsl.html

echo "Finished"
