import { Engine3D, Scene3D, CameraUtil, HoverCameraController, Object3D, DirectLight, Color, SkeletonAnimationComponent, AtmosphericComponent, View3D } from '@orillusion/core'

// Init Engine3D
await Engine3D.init()

// Create Scene3D
let scene = new Scene3D()

// add a camera object with Camera3D
let mainCamera = CameraUtil.createCamera3DObject(scene)
mainCamera.perspective(60, Engine3D.aspect, 0.1, 10000.0)
mainCamera.object3D.addComponent(HoverCameraController)

// add a dir light
let ligthObj = new Object3D()
let dl = ligthObj.addComponent(DirectLight)
dl.lightColor = new Color(1.0, 0.95, 0.84, 1.0)
scene.addChild(ligthObj)
dl.castShadow = true
dl.intensity = 1.7

// load test model
let cesiumMan = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/glb/CesiumMan.glb')
let cesiumMan_skeleton = cesiumMan.getChildByName('Cesium_Man0') as Object3D
cesiumMan_skeleton.localScale.set(20, 20, 20)
cesiumMan_skeleton.localPosition.x = 30
cesiumMan_skeleton.rotationX = -90
scene.addChild(cesiumMan_skeleton)

// get animation controller
var cesiumManAnimator = cesiumMan_skeleton.getComponentsInChild(SkeletonAnimationComponent)[0]
cesiumManAnimator.play('anim_0', 1)

// clone
for (let i = 0; i < 100; i++) {
    let cesiumMan_clone = cesiumMan.clone()
    cesiumMan_clone.localPosition.set(-100 + Math.random() * 200, 0, -100 + Math.random() * 200)
    scene.addChild(cesiumMan_clone)
}

// set skybox
scene.addComponent(AtmosphericComponent).sunY = 0.6
// create a view with target scene and camera
let view = new View3D()
view.scene = scene
view.camera = mainCamera
// start render
Engine3D.startRenderView(view)
