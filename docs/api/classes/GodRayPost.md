# Class: GodRayPost

## Hierarchy

- `PostBase`

  ↳ **`GodRayPost`**

### Constructors

- [constructor](GodRayPost.md#constructor)

### Properties

- [rtFrame](GodRayPost.md#rtframe)
- [enable](GodRayPost.md#enable)
- [postRenderer](GodRayPost.md#postrenderer)

### Accessors

- [blendColor](GodRayPost.md#blendcolor)
- [rayMarchCount](GodRayPost.md#raymarchcount)
- [scatteringExponent](GodRayPost.md#scatteringexponent)
- [intensity](GodRayPost.md#intensity)

### Methods

- [onDetach](GodRayPost.md#ondetach)
- [onResize](GodRayPost.md#onresize)
- [destroy](GodRayPost.md#destroy)

## Constructors

### constructor

• **new GodRayPost**(): [`GodRayPost`](GodRayPost.md)

#### Returns

[`GodRayPost`](GodRayPost.md)

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/GodRayPost.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L45)

## Properties

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

[src/gfx/renderJob/post/GodRayPost.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L43)

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

### blendColor

• `get` **blendColor**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/gfx/renderJob/post/GodRayPost.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L64)

• `set` **blendColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GodRayPost.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L67)

___

### rayMarchCount

• `get` **rayMarchCount**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GodRayPost.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L70)

• `set` **rayMarchCount**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GodRayPost.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L73)

___

### scatteringExponent

• `get` **scatteringExponent**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GodRayPost.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L77)

• `set` **scatteringExponent**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GodRayPost.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L80)

___

### intensity

• `get` **intensity**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GodRayPost.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L84)

• `set` **intensity**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GodRayPost.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L87)

## Methods

### onDetach

▸ **onDetach**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

PostBase.onDetach

#### Defined in

[src/gfx/renderJob/post/GodRayPost.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L59)

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

PostBase.onResize

#### Defined in

[src/gfx/renderJob/post/GodRayPost.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L132)

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
