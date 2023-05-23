import { BlendMode, Camera3D, CameraUtil, Color, DirectLight, Engine3D, GPUCullMode, HDRBloomPost, HoverCameraController, KelvinUtil, MeshRenderer, Object3D, PlaneGeometry, Scene3D, UnLitMaterial, webGPUContext, AtmosphericComponent, View3D, PostProcessingComponent } from '@orillusion/core'

export class Sample_BlendMode {
    lightObj: Object3D
    cameraObj: Camera3D
    scene: Scene3D
    hover: HoverCameraController

    constructor() {}

    async run() {
        await Engine3D.init({ canvasConfig: { alpha: false, zIndex: 0 } })

        Engine3D.setting.shadow.shadowBound = 5
        Engine3D.setting.shadow.shadowBias = -0.0012

        this.scene = new Scene3D()
        // add an Atmospheric sky enviroment
        this.scene.addComponent(AtmosphericComponent).sunY = 0.6

        let camera = CameraUtil.createCamera3DObject(this.scene)
        camera.perspective(60, webGPUContext.aspect, 0.01, 5000.0)

        this.hover = camera.object3D.addComponent(HoverCameraController)
        this.hover.setCamera(0, 0, 100)

        // create a view with target scene and camera
        let view = new View3D()
        view.scene = this.scene
        view.camera = camera
        // start render
        Engine3D.startRenderView(view)

        let postProcessing = this.scene.addComponent(PostProcessingComponent)
        let bloom = postProcessing.addPost(HDRBloomPost)
        bloom.blurX = 4
        bloom.blurY = 4
        bloom.strength = 5
        bloom.luminosityThreshold = 0.629

        await this.initScene()
    }

    async initScene() {
        /******** sky *******/
        {
            this.scene.exposure = 1
            this.scene.roughness = 0.56
        }
        /******** light *******/
        {
            this.lightObj = new Object3D()
            this.lightObj.rotationX = 57
            this.lightObj.rotationY = 347
            this.lightObj.rotationZ = 10
            let lc = this.lightObj.addComponent(DirectLight)
            lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355)
            lc.castShadow = true
            lc.intensity = 6
            this.scene.addChild(this.lightObj)
        }

        {
            let tex = await Engine3D.res.loadTexture('https://cdn.orillusion.com/images/T_Fx_Object_229.webp')
            let mat = new UnLitMaterial()
            mat.baseMap = tex
            mat.cullMode = GPUCullMode.none
            mat.blendMode = BlendMode.ALPHA

            let plane = new Object3D()
            plane.rotationX = 90
            let mr = plane.addComponent(MeshRenderer)
            mr.material = mat
            mr.geometry = new PlaneGeometry(100, 100, 1, 1)
            this.scene.addChild(plane)

            let select = document.createElement('select')
            select.innerHTML = `
            <option value="ALPHA">ALPHA</option>
            <option value="NORMAL">NORMAL</option>
            <option value="ABOVE">ABOVE</option>
            <option value="NONE">NONE</option>
            <option value="ADD">ADD</option>
            <option value="BELOW">BELOW</option>
            <option value="ERASE">ERASE</option>
            <option value="MUL">MUL</option>
            <option value="BELOW">SCREEN</option>
            <option value="DIVD">DIVD</option>
            <option value="SOFT_ADD">SOFT_ADD</option>
            `
            select.setAttribute('style', 'position:fixed;right:5px;top:5px')
            document.body.appendChild(select)

            select.addEventListener('change', (v) => {
                mat.blendMode = BlendMode[select.value]
            })
        }

        {
            let mat2 = new UnLitMaterial()
            mat2.doubleSide = true
            mat2.baseColor = new Color(0.6, 0.3, 0.3, 1)
            let plane2 = new Object3D()
            plane2.rotationX = 90
            let mr2 = plane2.addComponent(MeshRenderer)
            mr2.material = mat2
            mr2.geometry = new PlaneGeometry(100, 100, 1, 1)
            plane2.z = -10
            this.scene.addChild(plane2)
        }
    }
}

new Sample_BlendMode().run()
