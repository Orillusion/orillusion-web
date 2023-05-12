# Class: GlobalFog

screen space fog

## Hierarchy

- `PostBase`

  ↳ **`GlobalFog`**


### Constructors

- [constructor](GlobalFog.md#constructor)

### Methods

- [debug](GlobalFog.md#debug)
- [destroy](GlobalFog.md#destroy)

### Accessors

- [fogType](GlobalFog.md#fogtype)
- [height](GlobalFog.md#height)
- [start](GlobalFog.md#start)
- [end](GlobalFog.md#end)
- [ins](GlobalFog.md#ins)
- [density](GlobalFog.md#density)

### Properties

- [enable](GlobalFog.md#enable)
- [postRenderer](GlobalFog.md#postrenderer)

## Constructors

### constructor

• **new GlobalFog**()

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L26)

## Methods

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L69)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

PostBase.destroy

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L79)

## Accessors

### fogType

• `get` **fogType**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L74)

• `set` **fogType**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L71)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L80)

• `set` **height**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L77)

___

### start

• `get` **start**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L86)

• `set` **start**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L83)

___

### end

• `get` **end**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L92)

• `set` **end**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L89)

___

### ins

• `get` **ins**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L98)

• `set` **ins**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L95)

___

### density

• `get` **density**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L104)

• `set` **density**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GlobalFog.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L101)

## Properties

### enable

• **enable**: `boolean` = `true`

#### Inherited from

PostBase.enable

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L18)

___

### postRenderer

• **postRenderer**: `PostRenderer`

#### Inherited from

PostBase.postRenderer

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L19)
