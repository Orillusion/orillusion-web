# Class: GlobalIlluminationComponent

全局光照组件。
使用全局光照能够实现更加逼真的光照。
全局光照系统能够对光照在表面反射或折射到其它表面（间接光照）的方式进行建模，而非限定光照只能从光源照射到某个表面。

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`GlobalIlluminationComponent`**


### Properties

- [object3D](GlobalIlluminationComponent.md#object3d)
- [serializeTag](GlobalIlluminationComponent.md#serializetag)
- [probes](GlobalIlluminationComponent.md#probes)
- [volume](GlobalIlluminationComponent.md#volume)

### Accessors

- [transform](GlobalIlluminationComponent.md#transform)
- [enable](GlobalIlluminationComponent.md#enable)

### Methods

- [onVisible](GlobalIlluminationComponent.md#onvisible)
- [cloneTo](GlobalIlluminationComponent.md#cloneto)
- [destroy](GlobalIlluminationComponent.md#destroy)
- [onUpdate](GlobalIlluminationComponent.md#onupdate)
- [onLateUpdate](GlobalIlluminationComponent.md#onlateupdate)
- [onBeforeUpdate](GlobalIlluminationComponent.md#onbeforeupdate)
- [debug](GlobalIlluminationComponent.md#debug)
- [serialization](GlobalIlluminationComponent.md#serialization)
- [unSerialization](GlobalIlluminationComponent.md#unserialization)

### Constructors

- [constructor](GlobalIlluminationComponent.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

此组件附加到的Object3D对象。

#### Inherited from

[ComponentBase](ComponentBase.md).[object3D](ComponentBase.md#object3d)

#### Defined in

[src/engine/components/ComponentBase.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L14)

___

### serializeTag

• `Optional` **serializeTag**: [`SerializeTag`](../types/SerializeTag.md)

#### Inherited from

[ComponentBase](ComponentBase.md).[serializeTag](ComponentBase.md#serializetag)

#### Defined in

[src/engine/components/ComponentBase.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L30)

___

### probes

• **probes**: `Probe`[]

#### Defined in

[src/engine/components/rendererComponents/GlobalIlluminationComponent.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/GlobalIlluminationComponent.ts#L25)

___

### volume

• **volume**: `IrradianceVolumeData`

#### Defined in

[src/engine/components/rendererComponents/GlobalIlluminationComponent.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/GlobalIlluminationComponent.ts#L26)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

附加到此 Object3D对象 的 Transform组件。

#### Returns

[`Transform`](Transform.md)

#### Inherited from

ComponentBase.transform

#### Defined in

[src/engine/components/ComponentBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L39)

___

### enable

• `get` **enable**(): `boolean`

启用/禁用 组件。启用的组件可更新，禁用的组件不可更新。

#### Returns

`boolean`

#### Inherited from

ComponentBase.enable

#### Defined in

[src/engine/components/ComponentBase.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L62)

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

[src/engine/components/ComponentBase.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L43)

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

[ComponentBase](ComponentBase.md).[onVisible](ComponentBase.md#onvisible)

#### Defined in

[src/engine/components/ComponentBase.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L66)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

创建新的组件，复制当前组件的属性，并添加到目标对象上。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) | 源对象 |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

[src/engine/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L114)

___

### destroy

▸ **destroy**(): `void`

移除组件时候调用

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

[src/engine/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L119)

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

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

#### Defined in

[src/engine/components/ComponentBase.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L135)

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

[ComponentBase](ComponentBase.md).[onLateUpdate](ComponentBase.md#onlateupdate)

#### Defined in

[src/engine/components/ComponentBase.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L148)

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

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

#### Defined in

[src/engine/components/ComponentBase.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L161)

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

[src/engine/components/rendererComponents/GlobalIlluminationComponent.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/GlobalIlluminationComponent.ts#L114)

___

### serialization

▸ **serialization**(`assets`): [`SerializeComponentBase`](SerializeComponentBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `assets` | [`ISerializeAssetsCollect`](../interfaces/ISerializeAssetsCollect.md) |

#### Returns

[`SerializeComponentBase`](SerializeComponentBase.md)

#### Overrides

[ComponentBase](ComponentBase.md).[serialization](ComponentBase.md#serialization)

#### Defined in

[src/engine/components/rendererComponents/GlobalIlluminationComponent.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/GlobalIlluminationComponent.ts#L200)

___

### unSerialization

▸ **unSerialization**(`componentData`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `componentData` | [`SerializeComponentBase`](SerializeComponentBase.md) |
| `data` | [`UnSerializeData`](UnSerializeData.md) |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[unSerialization](ComponentBase.md#unserialization)

#### Defined in

[src/engine/components/rendererComponents/GlobalIlluminationComponent.ts:208](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/GlobalIlluminationComponent.ts#L208)

## Constructors

### constructor

• **new GlobalIlluminationComponent**()

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/engine/components/rendererComponents/GlobalIlluminationComponent.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/GlobalIlluminationComponent.ts#L56)
