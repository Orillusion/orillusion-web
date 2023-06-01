# 着色器内置变量
在 `Orillusion` 引擎中，为了能够更规范和高效的编写一些复杂的着色器脚本（比如PBR材质着色逻辑），我们对着色器代码进行了拆分和封装。
本篇将会介绍拆分之后的一些常用内置着色器脚本，比如变量、结构体定义、函数实现等给予解释。

## 公共变量
最初始的数据来自于管线中的顶点流 `VertexAttributes`，以及常量寄存器中定义的`Uniform` 数据 - `globalUniform`，以及脚本头部自定义的一些数学常量比如 `PI=3.14` 等：
解析完这些数据后，我们能得到如下内置变量：

### globalUniform
引擎在渲染前准备的数据，通过 `Uniform` 的形式绑定到渲染管线中，相当于只读形式的全局数据。
解析 `globalUniform` 可以得到的内置变量有：
 ```wgsl
//x：引擎当前的frame数据；y：引擎运行的当前时间；z：当前帧与上一帧之间的时间跨度。
var<private> TIME: vec4<f32>;
//x:鼠标当前位置x；y：鼠标当前的位置y。
var<private> MOUSE: vec4<f32>;
//x：引擎所运行的canvas画布的像素尺寸。
var<private> SCREEN: vec4<f32>;
//x：投影近裁剪面距离；y：投影远裁剪面距离；z：1.0 + 1.0 / globalUniform.far。
var<private> ProjectionParams: vec4<f32>;
//投影矩阵
var<private> ORI_MATRIX_P: mat4x4<f32>;
//视图矩阵
var<private> ORI_MATRIX_V: mat4x4<f32>;
//模型矩阵
var<private> ORI_MATRIX_M: mat4x4<f32>;
//ORI_MATRIX_P * ORI_MATRIX_V
var<private> ORI_MATRIX_PV: mat4x4<f32>;
//ORI_MATRIX_PV的逆矩阵
var<private> ORI_MATRIX_PVInv: mat4x4<f32>;
//???
var<private> ORI_MATRIX_World: mat4x4<f32>;
//相机矩阵
var<private> ORI_CAMERAMATRIX: mat4x4<f32>;
//变换normal到世界坐标，使用到的矩阵
var<private> ORI_NORMALMATRIX: mat3x3<f32>;
```
### ORI_VertexOut
在通用的顶点流处理流程 `Common_vert.wgsl` 中，解析顶点数据 `VertexAttributes` 得到的结构体。
```wgsl
//定义顶点数据结构
struct VertexOutput {
    //第一道UV，
    @location(0) varying_UV0: vec2<f32>,
    //第二道UV，一般可用于shadowmap的映射，也可做它用
    @location(1) varying_UV1: vec2<f32>,
    //视图空间下的坐标
    @location(2) varying_ViewPos: vec4<f32>,
    //NDC空间下的坐标
    @location(3) varying_Clip: vec4<f32>,
    //世界坐标
    @location(4) varying_WPos: vec4<f32>,
    //世界空间下的normal方向
    @location(5) varying_WNormal: vec3<f32>,
    //顶点色
    @location(6) varying_Color: vec4<f32>,
    
    #if USE_SHADOWMAPING
        //todo解释
        @location(7) varying_ShadowPos: vec4<f32>,
    #endif

    #if USE_TANGENT
        //世界空间下的切线方向
        @location(8) varying_Tangent: vec4<f32>,
    #endif
    //经过投影变换后的位置
    @builtin(position) member: vec4<f32>
};

var<private> ORI_VertexOut: VertexOutput ;
```
### ORI_VertexVarying
顶点着色器传入到片段着色器，经过权重插值后的输入数据。通过与 `VertexOutput` 的比较分析，不难看出他们是一一对应的。
`face` 属性除外。
```wgsl
 struct FragmentVarying {
    @location(0) fragUV0: vec2<f32>,
    @location(1) fragUV1: vec2<f32>,
    @location(2) viewPosition: vec4<f32>,
    @location(3) fragPosition: vec4<f32>,
    @location(4) vWorldPos: vec4<f32>,
    @location(5) vWorldNormal: vec3<f32>,
    @location(6) vColor: vec4<f32>,

    #if USE_SHADOWMAPING
        @location(7) vShadowPos: vec4<f32>,
    #endif

    #if USE_TANGENT
        @location(8) TANGENT: vec4<f32>,
    #endif
    
    //正面渲染or反面渲染
    @builtin(front_facing) face: bool,
    @builtin(position) fragCoord : vec4<f32>
};
    
var<private> ORI_VertexVarying: FragmentVarying;
```

