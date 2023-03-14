# Class: SphereGeometry

一个用于生成球体的类

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`SphereGeometry`**


### Properties

- [uuid](SphereGeometry.md#uuid)
- [name](SphereGeometry.md#name)
- [onChange](SphereGeometry.md#onchange)
- [subGeometries](SphereGeometry.md#subgeometries)
- [geometrySource](SphereGeometry.md#geometrysource)
- [attributeArrays](SphereGeometry.md#attributearrays)
- [morphTargetsRelative](SphereGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](SphereGeometry.md#morphtargetdictionary)
- [bounds](SphereGeometry.md#bounds)
- [shape\_vertices](SphereGeometry.md#shape_vertices)
- [shape\_indices](SphereGeometry.md#shape_indices)
- [radius](SphereGeometry.md#radius)
- [widthSegments](SphereGeometry.md#widthsegments)
- [heightSegments](SphereGeometry.md#heightsegments)
- [phiStart](SphereGeometry.md#phistart)
- [phiLength](SphereGeometry.md#philength)
- [thetaStart](SphereGeometry.md#thetastart)
- [thetaLength](SphereGeometry.md#thetalength)

### Methods

- [setGeometryBounds](SphereGeometry.md#setgeometrybounds)
- [addSubGeometry](SphereGeometry.md#addsubgeometry)
- [setAttributes](SphereGeometry.md#setattributes)
- [hasAttribute](SphereGeometry.md#hasattribute)
- [getAttribute](SphereGeometry.md#getattribute)
- [generate](SphereGeometry.md#generate)
- [genWireframe](SphereGeometry.md#genwireframe)
- [isPrimitive](SphereGeometry.md#isprimitive)
- [serialization](SphereGeometry.md#serialization)

### Accessors

- [vertexBuffer](SphereGeometry.md#vertexbuffer)
- [indexBuffer](SphereGeometry.md#indexbuffer)

### Constructors

- [constructor](SphereGeometry.md#constructor)

## Properties

### uuid

• **uuid**: `string` = `''`

唯一标识符

#### Inherited from

[GeometryBase](GeometryBase.md).[uuid](GeometryBase.md#uuid)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L37)

___

### name

• **name**: `string`

名称

#### Inherited from

[GeometryBase](GeometryBase.md).[name](GeometryBase.md#name)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L41)

___

### onChange

• **onChange**: `boolean` = `true`

是否正在变化

#### Inherited from

[GeometryBase](GeometryBase.md).[onChange](GeometryBase.md#onchange)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L45)

___

### subGeometries

• **subGeometries**: [`SubGeometry`](SubGeometry.md)[] = `[]`

子几何体集合

#### Inherited from

[GeometryBase](GeometryBase.md).[subGeometries](GeometryBase.md#subgeometries)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L49)

___

### geometrySource

• **geometrySource**: [`SerializeGeometrySource`](SerializeGeometrySource.md)

#### Inherited from

[GeometryBase](GeometryBase.md).[geometrySource](GeometryBase.md#geometrysource)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L52)

___

### attributeArrays

• **attributeArrays**: `AttributeInfos`

参数数组

#### Inherited from

[GeometryBase](GeometryBase.md).[attributeArrays](GeometryBase.md#attributearrays)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L57)

___

### morphTargetsRelative

• **morphTargetsRelative**: `boolean`

morph动画类型

#### Inherited from

[GeometryBase](GeometryBase.md).[morphTargetsRelative](GeometryBase.md#morphtargetsrelative)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L62)

___

### morphTargetDictionary

• **morphTargetDictionary**: `Object`

morph动画key列表

#### Type declaration

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `key` | `number` |

#### Inherited from

[GeometryBase](GeometryBase.md).[morphTargetDictionary](GeometryBase.md#morphtargetdictionary)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L66)

___

### bounds

• **bounds**: `BoundingBox`

包围盒

#### Inherited from

[GeometryBase](GeometryBase.md).[bounds](GeometryBase.md#bounds)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L70)

___

### shape\_vertices

• **shape\_vertices**: `any`[] = `[]`

#### Defined in

[src/engine/shape/SphereGeometry.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/SphereGeometry.ts#L12)

___

### shape\_indices

• **shape\_indices**: `any`[] = `[]`

#### Defined in

[src/engine/shape/SphereGeometry.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/SphereGeometry.ts#L13)

___

### radius

• **radius**: `number`

球体半径

#### Defined in

[src/engine/shape/SphereGeometry.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/SphereGeometry.ts#L18)

___

### widthSegments

• **widthSegments**: `number`

定义组成球体的水平段数

#### Defined in

[src/engine/shape/SphereGeometry.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/SphereGeometry.ts#L22)

___

### heightSegments

• **heightSegments**: `number`

定义组成球体的垂直段数

#### Defined in

[src/engine/shape/SphereGeometry.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/SphereGeometry.ts#L26)

___

### phiStart

• **phiStart**: `number`

球体赤道线的起始点弧度

#### Defined in

[src/engine/shape/SphereGeometry.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/SphereGeometry.ts#L30)

___

### phiLength

• **phiLength**: `number`

球体赤道线的弧长

#### Defined in

[src/engine/shape/SphereGeometry.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/SphereGeometry.ts#L34)

___

### thetaStart

• **thetaStart**: `number`

球体经线起始点弧度

#### Defined in

[src/engine/shape/SphereGeometry.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/SphereGeometry.ts#L38)

___

### thetaLength

• **thetaLength**: `number`

球体经线弧长

#### Defined in

[src/engine/shape/SphereGeometry.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/SphereGeometry.ts#L42)

## Methods

### setGeometryBounds

▸ **setGeometryBounds**(`min`, `max`): `void`

根据顶点坐标写入bounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | [`Vector3`](Vector3.md) |
| `max` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

[GeometryBase](GeometryBase.md).[setGeometryBounds](GeometryBase.md#setgeometrybounds)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L93)

___

### addSubGeometry

▸ **addSubGeometry**(`...subGeometry`): `void`

添加子几何体

#### Parameters

| Name | Type |
| :------ | :------ |
| `...subGeometry` | [`SubGeometry`](SubGeometry.md)[] |

#### Returns

`void`

#### Inherited from

[GeometryBase](GeometryBase.md).[addSubGeometry](GeometryBase.md#addsubgeometry)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L133)

___

### setAttributes

▸ **setAttributes**(`modelName`, `attribArrays`): `void`

添加参数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modelName` | `string` | 模型名称 |
| `attribArrays` | `AttributeInfos` | 参数数组 |

#### Returns

`void`

#### Inherited from

[GeometryBase](GeometryBase.md).[setAttributes](GeometryBase.md#setattributes)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L144)

___

### hasAttribute

▸ **hasAttribute**(`name`): `boolean`

是否存在某个参数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 参数名称 |

#### Returns

`boolean`

返回一个布尔值代表是否存在

#### Inherited from

[GeometryBase](GeometryBase.md).[hasAttribute](GeometryBase.md#hasattribute)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:154](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L154)

___

### getAttribute

▸ **getAttribute**(`name`): `AttributeInfo`

获取指定参数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 参数名称 |

#### Returns

`AttributeInfo`

返回参数

#### Inherited from

[GeometryBase](GeometryBase.md).[getAttribute](GeometryBase.md#getattribute)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:164](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L164)

___

### generate

▸ **generate**(`shaderReflection`): `void`

几何体生成

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shaderReflection` | `ShaderReflection` | ShaderReflection |

#### Returns

`void`

#### Inherited from

[GeometryBase](GeometryBase.md).[generate](GeometryBase.md#generate)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:173](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L173)

___

### genWireframe

▸ **genWireframe**(): [`Vector3`](Vector3.md)[]

#### Returns

[`Vector3`](Vector3.md)[]

#### Inherited from

[GeometryBase](GeometryBase.md).[genWireframe](GeometryBase.md#genwireframe)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:188](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L188)

___

### isPrimitive

▸ **isPrimitive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[GeometryBase](GeometryBase.md).[isPrimitive](GeometryBase.md#isprimitive)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:216](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L216)

___

### serialization

▸ **serialization**(): [`SerializeGeometryInstance`](SerializeGeometryInstance.md)

#### Returns

[`SerializeGeometryInstance`](SerializeGeometryInstance.md)

#### Overrides

[GeometryBase](GeometryBase.md).[serialization](GeometryBase.md#serialization)

#### Defined in

[src/engine/shape/SphereGeometry.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/SphereGeometry.ts#L165)

## Accessors

### vertexBuffer

• `get` **vertexBuffer**(): `CompositeVertexGeometryBuffer`

获取顶点缓存

#### Returns

`CompositeVertexGeometryBuffer`

#### Inherited from

GeometryBase.vertexBuffer

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:100](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L100)

• `set` **vertexBuffer**(`value`): `void`

设置顶点缓存

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `CompositeVertexGeometryBuffer` |

#### Returns

`void`

#### Inherited from

GeometryBase.vertexBuffer

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L107)

___

### indexBuffer

• `get` **indexBuffer**(): `IndexGeometryBuffer`

获取索引缓存

#### Returns

`IndexGeometryBuffer`

#### Inherited from

GeometryBase.indexBuffer

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L115)

• `set` **indexBuffer**(`value`): `void`

设置索引缓存

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `IndexGeometryBuffer` |

#### Returns

`void`

#### Inherited from

GeometryBase.indexBuffer

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L122)

## Constructors

### constructor

• **new SphereGeometry**(`radius`, `widthSegments`, `heightSegments`, `phiStart?`, `phiLength?`, `thetaStart?`, `thetaLength?`)

创建新的球体对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | `any` | 球体半径 |
| `widthSegments` | `any` | 定义组成球体的水平段数。 |
| `heightSegments` | `any` | 定义组成球体的垂直段数。 |
| `phiStart?` | `any` | 球体赤道线的起始点弧度 |
| `phiLength?` | `any` | 球体赤道线的弧长 |
| `thetaStart?` | `any` | 球体经线起始点弧度 |
| `thetaLength?` | `any` | 球体经线弧长 |

#### Overrides

[GeometryBase](GeometryBase.md).[constructor](GeometryBase.md#constructor)

#### Defined in

[src/engine/shape/SphereGeometry.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/SphereGeometry.ts#L55)
