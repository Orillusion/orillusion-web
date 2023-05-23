import { BoxGeometry, Camera3D, Engine3D, AtmosphericComponent, LitMaterial, HoverCameraController, MeshRenderer, Object3D, Scene3D, DirectLight, Vector3, webGPUContext, View3D } from '@orillusion/core'
import * as dat from 'dat.gui'

export class Sample_Light {
    scene: Scene3D
    hoverCameraController: HoverCameraController
    lightObj: any
    constructor() {}

    async run() {
        await Engine3D.init({
            canvasConfig: { devicePixelRatio: 1 }
        })
        this.scene = new Scene3D()
        let cameraObj = new Object3D()
        let mainCamera = cameraObj.addComponent(Camera3D)
        mainCamera.perspective(37, webGPUContext.aspect, 1, 10000.0)

        this.hoverCameraController = mainCamera.object3D.addComponent(HoverCameraController)
        this.scene.addChild(cameraObj)

        //set camera data
        this.hoverCameraController.setCamera(0, -45, 2000)
        this.initScene(this.scene)

        // add an Atmospheric sky enviroment
        this.scene.addComponent(AtmosphericComponent).sunY = 0.6
        // create a view with target scene and camera
        let view = new View3D()
        view.scene = this.scene
        view.camera = mainCamera
        // start render
        Engine3D.startRenderView(view)
    }

    initScene(scene: Scene3D) {
        {
            let dirLight = new Object3D()
            dirLight.rotationX = 30
            dirLight.rotationZ = 30
            let light = dirLight.addComponent(DirectLight)
            light.intensity = 20
            light.lightColor.r = 255 / 255
            light.lightColor.g = 157 / 255
            light.lightColor.b = 5 / 255
            scene.addChild(dirLight)

            let GUIHelp = new dat.GUI()
            GUIHelp.addFolder('Direct Light')
            GUIHelp.add(dirLight, 'rotationX', -180, 180, 1)
            GUIHelp.add(dirLight, 'rotationY', -180, 180, 1)
            GUIHelp.add(dirLight, 'rotationZ', -180, 180, 1)
            GUIHelp.addColor({ color: Object.values(light.lightColor).map((v) => v * 255) }, 'color').onChange((v) => {
                light.lightColor.copyFromArray(v)
            })
            GUIHelp.add(light, 'intensity', 0, 100, 1)
        }

        let mat = new LitMaterial()
        mat.baseMap = Engine3D.res.grayTexture

        let floor = new Object3D()
        let mr = floor.addComponent(MeshRenderer)
        mr.geometry = new BoxGeometry(2000, 1, 2000)
        mr.material = mat
        this.scene.addChild(floor)

        let box = new BoxGeometry(1, 1, 1)

        let wall_w = new Object3D()
        wall_w.localScale = new Vector3(500, 100, 10)
        wall_w.localPosition = new Vector3(0, 50, 0)
        let mrw = wall_w.addComponent(MeshRenderer)
        mrw.geometry = box
        mrw.material = mat
        this.scene.addChild(wall_w)

        let wall_a = new Object3D()
        wall_a.localScale = new Vector3(10, 100, 500)
        wall_a.localPosition = new Vector3(250, 50, 0)
        let mra = wall_a.addComponent(MeshRenderer)
        mra.geometry = box
        mra.material = mat
        this.scene.addChild(wall_a)

        let wall_d = new Object3D()
        wall_d.localScale = new Vector3(10, 100, 500)
        wall_d.localPosition = new Vector3(-250, 50, 0)
        let mrd = wall_d.addComponent(MeshRenderer)
        mrd.geometry = box
        mrd.material = mat
        this.scene.addChild(wall_d)
    }
}

new Sample_Light().run()
