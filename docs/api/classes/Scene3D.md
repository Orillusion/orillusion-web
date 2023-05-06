# Class: Scene3D

It represents an independent 3D scene where 3D objects can be created and manipulated.

## Hierarchy

- [`Object3D`](Object3D.md)

  ↳ **`Scene3D`**


### Properties

- [envMapChange](Scene3D.md#envmapchange)
- [view](Scene3D.md#view)
- [name](Scene3D.md#name)
- [transform](Scene3D.md#transform)
- [renderNode](Scene3D.md#rendernode)
- [entityChildren](Scene3D.md#entitychildren)
- [components](Scene3D.md#components)
- [prefabRef](Scene3D.md#prefabref)

### Constructors

- [constructor](Scene3D.md#constructor)

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

- [showSky](Scene3D.md#showsky)
- [hideSky](Scene3D.md#hidesky)
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
- [genBounds](Scene3D.md#genbounds)
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

[src/core/entities/Entity.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L24)

___

### transform

• **transform**: [`Transform`](Transform.md)

The Transform attached to this object.

#### Inherited from

[Object3D](Object3D.md).[transform](Object3D.md#transform)

#### Defined in

[src/core/entities/Entity.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L59)

___

### renderNode

• **renderNode**: `RenderNode`

Renderer components

#### Inherited from

[Object3D](Object3D.md).[renderNode](Object3D.md#rendernode)

#### Defined in

[src/core/entities/Entity.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L64)

___

### entityChildren

• **entityChildren**: [`Entity`](Entity.md)[]

An array containing sub objects of an object

#### Inherited from

[Object3D](Object3D.md).[entityChildren](Object3D.md#entitychildren)

#### Defined in

[src/core/entities/Entity.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L69)

___

### components

• **components**: `Map`<`any`, [`IComponent`](../interfaces/IComponent.md)\>

List of components attached to an object

#### Inherited from

[Object3D](Object3D.md).[components](Object3D.md#components)

#### Defined in

[src/core/entities/Entity.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L74)

___

### prefabRef

• `Optional` **prefabRef**: `string`

#### Inherited from

[Object3D](Object3D.md).[prefabRef](Object3D.md#prefabref)

#### Defined in

[src/core/entities/Object3D.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L14)

## Constructors

### constructor

• **new Scene3D**()

#### Overrides

[Object3D](Object3D.md).[constructor](Object3D.md#constructor)

#### Defined in

[src/core/Scene3D.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/core/Scene3D.ts#L21)

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

[src/core/Scene3D.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/core/Scene3D.ts#L64)

• `set` **exposure**(`value`): `void`

Set the exposure of the Sky Box.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/core/Scene3D.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/core/Scene3D.ts#L73)

___

### roughness

• `get` **roughness**(): `number`

Get the roughness of the Sky Box.

#### Returns

`number`

#### Defined in

[src/core/Scene3D.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/core/Scene3D.ts#L83)

• `set` **roughness**(`value`): `void`

Set the roughness of the Sky Box.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/core/Scene3D.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/core/Scene3D.ts#L92)

___

### uuid

• `get` **uuid**(): `string`

The unique identifier of the object.

#### Returns

`string`

#### Inherited from

Object3D.uuid

#### Defined in

[src/core/entities/Entity.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L31)

___

### renderLayer

• `get` **renderLayer**(): `RenderLayer`

#### Returns

`RenderLayer`

#### Inherited from

Object3D.renderLayer

#### Defined in

[src/core/entities/Entity.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L43)

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

[src/core/entities/Entity.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L47)

___

### numChildren

• `get` **numChildren**(): `number`

Returns the number of child objects of an object

#### Returns

`number`

#### Inherited from

Object3D.numChildren

#### Defined in

[src/core/entities/Entity.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L129)

___

### bound

• `get` **bound**(): `IBound`

#### Returns

`IBound`

#### Inherited from

Object3D.bound

#### Defined in

[src/core/entities/Entity.ts:317](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L317)

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

[src/core/entities/Entity.ts:324](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L324)

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

[src/core/entities/Object3D.ts:257](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L257)

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

[src/core/entities/Object3D.ts:264](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L264)

___

### localRotation

• `get` **localRotation**(): [`Vector3`](Vector3.md)

Get the rotation attribute of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Object3D.localRotation

#### Defined in

[src/core/entities/Object3D.ts:271](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L271)

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

[src/core/entities/Object3D.ts:278](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L278)

___

### localScale

• `get` **localScale**(): [`Vector3`](Vector3.md)

Get the scaling attribute of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Object3D.localScale

#### Defined in

[src/core/entities/Object3D.ts:285](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L285)

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

[src/core/entities/Object3D.ts:292](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L292)

___

### localQuaternion

• `get` **localQuaternion**(): [`Quaternion`](Quaternion.md)

Get the rotation attribute of an object relative to its parent, which is a quaternion

#### Returns

[`Quaternion`](Quaternion.md)

#### Inherited from

Object3D.localQuaternion

#### Defined in

[src/core/entities/Object3D.ts:299](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L299)

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

[src/core/entities/Object3D.ts:306](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L306)

___

### parent

• `get` **parent**(): [`Transform`](Transform.md)

Transform component of object parent

#### Returns

[`Transform`](Transform.md)

#### Inherited from

Object3D.parent

#### Defined in

[src/core/entities/Object3D.ts:321](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L321)

___

### parentObject

• `get` **parentObject**(): [`Object3D`](Object3D.md)

parent object3D

#### Returns

[`Object3D`](Object3D.md)

#### Inherited from

Object3D.parentObject

#### Defined in

[src/core/entities/Object3D.ts:329](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L329)

___

### x

• `get` **x**(): `number`

Get the x coordinate relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.x

#### Defined in

[src/core/entities/Object3D.ts:345](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L345)

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

[src/core/entities/Object3D.ts:337](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L337)

___

### y

• `get` **y**(): `number`

Get the y coordinate relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.y

#### Defined in

[src/core/entities/Object3D.ts:360](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L360)

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

[src/core/entities/Object3D.ts:352](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L352)

___

### z

• `get` **z**(): `number`

Get the z coordinate relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.z

#### Defined in

[src/core/entities/Object3D.ts:374](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L374)

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

[src/core/entities/Object3D.ts:367](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L367)

___

### scaleX

• `get` **scaleX**(): `number`

Get the x scale relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.scaleX

#### Defined in

[src/core/entities/Object3D.ts:389](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L389)

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

[src/core/entities/Object3D.ts:381](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L381)

___

### scaleY

• `get` **scaleY**(): `number`

Get the y scale relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.scaleY

#### Defined in

[src/core/entities/Object3D.ts:405](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L405)

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

[src/core/entities/Object3D.ts:397](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L397)

___

### scaleZ

• `get` **scaleZ**(): `number`

Get the z scale relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.scaleZ

#### Defined in

[src/core/entities/Object3D.ts:421](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L421)

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

[src/core/entities/Object3D.ts:413](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L413)

___

### rotationX

• `get` **rotationX**(): `number`

Get the x rotation relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.rotationX

#### Defined in

[src/core/entities/Object3D.ts:437](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L437)

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

[src/core/entities/Object3D.ts:429](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L429)

___

### rotationY

• `get` **rotationY**(): `number`

Get the y rotation relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.rotationY

#### Defined in

[src/core/entities/Object3D.ts:453](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L453)

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

[src/core/entities/Object3D.ts:445](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L445)

___

### rotationZ

• `get` **rotationZ**(): `number`

Set the z rotation relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.rotationZ

#### Defined in

[src/core/entities/Object3D.ts:469](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L469)

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

[src/core/entities/Object3D.ts:461](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L461)

## Methods

### showSky

▸ **showSky**(): `void`

#### Returns

`void`

#### Defined in

[src/core/Scene3D.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/core/Scene3D.ts#L50)

___

### hideSky

▸ **hideSky**(): `void`

#### Returns

`void`

#### Defined in

[src/core/Scene3D.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/core/Scene3D.ts#L55)

___

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

[src/core/entities/Entity.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L94)

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

[src/core/entities/Entity.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L140)

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

[src/core/entities/Entity.ts:166](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L166)

___

### removeAllChild

▸ **removeAllChild**(): `void`

Remove all children of the current object

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[removeAllChild](Object3D.md#removeallchild)

#### Defined in

[src/core/entities/Entity.ts:180](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L180)

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

[src/core/entities/Entity.ts:191](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L191)

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

[src/core/entities/Entity.ts:201](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L201)

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

[src/core/entities/Entity.ts:215](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L215)

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

[src/core/entities/Entity.ts:225](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L225)

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

[src/core/entities/Entity.ts:239](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L239)

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

[src/core/entities/Entity.ts:254](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L254)

___

### genBounds

▸ **genBounds**(): `IBound`

Returns a bounding box that defines the display area of the specified layer.

#### Returns

`IBound`

#### Inherited from

[Object3D](Object3D.md).[genBounds](Object3D.md#genbounds)

#### Defined in

[src/core/entities/Entity.ts:332](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L332)

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

[src/core/entities/Object3D.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L81)

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

[src/core/entities/Object3D.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L95)

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

[src/core/entities/Object3D.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L111)

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

[src/core/entities/Object3D.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L122)

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

[src/core/entities/Object3D.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L135)

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

[src/core/entities/Object3D.ts:155](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L155)

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

[src/core/entities/Object3D.ts:179](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L179)

___

### getComponentsExt

▸ **getComponentsExt**<`T`\>(`c`, `ret?`, `includeInactive?`): `T`[]

Quickly obtain components and no longer access child nodes after obtaining them at a certain node

**`Memberof`**

ELPObject3D

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

[src/core/entities/Object3D.ts:204](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L204)

___

### clone

▸ **clone**(): [`Object3D`](Object3D.md)

clone a Object3D

#### Returns

[`Object3D`](Object3D.md)

#### Inherited from

[Object3D](Object3D.md).[clone](Object3D.md#clone)

#### Defined in

[src/core/entities/Object3D.ts:225](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L225)

___

### notifyChange

▸ **notifyChange**(): `void`

Notify transformation attribute updates

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[notifyChange](Object3D.md#notifychange)

#### Defined in

[src/core/entities/Object3D.ts:313](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L313)

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

[src/core/entities/Object3D.ts:490](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L490)

___

### destroy

▸ **destroy**(): `void`

Release self

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[destroy](Object3D.md#destroy)

#### Defined in

[src/core/entities/Object3D.ts:505](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L505)

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
