# RenderShader
材质球 `Material` 用于描述被渲染物体表面的外观，控制引擎该如何渲染。一个材质球内部必须指定一个 `RenderShader`，它们紧密相连，材质球的很多属性都是寄存在了着色器上。
- 材质球和着色器是多对一的关系，材质球拥有着色器实例的引用；多个不同的材质球可以复用同一个着色器
- 材质球除了包含着色器之外，还拥有贴图列表，渲染优先级等其它内容

创建材质球必须指定着色器实例，以下内容将介绍如何创建着色器实例

## 注册着色器
每一个着色器都必须要通过 `ShaderLib` 进行注册，着色器必须拥有唯一的 `key` 作为名称
```ts
import {ShaderLib} from '@orillusion/core'
let MyShader = ` 
    fn vert(inputData:VertexAttributes) -> VertexOutput {
       //...
       return ORI_VertexOut ;
    }

    fn frag(){
        //...
    }
    `;
// 注册着色器
ShaderLib.register('myShader', MyShader)
```

## 创建着色器实例
我们可以继承 `MaterialBase` 来创建新的着色器实例，在通过 `ShaderLib` 注册对应的 `shader` 代码后，我们可以使用 `setShader(vs:string, fs:string)` 完成着色器的创建

```ts
let vsShader = `.... ` //wgsl vs 代码
let fsShader = `.... ` //wgsl fs 代码

class myShader extends MaterialBase{
    constructor() {
        super();
        // 注册shader
        ShaderLib.register("vsShader", vsShader);
        ShaderLib.register("fsShader", fsShader);
        // 创建renderShader实例
        let renderShader = this.setShader('vsShader','fsShader');
    }
}
```

## 设定着色器主函数
着色器实例创建好了之后，需要设定顶点着色和片元着色的主函数入口名称。
```ts
// 设置着色器代码入口名称
renderShader.setShaderEntry( `VertMain`, `FragMain` )
```

## 设定着色器定义宏 `Define`
使用宏定义可以优化你的着色器代码，让程序能够高效的按照设定的变量，进入到不同的分支路径中执行
```ts
// 使用 tangent 相关的代码
renderShader.setDefine("USE_TANGENT", true);
```

> 更多宏定义相关内容将在 [着色器变体](./shader_variants.md) 中介绍
