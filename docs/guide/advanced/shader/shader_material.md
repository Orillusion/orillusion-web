# 着色器实例（RenderShader）
材质球`Material`用于描述被渲染物体表面的外观，告诉引擎该如何渲染。一个材质球内部必须指定一个着色器的实例，他们紧密相连，材质球的很多属性都是寄存在了着色器上。
1. 材质球和着色器是多对一的关系，材质球拥有着色器实例的引用；多个不同的材质球可以复用同一个着色器；
2. 材质球除了包含着色器之外，还拥有诸如贴图列表，渲染优先级等其他定义内容；
3. 创建材质球就必须指定着色器实例，以下内容将介绍如何创建着色器实例。

### 给材质球设定着色器
将编辑好的着色器代码，设定一个唯一易识别的key作为引用键。
```ts
// 给着色器代码设定key
let MyShader = ` 
    fn vert(inputData:VertexAttributes) -> VertexOutput {
       //...
       return ORI_VertexOut ;
    }

    fn frag(){
        //...
    }
    `;
ShaderLib['MyShader'] = MyShader;

```
### 创建着色器实例RenderShader
根据着色器的key，设置vertexCode和fragmentCode，即可创建着色器实例。
你可以为vertexCode和fragmentCode设定成相同的代码段，也可设置成不同。
> 我们推荐将vertex和fragment的代码合并成一段脚本，方便程序识别、管理
```ts
// 设置着色器代码
let renderShader = this.setShader('MyShader','MyShader');

```

### 设定着色器主函数
着色器实例创建好了之后，需要设定顶点着色和片元着色的主函数入口。
```ts
// 设置着色器代码
renderShader.setShaderEntry(`VertMain`,`FragMain`)

```

### 设定着色器定义宏`Define`
使用宏定义可以优化你的着色器代码，让程序能够高效的按照设定的变量，进入到不同的分支路径中执行。
```ts
// 打开tangent相关的代码
renderShader.setDefine("USE_TANGENT",true);

```
> 更多宏定义相关内容将在`着色器变体`中介绍。
