# 材质
## 材质总览
引擎通过 [MeshRenderer](/api/classes/MeshRenderer) 组件给物体添加相应的 `材质` 对象，用来模拟其颜色、光照、纹理等属性。目前引擎内置了2种经典材质模型：
| 名称 | 描述 |
| :---: | --- |
| UnLitMaterial | 不计算光照和阴影，仅渲染原始颜色与纹理信息 |
| LitMaterial | `PBR` 即基于物理渲染，旨在模拟现实世界光照效果 |

我们推荐使用的 [glTF](/guide/resource/gltf) 格式文件包含了物体材质信息。用户可以通过常用建模软件设计并修改模型文件。引擎解析模型文件后，自动赋予物体相应材质。

## 基础用法
```ts
import {Object3D. MeshRenderer, LitMaterial, SphereGeometry, Color} from '@orillusion/core'

let object = new Object3D();
// 添加 MeshRenderer 组件
let mesh = object.addComponent(MeshRenderer);

// 设置组件 material
mesh.material = new UnLitMaterial();
mesh.material.baseColor = new Color(1, 1, 1, 1);

// 切换 Material
mesh.material = new LitMaterial();
```

## Unlit 材质
引擎提供了 [UnLitMaterial](/api/classes/CylinderGeometry) 材质，紧渲染物理基础颜色，不计算光照和阴影。

| 属性 | 描述 |
| :---: | :---: |
| baseColor | 基础颜色 |
| baseMap | 基础贴图 |

<Demo src="/demos/materials/UnLitMaterial.ts"></Demo>

<<< @/public/demos/materials/UnLitMaterial.ts

## PBR 材质
我们提倡使用 [LitMaterial](/api/classes/LitMaterial) 即 `PBR` 材质进行渲染。`PBR` 是 `Physically-Based Rendering` 的缩写，是指基于物理渲染的材质，它更符合真实的物理光照模型。

| 属性 | 描述 |
| :---: | :---: |
| baseColor | 材质基础颜色 |
| emissiveColor | 材质发光颜色 |
| emissiveIntensity | 材质发光强度，需要开启 BloomPost 才能显示发光效果 |
| roughness | 材质粗糙程度 |
| metallic | 材料金属度 |
| normalScale | 法线贴图对材质的影响程度 |
| clearCoat | 透明涂层强度 |
| envMap | 环境贴图 |
| envIntensity | 环境光强度 |
| materialF0 | 材质反射率 |
| ao | Ambient Occlussion, 处理环境光对物体遮挡的效果 |
| aoMap | 环境光遮挡贴图 |
| baseMap | 基础贴图 |
| normalMap | 法线贴图 |
| maskMap | 遮罩贴图 |
| emissiveMap | 材质发光贴图 |
| brdfLUT | BRDF查找表 |

<Demo src="/demos/materials/PBR.ts"></Demo>

<<< @/public/demos/materials/PBR.ts


## 材质设置
### 颜色
```ts
let mat = new UnLitMaterial();
mat.baseColor = new Color(1, 0, 0, 1);
```

<Demo :height="300" :code="false" src="/demos/materials/color.ts"></Demo>

### 透明度 & 混合模式
```ts
let mat = new UnLitMaterial();
mat.transparent = true;
mat.blendMode = BlendMode.ALPHA;
mat.baseColor = new Color(1, 0, 0, 0.5);
```

<Demo :height="300" :code="false" src="/demos/materials/blendMode.ts"></Demo>

混合模式详情请参考 [BlendMode](/api/enums/BlendMode.html)

