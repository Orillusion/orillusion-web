[**@orillusion/core**](../README.md)

***

# Type Alias: SceneCaptureUpdateMode

> **SceneCaptureUpdateMode** = `"always"` \| `"manual"`

Defined in: [src/components/SceneCaptureCameraComponent.ts:23](https://github.com/orillusion/orillusion/blob/main/src/components/SceneCaptureCameraComponent.ts#L23)

Scene-capture update strategy.

- `'always'` — render every frame the pass executes (default; cheapest
  coding-wise, most expensive GPU-wise).
- `'manual'` — render only when [SceneCaptureCameraComponent.needUpdate](../classes/SceneCaptureCameraComponent.md#needupdate)
  is true; SceneCapturePass clears the flag after rendering.
