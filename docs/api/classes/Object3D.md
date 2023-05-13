# Class: Object3D

The base class of most objects provides a series of properties and methods for manipulating objects in three-dimensional space.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Object3D`**

  ↳↳ [`Scene3D`](Scene3D.md)

  ↳↳ [`InstancedMesh`](InstancedMesh.md)

  ↳↳ [`Graphic3D`](Graphic3D.md)


### Properties

- [name](Object3D.md#name)
- [transform](Object3D.md#transform)
- [renderNode](Object3D.md#rendernode)
- [entityChildren](Object3D.md#entitychildren)
- [components](Object3D.md#components)
- [prefabRef](Object3D.md#prefabref)

### Accessors

- [uuid](Object3D.md#uuid)
- [renderLayer](Object3D.md#renderlayer)
- [numChildren](Object3D.md#numchildren)
- [bound](Object3D.md#bound)
- [isScene3D](Object3D.md#isscene3d)
- [localPosition](Object3D.md#localposition)
- [localRotation](Object3D.md#localrotation)
- [localScale](Object3D.md#localscale)
- [localQuaternion](Object3D.md#localquaternion)
- [parent](Object3D.md#parent)
- [parentObject](Object3D.md#parentobject)
- [x](Object3D.md#x)
- [y](Object3D.md#y)
- [z](Object3D.md#z)
- [scaleX](Object3D.md#scalex)
- [scaleY](Object3D.md#scaley)
- [scaleZ](Object3D.md#scalez)
- [rotationX](Object3D.md#rotationx)
- [rotationY](Object3D.md#rotationy)
- [rotationZ](Object3D.md#rotationz)

### Methods

- [getObjectByName](Object3D.md#getobjectbyname)
- [addChild](Object3D.md#addchild)
- [removeChild](Object3D.md#removechild)
- [removeAllChild](Object3D.md#removeallchild)
- [removeSelf](Object3D.md#removeself)
- [removeChildByIndex](Object3D.md#removechildbyindex)
- [hasChild](Object3D.md#haschild)
- [removeFromParent](Object3D.md#removefromparent)
- [getChildByIndex](Object3D.md#getchildbyindex)
- [getChildByName](Object3D.md#getchildbyname)
- [genBounds](Object3D.md#genbounds)
- [forChild](Object3D.md#forchild)
- [addComponent](Object3D.md#addcomponent)
- [getOrAddComponent](Object3D.md#getoraddcomponent)
- [removeComponent](Object3D.md#removecomponent)
- [hasComponent](Object3D.md#hascomponent)
- [getComponent](Object3D.md#getcomponent)
- [getComponentFromParent](Object3D.md#getcomponentfromparent)
- [getComponentsInChild](Object3D.md#getcomponentsinchild)
- [getComponents](Object3D.md#getcomponents)
- [getComponentsExt](Object3D.md#getcomponentsext)
- [clone](Object3D.md#clone)
- [notifyChange](Object3D.md#notifychange)
- [traverse](Object3D.md#traverse)
- [destroy](Object3D.md#destroy)
- [dispatchEvent](Object3D.md#dispatchevent)
- [addEventListener](Object3D.md#addeventlistener)
- [removeEventListener](Object3D.md#removeeventlistener)
- [removeEventListenerAt](Object3D.md#removeeventlistenerat)
- [removeAllEventListener](Object3D.md#removealleventlistener)
- [containEventListener](Object3D.md#containeventlistener)
- [hasEventListener](Object3D.md#haseventlistener)

### Constructors

- [constructor](Object3D.md#constructor)

## Properties

### name

• **name**: `string` = `''`

The name of the object. The default value is an empty string.

#### Inherited from

[Entity](Entity.md).[name](Entity.md#name)

#### Defined in

[src/core/entities/Entity.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L24)

___

### transform

• **transform**: [`Transform`](Transform.md)

The Transform attached to this object.

#### Inherited from

[Entity](Entity.md).[transform](Entity.md#transform)

#### Defined in

[src/core/entities/Entity.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L59)

___

### renderNode

• **renderNode**: `RenderNode`

Renderer components

#### Inherited from

[Entity](Entity.md).[renderNode](Entity.md#rendernode)

#### Defined in

[src/core/entities/Entity.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L64)

___

### entityChildren

• **entityChildren**: [`Entity`](Entity.md)[]

An array containing sub objects of an object

#### Inherited from

[Entity](Entity.md).[entityChildren](Entity.md#entitychildren)

#### Defined in

[src/core/entities/Entity.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L69)

___

### components

• **components**: `Map`<`any`, [`IComponent`](../interfaces/IComponent.md)\>

List of components attached to an object

#### Inherited from

[Entity](Entity.md).[components](Entity.md#components)

#### Defined in

[src/core/entities/Entity.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L74)

___

### prefabRef

• `Optional` **prefabRef**: `string`

#### Defined in

[src/core/entities/Object3D.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L14)

## Accessors

### uuid

• `get` **uuid**(): `string`

The unique identifier of the object.

#### Returns

`string`

#### Inherited from

Entity.uuid

#### Defined in

[src/core/entities/Entity.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L31)

___

### renderLayer

• `get` **renderLayer**(): `RenderLayer`

#### Returns

`RenderLayer`

#### Inherited from

Entity.renderLayer

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

Entity.renderLayer

#### Defined in

[src/core/entities/Entity.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L47)

___

### numChildren

• `get` **numChildren**(): `number`

Returns the number of child objects of an object

#### Returns

`number`

#### Inherited from

Entity.numChildren

#### Defined in

[src/core/entities/Entity.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L129)

___

### bound

• `get` **bound**(): `IBound`

#### Returns

`IBound`

#### Inherited from

Entity.bound

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

Entity.bound

#### Defined in

[src/core/entities/Entity.ts:324](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L324)

___

### isScene3D

• `get` **isScene3D**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/core/entities/Object3D.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L24)

___

### localPosition

• `get` **localPosition**(): [`Vector3`](Vector3.md)

Get the position of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

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

#### Defined in

[src/core/entities/Object3D.ts:264](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L264)

___

### localRotation

• `get` **localRotation**(): [`Vector3`](Vector3.md)

Get the rotation attribute of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

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

#### Defined in

[src/core/entities/Object3D.ts:278](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L278)

___

### localScale

• `get` **localScale**(): [`Vector3`](Vector3.md)

Get the scaling attribute of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

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

#### Defined in

[src/core/entities/Object3D.ts:292](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L292)

___

### localQuaternion

• `get` **localQuaternion**(): [`Quaternion`](Quaternion.md)

Get the rotation attribute of an object relative to its parent, which is a quaternion

#### Returns

[`Quaternion`](Quaternion.md)

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

#### Defined in

[src/core/entities/Object3D.ts:306](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L306)

___

### parent

• `get` **parent**(): [`Transform`](Transform.md)

Transform component of object parent

#### Returns

[`Transform`](Transform.md)

#### Defined in

[src/core/entities/Object3D.ts:321](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L321)

___

### parentObject

• `get` **parentObject**(): [`Object3D`](Object3D.md)

parent object3D

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/core/entities/Object3D.ts:329](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L329)

___

### x

• `get` **x**(): `number`

Get the x coordinate relative to the local coordinates of the parent container.

#### Returns

`number`

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

#### Defined in

[src/core/entities/Object3D.ts:337](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L337)

___

### y

• `get` **y**(): `number`

Get the y coordinate relative to the local coordinates of the parent container.

#### Returns

`number`

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

#### Defined in

[src/core/entities/Object3D.ts:352](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L352)

___

### z

• `get` **z**(): `number`

Get the z coordinate relative to the local coordinates of the parent container.

#### Returns

`number`

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

#### Defined in

[src/core/entities/Object3D.ts:367](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L367)

___

### scaleX

• `get` **scaleX**(): `number`

Get the x scale relative to the local coordinates of the parent container.

#### Returns

`number`

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

#### Defined in

[src/core/entities/Object3D.ts:381](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L381)

___

### scaleY

• `get` **scaleY**(): `number`

Get the y scale relative to the local coordinates of the parent container.

#### Returns

`number`

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

#### Defined in

[src/core/entities/Object3D.ts:397](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L397)

___

### scaleZ

• `get` **scaleZ**(): `number`

Get the z scale relative to the local coordinates of the parent container.

#### Returns

`number`

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

#### Defined in

[src/core/entities/Object3D.ts:413](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L413)

___

### rotationX

• `get` **rotationX**(): `number`

Get the x rotation relative to the local coordinates of the parent container.

#### Returns

`number`

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

#### Defined in

[src/core/entities/Object3D.ts:429](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L429)

___

### rotationY

• `get` **rotationY**(): `number`

Get the y rotation relative to the local coordinates of the parent container.

#### Returns

`number`

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

#### Defined in

[src/core/entities/Object3D.ts:445](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L445)

___

### rotationZ

• `get` **rotationZ**(): `number`

Set the z rotation relative to the local coordinates of the parent container.

#### Returns

`number`

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

#### Defined in

[src/core/entities/Object3D.ts:461](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L461)

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

[Entity](Entity.md).[getObjectByName](Entity.md#getobjectbyname)

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

[Entity](Entity.md).[addChild](Entity.md#addchild)

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

[Entity](Entity.md).[removeChild](Entity.md#removechild)

#### Defined in

[src/core/entities/Entity.ts:166](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L166)

___

### removeAllChild

▸ **removeAllChild**(): `void`

Remove all children of the current object

#### Returns

`void`

#### Inherited from

[Entity](Entity.md).[removeAllChild](Entity.md#removeallchild)

#### Defined in

[src/core/entities/Entity.ts:180](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L180)

___

### removeSelf

▸ **removeSelf**(): [`Object3D`](Object3D.md)

Remove the current node from the parent

#### Returns

[`Object3D`](Object3D.md)

this

#### Inherited from

[Entity](Entity.md).[removeSelf](Entity.md#removeself)

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

[Entity](Entity.md).[removeChildByIndex](Entity.md#removechildbyindex)

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

[Entity](Entity.md).[hasChild](Entity.md#haschild)

#### Defined in

[src/core/entities/Entity.ts:215](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L215)

___

### removeFromParent

▸ **removeFromParent**(): [`Object3D`](Object3D.md)

Remove the current node from the parent

#### Returns

[`Object3D`](Object3D.md)

this

#### Inherited from

[Entity](Entity.md).[removeFromParent](Entity.md#removefromparent)

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

[Entity](Entity.md).[getChildByIndex](Entity.md#getchildbyindex)

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

[Entity](Entity.md).[getChildByName](Entity.md#getchildbyname)

#### Defined in

[src/core/entities/Entity.ts:254](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L254)

___

### genBounds

▸ **genBounds**(): `IBound`

Returns a bounding box that defines the display area of the specified layer.

#### Returns

`IBound`

#### Inherited from

[Entity](Entity.md).[genBounds](Entity.md#genbounds)

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

#### Defined in

[src/core/entities/Object3D.ts:204](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L204)

___

### clone

▸ **clone**(): [`Object3D`](Object3D.md)

clone a Object3D

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/core/entities/Object3D.ts:225](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L225)

___

### notifyChange

▸ **notifyChange**(): `void`

Notify transformation attribute updates

#### Returns

`void`

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

#### Defined in

[src/core/entities/Object3D.ts:490](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L490)

___

### destroy

▸ **destroy**(): `void`

Release self

#### Returns

`void`

#### Overrides

[Entity](Entity.md).[destroy](Entity.md#destroy)

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

[Entity](Entity.md).[dispatchEvent](Entity.md#dispatchevent)

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

[Entity](Entity.md).[addEventListener](Entity.md#addeventlistener)

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

[Entity](Entity.md).[removeEventListener](Entity.md#removeeventlistener)

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

[Entity](Entity.md).[removeEventListenerAt](Entity.md#removeeventlistenerat)

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

[Entity](Entity.md).[removeAllEventListener](Entity.md#removealleventlistener)

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

[Entity](Entity.md).[containEventListener](Entity.md#containeventlistener)

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

[Entity](Entity.md).[hasEventListener](Entity.md#haseventlistener)

#### Defined in

[src/event/CEventDispatcher.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L198)

## Constructors

### constructor

• **new Object3D**()

Instantiate a 3D object

#### Overrides

[Entity](Entity.md).[constructor](Entity.md#constructor)

#### Defined in

[src/core/entities/Object3D.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L19)
