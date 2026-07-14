[**@orillusion/graphic**](../README.md)

***

# Class: Graphic3D

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:6](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L6)

## Extends

- `Object3D`

## Constructors

### Constructor

> **new Graphic3D**(): `Graphic3D`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:10](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L10)

#### Returns

`Graphic3D`

#### Overrides

`Object3D.constructor`

## Properties

### name

> **name**: `string` = `''`

Defined in: [src/core/entities/Entity.ts:23](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L23)

The name of the object. The default value is an empty string.

#### Inherited from

`Object3D.name`

***

### transform

> **transform**: `Transform`

Defined in: [src/core/entities/Entity.ts:38](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L38)

The Transform attached to this object.

#### Inherited from

`Object3D.transform`

***

### renderNode

> **renderNode**: `RenderNode`

Defined in: [src/core/entities/Entity.ts:43](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L43)

Renderer components

#### Inherited from

`Object3D.renderNode`

***

### entityChildren

> **entityChildren**: `Entity`[]

Defined in: [src/core/entities/Entity.ts:48](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L48)

An array containing sub objects of an object

#### Inherited from

`Object3D.entityChildren`

***

### components

> **components**: `Map`\<`any`, `IComponent`\>

Defined in: [src/core/entities/Entity.ts:53](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L53)

List of components attached to an object

#### Inherited from

`Object3D.components`

***

### prefabRef?

> `optional` **prefabRef?**: `string`

Defined in: [src/core/entities/Object3D.ts:19](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L19)

#### Inherited from

`Object3D.prefabRef`

***

### serializeTag?

> `optional` **serializeTag?**: `SerializeTag`

Defined in: [src/core/entities/Object3D.ts:20](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L20)

#### Inherited from

`Object3D.serializeTag`

***

### mLineRender

> **mLineRender**: `Graphic3DLineRenderer`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:7](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L7)

***

### mFillRender

> **mFillRender**: `Graphic3DFillRenderer`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:8](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L8)

## Accessors

### instanceID

#### Get Signature

> **get** **instanceID**(): `string`

Defined in: [src/core/entities/Entity.ts:31](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L31)

The unique identifier of the object.

##### Returns

`string`

#### Inherited from

`Object3D.instanceID`

***

### dispose

#### Get Signature

> **get** **dispose**(): `boolean`

Defined in: [src/core/entities/Entity.ts:67](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L67)

##### Returns

`boolean`

#### Inherited from

`Object3D.dispose`

***

### numChildren

#### Get Signature

> **get** **numChildren**(): `number`

Defined in: [src/core/entities/Entity.ts:113](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L113)

Returns the number of child objects of an object

##### Returns

`number`

#### Inherited from

`Object3D.numChildren`

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

`Object3D.bound`

***

### isScene3D

#### Get Signature

> **get** **isScene3D**(): `boolean`

Defined in: [src/core/entities/Object3D.ts:30](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L30)

##### Returns

`boolean`

#### Inherited from

`Object3D.isScene3D`

***

### localPosition

#### Get Signature

> **get** **localPosition**(): `Vector3`

Defined in: [src/core/entities/Object3D.ts:272](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L272)

Get the position of an object relative to its parent

##### Returns

`Vector3`

#### Set Signature

> **set** **localPosition**(`value`): `void`

Defined in: [src/core/entities/Object3D.ts:279](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L279)

Set the position of an object relative to its parent

##### Parameters

###### value

`Vector3`

##### Returns

`void`

#### Inherited from

`Object3D.localPosition`

***

### localRotation

#### Get Signature

> **get** **localRotation**(): `Vector3`

Defined in: [src/core/entities/Object3D.ts:286](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L286)

Get the rotation attribute of an object relative to its parent

##### Returns

`Vector3`

#### Set Signature

> **set** **localRotation**(`value`): `void`

Defined in: [src/core/entities/Object3D.ts:293](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L293)

Set the rotation attribute of an object relative to its parent

##### Parameters

###### value

`Vector3`

##### Returns

`void`

#### Inherited from

`Object3D.localRotation`

***

### localScale

#### Get Signature

> **get** **localScale**(): `Vector3`

Defined in: [src/core/entities/Object3D.ts:300](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L300)

Get the scaling attribute of an object relative to its parent

##### Returns

`Vector3`

#### Set Signature

> **set** **localScale**(`value`): `void`

Defined in: [src/core/entities/Object3D.ts:307](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L307)

Set the scaling attribute of an object relative to its parent

##### Parameters

###### value

`Vector3`

##### Returns

`void`

#### Inherited from

`Object3D.localScale`

***

