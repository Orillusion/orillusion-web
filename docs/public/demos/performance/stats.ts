import { Engine3D, Scene3D, Object3D, Camera3D, View3D, LitMaterial, AtmosphericComponent, BoxGeometry, MeshRenderer, DirectLight, HoverCameraController, Color, ComponentBase } from '@orillusion/core'
import { Stats } from '@orillusion/stats'

class RotateScript extends ComponentBase {
    protected update() {
        this.object3D.rotationY += 1
    }
}

await Engine3D.init()
let scene3D = new Scene3D()
// add a default skybox
scene3D.addComponent(AtmosphericComponent)
// add the performance stats panel
scene3D.addComponent(Stats)

let cameraObj = new Object3D()
let camera = cameraObj.addComponent(Camera3D)
camera.perspective(60, Engine3D.aspect, 1, 5000.0)
cameraObj.addComponent(HoverCameraController)
scene3D.addChild(cameraObj)

let light: Object3D = new Object3D()
let component = light.addComponent(DirectLight)
component.lightColor = new Color(1.0, 1.0, 1.0, 1.0)
component.intensity = 1
scene3D.addChild(light)

const obj = new Object3D()
let mr = obj.addComponent(MeshRenderer)
mr.geometry = new BoxGeometry(5, 5, 5)
mr.material = new LitMaterial()

obj.addComponent(RotateScript)
scene3D.addChild(obj)

let view = new View3D()
view.scene = scene3D
view.camera = camera
Engine3D.startRenderView(view)
