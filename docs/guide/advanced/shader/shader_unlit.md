# Unlit Material
This article will take the built-in `UnlitMaterial` as an example to illustrate how to create a material in the engine.

## Creating a Material
Create a new `MaterialBase` by inheriting from `UnLitMaterial`。
```ts
export class UnLitMaterial extends MaterialBase {
    constructor() {
        super();
        //...
    }
}
```

## Writing Shader Code
First, prepare the shader script to be edited. As an essential material, the unlit material often only needs to `include` existing code segments.

```wgsl
//Import common vertex shader-related code
#include "Common_vert"
//Import common fragment shader-related code
#include "Common_frag"
//Import unlit material fragment shader code
#include "UnLit_frag"
//Import unlit material, uniform-related code
#include "UnLitMaterialUniform_frag"
```

Define the vertex shader`vert`function:
```wgsl
fn vert(inputData:VertexAttributes) -> VertexOutput {
    //Execute the built-in vertex shader function
    ORI_Vert(inputData) ;
    //Output vertex data
    return ORI_VertexOut ;
}
```

Define the fragment shader`frag`function:
```wgsl
fn frag(){
    //Get the first UV offset data
    var transformUV1 = materialUniform.transformUV1;
    //Get the second UV offset data
    var transformUV2 = materialUniform.transformUV2;
    //Calculate real-time UV
    var uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; 
    //Sample the baseMap as the output color
    let color = textureSample(baseMap,baseMapSampler,uv) ;
    //Store the color in the built-in variable ORI_ShadingInput's BaseColor
    ORI_ShadingInput.BaseColor = color * materialUniform.baseColor ;
    //Execute the unlit shading function
    UnLit();
}
```
Put the above script into ShaderLib for management by a specific key `UnLitShader`.
```ts
let Unlit:string = `${shaderCode}`;
 ShaderLib.register('UnLitShader', UnLit);
```

### Creating a Shader`RenderShader`
Here, we set the vertexShader and fragmentShader as the same script.
```ts
//Create a shader instance
let shader = this.setShader(`UnLitShader`,`UnLitShader`);
//Set the entry function
shader.setShaderEntry(`VertMain`,`FragMain`)
```

### Setting Material Variables
Materials often need to modify the rendering results of materials from the outside, which can be abstracted as variables and exposed for external use.
> An unlit material may have simple UV transformation effects, default colors, transparency clipping thresholds, etc. 
Here, we extract four variables for external modification.
```ts
//The transformation coefficient of the first UV
shader.setUniformVector4(`transformUV1`, new Vector4(0, 0, 1, 1));
//The transformation coefficient of the second UV
shader.setUniformVector4(`transformUV2`, new Vector4(0, 0, 1, 1));
//Base color
shader.setUniformColor(`baseColor`, new Color());
//Transparency clipping threshold
shader.setUniformFloat(`alphaCutoff`, 0.5);

```

### Configuration of Material Shader Macros
There are some common macros for material shaders that need to be explicitly set:
1. `useLight` : whether to receive lighting influence;
2. `acceptGI` : whether to receive global illumination (GI);
3. `acceptShadow` : whether to receive shadows;
4. `castShadow` : whether to cast shadows;
5. `receiveEnv` : whether to receive environmental lighting;
6. ...

You may also need to set the following properties:
1. `renderLayer`: the rendering layer it belongs to;
2. `renderOrder`: the rendering priority for transparency rendering;
3. ...

The macros for non-lighting material shaders are as follows:
```ts
let shaderState = shader.shaderState;
//Do not accept shadows
shaderState.acceptShadow = false;
//Do not receive environmental lighting
shaderState.receiveEnv = false;
//Do not accept global illumination
shaderState.acceptGI = false;
//Not affected by lighting
shaderState.useLight = false;

```

## Summary
The process of customizing a material shader is generally similar to that of a non-lighting shader. During your practice, you may encounter such problems, which can be resolved by troubleshooting one by one.
1. Using a built-in variable that has not been defined: check whether the corresponding code segment has been included;
2. Using a built-in function that has not been defined: check whether the corresponding code segment has been included;
3. Defining a variable that conflicts with a built-in variable: rename your variable to avoid conflict with the built-in variable;
4. Defining a function that conflicts with a built-in function: rename your function to avoid conflict with the built-in function;
5. Defining a structure that conflicts with a built-in structure: rename your structure to avoid conflict with the built-in structure;
6. Incorrect macro settings lead to the use of undefined variables, functions, and structures in the code path;
7. Inconsistent naming of Uniform, Texture, and GPUBuffer data bindings in the material shader with TypeScript script. Modify the naming in your shader code to be consistent with the TypeScript script.
