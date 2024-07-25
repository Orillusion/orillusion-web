import { Engine3D, Vector3, Scene3D, Object3D, Camera3D, View3D, MeshRenderer, HoverCameraController, PlaneGeometry, Color, Vector4 } from '@orillusion/core';
import { VideoTexture, VideoMaterial } from '@orillusion/media-extention';
import * as dat from 'dat.gui';

await Engine3D.init();
let scene = new Scene3D();
let camera = new Object3D();
scene.addChild(camera);
let mainCamera = camera.addComponent(Camera3D);
mainCamera.perspective(60, Engine3D.aspect, 0.1, 10000.0);
let hc = camera.addComponent(HoverCameraController);
hc.setCamera(0, 0, 2);

// create a video texture
let videoTexture = new VideoTexture();
await videoTexture.load('https://cdn.orillusion.com/videos/bunny.mp4');
// create a video material
let mat = new VideoMaterial();
mat.baseMap = videoTexture;

// create a 2D plane to play the video
let planeObj = new Object3D();
let mr = planeObj.addComponent(MeshRenderer);
mr.geometry = new PlaneGeometry(2, (2 * 9) / 16, 1, 1, Vector3.Z_AXIS);
mr.material = mat;
scene.addChild(planeObj);

let view = new View3D();
view.scene = scene;
view.camera = mainCamera;
// start render
Engine3D.startRenderView(view);

let gui = new dat.GUI();
let f = gui.addFolder('Video');
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
