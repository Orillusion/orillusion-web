[**@orillusion/core**](../README.md)

***

# Class: GridObject

Defined in: [src/util/GridObject.ts:8](https://github.com/orillusion/orillusion/blob/main/src/util/GridObject.ts#L8)

An object contains grids - two dimensional arrrys of lines

## Extends

- [`Object3D`](Object3D.md)

## Constructors

### Constructor

> **new GridObject**(`size?`, `divisions?`): `GridObject`

Defined in: [src/util/GridObject.ts:13](https://github.com/orillusion/orillusion/blob/main/src/util/GridObject.ts#L13)

#### Parameters

##### size?

`number` = `100`

##### divisions?

`number` = `10`

#### Returns

`GridObject`

#### Overrides

[`Object3D`](Object3D.md).[`constructor`](Object3D.md#constructor)

## Properties

### name

> **name**: `string` = `''`

Defined in: [src/core/entities/Entity.ts:23](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L23)

The name of the object. The default value is an empty string.

#### Inherited from

[`Object3D`](Object3D.md).[`name`](Object3D.md#name)

***

### transform

> **transform**: [`Transform`](Transform.md)

Defined in: [src/core/entities/Entity.ts:38](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L38)

The Transform attached to this object.

#### Inherited from

[`Object3D`](Object3D.md).[`transform`](Object3D.md#transform)

***

### renderNode

> **renderNode**: `RenderNode`

Defined in: [src/core/entities/Entity.ts:43](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L43)

Renderer components

#### Inherited from

[`Object3D`](Object3D.md).[`renderNode`](Object3D.md#rendernode)

***

### entityChildren

> **entityChildren**: [`Entity`](Entity.md)[]

Defined in: [src/core/entities/Entity.ts:48](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L48)

An array containing sub objects of an object

#### Inherited from

[`Object3D`](Object3D.md).[`entityChildren`](Object3D.md#entitychildren)

***

### components

> **components**: `Map`\<`any`, [`IComponent`](../interfaces/IComponent.md)\>

Defined in: [src/core/entities/Entity.ts:53](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L53)

List of components attached to an object

#### Inherited from

[`Object3D`](Object3D.md).[`components`](Object3D.md#components)

***

### prefabRef?

> `optional` **prefabRef?**: `string`

Defined in: [src/core/entities/Object3D.ts:19](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L19)

#### Inherited from

[`Object3D`](Object3D.md).[`prefabRef`](Object3D.md#prefabref)

***

### serializeTag?

> `optional` **serializeTag?**: [`SerializeTag`](../type-aliases/SerializeTag.md)

Defined in: [src/core/entities/Object3D.ts:20](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L20)

#### Inherited from

[`Object3D`](Object3D.md).[`serializeTag`](Object3D.md#serializetag)

***

### size

> **size**: `number` = `100`

Defined in: [src/util/GridObject.ts:9](https://github.com/orillusion/orillusion/blob/main/src/util/GridObject.ts#L9)

***

### divisions

> **divisions**: `number` = `10`

Defined in: [src/util/GridObject.ts:11](https://github.com/orillusion/orillusion/blob/main/src/util/GridObject.ts#L11)

## Accessors

### instanceID

#### Get Signature

> **get** **instanceID**(): `string`

Defined in: [src/core/entities/Entity.ts:31](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L31)

The unique identifier of the object.

##### Returns

`string`

#### Inherited from

[`Object3D`](Object3D.md).[`instanceID`](Object3D.md#instanceid)

***

### dispose

#### Get Signature

> **get** **dispose**(): `boolean`

Defined in: [src/core/entities/Entity.ts:67](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L67)

##### Returns

`boolean`

#### Inherited from

[`Object3D`](Object3D.md).[`dispose`](Object3D.md#dispose)

***

### numChildren

#### Get Signature

> **get** **numChildren**(): `number`

Defined in: [src/core/entities/Entity.ts:113](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L113)

Returns the number of child objects of an object

##### Returns

`number`

#### Inherited from

[`Object3D`](Object3D.md).[`numChildren`](Object3D.md#numchildren)

***

### bound

#### Get Signature

> **get** **bound**(): `IBound`

Defined in: [src/core/entities/Entity.ts:274](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L274)

##### Returns

`IBound`

#### Set Signature

> **set** **bound**(`value`): `void`

Defined in: [src/core/entities/Entity.ts:279](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L279)

##### Parameters

###### value

`IBound`

##### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`bound`](Object3D.md#bound)

***

### isScene3D

#### Get Signature

> **get** **isScene3D**(): `boolean`

Defined in: [src/core/entities/Object3D.ts:30](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L30)

##### Returns

`boolean`

#### Inherited from

[`Object3D`](Object3D.md).[`isScene3D`](Object3D.md#isscene3d)

***

### localPosition

#### Get Signature

> **get** **localPosition**(): [`Vector3`](Vector3.md)

Defined in: [src/core/entities/Object3D.ts:272](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L272)

Get the position of an object relative to its parent

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **localPosition**(`value`): `void`

Defined in: [src/core/entities/Object3D.ts:279](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L279)

Set the position of an object relative to its parent

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`localPosition`](Object3D.md#localposition)

***

### localRotation

#### Get Signature

> **get** **localRotation**(): [`Vector3`](Vector3.md)

Defined in: [src/core/entities/Object3D.ts:286](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L286)

Get the rotation attribute of an object relative to its parent

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **localRotation**(`value`): `void`

Defined in: [src/core/entities/Object3D.ts:293](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L293)

Set the rotation attribute of an object relative to its parent

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`localRotation`](Object3D.md#localrotation)

***

### localScale

#### Get Signature

> **get** **localScale**(): [`Vector3`](Vector3.md)

Defined in: [src/core/entities/Object3D.ts:300](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L300)

Get the scaling attribute of an object relative to its parent

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **localScale**(`value`): `void`

Defined in: [src/core/entities/Object3D.ts:307](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L307)

Set the scaling attribute of an object relative to its parent

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`localScale`](Object3D.md#localscale)

***

### localQuaternion

#### Get Signature

> **get** **localQuaternion**(): [`Quaternion`](Quaternion.md)

Defined in: [src/core/entities/Object3D.ts:314](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L314)

Get the rotation attribute of an object relative to its parent, which is a quaternion

##### Returns

[`Quaternion`](Quaternion.md)

#### Set Signature

> **set** **localQuaternion**(`value`): `void`

Defined in: [src/core/entities/Object3D.ts:321](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L321)

Set the rotation attribute of an object relative to its parent, which is a quaternion

##### Parameters

###### value

[`Quaternion`](Quaternion.md)

##### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`localQuaternion`](Object3D.md#localquaternion)

***

### parent

#### Get Signature

> **get** **parent**(): [`Transform`](Transform.md)

Defined in: [src/core/entities/Object3D.ts:336](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L336)

Transform component of object parent

##### Returns

[`Transform`](Transform.md)

#### Inherited from

[`Object3D`](Object3D.md).[`parent`](Object3D.md#parent)

***

### parentObject

#### Get Signature

> **get** **parentObject**(): [`Object3D`](Object3D.md)

Defined in: [src/core/entities/Object3D.ts:344](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L344)

parent object3D

##### Returns

[`Object3D`](Object3D.md)

#### Inherited from

[`Object3D`](Object3D.md).[`parentObject`](Object3D.md#parentobject)

***

### x

#### Get Signature

> **get** **x**(): `number`

Defined in: [src/core/entities/Object3D.ts:360](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L360)

Get the x coordinate relative to the local coordinates of the parent container.

##### Returns

`number`

#### Set Signature

> **set** **x**(`value`): `void`

Defined in: [src/core/entities/Object3D.ts:352](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L352)

Set the x coordinate relative to the local coordinates of the parent container.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`x`](Object3D.md#x)

***

### y

#### Get Signature

> **get** **y**(): `number`

Defined in: [src/core/entities/Object3D.ts:375](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L375)

Get the y coordinate relative to the local coordinates of the parent container.

##### Returns

`number`

#### Set Signature

> **set** **y**(`value`): `void`

Defined in: [src/core/entities/Object3D.ts:367](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L367)

Set the y coordinate relative to the local coordinates of the parent container.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`y`](Object3D.md#y)

***

### z

#### Get Signature

> **get** **z**(): `number`

Defined in: [src/core/entities/Object3D.ts:389](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L389)

Get the z coordinate relative to the local coordinates of the parent container.

##### Returns

`number`

#### Set Signature

> **set** **z**(`value`): `void`

Defined in: [src/core/entities/Object3D.ts:382](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L382)

Set the z coordinate relative to the local coordinates of the parent container.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`z`](Object3D.md#z)

***

### scaleX

#### Get Signature

> **get** **scaleX**(): `number`

Defined in: [src/core/entities/Object3D.ts:404](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L404)

Get the x scale relative to the local coordinates of the parent container.

##### Returns

`number`

#### Set Signature

> **set** **scaleX**(`value`): `void`

Defined in: [src/core/entities/Object3D.ts:396](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L396)

Set the x scale relative to the local coordinates of the parent container.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`scaleX`](Object3D.md#scalex)

***

### scaleY

#### Get Signature

> **get** **scaleY**(): `number`

Defined in: [src/core/entities/Object3D.ts:420](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L420)

Get the y scale relative to the local coordinates of the parent container.

##### Returns

`number`

#### Set Signature

> **set** **scaleY**(`value`): `void`

Defined in: [src/core/entities/Object3D.ts:412](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L412)

Set the y scale relative to the local coordinates of the parent container.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`scaleY`](Object3D.md#scaley)

***

### scaleZ

#### Get Signature

> **get** **scaleZ**(): `number`

Defined in: [src/core/entities/Object3D.ts:436](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L436)

Get the z scale relative to the local coordinates of the parent container.

##### Returns

`number`

#### Set Signature

> **set** **scaleZ**(`value`): `void`

Defined in: [src/core/entities/Object3D.ts:428](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L428)

Set the z scale relative to the local coordinates of the parent container.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`scaleZ`](Object3D.md#scalez)

***

### rotationX

#### Get Signature

> **get** **rotationX**(): `number`

Defined in: [src/core/entities/Object3D.ts:452](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L452)

Get the x rotation relative to the local coordinates of the parent container.

##### Returns

`number`

#### Set Signature

> **set** **rotationX**(`value`): `void`

Defined in: [src/core/entities/Object3D.ts:444](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L444)

Set the x rotation relative to the local coordinates of the parent container.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`rotationX`](Object3D.md#rotationx)

***

### rotationY

#### Get Signature

> **get** **rotationY**(): `number`

Defined in: [src/core/entities/Object3D.ts:468](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L468)

Get the y rotation relative to the local coordinates of the parent container.

##### Returns

`number`

#### Set Signature

> **set** **rotationY**(`value`): `void`

Defined in: [src/core/entities/Object3D.ts:460](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L460)

Set the y rotation relative to the local coordinates of the parent container.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`rotationY`](Object3D.md#rotationy)

***

### rotationZ

#### Get Signature

> **get** **rotationZ**(): `number`

Defined in: [src/core/entities/Object3D.ts:484](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L484)

Set the z rotation relative to the local coordinates of the parent container.

##### Returns

`number`

#### Set Signature

> **set** **rotationZ**(`value`): `void`

Defined in: [src/core/entities/Object3D.ts:476](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L476)

Set the z rotation relative to the local coordinates of the parent container.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`rotationZ`](Object3D.md#rotationz)

## Methods

### getObjectByName()

> **getObjectByName**(`name`): [`Entity`](Entity.md)

Defined in: [src/core/entities/Entity.ts:78](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L78)

Starting from the object itself, search for the object and its children, and return the first child object with a matching name.
For most objects, the name is an empty string by default. You must manually set it to use this method.

#### Parameters

##### name

`string`

input name

#### Returns

[`Entity`](Entity.md)

result Entity

#### Inherited from

[`Object3D`](Object3D.md).[`getObjectByName`](Object3D.md#getobjectbyname)

***

### addChild()

> **addChild**(`child`): [`Entity`](Entity.md)

Defined in: [src/core/entities/Entity.ts:124](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L124)

Add an object as a child of this object. You can add any number of objects.
Any current parent object on the object passed here will be deleted, as an object can only have at most one parent object.

#### Parameters

##### child

[`Entity`](Entity.md)

target child entity

#### Returns

[`Entity`](Entity.md)

#### Inherited from

[`Object3D`](Object3D.md).[`addChild`](Object3D.md#addchild)

***

### removeChild()

> **removeChild**(`child`): `void`

Defined in: [src/core/entities/Entity.ts:149](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L149)

Remove the child objects of the object. You can remove any number of objects.

#### Parameters

##### child

[`Entity`](Entity.md)

Removed objects

#### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`removeChild`](Object3D.md#removechild)

***

### removeAllChild()

> **removeAllChild**(): `void`

Defined in: [src/core/entities/Entity.ts:165](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L165)

Remove all children of the current object

#### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`removeAllChild`](Object3D.md#removeallchild)

***

### removeSelf()

> **removeSelf**(): `this`

Defined in: [src/core/entities/Entity.ts:176](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L176)

Remove the current node from the parent

#### Returns

`this`

this

#### Inherited from

[`Object3D`](Object3D.md).[`removeSelf`](Object3D.md#removeself)

***

### removeChildByIndex()

> **removeChildByIndex**(`index`): `void`

Defined in: [src/core/entities/Entity.ts:186](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L186)

Search for child nodes of objects and remove child objects with matching indexes.

#### Parameters

##### index

`number`

assign index

#### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`removeChildByIndex`](Object3D.md#removechildbyindex)

***

### hasChild()

> **hasChild**(`child`): `boolean`

Defined in: [src/core/entities/Entity.ts:200](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L200)

Does the current object contain a certain object

#### Parameters

##### child

[`Entity`](Entity.md)

certain object

#### Returns

`boolean`

boolean

#### Inherited from

[`Object3D`](Object3D.md).[`hasChild`](Object3D.md#haschild)

***

### removeFromParent()

> **removeFromParent**(): `this`

Defined in: [src/core/entities/Entity.ts:210](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L210)

Remove the current node from the parent

#### Returns

`this`

this

#### Inherited from

[`Object3D`](Object3D.md).[`removeFromParent`](Object3D.md#removefromparent)

***

### getChildByIndex()

> **getChildByIndex**(`index`): [`Entity`](Entity.md)

Defined in: [src/core/entities/Entity.ts:224](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L224)

Search for object children and return the first child object with a matching index.

#### Parameters

##### index

`number`

matching index

#### Returns

[`Entity`](Entity.md)

child entity

#### Inherited from

[`Object3D`](Object3D.md).[`getChildByIndex`](Object3D.md#getchildbyindex)

***

### getChildByName()

> **getChildByName**(`name`, `loopChild?`): `any`

Defined in: [src/core/entities/Entity.ts:239](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L239)

Search for object children and return a child object with a matching name.

#### Parameters

##### name

`string`

matching name

##### loopChild?

`boolean` = `true`

Whether to traverse the children of the child object. The default value is true

#### Returns

`any`

result

#### Inherited from

[`Object3D`](Object3D.md).[`getChildByName`](Object3D.md#getchildbyname)

***

### noticeComponents()

> **noticeComponents**(`key`, `data`): `void`

Defined in: [src/core/entities/Entity.ts:325](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L325)

#### Parameters

##### key

keyof [`IComponent`](../interfaces/IComponent.md)

##### data

`any`

#### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`noticeComponents`](Object3D.md#noticecomponents)

***

### forChild()

> **forChild**(`call`): `void`

Defined in: [src/core/entities/Object3D.ts:41](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L41)

Traverse all sub objects starting from the object itself.
 If there are still sub objects in the sub object, recursively traverse.

#### Parameters

##### call

`Function`

#### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`forChild`](Object3D.md#forchild)

***

### addComponent()

> **addComponent**\<`T`\>(`c`, `param?`): `T`

Defined in: [src/core/entities/Object3D.ts:55](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L55)

Create a new component and add it to the object, and return an instance of the component.
 If a component of this type already exists, it will not be added and will return null.

#### Type Parameters

##### T

`T` *extends* [`IComponent`](../interfaces/IComponent.md)

#### Parameters

##### c

[`Ctor`](../type-aliases/Ctor.md)\<`T`\>

class of component

##### param?

`any`

#### Returns

`T`

result component

#### Inherited from

[`Object3D`](Object3D.md).[`addComponent`](Object3D.md#addcomponent)

***

### getOrAddComponent()

> **getOrAddComponent**\<`T`\>(`c`): `T`

Defined in: [src/core/entities/Object3D.ts:76](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L76)

Returns an instance of a component object of the specified type.
 If there are no components of that type, a new component is created and added to the object.

#### Type Parameters

##### T

`T` *extends* [`IComponent`](../interfaces/IComponent.md)

#### Parameters

##### c

[`Ctor`](../type-aliases/Ctor.md)\<`T`\>

class of component

#### Returns

`T`

result component

#### Inherited from

[`Object3D`](Object3D.md).[`getOrAddComponent`](Object3D.md#getoraddcomponent)

***

### removeComponent()

> **removeComponent**\<`T`\>(`c`): `void`

Defined in: [src/core/entities/Object3D.ts:89](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L89)

Remove components of the specified type

#### Type Parameters

##### T

`T` *extends* [`IComponent`](../interfaces/IComponent.md)

#### Parameters

##### c

[`Ctor`](../type-aliases/Ctor.md)\<`T`\>

class of component

#### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`removeComponent`](Object3D.md#removecomponent)

***

### hasComponent()

> **hasComponent**\<`T`\>(`c`): `boolean`

Defined in: [src/core/entities/Object3D.ts:106](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L106)

Is there a component of the specified type

#### Type Parameters

##### T

`T` *extends* [`IComponent`](../interfaces/IComponent.md)

#### Parameters

##### c

[`Ctor`](../type-aliases/Ctor.md)\<`T`\>

type of component

#### Returns

`boolean`

boolean

#### Inherited from

[`Object3D`](Object3D.md).[`hasComponent`](Object3D.md#hascomponent)

***

### getComponent()

> **getComponent**\<`T`\>(`c`): `T`

Defined in: [src/core/entities/Object3D.ts:116](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L116)

Returns a component of the specified type.

#### Type Parameters

##### T

`T` *extends* [`IComponent`](../interfaces/IComponent.md)

#### Parameters

##### c

[`Ctor`](../type-aliases/Ctor.md)\<`T`\>

class of component

#### Returns

`T`

result component

#### Inherited from

[`Object3D`](Object3D.md).[`getComponent`](Object3D.md#getcomponent)

***

### getComponentFromParent()

> **getComponentFromParent**\<`T`\>(`c`): `T`

Defined in: [src/core/entities/Object3D.ts:128](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L128)

Returns a component object of the specified type from the parent node.
 If there are no components of that type,
 calls the parent object lookup of the parent object

#### Type Parameters

##### T

`T` *extends* [`IComponent`](../interfaces/IComponent.md)

#### Parameters

##### c

[`Ctor`](../type-aliases/Ctor.md)\<`T`\>

class of component

#### Returns

`T`

reulst component

#### Inherited from

[`Object3D`](Object3D.md).[`getComponentFromParent`](Object3D.md#getcomponentfromparent)

***

### getComponentsInChild()

> **getComponentsInChild**\<`T`\>(`c`): `T`[]

Defined in: [src/core/entities/Object3D.ts:148](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L148)

Returns an array of component objects of the specified type.
 If there are no components of that type, search in the list of self body class objects

#### Type Parameters

##### T

`T` *extends* [`IComponent`](../interfaces/IComponent.md)

#### Parameters

##### c

[`Ctor`](../type-aliases/Ctor.md)\<`T`\>

class of component

#### Returns

`T`[]

result components

#### Inherited from

[`Object3D`](Object3D.md).[`getComponentsInChild`](Object3D.md#getcomponentsinchild)

***

### getComponents()

> **getComponents**\<`T`\>(`c`, `outList?`, `includeInactive?`): `T`[]

Defined in: [src/core/entities/Object3D.ts:171](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L171)

Returns all components of the specified type contained in the current object and its children.
 If there are children in the child object, recursively search.

#### Type Parameters

##### T

`T` *extends* [`IComponent`](../interfaces/IComponent.md)

#### Parameters

##### c

[`Ctor`](../type-aliases/Ctor.md)\<`T`\>

class of component

##### outList?

`T`[]

result component list

##### includeInactive?

`boolean`

Whether to include invisible objects, default to false

#### Returns

`T`[]

#### Inherited from

[`Object3D`](Object3D.md).[`getComponents`](Object3D.md#getcomponents)

***

### getComponentsExt()

> **getComponentsExt**\<`T`\>(`c`, `ret?`, `includeInactive?`): `T`[]

Defined in: [src/core/entities/Object3D.ts:196](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L196)

Quickly obtain components and no longer access child nodes after obtaining them at a certain node

#### Type Parameters

##### T

`T` *extends* [`IComponent`](../interfaces/IComponent.md)

#### Parameters

##### c

[`Ctor`](../type-aliases/Ctor.md)\<`T`\>

class of component

##### ret?

`T`[]

List of incoming T

##### includeInactive?

`boolean`

Whether to include invisible objects, default to false

#### Returns

`T`[]

{T}

#### Memberof

Object3D

#### Inherited from

[`Object3D`](Object3D.md).[`getComponentsExt`](Object3D.md#getcomponentsext)

***

### getComponentsByProperty()

> **getComponentsByProperty**\<`T`\>(`key`, `value`, `findedAndBreak?`, `ret?`, `includeInactive?`): `T`[]

Defined in: [src/core/entities/Object3D.ts:211](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L211)

#### Type Parameters

##### T

`T` *extends* [`IComponent`](../interfaces/IComponent.md)

#### Parameters

##### key

`string`

##### value

`any`

##### findedAndBreak?

`boolean` = `true`

##### ret?

`T`[]

##### includeInactive?

`boolean`

#### Returns

`T`[]

#### Inherited from

[`Object3D`](Object3D.md).[`getComponentsByProperty`](Object3D.md#getcomponentsbyproperty)

***

### clone()

> **clone**(): [`Object3D`](Object3D.md)

Defined in: [src/core/entities/Object3D.ts:238](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L238)

clone a Object3D

#### Returns

[`Object3D`](Object3D.md)

#### Inherited from

[`Object3D`](Object3D.md).[`clone`](Object3D.md#clone)

***

### notifyChange()

> **notifyChange**(): `void`

Defined in: [src/core/entities/Object3D.ts:328](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L328)

Notify transformation attribute updates

#### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`notifyChange`](Object3D.md#notifychange)

***

### traverse()

> **traverse**(`callback`): `void`

Defined in: [src/core/entities/Object3D.ts:505](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L505)

Recursive child nodes and execute specified function

#### Parameters

##### callback

(`child`) => `void`

specified function

#### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`traverse`](Object3D.md#traverse)

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/core/entities/Object3D.ts:520](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L520)

Release self

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`destroy`](Object3D.md#destroy)

***

### dispatchEvent()

> **dispatchEvent**(`event`): `void`

Defined in: [src/event/CEventDispatcher.ts:24](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L24)

Dispatch an event to all registered objects with a specific type of listener.

#### Parameters

##### event

[`CEvent`](CEvent.md)

#### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`dispatchEvent`](Object3D.md#dispatchevent)

***

### addEventListener()

> **addEventListener**(`type`, `callback`, `thisObject`, `param?`, `priority?`): `number`

Defined in: [src/event/CEventDispatcher.ts:78](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L78)

register an event listener to event distancher.

#### Parameters

##### type

`string` \| `number`

{string} event type.

##### callback

`Function`

{Function} The callback function that handles events. 
This function must accept an Event3D object as its unique parameter and cannot return any result.
for example: function(evt:Event3D):void.

##### thisObject

`any`

{any} Current registration object, it'll call callback function.

##### param?

`any` = `null`

{any} the data binded to registered event, the default value is null.

##### priority?

`number` = `0`

{number} The priority of callback function execution, with a larger set value having priority to call

#### Returns

`number`

Returns register event id

#### Inherited from

[`Object3D`](Object3D.md).[`addEventListener`](Object3D.md#addeventlistener)

***

### removeEventListener()

> **removeEventListener**(`type`, `callback`, `thisObject`): `void`

Defined in: [src/event/CEventDispatcher.ts:112](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L112)

Remove Event Listening

#### Parameters

##### type

`string` \| `number`

{string} event type

##### callback

`Function`

{Function} callback function of event register

##### thisObject

`any`

{any} The current registered object.

#### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`removeEventListener`](Object3D.md#removeeventlistener)

***

### removeEventListenerAt()

> **removeEventListenerAt**(`id`): `boolean`

Defined in: [src/event/CEventDispatcher.ts:132](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L132)

Remove an event Listening with id

#### Parameters

##### id

`number`

#### Returns

`boolean`

#### Inherited from

[`Object3D`](Object3D.md).[`removeEventListenerAt`](Object3D.md#removeeventlistenerat)

***

### removeAllEventListener()

> **removeAllEventListener**(`eventType?`): `void`

Defined in: [src/event/CEventDispatcher.ts:152](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L152)

Specify a event type to remove all related event listeners
eventType event type, set null to remove all event listeners

#### Parameters

##### eventType?

`string` \| `number`

#### Returns

`void`

#### Inherited from

[`Object3D`](Object3D.md).[`removeAllEventListener`](Object3D.md#removealleventlistener)

***

### containEventListener()

> **containEventListener**(`type`): `boolean`

Defined in: [src/event/CEventDispatcher.ts:184](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L184)

whether the target presence of a listener with event type.

#### Parameters

##### type

`string`

{string} event type.

#### Returns

`boolean`

Returns a boolean.

#### Inherited from

[`Object3D`](Object3D.md).[`containEventListener`](Object3D.md#containeventlistener)

***

### hasEventListener()

> **hasEventListener**(`type`, `callback?`, `thisObject?`): `boolean`

Defined in: [src/event/CEventDispatcher.ts:197](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L197)

whether the target presence of a listener with event type. it associate more registration parameters.

#### Parameters

##### type

`string` \| `number`

{string} event name.

##### callback?

`Function` = `null`

{Function} callback function of event register.

##### thisObject?

`any` = `null`

{any} The registered object.

#### Returns

`boolean`

Returns a boolean.

#### Inherited from

[`Object3D`](Object3D.md).[`hasEventListener`](Object3D.md#haseventlistener)
