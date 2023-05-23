import { BoxGeometry, Camera3D, Engine3D, View3D, LitMaterial, HoverCameraController, BitmapTexture2D, MeshRenderer, Object3D, Scene3D, SphereGeometry, PointLight, Vector3, webGPUContext, IESProfiles, AtmosphericComponent } from '@orillusion/core'

export class Sample_LightIES {
    scene: Scene3D
    hoverCameraController: HoverCameraController
    lightObj: any
    constructor() {}

    async run() {
        Engine3D.setting.shadow.pointShadowBias = 0.0001
        Engine3D.setting.shadow.type = `HARD`

        await Engine3D.init({
            canvasConfig: { devicePixelRatio: 1 }
        })

        this.scene = new Scene3D()
        let cameraObj = new Object3D()
        let mainCamera = cameraObj.addComponent(Camera3D)
        mainCamera.perspective(37, webGPUContext.aspect, 1, 5000.0)

        this.hoverCameraController = mainCamera.object3D.addComponent(HoverCameraController)
        this.scene.addChild(cameraObj)

        //set camera data
        this.hoverCameraController.setCamera(0, -45, 200)
        await this.initScene(this.scene)

        // add an Atmospheric sky enviroment
        this.scene.addComponent(AtmosphericComponent).sunY = 0.6
        // create a view with target scene and camera
        let view = new View3D()
        view.scene = this.scene
        view.camera = mainCamera
        // start render
        Engine3D.startRenderView(view)
    }

    async initScene(scene: Scene3D) {
        // load ies texture
        let iesTexture = await Engine3D.res.loadTexture('https://cdn.orillusion.com/ies/ies_2.png')
        var iesPofiles = new IESProfiles()
        iesPofiles.IESTexture = iesTexture

        {
            let po = new Object3D()
            let pl = po.addComponent(PointLight)
            pl.intensity = 10
            pl.range = 100
            pl.castShadow = true
            pl.realTimeShadow = true
            pl.iesProfiles = iesPofiles
            po.x = 0
            po.y = 22
            po.z = 15
            this.scene.addChild(po)
        }

        let ball: Object3D
        {
            let mat = new LitMaterial()
            mat.baseMap = Engine3D.res.whiteTexture
            mat.normalMap = Engine3D.res.normalTexture
            mat.aoMap = Engine3D.res.whiteTexture
            mat.maskMap = Engine3D.res.createTexture(32, 32, 255.0, 255.0, 0.0, 1)
            mat.emissiveMap = Engine3D.res.blackTexture
            mat.roughness = 0.5
            mat.metallic = 0.2

            ball = new Object3D()
            let mr = ball.addComponent(MeshRenderer)
            mr.geometry = new SphereGeometry(6, 20, 20)
            mr.material = mat
            this.scene.addChild(ball)
            ball.transform.x = -17
            ball.transform.y = 10
            ball.transform.z = 10

            //wall
            let back_wall = new Object3D()
            let mr2 = back_wall.addComponent(MeshRenderer)
            mr2.geometry = new BoxGeometry(500, 500, 10)
            mr2.material = mat
            this.scene.addChild(back_wall)
        }
    }
}

new Sample_LightIES().run()
