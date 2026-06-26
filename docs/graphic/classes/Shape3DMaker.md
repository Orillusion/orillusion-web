[**@orillusion/graphic**](../README.md)

***

# Class: Shape3DMaker

Defined in: [packages/graphic/renderer/Shape3DMaker.ts:21](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L21)

A help class for quickly creating Shape3D related objects

## Export

Shape3DMaker

## Constructors

### Constructor

> **new Shape3DMaker**(`renderer`): `Shape3DMaker`

Defined in: [packages/graphic/renderer/Shape3DMaker.ts:25](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L25)

#### Parameters

##### renderer

[`Shape3DRenderer`](Shape3DRenderer.md)

#### Returns

`Shape3DMaker`

## Accessors

### renderer

#### Get Signature

> **get** **renderer**(): [`Shape3DRenderer`](Shape3DRenderer.md)

Defined in: [packages/graphic/renderer/Shape3DMaker.ts:49](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L49)

##### Returns

[`Shape3DRenderer`](Shape3DRenderer.md)

## Methods

### makeRenderer()

> `static` **makeRenderer**(`name`, `textureList`, `scene`, `maxNodeCount?`, `triangleEachNode?`): `Shape3DMaker`

Defined in: [packages/graphic/renderer/Shape3DMaker.ts:40](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L40)

#### Parameters

##### name

`string`

key of Shape3DRenderer.

##### textureList

`BitmapTexture2DArray`

textures used by node.

##### scene

`Scene3D`

Scene3D

##### maxNodeCount?

`number` = `1000`

Can accommodate the maximum number of nodes

##### triangleEachNode?

`number` = `24`

The maximum number of triangles included is triangleEachNode * maxNodeCount

#### Returns

`Shape3DMaker`

{Shape3DMaker}

#### Static

#### Memberof

Shape3DMaker

***

### ellipse()

> **ellipse**(`radiusX`, `radiusY`, `rotation`, `startAngle`, `endAngle`, `counterclockwise?`): [`EllipseShape3D`](EllipseShape3D.md)

Defined in: [packages/graphic/renderer/Shape3DMaker.ts:66](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L66)

Create an ellipse in Shape3DRenderer

#### Parameters

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

#### Returns

[`EllipseShape3D`](EllipseShape3D.md)

{EllipseShape3D}

#### Memberof

Shape3DMaker

***

### arc()

> **arc**(`radius`, `startAngle`, `endAngle`, `counterclockwise?`): [`CircleShape3D`](CircleShape3D.md)

Defined in: [packages/graphic/renderer/Shape3DMaker.ts:87](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L87)

Create an arc in Shape3DRenderer

#### Parameters

##### radius

`number`

##### startAngle

`number`

##### endAngle

`number`

##### counterclockwise?

`boolean`

#### Returns

[`CircleShape3D`](CircleShape3D.md)

{CircleShape3D}

#### Memberof

Shape3DMaker

***

### line()

> **line**(`points`): [`LineShape3D`](LineShape3D.md)

Defined in: [packages/graphic/renderer/Shape3DMaker.ts:103](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L103)

Create line segments in Shape3DRenderer

#### Parameters

##### points

`Vector2`[]

#### Returns

[`LineShape3D`](LineShape3D.md)

#### Memberof

Shape3DMaker

***

### quadraticCurve()

> **quadraticCurve**(`fx`, `fy`, `cpx`, `cpy`, `tx`, `ty`): [`QuadraticCurveShape3D`](QuadraticCurveShape3D.md)

Defined in: [packages/graphic/renderer/Shape3DMaker.ts:127](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L127)

Create a quadratic curve in Shape3DRenderer

#### Parameters

##### fx

`number`

##### fy

`number`

##### cpx

`number`

##### cpy

`number`

##### tx

`number`

##### ty

`number`

#### Returns

[`QuadraticCurveShape3D`](QuadraticCurveShape3D.md)

{QuadraticCurveShape3D}

#### Memberof

Shape3DMaker

***

### curve()

> **curve**(`fx`, `fy`, `cp1x`, `cp1y`, `cp2x`, `cp2y`, `tx`, `ty`): [`CurveShape3D`](CurveShape3D.md)

Defined in: [packages/graphic/renderer/Shape3DMaker.ts:149](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L149)

Create a curve in Shape3DRenderer

#### Parameters

##### fx

`number`

##### fy

`number`

##### cp1x

`number`

##### cp1y

`number`

##### cp2x

`number`

##### cp2y

`number`

##### tx

`number`

##### ty

`number`

#### Returns

[`CurveShape3D`](CurveShape3D.md)

{CurveShape3D}

#### Memberof

Shape3DMaker

***

### path2D()

> **path2D**(): [`Path2DShape3D`](Path2DShape3D.md)

Defined in: [packages/graphic/renderer/Shape3DMaker.ts:165](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L165)

Create a path2D in Shape3DRenderer. Through the Path2DShape3D, you can use the CanvasPath API for path drawing on xz plane.

#### Returns

[`Path2DShape3D`](Path2DShape3D.md)

{Path2DShape3D}

#### Memberof

Shape3DMaker

***

### path3D()

> **path3D**(): [`Path3DShape3D`](Path3DShape3D.md)

Defined in: [packages/graphic/renderer/Shape3DMaker.ts:175](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L175)

Create a path3D in Shape3DRenderer. Through the Path3DShape3D, you can use the similar CanvasPath API for path drawing in 3D space.

#### Returns

[`Path3DShape3D`](Path3DShape3D.md)

{Path3DShape3D}

#### Memberof

Shape3DMaker

***

### rect()

> **rect**(`w`, `h`): [`RoundRectShape3D`](RoundRectShape3D.md)

Defined in: [packages/graphic/renderer/Shape3DMaker.ts:187](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L187)

Create a rect in Shape3DRenderer

#### Parameters

##### w

`number`

##### h

`number`

#### Returns

[`RoundRectShape3D`](RoundRectShape3D.md)

{RoundRectShape3D}

#### Memberof

Shape3DMaker

***

### roundRect()

> **roundRect**(`w`, `h`, `radii?`): [`RoundRectShape3D`](RoundRectShape3D.md)

Defined in: [packages/graphic/renderer/Shape3DMaker.ts:206](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L206)

Create a RoundRect in Shape3DRenderer

#### Parameters

##### w

`number`

##### h

`number`

##### radii?

`number`

#### Returns

[`RoundRectShape3D`](RoundRectShape3D.md)

#### Memberof

Shape3DMaker
