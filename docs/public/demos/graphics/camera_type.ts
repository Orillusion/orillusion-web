import { Engine3D, Vector3, Scene3D, Object3D, Camera3D, AtmosphericComponent, LitMaterial, BoxGeometry, MeshRenderer, HoverCameraController, View3D, CameraType } from '@orillusion/core'
import * as dat from 'dat.gui'

export default class CameraDemo {
    cameraObj: Object3D
    camera: Camera3D
    scene: Scene3D

    constructor() {}

    async run() {
        await Engine3D.init({
            canvasConfig: {
                alpha: true
            }
        })
        await this.initScene()
        await this.initCamera()
        await this.createBoxes()

        let sky = this.scene.addComponent(AtmosphericComponent)
        sky.sunY = 0.6
        sky.enable = false

        let view = new View3D()
        view.scene = this.scene
        view.camera = this.camera
        Engine3D.startRenderView(view)

        this.addGui()
    }

    async initScene() {
        this.scene = new Scene3D()
    }

    async initCamera() {
        this.cameraObj = new Object3D()
        this.camera = this.cameraObj.addComponent(Camera3D)
        this.camera.lookAt(new Vector3(0, 0, -350), new Vector3(0, 0, 0))
        let hc = this.cameraObj.addComponent(HoverCameraController)
        hc.setCamera(-90, 0, 500)
        this.scene.addChild(this.cameraObj)
        this.perspective()
    }

    async orthoOffCenter() {
        this.camera.orthoOffCenter(-window.innerWidth / 4, window.innerWidth / 4, -window.innerHeight / 4, window.innerHeight / 4, 1, 5000.0)
    }

    async perspective() {
        this.camera.perspective(60, Engine3D.aspect, 1, 10000.0)
    }

    async createBox(name: string) {
        let obj: Object3D = new Object3D()
        obj.name = name
        let mr: MeshRenderer = obj.addComponent(MeshRenderer)
        mr.geometry = new BoxGeometry(50, 50, 50)
        mr.material = new LitMaterial()
        return obj
    }

    async createBoxes() {
        for (let i = -1; i < 2; ++i) {
            let obj = await this.createBox('cube_' + i)

            obj.x = 0
            obj.y = i * -60
            obj.z = i * -60

            this.scene.addChild(obj)
        }
    }

    async addGui() {
        const GUIHelp = new dat.GUI()
        GUIHelp.addFolder('Camera Type')
        GUIHelp.add({ Perspective: () => this.perspective() }, 'Perspective')
        GUIHelp.add({ Orthographic: () => this.orthoOffCenter() }, 'Orthographic')

        window.addEventListener('resize', () => {
            if (this.camera.type === CameraType.ortho) this.orthoOffCenter()
        })
    }
}
new CameraDemo().run()
document.body.style.background = '#aaa'
