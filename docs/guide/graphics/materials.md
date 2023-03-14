# 材质
## 材质总览
引擎通过 [MeshRenderer](/api/classes/MeshRenderer) 组件给物体添加相应的 `材质` 对象，用来模拟其颜色、光照、纹理等属性。目前引擎内置了2种经典材质模型：
| 名称 | 描述 |
| :---: | --- |
| UnLitMaterial | 不计算光照，仅渲染原始颜色与纹理信息 |
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
引擎提供了 [UnLitMaterial](/api/classes/CylinderGeometry) 类以进行 `Unlit` 材质的渲染。

| 属性 | 描述 |
| :---: | :---: |
| baseColor | 基础颜色 |
| baseMap | 基础贴图 |
| envMap | 环境贴图 |
| shadowMap | 阴影贴图 |

<Demo src="/demos/materials/UnLitMaterial.ts"></Demo>

<<< @/public/demos/materials/UnLitMaterial.ts

## PBR 材质
我们提倡使用 [PBR](/api/classes/LitMaterial) 材质进行渲染，`PBR` 全称是`Physicallly-Based Rendering`，是指基于物理渲染的材质，它更符合真实的物理光照模型。

| 属性 | 描述 |
| :---: | :---: |
| baseColor | 材质基础颜色 |
| emissiveColor | 材质发光颜色 |
| emissiveIntensity | 材质发光强度，需要开启 HDRBloomPost 才能显示发光效果 |
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

### UV 变换
模型顶点会存有多组纹理映射坐标，定义了该顶点在纹理中对应的2D坐标，它通常由一个二维变量 `(u,v)` 表示，所以也被称为 `UV坐标`。   
我们可以通过对模型的 `uv` 坐标进行矩阵变换来自定义纹理的映射关系。比如，设定材质的 `uvTransform_1` 属性来对原始 `uv` 进行 `位移（offset）` 和 `缩放（scaling）` 的坐标变换: 
```ts
let mat = new LitMaterial();
// 定义 Vector4, 分别调节 offsetU, offsetV, scalingU, scalingV
mat.uvTransform_1 = new Vector4(0, 0, 1, 1);
```

<Demo :height="300" :code="false" src="/demos/materials/uv.ts"></Demo>
