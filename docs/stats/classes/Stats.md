# Class: Stats

性能监控组件，一般添加给 Scene3D

## Hierarchy

- `ComponentBase`

  ↳ **`Stats`**

### Properties

- [object3D](Stats.md#object3d)
- [serializeTag](Stats.md#serializetag)
- [container](Stats.md#container)

### Constructors

- [constructor](Stats.md#constructor)

### Accessors

- [transform](Stats.md#transform)
- [enable](Stats.md#enable)

### Methods

- [onVisible](Stats.md#onvisible)
- [cloneTo](Stats.md#cloneto)
- [destroy](Stats.md#destroy)
- [onUpdate](Stats.md#onupdate)
- [onLateUpdate](Stats.md#onlateupdate)
- [onBeforeUpdate](Stats.md#onbeforeupdate)
- [serialization](Stats.md#serialization)
- [unSerialization](Stats.md#unserialization)

## Properties

### object3D

• **object3D**: `Object3D` = `null`

此组件附加到的Object3D对象。

#### Inherited from

ComponentBase.object3D

#### Defined in

[engine/components/ComponentBase.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L14)

___

### serializeTag

• `Optional` **serializeTag**: `SerializeTag`

#### Inherited from

ComponentBase.serializeTag

#### Defined in

[engine/components/ComponentBase.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L30)

___

### container

• **container**: `HTMLElement`

监视器容器 DOM
默认会创建一个 class="stats" 的 div   
可以通过 style 或 css 来调节监视器的位置和样式

#### Defined in

[libs/stats/index.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/libs/stats/index.ts#L12)

## Constructors

### constructor

• **new Stats**()

#### Inherited from

ComponentBase.constructor

#### Defined in

[engine/components/ComponentBase.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L32)

## Accessors

### transform

• `get` **transform**(): `Transform`

附加到此 Object3D对象 的 Transform组件。

#### Returns

`Transform`

#### Inherited from

ComponentBase.transform

#### Defined in

[engine/components/ComponentBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L39)

___

### enable

• `get` **enable**(): `boolean`

启用/禁用 组件。启用的组件可更新，禁用的组件不可更新。

#### Returns

`boolean`

#### Inherited from

ComponentBase.enable

#### Defined in

[engine/components/ComponentBase.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L62)

• `set` **enable**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

ComponentBase.enable

#### Defined in

[engine/components/ComponentBase.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L43)

## Methods

### onVisible

▸ **onVisible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

ComponentBase.onVisible

#### Defined in

[engine/components/ComponentBase.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L66)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

创建新的组件，复制当前组件的属性，并添加到目标对象上。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Object3D` | 源对象 |

#### Returns

`void`

#### Inherited from

ComponentBase.cloneTo

#### Defined in

[engine/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L114)

___

### destroy

▸ **destroy**(): `void`

移除组件时候调用

#### Returns

`void`

#### Inherited from

ComponentBase.destroy

#### Defined in

[engine/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L119)

___

### onUpdate

▸ **onUpdate**(`call`): `void`

添加更新函数。会在每帧更新时执行。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | `Function` | 回调函数 |

#### Returns

`void`

#### Inherited from

ComponentBase.onUpdate

#### Defined in

[engine/components/ComponentBase.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L135)

___

### onLateUpdate

▸ **onLateUpdate**(`call`): `void`

添加延迟更新函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | `Function` | 回调函数 |

#### Returns

`void`

#### Inherited from

ComponentBase.onLateUpdate

#### Defined in

[engine/components/ComponentBase.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L148)

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`call`): `void`

添加帧更新前执行的函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | `Function` | 回调函数 |

#### Returns

`void`

#### Inherited from

ComponentBase.onBeforeUpdate

#### Defined in

[engine/components/ComponentBase.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L161)

___

### serialization

▸ **serialization**(`assets`): `SerializeComponentBase`

#### Parameters

| Name | Type |
| :------ | :------ |
| `assets` | `ISerializeAssetsCollect` |

#### Returns

`SerializeComponentBase`

#### Inherited from

ComponentBase.serialization

#### Defined in

[engine/components/ComponentBase.ts:170](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L170)

___

### unSerialization

▸ **unSerialization**(`componentData`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `componentData` | `SerializeComponentBase` |
| `data` | `UnSerializeData` |

#### Returns

`void`

#### Inherited from

ComponentBase.unSerialization

#### Defined in

[engine/components/ComponentBase.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L175)
