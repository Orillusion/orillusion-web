# Class: Object3D

The base class of most objects provides a series of properties and methods for manipulating objects in three-dimensional space.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Object3D`**

  ↳↳ [`Scene3D`](Scene3D.md)

  ↳↳ [`InstancedMesh`](InstancedMesh.md)

  ↳↳ [`Object3DTransformTools`](Object3DTransformTools.md)

### Constructors

- [constructor](Object3D.md#constructor)

### Properties

- [name](Object3D.md#name)
- [transform](Object3D.md#transform)
- [renderNode](Object3D.md#rendernode)
- [entityChildren](Object3D.md#entitychildren)
- [components](Object3D.md#components)
- [prefabRef](Object3D.md#prefabref)
- [serializeTag](Object3D.md#serializetag)

### Accessors

- [instanceID](Object3D.md#instanceid)
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
- [noticeComponents](Object3D.md#noticecomponents)
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
- [getComponentsByProperty](Object3D.md#getcomponentsbyproperty)
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

## Constructors

### constructor

• **new Object3D**(): [`Object3D`](Object3D.md)

Instantiate a 3D object

#### Returns

[`Object3D`](Object3D.md)

#### Overrides

[Entity](Entity.md).[constructor](Entity.md#constructor)

#### Defined in

[src/core/entities/Object3D.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L24)

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

[src/core/entities/Entity.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L42)

___

### renderNode

• **renderNode**: `RenderNode`

Renderer components

#### Inherited from

[Entity](Entity.md).[renderNode](Entity.md#rendernode)

#### Defined in

[src/core/entities/Entity.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L47)

___

### entityChildren

• **entityChildren**: [`Entity`](Entity.md)[]

An array containing sub objects of an object

#### Inherited from

[Entity](Entity.md).[entityChildren](Entity.md#entitychildren)

#### Defined in

[src/core/entities/Entity.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L52)

___

### components

• **components**: `Map`\<`any`, [`IComponent`](../interfaces/IComponent.md)\>

List of components attached to an object

#### Inherited from

[Entity](Entity.md).[components](Entity.md#components)

#### Defined in

[src/core/entities/Entity.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L57)

___

### prefabRef

• `Optional` **prefabRef**: `string`

#### Defined in

[src/core/entities/Object3D.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L19)

___

### serializeTag

• `Optional` **serializeTag**: [`SerializeTag`](../types/SerializeTag.md)

#### Defined in

[src/core/entities/Object3D.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L20)

## Accessors

### instanceID

• `get` **instanceID**(): `string`

The unique identifier of the object.

#### Returns

`string`

#### Inherited from

Entity.instanceID

#### Defined in

[src/core/entities/Entity.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L32)

___

### numChildren

• `get` **numChildren**(): `number`

Returns the number of child objects of an object

#### Returns

`number`

#### Inherited from

Entity.numChildren

#### Defined in

[src/core/entities/Entity.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L116)

___

### bound

• `get` **bound**(): `IBound`

#### Returns

`IBound`

#### Inherited from

Entity.bound

#### Defined in

[src/core/entities/Entity.ts:277](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L277)

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

[src/core/entities/Entity.ts:282](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L282)

___

### isScene3D

• `get` **isScene3D**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/core/entities/Object3D.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L30)

___

### localPosition

• `get` **localPosition**(): [`Vector3`](Vector3.md)

Get the position of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/core/entities/Object3D.ts:272](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L272)

• `set` **localPosition**(`value`): `void`

Set the position of an object relative to its parent

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/core/entities/Object3D.ts:279](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L279)

___

### localRotation

• `get` **localRotation**(): [`Vector3`](Vector3.md)

Get the rotation attribute of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/core/entities/Object3D.ts:286](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L286)

• `set` **localRotation**(`value`): `void`

Set the rotation attribute of an object relative to its parent

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/core/entities/Object3D.ts:293](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L293)

___

### localScale

• `get` **localScale**(): [`Vector3`](Vector3.md)

Get the scaling attribute of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/core/entities/Object3D.ts:300](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L300)

• `set` **localScale**(`value`): `void`

Set the scaling attribute of an object relative to its parent

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/core/entities/Object3D.ts:307](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L307)

___

### localQuaternion

• `get` **localQuaternion**(): [`Quaternion`](Quaternion.md)

Get the rotation attribute of an object relative to its parent, which is a quaternion

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/core/entities/Object3D.ts:314](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L314)

• `set` **localQuaternion**(`value`): `void`

Set the rotation attribute of an object relative to its parent, which is a quaternion

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Quaternion`](Quaternion.md) |

#### Returns

`void`

#### Defined in

[src/core/entities/Object3D.ts:321](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L321)

___

### parent

• `get` **parent**(): [`Transform`](Transform.md)

