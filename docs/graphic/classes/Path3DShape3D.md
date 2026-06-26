[**@orillusion/graphic**](../README.md)

***

# Class: Path3DShape3D

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:15](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L15)

Define class for drawing path in 3D space.
It implemented an API similar to CanvasPath.
Please ensure that the current Shape3D model matrix is identitied.

## Export

Path3DShape3D

## Extends

- [`LineShape3D`](LineShape3D.md)

## Constructors

### Constructor

> **new Path3DShape3D**(`structs`, `sharedPoints`, `sharedIndecies`, `matrixIndex`): `Path3DShape3D`

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:21](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L21)

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

`Path3DShape3D`

#### Overrides

[`LineShape3D`](LineShape3D.md).[`constructor`](LineShape3D.md#constructor)

## Properties

### shapeType

> `readonly` **shapeType**: `number`

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:18](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L18)

#### Overrides

[`LineShape3D`](LineShape3D.md).[`shapeType`](LineShape3D.md#shapetype)

***

### computeEveryFrame

> `readonly` **computeEveryFrame**: `boolean` = `true`

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:19](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L19)

#### Overrides

[`LineShape3D`](LineShape3D.md).[`computeEveryFrame`](LineShape3D.md#computeeveryframe)

***

### shapeIndex

> `readonly` **shapeIndex**: `number` = `0`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:109](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L109)

#### Inherited from

[`LineShape3D`](LineShape3D.md).[`shapeIndex`](LineShape3D.md#shapeindex)

## Accessors

### corner

#### Get Signature

> **get** **corner**(): `number`

Defined in: [packages/graphic/renderer/shape3d/LineShape3D.ts:20](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/LineShape3D.ts#L20)

##### Returns

`number`

#### Set Signature

> **set** **corner**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/LineShape3D.ts:23](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/LineShape3D.ts#L23)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`LineShape3D`](LineShape3D.md).[`corner`](LineShape3D.md#corner)

***

### lineJoin

#### Get Signature

> **get** **lineJoin**(): [`LineJoin`](../enumerations/LineJoin.md)

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:28](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L28)

##### Returns

[`LineJoin`](../enumerations/LineJoin.md)

#### Set Signature

> **set** **lineJoin**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:31](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L31)

##### Parameters

###### value

[`LineJoin`](../enumerations/LineJoin.md)

##### Returns

`void`

#### Overrides

[`LineShape3D`](LineShape3D.md).[`lineJoin`](LineShape3D.md#linejoin)

***

### isClosed

#### Get Signature

> **get** **isClosed**(): `boolean`

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:35](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L35)

##### Returns

`boolean`

#### Set Signature

> **set** **isClosed**(`value`): `void`

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:38](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L38)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Overrides

[`LineShape3D`](LineShape3D.md).[`isClosed`](LineShape3D.md#isclosed)

***

### isChange

#### Get Signature

> **get** **isChange**(): `boolean`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:120](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L120)

##### Returns

`boolean`

#### Inherited from

