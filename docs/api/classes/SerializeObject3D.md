# Class: SerializeObject3D

## Hierarchy

- [`SerializeIndex`](SerializeIndex.md)

  ↳ **`SerializeObject3D`**

  ↳↳ [`SerializeScene3D`](SerializeScene3D.md)


### Constructors

- [constructor](SerializeObject3D.md#constructor)

### Properties

- [index](SerializeObject3D.md#index)
- [name](SerializeObject3D.md#name)
- [renderLayer](SerializeObject3D.md#renderlayer)
- [visible](SerializeObject3D.md#visible)
- [prefabRef](SerializeObject3D.md#prefabref)
- [components](SerializeObject3D.md#components)
- [isScene3D](SerializeObject3D.md#isscene3d)
- [children](SerializeObject3D.md#children)

## Constructors

### constructor

• **new SerializeObject3D**()

#### Inherited from

[SerializeIndex](SerializeIndex.md).[constructor](SerializeIndex.md#constructor)

## Properties

### index

• **index**: `number` = `-1`

#### Inherited from

[SerializeIndex](SerializeIndex.md).[index](SerializeIndex.md#index)

#### Defined in

[src/engine/util/serialize/SerializeData.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeData.ts#L26)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[SerializeIndex](SerializeIndex.md).[name](SerializeIndex.md#name)

#### Defined in

[src/engine/util/serialize/SerializeData.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeData.ts#L27)

___

### renderLayer

• **renderLayer**: `number`

#### Defined in

[src/engine/util/serialize/SerializeData.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeData.ts#L88)

___

### visible

• **visible**: `boolean`

#### Defined in

[src/engine/util/serialize/SerializeData.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeData.ts#L89)

___

### prefabRef

• `Optional` **prefabRef**: `string`

#### Defined in

[src/engine/util/serialize/SerializeData.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeData.ts#L90)

___

### components

• **components**: [`SerializeComponentBase`](SerializeComponentBase.md)[]

#### Defined in

[src/engine/util/serialize/SerializeData.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeData.ts#L91)

___

### isScene3D

• `Optional` **isScene3D**: `boolean`

#### Defined in

[src/engine/util/serialize/SerializeData.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeData.ts#L92)

___

### children

• `Optional` **children**: `number`[]

#### Defined in

[src/engine/util/serialize/SerializeData.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeData.ts#L93)
