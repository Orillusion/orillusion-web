# Interface: IUIInteractive

## Implemented by

- [`UIInteractive`](../classes/UIInteractive.md)


### Properties

- [interactive](IUIInteractive.md#interactive)
- [enable](IUIInteractive.md#enable)
- [object3D](IUIInteractive.md#object3d)

### Methods

- [rayPick](IUIInteractive.md#raypick)
- [destroy](IUIInteractive.md#destroy)

### Accessors

- [mouseStyle](IUIInteractive.md#mousestyle)

## Properties

### interactive

• **interactive**: `boolean`

#### Defined in

[src/engine/gui/components/IUIInteractive.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/IUIInteractive.ts#L11)

___

### enable

• **enable**: `boolean`

#### Defined in

[src/engine/gui/components/IUIInteractive.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/IUIInteractive.ts#L12)

___

### object3D

• `Optional` **object3D**: [`CEventDispatcher`](../classes/CEventDispatcher.md)

#### Defined in

[src/engine/gui/components/IUIInteractive.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/IUIInteractive.ts#L13)

## Methods

### rayPick

▸ **rayPick**(`ray`, `screenPos`, `screenSize`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ray` | [`Ray`](../classes/Ray.md) |
| `screenPos` | [`Vector2`](../classes/Vector2.md) |
| `screenSize` | [`Vector2`](../classes/Vector2.md) |

#### Returns

`any`

#### Defined in

[src/engine/gui/components/IUIInteractive.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/IUIInteractive.ts#L15)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/engine/gui/components/IUIInteractive.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/IUIInteractive.ts#L17)

## Accessors

### mouseStyle

• `set` **mouseStyle**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`UIInteractiveStyle`](../enums/UIInteractiveStyle.md) |

#### Returns

`void`

#### Defined in

[src/engine/gui/components/IUIInteractive.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/IUIInteractive.ts#L19)
