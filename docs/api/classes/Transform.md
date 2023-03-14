# Class: Transform

Transform 组件上包含了一个对象在3D空间里的位置、旋转和缩放。
每一个对象(Object3D)都有一个Transform组件。

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`Transform`**


### Properties

- [object3D](Transform.md#object3d)
- [serializeTag](Transform.md#serializetag)
- [\_worldMatrix](Transform.md#_worldmatrix)

### Accessors

- [transform](Transform.md#transform)
- [enable](Transform.md#enable)
- [targetPos](Transform.md#targetpos)
- [parent](Transform.md#parent)
- [scene3d](Transform.md#scene3d)
- [up](Transform.md#up)
- [down](Transform.md#down)
- [forward](Transform.md#forward)
- [back](Transform.md#back)
- [left](Transform.md#left)
- [right](Transform.md#right)
- [localRotQuat](Transform.md#localrotquat)
- [x](Transform.md#x)
- [y](Transform.md#y)
- [z](Transform.md#z)
- [scaleX](Transform.md#scalex)
- [scaleY](Transform.md#scaley)
- [scaleZ](Transform.md#scalez)
- [rotationX](Transform.md#rotationx)
- [rotationY](Transform.md#rotationy)
- [rotationZ](Transform.md#rotationz)
- [worldPosition](Transform.md#worldposition)
- [localPosition](Transform.md#localposition)
- [localRotation](Transform.md#localrotation)
- [localScale](Transform.md#localscale)

### Methods

- [onVisible](Transform.md#onvisible)
- [onUpdate](Transform.md#onupdate)
- [onLateUpdate](Transform.md#onlateupdate)
- [onBeforeUpdate](Transform.md#onbeforeupdate)
- [awake](Transform.md#awake)
- [start](Transform.md#start)
- [stop](Transform.md#stop)
- [update](Transform.md#update)
- [lateUpdate](Transform.md#lateupdate)
- [updateWorldMatrix](Transform.md#updateworldmatrix)
- [lookAt](Transform.md#lookat)
- [destroy](Transform.md#destroy)
- [decomposeFromMatrix](Transform.md#decomposefrommatrix)
- [cloneTo](Transform.md#cloneto)
- [serialization](Transform.md#serialization)
- [unSerialization](Transform.md#unserialization)

### Constructors

- [constructor](Transform.md#constructor)

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

### \_worldMatrix

• **\_worldMatrix**: [`Matrix4`](Matrix4.md)

#### Defined in

[src/engine/components/Transform.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L103)

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

___

### targetPos

• `get` **targetPos**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/components/Transform.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L110)

• `set` **targetPos**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L113)

___

### parent

• `get` **parent**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Defined in

[src/engine/components/Transform.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L117)

• `set` **parent**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Transform`](Transform.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L121)

___

### scene3d

• `get` **scene3d**(): [`Scene3D`](Scene3D.md)

#### Returns

[`Scene3D`](Scene3D.md)

#### Defined in

[src/engine/components/Transform.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L132)

• `set` **scene3d**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Scene3D`](Scene3D.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L136)

___

### up

• `get` **up**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/components/Transform.ts:191](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L191)

• `set` **up**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:196](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L196)

___

### down

• `get` **down**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/components/Transform.ts:209](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L209)

• `set` **down**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:214](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L214)

___

### forward

• `get` **forward**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/components/Transform.ts:227](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L227)

• `set` **forward**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:232](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L232)

___

### back

• `get` **back**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/components/Transform.ts:247](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L247)

• `set` **back**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:252](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L252)

___

### left

• `get` **left**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/components/Transform.ts:267](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L267)

• `set` **left**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:272](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L272)

___

### right

• `get` **right**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/components/Transform.ts:285](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L285)

• `set` **right**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:290](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L290)

___

### localRotQuat

• `get` **localRotQuat**(): [`Quaternion`](Quaternion.md)

物体相对于父级变换属性，以四元数形式存储

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/engine/components/Transform.ts:307](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L307)

• `set` **localRotQuat**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Quaternion`](Quaternion.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:311](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L311)

___

### x

• `get` **x**(): `number`

物体相对于父级X轴位置

#### Returns

`number`

#### Defined in

[src/engine/components/Transform.ts:480](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L480)

• `set` **x**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:462](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L462)

___

### y

• `get` **y**(): `number`

物体相对于父级Y轴位置

#### Returns

`number`

#### Defined in

[src/engine/components/Transform.ts:502](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L502)

• `set` **y**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:484](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L484)

___

### z

• `get` **z**(): `number`

物体相对于父级Z轴位置

#### Returns

`number`

#### Defined in

[src/engine/components/Transform.ts:524](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L524)

• `set` **z**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:506](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L506)

___

### scaleX

• `get` **scaleX**(): `number`

物体相对于父级X轴的缩放

#### Returns

`number`

#### Defined in

[src/engine/components/Transform.ts:542](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L542)

• `set` **scaleX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:528](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L528)

___

### scaleY

• `get` **scaleY**(): `number`

物体相对于父级Y轴的缩放

#### Returns

`number`

#### Defined in

[src/engine/components/Transform.ts:560](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L560)

• `set` **scaleY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:546](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L546)

___

### scaleZ

• `get` **scaleZ**(): `number`

物体相对于父级Z轴的缩放

#### Returns

`number`

#### Defined in

[src/engine/components/Transform.ts:579](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L579)

• `set` **scaleZ**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:564](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L564)

___

### rotationX

• `get` **rotationX**(): `number`

物体相对于父级的X轴旋转属性

#### Returns

`number`

#### Defined in

[src/engine/components/Transform.ts:601](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L601)

• `set` **rotationX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:583](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L583)

___

### rotationY

• `get` **rotationY**(): `number`

物体相对于父级的Y轴旋转属性

#### Returns

`number`

#### Defined in

[src/engine/components/Transform.ts:623](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L623)

• `set` **rotationY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:605](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L605)

___

### rotationZ

• `get` **rotationZ**(): `number`

物体相对于父级的Z轴旋转属性

#### Returns

`number`

#### Defined in

[src/engine/components/Transform.ts:645](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L645)

• `set` **rotationZ**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:627](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L627)

___

### worldPosition

• `get` **worldPosition**(): [`Vector3`](Vector3.md)

世界坐标系下物体位置

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/components/Transform.ts:652](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L652)

___

### localPosition

• `get` **localPosition**(): [`Vector3`](Vector3.md)

物体相对于父级的位置

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/components/Transform.ts:677](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L677)

• `set` **localPosition**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:659](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L659)

___

### localRotation

• `get` **localRotation**(): [`Vector3`](Vector3.md)

物体相对于父级的旋转属性

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/components/Transform.ts:700](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L700)

• `set` **localRotation**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:681](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L681)

___

### localScale

• `get` **localScale**(): [`Vector3`](Vector3.md)

物体相对于父级的缩放属性

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/components/Transform.ts:718](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L718)

• `set` **localScale**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:704](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L704)

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

### awake

▸ **awake**(): `void`

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:171](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L171)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

ComponentBase.start

#### Defined in

[src/engine/components/Transform.ts:173](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L173)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Overrides

ComponentBase.stop

#### Defined in

[src/engine/components/Transform.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L175)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Overrides

ComponentBase.update

#### Defined in

[src/engine/components/Transform.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L177)

___

### lateUpdate

▸ **lateUpdate**(): `void`

#### Returns

`void`

#### Overrides

ComponentBase.lateUpdate

#### Defined in

[src/engine/components/Transform.ts:179](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L179)

___

### updateWorldMatrix

▸ **updateWorldMatrix**(`force?`): `void`

更新世界空间矩阵

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:365](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L365)

___

### lookAt

▸ **lookAt**(`pos`, `target`, `up?`): `void`

当前对象对视位置 （全局） (修改的是自身的全局变换)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) | `undefined` | 自身的位置 （全局） |
| `target` | [`Vector3`](Vector3.md) | `undefined` | 目标的位置 （全局） |
| `up` | [`Vector3`](Vector3.md) | `Vector3.UP` | 向上的方向 |

#### Returns

`void`

#### Defined in

[src/engine/components/Transform.ts:390](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L390)

___

### destroy

▸ **destroy**(): `void`

移除组件时候调用

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

[src/engine/components/Transform.ts:421](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L421)

___

### decomposeFromMatrix

▸ **decomposeFromMatrix**(`matrix`, `orientationStyle?`): [`Transform`](Transform.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `matrix` | [`Matrix4`](Matrix4.md) | `undefined` |
| `orientationStyle` | `string` | `'eulerAngles'` |

#### Returns

[`Transform`](Transform.md)

#### Defined in

[src/engine/components/Transform.ts:434](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L434)

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

#### Overrides

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

[src/engine/components/Transform.ts:456](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L456)

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

[src/engine/components/Transform.ts:802](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L802)

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

[src/engine/components/Transform.ts:815](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L815)

## Constructors

### constructor

• **new Transform**()

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/engine/components/Transform.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/Transform.ts#L160)