### ORI_ShadingInput
该变量为PBR材质球量身定制，集合了PBR着色需要用到的各种参数。方便在后续使用的时候获取。
以及着色之后，用户可以追加自定义特效，可以从这个变量里提取自己需要的数据。
```wgsl
struct ShadingInput{
    //基础颜色，一般为默认白色
    BaseColor:vec4<f32>,
    //粗糙度
    Roughness:f32,
    //金属度
    Metallic:f32,
    //高光系数
    Specular:f32,
    //自发光颜色
    EmissiveColor:vec4<f32>,
    //表面颜色
    SurfaceColor:vec4<f32>,
    //法向量
    Normal:vec3<f32>,
    //切向量
    Tangent:vec4<f32>,
    //todo 解释说明
    WorldPositionOffset:vec3<f32>,
    //接受环境光遮蔽系数
    AmbientOcclusion:f32,
    //todo 解释说明
    PixelDepthOffset:f32,
    //透明度
    Opacity:f32,
    //透明遮罩系数
    OpacityMask:f32,
    //反射率
    Refraction:f32,
}
        
var<private> ORI_ShadingInput: ShadingInput;
```

### ORI_FragmentOutput
片元着色的结果，将放入到该变量中，默认情况片元着色的结构就只有颜色数据需要输出。
如果有一些后期特效需要处理的话，需要输出更多的内容到 `GBuffer` 中，方便计算。
通常情况，需要参与后期计算的参数有世界坐标 `worldPos`，法向量 `worldNormal` 和一些材质球信息 `material` (光滑度/粗糙度/是否发光等)，

```wgsl
struct FragmentOutput {
    //颜色
    @location(0) color: vec4<f32>,
    #if USE_WORLDPOS
        //世界坐标
        @location(1) worldPos: vec4<f32>,
    #endif
    #if USEGBUFFER
        //法向量
        @location(2) worldNormal: vec4<f32>,
        //材质球数据
        @location(3) material: vec4<f32>
    #endif
    
    var<private> ORI_FragmentOutput: FragmentOutput;
}
```

### materialUniform
在材质球中定义，与特定材质球关联的 `materialUniform`，该变量携带绘制该材质球所需要的变量。不同的材质球 `materialUniform` 数据结构定义应该各不相同。
接下来以 `LitMaterial` 作为例子，简单介绍 `materialUniform` 内部的一些变量：

> `LitMaterial`中使用到的 `materialUniform` 定义结构体，当前被封装到了`PhysicMaterialUniform_frag`。
 ```wgsl
struct MaterialUniform{
    #if USE_BRDF
        //物理着色，材质球数据描述内容
        #include "PhysicMaterialUniform_frag"
    #endif

    #if USE_ColorLit
    #endif

    #if USE_UnLit
    #endif
}
 
 ```

> 继续在 `PhysicMaterialUniform_frag` 中查看更多的内容：

```wgsl
//PhysicMaterialUniform_frag文件定义的结构体
//定义BRDF模型着色，材质球参数
struct MaterialUniform {
    //第一道UV偏移数据 x:U方向偏移 y:V方向偏移 z:U方向缩放 w:V方向缩放
    transformUV1:vec4<f32>,
    //第二道UV x:U方向偏移 y:V方向偏移 z:U方向缩放 w:V方向缩放
    transformUV2:vec4<f32>,
    //基础颜色(参考其他命名tintColor)
    baseColor: vec4<f32>,
    //发光颜色
    emissiveColor: vec4<f32>,
    //f0反射率
    materialF0: vec4<f32>,
    //接受环境光加成系数
    envIntensity: f32,
    //法向量缩放系数
    normalScale: f32,
    //粗糙度
    roughness: f32,
    //金属度
    metallic: f32,
    //环境光遮蔽强度
    ao: f32,
    //粗糙度最小值
    roughness_min: f32,
    //粗糙度最大值
    roughness_max: f32,
    //金属最小值
    metallic_min: f32,
    //金属最大值
    metallic_max: f32,
    //发光强度
    emissiveIntensity: f32,
    //透明剔除阈值
    alphaCutoff: f32,
    //折射率
    ior: f32,
    //清漆涂层颜色
    clearcoatColor: vec4<f32>,
    //清漆涂层权重
    clearcoatWeight: f32,
        //清漆涂层强度
    clearcoatFactor: f32,
        //清漆涂层粗糙度
    clearcoatRoughnessFactor: f32,
};
```
## 公共文件
相较于普通程序编写函数定义的意义，着色器脚本里同样需要定义各种函数，提供功能复用和方便维护。以下介绍一些常用的函数：

- `LightingFunction_frag` 光照计算需要用到的函数；
- `NormalMap_frag` 封装有各种法线计算相关的函数；
- `IESProfiles_frag` 光源描述文件解析函数；
- `BRDF_frag` BRDF模型着色需要用到的函数；
- `FastMath_shader` 快速开方，快速计算向量长度；


## 总结
随着引擎的版本迭代，内置函数会越来越丰富。你也可以将常用到的函数提取到类库中供复用。

 