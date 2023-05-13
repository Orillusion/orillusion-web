import { Camera3D, DirectLight, Engine3D, AtmosphericComponent, View3D, HoverCameraController, KelvinUtil, MeshRenderer, Object3D, Scene3D, SphereGeometry, LambertMaterial, Color } from '@orillusion/core'

export class Sample_Materials {
    scene: Scene3D
    lightObj: Object3D

    constructor() {}

    async run() {
        await Engine3D.init()

        this.scene = new Scene3D()
        let cameraObj = new Object3D()
        cameraObj.name = `cameraObj`
        let mainCamera = cameraObj.addComponent(Camera3D)
        this.scene.addChild(cameraObj)
        mainCamera.perspective(60, Engine3D.aspect, 1, 5000.0)
        cameraObj.addComponent(HoverCameraController)

        await this.initScene()

        // add an Atmospheric sky enviroment
        this.scene.addComponent(AtmosphericComponent).sunY = 0.6
        // create a view with target scene and camera
        let view = new View3D()
        view.scene = this.scene
        view.camera = mainCamera
        // start render
        Engine3D.startRenderView(view)
    }

    async initScene() {
        {
            this.lightObj = new Object3D()
            this.lightObj.x = 0
            this.lightObj.y = 0
            this.lightObj.z = 0
            this.lightObj.rotationX = 0
            this.lightObj.rotationY = 0
            this.lightObj.rotationZ = 0
            let lc = this.lightObj.addComponent(DirectLight)
            lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355)
            lc.intensity = 1.7
            this.scene.addChild(this.lightObj)
        }

        {
            // Lambert
            let sphere = new Object3D()
            let mr = sphere.addComponent(MeshRenderer)
            mr.geometry = new SphereGeometry(2.5, 30, 30)
            let mat = new LambertMaterial()
            mat.baseColor = new Color(1, 1, 1, 1)
            mr.material = mat
            this.scene.addChild(sphere)
            sphere.localPosition.set(0, 0, 0)
        }
    }
}

new Sample_Materials().run()
