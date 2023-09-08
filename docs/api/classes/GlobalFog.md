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

[src/gfx/renderJob/post/PostBase.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L19)

___

### postRenderer

• **postRenderer**: `PostRenderer`

#### Inherited from

PostBase.postRenderer

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L20)

## Accessors

### fogType

• `get` **fogType**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L84)

• `set` **fogType**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L80)

___

### fogHeightScale

• `get` **fogHeightScale**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L91)

• `set` **fogHeightScale**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L87)

___

### start

• `get` **start**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L98)

• `set` **start**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L94)

___

### end

• `get` **end**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L105)

• `set` **end**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L101)

___

### ins

• `get` **ins**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L112)

• `set` **ins**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L108)

___

### density

• `get` **density**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L119)

• `set` **density**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L115)

___

### skyRoughness

• `get` **skyRoughness**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L126)

• `set` **skyRoughness**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L122)

___

### skyFactor

• `get` **skyFactor**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L133)

• `set` **skyFactor**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L129)

___

### overrideSkyFactor

• `get` **overrideSkyFactor**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L141)

• `set` **overrideSkyFactor**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:137](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L137)

___

### falloff

• `get` **falloff**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:166](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L166)

• `set` **falloff**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L161)

___

### rayLength

• `get` **rayLength**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L175)

• `set` **rayLength**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:170](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L170)

___

### scatteringExponent

• `get` **scatteringExponent**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:184](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L184)

• `set` **scatteringExponent**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:179](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L179)

___

### dirHeightLine

• `get` **dirHeightLine**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:193](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L193)

• `set` **dirHeightLine**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:188](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L188)

## Methods

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

[src/gfx/renderJob/post/PostBase.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L81)
