# Code Inclusion
When writing shader code, we often encounter situations like these:
 - Frequent parsing of `normalMap` to obtain normal vectors provided by the texture.
 - The need to define a struct in one place and use it in another.
 - A specific group of textures and corresponding samplers that need to be defined repeatedly.
 - A specific set of GPU buffers that are repeatedly bound by some related passes.


In the past, we would copy the same code snippet to wherever it was needed. This meant that if the code logic needed to be adjusted, we had to make the same adjustments everywhere it was used. 
This was something that programmers found difficult and required experience to handle. So we introduced the `#include` keyword into `shader` .

### #Include
Following the previous chapter's approach, suppose we have registered a global code snippet to `ShaderLib` and used `GlobalUniform` as the only `key`:

```ts
// Register GlobalUniform code snippet
ShaderLib.register('GlobalUniform', GlobalUniform );
```

After that, in other `shader` , we can include the code snippet and data from `GlobalUniform` with just one line of code. We only need to modify the contents of the `GlobalUniform`  code to obtain global modifications.
::: code-group
```wgsl [shader1]
// Include GlobalUniform code snippet
#include `GlobalUniform`

// Other code 1
....
```
```wgsl [shader2]
// Include GlobalUniform code snippet
#include `GlobalUniform`

// Other code 2
....
```
```wgsl [shader3]
// Include GlobalUniform code snippet
#include `GlobalUniform`

// Other code 3
....
```
:::

### Built-in Common Shader Code Snippets

Followings are some common built-in code snippet definitions:

```wgsl
#include "Common_vert"  //Common vertex shader code
#include "Common_frag"  //Common fragment shader code
#include "BxDF_frag"    //Fragment shader code using the BxDF equation
#include "UnLit_frag"   //Fragment shader code using unlit shading
```