# Class: OutlinePost

描边后期实现类。
通过OutlinePostManager，填充描边的对象数据
```
      //配置描边的参数
      let cfg = {@link Engine3D.setting.render.postProcessing.outline};
      let postProcessing = this.scene.addComponent(PostProcessingComponent);
      postProcessing.addPost(OutlinePost);
```

## Hierarchy

- `PostBase`

  ↳ **`OutlinePost`**


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

### Constructors

- [constructor](OutlinePost.md#constructor)

### Accessors

- [outlinePixel](OutlinePost.md#outlinepixel)
- [fadeOutlinePixel](OutlinePost.md#fadeoutlinepixel)
- [strength](OutlinePost.md#strength)
- [useAddMode](OutlinePost.md#useaddmode)

## Properties

### lowTex

• **lowTex**: `VirtualTexture`

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L107)

___

### outlineCompute

• **outlineCompute**: `ComputeShader`

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L117)

___

### blendCompute

• **blendCompute**: `ComputeShader`

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L118)

___

### slotsArray

• **slotsArray**: `Float32Array`

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L128)

___

### entitiesArray

• **entitiesArray**: `Float32Array`

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L131)

___

### entitiesBuffer

• **entitiesBuffer**: `StorageGPUBuffer`

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L132)

___

### weightBuffer

• **weightBuffer**: `StorageGPUBuffer`

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:134](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L134)

___

### lowTexSize

• **lowTexSize**: [`Vector2`](Vector2.md)

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L135)

___

### oldOutlineColor

• **oldOutlineColor**: `StorageGPUBuffer`

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:137](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L137)

___

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:138](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L138)

## Constructors

### constructor

• **new OutlinePost**()

#### Overrides

PostBase.constructor

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L140)

## Accessors

### outlinePixel

• `get` **outlinePixel**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:166](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L166)

• `set` **outlinePixel**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:158](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L158)

___

### fadeOutlinePixel

• `get` **fadeOutlinePixel**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:178](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L178)

• `set` **fadeOutlinePixel**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:170](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L170)

___

### strength

• `get` **strength**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L190)

• `set` **strength**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:182](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L182)

___

### useAddMode

• `get` **useAddMode**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L198)

• `set` **useAddMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L194)
