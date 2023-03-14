# 代码引用（include）
在实际编写着色器代码的时候，我们会经常碰到这些情况：
1. 会频繁的解析normalMap获得贴图提供的法向量；
2. 定义过的struct在另外一个地方也要有同样的定义；
3. 特定的一组texture和对应的sampler需要重复定义；
4. 特定的一组GPUBuffer会被一些关联pass重复绑定。

于是我们最初的情况是copy同样的代码片段在需要使用的地方，这就意味着如果这段代码逻辑有调整，需要将所有被使用到的地方都要做一样的调整。
这是程序员最不容易也最有经验去处理的事情。于是我们引入`include`关键字到shader中。

### 介绍include使用方法
首先我们需要将会被重复使用的代码片段注册到ShaderLib中，使用一个唯一的key作为键去访问它。

查阅引擎中`GlobalUniform.wgsl`文件，我们定义过一个GlobalUniform的struct在该文件中，并且绑定有一个globalUniform在group为0 binding为0的位置。

#### 申明着色器片段
```wgsl
//以下代码将会被导出到引用过我的地方
struct GlobalUniform {
    projMat: mat4x4<f32>,
    ...
};

@group(0) @binding(0)
var<uniform> globalUniform: GlobalUniform;
```

#### 注册着色器片段
```ts
// 注册GlobalUniform代码片段
ShaderLib.register('GlobalUniform', GlobalUniform );
```

#### 引入着色器片段
在我们需要使用上述着色器片段的地方，只需要有一行代码，即可引入之前申明过的数据。
如果我们需要修改GlobalUniform代码详细内容，进入到`GlobalUniform.wgsl`文件中修改，这样就能获得全局修改的效果。
```ts
// 引入GlobalUniform代码片段
#include `GlobalUniform`
```

####内置着色代码片段
以下举例了一些经常会见到的内置过的代码片段定义：
```wgsl
#include "Common_vert"  //顶点着色器通用代码
#include "Common_frag"  //片元着色器通用代码
#include "BxDF_frag"    //使用BxDF方程片元着色代码
#include "UnLit_frag"   //使用无光着色的片元着色代码

```
## 总结
orillusion已经非常友好的帮开发者处理了这种重复编写同样脚本的问题，在你熟悉了我们的引擎之后，随着你深入的使用，你会越来越多的发现它的人性化。
