# Class: GlobalFog

屏幕空间雾化
```
      //配置相关参数
      let cfg = {@link Engine3D.setting.render.postProcessing.globalFog};
      let renderJob = new ForwardRenderJob(this.scene);
      renderJob.addPost(new GlobalFog());
      Engine3D.startRender(renderJob);
```

## Hierarchy

- `PostBase`

  ↳ **`GlobalFog`**


### Constructors

- [constructor](GlobalFog.md#constructor)

### Methods

- [debug](GlobalFog.md#debug)

### Accessors

- [fogType](GlobalFog.md#fogtype)
- [height](GlobalFog.md#height)
- [start](GlobalFog.md#start)
- [end](GlobalFog.md#end)
- [ins](GlobalFog.md#ins)
- [density](GlobalFog.md#density)

## Constructors

### constructor

• **new GlobalFog**()

#### Overrides

PostBase.constructor

#### Defined in

[src/engine/gfx/renderJob/post/GlobalFog.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GlobalFog.ts#L36)

## Methods

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/GlobalFog.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GlobalFog.ts#L63)

## Accessors

### fogType

• `get` **fogType**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/GlobalFog.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GlobalFog.ts#L81)

• `set` **fogType**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/GlobalFog.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GlobalFog.ts#L78)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/GlobalFog.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GlobalFog.ts#L87)

• `set` **height**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/GlobalFog.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GlobalFog.ts#L84)

___

### start

• `get` **start**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/GlobalFog.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GlobalFog.ts#L93)

• `set` **start**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/GlobalFog.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GlobalFog.ts#L90)

___

### end

• `get` **end**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/GlobalFog.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GlobalFog.ts#L99)

• `set` **end**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/GlobalFog.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GlobalFog.ts#L96)

___

### ins

• `get` **ins**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/GlobalFog.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GlobalFog.ts#L105)

• `set` **ins**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/GlobalFog.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GlobalFog.ts#L102)

___

### density

• `get` **density**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/GlobalFog.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GlobalFog.ts#L111)

• `set` **density**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/GlobalFog.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GlobalFog.ts#L108)
