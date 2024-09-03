# Class: RoundRectShape3D

Define class for drawing rounded rectangles on the xz plane

**`Export`**

## Hierarchy

- [`Shape3D`](Shape3D.md)

  ↳ **`RoundRectShape3D`**

### Constructors

- [constructor](RoundRectShape3D.md#constructor)

### Properties

- [shapeType](RoundRectShape3D.md#shapetype)
- [shapeIndex](RoundRectShape3D.md#shapeindex)
- [computeEveryFrame](RoundRectShape3D.md#computeeveryframe)

### Accessors

- [width](RoundRectShape3D.md#width)
- [height](RoundRectShape3D.md#height)
- [radius](RoundRectShape3D.md#radius)
- [cornerSegment](RoundRectShape3D.md#cornersegment)
- [isRect](RoundRectShape3D.md#isrect)
- [isChange](RoundRectShape3D.md#ischange)
- [lineColor](RoundRectShape3D.md#linecolor)
- [fillColor](RoundRectShape3D.md#fillcolor)
- [lineTextureID](RoundRectShape3D.md#linetextureid)
- [fillTextureID](RoundRectShape3D.md#filltextureid)
- [fillRotation](RoundRectShape3D.md#fillrotation)
- [shapeOrder](RoundRectShape3D.md#shapeorder)
- [srcPointStart](RoundRectShape3D.md#srcpointstart)
- [srcPointCount](RoundRectShape3D.md#srcpointcount)
- [srcIndexStart](RoundRectShape3D.md#srcindexstart)
- [srcIndexCount](RoundRectShape3D.md#srcindexcount)
- [destPointStart](RoundRectShape3D.md#destpointstart)
- [destPointCount](RoundRectShape3D.md#destpointcount)
- [points3D](RoundRectShape3D.md#points3d)
- [isClosed](RoundRectShape3D.md#isclosed)
- [fill](RoundRectShape3D.md#fill)
- [line](RoundRectShape3D.md#line)
- [lineWidth](RoundRectShape3D.md#linewidth)
- [lineUVRect](RoundRectShape3D.md#lineuvrect)
- [fillUVRect](RoundRectShape3D.md#filluvrect)
- [uvSpeed](RoundRectShape3D.md#uvspeed)

### Methods

- [set](RoundRectShape3D.md#set)
- [calcRequireSource](RoundRectShape3D.md#calcrequiresource)
- [writeData](RoundRectShape3D.md#writedata)
- [clean](RoundRectShape3D.md#clean)

## Constructors

### constructor

• **new RoundRectShape3D**(`structs`, `sharedPoints`, `sharedIndecies`, `matrixIndex`): [`RoundRectShape3D`](RoundRectShape3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `structs` | [`Shape3DStruct`](Shape3DStruct.md) |
| `sharedPoints` | `Float32Array` |
| `sharedIndecies` | `Uint32Array` |
| `matrixIndex` | `number` |

#### Returns

[`RoundRectShape3D`](RoundRectShape3D.md)

#### Inherited from

[Shape3D](Shape3D.md).[constructor](Shape3D.md#constructor)

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:113](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L113)

## Properties

### shapeType

• `Readonly` **shapeType**: `number`

#### Overrides

[Shape3D](Shape3D.md).[shapeType](Shape3D.md#shapetype)

#### Defined in

[packages/graphic/renderer/shape3d/RoundRectShape3D.ts:17](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L17)

___

### shapeIndex

• `Readonly` **shapeIndex**: `number` = `0`

#### Inherited from

[Shape3D](Shape3D.md).[shapeIndex](Shape3D.md#shapeindex)

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:109](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L109)

___

### computeEveryFrame

• `Optional` `Readonly` **computeEveryFrame**: `boolean`

#### Inherited from

[Shape3D](Shape3D.md).[computeEveryFrame](Shape3D.md#computeeveryframe)

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:111](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L111)

## Accessors

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[packages/graphic/renderer/shape3d/RoundRectShape3D.ts:29](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L29)

• `set` **width**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/RoundRectShape3D.ts:32](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L32)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[packages/graphic/renderer/shape3d/RoundRectShape3D.ts:38](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L38)

• `set` **height**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/RoundRectShape3D.ts:41](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L41)

___

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Defined in

[packages/graphic/renderer/shape3d/RoundRectShape3D.ts:48](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L48)

• `set` **radius**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/RoundRectShape3D.ts:51](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L51)

___

### cornerSegment

• `get` **cornerSegment**(): `number`

#### Returns

`number`

#### Defined in

[packages/graphic/renderer/shape3d/RoundRectShape3D.ts:58](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L58)

• `set` **cornerSegment**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/RoundRectShape3D.ts:61](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L61)

___

### isRect

• `get` **isRect**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/graphic/renderer/shape3d/RoundRectShape3D.ts:72](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L72)

___

### isChange

• `get` **isChange**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Shape3D.isChange

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:120](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L120)

___

### lineColor

• `get` **lineColor**(): `Color`

#### Returns

`Color`

#### Inherited from

Shape3D.lineColor

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:135](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L135)

• `set` **lineColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Color` |

#### Returns

`void`

#### Inherited from

Shape3D.lineColor

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:130](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L130)

___

### fillColor

• `get` **fillColor**(): `Color`

#### Returns

`Color`

#### Inherited from

Shape3D.fillColor

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:144](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L144)

• `set` **fillColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Color` |

#### Returns

`void`

#### Inherited from

Shape3D.fillColor

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:139](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L139)

___

### lineTextureID

• `get` **lineTextureID**(): `number`

#### Returns

`number`

#### Inherited from

Shape3D.lineTextureID

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:148](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L148)

• `set` **lineTextureID**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Shape3D.lineTextureID

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:151](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L151)

___

### fillTextureID

• `get` **fillTextureID**(): `number`

#### Returns

`number`

#### Inherited from

Shape3D.fillTextureID

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:157](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L157)

• `set` **fillTextureID**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Shape3D.fillTextureID

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:160](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L160)

___

### fillRotation

• `get` **fillRotation**(): `number`

#### Returns

`number`

#### Inherited from

Shape3D.fillRotation

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:167](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L167)

• `set` **fillRotation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Shape3D.fillRotation

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:170](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L170)

___

### shapeOrder

• `get` **shapeOrder**(): `number`

#### Returns

`number`

#### Inherited from

Shape3D.shapeOrder

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:177](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L177)

• `set` **shapeOrder**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Shape3D.shapeOrder

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:180](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L180)

___

### srcPointStart

• `get` **srcPointStart**(): `number`

#### Returns

`number`

#### Inherited from

Shape3D.srcPointStart

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:188](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L188)

• `set` **srcPointStart**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Shape3D.srcPointStart

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:191](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L191)

___

### srcPointCount

• `get` **srcPointCount**(): `number`

#### Returns

`number`

#### Inherited from

Shape3D.srcPointCount

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:198](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L198)

___

### srcIndexStart

• `get` **srcIndexStart**(): `number`

#### Returns

`number`

#### Inherited from

Shape3D.srcIndexStart

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:202](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L202)

• `set` **srcIndexStart**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Shape3D.srcIndexStart

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:205](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L205)

___

### srcIndexCount

• `get` **srcIndexCount**(): `number`

#### Returns

`number`

#### Inherited from

Shape3D.srcIndexCount

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:212](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L212)

___

### destPointStart

• `get` **destPointStart**(): `number`

#### Returns

`number`

#### Inherited from

Shape3D.destPointStart

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:216](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L216)

• `set` **destPointStart**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Shape3D.destPointStart

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:219](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L219)

___

### destPointCount

• `get` **destPointCount**(): `number`

#### Returns

`number`

#### Inherited from

Shape3D.destPointCount

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:225](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L225)

___

### points3D

• `get` **points3D**(): [`Point3D`](Point3D.md)[]

#### Returns

[`Point3D`](Point3D.md)[]

#### Inherited from

Shape3D.points3D

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:229](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L229)

• `set` **points3D**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Point3D`](Point3D.md)[] |

#### Returns

`void`

#### Inherited from

Shape3D.points3D

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:232](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L232)

___

### isClosed

• `get` **isClosed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Shape3D.isClosed

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:238](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L238)

• `set` **isClosed**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Shape3D.isClosed

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:241](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L241)

___

### fill

• `get` **fill**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Shape3D.fill

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:248](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L248)

• `set` **fill**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Shape3D.fill

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:251](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L251)

___

### line

• `get` **line**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Shape3D.line

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:257](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L257)

• `set` **line**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Shape3D.line

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:260](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L260)

___

### lineWidth

• `get` **lineWidth**(): `number`

#### Returns

`number`

#### Inherited from

Shape3D.lineWidth

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:267](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L267)

• `set` **lineWidth**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Shape3D.lineWidth

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:271](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L271)

___

### lineUVRect

• `get` **lineUVRect**(): `Vector4`

x: u offset of line.
y: v offset of line.
z: u scale of line.
w: v scale of line.

#### Returns

`Vector4`

**`Memberof`**

Shape3D

#### Inherited from

Shape3D.lineUVRect

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:288](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L288)

• `set` **lineUVRect**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Inherited from

Shape3D.lineUVRect

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:291](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L291)

___

### fillUVRect

• `get` **fillUVRect**(): `Vector4`

x: u offset of filled area.
y: v offset of filled area.
z: u scale of filled area.
w: v scale of filled area.

#### Returns

`Vector4`

**`Memberof`**

Shape3D

#### Inherited from

Shape3D.fillUVRect

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:305](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L305)

• `set` **fillUVRect**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Inherited from

Shape3D.fillUVRect

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:308](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L308)

___

### uvSpeed

• `get` **uvSpeed**(): `Vector4`

x: u speed of filled area.
y: v speed of filled area.
z: u speed of line.
w: v speed of line.

#### Returns

`Vector4`

**`Memberof`**

Shape3D

#### Inherited from

Shape3D.uvSpeed

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:322](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L322)

• `set` **uvSpeed**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Inherited from

Shape3D.uvSpeed

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:325](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L325)

## Methods

### set

▸ **set**(`width`, `height`, `radius`, `lineWidth`, `fill`, `line`, `cornerSegment?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `width` | `number` | `undefined` |
| `height` | `number` | `undefined` |
| `radius` | `number` | `undefined` |
| `lineWidth` | `number` | `undefined` |
| `fill` | `boolean` | `undefined` |
| `line` | `boolean` | `undefined` |
| `cornerSegment` | `number` | `10` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/RoundRectShape3D.ts:19](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L19)

___

### calcRequireSource

▸ **calcRequireSource**(): `void`

#### Returns

`void`

#### Overrides

[Shape3D](Shape3D.md).[calcRequireSource](Shape3D.md#calcrequiresource)

#### Defined in

[packages/graphic/renderer/shape3d/RoundRectShape3D.ts:68](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L68)

___

### writeData

▸ **writeData**(): `void`

#### Returns

`void`

#### Inherited from

[Shape3D](Shape3D.md).[writeData](Shape3D.md#writedata)

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:124](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L124)

___

### clean

▸ **clean**(): `void`

#### Returns

`void`

#### Inherited from

[Shape3D](Shape3D.md).[clean](Shape3D.md#clean)

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:330](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L330)