Transform component of object parent

#### Returns

[`Transform`](Transform.md)

#### Defined in

[src/core/entities/Object3D.ts:336](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L336)

___

### parentObject

• `get` **parentObject**(): [`Object3D`](Object3D.md)

parent object3D

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/core/entities/Object3D.ts:344](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L344)

___

### x

• `get` **x**(): `number`

Get the x coordinate relative to the local coordinates of the parent container.

#### Returns

`number`

#### Defined in

[src/core/entities/Object3D.ts:360](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L360)

• `set` **x**(`value`): `void`

Set the x coordinate relative to the local coordinates of the parent container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/core/entities/Object3D.ts:352](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L352)

___

### y

• `get` **y**(): `number`

Get the y coordinate relative to the local coordinates of the parent container.

#### Returns

`number`

#### Defined in

[src/core/entities/Object3D.ts:375](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L375)

• `set` **y**(`value`): `void`

Set the y coordinate relative to the local coordinates of the parent container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/core/entities/Object3D.ts:367](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L367)

___

### z

• `get` **z**(): `number`

Get the z coordinate relative to the local coordinates of the parent container.

#### Returns

`number`

#### Defined in

[src/core/entities/Object3D.ts:389](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L389)

• `set` **z**(`value`): `void`

Set the z coordinate relative to the local coordinates of the parent container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/core/entities/Object3D.ts:382](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L382)

___

### scaleX

• `get` **scaleX**(): `number`

Get the x scale relative to the local coordinates of the parent container.

#### Returns

`number`

#### Defined in

[src/core/entities/Object3D.ts:404](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L404)

• `set` **scaleX**(`value`): `void`

Set the x scale relative to the local coordinates of the parent container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/core/entities/Object3D.ts:396](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L396)

___

### scaleY

• `get` **scaleY**(): `number`

Get the y scale relative to the local coordinates of the parent container.

#### Returns

`number`

#### Defined in

[src/core/entities/Object3D.ts:420](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L420)

• `set` **scaleY**(`value`): `void`

Set the y scale relative to the local coordinates of the parent container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/core/entities/Object3D.ts:412](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L412)

___

### scaleZ

• `get` **scaleZ**(): `number`

Get the z scale relative to the local coordinates of the parent container.

#### Returns

`number`

#### Defined in

[src/core/entities/Object3D.ts:436](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L436)

• `set` **scaleZ**(`value`): `void`

Set the z scale relative to the local coordinates of the parent container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/core/entities/Object3D.ts:428](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L428)

___

### rotationX

• `get` **rotationX**(): `number`

Get the x rotation relative to the local coordinates of the parent container.

#### Returns

`number`

#### Defined in

[src/core/entities/Object3D.ts:452](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L452)

• `set` **rotationX**(`value`): `void`

Set the x rotation relative to the local coordinates of the parent container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/core/entities/Object3D.ts:444](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L444)

___

### rotationY

• `get` **rotationY**(): `number`

Get the y rotation relative to the local coordinates of the parent container.

#### Returns

`number`

#### Defined in

[src/core/entities/Object3D.ts:468](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L468)

• `set` **rotationY**(`value`): `void`

Set the y rotation relative to the local coordinates of the parent container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/core/entities/Object3D.ts:460](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L460)

___

### rotationZ

• `get` **rotationZ**(): `number`

Set the z rotation relative to the local coordinates of the parent container.

#### Returns

`number`

#### Defined in

[src/core/entities/Object3D.ts:484](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L484)

• `set` **rotationZ**(`value`): `void`

Set the z rotation relative to the local coordinates of the parent container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/core/entities/Object3D.ts:476](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L476)

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

[src/core/entities/Entity.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L81)

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

[src/core/entities/Entity.ts:127](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L127)

___

### removeChild

▸ **removeChild**(`child`): `void`

