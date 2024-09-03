# Class: Graphic3D

## Hierarchy

- `Object3D`

  ↳ **`Graphic3D`**

### Constructors

- [constructor](Graphic3D.md#constructor)

### Properties

- [name](Graphic3D.md#name)
- [transform](Graphic3D.md#transform)
- [renderNode](Graphic3D.md#rendernode)
- [entityChildren](Graphic3D.md#entitychildren)
- [components](Graphic3D.md#components)
- [prefabRef](Graphic3D.md#prefabref)
- [serializeTag](Graphic3D.md#serializetag)

### Accessors

- [instanceID](Graphic3D.md#instanceid)
- [numChildren](Graphic3D.md#numchildren)
- [bound](Graphic3D.md#bound)
- [isScene3D](Graphic3D.md#isscene3d)
- [localPosition](Graphic3D.md#localposition)
- [localRotation](Graphic3D.md#localrotation)
- [localScale](Graphic3D.md#localscale)
- [localQuaternion](Graphic3D.md#localquaternion)
- [parent](Graphic3D.md#parent)
- [parentObject](Graphic3D.md#parentobject)
- [x](Graphic3D.md#x)
- [y](Graphic3D.md#y)
- [z](Graphic3D.md#z)
- [scaleX](Graphic3D.md#scalex)
- [scaleY](Graphic3D.md#scaley)
- [scaleZ](Graphic3D.md#scalez)
- [rotationX](Graphic3D.md#rotationx)
- [rotationY](Graphic3D.md#rotationy)
- [rotationZ](Graphic3D.md#rotationz)

### Methods

- [drawAxis](Graphic3D.md#drawaxis)
- [drawLines](Graphic3D.md#drawlines)
- [drawCurve](Graphic3D.md#drawcurve)
- [drawRect](Graphic3D.md#drawrect)
- [drawCircle](Graphic3D.md#drawcircle)
- [drawSector](Graphic3D.md#drawsector)
- [drawArcLine](Graphic3D.md#drawarcline)
- [createCustomShape](Graphic3D.md#createcustomshape)
- [drawBox](Graphic3D.md#drawbox)
- [drawFillRect](Graphic3D.md#drawfillrect)
- [drawFillCircle](Graphic3D.md#drawfillcircle)
- [drawMeshWireframe](Graphic3D.md#drawmeshwireframe)
- [drawFillSector](Graphic3D.md#drawfillsector)
- [drawBoundingBox](Graphic3D.md#drawboundingbox)
- [drawCameraFrustum](Graphic3D.md#drawcamerafrustum)
- [drawObjectBoundingBox](Graphic3D.md#drawobjectboundingbox)
- [Clear](Graphic3D.md#clear)
- [ClearAll](Graphic3D.md#clearall)
- [ChangeColor](Graphic3D.md#changecolor)
- [getObjectByName](Graphic3D.md#getobjectbyname)
- [addChild](Graphic3D.md#addchild)
- [removeChild](Graphic3D.md#removechild)
- [removeAllChild](Graphic3D.md#removeallchild)
- [removeSelf](Graphic3D.md#removeself)
- [removeChildByIndex](Graphic3D.md#removechildbyindex)
- [hasChild](Graphic3D.md#haschild)
- [removeFromParent](Graphic3D.md#removefromparent)
- [getChildByIndex](Graphic3D.md#getchildbyindex)
- [getChildByName](Graphic3D.md#getchildbyname)
- [noticeComponents](Graphic3D.md#noticecomponents)
- [forChild](Graphic3D.md#forchild)
- [addComponent](Graphic3D.md#addcomponent)
- [getOrAddComponent](Graphic3D.md#getoraddcomponent)
- [removeComponent](Graphic3D.md#removecomponent)
- [hasComponent](Graphic3D.md#hascomponent)
- [getComponent](Graphic3D.md#getcomponent)
- [getComponentFromParent](Graphic3D.md#getcomponentfromparent)
- [getComponentsInChild](Graphic3D.md#getcomponentsinchild)
- [getComponents](Graphic3D.md#getcomponents)
- [getComponentsExt](Graphic3D.md#getcomponentsext)
- [getComponentsByProperty](Graphic3D.md#getcomponentsbyproperty)
- [clone](Graphic3D.md#clone)
- [notifyChange](Graphic3D.md#notifychange)
- [traverse](Graphic3D.md#traverse)
- [destroy](Graphic3D.md#destroy)
- [dispatchEvent](Graphic3D.md#dispatchevent)
- [addEventListener](Graphic3D.md#addeventlistener)
- [removeEventListener](Graphic3D.md#removeeventlistener)
- [removeEventListenerAt](Graphic3D.md#removeeventlistenerat)
- [removeAllEventListener](Graphic3D.md#removealleventlistener)
- [containEventListener](Graphic3D.md#containeventlistener)
- [hasEventListener](Graphic3D.md#haseventlistener)

## Constructors

### constructor

• **new Graphic3D**(): [`Graphic3D`](Graphic3D.md)

#### Returns

[`Graphic3D`](Graphic3D.md)

#### Overrides

Object3D.constructor

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:10](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L10)

## Properties

### name

• **name**: `string` = `''`

The name of the object. The default value is an empty string.

#### Inherited from

Object3D.name

#### Defined in

[src/core/entities/Entity.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L24)

___

### transform

• **transform**: `Transform`

The Transform attached to this object.

#### Inherited from

Object3D.transform

#### Defined in

[src/core/entities/Entity.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L42)

___

### renderNode

• **renderNode**: `RenderNode`

Renderer components

#### Inherited from

Object3D.renderNode

#### Defined in

[src/core/entities/Entity.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L47)

___

### entityChildren

• **entityChildren**: `Entity`[]

An array containing sub objects of an object

#### Inherited from

Object3D.entityChildren

#### Defined in

[src/core/entities/Entity.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L52)

___

### components

• **components**: `Map`\<`any`, `IComponent`\>

List of components attached to an object

#### Inherited from

Object3D.components

#### Defined in

[src/core/entities/Entity.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L57)

___

### prefabRef

• `Optional` **prefabRef**: `string`

#### Inherited from

Object3D.prefabRef

#### Defined in

[src/core/entities/Object3D.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L19)

___

### serializeTag

• `Optional` **serializeTag**: `SerializeTag`

#### Inherited from

Object3D.serializeTag

#### Defined in

[src/core/entities/Object3D.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L20)

## Accessors

### instanceID

• `get` **instanceID**(): `string`

The unique identifier of the object.

#### Returns

`string`

#### Inherited from

Object3D.instanceID

#### Defined in

[src/core/entities/Entity.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L32)

___

### numChildren

• `get` **numChildren**(): `number`

Returns the number of child objects of an object

#### Returns

`number`

#### Inherited from

Object3D.numChildren

#### Defined in

[src/core/entities/Entity.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L116)

___

### bound

• `get` **bound**(): `IBound`

#### Returns

`IBound`

#### Inherited from

Object3D.bound

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

Object3D.bound

#### Defined in

[src/core/entities/Entity.ts:282](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L282)

___

### isScene3D

• `get` **isScene3D**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Object3D.isScene3D

#### Defined in

[src/core/entities/Object3D.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L30)

___

### localPosition

• `get` **localPosition**(): `Vector3`

Get the position of an object relative to its parent

#### Returns

`Vector3`

#### Inherited from

Object3D.localPosition

#### Defined in

[src/core/entities/Object3D.ts:272](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L272)

• `set` **localPosition**(`value`): `void`

Set the position of an object relative to its parent

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector3` |

#### Returns

`void`

#### Inherited from

Object3D.localPosition

#### Defined in

[src/core/entities/Object3D.ts:279](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L279)

___

### localRotation

• `get` **localRotation**(): `Vector3`

Get the rotation attribute of an object relative to its parent

#### Returns

`Vector3`

#### Inherited from

Object3D.localRotation

#### Defined in

[src/core/entities/Object3D.ts:286](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L286)

• `set` **localRotation**(`value`): `void`

Set the rotation attribute of an object relative to its parent

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector3` |

#### Returns

`void`

#### Inherited from

Object3D.localRotation

#### Defined in

[src/core/entities/Object3D.ts:293](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L293)

___

### localScale

• `get` **localScale**(): `Vector3`

Get the scaling attribute of an object relative to its parent

#### Returns

`Vector3`

#### Inherited from

Object3D.localScale

#### Defined in

[src/core/entities/Object3D.ts:300](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L300)

• `set` **localScale**(`value`): `void`

Set the scaling attribute of an object relative to its parent

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector3` |

#### Returns

`void`

#### Inherited from

Object3D.localScale

#### Defined in

[src/core/entities/Object3D.ts:307](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L307)

___

### localQuaternion

• `get` **localQuaternion**(): `Quaternion`

Get the rotation attribute of an object relative to its parent, which is a quaternion

#### Returns

`Quaternion`

#### Inherited from

Object3D.localQuaternion

#### Defined in

[src/core/entities/Object3D.ts:314](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L314)

• `set` **localQuaternion**(`value`): `void`

Set the rotation attribute of an object relative to its parent, which is a quaternion

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Quaternion` |

#### Returns

`void`

#### Inherited from

Object3D.localQuaternion

#### Defined in

[src/core/entities/Object3D.ts:321](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L321)

___

### parent

• `get` **parent**(): `Transform`

Transform component of object parent

#### Returns

`Transform`

#### Inherited from

Object3D.parent

#### Defined in

[src/core/entities/Object3D.ts:336](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L336)

___

### parentObject

• `get` **parentObject**(): `Object3D`

parent object3D

#### Returns

`Object3D`

#### Inherited from

Object3D.parentObject

#### Defined in

[src/core/entities/Object3D.ts:344](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L344)

___

### x

• `get` **x**(): `number`

Get the x coordinate relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.x

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

#### Inherited from

Object3D.x

#### Defined in

[src/core/entities/Object3D.ts:352](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L352)

___

### y

• `get` **y**(): `number`

Get the y coordinate relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.y

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

#### Inherited from

Object3D.y

#### Defined in

[src/core/entities/Object3D.ts:367](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L367)

___

### z

• `get` **z**(): `number`

Get the z coordinate relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.z

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

#### Inherited from

Object3D.z

#### Defined in

[src/core/entities/Object3D.ts:382](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L382)

___

### scaleX

• `get` **scaleX**(): `number`

Get the x scale relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.scaleX

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

#### Inherited from

Object3D.scaleX

#### Defined in

[src/core/entities/Object3D.ts:396](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L396)

___

### scaleY

• `get` **scaleY**(): `number`

Get the y scale relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.scaleY

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

#### Inherited from

Object3D.scaleY

#### Defined in

[src/core/entities/Object3D.ts:412](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L412)

___

### scaleZ

• `get` **scaleZ**(): `number`

Get the z scale relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.scaleZ

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

#### Inherited from

Object3D.scaleZ

#### Defined in

[src/core/entities/Object3D.ts:428](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L428)

___

### rotationX

• `get` **rotationX**(): `number`

Get the x rotation relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.rotationX

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

#### Inherited from

Object3D.rotationX

#### Defined in

[src/core/entities/Object3D.ts:444](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L444)

___

### rotationY

• `get` **rotationY**(): `number`

Get the y rotation relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.rotationY

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

#### Inherited from

Object3D.rotationY

#### Defined in

[src/core/entities/Object3D.ts:460](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L460)

___

### rotationZ

• `get` **rotationZ**(): `number`

Set the z rotation relative to the local coordinates of the parent container.

#### Returns

`number`

#### Inherited from

Object3D.rotationZ

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

#### Inherited from

Object3D.rotationZ

#### Defined in

[src/core/entities/Object3D.ts:476](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L476)

## Methods

### drawAxis

▸ **drawAxis**(`uuid`, `origin?`, `size?`): `void`

Draw the 3 - dimensional axes

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `uuid` | `string` | `undefined` | Graphic identification ID |
| `origin` | `Vector3` | `undefined` | original point |
| `size` | `number` | `10` | Length of axis |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:23](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L23)

___

### drawLines

▸ **drawLines**(`uuid`, `points`, `colors?`): `void`

Draw a line

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `uuid` | `string` | `undefined` | Graphic identification ID |
| `points` | `Vector3`[] | `undefined` | Line path point |
| `colors` | `Color` \| `Color`[] | `Color.COLOR_WHITE` | - |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:35](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L35)

___

### drawCurve

▸ **drawCurve**(`uuid`, `points`, `samples?`, `tension?`, `color?`): `void`

drawing curve

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `uuid` | `string` | `undefined` | Graphic identification ID |
| `points` | `Vector3`[] | `undefined` | Curve position point |
| `samples` | `number` | `10` | Number of Samples |
| `tension` | `number` | `0.5` | Strength of curve |
| `color` | `Color` | `Color.COLOR_WHITE` | Color of curve |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:49](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L49)

___

### drawRect

▸ **drawRect**(`uuid`, `origin`, `width`, `height`, `color?`): `void`

Draw a rectangle

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `uuid` | `string` | `undefined` | Graphic identification ID |
| `origin` | `Vector3` | `undefined` | original point |
| `width` | `number` | `undefined` | Width of rectangle |
| `height` | `number` | `undefined` | Height of rectangle |
| `color` | `Color` | `Color.COLOR_WHITE` | The color of the rectangle |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:93](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L93)

___

### drawCircle

▸ **drawCircle**(`uuid`, `center`, `radius`, `segments?`, `up?`, `color?`): `void`

Draw a circle

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `uuid` | `string` | `undefined` | Graphic identification ID |
| `center` | `Vector3` | `undefined` | centre point |
| `radius` | `number` | `undefined` | radius |
| `segments` | `number` | `32` | Number of line segments |
| `up` | `Vector3` | `Vector3.Y_AXIS` | Direction of plane |
| `color` | `Color` | `Color.COLOR_WHITE` | The color of the circle |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:112](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L112)

___

### drawSector

▸ **drawSector**(`uuid`, `center`, `radius`, `startAngle`, `endAngle`, `segments?`, `up?`, `color?`): `void`

Draw a Sector

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `uuid` | `string` | `undefined` | Graphic identification ID |
| `center` | `Vector3` | `undefined` | centre point |
| `radius` | `number` | `undefined` | radius |
| `startAngle` | `number` | `undefined` | Angle of onset |
| `endAngle` | `number` | `undefined` | Angle of end |
| `segments` | `number` | `16` | number of segments |
| `up` | `Vector3` | `Vector3.Y_AXIS` | Direction of plane |
| `color` | `Color` | `Color.COLOR_WHITE` | The color of the sector |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:129](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L129)

___

### drawArcLine

▸ **drawArcLine**(`uuid`, `center`, `radius`, `startAngle`, `endAngle`, `segments?`, `up?`, `color?`): `void`

Draw a ArcLine

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `uuid` | `string` | `undefined` | Graphic identification ID |
| `center` | `Vector3` | `undefined` | centre point |
| `radius` | `number` | `undefined` | radius |
| `startAngle` | `number` | `undefined` | Angle of onset |
| `endAngle` | `number` | `undefined` | Angle of end |
| `segments` | `number` | `16` | number of segments |
| `up` | `Vector3` | `Vector3.Y_AXIS` | Direction of plane |
| `color` | `Color` | `Color.COLOR_WHITE` | The color of the sector |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:172](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L172)

___

### createCustomShape

▸ **createCustomShape**(`uuid`, `parentTransform?`): `Graphics3DShape`

Creates a custom line segment graph and returns a Shape with the same uuid from the pool if it already exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | Graphic identification ID |
| `parentTransform` | `Transform` | Parent node Transform |

#### Returns

`Graphics3DShape`

Graphics3DShape

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:184](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L184)

___

### drawBox

▸ **drawBox**(`uuid`, `minPoint`, `maxPoint`, `color?`): `void`

Draw the box

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `uuid` | `string` | `undefined` | Graphic identification ID |
| `minPoint` | `Vector3` | `undefined` | Point of minimum |
| `maxPoint` | `Vector3` | `undefined` | Point of maximum |
| `color` | `Color` | `Color.COLOR_WHITE` | The color of the box |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:195](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L195)

___

### drawFillRect

▸ **drawFillRect**(`uuid`, `origin`, `width`, `height`, `color?`): `void`

Draw the fill rectangle

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `uuid` | `string` | `undefined` | Graphic identification ID |
| `origin` | `Vector3` | `undefined` | - |
| `width` | `number` | `undefined` | - |
| `height` | `number` | `undefined` | - |
| `color` | `Color` | `Color.COLOR_WHITE` | The color of the fill rectangle |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:237](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L237)

___

### drawFillCircle

▸ **drawFillCircle**(`uuid`, `center`, `radius`, `segments?`, `up?`, `color?`): `void`

Draw the fill circle

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `uuid` | `string` | `undefined` | Graphic identification ID |
| `center` | `Vector3` | `undefined` | centre point |
| `radius` | `number` | `undefined` | radius |
| `segments` | `number` | `32` | number of segments |
| `up` | `Vector3` | `Vector3.Y_AXIS` | Direction of plane |
| `color` | `Color` | `Color.COLOR_WHITE` | The color of the fill circle |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:257](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L257)

___

### drawMeshWireframe

▸ **drawMeshWireframe**(`uuid`, `geometry`, `transform`, `color?`, `forceUpdate?`): `void`

Draw wire frame for geometry

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `uuid` | `string` | `undefined` | Graphic identification ID |
| `geometry` | `GeometryBase` | `undefined` | Geometric object |
| `transform` | `Transform` | `undefined` | The Transform that needs to be bound |
| `color` | `Color` | `Color.COLOR_WHITE` | The color of the wire frame |
| `forceUpdate` | `boolean` | `false` | - |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:293](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L293)

___

### drawFillSector

▸ **drawFillSector**(`uuid`, `center`, `radius`, `startAngle`, `endAngle`, `segments?`, `up?`, `color?`): `void`

Draw the fill sector

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `uuid` | `string` | `undefined` | Graphic identification ID |
| `center` | `Vector3` | `undefined` | centre point |
| `radius` | `number` | `undefined` | radius |
| `startAngle` | `number` | `undefined` | Angle of onset |
| `endAngle` | `number` | `undefined` | Angle of end |
| `segments` | `number` | `16` | number of segments |
| `up` | `Vector3` | `Vector3.Y_AXIS` | Direction of plane |
| `color` | `Color` | `Color.COLOR_WHITE` | The color of the fill sector |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:312](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L312)

___

### drawBoundingBox

▸ **drawBoundingBox**(`uuid`, `boundingBox`, `color?`): `void`

Draw bounding box

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `uuid` | `string` | `undefined` | Graphic identification ID |
| `boundingBox` | `BoundingBox` | `undefined` | Bounding box object, please use world boundingbox |
| `color` | `Color` | `Color.COLOR_WHITE` | The color of the bounding box |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:349](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L349)

___

### drawCameraFrustum

▸ **drawCameraFrustum**(`camera`, `color?`): `void`

Draw the camera cone

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `camera` | `Camera3D` | `undefined` | The camera to display the cone |
| `color` | `Color` | `Color.COLOR_WHITE` | The color of the camera cone |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:358](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L358)

___

### drawObjectBoundingBox

▸ **drawObjectBoundingBox**(`obj`, `color?`): `void`

Draws the bounding box of the object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `obj` | `Object3D` | `undefined` | The object to display the bounding box |
| `color` | `Color` | `Color.COLOR_WHITE` | The color of the bounding box |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:419](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L419)

___

### Clear

▸ **Clear**(`uuid`): `void`

Erases the specified graph

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | Graphic identification ID |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:428](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L428)

___

### ClearAll

▸ **ClearAll**(): `void`

Erase all drawn graphics

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:439](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L439)

___

### ChangeColor

▸ **ChangeColor**(`uuid`, `color`): `void`

Changes the specified graphics color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | Graphic identification ID |
| `color` | `Color` | New color value |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/Graphic3DRender.ts:449](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/Graphic3DRender.ts#L449)

___

### getObjectByName

▸ **getObjectByName**(`name`): `Entity`

Starting from the object itself, search for the object and its children, and return the first child object with a matching name.
For most objects, the name is an empty string by default. You must manually set it to use this method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | input name |

#### Returns

`Entity`

result Entity

#### Inherited from

Object3D.getObjectByName

#### Defined in

[src/core/entities/Entity.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L81)

___

### addChild

▸ **addChild**(`child`): `Entity`

Add an object as a child of this object. You can add any number of objects.
Any current parent object on the object passed here will be deleted, as an object can only have at most one parent object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `Entity` | target child entity |

#### Returns

`Entity`

#### Inherited from

Object3D.addChild

#### Defined in

[src/core/entities/Entity.ts:127](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L127)

___

### removeChild

▸ **removeChild**(`child`): `void`

Remove the child objects of the object. You can remove any number of objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `Entity` | Removed objects |

#### Returns

`void`

#### Inherited from

Object3D.removeChild

#### Defined in

[src/core/entities/Entity.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L152)

___

### removeAllChild

▸ **removeAllChild**(): `void`

Remove all children of the current object

#### Returns

`void`

#### Inherited from

Object3D.removeAllChild

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

Object3D.removeSelf

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

Object3D.removeChildByIndex

#### Defined in

[src/core/entities/Entity.ts:189](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L189)

___

### hasChild

▸ **hasChild**(`child`): `boolean`

Does the current object contain a certain object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `Entity` | certain object |

#### Returns

`boolean`

boolean

#### Inherited from

Object3D.hasChild

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

Object3D.removeFromParent

#### Defined in

[src/core/entities/Entity.ts:213](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L213)

___

### getChildByIndex

▸ **getChildByIndex**(`index`): `Entity`

Search for object children and return the first child object with a matching index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | matching index |

#### Returns

`Entity`

child entity

#### Inherited from

Object3D.getChildByIndex

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

Object3D.getChildByName

#### Defined in

[src/core/entities/Entity.ts:242](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L242)

___

### noticeComponents

▸ **noticeComponents**(`key`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `IComponent` |
| `data` | `any` |

#### Returns

`void`

#### Inherited from

Object3D.noticeComponents

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

#### Inherited from

Object3D.forChild

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
| `T` | extends `IComponent` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | `Ctor`\<`T`\> | class of component |
| `param?` | `any` | - |

#### Returns

`T`

result component

#### Inherited from

Object3D.addComponent

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
| `T` | extends `IComponent` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | `Ctor`\<`T`\> | class of component |

#### Returns

`T`

result component

#### Inherited from

Object3D.getOrAddComponent

#### Defined in

[src/core/entities/Object3D.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L76)

___

### removeComponent

▸ **removeComponent**\<`T`\>(`c`): `void`

Remove components of the specified type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `IComponent` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | `Ctor`\<`T`\> | class of component |

#### Returns

`void`

#### Inherited from

Object3D.removeComponent

#### Defined in

[src/core/entities/Object3D.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L89)

___

### hasComponent

▸ **hasComponent**\<`T`\>(`c`): `boolean`

Is there a component of the specified type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `IComponent` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | `Ctor`\<`T`\> | type of component |

#### Returns

`boolean`

boolean

#### Inherited from

Object3D.hasComponent

#### Defined in

[src/core/entities/Object3D.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L106)

___

### getComponent

▸ **getComponent**\<`T`\>(`c`): `T`

Returns a component of the specified type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `IComponent` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | `Ctor`\<`T`\> | class of component |

#### Returns

`T`

result component

#### Inherited from

Object3D.getComponent

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
| `T` | extends `IComponent` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | `Ctor`\<`T`\> | class of component |

#### Returns

`T`

reulst component

#### Inherited from

Object3D.getComponentFromParent

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
| `T` | extends `IComponent` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | `Ctor`\<`T`\> | class of component |

#### Returns

`T`[]

result components

#### Inherited from

Object3D.getComponentsInChild

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
| `T` | extends `IComponent` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | `Ctor`\<`T`\> | class of component |
| `outList?` | `T`[] | result component list |
| `includeInactive?` | `boolean` | Whether to include invisible objects, default to false |

#### Returns

`T`[]

#### Inherited from

Object3D.getComponents

#### Defined in

[src/core/entities/Object3D.ts:171](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L171)

___

### getComponentsExt

▸ **getComponentsExt**\<`T`\>(`c`, `ret?`, `includeInactive?`): `T`[]

Quickly obtain components and no longer access child nodes after obtaining them at a certain node

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `IComponent` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | `Ctor`\<`T`\> | class of component |
| `ret?` | `T`[] | List of incoming T |
| `includeInactive?` | `boolean` | Whether to include invisible objects, default to false |

#### Returns

`T`[]

{T}

**`Memberof`**

Object3D

#### Inherited from

Object3D.getComponentsExt

#### Defined in

[src/core/entities/Object3D.ts:196](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L196)

___

### getComponentsByProperty

▸ **getComponentsByProperty**\<`T`\>(`key`, `value`, `findedAndBreak?`, `ret?`, `includeInactive?`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `IComponent` |

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

Object3D.getComponentsByProperty

#### Defined in

[src/core/entities/Object3D.ts:211](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L211)

___

### clone

▸ **clone**(): `Object3D`

clone a Object3D

#### Returns

`Object3D`

#### Inherited from

Object3D.clone

#### Defined in

[src/core/entities/Object3D.ts:238](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L238)

___

### notifyChange

▸ **notifyChange**(): `void`

Notify transformation attribute updates

#### Returns

`void`

#### Inherited from

Object3D.notifyChange

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

#### Inherited from

Object3D.traverse

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

#### Inherited from

Object3D.destroy

#### Defined in

[src/core/entities/Object3D.ts:520](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Object3D.ts#L520)

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `void`

Dispatch an event to all registered objects with a specific type of listener.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `CEvent` |

#### Returns

`void`

#### Inherited from

Object3D.dispatchEvent

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

Object3D.addEventListener

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

Object3D.removeEventListener

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

Object3D.removeEventListenerAt

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

Object3D.removeAllEventListener

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

Object3D.containEventListener

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

Object3D.hasEventListener

#### Defined in

[src/event/CEventDispatcher.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L198)
