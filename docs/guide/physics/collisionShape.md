# 碰撞体
碰撞体形状 `Collision Shape` 定义了刚体响应碰撞的实际物理形状，物理系统可以通过 `Shape` 判定两个物体是否相交，从而产生碰撞效果。

:::tip
从 `@orillusion/physics@0.3` 开始，我们推荐直接使用 `Ammo` 原生 `Shape` 管理碰撞体
:::

## 碰撞体工具
为了简化碰撞体的创建过程，[CollisionShapeUtil](/physics/classes/CollisionShapeUtil) 工具类提供了便捷的物理形状构建方法，涵盖了多种常见的碰撞体形状。该工具类将复杂的物理形状生成过程封装为一系列易于调用的方法，使开发者能够快速高效地为模型对象生成适配的碰撞体。

### 内置形状

目前 [CollisionShapeUtil](/physics/classes/CollisionShapeUtil) 提供的物理形状创建方法如下表所示：

| 函数名称 | 返回类型 | 描述 |
| --- | --- | --- |
| createStaticPlaneShape | `Ammo.btStaticPlaneShape` | 创建一个静态平面碰撞形状，适用于无限大且静止的平面，如地面或墙壁。 |
| createBoxShape | `Ammo.btBoxShape` | 盒型碰撞形状。 |
| createSphereShape | `Ammo.btSphereShape` | 球型碰撞形状。 |
| createCapsuleShape | `Ammo.btCapsuleShape` | 胶囊型碰撞形状。 |
| createCylinderShape | `Ammo.btCylinderShape` | 圆柱型碰撞形状。 |
| createConeShape | `Ammo.btConeShape` | 圆锥形碰撞形状。 |
| createCompoundShape | `Ammo.btCompoundShape` | 复合形状，将多个子形状组合成一个复杂的碰撞体。 |
| createHeightfieldTerrainShape | `Ammo.btHeightfieldTerrainShape` | 高度场形状，适用于地形的碰撞检测。 |
| createConvexHullShape | `Ammo.btConvexHullShape` | 凸包形状，适用于动态物体的快速碰撞检测。 |
| createConvexTriangleMeshShape | `Ammo.btConvexTriangleMeshShape` | 凸包网格形状，适用于需要复杂几何表示的动态物体。 |
| createBvhTriangleMeshShape | `Ammo.btBvhTriangleMeshShape` | 边界体积层次 `BVH` 网格形状，适用于需要复杂几何表示的静态物体。 |
| createGImpactMeshShape | `Ammo.btGImpactMeshShape` | `GImpact` 网格形状，适用于复杂的三角网格碰撞检测，特别是动态物体。 |
| createShapeFromObject | `Ammo.btCollisionShape` | 创建一个匹配 `Object3D` 几何体类型的碰撞形状。 |

### 复杂结构支持
`CollisionShapeUtil` 提供了两个支持处理嵌套对象的 `API`。这些 `API` 可以自动生成适合的碰撞形状或提取几何数据，适用于由引擎创建的复杂结构，无需手动为每个子对象单独配置。

| 函数名称 | 返回类型 | 描述 |
| --- | --- | --- |
| createCompoundShapeFromObject | `Ammo.btCompoundShape` | 根据传入的 `Object3D` 及其子对象的几何体类型，自动创建一个复合碰撞体。 |
| getAllMeshVerticesAndIndices | `{ vertices:Float32Array; indices: Uint16Array; }` | 返回 `Object3D` 及其子对象的所有顶点和索引数据，经过世界变换矩阵转换后，可用于创建高精度的网格碰撞体。 |

## 基本使用

创建碰撞体的过程已被简化，在大多数情况下，只需传入 `Object3D`，即可生成碰撞体。以下是使用 `CollisionShapeUtil` 创建基础碰撞形状的示例代码：

```ts
import { Object3D, MeshRenderer, CylinderGeometry, LitMaterial } from '@orillusion/core';
import { CollisionShapeUtil } from '@orillusion/physics';

// 创建一个圆锥体
const coneObject = new Object3D();
let mr = coneObject.addComponent(MeshRenderer);
mr.geometry = new CylinderGeometry(0.01, 1, 5);
mr.material = new LitMaterial();

// 对于简单类型的几何体，如盒型、球型、圆锥、圆柱可以使用通用的方法创建碰撞体
let coneShape1 = CollisionShapeUtil.createShapeFromObject(coneObject);
// 或者通过计算局部包围盒创建圆锥形状
let coneShape2 = CollisionShapeUtil.createConeShape(coneObject);
// 或者指定形状尺寸
let coneShape3 = CollisionShapeUtil.createConeShape(null, 1, 5);
```

同时，针对复杂类型的碰撞形状，构建流程也得到了简化。为了满足自定义需求，开发者可以传入 `vertices` 和 `indices` 以生成自定义的碰撞形状：

```ts
const object = await Engine3D.res.loadGltf('model.glb');

// 创建一个BVH网格形状，使用模型自身的顶点和索引
let bvhMeshShape = CollisionShapeUtil.createBvhTriangleMeshShape(object);

// 或使用传入的顶点和索引
const response = await fetch('data.json'); // 加载提前准备好的顶点和索引数据
const data = await response.json();
const vertices = new Float32Array(data.vertices);
const indices = new Uint16Array(data.indices);
let bvhMeshShape = CollisionShapeUtil.createBvhTriangleMeshShape(object, vertices, indices);
```

此外，基于 `TerrainGeometry` 或 `PlaneGeometry`，可以创建适用于模拟地形的高度场碰撞形状：

```ts
// Load textures and create terrain geometry
let heightTexture = await Engine3D.res.loadTexture('height.png');
let terrainGeometry = new TerrainGeometry(100, 100, 60, 60);
terrainGeometry.setHeight(heightTexture as BitmapTexture2D, 50);

const terrain = new Object3D();
let mr = terrain.addComponent(MeshRenderer);
mr.geometry = terrainGeometry;
mr.material = new LitMaterial();

// 创建地形碰撞体
let terrainShape = CollisionShapeUtil.createHeightfieldTerrainShape(terrain);
```

通过上述操作，我们可以创建多种碰撞体以适应不同的物理需求。然而，为了实现全面的物理模拟，单独的碰撞体是不够的。要获得真实的物理效果，还需要与 [刚体](/guide/physics/Rigidbody.html) 结合使用，从而实现完整的物理交互和模拟。


## 各类形状示例

不同的碰撞体形状适用于各类物理场景。以下示例展示了如何使用 `CollisionShapeUtil` 为多种几何形状生成对应的碰撞体，并结合 [刚体](/guide/physics/Rigidbody.html) 在物理系统中应用这些形状。

<Demo src="/demos/physics/shapes.ts"></Demo>

<<< @/public/demos/physics/shapes.ts