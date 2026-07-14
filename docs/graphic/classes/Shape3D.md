[**@orillusion/graphic**](../README.md)

***

# Class: Shape3D

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:83](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L83)

## Extended by

- [`RoundRectShape3D`](RoundRectShape3D.md)
- [`EllipseShape3D`](EllipseShape3D.md)
- [`CircleShape3D`](CircleShape3D.md)
- [`LineShape3D`](LineShape3D.md)

## Constructors

### Constructor

> **new Shape3D**(`structs`, `sharedPoints`, `sharedIndecies`, `matrixIndex`): `Shape3D`

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

`Shape3D`

## Properties

### shapeIndex

> `readonly` **shapeIndex**: `number` = `0`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:109](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L109)

***

### shapeType

> `readonly` **shapeType**: `number` = `ShapeTypeEnum.None`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:110](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L110)

***

### computeEveryFrame?

> `readonly` `optional` **computeEveryFrame?**: `boolean`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:111](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L111)

## Accessors

### isChange

#### Get Signature

> **get** **isChange**(): `boolean`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:120](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L120)

##### Returns

`boolean`

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

***

### srcPointCount

#### Get Signature

> **get** **srcPointCount**(): `number`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:198](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L198)

##### Returns

`number`

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

***

### srcIndexCount

#### Get Signature

> **get** **srcIndexCount**(): `number`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:212](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L212)

##### Returns

`number`

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

***

### destPointCount

#### Get Signature

> **get** **destPointCount**(): `number`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:225](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L225)

##### Returns

`number`

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

## Methods

### writeData()

> **writeData**(): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:124](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L124)

#### Returns

`void`

***

### clean()

> **clean**(): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:330](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L330)

#### Returns

`void`

***

### calcRequireSource()

> **calcRequireSource**(): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:396](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L396)

#### Returns

`void`