### localQuaternion

#### Get Signature

> **get** **localQuaternion**(): `Quaternion`

Defined in: [src/core/entities/Object3D.ts:314](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L314)

Get the rotation attribute of an object relative to its parent, which is a quaternion

##### Returns

`Quaternion`

#### Set Signature

> **set** **localQuaternion**(`value`): `void`

Defined in: [src/core/entities/Object3D.ts:321](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L321)

Set the rotation attribute of an object relative to its parent, which is a quaternion

##### Parameters

###### value

`Quaternion`

##### Returns

`void`

#### Inherited from

`Object3D.localQuaternion`

***

### parent

#### Get Signature

> **get** **parent**(): `Transform`

Defined in: [src/core/entities/Object3D.ts:336](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L336)

Transform component of object parent

##### Returns

`Transform`

#### Inherited from

`Object3D.parent`

***

### parentObject

#### Get Signature

> **get** **parentObject**(): `Object3D`

Defined in: [src/core/entities/Object3D.ts:344](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L344)

parent object3D

##### Returns

`Object3D`

#### Inherited from

`Object3D.parentObject`

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

`Object3D.x`

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

`Object3D.y`

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

`Object3D.z`

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

`Object3D.scaleX`

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

`Object3D.scaleY`

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

`Object3D.scaleZ`

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

`Object3D.rotationX`

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

`Object3D.rotationY`

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

`Object3D.rotationZ`

## Methods

### getObjectByName()

> **getObjectByName**(`name`): `Entity`

Defined in: [src/core/entities/Entity.ts:78](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L78)

Starting from the object itself, search for the object and its children, and return the first child object with a matching name.
For most objects, the name is an empty string by default. You must manually set it to use this method.

#### Parameters

##### name

`string`

input name

#### Returns

`Entity`

result Entity

#### Inherited from

`Object3D.getObjectByName`

***

### addChild()

> **addChild**(`child`): `Entity`

Defined in: [src/core/entities/Entity.ts:124](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L124)

Add an object as a child of this object. You can add any number of objects.
Any current parent object on the object passed here will be deleted, as an object can only have at most one parent object.

#### Parameters

##### child

`Entity`

target child entity

#### Returns

`Entity`

#### Inherited from

`Object3D.addChild`

***

### removeChild()

> **removeChild**(`child`): `void`

Defined in: [src/core/entities/Entity.ts:149](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L149)

Remove the child objects of the object. You can remove any number of objects.

#### Parameters

##### child

`Entity`

Removed objects

#### Returns

`void`

#### Inherited from

`Object3D.removeChild`

***

### removeAllChild()

> **removeAllChild**(): `void`

Defined in: [src/core/entities/Entity.ts:165](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L165)

Remove all children of the current object

#### Returns

`void`

#### Inherited from

`Object3D.removeAllChild`

***

### removeSelf()

> **removeSelf**(): `this`

Defined in: [src/core/entities/Entity.ts:176](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L176)

Remove the current node from the parent

#### Returns

`this`

this

#### Inherited from

`Object3D.removeSelf`

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

`Object3D.removeChildByIndex`

***

### hasChild()

> **hasChild**(`child`): `boolean`

Defined in: [src/core/entities/Entity.ts:200](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L200)

Does the current object contain a certain object

#### Parameters

##### child

`Entity`

certain object

#### Returns

`boolean`

boolean

#### Inherited from

`Object3D.hasChild`

***

### removeFromParent()

> **removeFromParent**(): `this`

Defined in: [src/core/entities/Entity.ts:210](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L210)

Remove the current node from the parent

#### Returns

`this`

this

#### Inherited from

`Object3D.removeFromParent`

***

### getChildByIndex()

> **getChildByIndex**(`index`): `Entity`

Defined in: [src/core/entities/Entity.ts:224](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L224)

Search for object children and return the first child object with a matching index.

#### Parameters

##### index

`number`

matching index

#### Returns

`Entity`

child entity

#### Inherited from

`Object3D.getChildByIndex`

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

`Object3D.getChildByName`

***

### noticeComponents()

> **noticeComponents**(`key`, `data`): `void`

Defined in: [src/core/entities/Entity.ts:325](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L325)

#### Parameters

##### key

keyof `IComponent`

##### data

`any`

#### Returns

`void`

#### Inherited from

`Object3D.noticeComponents`

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

`Object3D.forChild`

***

### addComponent()

> **addComponent**\<`T`\>(`c`, `param?`): `T`

Defined in: [src/core/entities/Object3D.ts:55](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L55)

Create a new component and add it to the object, and return an instance of the component.
 If a component of this type already exists, it will not be added and will return null.

