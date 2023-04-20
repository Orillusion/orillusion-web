# Shader Built-in Variables
In `Orillusion` engine, in order to write complex shader scripts (such as PBR material shading logic) in a more standardized and efficient manner, we have split and encapsulated the shader code.
This article will introduce some commonly used built-in shader scripts, such as variable, struct definition, function implementation, etc.

## Common Variables
The initial data comes from the vertex stream `VertexAttributes`in the pipeline, the`Uniform` data defined in the constant register - `globalUniform`，, and some mathematical constants defined in the script header, such as `PI=3.14` , etc.
After parsing these data, we can get the following built-in variables:

### globalUniform
The data collected by the engine before rendering is bound to the rendering pipeline in the form of `Uniform` , which can be regarded as read-only global data.
The built-in variables that can be obtained by parsing `globalUniform` are as follows:
 ```wgsl
//x: current frame data of the engine; y: current time of the engine; z: time span between current frame and the previous frame.
var<private> TIME: vec4<f32>;
//x: current mouse position x; y: current mouse position y.
var<private> MOUSE: vec4<f32>;
//x: pixel size of the canvas on which the engine is running.
var<private> SCREEN: vec4<f32>;
//x: distance to the near clipping plane of the projection; y: distance to the far clipping plane of the projection; z: 1.0 + 1.0 / globalUniform.far.
var<private> ProjectionParams: vec4<f32>;
//projection matrix
var<private> ORI_MATRIX_P: mat4x4<f32>;
//view matrix
var<private> ORI_MATRIX_V: mat4x4<f32>;
//model matrix
var<private> ORI_MATRIX_M: mat4x4<f32>;
//ORI_MATRIX_P * ORI_MATRIX_V
var<private> ORI_MATRIX_PV: mat4x4<f32>;
//inverse matrix of ORI_MATRIX_PV
var<private> ORI_MATRIX_PVInv: mat4x4<f32>;
//???
var<private> ORI_MATRIX_World: mat4x4<f32>;
//camera matrix
var<private> ORI_CAMERAMATRIX: mat4x4<f32>;
//matrix used to transform normal to world coordinates
var<private> ORI_NORMALMATRIX: mat3x3<f32>;
```
### ORI_VertexOut
This is the structure obtained by parsing vertex data `VertexAttributes` in the common vertex stream processing process `Common_vert.wgsl` .
```wgsl
//Define the structure of vertex data
struct VertexOutput {
    //The first UV
    @location(0) varying_UV0: vec2<f32>,
    //The second UV, generally used for shadow mapping, can also be used for other purposes
    @location(1) varying_UV1: vec2<f32>,
    //Coordinates in view space
    @location(2) varying_ViewPos: vec4<f32>,
    //Coordinates in NDC space
    @location(3) varying_Clip: vec4<f32>,
    //World coordinates
    @location(4) varying_WPos: vec4<f32>,
    //Normal direction in world space
    @location(5) varying_WNormal: vec3<f32>,
    //Vertex color
    @location(6) varying_Color: vec4<f32>,
    
    #if USE_SHADOWMAPING
        //To be explained
        @location(7) varying_ShadowPos: vec4<f32>,
    #endif

    #if USE_TANGENT
        //Tangent direction in world space
        @location(8) varying_Tangent: vec4<f32>,
    #endif
    //Position after projection transformation
    @builtin(position) member: vec4<f32>
};

var<private> ORI_VertexOut: VertexOutput ;
```
### ORI_VertexVarying
This is the input data interpolated by weights from the vertex shader to the fragment shader. By comparing it with `VertexOutput` , it is easy to see that they correspond one-to-one, except for the`face` attribute.
```wgsl
 struct FragmentVarying {
    @location(0) fragUV0: vec2<f32>,
    @location(1) fragUV1: vec2<f32>,
    @location(2) viewPosition: vec4<f32>,
    @location(3) fragPosition: vec4<f32>,
    @location(4) vWorldPos: vec4<f32>,
    @location(5) vWorldNormal: vec3<f32>,
    @location(6) vColor: vec4<f32>,

    #if USE_SHADOWMAPING
        @location(7) vShadowPos: vec4<f32>,
    #endif

    #if USE_TANGENT
        @location(8) TANGENT: vec4<f32>,
    #endif
    
    //Whether it is front-facing or back-facing
    @builtin(front_facing) face: bool,
    @builtin(position) fragCoord : vec4<f32>
};
    
var<private> ORI_VertexVarying: FragmentVarying;
```

