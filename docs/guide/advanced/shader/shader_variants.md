# 着色器变体（Variants）
对于开发者而言，同样一段着色器代码可能会面临使用两种或更多的使用环境，他们仅仅有几个变量或者设定不同。以下情况会导致生成着色器变体：
>1. 设定了不同的宏定义`setDefine()`；
>2. 设定了不同的常量`setConst()`； 

着色器关键字是造成着色器变体生成的原因之一，大多数情况，我们需要兼容实现不同的着色效果，会人为的生成着色器变体；然而不经考虑的使用着色器关键字会导致着色器变体迅速的增加。


###应用举例
同样的一段无光着色脚本，被用于两种不同格式的模型素材：
>1. 模型含有tangent数据；
>2. 模型不含有tangent数据。

具有tangent数据的模型，其材质球需要设定着色器宏`setDefine("USE_TANGENT", true)`;

```ts
// 
let renderShader = this.setShader('MyShader','MyShader');
//设置着色器代码
let useTangent = true;//or false
renderShader.setDefine(`USE_TANGENT`,useTangent);
```

## 总结
同样一段着色器代码，会因为宏定义不同而生成不同的变体。从而可以生成具有不同功能的RenderShader被用于不同的材质球中。