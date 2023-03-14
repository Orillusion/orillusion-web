# Class: MaterialPass

## Hierarchy

- **`MaterialPass`**

  ↳ [`OutLinePass`](OutLinePass.md)


### Constructors

- [constructor](MaterialPass.md#constructor)

### Properties

- [renderPasses](MaterialPass.md#renderpasses)
- [transparent](MaterialPass.md#transparent)
- [enable](MaterialPass.md#enable)
- [renderShader](MaterialPass.md#rendershader)

### Accessors

- [sort](MaterialPass.md#sort)
- [shaderID](MaterialPass.md#shaderid)
- [blendMode](MaterialPass.md#blendmode)
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

[src/engine/materials/MaterialPass.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L7)

___

### transparent

• **transparent**: `boolean` = `false`

是否透明

#### Defined in

[src/engine/materials/MaterialPass.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L13)

___

### enable

• **enable**: `boolean` = `true`

材质是否启用

#### Defined in

[src/engine/materials/MaterialPass.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L18)

___

### renderShader

• **renderShader**: [`RenderShader`](RenderShader.md)

#### Defined in

[src/engine/materials/MaterialPass.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L20)

## Accessors

### sort

• `get` **sort**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/materials/MaterialPass.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L26)

• `set` **sort**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/materials/MaterialPass.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L30)

___

### shaderID

• `get` **shaderID**(): `string`

#### Returns

`string`

#### Defined in

[src/engine/materials/MaterialPass.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L34)

• `set` **shaderID**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/engine/materials/MaterialPass.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L38)

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

获取混合模式

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Defined in

[src/engine/materials/MaterialPass.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L56)

• `set` **blendMode**(`value`): `void`

设置混合模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendMode`](../enums/BlendMode.md) |

#### Returns

`void`

#### Defined in

[src/engine/materials/MaterialPass.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L63)

___

### frontFace

• `get` **frontFace**(): `GPUFrontFace`

获取面朝向

#### Returns

`GPUFrontFace`

#### Defined in

[src/engine/materials/MaterialPass.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L72)

• `set` **frontFace**(`value`): `void`

设置面朝向

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFrontFace` |

#### Returns

`void`

#### Defined in

[src/engine/materials/MaterialPass.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L79)

___

### doubleSide

• `get` **doubleSide**(): `boolean`

获取是否为双面模式

#### Returns

`boolean`

#### Defined in

[src/engine/materials/MaterialPass.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L86)

• `set` **doubleSide**(`value`): `void`

设置是否为双面模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/engine/materials/MaterialPass.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L93)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

获取剔除模式

#### Returns

`GPUCullMode`

#### Defined in

[src/engine/materials/MaterialPass.ts:100](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L100)

• `set` **cullMode**(`value`): `void`

设置剔除模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Defined in

[src/engine/materials/MaterialPass.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L107)

___

### depthBias

• `get` **depthBias**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/materials/MaterialPass.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L111)

• `set` **depthBias**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/materials/MaterialPass.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L115)

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

获取剔除模式

#### Returns

`GPUCompareFunction`

#### Defined in

[src/engine/materials/MaterialPass.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L122)

• `set` **depthCompare**(`value`): `void`

设置剔除模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Defined in

[src/engine/materials/MaterialPass.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L129)

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

[src/engine/materials/MaterialPass.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L42)

___

### getShader

▸ **getShader**(): [`RenderShader`](RenderShader.md)

#### Returns

[`RenderShader`](RenderShader.md)

#### Defined in

[src/engine/materials/MaterialPass.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L49)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/engine/materials/MaterialPass.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L133)

___

### clone

▸ **clone**(): [`MaterialPass`](MaterialPass.md)

#### Returns

[`MaterialPass`](MaterialPass.md)

#### Defined in

[src/engine/materials/MaterialPass.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L148)

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

[src/engine/materials/MaterialPass.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L152)