### ORI_ShadingInput
The variable ORI_ShadingInput is customized for PBR material, which includes various parameters required for PBR shading. It is convenient to get them when using it later. 
After shading, users can append custom effects and extract the required data from this variable.
```wgsl
struct ShadingInput{
    //Base color, usually the default white
    BaseColor:vec4<f32>,
    //Roughness
    Roughness:f32,
    //Metallic
    Metallic:f32,
    //Specular coefficient
    Specular:f32,
    //Emissive color
    EmissiveColor:vec4<f32>,
    //Surface color
    SurfaceColor:vec4<f32>,
    //Normal vector
    Normal:vec3<f32>,
    //Tangent vector
    Tangent:vec4<f32>,
    //To be explained
    WorldPositionOffset:vec3<f32>,
    //Ambient occlusion coefficient
    AmbientOcclusion:f32,
    //To be explained
    PixelDepthOffset:f32,
    //Opacity
    Opacity:f32,
    //Opacity mask coefficient
    OpacityMask:f32,
    //Refraction coefficient
    Refraction:f32,
}
        
var<private> ORI_ShadingInput: ShadingInput;
```

### ORI_FragmentOutput
The ORI_FragmentOutput variable stores the result of fragment shading, and by default, only color data needs to be output in fragment shading.
If there are some post-effects that need to be processed, more content needs to be output to the `GBuffer` for easy calculation. 
Generally, the parameters that need to be involved in post-processing include world coordinates `worldPos`, normal vectors `worldNormal` , and some material information `material`(smoothness/roughness/whether to emit light, etc.).

```wgsl
struct FragmentOutput {
    //color
    @location(0) color: vec4<f32>,
    #if USE_WORLDPOS
        //world coordinates
        @location(1) worldPos: vec4<f32>,
    #endif
    #if USEGBUFFER
        //normal vector
        @location(2) worldNormal: vec4<f32>,
        //material data
        @location(3) material: vec4<f32>
    #endif
    
    var<private> ORI_FragmentOutput: FragmentOutput;
}
```

### materialUniform
The `materialUniform`is defined in the material and is associated with the specific material. The variable carries the variables required to draw the material. The data structure definitions of `materialUniform` for different materials should be different.
Taking `LitMaterial` as an example, we will briefly introduce some variables in `materialUniform`.

> The `LitMaterial` used the `materialUniform` structure, which is currently encapsulated into `PhysicMaterialUniform_frag`。
 ```wgsl
struct MaterialUniform{
    #if USE_BRDF
        //physical shading, material data description content
        #include "PhysicMaterialUniform_frag"
    #endif

    #if USE_ColorLit
    #endif

    #if USE_UnLit
    #endif
}
 
 ```

> Continue to check more content in `PhysicMaterialUniform_frag` .

```wgsl
//Structure defined in the PhysicMaterialUniform_frag file
//Defines the BRDF model shading, material ball parameters
struct MaterialUniform {
    //First UV offset data x:U direction offset y:V direction offset z:U direction scale w:V direction scale
    transformUV1:vec4<f32>,
    //Second UV x:U direction offset y:V direction offset z:U direction scale w:V direction scale
    transformUV2:vec4<f32>,
    //Base color (reference to other named tintColor)
    baseColor: vec4<f32>,
    //Emissive color
    emissiveColor: vec4<f32>,
    //f0 reflectivity
    materialF0: vec4<f32>,
    //Ambient light addition coefficient
    envIntensity: f32,
    //Normal vector scaling factor
    normalScale: f32,
    //Roughness
    roughness: f32,
    //Metallic
    metallic: f32,
    //Ambient occlusion intensity
    ao: f32,
    //Minimum roughness
    roughness_min: f32,
    //Maximum roughness
    roughness_max: f32,
    //Minimum metallicity
    metallic_min: f32,
    //Maximum metallicity
    metallic_max: f32,
    //Emissive intensity
    emissiveIntensity: f32,
    //Transparency cutoff threshold
    alphaCutoff: f32,
    //Index of refraction
    ior: f32,
    //Clearcoat layer color
    clearcoatColor: vec4<f32>,
    //Clearcoat layer weight
    clearcoatWeight: f32,
        //Clearcoat layer intensity
    clearcoatFactor: f32,
        //Clearcoat layer roughness
    clearcoatRoughnessFactor: f32,
};
```
## Common files
Just as in regular program writing, defining functions is important in shader scripts to enable function reuse and facilitate maintenance. The following are some commonly used functions:

- `LightingFunction_frag` : Functions required for lighting calculations.
- `NormalMap_frag` : Encapsulates various functions related to normal calculation.
- `IESProfiles_frag` : Functions for parsing light source description files.
- `BRDF_frag` : Functions required for BRDF model shading.
- `FastMath_shader` : Fast square root calculation and fast vector length calculation.



## Summary
As the engine version iterates, built-in functions will become more and more abundant. You can also extract commonly used functions into libraries for reuse.

 