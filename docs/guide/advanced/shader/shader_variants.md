# 着色器变体 - Variants

对于开发者而言，同样一段着色器代码可能会面临多种使用环境，可能需要根据环境加载不同的变量或代码模块。我们内置了以下两个自定义 API 帮助开发者生成不同的着色器变体：
- 设定不同的宏定义 `setDefine()`；
- 设定不同的常量 `setConst()`； 

比如，要创建两个材质球 `shader`，一个接受光，一个不接受光，除此之外所有代码相同，我们就可以通过定义 `USE_LIGHT` 宏变量来灵活的加载不同的 `shader` 代码：

具有 `LIGHT` 数据的模型，其材质球需要设定宏 `setDefine("USE_LIGHT", true)`;

```ts
// 同样的wgsl代码
ShaderLib.register('vsCode', '....')
ShaderLib.register('fsCode', '....')

class shader1 extends MaterialBase{
    constructor() {
        let renderShader = this.setShader('vsCode','fsCode');
        //通过定义 USE_LIGHT 加载灯光模块
        renderShader.setDefine(`USE_LIGHT`, true);
    }
}
class shader2 extends MaterialBase{
    constructor() {
        let renderShader = this.setShader('vsCode','fsCode');
        //通过定义 USE_LIGHT 加载其他模块
        renderShader.setDefine(`USE_LIGHT`, false);
    }
}
```
同样一段着色器代码，会因为宏定义不同而生成不同的变体。从而可以生成具有不同功能的`RenderShader` 被用于不同的材质球中。
```wgsl
// 加载全局 shader
#include `GlobalUniform`

// 根据宏定义 USE_LIGHT 选择加载 不同的 shader
#if USE_LIGHT
    // ... 处理光的代码
#else
    // ... 不处理光的代码
#endif

// 其他代码
...
```