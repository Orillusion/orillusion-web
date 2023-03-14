# Class: GeometryBase

所有几何体的基类

## Hierarchy

- **`GeometryBase`**

  ↳ [`GUIGeometry`](GUIGeometry.md)

  ↳ [`BoxGeometry`](BoxGeometry.md)

  ↳ [`CylinderGeometry`](CylinderGeometry.md)

  ↳ [`PlaneGeometry`](PlaneGeometry.md)

  ↳ [`SphereGeometry`](SphereGeometry.md)

  ↳ [`TorusGeometry`](TorusGeometry.md)


### Properties

- [uuid](GeometryBase.md#uuid)
- [name](GeometryBase.md#name)
- [onChange](GeometryBase.md#onchange)
- [subGeometries](GeometryBase.md#subgeometries)
- [geometrySource](GeometryBase.md#geometrysource)
- [attributeArrays](GeometryBase.md#attributearrays)
- [morphTargetsRelative](GeometryBase.md#morphtargetsrelative)
- [morphTargetDictionary](GeometryBase.md#morphtargetdictionary)
- [bounds](GeometryBase.md#bounds)

### Constructors

- [constructor](GeometryBase.md#constructor)

### Methods

- [setGeometryBounds](GeometryBase.md#setgeometrybounds)
- [addSubGeometry](GeometryBase.md#addsubgeometry)
- [setAttributes](GeometryBase.md#setattributes)
- [hasAttribute](GeometryBase.md#hasattribute)
- [getAttribute](GeometryBase.md#getattribute)
- [generate](GeometryBase.md#generate)
- [genWireframe](GeometryBase.md#genwireframe)
- [serialization](GeometryBase.md#serialization)
- [isPrimitive](GeometryBase.md#isprimitive)

### Accessors

- [vertexBuffer](GeometryBase.md#vertexbuffer)
- [indexBuffer](GeometryBase.md#indexbuffer)

## Properties

### uuid

• **uuid**: `string` = `''`

唯一标识符

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L37)

___

### name

• **name**: `string`

名称

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L41)

___

### onChange

• **onChange**: `boolean` = `true`

是否正在变化

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L45)

___

### subGeometries

• **subGeometries**: [`SubGeometry`](SubGeometry.md)[] = `[]`

子几何体集合

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L49)

___

### geometrySource

• **geometrySource**: [`SerializeGeometrySource`](SerializeGeometrySource.md)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L52)

___

### attributeArrays

• **attributeArrays**: `AttributeInfos`

参数数组

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L57)

___

### morphTargetsRelative

• **morphTargetsRelative**: `boolean`

morph动画类型

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

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L66)

___

### bounds

• **bounds**: `BoundingBox`

包围盒

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L70)

## Constructors

### constructor

• **new GeometryBase**(`bufferGeometry?`)

新建几何体

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bufferGeometry?` | `CompositeVertexGeometryBuffer` | CompositeVertexGeometryBuffer |

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L77)

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

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:173](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L173)

___

### genWireframe

▸ **genWireframe**(): [`Vector3`](Vector3.md)[]

#### Returns

[`Vector3`](Vector3.md)[]

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:188](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L188)

___

### serialization

▸ **serialization**(): [`SerializeGeometryInstance`](SerializeGeometryInstance.md)

#### Returns

[`SerializeGeometryInstance`](SerializeGeometryInstance.md)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:212](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L212)

___

### isPrimitive

▸ **isPrimitive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:216](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L216)

## Accessors

### vertexBuffer

• `get` **vertexBuffer**(): `CompositeVertexGeometryBuffer`

获取顶点缓存

#### Returns

`CompositeVertexGeometryBuffer`

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

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L107)

___

### indexBuffer

• `get` **indexBuffer**(): `IndexGeometryBuffer`

获取索引缓存

#### Returns

`IndexGeometryBuffer`

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

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L122)
