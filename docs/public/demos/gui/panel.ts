import { Engine3D, Scene3D, Object3D, Camera3D, View3D, ViewPanel, TextAnchor, UITextField, HoverCameraController, AtmosphericComponent, BitmapTexture2D, UIImage, makeAloneSprite, WorldPanel, GPUCullMode, UIPanel } from '@orillusion/core'
import * as dat from 'dat.gui'

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
controller.setCamera(0, -20, 100)
// add camera node
scene3D.addChild(cameraObj)

let view = new View3D()
view.scene = scene3D
view.camera = camera
Engine3D.startRenderView(view)

// create a UICanvas
let canvas = view.enableUICanvas()
// create view sapce panel
let viewPanel: Object3D = new Object3D()
viewPanel.addComponent(ViewPanel)
// add to UICanvas
canvas.addChild(viewPanel)

// create world sapce panel
let worldPanel: Object3D = new Object3D()
worldPanel.localScale.set(0.15, 0.15, 0.15)
let panel: UIPanel = worldPanel.addComponent(WorldPanel)
// render double side
panel.guiMesh.uiRenderer.material.cullMode = GPUCullMode.none
// add to UICanvas
canvas.addChild(worldPanel)

// load a BitmapTexture2D
let bitmapTexture2D = new BitmapTexture2D()
bitmapTexture2D.flipY = true
await bitmapTexture2D.load('https://cdn.orillusion.com/images/webgpu.png')

// create image node
let imageQuad = new Object3D()
viewPanel.addChild(imageQuad)
// create UIImage component
let image: UIImage = imageQuad.addComponent(UIImage)
// set image size
image.uiTransform.resize(320, 320)
// set image source
image.sprite = makeAloneSprite('webgpu', bitmapTexture2D)

let GUIHelp = new dat.GUI()
let f = GUIHelp.addFolder('GUI Space')
let params = {
    'ViewSpace' : ()=>{
        viewPanel.addChild(imageQuad)
    },
    'WorldSpace': ()=>{
        worldPanel.addChild(imageQuad)
    }
}
f.add(params, 'ViewSpace')
f.add(params, 'WorldSpace')
f.open()
