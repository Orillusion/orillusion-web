# Class: CollisionShapeUtil

CollisionShapeUtil
提供多种碰撞体构建功能

### Constructors

- [constructor](CollisionShapeUtil.md#constructor)

### Methods

- [createStaticPlaneShape](CollisionShapeUtil.md#createstaticplaneshape)
- [createBoxShape](CollisionShapeUtil.md#createboxshape)
- [createSphereShape](CollisionShapeUtil.md#createsphereshape)
- [createCapsuleShape](CollisionShapeUtil.md#createcapsuleshape)
- [createCylinderShape](CollisionShapeUtil.md#createcylindershape)
- [createConeShape](CollisionShapeUtil.md#createconeshape)
- [createCompoundShape](CollisionShapeUtil.md#createcompoundshape)
- [createCompoundShapeFromObject](CollisionShapeUtil.md#createcompoundshapefromobject)
- [createShapeFromObject](CollisionShapeUtil.md#createshapefromobject)
- [createHeightfieldTerrainShape](CollisionShapeUtil.md#createheightfieldterrainshape)
- [createConvexHullShape](CollisionShapeUtil.md#createconvexhullshape)
- [createConvexTriangleMeshShape](CollisionShapeUtil.md#createconvextrianglemeshshape)
- [createBvhTriangleMeshShape](CollisionShapeUtil.md#createbvhtrianglemeshshape)
- [createGImpactMeshShape](CollisionShapeUtil.md#creategimpactmeshshape)
- [buildTriangleMesh](CollisionShapeUtil.md#buildtrianglemesh)
- [getAllMeshVerticesAndIndices](CollisionShapeUtil.md#getallmeshverticesandindices)

## Constructors

### constructor

• **new CollisionShapeUtil**(): [`CollisionShapeUtil`](CollisionShapeUtil.md)

#### Returns

[`CollisionShapeUtil`](CollisionShapeUtil.md)

## Methods

### createStaticPlaneShape

▸ **createStaticPlaneShape**(`planeNormal?`, `planeConstant?`): [`btStaticPlaneShape`](Ammo.btStaticPlaneShape.md)

创建静态平面碰撞形状，适用于静态无限平面的碰撞，如地面或墙壁。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `planeNormal` | `Vector3` | `Vector3.UP` | 平面法向量，默认值为 Vector3.UP。 |
| `planeConstant` | `number` | `0` | 平面常数，表示平面距离原点的距离，默认值为 0。 |

#### Returns

[`btStaticPlaneShape`](Ammo.btStaticPlaneShape.md)

Ammo.btStaticPlaneShape - 静态平面碰撞形状实例。

#### Defined in

[packages/physics/utils/CollisionShapeUtil.ts:22](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L22)

___

### createBoxShape

▸ **createBoxShape**(`object3D`, `size?`): [`btBoxShape`](Ammo.btBoxShape.md)

创建盒型碰撞形状，适用于具有明确尺寸的盒形物体。
如果未指定尺寸，则使用三维对象的包围盒大小。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object3D` | `Object3D` | 用于创建碰撞体的三维对象。 |
| `size?` | `Vector3` | 可选参数，盒型碰撞体的尺寸。 |

#### Returns

[`btBoxShape`](Ammo.btBoxShape.md)

Ammo.btBoxShape - 盒型碰撞形状实例。

#### Defined in

[packages/physics/utils/CollisionShapeUtil.ts:36](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L36)

___

### createSphereShape

▸ **createSphereShape**(`object3D`, `radius?`): [`btSphereShape`](Ammo.btSphereShape.md)

创建球型碰撞形状，适用于球形物体。
如果未指定半径，则使用三维对象的包围盒半径 `X`。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object3D` | `Object3D` | 用于创建碰撞体的三维对象。 |
| `radius?` | `number` | 可选参数，球型碰撞体的半径。 |

#### Returns

[`btSphereShape`](Ammo.btSphereShape.md)

Ammo.btSphereShape - 球型碰撞形状实例。

#### Defined in

[packages/physics/utils/CollisionShapeUtil.ts:51](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L51)

___

### createCapsuleShape

▸ **createCapsuleShape**(`object3D`, `radius?`, `height?`): [`btCapsuleShape`](Ammo.btCapsuleShape.md)

创建胶囊型碰撞形状，适用于胶囊形物体。
如果未指定尺寸，则使用三维对象的包围盒半径 `X` 和高度 `Y`。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object3D` | `Object3D` | 用于创建碰撞体的三维对象。 |
| `radius?` | `number` | 可选参数，胶囊的半径。 |
| `height?` | `number` | 可选参数，胶囊中间的圆柱部分的高度。 |

#### Returns

[`btCapsuleShape`](Ammo.btCapsuleShape.md)

Ammo.btCapsuleShape - 胶囊型碰撞形状实例。

#### Defined in

[packages/physics/utils/CollisionShapeUtil.ts:66](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L66)

___

### createCylinderShape

▸ **createCylinderShape**(`object3D`, `radius?`, `height?`): [`btCylinderShape`](Ammo.btCylinderShape.md)

创建圆柱型碰撞形状，适用于圆柱形物体。
如果未指定尺寸，则使用三维对象的包围盒半径 `X` 和高度 `Y`。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object3D` | `Object3D` | 用于创建碰撞体的三维对象。 |
| `radius?` | `number` | 可选参数，圆柱的半径。 |
| `height?` | `number` | 可选参数，圆柱的完整高度。 |

#### Returns

[`btCylinderShape`](Ammo.btCylinderShape.md)

Ammo.btCylinderShape - 圆柱型碰撞形状实例。

#### Defined in

[packages/physics/utils/CollisionShapeUtil.ts:85](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L85)

___

### createConeShape

▸ **createConeShape**(`object3D`, `radius?`, `height?`): [`btConeShape`](Ammo.btConeShape.md)

创建圆锥形碰撞形状，适用于圆锥形物体。
如果未指定尺寸，则使用三维对象的包围盒半径 `X` 和高度 `Y`。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object3D` | `Object3D` | 用于创建碰撞体的三维对象。 |
| `radius?` | `number` | 可选参数，圆锥的半径。 |
| `height?` | `number` | 可选参数，圆锥的高度。 |

#### Returns

[`btConeShape`](Ammo.btConeShape.md)

Ammo.btConeShape - 圆锥形碰撞形状实例。

#### Defined in

[packages/physics/utils/CollisionShapeUtil.ts:105](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L105)

___

### createCompoundShape

▸ **createCompoundShape**(`childShapes`): [`btCompoundShape`](Ammo.btCompoundShape.md)

创建复合形状，将多个子形状组合成一个形状。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `childShapes` | [`ChildShape`](../interfaces/ChildShape.md)[] | 包含子形状实例与位置、旋转属性的数组。 |

#### Returns

[`btCompoundShape`](Ammo.btCompoundShape.md)

Ammo.btCompoundShape - 复合形状实例。

#### Defined in

[packages/physics/utils/CollisionShapeUtil.ts:121](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L121)

___

### createCompoundShapeFromObject

▸ **createCompoundShapeFromObject**(`object3D`, `includeParent?`): [`btCompoundShape`](Ammo.btCompoundShape.md)

根据 Object3D 对象及其子对象创建复合碰撞形状。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `object3D` | `Object3D` | `undefined` | 三维对象，包含多个子对象。 |
| `includeParent` | `boolean` | `true` | 是否包含父对象的几何体，默认值为 `true`。 |

#### Returns

[`btCompoundShape`](Ammo.btCompoundShape.md)

复合碰撞形状。

#### Defined in

[packages/physics/utils/CollisionShapeUtil.ts:142](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L142)

___

### createShapeFromObject

▸ **createShapeFromObject**(`object3D`): [`btCollisionShape`](Ammo.btCollisionShape.md)

根据 Object3D 对象的几何体类型创建相应的碰撞形状。

仅支持Box、Sphere、Plane、Cylinder类型的几何体。对于不匹配的几何体类型，返回 btConvexHullShape 凸包形状。

#### Parameters

| Name | Type |
| :------ | :------ |
| `object3D` | `Object3D` |

#### Returns

[`btCollisionShape`](Ammo.btCollisionShape.md)

Ammo.btCollisionShape

#### Defined in

[packages/physics/utils/CollisionShapeUtil.ts:188](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L188)

___

### createHeightfieldTerrainShape

▸ **createHeightfieldTerrainShape**(`object3D`, `heightScale?`, `upAxis?`, `hdt?`, `flipQuadEdges?`): [`btHeightfieldTerrainShape`](Ammo.btHeightfieldTerrainShape.md)

创建高度场形状，基于平面顶点数据模拟地形。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `object3D` | `Object3D` | `undefined` | 用于创建碰撞体的三维对象。 |
| `heightScale` | `number` | `1` | 高度缩放比例，默认值为 `1`。 |
| `upAxis` | `number` | `1` | 高度场的上轴，默认值为 `1`。 |
| `hdt` | [`PHY_ScalarType`](../types/Ammo.PHY_ScalarType.md) | `'PHY_FLOAT'` | 高度场的数据类型，默认值为 `Ammo.PHY_FLOAT`。 |
| `flipQuadEdges` | `boolean` | `false` | 是否翻转四边形的边，默认值为 `false`。 |

#### Returns

[`btHeightfieldTerrainShape`](Ammo.btHeightfieldTerrainShape.md)

Ammo.btHeightfieldTerrainShape - 高度场形状实例。

#### Defined in

[packages/physics/utils/CollisionShapeUtil.ts:246](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L246)

___

### createConvexHullShape

▸ **createConvexHullShape**(`object3D`, `modelVertices?`): [`btConvexHullShape`](Ammo.btConvexHullShape.md)

创建凸包形状，适用于具有凹陷填充的模型。
此形状适用于动态物体并提供快速的碰撞检测。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object3D` | `Object3D` | 用于创建碰撞体的三维对象。 |
| `modelVertices?` | `Float32Array` | 可选参数，提供碰撞体所需的顶点数据，默认为三维对象的顶点数据。 |

#### Returns

[`btConvexHullShape`](Ammo.btConvexHullShape.md)

Ammo.btConvexHullShape - 凸包形状实例。

#### Defined in

[packages/physics/utils/CollisionShapeUtil.ts:299](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L299)

___

### createConvexTriangleMeshShape

▸ **createConvexTriangleMeshShape**(`object3D`, `modelVertices?`, `modelIndices?`): [`btBvhTriangleMeshShape`](Ammo.btBvhTriangleMeshShape.md)

创建凸包网格形状，适用于需要复杂几何表示的动态物体。
此形状不要求额外的凸包生成步骤，适用于凸的三角形网格。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object3D` | `Object3D` | 用于创建碰撞体的三维对象。 |
| `modelVertices?` | `Float32Array` | 可选参数，提供碰撞体所需的顶点数据。 |
| `modelIndices?` | `Uint16Array` | 可选参数，提供碰撞体所需的索引数据。 |

#### Returns

[`btBvhTriangleMeshShape`](Ammo.btBvhTriangleMeshShape.md)

Ammo.btConvexTriangleMeshShape - 凸包网格形状实例。

#### Defined in

[packages/physics/utils/CollisionShapeUtil.ts:322](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L322)

___

### createBvhTriangleMeshShape

▸ **createBvhTriangleMeshShape**(`object3D`, `modelVertices?`, `modelIndices?`): [`btBvhTriangleMeshShape`](Ammo.btBvhTriangleMeshShape.md)

创建边界体积层次（BVH）网格形状，适用于需要复杂几何表示的静态物体。
此形状适合大规模静态网格，但对动态对象不适用。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object3D` | `Object3D` | 用于创建碰撞体的三维对象。 |
| `modelVertices?` | `Float32Array` | 可选参数，提供碰撞体所需的顶点数据。 |
| `modelIndices?` | `Uint16Array` | 可选参数，提供碰撞体所需的索引数据。 |

#### Returns

[`btBvhTriangleMeshShape`](Ammo.btBvhTriangleMeshShape.md)

Ammo.btBvhTriangleMeshShape - BVH 网格形状实例。

#### Defined in

[packages/physics/utils/CollisionShapeUtil.ts:349](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L349)

___

### createGImpactMeshShape

▸ **createGImpactMeshShape**(`object3D`, `modelVertices?`, `modelIndices?`): [`btGImpactMeshShape`](Ammo.btGImpactMeshShape.md)

创建 GImpact 网格形状，适用于需要复杂几何表示的动态物体。
基于 GIMPACT 算法，可以用于复杂的三角网格碰撞检测，包括动态物体的交互，此形状性能消耗较高，但提供更精确的碰撞检测。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object3D` | `Object3D` | 用于创建碰撞体的三维对象。 |
| `modelVertices?` | `Float32Array` | 可选参数，提供碰撞体所需的顶点数据。 |
| `modelIndices?` | `Uint16Array` | 可选参数，提供碰撞体所需的索引数据。 |

#### Returns

[`btGImpactMeshShape`](Ammo.btGImpactMeshShape.md)

Ammo.btGImpactMeshShape - GImpact 网格形状实例。

#### Defined in

[packages/physics/utils/CollisionShapeUtil.ts:376](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L376)

___

### buildTriangleMesh

▸ **buildTriangleMesh**(`vertices`, `indices`): [`btTriangleMesh`](Ammo.btTriangleMesh.md)

构建 btTriangleMesh 对象，用于创建网格形状。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vertices` | `Float32Array` | 顶点数据，按 xyz 顺序排列。 |
| `indices` | `Uint16Array` | 索引数据，定义三角形的顶点索引。 |

#### Returns

[`btTriangleMesh`](Ammo.btTriangleMesh.md)

Ammo.btTriangleMesh - 构建的三角形网格。

#### Defined in

[packages/physics/utils/CollisionShapeUtil.ts:402](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L402)

___

### getAllMeshVerticesAndIndices

▸ **getAllMeshVerticesAndIndices**(`object3D`, `isTransformChildren?`): `Object`

获取3D对象所有网格的顶点与索引。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `object3D` | `Object3D` | `undefined` | 三维对象。 |
| `isTransformChildren` | `boolean` | `true` | 是否将子对象的顶点转换到父对象的局部坐标系。默认值为 `true`。 |

#### Returns

`Object`

顶点数据和索引数据。

| Name | Type |
| :------ | :------ |
| `vertices` | `Float32Array` |
| `indices` | `Uint16Array` |

#### Defined in

[packages/physics/utils/CollisionShapeUtil.ts:426](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L426)
