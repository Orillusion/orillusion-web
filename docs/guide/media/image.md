# Image Material
This material inherits from the [UnLit](../graphics/materials.md#unlit-材质) material, which also does not calculate lighting and is a basic material that only renders based on the pixel color of the image. The difference is that it adds the setting of spatial clipping `(clip)` , which can make the display of images more flexible.

The following properties are supported:
| Property | Description |
| :---: | :---: |
| baseColor | Base color |
| uv_offsetX | x-axis displacement |
| uv_offsetY | y-axis displacement |
| uv_scaleX | x-axis scaling |
| uv_scaleY | y-axis scaling |
| clip_left | Left clipping |
| clip_top | Top clipping |
| clip_right | Right clipping |
| clip_bottom | Bottom clipping |

## Usage
```ts
import {ImageMaterial} from '@orillusion/media-extention'

// Create image material
let mat = new ImageMaterial();
// Load 2D texture
let texture = await Engine3D.res.loadTexture('path/to/image');
mat.baseMap = texture;
```

<Demo :height="300" src="/demos/media/image.ts"></Demo>

<<< @/public/demos/media/image.ts