#### Type Parameters

##### T

`T` *extends* `IComponent`

#### Parameters

##### c

`Ctor`\<`T`\>

class of component

##### param?

`any`

#### Returns

`T`

result component

#### Inherited from

`Object3D.addComponent`

***

### getOrAddComponent()

> **getOrAddComponent**\<`T`\>(`c`): `T`

Defined in: [src/core/entities/Object3D.ts:76](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L76)

Returns an instance of a component object of the specified type.
 If there are no components of that type, a new component is created and added to the object.

#### Type Parameters

##### T

`T` *extends* `IComponent`

#### Parameters

##### c

`Ctor`\<`T`\>

class of component

#### Returns

`T`

result component

#### Inherited from

`Object3D.getOrAddComponent`

***

### removeComponent()

> **removeComponent**\<`T`\>(`c`): `void`

Defined in: [src/core/entities/Object3D.ts:89](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L89)

Remove components of the specified type

#### Type Parameters

##### T

`T` *extends* `IComponent`

#### Parameters

##### c

`Ctor`\<`T`\>

class of component

#### Returns

`void`

#### Inherited from

`Object3D.removeComponent`

***

### hasComponent()

> **hasComponent**\<`T`\>(`c`): `boolean`

Defined in: [src/core/entities/Object3D.ts:106](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L106)

Is there a component of the specified type

#### Type Parameters

##### T

`T` *extends* `IComponent`

#### Parameters

##### c

`Ctor`\<`T`\>

type of component

#### Returns

`boolean`

boolean

#### Inherited from

`Object3D.hasComponent`

***

### getComponent()

> **getComponent**\<`T`\>(`c`): `T`

Defined in: [src/core/entities/Object3D.ts:116](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L116)

Returns a component of the specified type.

#### Type Parameters

##### T

`T` *extends* `IComponent`

#### Parameters

##### c

`Ctor`\<`T`\>

class of component

#### Returns

`T`

result component

#### Inherited from

`Object3D.getComponent`

***

### getComponentFromParent()

> **getComponentFromParent**\<`T`\>(`c`): `T`

Defined in: [src/core/entities/Object3D.ts:128](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L128)

Returns a component object of the specified type from the parent node.
 If there are no components of that type,
 calls the parent object lookup of the parent object

#### Type Parameters

##### T

`T` *extends* `IComponent`

#### Parameters

##### c

`Ctor`\<`T`\>

class of component

#### Returns

`T`

reulst component

#### Inherited from

`Object3D.getComponentFromParent`

***

### getComponentsInChild()

> **getComponentsInChild**\<`T`\>(`c`): `T`[]

Defined in: [src/core/entities/Object3D.ts:148](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L148)

Returns an array of component objects of the specified type.
 If there are no components of that type, search in the list of self body class objects

#### Type Parameters

##### T

`T` *extends* `IComponent`

#### Parameters

##### c

`Ctor`\<`T`\>

class of component

#### Returns

`T`[]

result components

#### Inherited from

`Object3D.getComponentsInChild`

***

### getComponents()

> **getComponents**\<`T`\>(`c`, `outList?`, `includeInactive?`): `T`[]

Defined in: [src/core/entities/Object3D.ts:171](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L171)

Returns all components of the specified type contained in the current object and its children.
 If there are children in the child object, recursively search.

#### Type Parameters

##### T

`T` *extends* `IComponent`

#### Parameters

##### c

`Ctor`\<`T`\>

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

`Object3D.getComponents`

***

### getComponentsExt()

> **getComponentsExt**\<`T`\>(`c`, `ret?`, `includeInactive?`): `T`[]

Defined in: [src/core/entities/Object3D.ts:196](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L196)

Quickly obtain components and no longer access child nodes after obtaining them at a certain node

#### Type Parameters

##### T

`T` *extends* `IComponent`

#### Parameters

##### c

`Ctor`\<`T`\>

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

`Object3D.getComponentsExt`

***

### getComponentsByProperty()

> **getComponentsByProperty**\<`T`\>(`key`, `value`, `findedAndBreak?`, `ret?`, `includeInactive?`): `T`[]

Defined in: [src/core/entities/Object3D.ts:211](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L211)

#### Type Parameters

##### T

`T` *extends* `IComponent`

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

`Object3D.getComponentsByProperty`

***

### clone()

> **clone**(): `Object3D`

Defined in: [src/core/entities/Object3D.ts:238](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L238)

clone a Object3D

#### Returns

`Object3D`

#### Inherited from

`Object3D.clone`

***

### notifyChange()

