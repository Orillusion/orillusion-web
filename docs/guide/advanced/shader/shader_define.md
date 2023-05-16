# Code Macros

Similar to [code referencing](./shader_include.md), in addition to directly referencing shaders, we can also selectively load code using simple macro `(if-else-endif)` statements.

For example, to create two material shaders, one with lighting and one without lighting, with all other code being the same, we can use the `USE_LIGHT` macro variable to flexibly load different shader code:

```wgsl
// Load global shader
#include `GlobalUniform`

// Choose to load different shader code based on the USE_LIGHT macro definition
#if USE_LIGHT
    #include `shader1`
#else
    #include `shader2`
#endif

// Other code
...
```

For more information on macro definitions, see the next chapter on [Shader Variants](./shader_variants.md)