### 切换剔除模式
为了节省 `GPU` 性能，`Orillusion` 默认使用 `back` 剔除模式，即只渲染物体正面材质，我们可以设置材质 [cullMode](/api/classes/LitMaterial#cullMode) 属性来切换显示模式
```ts
let mat = new LitMaterial();
mat.cullMode = GPUCullMode.none; // 不剔除，双面显示
mat.cullMode = GPUCullMode.front; // 剔除正面，显示后面
mat.cullMode = GPUCullMode.back; // 剔除后面，显示正面
```

<Demo :height="300" :code="false" src="/demos/materials/cullMode.ts"></Demo>

### 深度状态
材质可以控制自身参与深度缓冲（Depth Buffer）的方式，常用于处理透明物体排序、避免 Z-fighting、实现"始终可见"的叠加层等。

```ts
let mat = new LitMaterial();

// 是否写入深度缓冲。透明物体通常关闭，避免互相遮挡导致排序错误
mat.depthWriteEnabled = false;

// 深度比较函数（GPUCompareFunction）。默认 'less-equal'
// 例如设为 'always' 让物体始终通过深度测试（叠加层 / 描边）
mat.depthCompare = 'always' as GPUCompareFunction;
```

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `depthWriteEnabled` | `boolean` | 是否把本材质的片元深度写入深度缓冲 |
| `depthCompare` | `GPUCompareFunction` | 深度比较函数，如 `'less'`、`'less-equal'`、`'greater'`、`'always'` 等 |

### 模版缓冲（Stencil）
::: tip 版本说明
模版缓冲 API 在 `@orillusion/core` **0.9.0** 引入，可用于实现轮廓描边、镜面遮罩、投影贴花等需要"标记区域再二次绘制"的效果。
:::

模版测试通过一个额外的 8 位缓冲区，对每个片元做"标记—比较—决定是否绘制"的操作。`Material` 暴露了完整的模版状态：

```ts
let mat = new LitMaterial();

// 参考值与读写掩码
mat.stencilRef = 1;          // 比较 / 写入时使用的参考值
mat.stencilReadMask = 0xFF;  // 比较时与缓冲值做与运算的掩码
mat.stencilWriteMask = 0xFF; // 写入时允许修改的位

// 正面 / 背面的模版操作（GPUStencilFaceState）
mat.stencilFront = {
    compare: 'always',     // 比较函数：总是通过
    failOp: 'keep',        // 模版测试失败时
    depthFailOp: 'keep',   // 模版通过但深度测试失败时
    passOp: 'replace',     // 全部通过时：用 stencilRef 替换缓冲值（写入标记）
};
mat.stencilBack = {
    compare: 'always',
    failOp: 'keep',
    depthFailOp: 'keep',
    passOp: 'keep',
};
```

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `stencilFront` | `GPUStencilFaceState` | 正面三角形的模版操作（比较函数 + 三种操作） |
| `stencilBack` | `GPUStencilFaceState` | 背面三角形的模版操作 |
| `stencilReadMask` | `number` | 比较阶段的读掩码，默认 `0xFF` |
| `stencilWriteMask` | `number` | 写入阶段的写掩码，默认 `0xFF` |
| `stencilRef` | `number` | 模版参考值，默认 `0` |

典型的两遍法（先标记、再用标记限制绘制区域）：第一遍材质用 `passOp: 'replace'` 把覆盖区域写成 `stencilRef`；第二遍材质用 `compare: 'equal'` 且 `passOp: 'keep'`，只在被标记的区域绘制。

> 引擎内置的[投影贴花](/api/classes/DecalComponent)等效果即基于模版缓冲实现，一般无需手动配置。

### UV 变换
模型顶点会存有多组纹理映射坐标，定义了该顶点在纹理中对应的2D坐标，它通常由一个二维变量 `(u,v)` 表示，所以也被称为 `UV坐标`。   
我们可以通过对模型的 `uv` 坐标进行矩阵变换来自定义纹理的映射关系。比如，设置材质shader 中的 `transformUV1` 变量来对原始 `uv` 进行 `位移（offset）` 和 `缩放（scaling）` 的坐标变换: 
```ts
let mat = new LitMaterial();
// 获取 uv - Vector4(offsetU, offsetV, scalingU, scalingV)
let uv: Vector4 = mat.getUniformV4(`transformUV1`);
// 设置 uv
uv.set(1, 1, 2, 2);
// 更新 uv
mat.setUniformVector4(`transformUV1`, uv);
```

<Demo :height="300" :code="false" src="/demos/materials/uv.ts"></Demo>


:::tip
从 `v0.8` 开始，[LitMaterial](/api/classes/LitMaterial) 使用 `xxxMapOffsetSize` 获取和设置各个贴图的 `uv` 变换：
```ts
let mat = new LitMaterial();
let baseUV = mat.getUniformV4('baseMapOffsetSize');
let normalUV = mat.getUniformV4('normalMapOffsetSize');
let emissiveUV = mat.getUniformV4('emissiveMapOffsetSize');
let roughnessUV = mat.getUniformV4('roughnessMapOffsetSize');
let metallicUV = mat.getUniformV4('metallicMapOffsetSize');
let aoUV = mat.getUniformV4('aoMapOffsetSize');
```
:::

