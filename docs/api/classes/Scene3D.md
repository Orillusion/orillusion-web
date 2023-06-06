# Class: Scene3D

It represents an independent 3D scene where 3D objects can be created and manipulated.

## Hierarchy

- [`Object3D`](Object3D.md)

  ↳ **`Scene3D`**

### Constructors

- [constructor](Scene3D.md#constructor)

### Properties

- [envMapChange](Scene3D.md#envmapchange)
- [view](Scene3D.md#view)
- [name](Scene3D.md#name)
- [transform](Scene3D.md#transform)
- [renderNode](Scene3D.md#rendernode)
- [entityChildren](Scene3D.md#entitychildren)
- [components](Scene3D.md#components)
- [prefabRef](Scene3D.md#prefabref)

### Accessors

- [envMap](Scene3D.md#envmap)
- [exposure](Scene3D.md#exposure)
- [roughness](Scene3D.md#roughness)
- [uuid](Scene3D.md#uuid)
- [renderLayer](Scene3D.md#renderlayer)
- [numChildren](Scene3D.md#numchildren)
- [bound](Scene3D.md#bound)
- [isScene3D](Scene3D.md#isscene3d)
- [localPosition](Scene3D.md#localposition)
- [localRotation](Scene3D.md#localrotation)
- [localScale](Scene3D.md#localscale)
- [localQuaternion](Scene3D.md#localquaternion)
- [parent](Scene3D.md#parent)
- [parentObject](Scene3D.md#parentobject)
- [x](Scene3D.md#x)
- [y](Scene3D.md#y)
- [z](Scene3D.md#z)
- [scaleX](Scene3D.md#scalex)
- [scaleY](Scene3D.md#scaley)
- [scaleZ](Scene3D.md#scalez)
- [rotationX](Scene3D.md#rotationx)
- [rotationY](Scene3D.md#rotationy)
- [rotationZ](Scene3D.md#rotationz)

### Methods

- [getObjectByName](Scene3D.md#getobjectbyname)
- [addChild](Scene3D.md#addchild)
- [removeChild](Scene3D.md#removechild)
- [removeAllChild](Scene3D.md#removeallchild)
- [removeSelf](Scene3D.md#removeself)
- [removeChildByIndex](Scene3D.md#removechildbyindex)
- [hasChild](Scene3D.md#haschild)
- [removeFromParent](Scene3D.md#removefromparent)
- [getChildByIndex](Scene3D.md#getchildbyindex)
- [getChildByName](Scene3D.md#getchildbyname)
- [updateBound](Scene3D.md#updatebound)
- [forChild](Scene3D.md#forchild)
- [addComponent](Scene3D.md#addcomponent)
- [getOrAddComponent](Scene3D.md#getoraddcomponent)
- [removeComponent](Scene3D.md#removecomponent)
- [hasComponent](Scene3D.md#hascomponent)
- [getComponent](Scene3D.md#getcomponent)
- [getComponentFromParent](Scene3D.md#getcomponentfromparent)
- [getComponentsInChild](Scene3D.md#getcomponentsinchild)
- [getComponents](Scene3D.md#getcomponents)
- [getComponentsExt](Scene3D.md#getcomponentsext)
- [getComponentsByProperty](Scene3D.md#getcomponentsbyproperty)
- [clone](Scene3D.md#clone)
- [notifyChange](Scene3D.md#notifychange)
- [traverse](Scene3D.md#traverse)
- [destroy](Scene3D.md#destroy)
- [dispatchEvent](Scene3D.md#dispatchevent)
- [addEventListener](Scene3D.md#addeventlistener)
- [removeEventListener](Scene3D.md#removeeventlistener)
- [removeEventListenerAt](Scene3D.md#removeeventlistenerat)
- [removeAllEventListener](Scene3D.md#removealleventlistener)
- [containEventListener](Scene3D.md#containeventlistener)
- [hasEventListener](Scene3D.md#haseventlistener)

## Constructors

### constructor

• **new Scene3D**()

#### Overrides

[Object3D](Object3D.md).[constructor](Object3D.md#constructor)

#### Defined in

[src/core/Scene3D.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/core/Scene3D.ts#L21)

## Properties

### envMapChange

• **envMapChange**: `boolean` = `true`

#### Defined in

[src/core/Scene3D.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/core/Scene3D.ts#L15)

___

### view

• **view**: [`View3D`](View3D.md)

#### Defined in

[src/core/Scene3D.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/core/Scene3D.ts#L16)

___

### name

• **name**: `string` = `''`

The name of the object. The default value is an empty string.

#### Inherited from

[Object3D](Object3D.md).[name](Object3D.md#name)

#### Defined in

[src/core/entities/Entity.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L25)

___

### transform

• **transform**: [`Transform`](Transform.md)

The Transform attached to this object.

#### Inherited from

[Object3D](Object3D.md).[transform](Object3D.md#transform)

#### Defined in

[src/core/entities/Entity.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L60)

___

### renderNode

• **renderNode**: `RenderNode`

Renderer components

#### Inherited from

[Object3D](Object3D.md).[renderNode](Object3D.md#rendernode)

#### Defined in

[src/core/entities/Entity.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L65)

___

### entityChildren

• **entityChildren**: [`Entity`](Entity.md)[]

An array containing sub objects of an object

#### Inherited from

[Object3D](Object3D.md).[entityChildren](Object3D.md#entitychildren)

#### Defined in

[src/core/entities/Entity.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L70)

___

### components

• **components**: `Map`<`any`, [`IComponent`](../interfaces/IComponent.md)\>

List of components attached to an object

#### Inherited from

[Object3D](Object3D.md).[components](Object3D.md#components)

#### Defined in

[src/core/entities/Entity.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L75)

___

### prefabRef

• `Optional` **prefabRef**: `string`

#### Inherited from

[Object3D](Object3D.md).[prefabRef](Object3D.md#prefabref)

#### Defined in

[src/core/entities/Object3D.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L14)

## Accessors

### envMap

• `get` **envMap**(): [`Texture`](Texture.md)

get environment texture

#### Returns

[`Texture`](Texture.md)

#### Defined in

[src/core/Scene3D.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/core/Scene3D.ts#L34)

• `set` **envMap**(`value`): `void`

set environment texture

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/core/Scene3D.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/core/Scene3D.ts#L41)

___

### exposure

• `get` **exposure**(): `number`

Exposure of Sky Box. A larger value produces a sky box with stronger exposure and a brighter appearance.
 A smaller value produces a sky box with weaker exposure and a darker appearance.

#### Returns

`number`

#### Defined in

[src/core/Scene3D.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/core/Scene3D.ts#L54)

• `set` **exposure**(`value`): `void`

Set the exposure of the Sky Box.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/core/Scene3D.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/core/Scene3D.ts#L63)

___

### roughness

• `get` **roughness**(): `number`

Get the roughness of the Sky Box.

#### Returns

`number`

#### Defined in

[src/core/Scene3D.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/core/Scene3D.ts#L73)

• `set` **roughness**(`value`): `void`

Set the roughness of the Sky Box.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/core/Scene3D.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/core/Scene3D.ts#L82)

___

### uuid

• `get` **uuid**(): `string`

The unique identifier of the object.

#### Returns

`string`

#### Inherited from

Object3D.uuid

#### Defined in

[src/core/entities/Entity.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L32)

___

### renderLayer

• `get` **renderLayer**(): `RenderLayer`

#### Returns

`RenderLayer`

#### Inherited from

Object3D.renderLayer

#### Defined in

[src/core/entities/Entity.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L44)

• `set` **renderLayer**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `RenderLayer` |

#### Returns

`void`

#### Inherited from

Object3D.renderLayer

#### Defined in

[src/core/entities/Entity.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L48)

___

### numChildren

• `get` **numChildren**(): `number`

Returns the number of child objects of an object

#### Returns

`number`

#### Inherited from

Object3D.numChildren

#### Defined in

[src/core/entities/Entity.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L130)

___

### bound

• `get` **bound**(): `IBound`

#### Returns

`IBound`

#### Inherited from

Object3D.bound

#### Defined in

[src/core/entities/Entity.ts:318](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L318)

• `set` **bound**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `IBound` |

#### Returns

`void`

#### Inherited from

Object3D.bound

#### Defined in

[src/core/entities/Entity.ts:325](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L325)

___

### isScene3D

• `get` **isScene3D**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Object3D.isScene3D

#### Defined in

[src/core/entities/Object3D.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L24)

___

### localPosition

• `get` **localPosition**(): [`Vector3`](Vector3.md)

Get the position of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Object3D.localPosition

#### Defined in

[src/core/entities/Object3D.ts:268](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L268)

• `set` **localPosition**(`value`): `void`

Set the position of an object relative to its parent

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

Object3D.localPosition

#### Defined in

[src/core/entities/Object3D.ts:275](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L275)

___

### localRotation

• `get` **localRotation**(): [`Vector3`](Vector3.md)

Get the rotation attribute of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Object3D.localRotation

#### Defined in

[src/core/entities/Object3D.ts:282](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L282)

• `set` **localRotation**(`value`): `void`

Set the rotation attribute of an object relative to its parent

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

Object3D.localRotation

#### Defined in

[src/core/entities/Object3D.ts:289](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L289)

___

### localScale

• `get` **localScale**(): [`Vector3`](Vector3.md)

Get the scaling attribute of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Object3D.localScale

#### Defined in

[src/core/entities/Object3D.ts:296](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L296)

• `set` **localScale**(`value`): `void`

Set the scaling attribute of an object relative to its parent

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

Object3D.localScale

#### Defined in

[src/core/entities/Object3D.ts:303](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L303)

___

### localQuaternion

• `get` **localQuaternion**(): [`Quaternion`](Quaternion.md)

Get the rotation attribute of an object relative to its parent, which is a quaternion

#### Returns

[`Quaternion`](Quaternion.md)

#### Inherited from

Object3D.localQuaternion

#### Defined in

[src/core/entities/Object3D.ts:310](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L310)

• `set` **localQuaternion**(`value`): `void`

Set the rotation attribute of an object relative to its parent, which is a quaternion

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Quaternion`](Quaternion.md) |

#### Returns

`void`

#### Inherited from

Object3D.localQuaternion

#### Defined in

[src/core/entities/Object3D.ts:317](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L317)

___

### parent

• `get` **parent**(): [`Transform`](Transform.md)

Transform component of object parent

#### Returns

[`Transform`](Transform.md)

#### Inherited from

Object3D.parent

#### Defined in

[src/core/entities/Object3D.ts:332](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L332)

___

### parentObject

• `get` **parentObject**(): [`Object3D`](Object3D.md)

parent object3D

#### Returns

[`Object3D`](Object3D.md)

#### Inherited from

Object3D.parentObject

#### Defined in

[src/core/entities/Object3D.ts:340](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L340)

___

### x

• `get` **x**(): `number`

Get the x coordinate relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.x

#### Defined in

[src/core/entities/Object3D.ts:356](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L356)

• `set` **x**(`value`): `void`

Set the x coordinate relative to the local coordinates of the parent container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Object3D.x

#### Defined in

[src/core/entities/Object3D.ts:348](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L348)

___

### y

• `get` **y**(): `number`

Get the y coordinate relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.y

#### Defined in

[src/core/entities/Object3D.ts:371](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L371)

• `set` **y**(`value`): `void`

Set the y coordinate relative to the local coordinates of the parent container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Object3D.y

#### Defined in

[src/core/entities/Object3D.ts:363](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L363)

___

### z

• `get` **z**(): `number`

Get the z coordinate relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.z

#### Defined in

[src/core/entities/Object3D.ts:385](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L385)

• `set` **z**(`value`): `void`

Set the z coordinate relative to the local coordinates of the parent container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Object3D.z

#### Defined in

[src/core/entities/Object3D.ts:378](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L378)

___

### scaleX

• `get` **scaleX**(): `number`

Get the x scale relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.scaleX

#### Defined in

[src/core/entities/Object3D.ts:400](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L400)

• `set` **scaleX**(`value`): `void`

Set the x scale relative to the local coordinates of the parent container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Object3D.scaleX

#### Defined in

[src/core/entities/Object3D.ts:392](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L392)

___

### scaleY

• `get` **scaleY**(): `number`

Get the y scale relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.scaleY

#### Defined in

[src/core/entities/Object3D.ts:416](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L416)

• `set` **scaleY**(`value`): `void`

Set the y scale relative to the local coordinates of the parent container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Object3D.scaleY

#### Defined in

[src/core/entities/Object3D.ts:408](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L408)

___

### scaleZ

• `get` **scaleZ**(): `number`

Get the z scale relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.scaleZ

#### Defined in

[src/core/entities/Object3D.ts:432](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L432)

• `set` **scaleZ**(`value`): `void`

Set the z scale relative to the local coordinates of the parent container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Object3D.scaleZ

#### Defined in

[src/core/entities/Object3D.ts:424](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L424)

___

### rotationX

• `get` **rotationX**(): `number`

Get the x rotation relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.rotationX

#### Defined in

[src/core/entities/Object3D.ts:448](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L448)

• `set` **rotationX**(`value`): `void`

Set the x rotation relative to the local coordinates of the parent container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Object3D.rotationX

#### Defined in

[src/core/entities/Object3D.ts:440](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L440)

___

### rotationY

• `get` **rotationY**(): `number`

Get the y rotation relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.rotationY

#### Defined in

[src/core/entities/Object3D.ts:464](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L464)

• `set` **rotationY**(`value`): `void`

Set the y rotation relative to the local coordinates of the parent container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Object3D.rotationY

#### Defined in

[src/core/entities/Object3D.ts:456](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L456)

___

### rotationZ

• `get` **rotationZ**(): `number`

Set the z rotation relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.rotationZ

#### Defined in

[src/core/entities/Object3D.ts:480](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L480)

• `set` **rotationZ**(`value`): `void`

Set the z rotation relative to the local coordinates of the parent container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Object3D.rotationZ

#### Defined in

[src/core/entities/Object3D.ts:472](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L472)

## Methods

### getObjectByName

▸ **getObjectByName**(`name`): [`Entity`](Entity.md)

Starting from the object itself, search for the object and its children, and return the first child object with a matching name.
For most objects, the name is an empty string by default. You must manually set it to use this method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | input name |

#### Returns

[`Entity`](Entity.md)

result Entity

#### Inherited from

[Object3D](Object3D.md).[getObjectByName](Object3D.md#getobjectbyname)

#### Defined in

[src/core/entities/Entity.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L95)

___

### addChild

▸ **addChild**(`child`): [`Entity`](Entity.md)

Add an object as a child of this object. You can add any number of objects.
Any current parent object on the object passed here will be deleted, as an object can only have at most one parent object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Entity`](Entity.md) | target child entity |

#### Returns

[`Entity`](Entity.md)

#### Inherited from

[Object3D](Object3D.md).[addChild](Object3D.md#addchild)

#### Defined in

[src/core/entities/Entity.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L141)

___

### removeChild

▸ **removeChild**(`child`): `any`

Remove the child objects of the object. You can remove any number of objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Entity`](Entity.md) | Removed objects |

#### Returns

`any`

#### Inherited from

[Object3D](Object3D.md).[removeChild](Object3D.md#removechild)

#### Defined in

[src/core/entities/Entity.ts:167](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L167)

___

### removeAllChild

▸ **removeAllChild**(): `void`

Remove all children of the current object

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[removeAllChild](Object3D.md#removeallchild)

#### Defined in

[src/core/entities/Entity.ts:181](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L181)

___

### removeSelf

▸ **removeSelf**(): [`Scene3D`](Scene3D.md)

Remove the current node from the parent

#### Returns

[`Scene3D`](Scene3D.md)

this

#### Inherited from

[Object3D](Object3D.md).[removeSelf](Object3D.md#removeself)

#### Defined in

[src/core/entities/Entity.ts:192](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L192)

___

### removeChildByIndex

▸ **removeChildByIndex**(`index`): `void`

Search for child nodes of objects and remove child objects with matching indexes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | assign index |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[removeChildByIndex](Object3D.md#removechildbyindex)

#### Defined in

[src/core/entities/Entity.ts:202](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L202)

___

### hasChild

▸ **hasChild**(`child`): `boolean`

Does the current object contain a certain object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Entity`](Entity.md) | certain object |

#### Returns

`boolean`

boolean

#### Inherited from

[Object3D](Object3D.md).[hasChild](Object3D.md#haschild)

#### Defined in

[src/core/entities/Entity.ts:216](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L216)

___

### removeFromParent

▸ **removeFromParent**(): [`Scene3D`](Scene3D.md)

Remove the current node from the parent

#### Returns

[`Scene3D`](Scene3D.md)

this

#### Inherited from

[Object3D](Object3D.md).[removeFromParent](Object3D.md#removefromparent)

#### Defined in

[src/core/entities/Entity.ts:226](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L226)

___

### getChildByIndex

▸ **getChildByIndex**(`index`): [`Entity`](Entity.md)

Search for object children and return the first child object with a matching index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | matching index |

#### Returns

[`Entity`](Entity.md)

child entity

#### Inherited from

[Object3D](Object3D.md).[getChildByIndex](Object3D.md#getchildbyindex)

#### Defined in

[src/core/entities/Entity.ts:240](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L240)

___

### getChildByName

▸ **getChildByName**(`name`, `loopChild?`): `any`

Search for object children and return a child object with a matching name.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | matching name |
| `loopChild` | `boolean` | `true` | Whether to traverse the children of the child object. The default value is true |

#### Returns

`any`

result

#### Inherited from

[Object3D](Object3D.md).[getChildByName](Object3D.md#getchildbyname)

#### Defined in

[src/core/entities/Entity.ts:255](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L255)

___

### updateBound

▸ **updateBound**(): `void`

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[updateBound](Object3D.md#updatebound)

#### Defined in

[src/core/entities/Entity.ts:331](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L331)

___

### forChild

▸ **forChild**(`call`): `void`

Traverse all sub objects starting from the object itself.
 If there are still sub objects in the sub object, recursively traverse.

#### Parameters

| Name | Type |
| :------ | :------ |
| `call` | `Function` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[forChild](Object3D.md#forchild)

#### Defined in

[src/core/entities/Object3D.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L35)

___

### addComponent

▸ **addComponent**<`T`\>(`c`, `param?`): `T`

Create a new component and add it to the object, and return an instance of the component.
 If a component of this type already exists, it will not be added and will return null.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> | class of component |
| `param?` | `any` | - |

#### Returns

`T`

result component

#### Inherited from

[Object3D](Object3D.md).[addComponent](Object3D.md#addcomponent)

#### Defined in

[src/core/entities/Object3D.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L49)

___

### getOrAddComponent

▸ **getOrAddComponent**<`T`\>(`c`): `T`

Returns an instance of a component object of the specified type.
 If there are no components of that type, a new component is created and added to the object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> | class of component |

#### Returns

`T`

result component

#### Inherited from

[Object3D](Object3D.md).[getOrAddComponent](Object3D.md#getoraddcomponent)

#### Defined in

[src/core/entities/Object3D.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L71)

___

### removeComponent

▸ **removeComponent**<`T`\>(`c`): `void`

Remove components of the specified type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> | class of component |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[removeComponent](Object3D.md#removecomponent)

#### Defined in

[src/core/entities/Object3D.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L85)

___

### hasComponent

▸ **hasComponent**<`T`\>(`c`): `boolean`

Is there a component of the specified type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> | type of component |

#### Returns

`boolean`

boolean

#### Inherited from

[Object3D](Object3D.md).[hasComponent](Object3D.md#hascomponent)

#### Defined in

[src/core/entities/Object3D.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L101)

___

### getComponent

▸ **getComponent**<`T`\>(`c`): `T`

Returns a component of the specified type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> | class of component |

#### Returns

`T`

result component

#### Inherited from

[Object3D](Object3D.md).[getComponent](Object3D.md#getcomponent)

#### Defined in

[src/core/entities/Object3D.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L112)

___

### getComponentFromParent

▸ **getComponentFromParent**<`T`\>(`c`): `T`

Returns a component object of the specified type from the parent node.
 If there are no components of that type,
 calls the parent object lookup of the parent object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> | class of component |

#### Returns

`T`

reulst component

#### Inherited from

[Object3D](Object3D.md).[getComponentFromParent](Object3D.md#getcomponentfromparent)

#### Defined in

[src/core/entities/Object3D.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L125)

___

### getComponentsInChild

▸ **getComponentsInChild**<`T`\>(`c`): `T`[]

Returns an array of component objects of the specified type.
 If there are no components of that type, search in the list of self body class objects

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> | class of component |

#### Returns

`T`[]

result components

#### Inherited from

[Object3D](Object3D.md).[getComponentsInChild](Object3D.md#getcomponentsinchild)

#### Defined in

[src/core/entities/Object3D.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L145)

___

### getComponents

▸ **getComponents**<`T`\>(`c`, `outList?`, `includeInactive?`): `T`[]

Returns all components of the specified type contained in the current object and its children.
 If there are children in the child object, recursively search.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> | class of component |
| `outList?` | `T`[] | result component list |
| `includeInactive?` | `boolean` | Whether to include invisible objects, default to false |

#### Returns

`T`[]

#### Inherited from

[Object3D](Object3D.md).[getComponents](Object3D.md#getcomponents)

#### Defined in

[src/core/entities/Object3D.ts:169](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L169)

___

### getComponentsExt

▸ **getComponentsExt**<`T`\>(`c`, `ret?`, `includeInactive?`): `T`[]

Quickly obtain components and no longer access child nodes after obtaining them at a certain node

**`Memberof`**

Object3D

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> | class of component |
| `ret?` | `T`[] | List of incoming T |
| `includeInactive?` | `boolean` | Whether to include invisible objects, default to false |

#### Returns

`T`[]

{T}

#### Inherited from

[Object3D](Object3D.md).[getComponentsExt](Object3D.md#getcomponentsext)

#### Defined in

[src/core/entities/Object3D.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L194)

___

### getComponentsByProperty

▸ **getComponentsByProperty**<`T`\>(`key`, `value`, `findedAndBreak?`, `ret?`, `includeInactive?`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `value` | `any` | `undefined` |
| `findedAndBreak` | `boolean` | `true` |
| `ret?` | `T`[] | `undefined` |
| `includeInactive?` | `boolean` | `undefined` |

#### Returns

`T`[]

#### Inherited from

[Object3D](Object3D.md).[getComponentsByProperty](Object3D.md#getcomponentsbyproperty)

#### Defined in

[src/core/entities/Object3D.ts:209](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L209)

___

### clone

▸ **clone**(): [`Object3D`](Object3D.md)

clone a Object3D

#### Returns

[`Object3D`](Object3D.md)

#### Inherited from

[Object3D](Object3D.md).[clone](Object3D.md#clone)

#### Defined in

[src/core/entities/Object3D.ts:236](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L236)

___

### notifyChange

▸ **notifyChange**(): `void`

Notify transformation attribute updates

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[notifyChange](Object3D.md#notifychange)

#### Defined in

[src/core/entities/Object3D.ts:324](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L324)

___

### traverse

▸ **traverse**(`callback`): `void`

Recursive child nodes and execute specified function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`child`: `any`) => `void` | specified function |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[traverse](Object3D.md#traverse)

#### Defined in

[src/core/entities/Object3D.ts:501](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L501)

___

### destroy

▸ **destroy**(`force?`): `void`

Release self

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[destroy](Object3D.md#destroy)

#### Defined in

[src/core/entities/Object3D.ts:516](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L516)

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `void`

Dispatch an event to all registered objects with a specific type of listener.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`CEvent`](CEvent.md) |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[dispatchEvent](Object3D.md#dispatchevent)

#### Defined in

[src/event/CEventDispatcher.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L24)

___

### addEventListener

▸ **addEventListener**(`type`, `callback`, `thisObject`, `param?`, `priority?`): `number`

register an event listener to event distancher.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` \| `number` | `undefined` | {string} event type. |
| `callback` | `Function` | `undefined` | {Function} The callback function that handles events. This function must accept an Event3D object as its unique parameter and cannot return any result. for example: function(evt:Event3D):void. |
| `thisObject` | `any` | `undefined` | {any} Current registration object, it'll call callback function. |
| `param` | `any` | `null` | {any} the data binded to registered event, the default value is null. |
| `priority` | `number` | `0` | {number} The priority of callback function execution, with a larger set value having priority to call |

#### Returns

`number`

Returns register event id

#### Inherited from

[Object3D](Object3D.md).[addEventListener](Object3D.md#addeventlistener)

#### Defined in

[src/event/CEventDispatcher.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L79)

___

### removeEventListener

▸ **removeEventListener**(`type`, `callback`, `thisObject`): `void`

Remove Event Listening

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` \| `number` | {string} event type |
| `callback` | `Function` | {Function} callback function of event register |
| `thisObject` | `any` | {any} The current registered object. |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[removeEventListener](Object3D.md#removeeventlistener)

#### Defined in

[src/event/CEventDispatcher.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L113)

___

### removeEventListenerAt

▸ **removeEventListenerAt**(`id`): `boolean`

Remove an event Listening with id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`boolean`

#### Inherited from

[Object3D](Object3D.md).[removeEventListenerAt](Object3D.md#removeeventlistenerat)

#### Defined in

[src/event/CEventDispatcher.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L133)

___

### removeAllEventListener

▸ **removeAllEventListener**(`eventType?`): `void`

Specify a event type to remove all related event listeners
eventType event type, set null to remove all event listeners

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventType` | `string` \| `number` | `null` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[removeAllEventListener](Object3D.md#removealleventlistener)

#### Defined in

[src/event/CEventDispatcher.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L153)

___

### containEventListener

▸ **containEventListener**(`type`): `boolean`

whether the target presence of a listener with event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | {string} event type. |

#### Returns

`boolean`

Returns a boolean.

#### Inherited from

[Object3D](Object3D.md).[containEventListener](Object3D.md#containeventlistener)

#### Defined in

[src/event/CEventDispatcher.ts:185](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L185)

___

### hasEventListener

▸ **hasEventListener**(`type`, `callback?`, `thisObject?`): `boolean`

whether the target presence of a listener with event type. it associate more registration parameters.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` \| `number` | `undefined` | {string} event name. |
| `callback` | `Function` | `null` | {Function} callback function of event register. |
| `thisObject` | `any` | `null` | {any} The registered object. |

#### Returns

`boolean`

Returns a boolean.

#### Inherited from

[Object3D](Object3D.md).[hasEventListener](Object3D.md#haseventlistener)

#### Defined in

[src/event/CEventDispatcher.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L198)
