# Morph Animation

Using the system's [Time](/api/classes/Time) module to calculate the interpolation coefficient `interpolation` of the model vertex's basic position `basePosition` and target position `morphTargetPosition`, continuously change the object model's point front vertex position `position` to achieve a continuous animation effect.

> Currently, the engine only supports the built-in `Morph` animation state of the model, which needs to be prepared in advance in the modeling tool to create the corresponding model state. The subsequent version will add the code to manually create a custom `Morph` object.

## Basic Usage

```ts
import { Engine3D } from '@orillusion/core';
// Load model with Morph state
let faceObject = await Engine3D.res.loadGltf('gltfs/glb/face.glb');
scene.addChild(faceObject);
```
The engine will automatically add the [MeshRenderer](/api/classes/MeshRenderer) component to all nodes of the model for rendering display, and will also add the corresponding [rendererMask](/api/classes/MeshRenderer#renderermask) for all nodes that support `Morph` animation. We can find all nodes that meet the `MorphTarget` by traversing all `MeshRenderer` nodes:
```ts
function findMorphRenderers(obj: Object3D): MeshRenderer[] {
    let rendererList: MeshRenderer[] = [];
    // Traverse all nodes
    obj.forChild((child) => {
        let mr = child.getComponent(MeshRenderer)
        // Find nodes with both MeshRenderer and MorphTarget
        if(mr && mr.hasMask(RendererMask.MorphTarget))
            rendererList.push(mr)   
    })
    return rendererList;
}

let MorphRenders = findMorphRenderers(faceObject)
```

## Control interpolation
We can find the `morph` state corresponding to the node through the [morphTargetDictionary](/api/classes/GeometryBase#morphtargetdictionary) property of the node `geometry`, and then adjust the corresponding interpolation coefficient through [setMorphInfluence](/api/classes/MeshRenderer#setmorphinfluence) to change the model state:
```ts
console.log(renderer.geometry.morphTargetDictionary)
// {mouth:0} - Completely closed mouth state
renderer.setMorphInfluence('mouth', 1); // Set to 1, completely open the mouth
```

## Instructions
`morph` animation, for example, the face expression, assuming that the part of the face animation is `eyes` and `lips`. You need to make the corresponding model in advance, including `eye` and `lip` two parts of the `morph` animation state:

1. Define the basic state of the model: `open eyes` and `close mouth`;
2. Define the completely closed eye state: `anim_close_eye`;
3. Define the completely open mouth state: `anim_open_lip`;
4. Corresponding to the interpolation coefficient `eye_interpolation` of the `open / close` state of the eye - `0` corresponds to the completely open eye, `1` corresponds to the completely closed eye;
Similarly, the difference coefficient `lip_interpolation` of the `open / close` state of the mouth - `0` corresponds to the completely closed, `1` corresponds to the completely open;
5. By adjusting the two `interpolation` coefficient values in the code, you can mix the corresponding `closed eye` and `open mouth` dynamic effects.

<Demo :height="500" src="/demos/animation/morphAnim.ts"></Demo>

<<< @/public/demos/animation/morphAnim.ts