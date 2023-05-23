import { Engine3D, Scene3D, Object3D, Camera3D, AtmosphericComponent, LitMaterial, BoxGeometry, MeshRenderer, DirectLight, HoverCameraController, RGBEParser, Color, Vector3, View3D } from '@orillusion/core'
import * as dat from 'dat.gui'

// init Engine3D
await Engine3D.init()

// create a root Scene3D
let scene3D: Scene3D = new Scene3D()
// add an Atmospheric sky enviroment
let sky = scene3D.addComponent(AtmosphericComponent)
sky.sunY = 0.6
// create cmaera object
let cameraObj: Object3D = new Object3D()
// add Camera3D
let camera = cameraObj.addComponent(Camera3D)
// use a perspective view
camera.perspective(60, Engine3D.aspect, 1, 5000.0)
// set camera controller
let controller = camera.object3D.addComponent(HoverCameraController)
controller.setCamera(0, 0, 15)
// add camera to scene
scene3D.addChild(cameraObj)
// add a light object
let light: Object3D = new Object3D()
// add a dir light component
let component: DirectLight = light.addComponent(DirectLight)
// change light direction & color
light.rotationX = 45
light.rotationY = 30
component.lightColor = new Color(1.0, 1.0, 1.0, 1.0)
component.intensity = 10
// add light to scene
scene3D.addChild(light)
// create a object
const obj: Object3D = new Object3D()
// add MeshRenderer
let mr: MeshRenderer = obj.addComponent(MeshRenderer)
// set geometry
mr.geometry = new BoxGeometry(5, 5, 5)
// set material
mr.material = new LitMaterial()
// set poisiton and rotation
obj.localPosition = new Vector3(0, 0, 0)
obj.localRotation = new Vector3(0, 45, 0)
// add to scene
scene3D.addChild(obj)

// create a view with target scene and camera
let view = new View3D()
view.scene = scene3D
view.camera = camera
// start render
Engine3D.startRenderView(view)

const GUIHelp = new dat.GUI()
let f = GUIHelp.addFolder('Box Transform')
f.add(obj.transform, 'enable')
f.add(obj.transform, 'x', -10.0, 10.0, 0.01)
f.add(obj.transform, 'y', -10.0, 10.0, 0.01)
f.add(obj.transform, 'z', -10.0, 10.0, 0.01)
f.add(obj.transform, 'rotationX', 0.0, 360.0, 0.01)
f.add(obj.transform, 'rotationY', 0.0, 360.0, 0.01)
f.add(obj.transform, 'rotationZ', 0.0, 360.0, 0.01)
f.add(obj.transform, 'scaleX', 0.0, 2.0, 0.01)
f.add(obj.transform, 'scaleY', 0.0, 2.0, 0.01)
f.add(obj.transform, 'scaleZ', 0.0, 2.0, 0.01)
f.open()
