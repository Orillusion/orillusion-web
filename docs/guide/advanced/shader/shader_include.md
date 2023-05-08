# 代码引用
在实际编写着色器代码的时候，我们会经常碰到这些情况：
 - 会频繁的解析 `normalMap` 获得贴图提供的法向量
 - 定义过的 `struct` 在另外一个地方也要有同样的定义
 - 特定的一组 `texture` 和对应的 `sampler` 需要重复定义
 - 特定的一组 `GPUBuffer`会被一些关联 `pass` 重复绑定


于是我们最初的情况是 `copy` 同样的代码片段在需要使用的地方，这就意味着如果这段代码逻辑有调整，需要将所有被使用到的地方都要做一样的调整。
这是程序员最不容易也最有经验去处理的事情。于是我们引入 `#include` 关键字到 `shader` 中。

### #include
按照上一章的方法，假设我们已经注册了一段全局代码到 `ShaderLib`, 并使用 `GlobalUniform` 作为唯一的 `key`:

```ts
// 注册GlobalUniform代码片段
ShaderLib.register('GlobalUniform', GlobalUniform );
```

这样后续在其它 `shader` 中，只需要有一行代码，即可引入 `GlobalUniform` 的代码片段和数据。我们只需要修改 `GlobalUniform` 代码的内容，就能获得全局修改的效果。
::: code-group
```wgsl [shader1]
// 引入 GlobalUniform 代码片段
#include `GlobalUniform`

// 其它代码1
....
```
```wgsl [shader2]
// 引入 GlobalUniform 代码片段
#include `GlobalUniform`

// 其它代码2
....
```
```wgsl [shader3]
// 引入 GlobalUniform 代码片段
#include `GlobalUniform`

// 其它代码3
....
```
:::

### 内置公共着色代码片段

以下举例了一些经常会见到的内置过的代码片段定义：

```wgsl
#include "Common_vert"  //顶点着色器通用代码
#include "Common_frag"  //片元着色器通用代码
#include "BxDF_frag"    //使用BxDF方程片元着色代码
#include "UnLit_frag"   //使用无光着色的片元着色代码
```