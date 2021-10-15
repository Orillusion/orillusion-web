# WebGPU + ImageBitmap

```webidl
dictionary GPUImageBitmapCopyView {
    required ImageBitmap imageBitmap;
    GPUOrigin2D origin;
};

partial interface GPUQueue {
    void copyImageBitmapToTexture(
        GPUImageBitmapCopyView source,
        GPUTextureCopyView destination,
        // For now, copySize.z must be 1.
        GPUExtent3D copySize);
};
```

`copyImageBitmapToTexture`将一个`ImageBitmap`的子矩形源备份提交至一个`GPUTexture`的子资源目的地。`ImageBitmap`不能被分开，否则产生一个校验错误。

## 可选择考量

  * 直接从`ImageBitmap`创建`GPUTexture`，尝试避免过多拷贝，因为它需要`GPUTexture`的格式与`ImageBitmap`内部表示匹配，这在网站平台中没有被暴露。另外，`ImageBitmap`可以是GPU-或CPU-支持，包一层CPU支持的`ImageBitmap`是重要的元操作，该操作需要提交另外的备份。
  * 已在`GPUCommandEncoder`上`CopyImageBitmapToTexture`：这使实现变得更复杂，因为他们不知道何时备份会被有效提交。在`GPUCommandEncoder`中不同方式进行`copyImageBitmapToTexture`同样被允许，这需要粘接编码器并持续追踪所有分块。切合实际地，拷贝`ImageBitmap`应当在加载`<img>`标签备份时进行，或最多一帧几次比如拷贝一个相机帧，所以直接拷贝是不错的。

## 问题

  * 一些`ImageBitmap`的创建选项，比如“flipY”，有必须匹配数据将被使用的目标图形API的语义含义。对WebGL来说，`imageOrientation: “flipY”`是必需的以确保`WebGLTexture`结果正确。对WebGPU来说，纹理与WebGL中定义不同，需要使用`imageOrientation: “none”`。这些例子需要被完善地测试。

  * 浏览器可能对`ImageBitmap`选择一个内部的描述，这不是一个WebGPU的理想使用（或者，就此而言，WebGL也一样）。这会由于上传时的像素数据欺骗导致纹理上传开销比需求更大。在构建时提供任何关于`ImageBitmap`的使用提示（比如，“for use with WebGL”或“for use with this WebGPU adapter”）需要改变HTML标准。尝试改变`ImageBitmap`的Chrome内部描述至今为止还没有成功过；它在其他浏览器中的可行性尚不清楚。