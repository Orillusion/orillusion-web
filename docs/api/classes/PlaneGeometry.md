# Class: PlaneGeometry

一个用于生成平面几何体的类

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`PlaneGeometry`**


### Properties

- [uuid](PlaneGeometry.md#uuid)
- [name](PlaneGeometry.md#name)
- [onChange](PlaneGeometry.md#onchange)
- [subGeometries](PlaneGeometry.md#subgeometries)
- [geometrySource](PlaneGeometry.md#geometrysource)
- [attributeArrays](PlaneGeometry.md#attributearrays)
- [morphTargetsRelative](PlaneGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](PlaneGeometry.md#morphtargetdictionary)
- [bounds](PlaneGeometry.md#bounds)
- [width](PlaneGeometry.md#width)
- [height](PlaneGeometry.md#height)
- [segmentW](PlaneGeometry.md#segmentw)
- [segmentH](PlaneGeometry.md#segmenth)
- [up](PlaneGeometry.md#up)

### Methods

- [setGeometryBounds](PlaneGeometry.md#setgeometrybounds)
- [addSubGeometry](PlaneGeometry.md#addsubgeometry)
- [setAttributes](PlaneGeometry.md#setattributes)
- [hasAttribute](PlaneGeometry.md#hasattribute)
- [getAttribute](PlaneGeometry.md#getattribute)
- [generate](PlaneGeometry.md#generate)
- [genWireframe](PlaneGeometry.md#genwireframe)
- [isPrimitive](PlaneGeometry.md#isprimitive)
- [serialization](PlaneGeometry.md#serialization)

### Accessors

- [vertexBuffer](PlaneGeometry.md#vertexbuffer)
- [indexBuffer](PlaneGeometry.md#indexbuffer)

### Constructors

- [constructor](PlaneGeometry.md#constructor)

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

平面的宽度

#### Defined in

[src/engine/shape/PlaneGeometry.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/PlaneGeometry.ts#L18)

___

### height

• **height**: `number`

平面的高度

#### Defined in

[src/engine/shape/PlaneGeometry.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/PlaneGeometry.ts#L22)

___

### segmentW

• **segmentW**: `number`

平面的宽度分段数

#### Defined in

[src/engine/shape/PlaneGeometry.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/PlaneGeometry.ts#L26)

___

### segmentH

• **segmentH**: `number`

平面的高度分段数

#### Defined in

[src/engine/shape/PlaneGeometry.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/PlaneGeometry.ts#L30)

___

### up

• **up**: [`Vector3`](Vector3.md)

定义平面的法线向量

#### Defined in

[src/engine/shape/PlaneGeometry.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/PlaneGeometry.ts#L34)

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

[src/engine/shape/PlaneGeometry.ts:185](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/PlaneGeometry.ts#L185)

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

• **new PlaneGeometry**(`width`, `height`, `segmentW?`, `segmentH?`, `up?`)

创建新的平面几何体对象。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `width` | `number` | `undefined` | 平面的宽度。 |
| `height` | `number` | `undefined` | 平面的高度。 |
| `segmentW` | `number` | `1` | 平面的宽度分段数，默认值是1。 |
| `segmentH` | `number` | `1` | 平面的高度分段数，默认值是1。 |
| `up` | [`Vector3`](Vector3.md) | `Vector3.Y_AXIS` | 定义平面的法线向量，默认指向Y轴。 |

#### Overrides

[GeometryBase](GeometryBase.md).[constructor](GeometryBase.md#constructor)

#### Defined in

[src/engine/shape/PlaneGeometry.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/PlaneGeometry.ts#L46)
