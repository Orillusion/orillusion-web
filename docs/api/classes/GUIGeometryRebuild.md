# Class: GUIGeometryRebuild

This class is responsible for performing the Geometry reconstruction work of the GUI

### Constructors

- [constructor](GUIGeometryRebuild.md#constructor)

### Methods

- [build](GUIGeometryRebuild.md#build)

## Constructors

### constructor

• **new GUIGeometryRebuild**()

## Methods

### build

▸ **build**(`transforms`, `panel`, `forceUpdate`): `boolean`

Rebuild a specified GUI Mesh
Check and rebuild a GUI Mesh, including geometry and materials

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transforms` | [`UITransform`](UITransform.md)[] | Fill in the UITransform list for the specified GUI Mesh |
| `panel` | [`UIPanel`](UIPanel.md) | Specify the GUI Mesh object for reconstructing Geometry |
| `forceUpdate` | `boolean` | whether need to force refactoring |

#### Returns

`boolean`

Return the build result (the maximum number of textures supported by GUIMaterials for a single UIPanel is limited and cannot exceed the limit)

#### Defined in

[src/components/gui/core/GUIGeometryRebuild.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometryRebuild.ts#L24)
