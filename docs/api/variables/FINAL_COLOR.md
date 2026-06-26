[**@orillusion/core**](../README.md)

***

# Variable: FINAL\_COLOR

> `const` **FINAL\_COLOR**: `"_FinalColor"` = `'_FinalColor'`

Defined in: [src/gfx/renderJob/graph/passes/PostPass.ts:25](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/PostPass.ts#L25)

Published handle name for the final post-chain output. Resolves to
whatever texture the last enabled post wrote — tone-mapped color
when the full chain runs, FXAA-sharpened color when only FXAA is
enabled, or the colorPass GBuffer texture when no post effects are
enabled at all. [GUIPass](../classes/GUIPass.md) reads this handle to decide what
texture to draw to the canvas.
