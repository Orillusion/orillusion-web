# Class: OutLinePass

## Hierarchy

- [`MaterialPass`](MaterialPass.md)

  ↳ **`OutLinePass`**


### Properties

- [renderPasses](OutLinePass.md#renderpasses)
- [transparent](OutLinePass.md#transparent)
- [enable](OutLinePass.md#enable)
- [renderShader](OutLinePass.md#rendershader)

### Accessors

- [sort](OutLinePass.md#sort)
- [shaderID](OutLinePass.md#shaderid)
- [blendMode](OutLinePass.md#blendmode)
- [frontFace](OutLinePass.md#frontface)
- [doubleSide](OutLinePass.md#doubleside)
- [cullMode](OutLinePass.md#cullmode)
- [depthBias](OutLinePass.md#depthbias)
- [depthCompare](OutLinePass.md#depthcompare)
- [lineWeight](OutLinePass.md#lineweight)
- [baseColor](OutLinePass.md#basecolor)

### Methods

- [setShader](OutLinePass.md#setshader)
- [getShader](OutLinePass.md#getshader)
- [destroy](OutLinePass.md#destroy)
- [clone](OutLinePass.md#clone)
- [debug](OutLinePass.md#debug)

### Constructors

- [constructor](OutLinePass.md#constructor)

## Properties

### renderPasses

• **renderPasses**: `Map`<`RendererType`, [`MaterialPass`](MaterialPass.md)[]\>

#### Inherited from

[MaterialPass](MaterialPass.md).[renderPasses](MaterialPass.md#renderpasses)

#### Defined in

[src/engine/materials/MaterialPass.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L7)

___

### transparent

• **transparent**: `boolean` = `false`

是否透明

#### Inherited from

[MaterialPass](MaterialPass.md).[transparent](MaterialPass.md#transparent)

#### Defined in

[src/engine/materials/MaterialPass.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L13)

___

### enable

• **enable**: `boolean` = `true`

材质是否启用

#### Inherited from

[MaterialPass](MaterialPass.md).[enable](MaterialPass.md#enable)

#### Defined in

[src/engine/materials/MaterialPass.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L18)

___

### renderShader

• **renderShader**: [`RenderShader`](RenderShader.md)

#### Inherited from

[MaterialPass](MaterialPass.md).[renderShader](MaterialPass.md#rendershader)

#### Defined in

[src/engine/materials/MaterialPass.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L20)

## Accessors

### sort

• `get` **sort**(): `number`

#### Returns

`number`

#### Inherited from

MaterialPass.sort

#### Defined in

[src/engine/materials/MaterialPass.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L26)

• `set` **sort**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

MaterialPass.sort

#### Defined in

[src/engine/materials/MaterialPass.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L30)

___

### shaderID

• `get` **shaderID**(): `string`

#### Returns

`string`

#### Inherited from

MaterialPass.shaderID

#### Defined in

[src/engine/materials/MaterialPass.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L34)

• `set` **shaderID**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

MaterialPass.shaderID

#### Defined in

[src/engine/materials/MaterialPass.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L38)

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

获取混合模式

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Inherited from

MaterialPass.blendMode

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

#### Inherited from

MaterialPass.blendMode

#### Defined in

[src/engine/materials/MaterialPass.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L63)

___

### frontFace

• `get` **frontFace**(): `GPUFrontFace`

获取面朝向

#### Returns

`GPUFrontFace`

#### Inherited from

MaterialPass.frontFace

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

#### Inherited from

MaterialPass.frontFace

#### Defined in

[src/engine/materials/MaterialPass.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L79)

___

### doubleSide

• `get` **doubleSide**(): `boolean`

获取是否为双面模式

#### Returns

`boolean`

#### Inherited from

MaterialPass.doubleSide

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

#### Inherited from

MaterialPass.doubleSide

#### Defined in

[src/engine/materials/MaterialPass.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L93)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

获取剔除模式

#### Returns

`GPUCullMode`

#### Inherited from

MaterialPass.cullMode

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

#### Inherited from

MaterialPass.cullMode

#### Defined in

[src/engine/materials/MaterialPass.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L107)

___

### depthBias

• `get` **depthBias**(): `number`

#### Returns

`number`

#### Inherited from

MaterialPass.depthBias

#### Defined in

[src/engine/materials/MaterialPass.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L111)

• `set` **depthBias**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

MaterialPass.depthBias

#### Defined in

[src/engine/materials/MaterialPass.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L115)

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

获取剔除模式

#### Returns

`GPUCompareFunction`

#### Inherited from

MaterialPass.depthCompare

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

#### Inherited from

MaterialPass.depthCompare

#### Defined in

[src/engine/materials/MaterialPass.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L129)

___

### lineWeight

• `get` **lineWeight**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/materials/effectPass/OutLinePass.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/effectPass/OutLinePass.ts#L31)

• `set` **lineWeight**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/materials/effectPass/OutLinePass.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/effectPass/OutLinePass.ts#L35)

___

### baseColor

• `get` **baseColor**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

[src/engine/materials/effectPass/OutLinePass.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/effectPass/OutLinePass.ts#L41)

• `set` **baseColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/engine/materials/effectPass/OutLinePass.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/effectPass/OutLinePass.ts#L44)

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

#### Inherited from

[MaterialPass](MaterialPass.md).[setShader](MaterialPass.md#setshader)

#### Defined in

[src/engine/materials/MaterialPass.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L42)

___

### getShader

▸ **getShader**(): [`RenderShader`](RenderShader.md)

#### Returns

[`RenderShader`](RenderShader.md)

#### Inherited from

[MaterialPass](MaterialPass.md).[getShader](MaterialPass.md#getshader)

#### Defined in

[src/engine/materials/MaterialPass.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L49)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[MaterialPass](MaterialPass.md).[destroy](MaterialPass.md#destroy)

#### Defined in

[src/engine/materials/MaterialPass.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L133)

___

### clone

▸ **clone**(): [`MaterialPass`](MaterialPass.md)

#### Returns

[`MaterialPass`](MaterialPass.md)

#### Inherited from

[MaterialPass](MaterialPass.md).[clone](MaterialPass.md#clone)

#### Defined in

[src/engine/materials/MaterialPass.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L148)

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Inherited from

[MaterialPass](MaterialPass.md).[debug](MaterialPass.md#debug)

#### Defined in

[src/engine/materials/MaterialPass.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L152)

## Constructors

### constructor

• **new OutLinePass**(`lineWeight?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `lineWeight` | `number` | `10` |

#### Overrides

[MaterialPass](MaterialPass.md).[constructor](MaterialPass.md#constructor)

#### Defined in

[src/engine/materials/effectPass/OutLinePass.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/effectPass/OutLinePass.ts#L7)
