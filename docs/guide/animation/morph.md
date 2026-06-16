# Morph Animation

Using the system [Time](/api/classes/Time) module, the engine computes the interpolation coefficient `interpolation` between the model vertex's base position `basePosition` and target position `morphTargetPosition`, continuously changing the object model's current vertex position `position` to achieve a continuous animation effect.

::: tip
Currently the engine only supports the model's built-in `Morph` animation states. You need to prepare the corresponding model states in advance in your modeling tool. A future version will add the ability to manually create custom `Morph` objects in code.
:::

## Basic Usage

```ts
import { Engine3D } from '@orillusion/core';
// Load a model that supports Morph states
let faceObject = await engine.res.loadGltf('gltfs/glb/face.glb');
scene.addChild(faceObject);
```
The engine automatically adds the [MeshRenderer](/api/classes/MeshRenderer) component to all nodes of the model for rendering display, and also adds the corresponding [rendererMask](/api/classes/MeshRenderer#renderermask) for all nodes that support `Morph` animation. We can find all nodes that match `MorphTarget` by traversing all `MeshRenderer` nodes:
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

## Controlling Interpolation
We can find the `morph` states corresponding to a node through the [morphTargetDictionary](/api/classes/GeometryBase#morphtargetdictionary) property of the node's `geometry`, and then adjust the corresponding interpolation coefficient through [setMorphInfluence](/api/classes/MeshRenderer#setmorphinfluence) to change the model state:
```ts
console.log(renderer.geometry.morphTargetDictionary)
// {mouth:0} - completely closed mouth state
renderer.setMorphInfluence('mouth', 1); // Set to the completely open mouth state
```

## Usage Notes
For `morph` animation, take facial expressions as an example, assuming that the parts involved in the facial animation are the `eyes` and `lips`. You need to prepare the corresponding model in advance, containing the `morph` animation states for the two parts `eye` and `lip`:

1. Define the model's base state: `eyes open` and `mouth closed`;
2. Define the completely closed-eye state: `anim_close_eye`;
3. Define the completely open-mouth state: `anim_open_lip`;
4. Map the eye `open/closed` state to the interpolation coefficient `eye_interpolation` - `0` corresponds to completely open eyes, `1` corresponds to completely closed eyes;   
similarly, map the lip `open/closed` state to the interpolation coefficient `lip_interpolation` - `0` corresponds to completely closed, `1` corresponds to completely open;
5. By adjusting the `interpolation` coefficient values of the two in code, you can blend the corresponding `eyes closed` and `mouth open` dynamic effects.

<Demo :height="500" src="/demos/animation/morphAnim.ts"></Demo>

<<< @/public/demos/animation/morphAnim.ts
