[**@orillusion/graphic**](../README.md)

***

# Class: RoundRectShape3D

Defined in: [packages/graphic/renderer/shape3d/RoundRectShape3D.ts:11](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L11)

Define class for drawing rounded rectangles on the xz plane

## Export

RoundRectShape3D

## Extends

- [`Shape3D`](Shape3D.md)

## Constructors

### Constructor

> **new RoundRectShape3D**(`structs`, `sharedPoints`, `sharedIndecies`, `matrixIndex`): `RoundRectShape3D`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:113](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L113)

#### Parameters

##### structs

[`Shape3DStruct`](Shape3DStruct.md)

##### sharedPoints

`Float32Array`

##### sharedIndecies

`Uint32Array`

##### matrixIndex

`number`

#### Returns

`RoundRectShape3D`

#### Inherited from

[`Shape3D`](Shape3D.md).[`constructor`](Shape3D.md#constructor)

## Properties

### shapeType

> `readonly` **shapeType**: `number`

Defined in: [packages/graphic/renderer/shape3d/RoundRectShape3D.ts:17](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L17)

#### Overrides

[`Shape3D`](Shape3D.md).[`shapeType`](Shape3D.md#shapetype)

***

### shapeIndex

> `readonly` **shapeIndex**: `number` = `0`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:109](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L109)

#### Inherited from

[`Shape3D`](Shape3D.md).[`shapeIndex`](Shape3D.md#shapeindex)

***

### computeEveryFrame?

> `readonly` `optional` **computeEveryFrame?**: `boolean`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:111](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L111)

#### Inherited from

[`Shape3D`](Shape3D.md).[`computeEveryFrame`](Shape3D.md#computeeveryframe)

## Accessors

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [packages/graphic/renderer/shape3d/RoundRectShape3D.ts:29](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L29)

##### Returns

`number`

#### Set Signature

> **set** **width**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/RoundRectShape3D.ts:32](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L32)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [packages/graphic/renderer/shape3d/RoundRectShape3D.ts:38](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L38)

##### Returns

`number`

#### Set Signature

> **set** **height**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/RoundRectShape3D.ts:41](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L41)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### radius

#### Get Signature

> **get** **radius**(): `number`

Defined in: [packages/graphic/renderer/shape3d/RoundRectShape3D.ts:48](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L48)

##### Returns

`number`

#### Set Signature

> **set** **radius**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/RoundRectShape3D.ts:51](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L51)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### cornerSegment

#### Get Signature

> **get** **cornerSegment**(): `number`

Defined in: [packages/graphic/renderer/shape3d/RoundRectShape3D.ts:58](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L58)

##### Returns

`number`

#### Set Signature

> **set** **cornerSegment**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/RoundRectShape3D.ts:61](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L61)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### isRect

#### Get Signature

> **get** **isRect**(): `boolean`

Defined in: [packages/graphic/renderer/shape3d/RoundRectShape3D.ts:72](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L72)

##### Returns

`boolean`

***

### isChange

#### Get Signature

> **get** **isChange**(): `boolean`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:120](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L120)

##### Returns

`boolean`

#### Inherited from

[`Shape3D`](Shape3D.md).[`isChange`](Shape3D.md#ischange)

***

### lineColor

#### Get Signature

> **get** **lineColor**(): `Color`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:135](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L135)

##### Returns

`Color`

#### Set Signature

> **set** **lineColor**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:130](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L130)

##### Parameters

###### value

`Color`

##### Returns

`void`

#### Inherited from

[`Shape3D`](Shape3D.md).[`lineColor`](Shape3D.md#linecolor)

***

### fillColor

#### Get Signature

> **get** **fillColor**(): `Color`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:144](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L144)

##### Returns

`Color`

#### Set Signature

> **set** **fillColor**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:139](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L139)

##### Parameters

###### value

`Color`

##### Returns

`void`

#### Inherited from

[`Shape3D`](Shape3D.md).[`fillColor`](Shape3D.md#fillcolor)

***

### lineTextureID

#### Get Signature

> **get** **lineTextureID**(): `number`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:148](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L148)

##### Returns

`number`

#### Set Signature

> **set** **lineTextureID**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:151](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L151)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Shape3D`](Shape3D.md).[`lineTextureID`](Shape3D.md#linetextureid)

***

### fillTextureID

#### Get Signature

> **get** **fillTextureID**(): `number`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:157](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L157)

##### Returns

`number`

#### Set Signature

> **set** **fillTextureID**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:160](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L160)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Shape3D`](Shape3D.md).[`fillTextureID`](Shape3D.md#filltextureid)

***

### fillRotation

#### Get Signature

> **get** **fillRotation**(): `number`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:167](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L167)

##### Returns

`number`

#### Set Signature

> **set** **fillRotation**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:170](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L170)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Shape3D`](Shape3D.md).[`fillRotation`](Shape3D.md#fillrotation)

***

### shapeOrder

#### Get Signature

> **get** **shapeOrder**(): `number`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:177](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L177)

##### Returns

`number`

#### Set Signature

> **set** **shapeOrder**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:180](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L180)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Shape3D`](Shape3D.md).[`shapeOrder`](Shape3D.md#shapeorder)

***

### srcPointStart

#### Get Signature

> **get** **srcPointStart**(): `number`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:188](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L188)

##### Returns

`number`

#### Set Signature

