import { Engine3D, Scene3D, Object3D, Camera3D, AtmosphericComponent, View3D } from '@orillusion/core'
import * as dat from 'dat.gui'

// initializa engine
await Engine3D.init()
// create a Scene3D
let scene3D = new Scene3D()

// add an Atmospheric sky enviroment
let sky = scene3D.addComponent(AtmosphericComponent)
// set sun position
sky.sunX = 0.8
sky.sunY = 0.54
// set exposure
sky.exposure = 1

// create a camera
let cameraObj: Object3D = new Object3D()
let camera = cameraObj.addComponent(Camera3D)
camera.perspective(60, Engine3D.aspect, 1, 5000.0)
scene3D.addChild(cameraObj)

// create a view with target scene and camera
let view = new View3D()
view.scene = scene3D
view.camera = camera

// start render
Engine3D.startRenderView(view)

// debug GUI
const GUIHelp = new dat.GUI({ name: 'Orillusion' })
GUIHelp.addFolder('Atmospher')
GUIHelp.add(sky, 'sunX', 0, 1, 0.01)
GUIHelp.add(sky, 'sunY', 0, 1, 0.01)
GUIHelp.add(sky, 'eyePos', 1000, 2000, 10)
GUIHelp.add(sky, 'sunRadius', 100, 1000, 10)
GUIHelp.add(sky, 'sunRadiance', 0, 20, 1)
GUIHelp.add(sky, 'sunBrightness', 0, 1, 0.1)
