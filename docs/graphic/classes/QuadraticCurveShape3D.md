# Class: QuadraticCurveShape3D

Define class for drawing quadratic curv on the xz plane

**`Export`**

## Hierarchy

- [`LineShape3D`](LineShape3D.md)

  ↳ **`QuadraticCurveShape3D`**

### Constructors

- [constructor](QuadraticCurveShape3D.md#constructor)

### Properties

- [shapeType](QuadraticCurveShape3D.md#shapetype)
- [shapeIndex](QuadraticCurveShape3D.md#shapeindex)
- [computeEveryFrame](QuadraticCurveShape3D.md#computeeveryframe)

### Accessors

- [lineJoin](QuadraticCurveShape3D.md#linejoin)
- [start](QuadraticCurveShape3D.md#start)
- [end](QuadraticCurveShape3D.md#end)
- [cp](QuadraticCurveShape3D.md#cp)
- [segment](QuadraticCurveShape3D.md#segment)
- [corner](QuadraticCurveShape3D.md#corner)
- [isChange](QuadraticCurveShape3D.md#ischange)
- [lineColor](QuadraticCurveShape3D.md#linecolor)
- [fillColor](QuadraticCurveShape3D.md#fillcolor)
- [lineTextureID](QuadraticCurveShape3D.md#linetextureid)
- [fillTextureID](QuadraticCurveShape3D.md#filltextureid)
- [fillRotation](QuadraticCurveShape3D.md#fillrotation)
- [shapeOrder](QuadraticCurveShape3D.md#shapeorder)
- [srcPointStart](QuadraticCurveShape3D.md#srcpointstart)
- [srcPointCount](QuadraticCurveShape3D.md#srcpointcount)
- [srcIndexStart](QuadraticCurveShape3D.md#srcindexstart)
- [srcIndexCount](QuadraticCurveShape3D.md#srcindexcount)
- [destPointStart](QuadraticCurveShape3D.md#destpointstart)
- [destPointCount](QuadraticCurveShape3D.md#destpointcount)
- [points3D](QuadraticCurveShape3D.md#points3d)
- [isClosed](QuadraticCurveShape3D.md#isclosed)
- [fill](QuadraticCurveShape3D.md#fill)
- [line](QuadraticCurveShape3D.md#line)
- [lineWidth](QuadraticCurveShape3D.md#linewidth)
- [lineUVRect](QuadraticCurveShape3D.md#lineuvrect)
- [fillUVRect](QuadraticCurveShape3D.md#filluvrect)
- [uvSpeed](QuadraticCurveShape3D.md#uvspeed)

### Methods

- [sampleQuadraticCurve](QuadraticCurveShape3D.md#samplequadraticcurve)
- [sampleCurve](QuadraticCurveShape3D.md#samplecurve)
- [calcRequireSource](QuadraticCurveShape3D.md#calcrequiresource)
- [writeData](QuadraticCurveShape3D.md#writedata)
- [clean](QuadraticCurveShape3D.md#clean)

## Constructors

### constructor

• **new QuadraticCurveShape3D**(`structs`, `sharedPoints`, `sharedIndecies`, `matrixIndex`): [`QuadraticCurveShape3D`](QuadraticCurveShape3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `structs` | [`Shape3DStruct`](Shape3DStruct.md) |
| `sharedPoints` | `Float32Array` |
| `sharedIndecies` | `Uint32Array` |
| `matrixIndex` | `number` |

#### Returns

[`QuadraticCurveShape3D`](QuadraticCurveShape3D.md)

#### Inherited from

[LineShape3D](LineShape3D.md).[constructor](LineShape3D.md#constructor)

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:113](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L113)

## Properties

### shapeType

• `Readonly` **shapeType**: `number`

#### Overrides

[LineShape3D](LineShape3D.md).[shapeType](LineShape3D.md#shapetype)

#### Defined in

[packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts:13](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts#L13)

___

### shapeIndex

• `Readonly` **shapeIndex**: `number` = `0`

#### Inherited from

[LineShape3D](LineShape3D.md).[shapeIndex](LineShape3D.md#shapeindex)

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:109](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L109)

___

### computeEveryFrame

• `Optional` `Readonly` **computeEveryFrame**: `boolean`

#### Inherited from

[LineShape3D](LineShape3D.md).[computeEveryFrame](LineShape3D.md#computeeveryframe)

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:111](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L111)

## Accessors

### lineJoin

• `get` **lineJoin**(): [`LineJoin`](../enums/LineJoin.md)

#### Returns

[`LineJoin`](../enums/LineJoin.md)

#### Inherited from

LineShape3D.lineJoin

#### Defined in

[packages/graphic/renderer/shape3d/LineShape3D.ts:30](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/LineShape3D.ts#L30)

• `set` **lineJoin**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`LineJoin`](../enums/LineJoin.md) |

#### Returns

`void`

#### Inherited from

LineShape3D.lineJoin

#### Defined in

[packages/graphic/renderer/shape3d/LineShape3D.ts:33](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/LineShape3D.ts#L33)

___

### start

• `get` **start**(): `Vector2`

#### Returns

`Vector2`

#### Defined in

[packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts:20](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts#L20)

• `set` **start**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector2` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts:23](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts#L23)

___

### end

• `get` **end**(): `Vector2`

#### Returns

`Vector2`

#### Defined in

[packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts:28](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts#L28)

• `set` **end**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector2` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts:31](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts#L31)

___

### cp

• `get` **cp**(): `Vector2`

#### Returns

`Vector2`

#### Defined in

[packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts:36](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts#L36)

• `set` **cp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector2` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts:39](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts#L39)

___

### segment

• `get` **segment**(): `number`

#### Returns

`number`

#### Defined in

[packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts:44](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts#L44)

• `set` **segment**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts:47](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts#L47)

___

### corner

• `get` **corner**(): `number`

#### Returns

`number`

#### Overrides

LineShape3D.corner

#### Defined in

[packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts:60](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts#L60)

• `set` **corner**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Overrides

LineShape3D.corner

#### Defined in

[packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts:55](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts#L55)

___

### isChange

• `get` **isChange**(): `boolean`

#### Returns

`boolean`

#### Inherited from

LineShape3D.isChange

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:120](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L120)

___

### lineColor

• `get` **lineColor**(): `Color`

#### Returns

`Color`

#### Inherited from

LineShape3D.lineColor

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

LineShape3D.lineColor

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:130](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L130)

___

### fillColor

• `get` **fillColor**(): `Color`

#### Returns

`Color`

#### Inherited from

LineShape3D.fillColor

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

LineShape3D.fillColor

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:139](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L139)

___

### lineTextureID

• `get` **lineTextureID**(): `number`

#### Returns

`number`

#### Inherited from

LineShape3D.lineTextureID

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

LineShape3D.lineTextureID

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:151](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L151)

___

### fillTextureID

• `get` **fillTextureID**(): `number`

#### Returns

`number`

#### Inherited from

LineShape3D.fillTextureID

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

LineShape3D.fillTextureID

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:160](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L160)

___

### fillRotation

• `get` **fillRotation**(): `number`

#### Returns

`number`

#### Inherited from

LineShape3D.fillRotation

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

LineShape3D.fillRotation

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:170](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L170)

___

### shapeOrder

• `get` **shapeOrder**(): `number`

#### Returns

`number`

#### Inherited from

LineShape3D.shapeOrder

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

LineShape3D.shapeOrder

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:180](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L180)

___

### srcPointStart

• `get` **srcPointStart**(): `number`

#### Returns

`number`

#### Inherited from

LineShape3D.srcPointStart

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

LineShape3D.srcPointStart

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:191](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L191)

___

### srcPointCount

• `get` **srcPointCount**(): `number`

#### Returns

`number`

#### Inherited from

LineShape3D.srcPointCount

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:198](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L198)

___

### srcIndexStart

• `get` **srcIndexStart**(): `number`

#### Returns

`number`

#### Inherited from

LineShape3D.srcIndexStart

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

LineShape3D.srcIndexStart

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:205](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L205)

___

### srcIndexCount

• `get` **srcIndexCount**(): `number`

#### Returns

`number`

#### Inherited from

LineShape3D.srcIndexCount

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:212](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L212)

___

### destPointStart

• `get` **destPointStart**(): `number`

#### Returns

`number`

#### Inherited from

LineShape3D.destPointStart

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

LineShape3D.destPointStart

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:219](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L219)

___

### destPointCount

• `get` **destPointCount**(): `number`

#### Returns

`number`

#### Inherited from

LineShape3D.destPointCount

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:225](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L225)

___

### points3D

• `get` **points3D**(): [`Point3D`](Point3D.md)[]

#### Returns

[`Point3D`](Point3D.md)[]

#### Inherited from

LineShape3D.points3D

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

LineShape3D.points3D

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:232](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L232)

___

### isClosed

• `get` **isClosed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

LineShape3D.isClosed

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

LineShape3D.isClosed

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:241](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L241)

___

### fill

• `get` **fill**(): `boolean`

#### Returns

`boolean`

#### Inherited from

LineShape3D.fill

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

LineShape3D.fill

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:251](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L251)

___

### line

• `get` **line**(): `boolean`

#### Returns

`boolean`

#### Inherited from

LineShape3D.line

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

LineShape3D.line

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:260](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L260)

___

### lineWidth

• `get` **lineWidth**(): `number`

#### Returns

`number`

#### Inherited from

LineShape3D.lineWidth

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

LineShape3D.lineWidth

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

LineShape3D.lineUVRect

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

LineShape3D.lineUVRect

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

LineShape3D.fillUVRect

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

LineShape3D.fillUVRect

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

LineShape3D.uvSpeed

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

LineShape3D.uvSpeed

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:325](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L325)

## Methods

### sampleQuadraticCurve

▸ **sampleQuadraticCurve**(`start`, `cp`, `end`, `t`, `ret?`): `vec3`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `vec3` |
| `cp` | `vec3` |
| `end` | `vec3` |
| `t` | `number` |
| `ret?` | `vec3` |

#### Returns

`vec3`

#### Inherited from

[LineShape3D](LineShape3D.md).[sampleQuadraticCurve](LineShape3D.md#samplequadraticcurve)

#### Defined in

[packages/graphic/renderer/shape3d/LineShape3D.ts:56](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/LineShape3D.ts#L56)

___

### sampleCurve

▸ **sampleCurve**(`start`, `cp1`, `cp2`, `end`, `t`, `ret?`): `vec3`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `vec3` |
| `cp1` | `vec3` |
| `cp2` | `vec3` |
| `end` | `vec3` |
| `t` | `number` |
| `ret?` | `vec3` |

#### Returns

`vec3`

#### Inherited from

[LineShape3D](LineShape3D.md).[sampleCurve](LineShape3D.md#samplecurve)

#### Defined in

[packages/graphic/renderer/shape3d/LineShape3D.ts:66](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/LineShape3D.ts#L66)

___

### calcRequireSource

▸ **calcRequireSource**(): `void`

#### Returns

`void`

#### Overrides

[LineShape3D](LineShape3D.md).[calcRequireSource](LineShape3D.md#calcrequiresource)

#### Defined in

[packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts:69](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/QuadraticCurveShape3D.ts#L69)

___

### writeData

▸ **writeData**(): `void`

#### Returns

`void`

#### Inherited from

[LineShape3D](LineShape3D.md).[writeData](LineShape3D.md#writedata)

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:124](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L124)

___

### clean

▸ **clean**(): `void`

#### Returns

`void`

#### Inherited from

[LineShape3D](LineShape3D.md).[clean](LineShape3D.md#clean)

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:330](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L330)
