# Class: GlobalFog

screen space fog

## Hierarchy

- `PostBase`

  ↳ **`GlobalFog`**

### Constructors

- [constructor](GlobalFog.md#constructor)

### Properties

- [fogOpTexture](GlobalFog.md#fogoptexture)
- [rtFrame](GlobalFog.md#rtframe)
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

• **new GlobalFog**(): [`GlobalFog`](GlobalFog.md)

#### Returns

[`GlobalFog`](GlobalFog.md)

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L37)

## Properties

### fogOpTexture

• **fogOpTexture**: `VirtualTexture`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L32)

___

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L91)

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

[src/gfx/renderJob/post/GlobalFog.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L118)

• `set` **fogType**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L115)

___

### fogHeightScale

• `get` **fogHeightScale**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L124)

• `set` **fogHeightScale**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L121)

___

### start

• `get` **start**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L130)

• `set` **start**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:127](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L127)

___

### end

• `get` **end**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L136)

• `set` **end**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L133)

___

### ins

• `get` **ins**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:142](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L142)

• `set` **ins**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L139)

___

### density

• `get` **density**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L148)

• `set` **density**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L145)

___

### skyRoughness

• `get` **skyRoughness**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:154](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L154)

• `set` **skyRoughness**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:151](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L151)

___

### skyFactor

• `get` **skyFactor**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L160)

• `set` **skyFactor**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:157](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L157)

___

### overrideSkyFactor

• `get` **overrideSkyFactor**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:167](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L167)

• `set` **overrideSkyFactor**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:164](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L164)

___

### falloff

• `get` **falloff**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:189](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L189)

• `set` **falloff**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:185](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L185)

___

### rayLength

• `get` **rayLength**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:197](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L197)

• `set` **rayLength**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:193](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L193)

___

### scatteringExponent

• `get` **scatteringExponent**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:205](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L205)

• `set` **scatteringExponent**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:201](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L201)

___

### dirHeightLine

• `get` **dirHeightLine**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:213](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L213)

• `set` **dirHeightLine**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:209](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L209)

## Methods

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

PostBase.onResize

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:254](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L254)

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
