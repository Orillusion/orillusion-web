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

class shader1 extends Material {
    constructor() {
        super();

        // create RenderShaderPass instance
        let renderShader = new RenderShaderPass('vsCode','fsCode');

        // create Shader instance
        let shader = new Shader();

        // create RenderShaderPass instance
        shader.addRenderPass(renderShader);

        // add light through define USE_LIGHT
        shader.setDefine("USE_LIGHT", true);

        // add Shader to this instance
        this.shader = shader;
    }
}
class shader2 extends Material {
    constructor() {
        super();
        
        // create RenderShaderPass instance
        let renderShader = new RenderShaderPass('vsCode','fsCode');

        // create Shader instance
        let shader = new Shader();
        
        // create Shader instance
        shader.addRenderPass(renderShader);

        // add light through define USE_LIGHT
        shader.setDefine("USE_LIGHT", false);

        // add Shader to this instance
        this.shader = shader;
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