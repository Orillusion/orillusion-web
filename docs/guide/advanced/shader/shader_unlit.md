# 无光材质球
本篇将以引擎内置的 `UnlitMaterial` 为例，介绍如何创建一个材质球。

## 创建材质球
通过继承 `MaterialBase` 创建新的 `UnLitMaterial`。
```ts
export class UnLitMaterial extends MaterialBase {
    constructor() {
        super();
        //...
    }
}
```

## 编写着色器代码
首先需要准备编辑着色器脚本。
无光材质球作为比较基础的材质球，很多地方我们只需要`include`进来现有的代码段即可；

```wgsl
//引入通用顶点着色器相关代码
#include "Common_vert"
//引入通用片元着色器相关代码
#include "Common_frag"
//引入无光材质球片元着色器代码
#include "UnLit_frag"
//引入无光材质球，Uniform相关代码
#include "UnLitMaterialUniform_frag"
```

定义顶点着色`vert`函数：
```wgsl
fn vert(inputData:VertexAttributes) -> VertexOutput {
    //执行内置顶点着色器函数
    ORI_Vert(inputData) ;
    //输出顶点数据
    return ORI_VertexOut ;
}
```

定义片元着色`frag`函数：
```wgsl
fn frag(){
    //获取第一道UV偏移数据
    var transformUV1 = materialUniform.transformUV1;
    //获取第二道UV偏移数据
    var transformUV2 = materialUniform.transformUV2;
    //计算实时UV
    var uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; 
    //采样baseMap作为输出的颜色
    let color = textureSample(baseMap,baseMapSampler,uv) ;
    //将颜色存储到内置变量ORI_ShadingInput的BaseColor中
    ORI_ShadingInput.BaseColor = color * materialUniform.baseColor ;
    //执行无光着色函数
    UnLit();
}
```
将上述脚本通过特定的key`UnLitShader`放入ShaderLib中管理。
```ts
let Unlit:string = `${shaderCode}`;
 ShaderLib.register('UnLitShader', UnLit);
```

### 创建着色器`RenderShader`
在这里，我们将vertexShader和fragmentShader设置为同样的一段脚本。
```ts
//创建着色器实例
let shader = this.setShader(`UnLitShader`,`UnLitShader`);
//设置入口函数
shader.setShaderEntry(`VertMain`,`FragMain`)
```

### 设置材质球变量
材质球一般都会需要从外部修改材质球的渲染结果，我们通过抽象将这些需要修改的内容定义成变量，
开放给外部使用。
> 一个无光材质球可能同时会有简单的UV变换特效，会设置默认颜色、透明裁剪阈值等。
在这里我们提取了四个变量供外部修改。
```ts
//第一道UV的变换系数
shader.setUniformVector4(`transformUV1`, new Vector4(0, 0, 1, 1));
//第二道UV的变换系数
shader.setUniformVector4(`transformUV2`, new Vector4(0, 0, 1, 1));
//基础颜色
shader.setUniformColor(`baseColor`, new Color());
//透明裁剪阈值
shader.setUniformFloat(`alphaCutoff`, 0.5);

```

### 配置材质球的宏定义
材质球有一些通用的宏定义，需要显示的设置：
1. `useLight` 是否接受灯光影响;
2. `acceptGI` 是否接受全局光照 `GI`;
3. `acceptShadow` 是否接受阴影；
4. `castShadow` 是否产生阴影；
5. `receiveEnv` 是否介绍环境光；
6. ...

或许你还需要设置如下属性：
1. `renderLayer`所在渲染层级；
2. `renderOrder`渲染优先级（透明渲染）；
3. ...

无光材质球的宏定义如下：
```ts
let shaderState = shader.shaderState;
//不接受阴影
shaderState.acceptShadow = false;
//不接受环境光
shaderState.receiveEnv = false;
//不接受全局光照
shaderState.acceptGI = false;
//不受灯光影响
shaderState.useLight = false;

```

## 总结
自定义一个材质球的流程大体上和无光着色类似，在你实践的过程中，一般会遇到诸如此类的问题，逐个排除掉就可以获得正确结果了。
1. 使用了内置变量，但是内置变量还未定义：需要检查是否include了对应的代码段；
2. 使用了内置函数，但是内置函数未定义：需要检查是否include了对应的代码段；
3. 定义了变量，与内置变量相冲突：重命名你的变量至与内置变量不冲突；
4. 定义了函数，与内置函数相冲突：重命名你的函数至与内置函数不冲突；
5. 定义了结构体，与内置结构体冲突：重命名你的结构体至与内置结构体不冲突；
6. 错误的设定了宏，导致代码路径中使用到了未定义的变量、函数、结构体；
7. 材质球的Uniform、Texture、GPUBuffer数据绑定命名不一致，修改你的着色器代码中命名至与TypeScript脚本相一致。
