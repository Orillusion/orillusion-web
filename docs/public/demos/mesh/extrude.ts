import { Engine3D, Scene3D, Object3D, Camera3D, LitMaterial, MeshRenderer, DirectLight, HoverCameraController, Color, Vector3, AtmosphericComponent, View3D, ExtrudeGeometry, BitmapTexture2D, GPUCullMode } from '@orillusion/core';

await Engine3D.init();
let scene3D: Scene3D = new Scene3D();
let cameraObj: Object3D = new Object3D();
let camera = cameraObj.addComponent(Camera3D);
camera.perspective(60, Engine3D.aspect, 1, 5000.0);
let controller = camera.object3D.addComponent(HoverCameraController);
controller.setCamera(0, 0, 40);
scene3D.addChild(cameraObj);

let light: Object3D = new Object3D();
let component: DirectLight = light.addComponent(DirectLight);
light.rotationX = 45;
light.rotationY = 30;
component.lightColor = new Color(1.0, 1.0, 1.0, 1.0);
component.intensity = 1;
scene3D.addChild(light);

// create a object
const obj: Object3D = new Object3D();
// add MeshRenderer to the object
let mr: MeshRenderer = obj.addComponent(MeshRenderer);

// build shape
let shape: Vector3[] = [],
    vertexCount = 8,
    shapeRadius = 1;
for (let i = 0; i < vertexCount; i++) {
    let angle = (Math.PI * 2 * i) / vertexCount;
    let point = new Vector3(Math.sin(angle), 0, Math.cos(angle)).multiplyScalar(shapeRadius);
    shape.push(point);
}
// build curve path
let curve: Vector3[] = [],
    sectionCount = 60,
    modelRadius = 4;
for (let i = 0; i < sectionCount; i++) {
    let angle = (Math.PI * 2 * i) / 20;
    modelRadius += (0.1 * i) / sectionCount;
    let offsetY = 0.6 - Math.sqrt(i / sectionCount);
    let point = new Vector3(Math.sin(angle), offsetY * 6, Math.cos(angle)).multiplyScalar(modelRadius);
    curve.push(point);
}

// build ExtrudeGeometry from shape & curve
mr.geometry = new ExtrudeGeometry().build(shape, true, curve, 0.2);
// set a pbr lit material
mr.material = new LitMaterial();
let texture = new BitmapTexture2D();
texture.addressModeU = 'repeat';
texture.addressModeV = 'repeat';
await texture.load('https://cdn.orillusion.com/textures/grid.webp');
mr.material.baseMap = texture;
mr.material.cullMode = GPUCullMode.none;

scene3D.addChild(obj);

// add an Atmospheric sky enviroment
scene3D.addComponent(AtmosphericComponent).sunY = 0.6;
// create a view with target scene and camera
let view = new View3D();
view.scene = scene3D;
view.camera = camera;
// start render
Engine3D.startRenderView(view);
