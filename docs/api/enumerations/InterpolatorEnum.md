[**@orillusion/core**](../README.md)

***

# Enumeration: InterpolatorEnum

Defined in: [src/math/TimeInterpolator.ts:301](https://github.com/orillusion/orillusion/blob/main/src/math/TimeInterpolator.ts#L301)

Interpolator enumeration
|Name|Describe|
|:---:|:---:|
|AccelerateInterpolator| Acceleration interpolator, animation acceleration runs to the end.|
|DecelerateInterpolator| Slow down interpolator, animation slow down run to end.|
|AccelerateDecelerateInterpolator| Acceleration and deceleration interpolator, animation first speed up and then decelerate.|
|LinearInterpolator| Linear interpolator, animation uniform motion.|
|BounceInterpolator| Elastic interpolator, before the end of the animation will have an elastic animation effect.|
|AnticipateInterpolator| Step back and then speed up to the end.|
|AnticipateOvershootInterpolator| Take a small step back, then speed up, then go a little beyond the finish line and then come back.|
|CycleInterpolator| cyclic motion|
|OvershootInterpolator| Finish the animation quickly, go a little beyond the end point and then go back to the end point.|

## Enumeration Members

### AccelerateInterpolator

> **AccelerateInterpolator**: `0`

Defined in: [src/math/TimeInterpolator.ts:305](https://github.com/orillusion/orillusion/blob/main/src/math/TimeInterpolator.ts#L305)

Acceleration interpolator, animation acceleration runs to the end.

***

### DecelerateInterpolator

> **DecelerateInterpolator**: `1`

Defined in: [src/math/TimeInterpolator.ts:309](https://github.com/orillusion/orillusion/blob/main/src/math/TimeInterpolator.ts#L309)

Slow down interpolator, animation slow down run to end.

***

### AccelerateDecelerateInterpolator

> **AccelerateDecelerateInterpolator**: `2`

Defined in: [src/math/TimeInterpolator.ts:313](https://github.com/orillusion/orillusion/blob/main/src/math/TimeInterpolator.ts#L313)

Acceleration and deceleration interpolator, animation first speed up and then decelerate.

***

### LinearInterpolator

> **LinearInterpolator**: `3`

Defined in: [src/math/TimeInterpolator.ts:317](https://github.com/orillusion/orillusion/blob/main/src/math/TimeInterpolator.ts#L317)

Linear interpolator, animation uniform motion.

***

### BounceInterpolator

> **BounceInterpolator**: `4`

Defined in: [src/math/TimeInterpolator.ts:321](https://github.com/orillusion/orillusion/blob/main/src/math/TimeInterpolator.ts#L321)

Elastic interpolator, before the end of the animation will have an elastic animation effect.

***

### AnticipateInterpolator

> **AnticipateInterpolator**: `5`

Defined in: [src/math/TimeInterpolator.ts:325](https://github.com/orillusion/orillusion/blob/main/src/math/TimeInterpolator.ts#L325)

Step back and then speed up to the end.

***

### AnticipateOvershootInterpolator

> **AnticipateOvershootInterpolator**: `6`

Defined in: [src/math/TimeInterpolator.ts:329](https://github.com/orillusion/orillusion/blob/main/src/math/TimeInterpolator.ts#L329)

Take a small step back, then speed up, then go a little beyond the finish line and then come back.

***

### CycleInterpolator

> **CycleInterpolator**: `7`

Defined in: [src/math/TimeInterpolator.ts:333](https://github.com/orillusion/orillusion/blob/main/src/math/TimeInterpolator.ts#L333)

Cyclic motion

***

### OvershootInterpolator

> **OvershootInterpolator**: `8`

Defined in: [src/math/TimeInterpolator.ts:337](https://github.com/orillusion/orillusion/blob/main/src/math/TimeInterpolator.ts#L337)

Finish the animation quickly, go a little beyond the end point and then go back to the end point.
