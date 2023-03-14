# Class: Object3D

大部分对象的基类，提供了一系列的属性和方法来对三维空间中的物体进行操作。

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Object3D`**

  ↳↳ [`Scene3D`](Scene3D.md)

  ↳↳ [`InstancedMesh`](InstancedMesh.md)

  ↳↳ [`Graphic3DRender`](Graphic3DRender.md)

  ↳↳ [`GUIMesh`](GUIMesh.md)


### Properties

- [name](Object3D.md#name)
- [transform](Object3D.md#transform)
- [renderNode](Object3D.md#rendernode)
- [entityChildren](Object3D.md#entitychildren)
- [components](Object3D.md#components)
- [bound](Object3D.md#bound)
- [serializeTag](Object3D.md#serializetag)
- [prefabRef](Object3D.md#prefabref)

### Accessors

- [uuid](Object3D.md#uuid)
- [renderLayer](Object3D.md#renderlayer)
- [visible](Object3D.md#visible)
- [numChildren](Object3D.md#numchildren)
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
- [getWorldPosition](Object3D.md#getworldposition)
- [traverse](Object3D.md#traverse)
- [destroy](Object3D.md#destroy)
- [serialization](Object3D.md#serialization)
- [unSerialize](Object3D.md#unserialize)
- [showDebugAxis](Object3D.md#showdebugaxis)
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

对象的名称。默认值是一个空字符串。

#### Inherited from

[Entity](Entity.md).[name](Entity.md#name)

#### Defined in

[src/engine/core/entities/Entity.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L24)

___

### transform

• **transform**: [`Transform`](Transform.md)

附加到此对象的Transform。

#### Inherited from

[Entity](Entity.md).[transform](Entity.md#transform)

#### Defined in

[src/engine/core/entities/Entity.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L58)

___

### renderNode

• **renderNode**: `RenderNode`

渲染器组件

#### Inherited from

[Entity](Entity.md).[renderNode](Entity.md#rendernode)

#### Defined in

[src/engine/core/entities/Entity.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L63)

___

### entityChildren

• **entityChildren**: [`Entity`](Entity.md)[]

包含对象子对象的数组

#### Inherited from

[Entity](Entity.md).[entityChildren](Entity.md#entitychildren)

#### Defined in

[src/engine/core/entities/Entity.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L68)

___

### components

• **components**: `Map`<`any`, [`ComponentBase`](ComponentBase.md)\>

对象所附加的组件列表

#### Inherited from

[Entity](Entity.md).[components](Entity.md#components)

#### Defined in

[src/engine/core/entities/Entity.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L73)

___

### bound

• **bound**: `IBound`

对象的的包围体

#### Inherited from

[Entity](Entity.md).[bound](Entity.md#bound)

#### Defined in

[src/engine/core/entities/Entity.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L78)

___

### serializeTag

• `Optional` **serializeTag**: [`SerializeTag`](../types/SerializeTag.md)

#### Defined in

[src/engine/core/entities/Object3D.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L19)

___

### prefabRef

• `Optional` **prefabRef**: `string`

#### Defined in

[src/engine/core/entities/Object3D.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L20)

## Accessors

### uuid

• `get` **uuid**(): `string`

该对象的唯一标识符。

#### Returns

`string`

#### Inherited from

Entity.uuid

#### Defined in

[src/engine/core/entities/Entity.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L31)

___

### renderLayer

• `get` **renderLayer**(): `RenderLayer`

#### Returns

`RenderLayer`

#### Inherited from

Entity.renderLayer

#### Defined in

[src/engine/core/entities/Entity.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L42)

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

[src/engine/core/entities/Entity.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L46)

___

### visible

• `get` **visible**(): `boolean`

对象是否可见

#### Returns

`boolean`

#### Inherited from

Entity.visible

#### Defined in

[src/engine/core/entities/Entity.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L116)

• `set` **visible**(`value`): `void`

设置对象是否可见

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Entity.visible

#### Defined in

[src/engine/core/entities/Entity.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L123)

___

### numChildren

• `get` **numChildren**(): `number`

返回对象子对象的数量

#### Returns

`number`

#### Inherited from

Entity.numChildren

#### Defined in

[src/engine/core/entities/Entity.ts:154](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L154)

___

### isScene3D

• `get` **isScene3D**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/engine/core/entities/Object3D.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L29)

___

### localPosition

• `get` **localPosition**(): [`Vector3`](Vector3.md)

物体相对于父级的位置

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/core/entities/Object3D.ts:239](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L239)

• `set` **localPosition**(`value`): `void`

设置物体相对于父级的位置

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:246](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L246)

___

### localRotation

• `get` **localRotation**(): [`Vector3`](Vector3.md)

物体相对于父级的旋转属性

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/core/entities/Object3D.ts:253](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L253)

• `set` **localRotation**(`value`): `void`

设置物体相对于父级的旋转属性

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:260](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L260)

___

### localScale

• `get` **localScale**(): [`Vector3`](Vector3.md)

物体相对于父级的缩放属性

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/core/entities/Object3D.ts:267](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L267)

• `set` **localScale**(`value`): `void`

设置物体相对于父级的缩放属性

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:274](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L274)

___

### localQuaternion

• `get` **localQuaternion**(): [`Quaternion`](Quaternion.md)

物体相对于父级变换属性，以四元数形式存储

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/engine/core/entities/Object3D.ts:281](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L281)

• `set` **localQuaternion**(`value`): `void`

设置物体相对于父级变换属性，以四元数形式存储

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Quaternion`](Quaternion.md) |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:288](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L288)

