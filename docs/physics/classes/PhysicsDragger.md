# Class: PhysicsDragger

PhysicsDragger 类用于通过鼠标操作拖拽3D物体。
利用物理引擎中的射线检测与刚体交互，实现物体的实时拖拽效果。

### Constructors

- [constructor](PhysicsDragger.md#constructor)

### Properties

- [filterStatic](PhysicsDragger.md#filterstatic)

### Accessors

- [enable](PhysicsDragger.md#enable)
- [collisionFilterGroup](PhysicsDragger.md#collisionfiltergroup)
- [collisionFilterMask](PhysicsDragger.md#collisionfiltermask)

## Constructors

### constructor

• **new PhysicsDragger**(): [`PhysicsDragger`](PhysicsDragger.md)

#### Returns

[`PhysicsDragger`](PhysicsDragger.md)

#### Defined in

[packages/physics/utils/PhysicsDragger.ts:54](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/PhysicsDragger.ts#L54)

## Properties

### filterStatic

• **filterStatic**: `boolean` = `true`

是否过滤静态刚体对象，默认值为 `true`

#### Defined in

[packages/physics/utils/PhysicsDragger.ts:38](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/PhysicsDragger.ts#L38)

## Accessors

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/physics/utils/PhysicsDragger.ts:22](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/PhysicsDragger.ts#L22)

• `set` **enable**(`value`): `void`

是否启用拖拽功能

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/physics/utils/PhysicsDragger.ts:29](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/PhysicsDragger.ts#L29)

___

### collisionFilterGroup

• `set` **collisionFilterGroup**(`value`): `void`

设置射线过滤组

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/physics/utils/PhysicsDragger.ts:43](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/PhysicsDragger.ts#L43)

___

### collisionFilterMask

• `set` **collisionFilterMask**(`value`): `void`

设置射线过滤掩码

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/physics/utils/PhysicsDragger.ts:50](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/PhysicsDragger.ts#L50)