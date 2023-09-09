import { Engine3D, Scene3D, CameraUtil, View3D, AtmosphericComponent, ComponentBase, Time, AxisObject, Object3DUtil, KelvinUtil, DirectLight, Object3D, HoverCameraController, MeshRenderer, LitMaterial, BoxGeometry, UnLit, UnLitMaterial, Interpolator } from '@orillusion/core'
import { Stats } from '@orillusion/stats'
import dat from 'dat.gui'

// sample use component
class Sample_AddRemove {
    view: View3D
    async run() {
        // init engine
        await Engine3D.init()
        // create new Scene
        let scene = new Scene3D()
        scene.addComponent(Stats)
        // add atmospheric sky
        let sky = scene.addComponent(AtmosphericComponent)
        sky.sunY = 0.6

        // create camera
        let cameraObj = new Object3D()
        let camera = cameraObj.addComponent(Camera3D)
        // adjust camera view
        camera.perspective(60, Engine3D.aspect, 0.1, 5000.0)
        // add camera node
        scene3D.addChild(cameraObj)
        // set camera controller
        let controller = cameraObj.addComponent(HoverCameraController)
        controller.setCamera(15, -30, 300)

        // add a basic direct light
        let lightObj = new Object3D()
        lightObj.rotationX = 45
        lightObj.rotationY = 60
        lightObj.rotationZ = 150
        let dirLight = lightObj.addComponent(DirectLight)
        dirLight.lightColor = KelvinUtil.color_temperature_to_rgb(5355)
        dirLight.intensity = 10
        scene.addChild(lightObj)
        sky.relativeTransform = dirLight.transform

        // create a view with target scene and camera
        this.view = new View3D()
        this.view.scene = scene
        this.view.camera = mainCamera

        // start render
        Engine3D.startRenderView(this.view)
        await this.test()
    }

    private async test() {
        let list: Object3D[] = []
        let player = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/anim/Minion_Lane_Super_Dawn/Minion_Lane_Super_Dawn.glb')
        let buttons = {
            add: async () => {
                /******** player1 *******/
                let clone = player.clone()
                clone.transform.x = Math.random() * 100 - 50
                clone.transform.y = Math.random() * 100 - 50
                clone.transform.z = Math.random() * 100 - 50
                clone.scaleX = clone.scaleY = clone.scaleZ = 20

                this.view.scene.addChild(clone)
                list.push(clone)
            },
            remove: async () => {
                let index = Math.floor(list.length * Math.random())
                let obj = list[index]
                if (obj) {
                    list.splice(index, 1)
                    this.view.scene.removeChild(obj)
                    obj.destroy(true)
                }
            }
        }
        // add first one
        await buttons.add()
        // gui
        const gui = new dat.GUI()
        let folder = gui.addFolder('Orillusion')
        folder.add(buttons, 'add')
        folder.add(buttons, 'remove')
        folder.open()
    }
}

new Sample_AddRemove().run()
