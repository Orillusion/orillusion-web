# Class: OutlinePost

post effect out line 
OutlinePostManager,
```
      //setting
      let cfg = {@link Engine3D.setting.render.postProcessing.outline};
        let view = new View3D();
       view.scene = this.scene;
       view.camera = mainCamera;
       
      
      Engine3D.startRender(renderJob);
```

## Hierarchy

- `PostBase`

  ↳ **`OutlinePost`**

### Constructors

- [constructor](OutlinePost.md#constructor)

### Properties

- [lowTex](OutlinePost.md#lowtex)
- [outlineCompute](OutlinePost.md#outlinecompute)
- [blendCompute](OutlinePost.md#blendcompute)
- [slotsArray](OutlinePost.md#slotsarray)
- [entitiesArray](OutlinePost.md#entitiesarray)
- [entitiesBuffer](OutlinePost.md#entitiesbuffer)
- [weightBuffer](OutlinePost.md#weightbuffer)
- [lowTexSize](OutlinePost.md#lowtexsize)
- [oldOutlineColor](OutlinePost.md#oldoutlinecolor)
- [rtFrame](OutlinePost.md#rtframe)
- [enable](OutlinePost.md#enable)
- [postRenderer](OutlinePost.md#postrenderer)

### Accessors

- [outlinePixel](OutlinePost.md#outlinepixel)
- [fadeOutlinePixel](OutlinePost.md#fadeoutlinepixel)
- [strength](OutlinePost.md#strength)
- [useAddMode](OutlinePost.md#useaddmode)

### Methods

- [destroy](OutlinePost.md#destroy)

## Constructors

### constructor

• **new OutlinePost**()

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L78)

## Properties

### lowTex

• **lowTex**: `VirtualTexture`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L45)

___

### outlineCompute

• **outlineCompute**: `ComputeShader`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L55)

___

### blendCompute

• **blendCompute**: `ComputeShader`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L56)

___

### slotsArray

• **slotsArray**: `Float32Array`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L66)

___

### entitiesArray

• **entitiesArray**: `Float32Array`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L69)

___

### entitiesBuffer

• **entitiesBuffer**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L70)

___

### weightBuffer

• **weightBuffer**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L72)

___

### lowTexSize

• **lowTexSize**: [`Vector2`](Vector2.md)

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L73)

___

### oldOutlineColor

• **oldOutlineColor**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L75)

___

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L76)

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

### outlinePixel

• `get` **outlinePixel**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L104)

• `set` **outlinePixel**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L96)

___

### fadeOutlinePixel

• `get` **fadeOutlinePixel**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L116)

• `set` **fadeOutlinePixel**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L108)

___

### strength

• `get` **strength**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L128)

• `set` **strength**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L120)

___

### useAddMode

• `get` **useAddMode**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L136)

• `set` **useAddMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L132)

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
