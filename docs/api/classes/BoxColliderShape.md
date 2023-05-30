# Class: BoxColliderShape

Box shaped collision body.
It is a basic box shaped primitive collision body.

## Hierarchy

- [`ColliderShape`](ColliderShape.md)

  ↳ **`BoxColliderShape`**

### Constructors

- [constructor](BoxColliderShape.md#constructor)

### Accessors

- [shapeType](BoxColliderShape.md#shapetype)
- [center](BoxColliderShape.md#center)
- [size](BoxColliderShape.md#size)
- [halfSize](BoxColliderShape.md#halfsize)

### Methods

- [setFromCenterAndSize](BoxColliderShape.md#setfromcenterandsize)

## Constructors

### constructor

• **new BoxColliderShape**()

#### Overrides

[ColliderShape](ColliderShape.md).[constructor](ColliderShape.md#constructor)

#### Defined in

[src/components/shape/BoxColliderShape.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/BoxColliderShape.ts#L24)

## Accessors

### shapeType

• `get` **shapeType**(): [`ColliderShapeType`](../enums/ColliderShapeType.md)

#### Returns

[`ColliderShapeType`](../enums/ColliderShapeType.md)

#### Inherited from

ColliderShape.shapeType

#### Defined in

[src/components/shape/ColliderShape.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L30)

___

### center

• `get` **center**(): [`Vector3`](Vector3.md)

The position of the collision object in the local space of the object.

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

ColliderShape.center

#### Defined in

[src/components/shape/ColliderShape.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L49)

• `set` **center**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

ColliderShape.center

#### Defined in

[src/components/shape/ColliderShape.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L53)

___

### size

• `get` **size**(): [`Vector3`](Vector3.md)

The size of the collision body in the X, Y, and Z directions.

#### Returns

[`Vector3`](Vector3.md)

Vector3

#### Inherited from

ColliderShape.size

#### Defined in

[src/components/shape/ColliderShape.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L62)

• `set` **size**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

ColliderShape.size

#### Defined in

[src/components/shape/ColliderShape.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L66)

___

### halfSize

• `get` **halfSize**(): [`Vector3`](Vector3.md)

Half the size of the collision body.

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

ColliderShape.halfSize

#### Defined in

[src/components/shape/ColliderShape.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L74)

## Methods

### setFromCenterAndSize

▸ **setFromCenterAndSize**(`ct?`, `sz?`): [`BoxColliderShape`](BoxColliderShape.md)

Set the position and size of collision objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ct?` | [`Vector3`](Vector3.md) | The position of the collision object in the local space of the object. |
| `sz?` | [`Vector3`](Vector3.md) | The size of the collision body in the X, Y, and Z directions. |

#### Returns

[`BoxColliderShape`](BoxColliderShape.md)

#### Inherited from

[ColliderShape](ColliderShape.md).[setFromCenterAndSize](ColliderShape.md#setfromcenterandsize)

#### Defined in

[src/components/shape/ColliderShape.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L40)
