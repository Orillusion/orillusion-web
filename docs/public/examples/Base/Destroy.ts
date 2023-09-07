import { Stats } from '@orillusion/stats'
import { Scene3D, AtmosphericComponent, Object3D, Camera3D, Engine3D, HoverCameraController, DirectLight, MeshRenderer, BoxGeometry, LitMaterial, View3D } from '@orillusion/core'
import dat from 'dat.gui'

// sample use component
class Sample_Destroy {
    private Ori: dat.GUI | undefined

    // initialize engine
    async run() {
        const gui = new dat.GUI()
        gui.domElement.style.zIndex = '10'
        gui.domElement.parentElement.style.zIndex = '10'

        this.Ori = gui.addFolder('Orillusion')
        this.Ori.open()

        await Engine3D.init()
        // create new scene as root node
        let scene3D: Scene3D = new Scene3D()
        scene3D.addComponent(Stats)
        // add an Atmospheric sky environment
        let sky = scene3D.addComponent(AtmosphericComponent)
        sky.sunY = 0.6
        // create camera
        let cameraObj: Object3D = new Object3D()
        let camera = cameraObj.addComponent(Camera3D)
        // adjust camera view
        camera.perspective(60, Engine3D.aspect, 1, 5000.0)
        // set camera controller
        let controller = cameraObj.addComponent(HoverCameraController)
        controller.setCamera(0, 0, 15)
        // add camera node
        scene3D.addChild(cameraObj)
        // create light
        let light: Object3D = new Object3D()
        // add direct light component
        let component: DirectLight = light.addComponent(DirectLight)
        sky.relativeTransform = component.transform
        // adjust lighting
        light.rotationX = 45
        light.rotationY = 30
        component.intensity = 1
        // add light object
        scene3D.addChild(light)
        {
            let list: Object3D[] = []

            let button_add = {
                add: () => {
                    for (let i = 0; i < 20; i++) {
                        // create new object
                        const obj: Object3D = new Object3D()
                        // add MeshRenderer
                        let mr: MeshRenderer = obj.addComponent(MeshRenderer)
                        // set geometry
                        mr.geometry = new BoxGeometry(1, 1, 1)
                        // set material
                        mr.material = new LitMaterial()
                        // set rotation
                        obj.rotationY = 45
                        obj.x = 2
                        // add object
                        scene3D.addChild(obj)
                        obj.x = Math.random() * 50 - 25
                        obj.y = Math.random() * 50 - 25
                        obj.z = Math.random() * 50 - 25
                        list.push(obj)
                    }
                }
            }
            let button_destory = {
                del: () => {
                    for (let i = 0; i < list.length; i++) {
                        const obj = list[i]
                        obj.destroy(true)
                    }
                }
            }
            this.Ori.add(button_add, 'add')
            this.Ori.add(button_destory, 'del')
        }
        // create a view with target scene and camera
        let view = new View3D()
        view.scene = scene3D
        view.camera = camera
        // start render
        Engine3D.startRenderView(view)
    }
}

new Sample_Destroy().run()