Remove the child objects of the object. You can remove any number of objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Entity`](Entity.md) | Removed objects |

#### Returns

`void`

#### Inherited from

[Entity](Entity.md).[removeChild](Entity.md#removechild)

#### Defined in

[src/core/entities/Entity.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L152)

___

### removeAllChild

▸ **removeAllChild**(): `void`

Remove all children of the current object

#### Returns

`void`

#### Inherited from

[Entity](Entity.md).[removeAllChild](Entity.md#removeallchild)

#### Defined in

[src/core/entities/Entity.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L168)

___

### removeSelf

▸ **removeSelf**(): `this`

Remove the current node from the parent

#### Returns

`this`

this

#### Inherited from

[Entity](Entity.md).[removeSelf](Entity.md#removeself)

#### Defined in

[src/core/entities/Entity.ts:179](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L179)

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

[src/core/entities/Entity.ts:189](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L189)

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

[src/core/entities/Entity.ts:203](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L203)

___

### removeFromParent

▸ **removeFromParent**(): `this`

Remove the current node from the parent

#### Returns

`this`

this

#### Inherited from

[Entity](Entity.md).[removeFromParent](Entity.md#removefromparent)

#### Defined in

[src/core/entities/Entity.ts:213](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L213)

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

[src/core/entities/Entity.ts:227](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L227)

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

[src/core/entities/Entity.ts:242](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L242)

___

### noticeComponents

▸ **noticeComponents**(`key`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof [`IComponent`](../interfaces/IComponent.md) |
| `data` | `any` |

#### Returns

`void`

#### Inherited from

[Entity](Entity.md).[noticeComponents](Entity.md#noticecomponents)

#### Defined in

[src/core/entities/Entity.ts:328](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L328)

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

[src/core/entities/Object3D.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L41)

___

### addComponent

▸ **addComponent**\<`T`\>(`c`, `param?`): `T`

Create a new component and add it to the object, and return an instance of the component.
 If a component of this type already exists, it will not be added and will return null.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)\<`T`\> | class of component |
| `param?` | `any` | - |

#### Returns

`T`

result component

#### Defined in

[src/core/entities/Object3D.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L55)

___

### getOrAddComponent

▸ **getOrAddComponent**\<`T`\>(`c`): `T`

Returns an instance of a component object of the specified type.
 If there are no components of that type, a new component is created and added to the object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)\<`T`\> | class of component |

#### Returns

`T`

result component

#### Defined in

[src/core/entities/Object3D.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L76)

___

### removeComponent

▸ **removeComponent**\<`T`\>(`c`): `void`

Remove components of the specified type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)\<`T`\> | class of component |

#### Returns

`void`

#### Defined in

[src/core/entities/Object3D.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L89)

___

### hasComponent

▸ **hasComponent**\<`T`\>(`c`): `boolean`

Is there a component of the specified type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)\<`T`\> | type of component |

#### Returns

`boolean`

boolean

#### Defined in

[src/core/entities/Object3D.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L106)

___

### getComponent

▸ **getComponent**\<`T`\>(`c`): `T`

Returns a component of the specified type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)\<`T`\> | class of component |

#### Returns

`T`

result component

#### Defined in

[src/core/entities/Object3D.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L116)

___

### getComponentFromParent

▸ **getComponentFromParent**\<`T`\>(`c`): `T`

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
| `c` | [`Ctor`](../types/Ctor.md)\<`T`\> | class of component |

#### Returns

`T`

reulst component

#### Defined in

[src/core/entities/Object3D.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L128)

___

### getComponentsInChild

▸ **getComponentsInChild**\<`T`\>(`c`): `T`[]

Returns an array of component objects of the specified type.
 If there are no components of that type, search in the list of self body class objects

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)\<`T`\> | class of component |

#### Returns

`T`[]

result components

#### Defined in

[src/core/entities/Object3D.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L148)

___

### getComponents

▸ **getComponents**\<`T`\>(`c`, `outList?`, `includeInactive?`): `T`[]

Returns all components of the specified type contained in the current object and its children.
 If there are children in the child object, recursively search.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)\<`T`\> | class of component |
| `outList?` | `T`[] | result component list |
| `includeInactive?` | `boolean` | Whether to include invisible objects, default to false |

#### Returns

`T`[]

#### Defined in

[src/core/entities/Object3D.ts:171](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L171)

___

### getComponentsExt

▸ **getComponentsExt**\<`T`\>(`c`, `ret?`, `includeInactive?`): `T`[]

Quickly obtain components and no longer access child nodes after obtaining them at a certain node

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)\<`T`\> | class of component |
| `ret?` | `T`[] | List of incoming T |
| `includeInactive?` | `boolean` | Whether to include invisible objects, default to false |

#### Returns

`T`[]

{T}

**`Memberof`**

Object3D

#### Defined in

[src/core/entities/Object3D.ts:196](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L196)

___

### getComponentsByProperty

▸ **getComponentsByProperty**\<`T`\>(`key`, `value`, `findedAndBreak?`, `ret?`, `includeInactive?`): `T`[]

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

#### Defined in

[src/core/entities/Object3D.ts:211](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L211)

___

### clone

▸ **clone**(): [`Object3D`](Object3D.md)

clone a Object3D

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/core/entities/Object3D.ts:238](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L238)

___

### notifyChange

▸ **notifyChange**(): `void`

Notify transformation attribute updates

#### Returns

`void`

#### Defined in

[src/core/entities/Object3D.ts:328](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L328)

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

[src/core/entities/Object3D.ts:505](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L505)

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

#### Overrides

[Entity](Entity.md).[destroy](Entity.md#destroy)

#### Defined in

[src/core/entities/Object3D.ts:520](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L520)

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
