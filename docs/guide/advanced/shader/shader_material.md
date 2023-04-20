# RenderShader
The material `Material` is used to describe the appearance of the rendered object surface and control how the engine renders it. A material must specify a `RenderShader`internally, and they are closely linked. Many properties of the material are stored on the shader.
- Materials and shaders have a many-to-one relationship, and a material has a reference to an instance of the shader. Multiple different materials can reuse the same shader.
- In addition to containing a shader, a material also has other content, such as a texture list and rendering priority.

When creating a material, the shader instance must be specified. The following content will describe how to create a shader instance.

## Register Shader
Each shader must be registered through `ShaderLib` , and the shader must have a unique `key` as its name.
```ts
import {ShaderLib} from '@orillusion/core'
let MyShader = ` 
    fn vert(inputData:VertexAttributes) -> VertexOutput {
       //...
       return ORI_VertexOut ;
    }

    fn frag(){
        //...
    }
    `;
// Register the shader
ShaderLib.register('myShader', MyShader)
```

## Create Shader Instance
We can inherit from `MaterialBase` to create a new shader instance. After registering the corresponding `shader` code through `ShaderLib` , we can use `setShader(vs:string, fs:string)` to complete the creation of the shader.

```ts
let vsShader = `.... ` //wgsl vs code
let fsShader = `.... ` //wgsl fs code

class myShader extends MaterialBase{
    constructor() {
        super();
        // Register shaders
        ShaderLib.register("vsShader", vsShader);
        ShaderLib.register("fsShader", fsShader);
        // Create renderShader instance
        let renderShader = this.setShader('vsShader','fsShader');
    }
}
```

## Set Shader Entry Function
After creating the shader instance, you need to set the entry function names for the vertex and fragment shaders.
```ts
//  Set shader code entry function name
renderShader.setShaderEntry( `VertMain`, `FragMain` )
```

## Set Shader Define Macro
Using macro definitions can optimize your shader code and allow the program to efficiently execute different branch paths based on the set variables.
```ts
// Use code related to tangent
renderShader.setDefine("USE_TANGENT", true);
```

> More macro definition related content will be introduced in [着色器变体](./shader_variants.md) 
