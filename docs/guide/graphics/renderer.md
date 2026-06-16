# Renderer Component

## Renderer 
In the rendering process/pipeline, multiple different sub-renderers are defined. To perform a complete rendering of the entire scene, specific renderers need to be executed on demand at different stages to output results, which are finally composited into the display effect on the screen.
    1. Forward Renderer
Defines a series of rendering tasks, from rendering the entire scene to the Global Data Buffer at the beginning, to the specified sequence of post-processing Post effects to be used. The engine will execute these rendering tasks according to the user's configuration.
```ts
let renderJob = new ForwardRenderJob(this.scene);
renderJob.addPost(new SSAOPost());
renderJob.addPost(new GlobalFog());
renderJob.addPost(new BloomPost());
renderJob.addPost(new FXAAPost());
```
    2. Shadow Renderer
The Shadow renderer defines a channel for dynamically rendering shadow maps. By collecting lights and traversing the objects in the scene that need to be rendered, it draws one or more shadow maps. These shadow maps are reused in one or more places for lighting calculations.
    3. Probe Renderer
The Probe renderer is mainly used to collect descriptive information of the surrounding scene at a specified position and direction in the scene over a full 360-degree range.
By using pre-placed probes (Probe) and rendering the entire scene from 6 directions with a CubeCamera, it obtains the desired data. This provides necessary parameters for post-processing, such as providing global illumination information for lighting calculations.

    4. ClustingLighting Renderer
The ClustingLighting renderer is mainly used to collect lighting information in the scene. By reorganizing the data in a certain way, it can more efficiently obtain the lighting information of a shading point during final rendering, reducing the consumption of complex lighting calculations. Through the use of the ClustingLighting renderer, the engine can support a larger scale of lights simultaneously.

## RenderNode Render Unit
RenderNode is used to describe the objects in the scene that need to be drawn.
The definition of a render unit usually contains the following information:


| materials | List of material spheres | Describes the surface optical information of the rendered object, specifying how to use the shading model and provide parameters |
| --- | --- | --- |
| geometry | Geometry data | Specifies the geometric model of the render unit, which can be complex triangular faces or simple shapes such as a Plane |
| renderOrder | Render order | Specifies the rendering priority |
| castShadow | Whether to participate in shadow map drawing | True: Will be collected into the shadow map drawing process. False: Does not participate in shadow map drawing |
| castGI | Whether to participate in global illumination map generation | True: Will be collected into the global illumination information drawing process. False: Does not participate in global illumination information collection |
| rendererType | Specifies the render type | Marks this render unit to provide decisions for some special logic, such as specifying it as a SkyRenderer. |
