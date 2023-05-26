import { BoxGeometry, View3D, CameraUtil, PostProcessingComponent, DirectLight, Engine3D, GlobalFog, AtmosphericComponent, LitMaterial, HoverCameraController, KelvinUtil, MeshRenderer, Object3D, PlaneGeometry, Scene3D, webGPUContext, Color, SphereGeometry, UnLitMaterial, GPUCullMode } from '@orillusion/core'
import * as dat from 'dat.gui'

export class Sample_fog {
    constructor() {}
    lightObj: Object3D
    scene: Scene3D

    async run() {
        Engine3D.setting.shadow.enable = false

        // init Engine3D
        await Engine3D.init({
            canvasConfig: {
                devicePixelRatio: 1
            }
        })

        // create Scene3D
        this.scene = new Scene3D()
        let sky = this.scene.addComponent(AtmosphericComponent)
        sky.enable = false
        
        // create a camera object with camera3D component
        let mainCamera = CameraUtil.createCamera3DObject(this.scene)

        mainCamera.perspective(60, webGPUContext.aspect, 1, 5000.0)
        let ctrl = mainCamera.object3D.addComponent(HoverCameraController)
        ctrl.setCamera(0, -20, 150)

        await this.initScene()

        let view = new View3D()
        view.scene = this.scene
        view.camera = mainCamera
        Engine3D.startRenderView(view)

        let postProcessing = this.scene.addComponent(PostProcessingComponent)
        let fogPost = postProcessing.addPost(GlobalFog)

        let GUIHelp = new dat.GUI()
        GUIHelp.addFolder('Fog')
        GUIHelp.add(fogPost, 'start', 0, 1000, 1)
        GUIHelp.add(fogPost, 'end', 0, 1000, 1)
        GUIHelp.add(fogPost, 'ins', 0, 1, 0.01)
        GUIHelp.addColor({ color: Object.values(fogPost.fogColor).map((v) => v * 255) }, 'color').onChange((v) => {
            fogPost.fogColor = new Color(1, 1, 1).copyFromArray(v)
        })
    }

    async initScene() {
        {
            this.lightObj = new Object3D()
            this.lightObj.rotationX = 80
            this.lightObj.rotationY = 0
            this.lightObj.rotationZ = 45
            let lc = this.lightObj.addComponent(DirectLight)
            lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355)
            lc.intensity = 10
            this.scene.addChild(this.lightObj)
        }

        {
            let mat = new LitMaterial()
            mat.baseMap = Engine3D.res.whiteTexture
            mat.normalMap = Engine3D.res.normalTexture
            mat.aoMap = Engine3D.res.whiteTexture
            mat.maskMap = Engine3D.res.createTexture(32, 32, 255.0, 255.0, 0.0, 1)
            mat.emissiveMap = Engine3D.res.blackTexture
            mat.roughness = 1.0
            mat.metallic = 0.0

            let floor = new Object3D()
            let mr = floor.addComponent(MeshRenderer)
            mr.geometry = new PlaneGeometry(2000, 2000)
            mr.material = mat
            this.scene.addChild(floor)
        }
        {
            // use a sphere to cover fog background
            let box = new Object3D()
            let mr = box.addComponent(MeshRenderer)
            mr.geometry = new SphereGeometry(2000, 4, 4)
            mr.material = new UnLitMaterial()
            mr.material.baseColor = new Color(84/255, 90/255, 239/255)
            mr.material.cullMode = GPUCullMode.front
            this.scene.addChild(box)
        }
        this.createBuilding()
    }

    private createBuilding() {
        let mat = new LitMaterial()
        mat.baseMap = Engine3D.res.grayTexture
        mat.normalMap = Engine3D.res.normalTexture
        mat.aoMap = Engine3D.res.whiteTexture
        mat.maskMap = Engine3D.res.createTexture(32, 32, 255.0, 10.0, 0.0, 1)
        mat.emissiveMap = Engine3D.res.blackTexture
        mat.roughness = 0.1
        mat.roughness_max = 0.1
        mat.metallic = 0.0

        const length = 20
        let cubeGeometry = new BoxGeometry(1, 1, 1)
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                let building: Object3D = new Object3D()
                let mr = building.addComponent(MeshRenderer)
                mr.material = mat
                mr.geometry = cubeGeometry
                building.localScale = building.localScale
                building.x = (i - 5) * (Math.random() * 0.5 + 0.5) * 70
                building.z = (j - 5) * (Math.random() * 0.5 + 0.5) * 70
                building.scaleX = 10 * (Math.random() * 0.5 + 0.5)
                building.scaleZ = 10 * (Math.random() * 0.5 + 0.5)
                building.scaleY = 50 * (Math.random() * 0.5 + 0.5)
                this.scene.addChild(building)
            }
        }
    }
}

new Sample_fog().run()
