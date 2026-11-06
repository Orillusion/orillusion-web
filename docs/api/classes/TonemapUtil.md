[**@orillusion/core**](../README.md)

***

# Class: TonemapUtil

Defined in: [src/util/TonemapUtil.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/util/TonemapUtil.ts#L10)

CPU reference of the curves in `TonemapShader`, kept line-for-line in sync
with the WGSL. Used to map a mode name to the shader's integer selector,
and by tooling / tests that need the expected LDR value for an HDR input
(color pickers, LUT bakers, GPU-vs-CPU validation).

## Constructors

### Constructor

> **new TonemapUtil**(): `TonemapUtil`

#### Returns

`TonemapUtil`

## Properties

### MODE\_INDEX

> `readonly` `static` **MODE\_INDEX**: `Record`\<[`TonemapMode`](../type-aliases/TonemapMode.md), `number`\>

Defined in: [src/util/TonemapUtil.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/util/TonemapUtil.ts#L12)

Shader selector per mode. Order is part of the shader contract.

***

### MODES

> `readonly` `static` **MODES**: [`TonemapMode`](../type-aliases/TonemapMode.md)[]

Defined in: [src/util/TonemapUtil.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/util/TonemapUtil.ts#L22)

All mode names, in selector order.

## Methods

### modeIndex()

> `static` **modeIndex**(`mode`): `number`

Defined in: [src/util/TonemapUtil.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/util/TonemapUtil.ts#L25)

Selector for a mode name; unknown names fall back to ACES (the engine default).

#### Parameters

##### mode

`string`

#### Returns

`number`

***

### apply()

> `static` **apply**(`mode`, `rgb`, `exposure?`, `whitePoint?`): \[`number`, `number`, `number`\]

Defined in: [src/util/TonemapUtil.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/util/TonemapUtil.ts#L34)

Apply exposure + tone curve to a scene-linear RGB triple.

#### Parameters

##### mode

[`TonemapMode`](../type-aliases/TonemapMode.md)

##### rgb

\[`number`, `number`, `number`\]

##### exposure?

`number` = `1`

##### whitePoint?

`number` = `4`

#### Returns

\[`number`, `number`, `number`\]

linear display-referred RGB (before the sRGB encode)
