#!/usr/bin/bash

echo "Start building"

echo "build en spec"
bikeshed --die-on=everything spec webgpu/spec/index.bs
cp webgpu/spec/index.html docs/.vitepress/dist/webgpu.html

echo "build en wgsl"
bikeshed --die-on=everything spec webgpu/wgsl/index.bs
cp webgpu/wgsl/index.html docs/.vitepress/dist/wgsl.html

echo "build en explainer"
bikeshed --die-on=everything spec webgpu/explainer/index.bs
cp webgpu/explainer/index.html docs/.vitepress/dist/explainer.html

echo "build zh spec"
bikeshed --die-on=everything spec webgpu/zh/spec/index.bs
cp webgpu/zh/spec/index.html docs/.vitepress/dist/zh/webgpu.html

echo "build zh wgsl"
bikeshed --die-on=everything spec webgpu/zh/wgsl/index.bs
cp webgpu/zh/wgsl/index.html docs/.vitepress/dist/zh/wgsl.html

echo "build zh explainer"
bikeshed --die-on=everything spec webgpu/zh/explainer/index.bs
cp webgpu/zh/explainer/index.html docs/.vitepress/dist/zh/explainer.html

echo "Finished"
