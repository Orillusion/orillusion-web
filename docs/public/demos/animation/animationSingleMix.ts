import { Engine3D, Scene3D, Object3D, AtmosphericComponent, View3D, DirectLight, HoverCameraController, Color, CameraUtil, SkeletonAnimationComponent, Vector3 } from '@orillusion/core'
import * as dat from 'dat.gui'

// Init Engine3D
await Engine3D.init()

// Create Scene3D
let scene = new Scene3D()
scene.exposure = 0.3

// add a camera object with Camera3D
let mainCamera = CameraUtil.createCamera3DObject(scene)
mainCamera.perspective(60, Engine3D.aspect, 0.1, 10000.0)
let hc = mainCamera.object3D.addComponent(HoverCameraController)
hc.setCamera(0, -15, 10, new Vector3(0, 1, 0))

// set light
{
    let ligthObj = new Object3D()
    let dl = ligthObj.addComponent(DirectLight)
    dl.lightColor = new Color(1.0, 0.95, 0.84, 1.0)
    scene.addChild(ligthObj)
    dl.castShadow = true
    dl.intensity = 1.7
}

// load test model
let soldier = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/glb/Soldier.glb')
soldier.rotationY = -90
soldier.localScale.set(2, 2, 2)
scene.addChild(soldier)

// get animation controller
let animation = soldier.getComponentsInChild(SkeletonAnimationComponent)[0]
animation.play('Idle')

const GUIHelp = new dat.GUI()
let f = GUIHelp.addFolder('Animation-weight')
animation.getAnimationClipStates().forEach((clipState, _) => {
    f.add(clipState, 'weight', 0, 1.0, 0.01).name(clipState.name)
})
f.open()

f = GUIHelp.addFolder('Animation-play')
animation.getAnimationClipStates().forEach((clipState, _) => {
    f.add({ click: () => animation.play(clipState.name) }, 'click').name(clipState.name)
})
f.open()

f = GUIHelp.addFolder('Animation-crossFade')
animation.getAnimationClipStates().forEach((clipState, _) => {
    f.add({ click: () => animation.crossFade(clipState.name, 0.3) }, 'click').name('crossFade(' + clipState.name + ')')
})
f.open()
// set skybox
scene.addComponent(AtmosphericComponent).sunY = 0.6

// create a view with target scene and camera
let view = new View3D()
view.scene = scene
view.camera = mainCamera
// start render
Engine3D.startRenderView(view)
