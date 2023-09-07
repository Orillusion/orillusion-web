import { Engine3D, Scene3D, CameraUtil, View3D, AtmosphericComponent, ComponentBase, Time, AxisObject, Object3DUtil, KelvinUtil, DirectLight, Object3D, HoverCameraController, MeshRenderer, LitMaterial, BoxGeometry, UnLit, UnLitMaterial, Interpolator } from '@orillusion/core'
import { Stats } from '@orillusion/stats'
import dat from 'dat.gui'

// sample use component
class Sample_AddRemove {
    view: View3D
    private Ori: dat.GUI | undefined
    async run() {
        // init engine
        await Engine3D.init()
        // create new Scene
        let scene = new Scene3D()
        scene.addComponent(Stats)
        // add atmospheric sky
        let sky = scene.addComponent(AtmosphericComponent)
        sky.sunY = 0.6

        // init camera3D
        let mainCamera = CameraUtil.createCamera3D(null, scene)
        mainCamera.perspective(60, Engine3D.aspect, 1, 2000.0)
        let hoverCameraController = mainCamera.object3D.addComponent(HoverCameraController)
        hoverCameraController.setCamera(15, -30, 300)

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
        // let player = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/anim/Minion_Lane_Super_Dawn/Minion_Lane_Super_Dawn.glb');
        let player = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/wukong/wukong.gltf')
        // gui
        const gui = new dat.GUI()
        gui.domElement.style.zIndex = '10'
        gui.domElement.parentElement.style.zIndex = '10'

        this.Ori = gui.addFolder('Orillusion')
        this.Ori.open()

        var button_add = {
            add: async () => {
                /******** player1 *******/
                let clone = player.clone()
                clone.transform.x = Math.random() * 100 - 50
                clone.transform.y = Math.random() * 100 - 50
                clone.transform.z = Math.random() * 100 - 50
                clone.transform.localScale.set(20, 20, 20)

                this.view.scene.addChild(clone)
                list.push(clone)
            }
        }

        var button_remove = {
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
        this.Ori.add(button_add, 'add')
        this.Ori.add(button_remove, 'remove')
    }
}

new Sample_AddRemove().run()