___

### parent

• `get` **parent**(): [`Transform`](Transform.md)

对象父容器的Transform组件

#### Returns

[`Transform`](Transform.md)

#### Defined in

[src/engine/core/entities/Object3D.ts:303](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L303)

___

### parentObject

• `get` **parentObject**(): [`Object3D`](Object3D.md)

该对象的父级对象

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/engine/core/entities/Object3D.ts:311](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L311)

___

### x

• `get` **x**(): `number`

相对于父容器的局部坐标的x坐标。

#### Returns

`number`

#### Defined in

[src/engine/core/entities/Object3D.ts:327](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L327)

• `set` **x**(`value`): `void`

设置相对于父容器的局部坐标的x坐标。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:319](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L319)

___

### y

• `get` **y**(): `number`

相对于父容器的局部坐标的y坐标。

#### Returns

`number`

#### Defined in

[src/engine/core/entities/Object3D.ts:342](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L342)

• `set` **y**(`value`): `void`

设置相对于父容器的局部坐标的y坐标。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:334](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L334)

___

### z

• `get` **z**(): `number`

相对于父容器的局部坐标的z坐标。

#### Returns

`number`

#### Defined in

[src/engine/core/entities/Object3D.ts:357](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L357)

• `set` **z**(`value`): `void`

设置相对于父容器的局部坐标的z坐标。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:349](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L349)

___

### scaleX

• `get` **scaleX**(): `number`

沿x轴相对于局部坐标的比例。

#### Returns

`number`

#### Defined in

[src/engine/core/entities/Object3D.ts:372](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L372)

• `set` **scaleX**(`value`): `void`

设置沿x轴相对于局部坐标的比例。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:364](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L364)

___

### scaleY

• `get` **scaleY**(): `number`

沿y轴相对于局部坐标的比例。

#### Returns

`number`

#### Defined in

[src/engine/core/entities/Object3D.ts:388](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L388)

• `set` **scaleY**(`value`): `void`

设置沿y轴相对于局部坐标的比例。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:380](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L380)

___

### scaleZ

• `get` **scaleZ**(): `number`

沿z轴相对于局部坐标的比例。

#### Returns

`number`

#### Defined in

[src/engine/core/entities/Object3D.ts:404](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L404)

• `set` **scaleZ**(`value`): `void`

设置沿z轴相对于局部坐标的比例。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:396](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L396)

___

### rotationX

• `get` **rotationX**(): `number`

绕X轴旋转的角度。

#### Returns

`number`

#### Defined in

[src/engine/core/entities/Object3D.ts:420](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L420)

• `set` **rotationX**(`value`): `void`

设置绕X轴旋转的角度。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:412](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L412)

___

### rotationY

• `get` **rotationY**(): `number`

绕Y轴旋转的角度。

#### Returns

`number`

#### Defined in

[src/engine/core/entities/Object3D.ts:436](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L436)

• `set` **rotationY**(`value`): `void`

设置绕Y轴旋转的角度。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:428](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L428)

___

### rotationZ

• `get` **rotationZ**(): `number`

绕Z轴旋转的角度。

#### Returns

`number`

#### Defined in

[src/engine/core/entities/Object3D.ts:452](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L452)

• `set` **rotationZ**(`value`): `void`

设置绕Z轴旋转的角度。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:444](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L444)

## Methods

### getObjectByName

▸ **getObjectByName**(`name`): [`Entity`](Entity.md)

