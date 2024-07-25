import { Engine3D, Vector3, Scene3D, Object3D, Camera3D, MeshRenderer, HoverCameraController, PlaneGeometry, View3D, Color, Vector4 } from '@orillusion/core';
import { ImageMaterial } from '@orillusion/media-extention';
import * as dat from 'dat.gui';

await Engine3D.init();
let scene = new Scene3D();
let camera = new Object3D();
scene.addChild(camera);
let mainCamera = camera.addComponent(Camera3D);
mainCamera.perspective(60, Engine3D.aspect, 0.1, 10000.0);
let hc = camera.addComponent(HoverCameraController);
hc.setCamera(0, 0, 2);

// create a 2D image texture
let texture = await Engine3D.res.loadTexture('https://cdn.orillusion.com/gltfs/cube/material_02.png');
// create a image material
let mat = new ImageMaterial();
mat.baseMap = texture;

let gui = new dat.GUI();
let f = gui.addFolder('Image');
f.addColor({ baseColor: [255, 255, 255] }, 'baseColor').onChange((v) => {
    mat.baseColor = new Color(v[0] / 255, v[1] / 255, v[2] / 255, 1);
});
let clip = new Vector4(0, 0, 0, 0);
f.add(clip, 'x', 0, 1, 0.01)
    .name('left')
    .onChange(() => (mat.rectClip = clip));
f.add(clip, 'y', 0, 1, 0.01)
    .name('top')
    .onChange(() => (mat.rectClip = clip));
f.add(clip, 'z', 0, 1, 0.01)
    .name('right')
    .onChange(() => (mat.rectClip = clip));
f.add(clip, 'w', 0, 1, 0.01)
    .name('bottom')
    .onChange(() => (mat.rectClip = clip));
f.open();

// create a 2D plane to show the image
let planeObj = new Object3D();
let mr = planeObj.addComponent(MeshRenderer);
mr.geometry = new PlaneGeometry(2, 2, 10, 10, Vector3.Z_AXIS);
mr.material = mat;
scene.addChild(planeObj);

let view = new View3D();
view.scene = scene;
view.camera = mainCamera;
// start render
Engine3D.startRenderView(view);
