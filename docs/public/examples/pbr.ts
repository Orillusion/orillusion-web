import { Camera3D, OrbitController, DirectLight, Engine3D, View3D, KelvinUtil, Object3D, Scene3D, HDRBloomPost, GTAOPost, PostProcessingComponent, AtmosphericComponent } from '@orillusion/core'

export class Sample_PBRMaterial {
    lightObj: Object3D
    scene: Scene3D
    camera: Object3D
    obj: Object3D

    async run() {
        await Engine3D.init({
            canvasConfig: { alpha: true, zIndex: 11 },
            renderLoop: this.loop.bind(this)
        })

        Engine3D.setting.shadow.autoUpdate = true
        Engine3D.setting.shadow.updateFrameRate = 1
        Engine3D.setting.shadow.shadowBound = 50
        Engine3D.setting.shadow.shadowBias = 0.0001
        Engine3D.setting.render.postProcessing.bloom!.strength = 1.25

        this.scene = new Scene3D()
        this.camera = new Object3D()
        this.camera.y = 5
        this.camera.z = 20
        this.scene.addChild(this.camera)
        let mainCamera = this.camera.addComponent(Camera3D)
        mainCamera.perspective(60, Engine3D.aspect, 0.01, 5000.0)

        let orbit = this.camera.addComponent(OrbitController)
        orbit.minDistance = 10
        orbit.maxDistance = 30
        orbit.panFactor = 0.1
        orbit.rotateFactor = 0.3

        await this.initScene()

        let view = new View3D()
        view.scene = this.scene
        view.camera = mainCamera
        Engine3D.startRenderView(view)

        let postProcessing = this.scene.addComponent(PostProcessingComponent)
        postProcessing.addPost(GTAOPost)
        postProcessing.addPost(HDRBloomPost)
    }

    async initScene() {
        /******** sky *******/
        {
            let sky = this.scene.addComponent(AtmosphericComponent)
            sky.sunY = 0.7
            sky.enable = false
        }
        /******** light *******/
        {
            this.lightObj = new Object3D()
            this.lightObj.rotationX = 124
            this.lightObj.rotationY = 327
            this.lightObj.rotationZ = 10
            let lc = this.lightObj.addComponent(DirectLight)
            lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355)
            lc.castShadow = true
            lc.intensity = 40
            this.scene.addChild(this.lightObj)
        }

        {
            let obj = (this.obj = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/wukong/wukong.gltf'))
            obj.transform.scaleX = 10
            obj.transform.scaleY = 10
            obj.transform.scaleZ = 10
            obj.transform.y = -6
            this.scene.addChild(obj)
        }
    }

    loop() {
        this.obj.transform.rotationY += 0.2
    }
}
new Sample_PBRMaterial().run()

// for index page
let css = document.createElement('style')
css.innerText = `body.loading > canvas{width:560px !important;height:450px !important}`
document.head.appendChild(css)
