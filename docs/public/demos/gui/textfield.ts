import { Engine3D, Scene3D, Object3D, Camera3D, View3D, ViewPanel, TextAnchor, UITextField, DirectLight, HoverCameraController, Color, AtmosphericComponent, WorldPanel, GPUCullMode, UIPanel } from '@orillusion/core'

// initializa engine
await Engine3D.init()
// create new scene as root node
let scene3D: Scene3D = new Scene3D()
scene3D.addComponent(AtmosphericComponent)
// create camera
let cameraObj: Object3D = new Object3D()
let camera = cameraObj.addComponent(Camera3D)
// adjust camera view
camera.perspective(60, Engine3D.aspect, 1, 5000.0)
// set camera controller
let controller = cameraObj.addComponent(HoverCameraController)
controller.setCamera(0, -20, 30)
// add camera node
scene3D.addChild(cameraObj)
// create light
let light: Object3D = new Object3D()
// add direct light component
let component: DirectLight = light.addComponent(DirectLight)
// adjust lighting
light.rotationX = 45
light.rotationY = 30
component.lightColor = new Color(1.0, 1.0, 1.0, 1.0)
component.intensity = 1
// add light object
scene3D.addChild(light)

let view = new View3D()
view.scene = scene3D
view.camera = camera
Engine3D.startRenderView(view)

// create UIpanel root
let panelRoot: Object3D = new Object3D()
let panel: UIPanel = panelRoot.addComponent(WorldPanel)
panel.guiMesh.uiRenderer.material.cullMode = GPUCullMode.none
// add to UIcanvas
let canvas = view.enableUICanvas()
canvas.addChild(panelRoot)

// load base font
await Engine3D.res.loadFont('https://cdn.orillusion.com/fnt/0.fnt')
// create text node
let textQuad = new Object3D()
textQuad.localScale.set(0.1, 0.1, 0.1)
panelRoot.addChild(textQuad)
// create textfield component
let text: UITextField = textQuad.addComponent(UITextField)
// set textfield size
text.uiTransform.resize(300, 60)
// set text value
text.text = 'Hello, Orillusion!'
text.fontSize = 32
text.alignment = TextAnchor.MiddleCenter
