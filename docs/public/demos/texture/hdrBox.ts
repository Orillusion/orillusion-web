import { Camera3D, Engine3D, View3D, HoverCameraController, Object3D, Scene3D, SkyRenderer } from '@orillusion/core'

await Engine3D.init()

let scene = new Scene3D()
let sky = scene.addComponent(SkyRenderer)
let hdrTextureCube = await Engine3D.res.loadHDRTextureCube('https://cdn.orillusion.com/hdri/T_Panorama05_HDRI.HDR')
sky.map = hdrTextureCube

let camera = new Object3D()
scene.addChild(camera)

let mainCamera = camera.addComponent(Camera3D)
mainCamera.perspective(60, Engine3D.aspect, 1, 2000.0)
let ctrl = camera.addComponent(HoverCameraController)
ctrl.setCamera(180, 0, 10)

let view = new View3D()
view.scene = scene
view.camera = mainCamera
Engine3D.startRenderView(view)
