# GPU限制

本文档列出了 WebGPU API 中“限制”的引用，这些限制决定了兼容的 WebGPU 实现的最低功能。
## GPULimits 词典 (更新时间 2021-04-13)

```javascript
dictionary GPULimits {
    unsigned long maxBindGroups = 4;
    unsigned long maxDynamicUniformBuffersPerPipelineLayout = 8;
    unsigned long maxDynamicStorageBuffersPerPipelineLayout = 4;
    unsigned long maxSampledTexturesPerShaderStage = 16;
    unsigned long maxSamplersPerShaderStage = 16;
    unsigned long maxStorageBuffersPerShaderStage = 4;
    unsigned long maxStorageTexturesPerShaderStage = 4;
    unsigned long maxUniformBuffersPerShaderStage = 12;
    unsigned long maxVertexBuffers = 8;
    unsigned long maxVertexAttributes = 16;
    unsigned long maxVertexArrayStride = 2048;
    unsigned long maxTextureDimension1D = 8192;
    unsigned long maxTextureDimension2D = 8192;
    unsigned long maxTextureDimension3D = 2048;
    unsigned long maxTextureArrayLayers = 2048;
};
```

限制 | API 文件 | gpuweb issue/PR | 笔记
--- | --- | --- | ---
`maxBindGroups = 4;` | [Vulkan](https://vulkan.lunarg.com/doc/view/1.2.170.0/linux/chunked_spec/chap42.html#limits) `maxBoundDescriptorSets` | |
`maxDynamicUniformBuffersPerPipelineLayout = 8;` | [Vulkan](https://vulkan.lunarg.com/doc/view/1.2.170.0/linux/chunked_spec/chap42.html#limits) `maxDescriptorSetUniformBuffersDynamic` | [#406](https://github.com/gpuweb/gpuweb/issues/406) |
`maxDynamicStorageBuffersPerPipelineLayout = 4;` | [Vulkan](https://vulkan.lunarg.com/doc/view/1.2.170.0/linux/chunked_spec/chap42.html#limits) `maxDescriptorSetStorageBuffersDynamic` | [#406](https://github.com/gpuweb/gpuweb/issues/406) |
`maxSampledTexturesPerShaderStage = 16;` | [Vulkan](https://vulkan.lunarg.com/doc/view/1.2.170.0/linux/chunked_spec/chap42.html#limits) `maxPerStageDescriptorSampledImages` | [#409](https://github.com/gpuweb/gpuweb/issues/409) |
`maxSamplersPerShaderStage = 16;` | [Vulkan](https://vulkan.lunarg.com/doc/view/1.2.170.0/linux/chunked_spec/chap42.html#limits) `maxPerStageDescriptorSamplers` | [#409](https://github.com/gpuweb/gpuweb/issues/409) |
`maxStorageBuffersPerShaderStage = 4;` | [Vulkan](https://vulkan.lunarg.com/doc/view/1.2.170.0/linux/chunked_spec/chap42.html#limits) `maxPerStageDescriptorStorageBuffers` | [#409](https://github.com/gpuweb/gpuweb/issues/409) |
`maxStorageTexturesPerShaderStage = 4;` | [Vulkan](https://vulkan.lunarg.com/doc/view/1.2.170.0/linux/chunked_spec/chap42.html#limits) `maxPerStageDescriptorStorageImages` | [#409](https://github.com/gpuweb/gpuweb/issues/409) |
`maxUniformBuffersPerShaderStage = 12;` | [Vulkan](https://vulkan.lunarg.com/doc/view/1.2.170.0/linux/chunked_spec/chap42.html#limits) `maxPerStageDescriptorUniformBuffers` | [#409](https://github.com/gpuweb/gpuweb/issues/409) |
`maxVertexBuffers = 8;` | [Vulkan](https://vulkan.lunarg.com/doc/view/1.2.170.0/linux/chunked_spec/chap42.html#limits) `maxVertexInputBindings` | [#693](https://github.com/gpuweb/gpuweb/issues/693) |
`maxVertexAttributes = 16;` | [Vulkan](https://vulkan.lunarg.com/doc/view/1.2.170.0/linux/chunked_spec/chap42.html#limits) `maxVertexInputAttributes` | [#693](https://github.com/gpuweb/gpuweb/issues/693) |
`maxVertexArrayStride = 2048;` | [Vulkan](https://vulkan.lunarg.com/doc/view/1.2.170.0/linux/chunked_spec/chap42.html#limits) `maxVertexInputBindingStride` | [#693](https://github.com/gpuweb/gpuweb/issues/693) |
`maxTextureDimension1D = 8192;` | [Vulkan](https://vulkan.lunarg.com/doc/view/1.2.170.0/linux/chunked_spec/chap42.html#limits) `maxImageDimension1D` | [#1327](https://github.com/gpuweb/gpuweb/issues/1327) | Vulkan 的限制是 4096. 我们扩展到 8192 因为 [市场上大多数设备可以支持8192或是更高](https://vulkan.gpuinfo.org/displaydevicelimit.php?name=maxImageDimension1D). 不支持这个限度的设备很少或是很陈旧.
`maxTextureDimension2D = 8192;` | [Vulkan](https://vulkan.lunarg.com/doc/view/1.2.170.0/linux/chunked_spec/chap42.html#limits) `maxImageDimension2D` | [#1327](https://github.com/gpuweb/gpuweb/issues/1327) | Vulkan 的限制是 4096. 我们扩展到 8192 因为 [市场上大多数设备可以支持8192或是更高](https://vulkan.gpuinfo.org/displaydevicelimit.php?name=maxImageDimension2D). 不支持这个限度的设备很少或是很陈旧.
`maxTextureDimension3D = 2048;` | [Vulkan](https://vulkan.lunarg.com/doc/view/1.2.170.0/linux/chunked_spec/chap42.html#limits) `maxImageDimension3D` | [#1327](https://github.com/gpuweb/gpuweb/issues/1327) | Vulkan 的限制是 256. 我们扩展到 2048 因为 [市场上大多数设备可以支持8192或是更高](https://vulkan.gpuinfo.org/displaydevicelimit.php?name=maxImageDimension3D). 不支持这个限度的设备很少或是很陈旧.
`maxTextureArrayLayers = 2048;` | [Vulkan](https://vulkan.lunarg.com/doc/view/1.2.170.0/linux/chunked_spec/chap42.html#limits) `maxImageArrayLayers` | [#1327](https://github.com/gpuweb/gpuweb/issues/1327) | Vulkan 的限制是 256. 我们扩展到 2048 因为 [市场上大多数设备可以支持8192或是更高](https://vulkan.gpuinfo.org/displaydevicelimit.php?name=maxImageArrayLayers). 不支持这个限度的设备很少或是很陈旧.
