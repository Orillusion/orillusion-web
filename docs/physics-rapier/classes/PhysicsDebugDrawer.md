[**@orillusion/physics-rapier**](../README.md)

***

# Class: PhysicsDebugDrawer

Defined in: [packages/physics-rapier/debug/PhysicsDebugDrawer.ts:26](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/debug/PhysicsDebugDrawer.ts#L26)

Visualize the physics world via `world.debugRender()`. Wraps the
`Graphic3D` line renderer.

Mirrors `@orillusion/physics`'s `PhysicsDebugDrawer` shape, but uses Rapier's
built-in debug renderer (returns line buffer + color buffer in one call).

## Example

```ts
const g = new Graphic3D();
scene.addChild(g);
Physics.initDebugDrawer(g);
```

## Constructors

### Constructor

> **new PhysicsDebugDrawer**(`graphic3D`, `options?`): `PhysicsDebugDrawer`

Defined in: [packages/physics-rapier/debug/PhysicsDebugDrawer.ts:39](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/debug/PhysicsDebugDrawer.ts#L39)

#### Parameters

##### graphic3D

`any`

##### options?

[`DebugDrawerOptions`](../interfaces/DebugDrawerOptions.md) = `{}`

#### Returns

`PhysicsDebugDrawer`

## Properties

### graphic3D

> **graphic3D**: `any`

Defined in: [packages/physics-rapier/debug/PhysicsDebugDrawer.ts:32](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/debug/PhysicsDebugDrawer.ts#L32)

A `Graphic3D` instance (typed loosely so this package doesn't hard-depend on `@orillusion/graphic`).

***

### updateFreq

> **updateFreq**: `number`

Defined in: [packages/physics-rapier/debug/PhysicsDebugDrawer.ts:33](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/debug/PhysicsDebugDrawer.ts#L33)

***

### maxLineCount

> **maxLineCount**: `number`

Defined in: [packages/physics-rapier/debug/PhysicsDebugDrawer.ts:34](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/debug/PhysicsDebugDrawer.ts#L34)

## Accessors

### enable

#### Get Signature

> **get** **enable**(): `boolean`

Defined in: [packages/physics-rapier/debug/PhysicsDebugDrawer.ts:51](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/debug/PhysicsDebugDrawer.ts#L51)

##### Returns

`boolean`

#### Set Signature

> **set** **enable**(`value`): `void`

Defined in: [packages/physics-rapier/debug/PhysicsDebugDrawer.ts:47](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/debug/PhysicsDebugDrawer.ts#L47)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### update()

> **update**(): `void`

Defined in: [packages/physics-rapier/debug/PhysicsDebugDrawer.ts:54](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/debug/PhysicsDebugDrawer.ts#L54)

Called once per frame from `Physics.update`.

#### Returns

`void`
