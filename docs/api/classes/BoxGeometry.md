# Class: BoxGeometry

一个用于生成立方体的类。

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`BoxGeometry`**


### Properties

- [uuid](BoxGeometry.md#uuid)
- [name](BoxGeometry.md#name)
- [onChange](BoxGeometry.md#onchange)
- [subGeometries](BoxGeometry.md#subgeometries)
- [geometrySource](BoxGeometry.md#geometrysource)
- [attributeArrays](BoxGeometry.md#attributearrays)
- [morphTargetsRelative](BoxGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](BoxGeometry.md#morphtargetdictionary)
- [bounds](BoxGeometry.md#bounds)
- [width](BoxGeometry.md#width)
- [height](BoxGeometry.md#height)
- [depth](BoxGeometry.md#depth)

### Methods

- [setGeometryBounds](BoxGeometry.md#setgeometrybounds)
- [addSubGeometry](BoxGeometry.md#addsubgeometry)
- [setAttributes](BoxGeometry.md#setattributes)
- [hasAttribute](BoxGeometry.md#hasattribute)
- [getAttribute](BoxGeometry.md#getattribute)
- [generate](BoxGeometry.md#generate)
- [genWireframe](BoxGeometry.md#genwireframe)
- [isPrimitive](BoxGeometry.md#isprimitive)
- [serialization](BoxGeometry.md#serialization)

### Accessors

- [vertexBuffer](BoxGeometry.md#vertexbuffer)
- [indexBuffer](BoxGeometry.md#indexbuffer)

### Constructors

- [constructor](BoxGeometry.md#constructor)

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

### width

• **width**: `number`

宽度，x轴方向的长度。

#### Defined in

[src/engine/shape/BoxGeometry.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/BoxGeometry.ts#L21)

___

### height

• **height**: `number`

高度，y轴方向的长度。

#### Defined in

[src/engine/shape/BoxGeometry.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/BoxGeometry.ts#L25)

___

### depth

• **depth**: `number`

深度，z轴方向的长度。

#### Defined in

[src/engine/shape/BoxGeometry.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/BoxGeometry.ts#L29)

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

[src/engine/shape/BoxGeometry.ts:206](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/BoxGeometry.ts#L206)

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

• **new BoxGeometry**(`width?`, `height?`, `depth?`)

创建新的立方体对象。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `width` | `number` | `1` | {number} 立方体的宽度，默认值为1。 |
| `height` | `number` | `1` | {number} 立方体的高度，默认值为1。 |
| `depth` | `number` | `1` | {number} 立方体的深度，默认值为1。 |

#### Overrides

[GeometryBase](GeometryBase.md).[constructor](GeometryBase.md#constructor)

#### Defined in

[src/engine/shape/BoxGeometry.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/BoxGeometry.ts#L38)
