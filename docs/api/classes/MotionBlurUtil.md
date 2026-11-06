[**@orillusion/core**](../README.md)

***

# Class: MotionBlurUtil

Defined in: [src/util/MotionBlurUtil.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/util/MotionBlurUtil.ts#L8)

CPU mirror of the velocity math in `MotionBlur_cs`, for tooling and tests.

## Constructors

### Constructor

> **new MotionBlurUtil**(): `MotionBlurUtil`

#### Returns

`MotionBlurUtil`

## Methods

### projectToUV()

> `static` **projectToUV**(`worldPos`, `viewProj`): \[`number`, `number`\]

Defined in: [src/util/MotionBlurUtil.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/util/MotionBlurUtil.ts#L13)

Project a world position to screen UV (0..1, origin top-left) with a
column-major view-projection matrix. Returns null behind the camera.

#### Parameters

##### worldPos

[`Vector3`](Vector3.md)

##### viewProj

[`Matrix4`](Matrix4.md)

#### Returns

\[`number`, `number`\]

***

### velocityPixels()

> `static` **velocityPixels**(`worldPos`, `currViewProj`, `prevViewProj`, `width`, `height`, `scale?`, `maxBlurPixels?`): \[`number`, `number`\]

Defined in: [src/util/MotionBlurUtil.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/util/MotionBlurUtil.ts#L28)

Blur vector in pixels for a world-space point: how far it moved on
screen between the previous and the current view-projection, times
`scale`, clamped to `maxBlurPixels`.

#### Parameters

##### worldPos

[`Vector3`](Vector3.md)

##### currViewProj

[`Matrix4`](Matrix4.md)

##### prevViewProj

[`Matrix4`](Matrix4.md)

##### width

`number`

##### height

`number`

##### scale?

`number` = `1`

##### maxBlurPixels?

`number` = `Infinity`

#### Returns

\[`number`, `number`\]

***

### shutterScale()

> `static` **shutterScale**(`intensity`, `deltaMs`, `frameRateIndependent`): `number`

Defined in: [src/util/MotionBlurUtil.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/util/MotionBlurUtil.ts#L39)

Shutter scale actually sent to the shader for a given frame time.

#### Parameters

##### intensity

`number`

##### deltaMs

`number`

##### frameRateIndependent

`boolean`

#### Returns

`number`
