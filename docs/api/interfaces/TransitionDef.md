[**@orillusion/core**](../README.md)

***

# Interface: TransitionDef

Defined in: [src/components/anim/graph/StateMachine.ts:32](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/StateMachine.ts#L32)

## Properties

### to

> **to**: `string`

Defined in: [src/components/anim/graph/StateMachine.ts:33](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/StateMachine.ts#L33)

***

### condition

> **condition**: [`Condition`](../type-aliases/Condition.md)

Defined in: [src/components/anim/graph/StateMachine.ts:34](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/StateMachine.ts#L34)

***

### duration

> **duration**: `number`

Defined in: [src/components/anim/graph/StateMachine.ts:36](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/StateMachine.ts#L36)

Crossfade duration in seconds.

***

### offset?

> `optional` **offset?**: `number`

Defined in: [src/components/anim/graph/StateMachine.ts:38](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/StateMachine.ts#L38)

Initial time of the destination clip in seconds. Defaults to 0.

***

### interruptible?

> `optional` **interruptible?**: `boolean`

Defined in: [src/components/anim/graph/StateMachine.ts:40](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/StateMachine.ts#L40)

If true, this transition can fire even mid-fade. Defaults to false.
