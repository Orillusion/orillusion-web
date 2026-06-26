[**@orillusion/core**](../README.md)

***

# Class: StateMachine

Defined in: [src/components/anim/graph/StateMachine.ts:65](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/StateMachine.ts#L65)

Lightweight, data-driven animation state machine.

Plug into an AnimatorComponent via `animator.setStateMachine(fsm)`. On every
onUpdate the FSM advances time, evaluates transitions, and may issue a
crossFade on the underlying animator.

Why no visual graph editor: shipping a graph UX is a multi-year investment.
A JSON/TS DSL covers 90% of use cases at <5% the cost; DCC tooling
(Blender / Maya) is the right home for authoring.

## Constructors

### Constructor

> **new StateMachine**(`states`, `initial?`, `params?`): `StateMachine`

Defined in: [src/components/anim/graph/StateMachine.ts:72](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/StateMachine.ts#L72)

#### Parameters

##### states

[`StateDef`](../interfaces/StateDef.md)[]

##### initial?

`string`

##### params?

[`AnimatorParams`](../interfaces/AnimatorParams.md)

#### Returns

`StateMachine`

## Accessors

### params

#### Get Signature

> **get** **params**(): [`AnimatorParams`](../interfaces/AnimatorParams.md)

Defined in: [src/components/anim/graph/StateMachine.ts:82](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/StateMachine.ts#L82)

##### Returns

[`AnimatorParams`](../interfaces/AnimatorParams.md)

***

### currentState

#### Get Signature

> **get** **currentState**(): [`StateDef`](../interfaces/StateDef.md)

Defined in: [src/components/anim/graph/StateMachine.ts:83](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/StateMachine.ts#L83)

##### Returns

[`StateDef`](../interfaces/StateDef.md)

***

### currentStateName

#### Get Signature

> **get** **currentStateName**(): `string`

Defined in: [src/components/anim/graph/StateMachine.ts:84](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/StateMachine.ts#L84)

##### Returns

`string`

## Methods

### sync()

> **sync**(`animator`): `void`

Defined in: [src/components/anim/graph/StateMachine.ts:91](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/StateMachine.ts#L91)

Convenience: ensure the underlying animator is playing the right clip.
Should be called once after attaching the FSM, or any time external
code wants to force a sync.

#### Parameters

##### animator

[`AnimatorComponent`](AnimatorComponent.md)

#### Returns

`void`

***

### evaluate()

> **evaluate**(`animator`, `dt`): `void`

Defined in: [src/components/anim/graph/StateMachine.ts:96](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/StateMachine.ts#L96)

Called by AnimatorComponent.onUpdate every frame.

#### Parameters

##### animator

[`AnimatorComponent`](AnimatorComponent.md)

##### dt

`number`

#### Returns

`void`
