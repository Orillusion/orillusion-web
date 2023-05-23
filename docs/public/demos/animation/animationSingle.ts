import { Engine3D, Scene3D, Object3D, AtmosphericComponent, View3D, DirectLight, HoverCameraController, Color, CameraUtil, SkeletonAnimationComponent, HDRBloomPost, Vector3 } from '@orillusion/core'
import * as dat from 'dat.gui'

// Init Engine3D
await Engine3D.init()

// Create Scene3D
let scene = new Scene3D()

// add a camera object with Camera3D
let mainCamera = CameraUtil.createCamera3DObject(scene)
mainCamera.perspective(60, Engine3D.aspect, 0.1, 10000.0)
let hc = mainCamera.object3D.addComponent(HoverCameraController)
hc.setCamera(0, -15, 10, new Vector3(0, 1, 0))

// add a dir light
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
let soldierAnimation = soldier.getComponentsInChild(SkeletonAnimationComponent)[0]
soldierAnimation.play('Idle')

const GUIHelp = new dat.GUI()
GUIHelp.addFolder('Animation')
GUIHelp.add(soldierAnimation, 'timeScale', -6, 6, 0.01)
GUIHelp.add({ Idle: () => soldierAnimation.play('Idle') }, 'Idle')
GUIHelp.add({ Walk: () => soldierAnimation.play('Walk') }, 'Walk')
GUIHelp.add({ Run: () => soldierAnimation.play('Run') }, 'Run')

// set skybox
scene.addComponent(AtmosphericComponent).sunY = 0.6
// create a view with target scene and camera
let view = new View3D()
view.scene = scene
view.camera = mainCamera
// start render
Engine3D.startRenderView(view)
