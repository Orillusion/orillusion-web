# Class: GlobalFog

screen space fog

## Hierarchy

- `PostBase`

  ↳ **`GlobalFog`**

### Constructors

- [constructor](GlobalFog.md#constructor)

### Properties

- [\_globalFog](GlobalFog.md#_globalfog)
- [enable](GlobalFog.md#enable)
- [postRenderer](GlobalFog.md#postrenderer)

### Accessors

- [fogType](GlobalFog.md#fogtype)
- [fogHeightScale](GlobalFog.md#fogheightscale)
- [start](GlobalFog.md#start)
- [end](GlobalFog.md#end)
- [ins](GlobalFog.md#ins)
- [density](GlobalFog.md#density)
- [skyRoughness](GlobalFog.md#skyroughness)
- [skyFactor](GlobalFog.md#skyfactor)
- [overrideSkyFactor](GlobalFog.md#overrideskyfactor)
- [falloff](GlobalFog.md#falloff)
- [rayLength](GlobalFog.md#raylength)
- [scatteringExponent](GlobalFog.md#scatteringexponent)
- [dirHeightLine](GlobalFog.md#dirheightline)

### Methods

- [onResize](GlobalFog.md#onresize)
- [destroy](GlobalFog.md#destroy)

## Constructors

### constructor

• **new GlobalFog**()

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L32)

## Properties

### \_globalFog

• **\_globalFog**: [`GlobalFogSetting`](../types/GlobalFogSetting.md)

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L30)

___

### enable

• **enable**: `boolean` = `true`

#### Inherited from

PostBase.enable

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L20)

___

### postRenderer

• **postRenderer**: `PostRenderer`

#### Inherited from

PostBase.postRenderer

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L21)

## Accessors

### fogType

• `get` **fogType**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L87)

• `set` **fogType**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L83)

___

### fogHeightScale

• `get` **fogHeightScale**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L94)

• `set` **fogHeightScale**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L90)

___

### start

• `get` **start**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L101)

• `set` **start**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L97)

___

### end

• `get` **end**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L108)

• `set` **end**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L104)

___

### ins

• `get` **ins**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L115)

• `set` **ins**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L111)

___

### density

• `get` **density**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L122)

• `set` **density**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L118)

___

### skyRoughness

• `get` **skyRoughness**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L129)

• `set` **skyRoughness**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L125)

___

### skyFactor

• `get` **skyFactor**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L136)

• `set` **skyFactor**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L132)

___

### overrideSkyFactor

• `get` **overrideSkyFactor**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L144)

• `set` **overrideSkyFactor**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L140)

___

### falloff

• `get` **falloff**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L168)

• `set` **falloff**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:163](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L163)

___

### rayLength

• `get` **rayLength**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L177)

• `set` **rayLength**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:172](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L172)

___

### scatteringExponent

• `get` **scatteringExponent**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:186](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L186)

• `set` **scatteringExponent**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:181](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L181)

___

### dirHeightLine

• `get` **dirHeightLine**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:195](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L195)

• `set` **dirHeightLine**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L190)

## Methods

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Inherited from

PostBase.onResize

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L73)

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

PostBase.destroy

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L87)
