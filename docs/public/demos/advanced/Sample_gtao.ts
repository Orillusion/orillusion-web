import { DirectLight, Engine3D, PostProcessingComponent, View3D, LitMaterial, HoverCameraController, KelvinUtil, MeshRenderer, Object3D, PlaneGeometry, Scene3D, SphereGeometry, Time, CameraUtil, webGPUContext, AtmosphericComponent, GTAOPost, Vector3, TAAPost, SSRPost } from '@orillusion/core'
import * as dat from 'dat.gui'

export class Sample_GTAO {
    lightObj: Object3D
    scene: Scene3D
    constructor() {}

    async run() {
        Engine3D.setting.shadow.enable = true
        Engine3D.setting.shadow.shadowBound = 40
        Engine3D.setting.shadow.shadowBias = 0.0001
        Engine3D.setting.shadow.autoUpdate = true
        Engine3D.setting.shadow.updateFrameRate = 1
        await Engine3D.init({
            canvasConfig: {
                devicePixelRatio: 1
            },
            renderLoop: () => this.loop()
        })

        this.scene = new Scene3D()
        this.scene.addComponent(AtmosphericComponent).sunY = 0.6

        let mainCamera = CameraUtil.createCamera3DObject(this.scene, 'camera')
        mainCamera.perspective(60, webGPUContext.aspect, 1, 5000.0)
        let ctrl = mainCamera.object3D.addComponent(HoverCameraController)
        ctrl.setCamera(100, -15, 40)
        await this.initScene(this.scene)

        let view = new View3D()
        view.scene = this.scene
        view.camera = mainCamera
        Engine3D.startRenderView(view)

        let postProcessing = this.scene.addComponent(PostProcessingComponent)
        postProcessing.addPost(GTAOPost)

        // load a test gltf model
        let data = await Engine3D.res.loadGltf('https://cdn.orillusion.com/PBR/Duck/Duck.gltf')
        this.scene.addChild(data)
        data.scaleX = data.scaleY = data.scaleZ = 0.05
    }

    async initScene(scene: Scene3D) {
        /******** light *******/
        {
            this.lightObj = new Object3D()
            this.lightObj.rotationX = 15
            this.lightObj.rotationY = 110
            this.lightObj.rotationZ = 0
            let lc = this.lightObj.addComponent(DirectLight)
            lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355)
            lc.castShadow = true
            lc.intensity = 10
            lc.needUpdateShadow = true
            scene.addChild(this.lightObj)
        }
        this.createPlane(scene)
        return true
    }

    private sphere: Object3D

    private createPlane(scene: Scene3D) {
        let mat = new LitMaterial()
        mat.baseMap = Engine3D.res.whiteTexture
        mat.normalMap = Engine3D.res.normalTexture
        mat.aoMap = Engine3D.res.whiteTexture
        mat.maskMap = Engine3D.res.createTexture(32, 32, 255.0, 10.0, 0.0, 1)
        mat.emissiveMap = Engine3D.res.blackTexture
        mat.roughness = 0.1
        mat.roughness_max = 0.1
        mat.metallic = 0.0

        {
            let debugGeo = new PlaneGeometry(1000, 1000)
            let obj: Object3D = new Object3D()
            let mr = obj.addComponent(MeshRenderer)
            mr.material = mat
            mr.geometry = debugGeo
            scene.addChild(obj)
        }

        {
            let sphereGeometry = new SphereGeometry(5, 50, 50)
            let obj: Object3D = new Object3D()
            let mr = obj.addComponent(MeshRenderer)
            mr.material = mat
            mr.geometry = sphereGeometry
            obj.x = 10
            obj.y = 2
            scene.addChild(obj)
            this.sphere = obj

            const GUIHelp = new dat.GUI()
            GUIHelp.add(this, 'runBall')
            GUIHelp.add(this.sphere, 'y', -10, 10, 0.1)
        }
    }

    runBall: boolean = true
    private loop(): void {
        if (this.sphere && this.runBall) {
            this.sphere.x = Math.sin(Time.time * 0.001) * 10
            this.sphere.z = Math.cos(Time.time * 0.001) * 10
        }
    }
}

new Sample_GTAO().run()
