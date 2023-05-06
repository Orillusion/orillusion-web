# Class: MaterialPass


### Constructors

- [constructor](MaterialPass.md#constructor)

### Properties

- [renderPasses](MaterialPass.md#renderpasses)
- [enable](MaterialPass.md#enable)
- [renderShader](MaterialPass.md#rendershader)

### Accessors

- [sort](MaterialPass.md#sort)
- [shaderID](MaterialPass.md#shaderid)
- [blendMode](MaterialPass.md#blendmode)
- [transparent](MaterialPass.md#transparent)
- [frontFace](MaterialPass.md#frontface)
- [doubleSide](MaterialPass.md#doubleside)
- [cullMode](MaterialPass.md#cullmode)
- [depthBias](MaterialPass.md#depthbias)
- [depthCompare](MaterialPass.md#depthcompare)

### Methods

- [setShader](MaterialPass.md#setshader)
- [getShader](MaterialPass.md#getshader)
- [destroy](MaterialPass.md#destroy)
- [clone](MaterialPass.md#clone)
- [debug](MaterialPass.md#debug)

## Constructors

### constructor

• **new MaterialPass**()

## Properties

### renderPasses

• **renderPasses**: `Map`<`RendererType`, [`MaterialPass`](MaterialPass.md)[]\>

#### Defined in

[src/materials/MaterialPass.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L8)

___

### enable

• **enable**: `boolean` = `true`

whether the pass is enable

#### Defined in

[src/materials/MaterialPass.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L13)

___

### renderShader

• **renderShader**: [`RenderShader`](RenderShader.md)

#### Defined in

[src/materials/MaterialPass.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L15)

## Accessors

### sort

• `get` **sort**(): `number`

#### Returns

`number`

#### Defined in

[src/materials/MaterialPass.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L23)

• `set` **sort**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/materials/MaterialPass.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L27)

___

### shaderID

• `get` **shaderID**(): `string`

#### Returns

`string`

#### Defined in

[src/materials/MaterialPass.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L31)

• `set` **shaderID**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/materials/MaterialPass.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L35)

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

Get blend mode, see [BlendMode](../enums/BlendMode.md)

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Defined in

[src/materials/MaterialPass.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L53)

• `set` **blendMode**(`value`): `void`

Set blend mode, see [BlendMode](../enums/BlendMode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendMode`](../enums/BlendMode.md) |

#### Returns

`void`

#### Defined in

[src/materials/MaterialPass.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L60)

___

### transparent

• `get` **transparent**(): `boolean`

Get whether use transparent mode to render

#### Returns

`boolean`

#### Defined in

[src/materials/MaterialPass.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L68)

• `set` **transparent**(`value`): `void`

Set whether use transparent mode to render

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/materials/MaterialPass.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L75)

___

### frontFace

• `get` **frontFace**(): `GPUFrontFace`

Return GPUFrontFace

#### Returns

`GPUFrontFace`

#### Defined in

[src/materials/MaterialPass.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L82)

• `set` **frontFace**(`value`): `void`

Set GPUFrontFace

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFrontFace` |

#### Returns

`void`

#### Defined in

[src/materials/MaterialPass.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L89)

___

### doubleSide

• `get` **doubleSide**(): `boolean`

Get whether use double side to render object

#### Returns

`boolean`

#### Defined in

[src/materials/MaterialPass.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L96)

• `set` **doubleSide**(`value`): `void`

Set whether use double side to render object

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/materials/MaterialPass.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L103)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

get cull mode, see GPUCullMode

#### Returns

`GPUCullMode`

#### Defined in

[src/materials/MaterialPass.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L110)

• `set` **cullMode**(`value`): `void`

set cull mode, see GPUCullMode

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Defined in

[src/materials/MaterialPass.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L117)

___

### depthBias

• `get` **depthBias**(): `number`

#### Returns

`number`

#### Defined in

[src/materials/MaterialPass.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L121)

• `set` **depthBias**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/materials/MaterialPass.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L125)

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

get depth compare mode, see GPUCompareFunction

#### Returns

`GPUCompareFunction`

#### Defined in

[src/materials/MaterialPass.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L132)

• `set` **depthCompare**(`value`): `void`

set depth compare mode, see GPUCompareFunction

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Defined in

[src/materials/MaterialPass.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L139)

## Methods

### setShader

▸ **setShader**(`vs`, `fs`): [`RenderShader`](RenderShader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vs` | `string` |
| `fs` | `string` |

#### Returns

[`RenderShader`](RenderShader.md)

#### Defined in

[src/materials/MaterialPass.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L39)

___

### getShader

▸ **getShader**(): [`RenderShader`](RenderShader.md)

#### Returns

[`RenderShader`](RenderShader.md)

#### Defined in

[src/materials/MaterialPass.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L46)

___

### destroy

▸ **destroy**(): `void`

release material pass

#### Returns

`void`

#### Defined in

[src/materials/MaterialPass.ts:146](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L146)

___

### clone

▸ **clone**(): [`MaterialPass`](MaterialPass.md)

#### Returns

[`MaterialPass`](MaterialPass.md)

#### Defined in

[src/materials/MaterialPass.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L161)

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

[src/materials/MaterialPass.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L165)
