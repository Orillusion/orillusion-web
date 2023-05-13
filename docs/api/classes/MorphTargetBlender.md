# Class: MorphTargetBlender

Components are used to attach functionality to object3D, it has an owner object3D.
The component can receive update events at each frame.

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`MorphTargetBlender`**


### Properties

- [object3D](MorphTargetBlender.md#object3d)

### Constructors

- [constructor](MorphTargetBlender.md#constructor)

### Accessors

- [transform](MorphTargetBlender.md#transform)
- [enable](MorphTargetBlender.md#enable)

### Methods

- [start](MorphTargetBlender.md#start)
- [stop](MorphTargetBlender.md#stop)
- [onEnable](MorphTargetBlender.md#onenable)
- [onDisable](MorphTargetBlender.md#ondisable)
- [onUpdate](MorphTargetBlender.md#onupdate)
- [onLateUpdate](MorphTargetBlender.md#onlateupdate)
- [onBeforeUpdate](MorphTargetBlender.md#onbeforeupdate)
- [onCompute](MorphTargetBlender.md#oncompute)
- [onGraphic](MorphTargetBlender.md#ongraphic)
- [cloneTo](MorphTargetBlender.md#cloneto)
- [destroy](MorphTargetBlender.md#destroy)
- [init](MorphTargetBlender.md#init)
- [getMorphRenderersByKey](MorphTargetBlender.md#getmorphrenderersbykey)
- [cloneMorphRenderers](MorphTargetBlender.md#clonemorphrenderers)
- [applyBlendShape](MorphTargetBlender.md#applyblendshape)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[ComponentBase](ComponentBase.md).[object3D](ComponentBase.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

## Constructors

### constructor

• **new MorphTargetBlender**()

#### Inherited from

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/components/ComponentBase.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L31)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

ComponentBase.transform

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

ComponentBase.enable

#### Defined in

[src/components/ComponentBase.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L59)

• `set` **enable**(`value`): `void`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

ComponentBase.enable

#### Defined in

[src/components/ComponentBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L45)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

[src/components/ComponentBase.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L107)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

[src/components/ComponentBase.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L108)

___

### onEnable

▸ `Optional` **onEnable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onEnable](ComponentBase.md#onenable)

#### Defined in

[src/components/ComponentBase.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L109)

___

### onDisable

▸ `Optional` **onDisable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onDisable](ComponentBase.md#ondisable)

#### Defined in

[src/components/ComponentBase.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L110)

___

### onUpdate

▸ `Optional` **onUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

#### Defined in

[src/components/ComponentBase.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L111)

___

### onLateUpdate

▸ `Optional` **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onLateUpdate](ComponentBase.md#onlateupdate)

#### Defined in

[src/components/ComponentBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L112)

___

### onBeforeUpdate

▸ `Optional` **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

#### Defined in

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

___

### onCompute

▸ `Optional` **onCompute**(`view?`, `command?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |
| `command?` | `GPUCommandEncoder` |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onCompute](ComponentBase.md#oncompute)

#### Defined in

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

___

### onGraphic

▸ `Optional` **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onGraphic](ComponentBase.md#ongraphic)

#### Defined in

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

clone component data to target object3D

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) | target object3D |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

___

### destroy

▸ **destroy**(): `void`

release this component

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

[src/components/ComponentBase.ts:189](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L189)

___

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[init](ComponentBase.md#init)

#### Defined in

[src/components/anim/morphAnim/MorphTargetBlender.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetBlender.ts#L17)

___

### getMorphRenderersByKey

▸ **getMorphRenderersByKey**(`key`): [`MeshRenderer`](MeshRenderer.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`MeshRenderer`](MeshRenderer.md)[]

#### Defined in

[src/components/anim/morphAnim/MorphTargetBlender.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetBlender.ts#L33)

___

### cloneMorphRenderers

▸ **cloneMorphRenderers**(): `Object`

#### Returns

`Object`

#### Defined in

[src/components/anim/morphAnim/MorphTargetBlender.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetBlender.ts#L37)

___

### applyBlendShape

▸ **applyBlendShape**(`frame`, `keyMapper`, `multiplier?`): `void`

Inject arkit data into the model and let all meshRender below the node accept morph animation

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `frame` | [`MorphTargetFrame`](MorphTargetFrame.md) | `undefined` |
| `keyMapper` | [`MorphTargetMapper`](../types/MorphTargetMapper.md) | `undefined` |
| `multiplier` | `number` | `1` |

#### Returns

`void`

#### Defined in

[src/components/anim/morphAnim/MorphTargetBlender.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetBlender.ts#L53)
