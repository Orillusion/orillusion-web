# Class: CylinderGeometry

一个用于生成圆柱体的类。

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`CylinderGeometry`**


### Properties

- [uuid](CylinderGeometry.md#uuid)
- [name](CylinderGeometry.md#name)
- [onChange](CylinderGeometry.md#onchange)
- [subGeometries](CylinderGeometry.md#subgeometries)
- [geometrySource](CylinderGeometry.md#geometrysource)
- [attributeArrays](CylinderGeometry.md#attributearrays)
- [morphTargetsRelative](CylinderGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](CylinderGeometry.md#morphtargetdictionary)
- [bounds](CylinderGeometry.md#bounds)
- [radiusTop](CylinderGeometry.md#radiustop)
- [radiusBottom](CylinderGeometry.md#radiusbottom)
- [height](CylinderGeometry.md#height)
- [radialSegments](CylinderGeometry.md#radialsegments)
- [heightSegments](CylinderGeometry.md#heightsegments)
- [openEnded](CylinderGeometry.md#openended)
- [thetaStart](CylinderGeometry.md#thetastart)
- [thetaLength](CylinderGeometry.md#thetalength)

### Methods

- [setGeometryBounds](CylinderGeometry.md#setgeometrybounds)
- [addSubGeometry](CylinderGeometry.md#addsubgeometry)
- [setAttributes](CylinderGeometry.md#setattributes)
- [hasAttribute](CylinderGeometry.md#hasattribute)
- [getAttribute](CylinderGeometry.md#getattribute)
- [generate](CylinderGeometry.md#generate)
- [genWireframe](CylinderGeometry.md#genwireframe)
- [isPrimitive](CylinderGeometry.md#isprimitive)
- [addGroup](CylinderGeometry.md#addgroup)
- [serialization](CylinderGeometry.md#serialization)

### Accessors

- [vertexBuffer](CylinderGeometry.md#vertexbuffer)
- [indexBuffer](CylinderGeometry.md#indexbuffer)

### Constructors

- [constructor](CylinderGeometry.md#constructor)

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

### radiusTop

• **radiusTop**: `number`

圆柱体顶端的半径

#### Defined in

[src/engine/shape/CylinderGeometry.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/CylinderGeometry.ts#L19)

___

### radiusBottom

• **radiusBottom**: `number`

圆柱体底端的半径

#### Defined in

[src/engine/shape/CylinderGeometry.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/CylinderGeometry.ts#L23)

___

### height

• **height**: `number`

圆柱体的高度

#### Defined in

[src/engine/shape/CylinderGeometry.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/CylinderGeometry.ts#L27)

___

### radialSegments

• **radialSegments**: `number`

圆柱侧面周围的分段数

#### Defined in

[src/engine/shape/CylinderGeometry.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/CylinderGeometry.ts#L31)

___

### heightSegments

• **heightSegments**: `number`

圆柱侧面沿着其高度的分段数

#### Defined in

[src/engine/shape/CylinderGeometry.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/CylinderGeometry.ts#L35)

___

### openEnded

• **openEnded**: `boolean`

一个Boolean值，指明该圆锥的底面是开放的还是封顶的。默认值为false，即其底面默认是封顶的。

#### Defined in

[src/engine/shape/CylinderGeometry.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/CylinderGeometry.ts#L39)

___

### thetaStart

• **thetaStart**: `number`

第一个分段的起始角度

#### Defined in

[src/engine/shape/CylinderGeometry.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/CylinderGeometry.ts#L43)

___

### thetaLength

• **thetaLength**: `number`

圆柱底面圆扇区的中心角，默认值是2*PI，这使其成为一个完整的圆柱。

#### Defined in

[src/engine/shape/CylinderGeometry.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/CylinderGeometry.ts#L47)

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

### addGroup

▸ **addGroup**(`start`, `count`, `index`): `void`

添加子几何体

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `any` | 起始位置 |
| `count` | `any` | 个数 |
| `index` | `any` | 索引 |

#### Returns

`void`

#### Defined in

[src/engine/shape/CylinderGeometry.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/CylinderGeometry.ts#L83)

___

### serialization

▸ **serialization**(): [`SerializeGeometryInstance`](SerializeGeometryInstance.md)

#### Returns

[`SerializeGeometryInstance`](SerializeGeometryInstance.md)

#### Overrides

[GeometryBase](GeometryBase.md).[serialization](GeometryBase.md#serialization)

#### Defined in

[src/engine/shape/CylinderGeometry.ts:252](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/CylinderGeometry.ts#L252)

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

• **new CylinderGeometry**(`radiusTop?`, `radiusBottom?`, `height?`, `radialSegments?`, `heightSegments?`, `openEnded?`, `thetaStart?`, `thetaLength?`)

创建新的圆柱体对象。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `radiusTop` | `number` | `1` | 圆柱体顶端的半径，默认值是1。 |
| `radiusBottom` | `number` | `1` | 圆柱体底端的半径，默认值是1。 |
| `height` | `number` | `1` | 圆柱体的高度，默认值是1。 |
| `radialSegments` | `number` | `8` | 圆柱侧面周围的分段数，默认为8。 |
| `heightSegments` | `number` | `8` | 圆柱侧面沿着其高度的分段数，默认值为8。 |
| `openEnded` | `boolean` | `false` | 一个Boolean值，指明该圆锥的底面是开放的还是封顶的。默认值为false，即其底面默认是封顶的。 |
| `thetaStart` | `number` | `0` | 第一个分段的起始角度，默认为0。 |
| `thetaLength` | `number` | `undefined` | 圆柱底面圆扇区的中心角，默认值是2*PI，这使其成为一个完整的圆柱。 |

#### Overrides

[GeometryBase](GeometryBase.md).[constructor](GeometryBase.md#constructor)

#### Defined in

[src/engine/shape/CylinderGeometry.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/engine/shape/CylinderGeometry.ts#L61)