从对象本身开始搜索对象及其子对象，并返回第一个具有匹配名称的子对象。
对于大多数对象，默认情况下名称为空字符串。您必须手动设置才能使用此方法。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 对象名称 |

#### Returns

[`Entity`](Entity.md)

子对象

#### Inherited from

[Entity](Entity.md).[getObjectByName](Entity.md#getobjectbyname)

#### Defined in

[src/engine/core/entities/Entity.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L95)

___

### addChild

▸ **addChild**(`child`): [`Entity`](Entity.md)

将对象添加为此对象的子对象。可以添加任意数量的对象。
传递到此处的对象上的任何当前父对象都将被删除，因为一个对象最多只能有一个父对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Entity`](Entity.md) | 待添加的对象 |

#### Returns

[`Entity`](Entity.md)

#### Inherited from

[Entity](Entity.md).[addChild](Entity.md#addchild)

#### Defined in

[src/engine/core/entities/Entity.ts:213](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L213)

___

### removeChild

▸ **removeChild**(`child`): `any`

移除对象的子对象。可以移除任意数量的对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Entity`](Entity.md) | 移除的对象 |

#### Returns

`any`

#### Inherited from

[Entity](Entity.md).[removeChild](Entity.md#removechild)

#### Defined in

[src/engine/core/entities/Entity.ts:234](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L234)

___

### removeAllChild

▸ **removeAllChild**(): `void`

移除当前对象的所有子对象

#### Returns

`void`

#### Inherited from

[Entity](Entity.md).[removeAllChild](Entity.md#removeallchild)

#### Defined in

[src/engine/core/entities/Entity.ts:249](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L249)

___

### removeChildByIndex

▸ **removeChildByIndex**(`index`): `void`

搜索对象子级，移除带有匹配索引的子对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 标识该对象实例的索引 |

#### Returns

`void`

#### Inherited from

[Entity](Entity.md).[removeChildByIndex](Entity.md#removechildbyindex)

#### Defined in

[src/engine/core/entities/Entity.ts:261](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L261)

___

### hasChild

▸ **hasChild**(`child`): `boolean`

当前对象的子对象中是否包含某一对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Entity`](Entity.md) | 指定对象 |

#### Returns

`boolean`

是否包含该对象

#### Inherited from

[Entity](Entity.md).[hasChild](Entity.md#haschild)

#### Defined in

[src/engine/core/entities/Entity.ts:275](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L275)

___

### removeFromParent

▸ **removeFromParent**(): [`Object3D`](Object3D.md)

将此对象从其当前父对象中删除。

#### Returns

[`Object3D`](Object3D.md)

当前对象

#### Inherited from

[Entity](Entity.md).[removeFromParent](Entity.md#removefromparent)

#### Defined in

[src/engine/core/entities/Entity.ts:285](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L285)

___

### getChildByIndex

▸ **getChildByIndex**(`index`): [`Entity`](Entity.md)

搜索对象子级，返回第一个带有匹配索引的子对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 标识该对象实例的索引 |

#### Returns

[`Entity`](Entity.md)

子对象

#### Inherited from

[Entity](Entity.md).[getChildByIndex](Entity.md#getchildbyindex)

#### Defined in

[src/engine/core/entities/Entity.ts:299](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L299)

___

### getChildByName

▸ **getChildByName**(`name`, `loopChild?`): `any`

搜索对象子级，返回一个带有匹配名称的子对象。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | 对象名称 |
| `loopChild` | `boolean` | `true` | 是否遍历子对象的子级。默认值为true |

#### Returns

`any`

子对象

#### Inherited from

[Entity](Entity.md).[getChildByName](Entity.md#getchildbyname)

#### Defined in

[src/engine/core/entities/Entity.ts:314](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L314)

___

### genBounds

▸ **genBounds**(): `IBound`

返回一个矩形，该矩形定义指定层的显示区域。

#### Returns

`IBound`

#### Inherited from

[Entity](Entity.md).[genBounds](Entity.md#genbounds)

#### Defined in

[src/engine/core/entities/Entity.ts:406](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L406)

___

### forChild

▸ **forChild**(`call`): `void`

从对象本身开始遍历所有子对象。如果子对象中还有子对象，则递归遍历。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | `Function` | 函数执行体。会将子对象作为参数执行 |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L39)

___

### addComponent

▸ **addComponent**<`T`\>(`c`, `param?`): `T`

创建新组件并将其添加到对象中，并返回组件的实例。 如果已经存在该类型的组件，则不会添加，并返回null。

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ComponentBase`](ComponentBase.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> | 组件的类型 |
| `param?` | `any` | - |

#### Returns

`T`

添加的组件

#### Defined in

[src/engine/core/entities/Object3D.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L52)

___

### getOrAddComponent

▸ **getOrAddComponent**<`T`\>(`c`): `T`

返回指定类型的组件对象实例，如果没有该类型的组件则创建新组件并将其添加到对象中。

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ComponentBase`](ComponentBase.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> | 组件类型 |

#### Returns

`T`

组件实例

#### Defined in

[src/engine/core/entities/Object3D.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L71)

___

### removeComponent

▸ **removeComponent**<`T`\>(`c`): `void`

移除指定类型的组件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ComponentBase`](ComponentBase.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> | 组件类型 |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L84)

___

### hasComponent

▸ **hasComponent**<`T`\>(`c`): `boolean`

是否有指定类型的组件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ComponentBase`](ComponentBase.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> | 组件类型 |

#### Returns

`boolean`

返回true存在该类型的组件，返回false不存在该类型的组件

#### Defined in

[src/engine/core/entities/Object3D.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L98)

___

### getComponent

▸ **getComponent**<`T`\>(`c`): `T`

返回指定类型的组件对象。

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ComponentBase`](ComponentBase.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> | 组件类型 |

#### Returns

`T`

指定类型的组件对象

#### Defined in

[src/engine/core/entities/Object3D.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L108)

___

### getComponentFromParent

▸ **getComponentFromParent**<`T`\>(`c`): `T`

从父节点返回指定类型的组件对象，如果没有该类型的组件则调用父对象的父对象查找

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ComponentBase`](ComponentBase.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> | 组件类型 |

#### Returns

`T`

指定类型的组件对象

#### Defined in

[src/engine/core/entities/Object3D.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L118)

___

### getComponentsInChild

▸ **getComponentsInChild**<`T`\>(`c`): `T`[]

返回指定类型的组件对象数组，如果没有该类型的组件则在自身子类对象列表中查找

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ComponentBase`](ComponentBase.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> | 组件类型 |

#### Returns

`T`[]

指定类型的组件对象

#### Defined in

[src/engine/core/entities/Object3D.ts:137](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L137)

___

### getComponents

▸ **getComponents**<`T`\>(`c`, `outList?`, `includeInactive?`): `T`[]

返回当前对象和子对象包含的所有的指定类型的组件，如果子对象还有子对象，则递归查找。

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ComponentBase`](ComponentBase.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> | 组件类型 |
| `outList?` | `T`[] | 组件列表 |
| `includeInactive?` | `boolean` | 是否包含不可见对象，默认为false |

#### Returns

`T`[]

#### Defined in

[src/engine/core/entities/Object3D.ts:159](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L159)

___

### getComponentsExt

▸ **getComponentsExt**<`T`\>(`c`, `ret?`, `includeInactive?`): `T`[]

快速获取组件，在某节点获取到了之后，不再访问子节点

**`Memberof`**

ELPObject3D

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ComponentBase`](ComponentBase.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> |  |
| `ret?` | `T`[] | 传入T的list |
| `includeInactive?` | `boolean` | 是否包含不可见对象，默认为false |

#### Returns

`T`[]

{T}

#### Defined in

[src/engine/core/entities/Object3D.ts:185](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L185)

___

### clone

▸ **clone**(): [`Object3D`](Object3D.md)

克隆自身

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/engine/core/entities/Object3D.ts:207](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L207)

___

### notifyChange

▸ **notifyChange**(): `void`

通知变换属性更新

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:295](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L295)