[`LineShape3D`](LineShape3D.md).[`isChange`](LineShape3D.md#ischange)

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

[`LineShape3D`](LineShape3D.md).[`lineColor`](LineShape3D.md#linecolor)

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

[`LineShape3D`](LineShape3D.md).[`fillColor`](LineShape3D.md#fillcolor)

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

[`LineShape3D`](LineShape3D.md).[`lineTextureID`](LineShape3D.md#linetextureid)

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

[`LineShape3D`](LineShape3D.md).[`fillTextureID`](LineShape3D.md#filltextureid)

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

[`LineShape3D`](LineShape3D.md).[`fillRotation`](LineShape3D.md#fillrotation)

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

[`LineShape3D`](LineShape3D.md).[`shapeOrder`](LineShape3D.md#shapeorder)

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

[`LineShape3D`](LineShape3D.md).[`srcPointStart`](LineShape3D.md#srcpointstart)

***

### srcPointCount

#### Get Signature

> **get** **srcPointCount**(): `number`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:198](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L198)

##### Returns

`number`

#### Inherited from

[`LineShape3D`](LineShape3D.md).[`srcPointCount`](LineShape3D.md#srcpointcount)

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

[`LineShape3D`](LineShape3D.md).[`srcIndexStart`](LineShape3D.md#srcindexstart)

***

### srcIndexCount

#### Get Signature

> **get** **srcIndexCount**(): `number`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:212](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L212)

##### Returns

`number`

#### Inherited from

[`LineShape3D`](LineShape3D.md).[`srcIndexCount`](LineShape3D.md#srcindexcount)

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

[`LineShape3D`](LineShape3D.md).[`destPointStart`](LineShape3D.md#destpointstart)

***

### destPointCount

#### Get Signature

> **get** **destPointCount**(): `number`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:225](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L225)

##### Returns

`number`

#### Inherited from

[`LineShape3D`](LineShape3D.md).[`destPointCount`](LineShape3D.md#destpointcount)

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

[`LineShape3D`](LineShape3D.md).[`points3D`](LineShape3D.md#points3d)

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

[`LineShape3D`](LineShape3D.md).[`fill`](LineShape3D.md#fill)

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

[`LineShape3D`](LineShape3D.md).[`line`](LineShape3D.md#line)

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

[`LineShape3D`](LineShape3D.md).[`lineWidth`](LineShape3D.md#linewidth)

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

[`LineShape3D`](LineShape3D.md).[`lineUVRect`](LineShape3D.md#lineuvrect)

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

[`LineShape3D`](LineShape3D.md).[`fillUVRect`](LineShape3D.md#filluvrect)

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

[`LineShape3D`](LineShape3D.md).[`uvSpeed`](LineShape3D.md#uvspeed)

## Methods

### sampleQuadraticCurve()

> **sampleQuadraticCurve**(`start`, `cp`, `end`, `t`, `ret?`): `vec3`

Defined in: [packages/graphic/renderer/shape3d/LineShape3D.ts:56](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/LineShape3D.ts#L56)

#### Parameters

##### start

`vec3`

##### cp

`vec3`

##### end

`vec3`

##### t

`number`

##### ret?

`vec3`

#### Returns

`vec3`

#### Inherited from

[`LineShape3D`](LineShape3D.md).[`sampleQuadraticCurve`](LineShape3D.md#samplequadraticcurve)

***

### sampleCurve()

> **sampleCurve**(`start`, `cp1`, `cp2`, `end`, `t`, `ret?`): `vec3`

Defined in: [packages/graphic/renderer/shape3d/LineShape3D.ts:66](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/LineShape3D.ts#L66)

#### Parameters

##### start

`vec3`

##### cp1

`vec3`

##### cp2

`vec3`

##### end

`vec3`

##### t

`number`

##### ret?

`vec3`

#### Returns

`vec3`

#### Inherited from

[`LineShape3D`](LineShape3D.md).[`sampleCurve`](LineShape3D.md#samplecurve)

***

### reset()

> **reset**(): `void`

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:43](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L43)

#### Returns

`void`

***

### calcRequireSource()

> **calcRequireSource**(): `void`

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:49](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L49)

#### Returns

`void`

#### Overrides

[`LineShape3D`](LineShape3D.md).[`calcRequireSource`](LineShape3D.md#calcrequiresource)

***

### arc()

> **arc**(`x`, `y`, `radius`, `startAngle`, `endAngle`, `counterclockwise?`, `segment?`, `height?`): `void`

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:54](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L54)

#### Parameters

##### x

`number`

##### y

`number`

##### radius

`number`

##### startAngle

`number`

##### endAngle

`number`

##### counterclockwise?

`boolean`

##### segment?

`number`

##### height?

`number`

#### Returns

`void`

***

### arcTo()

> **arcTo**(`ctrlX`, `ctrlY`, `toX`, `toY`, `radius`, `segment?`, `height?`): `void`

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:78](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L78)

#### Parameters

##### ctrlX

`number`

##### ctrlY

`number`

##### toX

`number`

##### toY

`number`

##### radius

`number`

##### segment?

`number`

##### height?

`number`

#### Returns

`void`

***

### bezierCurveTo()

> **bezierCurveTo**(`cp1x`, `cp1y`, `cp1h`, `cp2x`, `cp2y`, `cp2h`, `x`, `y`, `h`, `segment?`): `void`

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:112](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L112)

#### Parameters

##### cp1x

`number`

##### cp1y

`number`

##### cp1h

`number`

##### cp2x

`number`

##### cp2y

`number`

##### cp2h

`number`

##### x

`number`

##### y

`number`

##### h

`number`

##### segment?

`number`

#### Returns

`void`

***

### closePath()

> **closePath**(): `void`

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:137](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L137)

#### Returns

`void`

***

### ellipse()

> **ellipse**(`x`, `y`, `radiusX`, `radiusY`, `rotation`, `startAngle`, `endAngle`, `counterclockwise?`, `segment?`, `height?`): `void`

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:146](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L146)

#### Parameters

##### x

`number`

##### y

`number`

##### radiusX

`number`

##### radiusY

`number`

##### rotation

`number`

##### startAngle

`number`

##### endAngle

`number`

##### counterclockwise?

`boolean`

##### segment?

`number`

##### height?

`number`

#### Returns

`void`

***

### moveTo()

> **moveTo**(`x`, `y`, `h?`): `void`

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:182](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L182)

#### Parameters

##### x

`number`

##### y

`number`

##### h?

`number`

#### Returns

`void`

***

### quadraticCurveTo()

> **quadraticCurveTo**(`cpx`, `cpy`, `cph`, `x`, `y`, `h`, `segment?`): `void`

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:188](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L188)

#### Parameters

##### cpx

`number`

##### cpy

`number`

##### cph

`number`

##### x

`number`

##### y

`number`

##### h

`number`

##### segment?

`number`

#### Returns

`void`

***

### rect()

> **rect**(`x`, `y`, `w`, `h`, `height?`): `void`

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:210](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L210)

#### Parameters

##### x

`number`

##### y

`number`

##### w

`number`

##### h

`number`

##### height?

`number`

#### Returns

`void`

***

### roundRect()

> **roundRect**(`x`, `y`, `w`, `h`, `radii?`, `segment?`, `height?`): `void`

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:219](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L219)

#### Parameters

##### x

`number`

##### y

`number`

##### w

`number`

##### h

`number`

##### radii?

`number`

##### segment?

`number`

##### height?

`number`

#### Returns

`void`

***

### lineTo()

> **lineTo**(`x`, `y`, `h?`): `void`

Defined in: [packages/graphic/renderer/shape3d/Path3DShape3D.ts:263](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Path3DShape3D.ts#L263)

#### Parameters

##### x

`number`

##### y

`number`

##### h?

`number`

#### Returns

`void`

***

### writeData()

> **writeData**(): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:124](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L124)

#### Returns

`void`

#### Inherited from

[`LineShape3D`](LineShape3D.md).[`writeData`](LineShape3D.md#writedata)

***

### clean()

> **clean**(): `void`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:330](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L330)

#### Returns

`void`

#### Inherited from

[`LineShape3D`](LineShape3D.md).[`clean`](LineShape3D.md#clean)
