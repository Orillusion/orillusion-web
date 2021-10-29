#!/usr/bin/bash

echo "Start building"
#build en
curl https://api.csswg.org/bikeshed/ -F file=@webgpu/spec/index.bs -F force=1 > docs/.vuepress/dist/webgpu.html
curl https://api.csswg.org/bikeshed/ -F file=@webgpu/wgsl/index.bs -F force=1 > docs/.vuepress/dist/wgsl.html
# build zh
curl https://api.csswg.org/bikeshed/ -F file=@webgpu/zh/spec/index.bs -F force=1 > docs/.vuepress/dist/zh/webgpu.html
curl https://api.csswg.org/bikeshed/ -F file=@webgpu/zh/wgsl/index.bs -F force=1 > docs/.vuepress/dist/zh/wgsl.html
echo "Finished"