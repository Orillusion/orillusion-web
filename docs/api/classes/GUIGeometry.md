# Class: GUIGeometry

所有几何体的基类

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`GUIGeometry`**


### Properties

- [uuid](GUIGeometry.md#uuid)
- [name](GUIGeometry.md#name)
- [onChange](GUIGeometry.md#onchange)
- [subGeometries](GUIGeometry.md#subgeometries)
- [geometrySource](GUIGeometry.md#geometrysource)
- [attributeArrays](GUIGeometry.md#attributearrays)
- [morphTargetsRelative](GUIGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](GUIGeometry.md#morphtargetdictionary)
- [bounds](GUIGeometry.md#bounds)
- [totalCount](GUIGeometry.md#totalcount)

### Accessors

- [vertexBuffer](GUIGeometry.md#vertexbuffer)
- [indexBuffer](GUIGeometry.md#indexbuffer)
- [vPositionBuffer](GUIGeometry.md#vpositionbuffer)
- [vUniformBuffer](GUIGeometry.md#vuniformbuffer)

### Methods

- [addSubGeometry](GUIGeometry.md#addsubgeometry)
- [setAttributes](GUIGeometry.md#setattributes)
- [hasAttribute](GUIGeometry.md#hasattribute)
- [getAttribute](GUIGeometry.md#getattribute)
- [generate](GUIGeometry.md#generate)
- [genWireframe](GUIGeometry.md#genwireframe)
- [serialization](GUIGeometry.md#serialization)
- [isPrimitive](GUIGeometry.md#isprimitive)
- [setGeometryBounds](GUIGeometry.md#setgeometrybounds)
- [create](GUIGeometry.md#create)
- [updateQuad](GUIGeometry.md#updatequad)
- [reset](GUIGeometry.md#reset)

### Constructors

- [constructor](GUIGeometry.md#constructor)

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

### totalCount

• `Readonly` **totalCount**: `number`

#### Defined in

[src/engine/gui/core/GUIGeometry.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIGeometry.ts#L19)

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

___

### vPositionBuffer

• `get` **vPositionBuffer**(): `StorageGPUBuffer`

#### Returns

`StorageGPUBuffer`

#### Defined in

[src/engine/gui/core/GUIGeometry.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIGeometry.ts#L34)

___

### vUniformBuffer

• `get` **vUniformBuffer**(): `StorageGPUBuffer`

#### Returns

`StorageGPUBuffer`

#### Defined in

[src/engine/gui/core/GUIGeometry.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIGeometry.ts#L42)

## Methods

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

### serialization

▸ **serialization**(): [`SerializeGeometryInstance`](SerializeGeometryInstance.md)

#### Returns

[`SerializeGeometryInstance`](SerializeGeometryInstance.md)

#### Inherited from

[GeometryBase](GeometryBase.md).[serialization](GeometryBase.md#serialization)

#### Defined in

[src/engine/core/geometry/GeometryBase.ts:212](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/geometry/GeometryBase.ts#L212)

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

#### Overrides

[GeometryBase](GeometryBase.md).[setGeometryBounds](GeometryBase.md#setgeometrybounds)

#### Defined in

[src/engine/gui/core/GUIGeometry.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIGeometry.ts#L30)

___

### create

▸ **create**(): [`GUIGeometry`](GUIGeometry.md)

#### Returns

[`GUIGeometry`](GUIGeometry.md)

#### Defined in

[src/engine/gui/core/GUIGeometry.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIGeometry.ts#L55)

___

### updateQuad

▸ **updateQuad**(`quad`, `transform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | [`GUIQuad`](GUIQuad.md) |
| `transform` | [`UITransform`](UITransform.md) |

#### Returns

`void`

#### Defined in

[src/engine/gui/core/GUIGeometry.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIGeometry.ts#L110)

___

### reset

▸ **reset**(`z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gui/core/GUIGeometry.ts:179](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIGeometry.ts#L179)

## Constructors

### constructor

• **new GUIGeometry**(`count`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Overrides

[GeometryBase](GeometryBase.md).[constructor](GeometryBase.md#constructor)

#### Defined in

[src/engine/gui/core/GUIGeometry.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIGeometry.ts#L50)
