# 代码宏

跟[代码引用](./shader_include.md)类似，除了直接引用 `shader` 外，我们还可以在通过简单的宏 `(if-else-endif)` 语句来进行代码选择性的加载

比如，要创建两个材质球 `shader`，一个接受光，一个不接受光，除此之外所有代码相同，我们就可以通过定义 `USE_LIGHT` 宏变量来灵活的加载不同的 shader 代码：

```wgsl
// 加载全局 shader
#include `GlobalUniform`

// 根据宏定义 USE_LIGHT 选择加载 不同的 shader
#if USE_LIGHT
    #include `shader1`
#else
    #include `shader2`
#endif

// 其他代码
...
```

关于 `宏` 定义，请见下章 [着色提变体](./shader_variants.md)