> **notifyChange**(): `void`

Defined in: [src/core/entities/Object3D.ts:328](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L328)

Notify transformation attribute updates

#### Returns

`void`

#### Inherited from

`Object3D.notifyChange`

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

`Object3D.traverse`

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

`Object3D.destroy`

***

### dispatchEvent()

> **dispatchEvent**(`event`): `void`

Defined in: [src/event/CEventDispatcher.ts:24](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L24)

Dispatch an event to all registered objects with a specific type of listener.

#### Parameters

##### event

`CEvent`

#### Returns

`void`

#### Inherited from

`Object3D.dispatchEvent`

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

`Object3D.addEventListener`

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

`Object3D.removeEventListener`

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

`Object3D.removeEventListenerAt`

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

`Object3D.removeAllEventListener`

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

`Object3D.containEventListener`

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

`Object3D.hasEventListener`

***

### drawAxis()

> **drawAxis**(`uuid`, `origin?`, `size?`): `void`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:23](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L23)

Draw the 3 - dimensional axes

#### Parameters

##### uuid

`string`

Graphic identification ID

##### origin?

`Vector3` = `...`

original point

##### size?

`number` = `10`

Length of axis

#### Returns

`void`

***

### drawLines()

> **drawLines**(`uuid`, `points`, `colors?`): `void`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:35](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L35)

Draw a line

#### Parameters

##### uuid

`string`

Graphic identification ID

##### points

`Vector3`[]

Line path point

##### colors?

`Color` \| `Color`[]

#### Returns

`void`

***

### drawCurve()

> **drawCurve**(`uuid`, `points`, `samples?`, `tension?`, `color?`): `void`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:49](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L49)

drawing curve

#### Parameters

##### uuid

`string`

Graphic identification ID

##### points

`Vector3`[]

Curve position point

##### samples?

`number` = `10`

Number of Samples

##### tension?

`number` = `0.5`

Strength of curve

##### color?

`Color` = `Color.COLOR_WHITE`

Color of curve

#### Returns

`void`

***

### drawRect()

> **drawRect**(`uuid`, `origin`, `width`, `height`, `color?`): `void`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:97](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L97)

Draw a rectangle

#### Parameters

##### uuid

`string`

Graphic identification ID

##### origin

`Vector3`

original point

##### width

`number`

Width of rectangle

##### height

`number`

Height of rectangle

##### color?

`Color` = `Color.COLOR_WHITE`

The color of the rectangle

#### Returns

`void`

***

### drawCircle()

> **drawCircle**(`uuid`, `center`, `radius`, `segments?`, `up?`, `color?`): `void`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:116](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L116)

Draw a circle

#### Parameters

##### uuid

`string`

Graphic identification ID

##### center

`Vector3`

centre point

##### radius

`number`

radius

##### segments?

`number` = `32`

Number of line segments

##### up?

`Vector3` = `Vector3.Y_AXIS`

Direction of plane

##### color?

`Color` = `Color.COLOR_WHITE`

The color of the circle

#### Returns

`void`

***

### drawSector()

> **drawSector**(`uuid`, `center`, `radius`, `startAngle`, `endAngle`, `segments?`, `up?`, `color?`): `void`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:133](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L133)

Draw a Sector

#### Parameters

##### uuid

`string`

Graphic identification ID

##### center

`Vector3`

centre point

##### radius

`number`

radius

##### startAngle

`number`

Angle of onset

##### endAngle

`number`

Angle of end

##### segments?

`number` = `16`

number of segments

##### up?

`Vector3` = `Vector3.Y_AXIS`

Direction of plane

##### color?

`Color` = `Color.COLOR_WHITE`

The color of the sector

#### Returns

`void`

***

### drawArcLine()

> **drawArcLine**(`uuid`, `center`, `radius`, `startAngle`, `endAngle`, `segments?`, `up?`, `color?`): `void`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:176](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L176)

Draw a ArcLine

#### Parameters

##### uuid

`string`

Graphic identification ID

##### center

`Vector3`

centre point

##### radius

`number`

radius

##### startAngle

`number`

Angle of onset

##### endAngle

`number`

Angle of end

##### segments?

`number` = `16`

number of segments

##### up?

`Vector3` = `Vector3.Y_AXIS`

Direction of plane

##### color?

`Color` = `Color.COLOR_WHITE`

The color of the sector

#### Returns

`void`

***

### createCustomShape()

> **createCustomShape**(`uuid`, `parentTransform?`): `Graphics3DShape`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:188](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L188)

Creates a custom line segment graph and returns a Shape with the same uuid from the pool if it already exists.

#### Parameters

