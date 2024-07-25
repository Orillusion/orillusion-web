# Class: CircleShape3D

Define class for drawing Circle on the xz plane
You can use the API implemented in CanvasPath in Path2DShape3D to draw the xz plane path

**`Export`**

## Hierarchy

- [`Shape3D`](Shape3D.md)

  ↳ **`CircleShape3D`**

### Constructors

- [constructor](CircleShape3D.md#constructor)

### Properties

- [shapeType](CircleShape3D.md#shapetype)
- [shapeIndex](CircleShape3D.md#shapeindex)
- [computeEveryFrame](CircleShape3D.md#computeeveryframe)

### Accessors

- [segment](CircleShape3D.md#segment)
- [radius](CircleShape3D.md#radius)
- [startAngle](CircleShape3D.md#startangle)
- [endAngle](CircleShape3D.md#endangle)
- [arcType](CircleShape3D.md#arctype)
- [isChange](CircleShape3D.md#ischange)
- [lineColor](CircleShape3D.md#linecolor)
- [fillColor](CircleShape3D.md#fillcolor)
- [lineTextureID](CircleShape3D.md#linetextureid)
- [fillTextureID](CircleShape3D.md#filltextureid)
- [fillRotation](CircleShape3D.md#fillrotation)
- [shapeOrder](CircleShape3D.md#shapeorder)
- [srcPointStart](CircleShape3D.md#srcpointstart)
- [srcPointCount](CircleShape3D.md#srcpointcount)
- [srcIndexStart](CircleShape3D.md#srcindexstart)
- [srcIndexCount](CircleShape3D.md#srcindexcount)
- [destPointStart](CircleShape3D.md#destpointstart)
- [destPointCount](CircleShape3D.md#destpointcount)
- [points3D](CircleShape3D.md#points3d)
- [isClosed](CircleShape3D.md#isclosed)
- [fill](CircleShape3D.md#fill)
- [line](CircleShape3D.md#line)
- [lineWidth](CircleShape3D.md#linewidth)
- [lineUVRect](CircleShape3D.md#lineuvrect)
- [fillUVRect](CircleShape3D.md#filluvrect)
- [uvSpeed](CircleShape3D.md#uvspeed)

### Methods

- [set](CircleShape3D.md#set)
- [calcRequireSource](CircleShape3D.md#calcrequiresource)
- [writeData](CircleShape3D.md#writedata)
- [clean](CircleShape3D.md#clean)

## Constructors

### constructor

• **new CircleShape3D**(`structs`, `sharedPoints`, `sharedIndecies`, `matrixIndex`): [`CircleShape3D`](CircleShape3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `structs` | [`Shape3DStruct`](Shape3DStruct.md) |
| `sharedPoints` | `Float32Array` |
| `sharedIndecies` | `Uint32Array` |
| `matrixIndex` | `number` |

#### Returns

[`CircleShape3D`](CircleShape3D.md)

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

[packages/graphic/renderer/shape3d/CircleShape3D.ts:16](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/CircleShape3D.ts#L16)

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

### segment

• `get` **segment**(): `number`

#### Returns

`number`

#### Defined in

[packages/graphic/renderer/shape3d/CircleShape3D.ts:26](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/CircleShape3D.ts#L26)

• `set` **segment**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/CircleShape3D.ts:29](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/CircleShape3D.ts#L29)

___

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Defined in

[packages/graphic/renderer/shape3d/CircleShape3D.ts:35](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/CircleShape3D.ts#L35)

• `set` **radius**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/CircleShape3D.ts:38](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/CircleShape3D.ts#L38)

___

### startAngle

• `get` **startAngle**(): `number`

#### Returns

`number`

#### Defined in

[packages/graphic/renderer/shape3d/CircleShape3D.ts:45](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/CircleShape3D.ts#L45)

• `set` **startAngle**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/CircleShape3D.ts:48](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/CircleShape3D.ts#L48)

___

### endAngle

• `get` **endAngle**(): `number`

#### Returns

`number`

#### Defined in

[packages/graphic/renderer/shape3d/CircleShape3D.ts:60](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/CircleShape3D.ts#L60)

• `set` **endAngle**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/CircleShape3D.ts:63](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/CircleShape3D.ts#L63)

___

### arcType

• `get` **arcType**(): [`CircleArcType`](../enums/CircleArcType.md)

#### Returns

[`CircleArcType`](../enums/CircleArcType.md)

#### Defined in

[packages/graphic/renderer/shape3d/CircleShape3D.ts:76](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/CircleShape3D.ts#L76)

• `set` **arcType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CircleArcType`](../enums/CircleArcType.md) |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/CircleShape3D.ts:79](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/CircleShape3D.ts#L79)

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

▸ **set**(`radius`, `lineWidth`, `fill`, `line`, `segment?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `radius` | `number` | `undefined` |
| `lineWidth` | `number` | `undefined` |
| `fill` | `boolean` | `undefined` |
| `line` | `boolean` | `undefined` |
| `segment` | `number` | `10` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/CircleShape3D.ts:18](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/CircleShape3D.ts#L18)

___

### calcRequireSource

▸ **calcRequireSource**(): `void`

#### Returns

`void`

#### Overrides

[Shape3D](Shape3D.md).[calcRequireSource](Shape3D.md#calcrequiresource)

#### Defined in

[packages/graphic/renderer/shape3d/CircleShape3D.ts:86](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/CircleShape3D.ts#L86)

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
