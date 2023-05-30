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

▸ **build**(`transforms`, `guiMesh`, `forceUpdate`): `boolean`

Rebuild a specified GUIMesh
Check and rebuild a GUIMesh, including geometry and materials

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transforms` | [`UITransform`](UITransform.md)[] | Fill in the UITransform list for the specified GUIMesh |
| `guiMesh` | [`GUIMesh`](GUIMesh.md) | Specify the GUIMesh object for reconstructing Geometry |
| `forceUpdate` | `boolean` | whether need to force refactoring |

#### Returns

`boolean`

Return the build result (the maximum number of textures supported by GUIMaterials for a single UIPanel is limited and cannot exceed the limit)

#### Defined in

[src/components/gui/core/GUIGeometryRebuild.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometryRebuild.ts#L25)
