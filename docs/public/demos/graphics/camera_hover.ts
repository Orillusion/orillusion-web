import { Engine3D, Scene3D, Object3D, Camera3D, Vector3, HoverCameraController, AtmosphericComponent, LitMaterial, BoxGeometry, MeshRenderer, View3D, DirectLight } from '@orillusion/core'

await Engine3D.init()
let scene: Scene3D = new Scene3D()

let cameraObj = new Object3D()
let camera = cameraObj.addComponent(Camera3D)
camera.perspective(60, Engine3D.aspect, 0.1, 5000.0)

// add camera controller
let hoverController = cameraObj.addComponent(HoverCameraController)
hoverController.setCamera(15, -15, 15, new Vector3(0, 0, 0))
scene.addChild(cameraObj)

// add a base light
let lightObj = new Object3D()
lightObj.addComponent(DirectLight)
scene.addChild(lightObj)

const boxObj: Object3D = new Object3D()
boxObj.localPosition = new Vector3(0, 0, 0)

let mr: MeshRenderer = boxObj.addComponent(MeshRenderer)
mr.geometry = new BoxGeometry(5, 5, 5)
mr.material = new LitMaterial()

scene.addChild(boxObj)

// add an Atmospheric sky enviroment
scene.addComponent(AtmosphericComponent).sunY = 0.6
// create a view with target scene and camera
let view = new View3D()
view.scene = scene
view.camera = camera
// start render
Engine3D.startRenderView(view)
