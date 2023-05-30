# Class: GUIPickHelper

### Methods

- [rayPick](GUIPickHelper.md#raypick)

### Constructors

- [constructor](GUIPickHelper.md#constructor)

## Methods

### rayPick

▸ `Static` **rayPick**(`ray`, `screenPos`, `screenSize`, `space`, `uiTransform`, `worldMatrix`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ray` | [`Ray`](Ray.md) |
| `screenPos` | [`Vector2`](Vector2.md) |
| `screenSize` | [`Vector2`](Vector2.md) |
| `space` | [`GUISpace`](../enums/GUISpace.md) |
| `uiTransform` | [`UITransform`](UITransform.md) |
| `worldMatrix` | [`Matrix4`](Matrix4.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `intersect` | `boolean` |
| `intersectPoint?` | [`Vector3`](Vector3.md) |
| `distance` | `number` |

#### Defined in

[src/components/gui/GUIPickHelper.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/GUIPickHelper.ts#L32)

## Constructors

### constructor

• **new GUIPickHelper**()