> **set** **srcPointStart**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:191](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L191)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Shape3D`](Shape3D.md).[`srcPointStart`](Shape3D.md#srcpointstart)

***

### srcPointCount

#### Get Signature

> **get** **srcPointCount**(): `number`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:198](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L198)

##### Returns

`number`

#### Inherited from

[`Shape3D`](Shape3D.md).[`srcPointCount`](Shape3D.md#srcpointcount)

***

### srcIndexStart

#### Get Signature

> **get** **srcIndexStart**(): `number`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:202](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L202)

##### Returns

`number`

#### Set Signature

> **set** **srcIndexStart**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:205](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L205)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Shape3D`](Shape3D.md).[`srcIndexStart`](Shape3D.md#srcindexstart)

***

### srcIndexCount

#### Get Signature

> **get** **srcIndexCount**(): `number`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:212](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L212)

##### Returns

`number`

#### Inherited from

[`Shape3D`](Shape3D.md).[`srcIndexCount`](Shape3D.md#srcindexcount)

***

### destPointStart

#### Get Signature

> **get** **destPointStart**(): `number`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:216](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L216)

##### Returns

`number`

#### Set Signature

> **set** **destPointStart**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:219](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L219)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Shape3D`](Shape3D.md).[`destPointStart`](Shape3D.md#destpointstart)

***

### destPointCount

#### Get Signature

> **get** **destPointCount**(): `number`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:225](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L225)

##### Returns

`number`

#### Inherited from

[`Shape3D`](Shape3D.md).[`destPointCount`](Shape3D.md#destpointcount)

***

### points3D

#### Get Signature

> **get** **points3D**(): [`Point3D`](Point3D.md)[]

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:229](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L229)

##### Returns

[`Point3D`](Point3D.md)[]

#### Set Signature

> **set** **points3D**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:232](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L232)

##### Parameters

###### value

[`Point3D`](Point3D.md)[]

##### Returns

`void`

#### Inherited from

[`Shape3D`](Shape3D.md).[`points3D`](Shape3D.md#points3d)

***

### isClosed

#### Get Signature

> **get** **isClosed**(): `boolean`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:238](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L238)

##### Returns

`boolean`

#### Set Signature

> **set** **isClosed**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:241](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L241)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Shape3D`](Shape3D.md).[`isClosed`](Shape3D.md#isclosed)

***

### fill

#### Get Signature

> **get** **fill**(): `boolean`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:248](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L248)

##### Returns

`boolean`

#### Set Signature

> **set** **fill**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:251](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L251)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Path2DShape3D`](Path2DShape3D.md).[`fill`](Path2DShape3D.md#fill)

***

### line

#### Get Signature

> **get** **line**(): `boolean`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:257](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L257)

##### Returns

`boolean`

#### Set Signature

> **set** **line**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:260](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L260)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Path2DShape3D`](Path2DShape3D.md).[`line`](Path2DShape3D.md#line)

***

### lineWidth

#### Get Signature

> **get** **lineWidth**(): `number`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:267](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L267)

##### Returns

`number`

#### Set Signature

> **set** **lineWidth**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:271](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L271)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Path2DShape3D`](Path2DShape3D.md).[`lineWidth`](Path2DShape3D.md#linewidth)

***

### lineUVRect

#### Get Signature

> **get** **lineUVRect**(): `Vector4`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:288](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L288)

x: u offset of line.
y: v offset of line.
z: u scale of line.
w: v scale of line.

##### Memberof

Shape3D

##### Returns

`Vector4`

#### Set Signature

> **set** **lineUVRect**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:291](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L291)

##### Parameters

###### value

`Vector4`

##### Returns

`void`

#### Inherited from

[`Shape3D`](Shape3D.md).[`lineUVRect`](Shape3D.md#lineuvrect)

***

### fillUVRect

#### Get Signature

> **get** **fillUVRect**(): `Vector4`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:305](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L305)

x: u offset of filled area.
y: v offset of filled area.
z: u scale of filled area.
w: v scale of filled area.

##### Memberof

Shape3D

##### Returns

`Vector4`

#### Set Signature

> **set** **fillUVRect**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:308](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L308)

##### Parameters

###### value

`Vector4`

##### Returns

`void`

#### Inherited from

[`Shape3D`](Shape3D.md).[`fillUVRect`](Shape3D.md#filluvrect)

***

### uvSpeed

#### Get Signature

> **get** **uvSpeed**(): `Vector4`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:322](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L322)

x: u speed of filled area.
y: v speed of filled area.
z: u speed of line.
w: v speed of line.

##### Memberof

Shape3D

##### Returns

`Vector4`

#### Set Signature

> **set** **uvSpeed**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:325](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L325)

##### Parameters

###### value

`Vector4`

##### Returns

`void`

#### Inherited from

[`Shape3D`](Shape3D.md).[`uvSpeed`](Shape3D.md#uvspeed)

## Methods

### set()

> **set**(`width`, `height`, `radius`, `lineWidth`, `fill`, `line`, `cornerSegment?`): `void`

Defined in: [packages/graphic/renderer/shape3d/RoundRectShape3D.ts:19](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L19)

#### Parameters

##### width

`number`

##### height

`number`

##### radius

`number`

##### lineWidth

`number`

##### fill

`boolean`

##### line

`boolean`

##### cornerSegment?

`number` = `10`

#### Returns

`void`

***

### calcRequireSource()

> **calcRequireSource**(): `void`

Defined in: [packages/graphic/renderer/shape3d/RoundRectShape3D.ts:68](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/RoundRectShape3D.ts#L68)

#### Returns

`void`

#### Overrides

[`Shape3D`](Shape3D.md).[`calcRequireSource`](Shape3D.md#calcrequiresource)

***

### writeData()

> **writeData**(): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:124](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L124)

#### Returns

`void`

#### Inherited from

[`Shape3D`](Shape3D.md).[`writeData`](Shape3D.md#writedata)

***

### clean()

> **clean**(): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:330](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L330)

#### Returns

`void`

#### Inherited from

[`Shape3D`](Shape3D.md).[`clean`](Shape3D.md#clean)
