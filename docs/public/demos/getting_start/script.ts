import { Engine3D, Scene3D, Object3D, Camera3D, LitMaterial, BoxGeometry, MeshRenderer, DirectLight, HoverCameraController, Color, ComponentBase, View3D, AtmosphericComponent } from '@orillusion/core'

class RotateScript extends ComponentBase {
    public onUpdate() {
        // update lifecycle codes
        this.object3D.rotationY += 1
    }
}

// initializa engine
await Engine3D.init()
// create new scene as root node
let scene3D = new Scene3D()
// add an Atmospheric sky enviroment
let sky = scene3D.addComponent(AtmosphericComponent)
sky.sunY = 0.6
// create camera
let cameraObj = new Object3D()
let camera = cameraObj.addComponent(Camera3D)
// adjust camera view
camera.perspective(60, Engine3D.aspect, 1, 5000.0)
// set camera controller
cameraObj.addComponent(HoverCameraController)
// add camera node
scene3D.addChild(cameraObj)

// create light
let light: Object3D = new Object3D()
// add direct light component
let component = light.addComponent(DirectLight)
// adjust lighting
component.lightColor = new Color(1.0, 1.0, 1.0, 1.0)
component.intensity = 1
// add light object
scene3D.addChild(light)

// create new object
const obj = new Object3D()
// add MeshRenderer
let mr = obj.addComponent(MeshRenderer)
// set geometry
mr.geometry = new BoxGeometry(5, 5, 5)
// set material
mr.material = new LitMaterial()
// add script
obj.addComponent(RotateScript)
// add object
scene3D.addChild(obj)

// create a view with target scene and camera
let view = new View3D()
view.scene = scene3D
view.camera = camera
// start render
Engine3D.startRenderView(view)
