# Class: MeshColliderShape

Mesh collision body

## Hierarchy

- [`ColliderShape`](ColliderShape.md)

  ↳ **`MeshColliderShape`**

### Constructors

- [constructor](MeshColliderShape.md#constructor)

### Properties

- [mesh](MeshColliderShape.md#mesh)

### Accessors

- [shapeType](MeshColliderShape.md#shapetype)
- [center](MeshColliderShape.md#center)
- [size](MeshColliderShape.md#size)
- [halfSize](MeshColliderShape.md#halfsize)

### Methods

- [setFromCenterAndSize](MeshColliderShape.md#setfromcenterandsize)
- [rayPick](MeshColliderShape.md#raypick)

## Constructors

### constructor

• **new MeshColliderShape**()

#### Overrides

[ColliderShape](ColliderShape.md).[constructor](ColliderShape.md#constructor)

#### Defined in

[src/components/shape/MeshColliderShape.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/MeshColliderShape.ts#L17)

## Properties

### mesh

• **mesh**: [`GeometryBase`](GeometryBase.md)

meshComponent

#### Defined in

[src/components/shape/MeshColliderShape.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/MeshColliderShape.ts#L12)

## Accessors

### shapeType

• `get` **shapeType**(): [`ColliderShapeType`](../enums/ColliderShapeType.md)

#### Returns

[`ColliderShapeType`](../enums/ColliderShapeType.md)

#### Inherited from

ColliderShape.shapeType

#### Defined in

[src/components/shape/ColliderShape.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L36)

___

### center

• `get` **center**(): [`Vector3`](Vector3.md)

The position of the collision object in the local space of the object.

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

ColliderShape.center

#### Defined in

[src/components/shape/ColliderShape.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L55)

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

[src/components/shape/ColliderShape.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L59)

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

[src/components/shape/ColliderShape.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L68)

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

[src/components/shape/ColliderShape.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L72)

___

### halfSize

• `get` **halfSize**(): [`Vector3`](Vector3.md)

Half the size of the collision body.

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

ColliderShape.halfSize

#### Defined in

[src/components/shape/ColliderShape.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L80)

## Methods

### setFromCenterAndSize

▸ **setFromCenterAndSize**(`ct?`, `sz?`): [`MeshColliderShape`](MeshColliderShape.md)

Set the position and size of collision objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ct?` | [`Vector3`](Vector3.md) | The position of the collision object in the local space of the object. |
| `sz?` | [`Vector3`](Vector3.md) | The size of the collision body in the X, Y, and Z directions. |

#### Returns

[`MeshColliderShape`](MeshColliderShape.md)

#### Inherited from

[ColliderShape](ColliderShape.md).[setFromCenterAndSize](ColliderShape.md#setfromcenterandsize)

#### Defined in

[src/components/shape/ColliderShape.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L46)

___

### rayPick

▸ **rayPick**(`ray`, `fromMatrix`): [`HitInfo`](../types/HitInfo.md)

Ray pickup.Emit a ray from a designated location to detect objects colliding with the ray.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ray` | [`Ray`](Ray.md) | emit ray |
| `fromMatrix` | [`Matrix4`](Matrix4.md) | matrix |

#### Returns

[`HitInfo`](../types/HitInfo.md)

Pick result intersect: whether to collide;
 IntersectPoint: collision point;
 Distance: The distance from the origin of the ray to the collision point.

#### Overrides

[ColliderShape](ColliderShape.md).[rayPick](ColliderShape.md#raypick)

#### Defined in

[src/components/shape/MeshColliderShape.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/MeshColliderShape.ts#L22)
