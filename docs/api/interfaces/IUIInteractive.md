# Interface: IUIInteractive

## Implemented by

- [`UIInteractive`](../classes/UIInteractive.md)

### Properties

- [interactive](IUIInteractive.md#interactive)
- [enable](IUIInteractive.md#enable)
- [visible](IUIInteractive.md#visible)
- [object3D](IUIInteractive.md#object3d)

### Accessors

- [interactiveVisible](IUIInteractive.md#interactivevisible)
- [mouseStyle](IUIInteractive.md#mousestyle)

### Methods

- [rayPick](IUIInteractive.md#raypick)
- [destroy](IUIInteractive.md#destroy)

## Properties

### interactive

• **interactive**: `boolean`

#### Defined in

[src/components/gui/uiComponents/IUIInteractive.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/IUIInteractive.ts#L13)

___

### enable

• **enable**: `boolean`

#### Defined in

[src/components/gui/uiComponents/IUIInteractive.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/IUIInteractive.ts#L14)

___

### visible

• **visible**: `boolean`

#### Defined in

[src/components/gui/uiComponents/IUIInteractive.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/IUIInteractive.ts#L15)

___

### object3D

• `Optional` **object3D**: [`CEventDispatcher`](../classes/CEventDispatcher.md)

#### Defined in

[src/components/gui/uiComponents/IUIInteractive.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/IUIInteractive.ts#L16)

## Accessors

### interactiveVisible

• `get` **interactiveVisible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/components/gui/uiComponents/IUIInteractive.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/IUIInteractive.ts#L18)

___

### mouseStyle

• `set` **mouseStyle**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`UIInteractiveStyle`](../enums/UIInteractiveStyle.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/IUIInteractive.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/IUIInteractive.ts#L24)

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

[src/components/gui/uiComponents/IUIInteractive.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/IUIInteractive.ts#L20)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/IUIInteractive.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/IUIInteractive.ts#L22)
