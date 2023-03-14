# Class: Camera3D

Camera摄像机组件

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`Camera3D`**


### Properties

- [object3D](Camera3D.md#object3d)
- [serializeTag](Camera3D.md#serializetag)
- [fov](Camera3D.md#fov)
- [name](Camera3D.md#name)
- [aspect](Camera3D.md#aspect)
- [near](Camera3D.md#near)
- [far](Camera3D.md#far)
- [viewPort](Camera3D.md#viewport)
- [frustum](Camera3D.md#frustum)
- [isShadowCamera](Camera3D.md#isshadowcamera)
- [lookTarget](Camera3D.md#looktarget)
- [type](Camera3D.md#type)
- [mainCamera](Camera3D.md#maincamera)
- [tmp](Camera3D.md#tmp)
- [sampleIndex](Camera3D.md#sampleindex)

### Accessors

- [transform](Camera3D.md#transform)
- [enable](Camera3D.md#enable)
- [viewMatrix](Camera3D.md#viewmatrix)
- [shadowViewMatrix](Camera3D.md#shadowviewmatrix)
- [pvMatrix](Camera3D.md#pvmatrix)
- [pvMatrixInv](Camera3D.md#pvmatrixinv)
- [pvMatrix2Inv](Camera3D.md#pvmatrix2inv)
- [projectionMatrixInv](Camera3D.md#projectionmatrixinv)
- [jitterFrameIndex](Camera3D.md#jitterframeindex)
- [jitterX](Camera3D.md#jitterx)
- [jitterY](Camera3D.md#jittery)

### Methods

- [onVisible](Camera3D.md#onvisible)
- [cloneTo](Camera3D.md#cloneto)
- [destroy](Camera3D.md#destroy)
- [onUpdate](Camera3D.md#onupdate)
- [onLateUpdate](Camera3D.md#onlateupdate)
- [onBeforeUpdate](Camera3D.md#onbeforeupdate)
- [perspective](Camera3D.md#perspective)
- [ortho](Camera3D.md#ortho)
- [orthoOffCenter](Camera3D.md#orthooffcenter)
- [orthoZo](Camera3D.md#orthozo)
- [object3DToScreenRay](Camera3D.md#object3dtoscreenray)
- [ScreenRayToObject3D](Camera3D.md#screenraytoobject3d)
- [unproject](Camera3D.md#unproject)
- [screenPointToRay](Camera3D.md#screenpointtoray)
- [screenPointToWorld](Camera3D.md#screenpointtoworld)
- [worldToScreenPoint](Camera3D.md#worldtoscreenpoint)
- [lookAt](Camera3D.md#lookat)
- [enableJitterProjection](Camera3D.md#enablejitterprojection)
- [getCastShadowLightSpaceMatrix](Camera3D.md#getcastshadowlightspacematrix)
- [getWorldDirection](Camera3D.md#getworlddirection)
- [serialization](Camera3D.md#serialization)
- [unSerialization](Camera3D.md#unserialization)

### Constructors

- [constructor](Camera3D.md#constructor)

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

### fov

• **fov**: `number` = `1`

透视度

#### Defined in

[src/engine/core/Camera3D.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L24)

___

### name

• **name**: `string`

组件名称

#### Defined in

[src/engine/core/Camera3D.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L29)

___

### aspect

• **aspect**: `number` = `1`

视口比例

#### Defined in

[src/engine/core/Camera3D.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L34)

___

### near

• **near**: `number` = `1`

近截面

#### Defined in

[src/engine/core/Camera3D.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L39)

___

### far

• **far**: `number` = `5000`

远截面

#### Defined in

[src/engine/core/Camera3D.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L44)

___

### viewPort

• **viewPort**: [`Rect`](Rect.md)

视口矩形

#### Defined in

[src/engine/core/Camera3D.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L48)

___

### frustum

• **frustum**: `Frustum`

视锥体

#### Defined in

[src/engine/core/Camera3D.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L53)

___

### isShadowCamera

• **isShadowCamera**: `boolean` = `false`

是否为 Shadow 渲染相机

#### Defined in

[src/engine/core/Camera3D.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L58)

___

### lookTarget

• **lookTarget**: [`Vector3`](Vector3.md)

相机朝向

#### Defined in

[src/engine/core/Camera3D.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L82)

___

### type

• **type**: [`CameraType`](../enums/CameraType.md) = `CameraType.perspective`

相机类型

#### Defined in

[src/engine/core/Camera3D.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L87)

___

### mainCamera

▪ `Static` **mainCamera**: [`Camera3D`](Camera3D.md)

场景上的主相机

#### Defined in

[src/engine/core/Camera3D.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L96)

___

### tmp

• **tmp**: [`Matrix4`](Matrix4.md)

#### Defined in

[src/engine/core/Camera3D.ts:272](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L272)

___

### sampleIndex

• **sampleIndex**: `number` = `0`

#### Defined in

[src/engine/core/Camera3D.ts:416](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L416)

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

### viewMatrix

• `get` **viewMatrix**(): [`Matrix4`](Matrix4.md)

view 空间矩阵

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/engine/core/Camera3D.ts:183](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L183)

___

### shadowViewMatrix

• `get` **shadowViewMatrix**(): [`Matrix4`](Matrix4.md)

view 空间矩阵

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/engine/core/Camera3D.ts:193](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L193)

___

### pvMatrix

• `get` **pvMatrix**(): [`Matrix4`](Matrix4.md)

获取project投影矩阵。

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/engine/core/Camera3D.ts:258](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L258)

___

### pvMatrixInv

• `get` **pvMatrixInv**(): [`Matrix4`](Matrix4.md)

获取project逆向投影矩阵。

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/engine/core/Camera3D.ts:266](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L266)

___

### pvMatrix2Inv

• `get` **pvMatrix2Inv**(): [`Matrix4`](Matrix4.md)

获取project逆向投影矩阵。

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/engine/core/Camera3D.ts:277](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L277)

___

### projectionMatrixInv

• `get` **projectionMatrixInv**(): [`Matrix4`](Matrix4.md)

获取投影逆矩阵

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/engine/core/Camera3D.ts:287](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L287)

___

### jitterFrameIndex

• `get` **jitterFrameIndex**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/core/Camera3D.ts:420](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L420)

___

### jitterX

• `get` **jitterX**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/core/Camera3D.ts:424](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L424)

___

### jitterY

• `get` **jitterY**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/core/Camera3D.ts:428](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L428)

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

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

[src/engine/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L114)

___

### destroy

▸ **destroy**(): `void`

移除组件时候调用

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

[src/engine/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L119)

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

### perspective

▸ **perspective**(`fov`, `aspect`, `near`, `far`): `void`

生成一个透视相机

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fov` | `number` | 摄像机视锥体垂直视野角度 |
| `aspect` | `number` | 摄像机视锥体长宽比 |
| `near` | `number` | 摄像机视锥体近端面 |
| `far` | `number` | 摄像机视锥体远端面 |

#### Returns

`void`

#### Defined in

[src/engine/core/Camera3D.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L131)

___

### ortho

▸ **ortho**(`width`, `height`, `znear`, `zfar`): `void`

生成一个透视投影矩阵.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | 屏幕的宽度。 |
| `height` | `number` | 屏幕的高度. |
| `znear` | `number` | 近裁剪面位置Z值. |
| `zfar` | `number` | 远裁剪面位置Z值. |

#### Returns

`void`

#### Defined in

[src/engine/core/Camera3D.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L148)

___

### orthoOffCenter

▸ **orthoOffCenter**(`l`, `r`, `b`, `t`, `zn`, `zf`): `void`

生成一个透视投影矩阵.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `l` | `number` | 观察时X轴最小值. |
| `r` | `number` | 观察时X轴最大值. |
| `b` | `number` | 观察时Y轴最小值。 |
| `t` | `number` | 观察时Y轴最大值. |
| `zn` | `number` | 近裁剪面位置Z值. |
| `zf` | `number` | 远裁剪面位置Z值. |

#### Returns

`void`

#### Defined in

[src/engine/core/Camera3D.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L165)

___

### orthoZo

▸ **orthoZo**(`l`, `r`, `b`, `t`, `zn`, `zf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `l` | `number` |
| `r` | `number` |
| `b` | `number` |
| `t` | `number` |
| `zn` | `number` |
| `zf` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/core/Camera3D.ts:172](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L172)

___

### object3DToScreenRay

▸ **object3DToScreenRay**(`n`, `target?`): [`Vector3`](Vector3.md)

三维坐标转二维屏幕坐标

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `n` | [`Vector3`](Vector3.md) | `undefined` | 三维坐标 |
| `target` | [`Vector3`](Vector3.md) | `null` | 二维屏幕坐标 默认为null 为null会返回一个新的对象 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/core/Camera3D.ts:215](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L215)

___

### ScreenRayToObject3D

▸ **ScreenRayToObject3D**(`n`, `target?`): [`Vector3`](Vector3.md)

二维屏幕坐标转三维坐标

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `n` | [`Vector3`](Vector3.md) | `undefined` | 二维屏幕坐标 |
| `target` | [`Vector3`](Vector3.md) | `null` | 三维坐标 默认为null 为null会返回一个新的对象 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/core/Camera3D.ts:236](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L236)

___

### unproject

▸ **unproject**(`nX`, `nY`, `sZ`, `target?`): [`Vector3`](Vector3.md)

输入一个3D坐标点，获得投影后的坐标点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nX` | `number` | 3D x坐标 |
| `nY` | `number` | 3D y坐标 |
| `sZ` | `number` | 3D z坐标 |
| `target?` | [`Vector3`](Vector3.md) | 投影后的坐标点，可为空 |

#### Returns

[`Vector3`](Vector3.md)

投影后的坐标

#### Defined in

[src/engine/core/Camera3D.ts:301](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L301)

___

### screenPointToRay

▸ **screenPointToRay**(`viewPortPosX`, `viewPortPosY`): [`Ray`](Ray.md)

输入屏幕2D坐标，获取到从相机位置出发，经过该屏幕位置对应的3D位置的一条射线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `viewPortPosX` | `number` | 屏幕x坐标 |
| `viewPortPosY` | `number` | 屏幕y坐标 |

#### Returns

[`Ray`](Ray.md)

射线

#### Defined in

[src/engine/core/Camera3D.ts:341](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L341)

___

### screenPointToWorld

▸ **screenPointToWorld**(`viewPortPosX`, `viewPortPosY`, `z`): [`Vector3`](Vector3.md)

屏幕坐标转换为世界坐标

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `viewPortPosX` | `number` | 屏幕x坐标 |
| `viewPortPosY` | `number` | 屏幕y坐标 |
| `z` | `number` | 屏幕z坐标 |

#### Returns

[`Vector3`](Vector3.md)

世界坐标

#### Defined in

[src/engine/core/Camera3D.ts:362](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L362)

___

### worldToScreenPoint

▸ **worldToScreenPoint**(`point`, `target?`): [`Vector3`](Vector3.md)

世界坐标转换为屏幕坐标

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Vector3`](Vector3.md) |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

世界坐标

#### Defined in

[src/engine/core/Camera3D.ts:374](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L374)

___

### lookAt

▸ **lookAt**(`pos`, `target`, `up?`): `void`

当前对象对视位置 （全局） (修改的是自身的全局变换)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) | `undefined` | 自身的位置 （全局） |
| `target` | [`Vector3`](Vector3.md) | `undefined` | 目标的位置 （全局） |
| `up` | [`Vector3`](Vector3.md) | `Vector3.Y_AXIS` | 向上的方向 |

#### Returns

`void`

#### Defined in

[src/engine/core/Camera3D.ts:386](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L386)

___

### enableJitterProjection

▸ **enableJitterProjection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/engine/core/Camera3D.ts:432](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L432)

___

### getCastShadowLightSpaceMatrix

▸ **getCastShadowLightSpaceMatrix**(`shadowCamera`, `lightDir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadowCamera` | [`Camera3D`](Camera3D.md) |
| `lightDir` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/core/Camera3D.ts:489](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L489)

___

### getWorldDirection

▸ **getWorldDirection**(`target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/core/Camera3D.ts:551](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L551)

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

[src/engine/core/Camera3D.ts:558](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L558)

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

[src/engine/core/Camera3D.ts:576](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L576)

## Constructors

### constructor

• **new Camera3D**()

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/engine/core/Camera3D.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/Camera3D.ts#L98)
