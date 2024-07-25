# Class: Path3DShape3D

Define class for drawing path in 3D space.
It implemented an API similar to CanvasPath.
Please ensure that the current Shape3D model matrix is identitied.

**`Export`**

## Hierarchy

- [`LineShape3D`](LineShape3D.md)

  ↳ **`Path3DShape3D`**

### Constructors

- [constructor](Path3DShape3D.md#constructor)

### Properties

- [shapeType](Path3DShape3D.md#shapetype)
- [computeEveryFrame](Path3DShape3D.md#computeeveryframe)
- [shapeIndex](Path3DShape3D.md#shapeindex)

### Accessors

- [corner](Path3DShape3D.md#corner)
- [lineJoin](Path3DShape3D.md#linejoin)
- [isClosed](Path3DShape3D.md#isclosed)
- [isChange](Path3DShape3D.md#ischange)
- [lineColor](Path3DShape3D.md#linecolor)
- [fillColor](Path3DShape3D.md#fillcolor)
- [lineTextureID](Path3DShape3D.md#linetextureid)
- [fillTextureID](Path3DShape3D.md#filltextureid)
- [fillRotation](Path3DShape3D.md#fillrotation)
- [shapeOrder](Path3DShape3D.md#shapeorder)
- [srcPointStart](Path3DShape3D.md#srcpointstart)
- [srcPointCount](Path3DShape3D.md#srcpointcount)
- [srcIndexStart](Path3DShape3D.md#srcindexstart)
- [srcIndexCount](Path3DShape3D.md#srcindexcount)
- [destPointStart](Path3DShape3D.md#destpointstart)
- [destPointCount](Path3DShape3D.md#destpointcount)
- [points3D](Path3DShape3D.md#points3d)
- [fill](Path3DShape3D.md#fill)
- [line](Path3DShape3D.md#line)
- [lineWidth](Path3DShape3D.md#linewidth)
- [lineUVRect](Path3DShape3D.md#lineuvrect)
- [fillUVRect](Path3DShape3D.md#filluvrect)
- [uvSpeed](Path3DShape3D.md#uvspeed)

### Methods

- [sampleQuadraticCurve](Path3DShape3D.md#samplequadraticcurve)
- [sampleCurve](Path3DShape3D.md#samplecurve)
- [reset](Path3DShape3D.md#reset)
- [calcRequireSource](Path3DShape3D.md#calcrequiresource)
- [arc](Path3DShape3D.md#arc)
- [arcTo](Path3DShape3D.md#arcto)
- [bezierCurveTo](Path3DShape3D.md#beziercurveto)
- [closePath](Path3DShape3D.md#closepath)
- [ellipse](Path3DShape3D.md#ellipse)
- [moveTo](Path3DShape3D.md#moveto)
- [quadraticCurveTo](Path3DShape3D.md#quadraticcurveto)
- [rect](Path3DShape3D.md#rect)
- [roundRect](Path3DShape3D.md#roundrect)
- [lineTo](Path3DShape3D.md#lineto)
- [writeData](Path3DShape3D.md#writedata)
- [clean](Path3DShape3D.md#clean)

## Constructors

### constructor

• **new Path3DShape3D**(`structs`, `sharedPoints`, `sharedIndecies`, `matrixIndex`): [`Path3DShape3D`](Path3DShape3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `structs` | [`Shape3DStruct`](Shape3DStruct.md) |
| `sharedPoints` | `Float32Array` |
| `sharedIndecies` | `Uint32Array` |
| `matrixIndex` | `number` |

#### Returns

[`Path3DShape3D`](Path3DShape3D.md)

#### Overrides

[LineShape3D](LineShape3D.md).[constructor](LineShape3D.md#constructor)

#### Defined in

[packages/graphic/renderer/shape3d/Path3DShape3D.ts:21](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L21)

## Properties

### shapeType

• `Readonly` **shapeType**: `number`

#### Overrides

[LineShape3D](LineShape3D.md).[shapeType](LineShape3D.md#shapetype)

#### Defined in

[packages/graphic/renderer/shape3d/Path3DShape3D.ts:18](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L18)

___

### computeEveryFrame

• `Readonly` **computeEveryFrame**: `boolean` = `true`

#### Overrides

[LineShape3D](LineShape3D.md).[computeEveryFrame](LineShape3D.md#computeeveryframe)

#### Defined in

[packages/graphic/renderer/shape3d/Path3DShape3D.ts:19](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L19)

___

### shapeIndex

• `Readonly` **shapeIndex**: `number` = `0`

#### Inherited from

[LineShape3D](LineShape3D.md).[shapeIndex](LineShape3D.md#shapeindex)

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:109](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L109)

## Accessors

### corner

• `get` **corner**(): `number`

#### Returns

`number`

#### Inherited from

LineShape3D.corner

#### Defined in

[packages/graphic/renderer/shape3d/LineShape3D.ts:20](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/LineShape3D.ts#L20)

• `set` **corner**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

LineShape3D.corner

#### Defined in

[packages/graphic/renderer/shape3d/LineShape3D.ts:23](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/LineShape3D.ts#L23)

___

### lineJoin

• `get` **lineJoin**(): [`LineJoin`](../enums/LineJoin.md)

#### Returns

[`LineJoin`](../enums/LineJoin.md)

#### Overrides

LineShape3D.lineJoin

#### Defined in

[packages/graphic/renderer/shape3d/Path3DShape3D.ts:28](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L28)

• `set` **lineJoin**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`LineJoin`](../enums/LineJoin.md) |

#### Returns

`void`

#### Overrides

LineShape3D.lineJoin

#### Defined in

[packages/graphic/renderer/shape3d/Path3DShape3D.ts:31](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L31)

___

### isClosed

• `get` **isClosed**(): `boolean`

#### Returns

`boolean`

#### Overrides

LineShape3D.isClosed

#### Defined in

[packages/graphic/renderer/shape3d/Path3DShape3D.ts:35](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L35)

• `set` **isClosed**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Overrides

LineShape3D.isClosed

#### Defined in

[packages/graphic/renderer/shape3d/Path3DShape3D.ts:38](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L38)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/Path3DShape3D.ts:43](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L43)

___

### calcRequireSource

▸ **calcRequireSource**(): `void`

#### Returns

`void`

#### Overrides

[LineShape3D](LineShape3D.md).[calcRequireSource](LineShape3D.md#calcrequiresource)

#### Defined in

[packages/graphic/renderer/shape3d/Path3DShape3D.ts:49](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L49)

___

### arc

▸ **arc**(`x`, `y`, `radius`, `startAngle`, `endAngle`, `counterclockwise?`, `segment?`, `height?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radius` | `number` |
| `startAngle` | `number` |
| `endAngle` | `number` |
| `counterclockwise?` | `boolean` |
| `segment?` | `number` |
| `height?` | `number` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/Path3DShape3D.ts:54](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L54)

___

### arcTo

▸ **arcTo**(`ctrlX`, `ctrlY`, `toX`, `toY`, `radius`, `segment?`, `height?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctrlX` | `number` |
| `ctrlY` | `number` |
| `toX` | `number` |
| `toY` | `number` |
| `radius` | `number` |
| `segment?` | `number` |
| `height?` | `number` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/Path3DShape3D.ts:78](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L78)

___

### bezierCurveTo

▸ **bezierCurveTo**(`cp1x`, `cp1y`, `cp1h`, `cp2x`, `cp2y`, `cp2h`, `x`, `y`, `h`, `segment?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cp1x` | `number` |
| `cp1y` | `number` |
| `cp1h` | `number` |
| `cp2x` | `number` |
| `cp2y` | `number` |
| `cp2h` | `number` |
| `x` | `number` |
| `y` | `number` |
| `h` | `number` |
| `segment?` | `number` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/Path3DShape3D.ts:112](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L112)

___

### closePath

▸ **closePath**(): `void`

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/Path3DShape3D.ts:137](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L137)

___

### ellipse

▸ **ellipse**(`x`, `y`, `radiusX`, `radiusY`, `rotation`, `startAngle`, `endAngle`, `counterclockwise?`, `segment?`, `height?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radiusX` | `number` |
| `radiusY` | `number` |
| `rotation` | `number` |
| `startAngle` | `number` |
| `endAngle` | `number` |
| `counterclockwise?` | `boolean` |
| `segment?` | `number` |
| `height?` | `number` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/Path3DShape3D.ts:146](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L146)

___

### moveTo

▸ **moveTo**(`x`, `y`, `h?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `h?` | `number` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/Path3DShape3D.ts:182](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L182)

___

### quadraticCurveTo

▸ **quadraticCurveTo**(`cpx`, `cpy`, `cph`, `x`, `y`, `h`, `segment?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cpx` | `number` |
| `cpy` | `number` |
| `cph` | `number` |
| `x` | `number` |
| `y` | `number` |
| `h` | `number` |
| `segment?` | `number` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/Path3DShape3D.ts:188](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L188)

___

### rect

▸ **rect**(`x`, `y`, `w`, `h`, `height?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `w` | `number` |
| `h` | `number` |
| `height?` | `number` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/Path3DShape3D.ts:210](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L210)

___

### roundRect

▸ **roundRect**(`x`, `y`, `w`, `h`, `radii?`, `segment?`, `height?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `w` | `number` |
| `h` | `number` |
| `radii?` | `number` |
| `segment?` | `number` |
| `height?` | `number` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/Path3DShape3D.ts:219](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L219)

___

### lineTo

▸ **lineTo**(`x`, `y`, `h?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `h?` | `number` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/Path3DShape3D.ts:263](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L263)

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
