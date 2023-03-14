# Class: DirectLight

平行光源。   
该光源的光线是平行的 例如，太阳光线。该光源可以产生阴影。

## Hierarchy

- `LightBase`

  ↳ **`DirectLight`**


### Properties

- [object3D](DirectLight.md#object3d)
- [serializeTag](DirectLight.md#serializetag)
- [shadowCamera](DirectLight.md#shadowcamera)
- [name](DirectLight.md#name)
- [size](DirectLight.md#size)
- [lightData](DirectLight.md#lightdata)
- [dirFix](DirectLight.md#dirfix)
- [bindOnChange](DirectLight.md#bindonchange)
- [needUpdataShadow](DirectLight.md#needupdatashadow)
- [realTimeShadow](DirectLight.md#realtimeshadow)

### Accessors

- [transform](DirectLight.md#transform)
- [enable](DirectLight.md#enable)
- [radius](DirectLight.md#radius)
- [indirect](DirectLight.md#indirect)
- [castShadow](DirectLight.md#castshadow)
- [iesPofile](DirectLight.md#iespofile)
- [r](DirectLight.md#r)
- [g](DirectLight.md#g)
- [b](DirectLight.md#b)
- [lightColor](DirectLight.md#lightcolor)
- [intensity](DirectLight.md#intensity)
- [shadowIndex](DirectLight.md#shadowindex)
- [castGI](DirectLight.md#castgi)
- [direction](DirectLight.md#direction)

### Methods

- [onVisible](DirectLight.md#onvisible)
- [cloneTo](DirectLight.md#cloneto)
- [onUpdate](DirectLight.md#onupdate)
- [onLateUpdate](DirectLight.md#onlateupdate)
- [onBeforeUpdate](DirectLight.md#onbeforeupdate)
- [start](DirectLight.md#start)
- [debug](DirectLight.md#debug)
- [unSerialization](DirectLight.md#unserialization)
- [destroy](DirectLight.md#destroy)
- [serialization](DirectLight.md#serialization)

### Constructors

- [constructor](DirectLight.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

此组件附加到的Object3D对象。

#### Inherited from

LightBase.object3D

#### Defined in

[src/engine/components/ComponentBase.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L14)

___

### serializeTag

• `Optional` **serializeTag**: [`SerializeTag`](../types/SerializeTag.md)

#### Inherited from

LightBase.serializeTag

#### Defined in

[src/engine/components/ComponentBase.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L30)

___

### shadowCamera

• **shadowCamera**: [`Camera3D`](Camera3D.md)

#### Defined in

[src/engine/components/lights/DirectLight.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/DirectLight.ts#L20)

___

### name

• **name**: `string`

名称

#### Inherited from

LightBase.name

#### Defined in

[src/engine/components/lights/LightBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L28)

___

### size

• **size**: `number` = `1`

大小

#### Inherited from

LightBase.size

#### Defined in

[src/engine/components/lights/LightBase.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L32)

___

### lightData

• **lightData**: `LightData`

光照数据

#### Inherited from

LightBase.lightData

#### Defined in

[src/engine/components/lights/LightBase.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L36)

___

### dirFix

• **dirFix**: `number` = `1`

修复光面背面或正面

#### Inherited from

LightBase.dirFix

#### Defined in

[src/engine/components/lights/LightBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L40)

___

### bindOnChange

• **bindOnChange**: () => `void`

#### Type declaration

▸ (): `void`

绑定变化时的回调函数

##### Returns

`void`

#### Inherited from

LightBase.bindOnChange

#### Defined in

[src/engine/components/lights/LightBase.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L53)

___

### needUpdataShadow

• **needUpdataShadow**: `boolean` = `true`

是否需要更新阴影

#### Inherited from

LightBase.needUpdataShadow

#### Defined in

[src/engine/components/lights/LightBase.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L61)

___

### realTimeShadow

• **realTimeShadow**: `boolean` = `false`

是否开启实时渲染阴影

#### Inherited from

LightBase.realTimeShadow

#### Defined in

[src/engine/components/lights/LightBase.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L66)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

附加到此 Object3D对象 的 Transform组件。

#### Returns

[`Transform`](Transform.md)

#### Inherited from

LightBase.transform

#### Defined in

[src/engine/components/ComponentBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L39)

___

### enable

• `get` **enable**(): `boolean`

启用/禁用 组件。启用的组件可更新，禁用的组件不可更新。

#### Returns

`boolean`

#### Inherited from

LightBase.enable

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

LightBase.enable

#### Defined in

[src/engine/components/ComponentBase.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L43)

___

### radius

• `get` **radius**(): `number`

获取平行光源的半径

#### Returns

`number`

#### Defined in

[src/engine/components/lights/DirectLight.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/DirectLight.ts#L47)

• `set` **radius**(`value`): `void`

设置平行光源的半径

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/lights/DirectLight.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/DirectLight.ts#L54)

___

### indirect

• `get` **indirect**(): `number`

获取平行光源的半径

#### Returns

`number`

#### Defined in

[src/engine/components/lights/DirectLight.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/DirectLight.ts#L63)

• `set` **indirect**(`value`): `void`

设置平行光源的半径

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/lights/DirectLight.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/DirectLight.ts#L70)

___

### castShadow

• `get` **castShadow**(): `boolean`

投影

#### Returns

`boolean`

boolean

#### Overrides

LightBase.castShadow

#### Defined in

[src/engine/components/lights/DirectLight.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/DirectLight.ts#L112)

• `set` **castShadow**(`value`): `void`

投影

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 如果设置为true，就会产生阴影 |

#### Returns

`void`

#### Overrides

LightBase.castShadow

#### Defined in

[src/engine/components/lights/DirectLight.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/DirectLight.ts#L79)

___

### iesPofile

• `get` **iesPofile**(): [`IESProfiles`](IESProfiles.md)

#### Returns

[`IESProfiles`](IESProfiles.md)

#### Inherited from

LightBase.iesPofile

#### Defined in

[src/engine/components/lights/LightBase.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L97)

• `set` **iesPofile**(`iesPofiles`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iesPofiles` | [`IESProfiles`](IESProfiles.md) |

#### Returns

`void`

#### Inherited from

LightBase.iesPofile

#### Defined in

[src/engine/components/lights/LightBase.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L90)

___

### r

• `get` **r**(): `number`

获取光照颜色红色分量

#### Returns

`number`

#### Inherited from

LightBase.r

#### Defined in

[src/engine/components/lights/LightBase.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L160)

• `set` **r**(`value`): `void`

设置光照颜色红色分量

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

LightBase.r

#### Defined in

[src/engine/components/lights/LightBase.ts:166](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L166)

___

### g

• `get` **g**(): `number`

获取光照颜色绿色分量

#### Returns

`number`

#### Inherited from

LightBase.g

#### Defined in

[src/engine/components/lights/LightBase.ts:174](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L174)

• `set` **g**(`value`): `void`

设置光照颜色绿色分量

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

LightBase.g

#### Defined in

[src/engine/components/lights/LightBase.ts:180](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L180)

___

### b

• `get` **b**(): `number`

获取光照颜色蓝色分量

#### Returns

`number`

#### Inherited from

LightBase.b

#### Defined in

[src/engine/components/lights/LightBase.ts:188](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L188)

• `set` **b**(`value`): `void`

获取光照颜色蓝色分量

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

LightBase.b

#### Defined in

[src/engine/components/lights/LightBase.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L194)

___

### lightColor

• `get` **lightColor**(): [`Color`](Color.md)

光源颜色

#### Returns

[`Color`](Color.md)

Color

#### Inherited from

LightBase.lightColor

#### Defined in

[src/engine/components/lights/LightBase.ts:202](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L202)

• `set` **lightColor**(`value`): `void`

光源颜色

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

LightBase.lightColor

#### Defined in

[src/engine/components/lights/LightBase.ts:209](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L209)

___

### intensity

• `get` **intensity**(): `number`

光源的照射强度

#### Returns

`number`

number

#### Inherited from

LightBase.intensity

#### Defined in

[src/engine/components/lights/LightBase.ts:217](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L217)

• `set` **intensity**(`value`): `void`

光源的照射强度，默认为1

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

LightBase.intensity

#### Defined in

[src/engine/components/lights/LightBase.ts:224](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L224)

___

### shadowIndex

• `get` **shadowIndex**(): `number`

获取投影下标

#### Returns

`number`

#### Inherited from

LightBase.shadowIndex

#### Defined in

[src/engine/components/lights/LightBase.ts:239](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L239)

___

### castGI

• `get` **castGI**(): `boolean`

投影

#### Returns

`boolean`

boolean

#### Inherited from

LightBase.castGI

#### Defined in

[src/engine/components/lights/LightBase.ts:254](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L254)

• `set` **castGI**(`value`): `void`

产生GI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 如果设置为true，就会影响GI |

#### Returns

`void`

#### Inherited from

LightBase.castGI

#### Defined in

[src/engine/components/lights/LightBase.ts:261](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L261)

___

### direction

• `get` **direction**(): [`Vector3`](Vector3.md)

平行光的方向

#### Returns

[`Vector3`](Vector3.md)

Vector3

#### Inherited from

LightBase.direction

#### Defined in

[src/engine/components/lights/LightBase.ts:275](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L275)

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

LightBase.onVisible

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

LightBase.cloneTo

#### Defined in

[src/engine/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L114)

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

LightBase.onUpdate

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

LightBase.onLateUpdate

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

LightBase.onBeforeUpdate

#### Defined in

[src/engine/components/ComponentBase.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L161)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

LightBase.start

#### Defined in

[src/engine/components/lights/DirectLight.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/DirectLight.ts#L33)

___

### debug

▸ **debug**(): `void`

启用GUI调试

#### Returns

`void`

#### Defined in

[src/engine/components/lights/DirectLight.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/DirectLight.ts#L119)

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

LightBase.unSerialization

#### Defined in

[src/engine/components/lights/DirectLight.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/DirectLight.ts#L130)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

LightBase.destroy

#### Defined in

[src/engine/components/lights/LightBase.ts:279](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L279)

___

### serialization

▸ **serialization**(`assets`): [`SerializeComponentBase`](SerializeComponentBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `assets` | [`ISerializeAssetsCollect`](../interfaces/ISerializeAssetsCollect.md) |

#### Returns

[`SerializeComponentBase`](SerializeComponentBase.md)

#### Inherited from

LightBase.serialization

#### Defined in

[src/engine/components/lights/LightBase.ts:287](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/LightBase.ts#L287)

## Constructors

### constructor

• **new DirectLight**()

#### Overrides

LightBase.constructor

#### Defined in

[src/engine/components/lights/DirectLight.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/lights/DirectLight.ts#L22)
