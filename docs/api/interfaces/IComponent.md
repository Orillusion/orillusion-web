[**@orillusion/core**](../README.md)

***

# Interface: IComponent

Defined in: [src/components/IComponent.ts:6](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L6)

## Properties

### object3D

> **object3D**: [`Object3D`](../classes/Object3D.md)

Defined in: [src/components/IComponent.ts:7](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L7)

***

### eventDispatcher

> **eventDispatcher**: [`CEventDispatcher`](../classes/CEventDispatcher.md)

Defined in: [src/components/IComponent.ts:8](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L8)

***

### transform

> **transform**: [`Transform`](../classes/Transform.md)

Defined in: [src/components/IComponent.ts:9](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L9)

***

### enable

> **enable**: `boolean`

Defined in: [src/components/IComponent.ts:10](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L10)

***

### isDestroyed?

> `optional` **isDestroyed?**: `boolean`

Defined in: [src/components/IComponent.ts:11](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L11)

## Methods

### init()

> **init**(`param?`): `any`

Defined in: [src/components/IComponent.ts:12](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L12)

#### Parameters

##### param?

`any`

#### Returns

`any`

***

### start()

> **start**(): `any`

Defined in: [src/components/IComponent.ts:13](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L13)

#### Returns

`any`

***

### stop()

> **stop**(): `any`

Defined in: [src/components/IComponent.ts:14](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L14)

#### Returns

`any`

***

### onEnable()?

> `optional` **onEnable**(`view?`): `any`

Defined in: [src/components/IComponent.ts:15](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L15)

#### Parameters

##### view?

[`View3D`](../classes/View3D.md)

#### Returns

`any`

***

### onDisable()?

> `optional` **onDisable**(`view?`): `any`

Defined in: [src/components/IComponent.ts:16](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L16)

#### Parameters

##### view?

[`View3D`](../classes/View3D.md)

#### Returns

`any`

***

### onUpdate()?

> `optional` **onUpdate**(`view?`): `any`

Defined in: [src/components/IComponent.ts:17](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L17)

#### Parameters

##### view?

[`View3D`](../classes/View3D.md)

#### Returns

`any`

***

### onLateUpdate()?

> `optional` **onLateUpdate**(`view?`): `any`

Defined in: [src/components/IComponent.ts:18](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L18)

#### Parameters

##### view?

[`View3D`](../classes/View3D.md)

#### Returns

`any`

***

### onBeforeUpdate()?

> `optional` **onBeforeUpdate**(`view?`): `any`

Defined in: [src/components/IComponent.ts:19](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L19)

#### Parameters

##### view?

[`View3D`](../classes/View3D.md)

#### Returns

`any`

***

### onCompute()?

> `optional` **onCompute**(`view?`, `command?`): `any`

Defined in: [src/components/IComponent.ts:20](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L20)

#### Parameters

##### view?

[`View3D`](../classes/View3D.md)

##### command?

`GPUCommandEncoder`

#### Returns

`any`

***

### onGraphic()?

> `optional` **onGraphic**(`view?`): `any`

Defined in: [src/components/IComponent.ts:21](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L21)

#### Parameters

##### view?

[`View3D`](../classes/View3D.md)

#### Returns

`any`

***

### cloneTo()

> **cloneTo**(`obj`): `any`

Defined in: [src/components/IComponent.ts:22](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L22)

#### Parameters

##### obj

[`Object3D`](../classes/Object3D.md)

#### Returns

`any`

***

### destroy()

> **destroy**(`force?`): `any`

Defined in: [src/components/IComponent.ts:23](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L23)

#### Parameters

##### force?

`boolean`

#### Returns

`any`

***

### beforeDestroy()

> **beforeDestroy**(`force?`): `any`

Defined in: [src/components/IComponent.ts:24](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L24)

#### Parameters

##### force?

`boolean`

#### Returns

`any`

***

### onParentChange()?

> `optional` **onParentChange**(`lastParent?`, `currentParent?`): `any`

Defined in: [src/components/IComponent.ts:25](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L25)

#### Parameters

##### lastParent?

[`Object3D`](../classes/Object3D.md)

##### currentParent?

[`Object3D`](../classes/Object3D.md)

#### Returns

`any`

***

### onAddChild()?

> `optional` **onAddChild**(`child`): `any`

Defined in: [src/components/IComponent.ts:27](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L27)

#### Parameters

##### child

[`Object3D`](../classes/Object3D.md)

#### Returns

`any`

***

### onRemoveChild()?

> `optional` **onRemoveChild**(`child`): `any`

Defined in: [src/components/IComponent.ts:28](https://github.com/orillusion/orillusion/blob/main/src/components/IComponent.ts#L28)

#### Parameters

##### child

[`Object3D`](../classes/Object3D.md)

#### Returns

`any`
