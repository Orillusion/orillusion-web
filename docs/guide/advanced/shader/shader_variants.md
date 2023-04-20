# Shader Variants

For developers, the same shader code may face different usage scenarios and may need to load different variables or code modules depending on the environment. We have built the following two custom APIs to help developers generate different shader variants:
- Set different macro definitions `setDefine()`；
- Set different constants `setConst()`； 

For example, if we want to create two materials `shader`, one that accepts light and one that does not, with all other code being identical, we can flexibly load different `shader` code by defining the macro variable `USE_LIGHT` code:

For a model with `LIGHT` data, its material ball needs to set macro `setDefine("USE_LIGHT", true)`;

```ts
// Same wgsl code
ShaderLib.register('vsCode', '....')
ShaderLib.register('fsCode', '....')

class shader1 extends MaterialBase{
    constructor() {
        let renderShader = this.setShader('vsCode','fsCode');
        //Load light module by defining USE_LIGHT
        renderShader.setDefine(`USE_LIGHT`, true);
    }
}
class shader2 extends MaterialBase{
    constructor() {
        let renderShader = this.setShader('vsCode','fsCode');
        //Load other modules by defining USE_LIGHT
        renderShader.setDefine(`USE_LIGHT`, false);
    }
}
```
The same shader code will generate different variants due to different macro definitions. Thus,`RenderShader` with different functions can be generated and used in different materials.
```wgsl
// Load global shader
#include `GlobalUniform`

// Select to load different shaders based on the macro definition USE_LIGHT
#if USE_LIGHT
    // ... code for processing light
#else
    // ... code for not processing light
#endif

// Other code
...
```