___

### getWorldPosition

▸ **getWorldPosition**(`target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/core/entities/Object3D.ts:468](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L468)

___

### traverse

▸ **traverse**(`callback`): `void`

递归子节点

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`child`: `any`) => `void` |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:480](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L480)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:491](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L491)

___

### serialization

▸ **serialization**(`assets`): [`SerializeObject3D`](SerializeObject3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `assets` | [`ISerializeAssetsCollect`](../interfaces/ISerializeAssetsCollect.md) |

#### Returns

[`SerializeObject3D`](SerializeObject3D.md)

#### Defined in

[src/engine/core/entities/Object3D.ts:495](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L495)

___

### unSerialize

▸ **unSerialize**(`nodeData`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeData` | [`SerializeObject3D`](SerializeObject3D.md) |
| `data` | [`UnSerializeData`](UnSerializeData.md) |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:516](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L516)

___

### showDebugAxis

▸ **showDebugAxis**(`show`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `show` | `boolean` |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Object3D.ts:523](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L523)

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `void`

派发一个 Event3D 事件到所有注册了特定类型侦听器的对象中。

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`CEvent`](CEvent.md) |

#### Returns

`void`

#### Inherited from

[Entity](Entity.md).[dispatchEvent](Entity.md#dispatchevent)

#### Defined in

[src/engine/event/CEventDispatcher.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L22)

___

### addEventListener

▸ **addEventListener**(`type`, `callback`, `thisObject`, `param?`, `priority?`): `number`

使用 EventDispatcher 对象注册事件侦听器对象，以使侦听器能够接收事件通知。可以为特定类型的事件和优先级注册事件侦听器。成功注册一个事件侦听器后，无法通过额外调用 addCEventListener() 来更改其优先级。要更改侦听器的优先级，必须首先调用 removeCEventListener()。然后，可以使用新的优先级再次注册该侦听器。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` \| `number` | `undefined` | {string} 事件的类型标识符。 |
| `callback` | `Function` | `undefined` | {Function} 处理事件的侦听器函数。此函数必须接受 Event3D 对象作为其唯一的参数，并且不能返回任何结果， 如下面的示例所示： function(evt:Event3D):void 函数可以有任何名称。 |
| `thisObject` | `any` | `undefined` | {any} 当前注册对象。 |
| `param` | `any` | `null` | {any} 事件携带参数，默认为空。 |
| `priority` | `number` | `0` | {number} 事件侦听器的优先级。优先级由一个带符号的 32 位整数指定。数字越大，优先级越高。优先级为 n 的所有侦听器会在 优先级为 n -1 的侦听器之前得到处理。如果两个或更多个侦听器共享相同的优先级，则按照它们的添加顺序进行处理。默认优先级为 0。 |

#### Returns

`number`

注册事件位置标识id

#### Inherited from

[Entity](Entity.md).[addEventListener](Entity.md#addeventlistener)

#### Defined in

[src/engine/event/CEventDispatcher.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L77)

___

### removeEventListener

▸ **removeEventListener**(`type`, `callback`, `thisObject`): `void`

移除事件侦听器。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` \| `number` | {string} 事件名。 |
| `callback` | `Function` | {Function} 侦听函数。 |
| `thisObject` | `any` | {any} 当前注册对象。 |

#### Returns

`void`

#### Inherited from

[Entity](Entity.md).[removeEventListener](Entity.md#removeeventlistener)

#### Defined in

[src/engine/event/CEventDispatcher.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L111)

___

### removeEventListenerAt

▸ **removeEventListenerAt**(`id`): `void`

移除事件侦听器。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | 事件id,调用addCEventListener的返回值即为事件id. |

#### Returns

`void`

#### Inherited from

[Entity](Entity.md).[removeEventListenerAt](Entity.md#removeeventlistenerat)

#### Defined in

[src/engine/event/CEventDispatcher.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L130)

___

### removeAllEventListener

▸ **removeAllEventListener**(`eventType?`): `void`

移除指定类型的事件侦听器。
eventType 不指定类型 则移除所有的事件

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventType` | `string` \| `number` | `null` |

#### Returns

`void`

#### Inherited from

[Entity](Entity.md).[removeAllEventListener](Entity.md#removealleventlistener)

#### Defined in

[src/engine/event/CEventDispatcher.ts:149](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L149)

___

### containEventListener

▸ **containEventListener**(`type`): `boolean`

检测是否存在监听器。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | {string} 事件类型标识符 |

#### Returns

`boolean`

是否存在该类型监视器，true为存在，反之不存在。

#### Inherited from

[Entity](Entity.md).[containEventListener](Entity.md#containeventlistener)

#### Defined in

[src/engine/event/CEventDispatcher.ts:181](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L181)

___

### hasEventListener

▸ **hasEventListener**(`type`, `callback?`, `thisObject?`): `boolean`

检测是否存在监听器。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` \| `number` | `undefined` | {string} 事件名 |
| `callback` | `Function` | `null` | {Function} 处理事件的侦听器函数 |
| `thisObject` | `any` | `null` | {any} 注册对象。 |

#### Returns

`boolean`

是否存在该事件，true为存在，反之不存在。

#### Inherited from

[Entity](Entity.md).[hasEventListener](Entity.md#haseventlistener)

#### Defined in

[src/engine/event/CEventDispatcher.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L194)

## Constructors

### constructor

• **new Object3D**()

创建一个3D对象

#### Overrides

[Entity](Entity.md).[constructor](Entity.md#constructor)

#### Defined in

[src/engine/core/entities/Object3D.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Object3D.ts#L24)
