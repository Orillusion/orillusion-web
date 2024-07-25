# Class: Shape3DMaker

A help class for quickly creating Shape3D related objects

**`Export`**

### Constructors

- [constructor](Shape3DMaker.md#constructor)

### Accessors

- [renderer](Shape3DMaker.md#renderer)

### Methods

- [makeRenderer](Shape3DMaker.md#makerenderer)
- [ellipse](Shape3DMaker.md#ellipse)
- [arc](Shape3DMaker.md#arc)
- [line](Shape3DMaker.md#line)
- [quadraticCurve](Shape3DMaker.md#quadraticcurve)
- [curve](Shape3DMaker.md#curve)
- [path2D](Shape3DMaker.md#path2d)
- [path3D](Shape3DMaker.md#path3d)
- [rect](Shape3DMaker.md#rect)
- [roundRect](Shape3DMaker.md#roundrect)

## Constructors

### constructor

• **new Shape3DMaker**(`renderer`): [`Shape3DMaker`](Shape3DMaker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`Shape3DRenderer`](Shape3DRenderer.md) |

#### Returns

[`Shape3DMaker`](Shape3DMaker.md)

#### Defined in

[packages/graphic/renderer/Shape3DMaker.ts:25](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L25)

## Accessors

### renderer

• `get` **renderer**(): [`Shape3DRenderer`](Shape3DRenderer.md)

#### Returns

[`Shape3DRenderer`](Shape3DRenderer.md)

#### Defined in

[packages/graphic/renderer/Shape3DMaker.ts:49](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L49)

## Methods

### makeRenderer

▸ **makeRenderer**(`name`, `textureList`, `scene`, `maxNodeCount?`, `triangleEachNode?`): [`Shape3DMaker`](Shape3DMaker.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | key of Shape3DRenderer. |
| `textureList` | `BitmapTexture2DArray` | `undefined` | textures used by node. |
| `scene` | `Scene3D` | `undefined` | Scene3D |
| `maxNodeCount?` | `number` | `1000` | Can accommodate the maximum number of nodes |
| `triangleEachNode?` | `number` | `24` | The maximum number of triangles included is triangleEachNode * maxNodeCount |

#### Returns

[`Shape3DMaker`](Shape3DMaker.md)

{Shape3DMaker}

**`Static`**

**`Memberof`**

Shape3DMaker

#### Defined in

[packages/graphic/renderer/Shape3DMaker.ts:40](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L40)

___

### ellipse

▸ **ellipse**(`radiusX`, `radiusY`, `rotation`, `startAngle`, `endAngle`, `counterclockwise?`): [`EllipseShape3D`](EllipseShape3D.md)

Create an ellipse in Shape3DRenderer

#### Parameters

| Name | Type |
| :------ | :------ |
| `radiusX` | `number` |
| `radiusY` | `number` |
| `rotation` | `number` |
| `startAngle` | `number` |
| `endAngle` | `number` |
| `counterclockwise?` | `boolean` |

#### Returns

[`EllipseShape3D`](EllipseShape3D.md)

{EllipseShape3D}

**`Memberof`**

Shape3DMaker

#### Defined in

[packages/graphic/renderer/Shape3DMaker.ts:66](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L66)

___

### arc

▸ **arc**(`radius`, `startAngle`, `endAngle`, `counterclockwise?`): [`CircleShape3D`](CircleShape3D.md)

Create an arc in Shape3DRenderer

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |
| `startAngle` | `number` |
| `endAngle` | `number` |
| `counterclockwise?` | `boolean` |

#### Returns

[`CircleShape3D`](CircleShape3D.md)

{CircleShape3D}

**`Memberof`**

Shape3DMaker

#### Defined in

[packages/graphic/renderer/Shape3DMaker.ts:87](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L87)

___

### line

▸ **line**(`points`): [`LineShape3D`](LineShape3D.md)

Create line segments in Shape3DRenderer

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | `Vector2`[] |

#### Returns

[`LineShape3D`](LineShape3D.md)

**`Memberof`**

Shape3DMaker

#### Defined in

[packages/graphic/renderer/Shape3DMaker.ts:103](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L103)

___

### quadraticCurve

▸ **quadraticCurve**(`fx`, `fy`, `cpx`, `cpy`, `tx`, `ty`): [`QuadraticCurveShape3D`](QuadraticCurveShape3D.md)

Create a quadratic curve in Shape3DRenderer

#### Parameters

| Name | Type |
| :------ | :------ |
| `fx` | `number` |
| `fy` | `number` |
| `cpx` | `number` |
| `cpy` | `number` |
| `tx` | `number` |
| `ty` | `number` |

#### Returns

[`QuadraticCurveShape3D`](QuadraticCurveShape3D.md)

{QuadraticCurveShape3D}

**`Memberof`**

Shape3DMaker

#### Defined in

[packages/graphic/renderer/Shape3DMaker.ts:127](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L127)

___

### curve

▸ **curve**(`fx`, `fy`, `cp1x`, `cp1y`, `cp2x`, `cp2y`, `tx`, `ty`): [`CurveShape3D`](CurveShape3D.md)

Create a curve in Shape3DRenderer

#### Parameters

| Name | Type |
| :------ | :------ |
| `fx` | `number` |
| `fy` | `number` |
| `cp1x` | `number` |
| `cp1y` | `number` |
| `cp2x` | `number` |
| `cp2y` | `number` |
| `tx` | `number` |
| `ty` | `number` |

#### Returns

[`CurveShape3D`](CurveShape3D.md)

{CurveShape3D}

**`Memberof`**

Shape3DMaker

#### Defined in

[packages/graphic/renderer/Shape3DMaker.ts:149](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L149)

___

### path2D

▸ **path2D**(): [`Path2DShape3D`](Path2DShape3D.md)

Create a path2D in Shape3DRenderer. Through the Path2DShape3D, you can use the CanvasPath API for path drawing on xz plane.

#### Returns

[`Path2DShape3D`](Path2DShape3D.md)

{Path2DShape3D}

**`Memberof`**

Shape3DMaker

#### Defined in

[packages/graphic/renderer/Shape3DMaker.ts:165](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L165)

___

### path3D

▸ **path3D**(): [`Path3DShape3D`](Path3DShape3D.md)

Create a path3D in Shape3DRenderer. Through the Path3DShape3D, you can use the similar CanvasPath API for path drawing in 3D space.

#### Returns

[`Path3DShape3D`](Path3DShape3D.md)

{Path3DShape3D}

**`Memberof`**

Shape3DMaker

#### Defined in

[packages/graphic/renderer/Shape3DMaker.ts:175](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L175)

___

### rect

▸ **rect**(`w`, `h`): [`RoundRectShape3D`](RoundRectShape3D.md)

Create a rect in Shape3DRenderer

#### Parameters

| Name | Type |
| :------ | :------ |
| `w` | `number` |
| `h` | `number` |

#### Returns

[`RoundRectShape3D`](RoundRectShape3D.md)

{RoundRectShape3D}

**`Memberof`**

Shape3DMaker

#### Defined in

[packages/graphic/renderer/Shape3DMaker.ts:187](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L187)

___

### roundRect

▸ **roundRect**(`w`, `h`, `radii?`): [`RoundRectShape3D`](RoundRectShape3D.md)

Create a RoundRect in Shape3DRenderer

#### Parameters

| Name | Type |
| :------ | :------ |
| `w` | `number` |
| `h` | `number` |
| `radii?` | `number` |

#### Returns

[`RoundRectShape3D`](RoundRectShape3D.md)

**`Memberof`**

Shape3DMaker

#### Defined in

[packages/graphic/renderer/Shape3DMaker.ts:206](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Shape3DMaker.ts#L206)