##### uuid

`string`

Graphic identification ID

##### parentTransform?

`Transform` = `...`

Parent node Transform

#### Returns

`Graphics3DShape`

Graphics3DShape

***

### drawBox()

> **drawBox**(`uuid`, `minPoint`, `maxPoint`, `color?`): `void`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:199](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L199)

Draw the box

#### Parameters

##### uuid

`string`

Graphic identification ID

##### minPoint

`Vector3`

Point of minimum

##### maxPoint

`Vector3`

Point of maximum

##### color?

`Color` = `Color.COLOR_WHITE`

The color of the box

#### Returns

`void`

***

### drawFillRect()

> **drawFillRect**(`uuid`, `origin`, `width`, `height`, `color?`): `void`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:241](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L241)

Draw the fill rectangle

#### Parameters

##### uuid

`string`

Graphic identification ID

##### origin

`Vector3`

##### width

`number`

##### height

`number`

##### color?

`Color` = `Color.COLOR_WHITE`

The color of the fill rectangle

#### Returns

`void`

***

### drawFillCircle()

> **drawFillCircle**(`uuid`, `center`, `radius`, `segments?`, `up?`, `color?`): `void`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:261](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L261)

Draw the fill circle

#### Parameters

##### uuid

`string`

Graphic identification ID

##### center

`Vector3`

centre point

##### radius

`number`

radius

##### segments?

`number` = `32`

number of segments

##### up?

`Vector3` = `Vector3.Y_AXIS`

Direction of plane

##### color?

`Color` = `Color.COLOR_WHITE`

The color of the fill circle

#### Returns

`void`

***

### drawMeshWireframe()

> **drawMeshWireframe**(`uuid`, `geometry`, `transform`, `color?`, `forceUpdate?`): `void`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:297](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L297)

Draw wire frame for geometry

#### Parameters

##### uuid

`string`

Graphic identification ID

##### geometry

`GeometryBase`

Geometric object

##### transform

`Transform`

The Transform that needs to be bound

##### color?

`Color` = `Color.COLOR_WHITE`

The color of the wire frame

##### forceUpdate?

`boolean` = `false`

#### Returns

`void`

***

### drawFillSector()

> **drawFillSector**(`uuid`, `center`, `radius`, `startAngle`, `endAngle`, `segments?`, `up?`, `color?`): `void`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:316](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L316)

Draw the fill sector

#### Parameters

##### uuid

`string`

Graphic identification ID

##### center

`Vector3`

centre point

##### radius

`number`

radius

##### startAngle

`number`

Angle of onset

##### endAngle

`number`

Angle of end

##### segments?

`number` = `16`

number of segments

##### up?

`Vector3` = `Vector3.Y_AXIS`

Direction of plane

##### color?

`Color` = `Color.COLOR_WHITE`

The color of the fill sector

#### Returns

`void`

***

### drawBoundingBox()

> **drawBoundingBox**(`uuid`, `boundingBox`, `color?`): `void`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:353](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L353)

Draw bounding box

#### Parameters

##### uuid

`string`

Graphic identification ID

##### boundingBox

`BoundingBox`

Bounding box object, please use world boundingbox

##### color?

`Color` = `Color.COLOR_WHITE`

The color of the bounding box

#### Returns

`void`

***

### drawCameraFrustum()

> **drawCameraFrustum**(`camera`, `color?`): `void`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:362](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L362)

Draw the camera cone

#### Parameters

##### camera

`Camera3D`

The camera to display the cone

##### color?

`Color` = `Color.COLOR_WHITE`

The color of the camera cone

#### Returns

`void`

***

### drawObjectBoundingBox()

> **drawObjectBoundingBox**(`obj`, `color?`): `void`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:428](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L428)

Draws the bounding box of the object

#### Parameters

##### obj

`Object3D`

The object to display the bounding box

##### color?

`Color` = `Color.COLOR_WHITE`

The color of the bounding box

#### Returns

`void`

***

### Clear()

> **Clear**(`uuid`): `void`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:437](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L437)

Erases the specified graph

#### Parameters

##### uuid

`string`

Graphic identification ID

#### Returns

`void`

***

### ClearAll()

> **ClearAll**(): `void`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:448](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L448)

Erase all drawn graphics

#### Returns

`void`

***

### ChangeColor()

> **ChangeColor**(`uuid`, `color`): `void`

Defined in: [packages/graphic/renderer/Graphic3DRender.ts:458](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L458)

Changes the specified graphics color

#### Parameters

##### uuid

`string`

Graphic identification ID

##### color

`Color`

New color value

#### Returns

`void`
