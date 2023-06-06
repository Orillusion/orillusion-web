import { Scene3D, PropertyAnimation, Engine3D, Object3D, Object3DUtil, PropertyAnimClip, WrapMode, WorldPanel, BillboardType, TextAnchor, UIImage, UIShadow, UITextField, Vector3, Color, Time, AtmosphericComponent, Camera3D, GPUCullMode, HoverCameraController, UIPanel, View3D } from "@orillusion/core";
import * as dat from 'dat.gui'

class Sample_POI {
    scene: Scene3D
    panel: WorldPanel
    position: Vector3
    gui: dat.GUI

    async run() {
        Engine3D.setting.shadow.autoUpdate = true
        Engine3D.setting.shadow.updateFrameRate = 1
        Engine3D.setting.shadow.shadowBound = 20
        Engine3D.setting.shadow.shadowBias = 0.0001

        // initializa engine
        await Engine3D.init({ renderLoop: () => this.loop() });
        // create new scene as root node
        let scene3D: Scene3D = new Scene3D()
        scene3D.addComponent(AtmosphericComponent)
        // create camera
        let cameraObj: Object3D = new Object3D()
        let camera = cameraObj.addComponent(Camera3D)
        // adjust camera view
        camera.perspective(60, Engine3D.aspect, 1, 5000.0)
        // set camera controller
        let controller = cameraObj.addComponent(HoverCameraController)
        controller.setCamera(0, -20, 15)
        // add camera node
        scene3D.addChild(cameraObj)

        let view = new View3D()
        view.scene = scene3D
        view.camera = camera
        Engine3D.startRenderView(view)

        this.scene = scene3D

        await this.initScene()
        this.gui = new dat.GUI()
        this.initDuckPOI()
        this.initScenePOI()
    }

    private modelContainer: Object3D

    async initScene() {
        // floor
        let floor: Object3D = Object3DUtil.GetSingleCube(16, 0.1, 16, 1, 1, 1)
        this.scene.addChild(floor)
        await Engine3D.res.loadFont('https://cdn.orillusion.com/fnt/0.fnt')

        // load external model
        let model = (await Engine3D.res.loadGltf('https://cdn.orillusion.com/PBR/Duck/Duck.gltf')) as Object3D
        model.rotationY = 180
        this.modelContainer = new Object3D()
        this.modelContainer.addChild(model)
        this.scene.addChild(this.modelContainer)
        model.scaleX = model.scaleY = model.scaleZ = 0.01
        await this.initPropertyAnim(this.modelContainer)

        let chair = (await Engine3D.res.loadGltf('https://cdn.orillusion.com/PBR/SheenChair/SheenChair.gltf')) as Object3D
        chair.scaleX = chair.scaleY = chair.scaleZ = 8
        this.scene.addChild(chair)
    }

    private async initPropertyAnim(owner: Object3D) {
        // add PropertyAnimation
        let animation = owner.addComponent(PropertyAnimation)

        //load a animation clip
        let json: any = await Engine3D.res.loadJSON('https://cdn.orillusion.com/json/anim_0.json')
        let animClip = new PropertyAnimClip()
        animClip.parse(json)
        animClip.wrapMode = WrapMode.Loop
        animation.defaultClip = animClip.name
        animation.autoPlay = true

        // register clip to animation
        animation.appendClip(animClip)
        animation.play(animation.defaultClip)
        return animation
    }

    private initDuckPOI() {
        let canvas = this.scene.view.enableUICanvas()
        //panel
        this.panel = new Object3D().addComponent(WorldPanel)
        this.panel.billboard = BillboardType.BillboardXYZ
        //add to canvas
        canvas.addChild(this.panel.object3D)
        this.panel.object3D.localScale = new Vector3(0.1, 0.1, 0.1)

        //poi
        let panelRoot = new Object3D()

        this.panel.object3D.addChild(panelRoot)

        let image = panelRoot.addComponent(UIImage)
        image.uiTransform.resize(32, 6)
        image.uiTransform.setXY(20, 20)

        image.color = new Color(1, 1, 1, 0.5)
        image.isShadowless = true
        let text = panelRoot.addComponent(UITextField)

        text.text = 'Happy Duck'
        text.fontSize = 4
        text.color = new Color(0, 0, 0, 1)
        text.alignment = TextAnchor.MiddleCenter
        this.renderUIPanel(this.panel, 'Duck Panel')
    }

    private sceneText: UITextField
    private initScenePOI() {
        let canvas = this.scene.view.enableUICanvas()
        //panel
        let panel = new Object3D().addComponent(WorldPanel)
        panel.cullMode = 'none'
        //add to canvas
        canvas.addChild(panel.object3D)
        panel.object3D.localScale = new Vector3(0.1, 0.1, 0.1)

        //poi
        let panelRoot = new Object3D()
        panel.transform.rotationX = -30
        panel.transform.y = 3.1
        panel.transform.x = 1

        panel.object3D.addChild(panelRoot)
        let text = panelRoot.addComponent(UITextField)
        text.uiTransform.resize(80, 16)
        text.text = this.title
        text.fontSize = 10
        text.color = new Color(0.5, 1.0, 0.5, 1.0)
        text.alignment = TextAnchor.MiddleLeft

        panelRoot.addComponent(UIShadow).shadowOffset.multiplyScaler(0.2)
        this.sceneText = text

        this.renderUIPanel(panel, 'Chair Panel')
    }

    private charCount = 0
    private title: string = 'Hello, Orillusion'
    private lastTitle = this.title
    private loop(): void {
        if (this.panel) {
            this.position ||= new Vector3()
            this.position.copyFrom(this.modelContainer.transform.worldPosition)
            this.panel.object3D.localPosition = this.position
        }
        if (this.sceneText) {
            let count = 1 + (Math.floor(Time.frame * 0.1) % 30)
            if (this.charCount != count) {
                this.charCount = count
                let newTitle = this.title.slice(0, this.charCount)
                if (newTitle != this.lastTitle) {
                    this.sceneText.text = newTitle
                    this.lastTitle = newTitle
                }
            }
        }
    }

    renderUIPanel(panel: WorldPanel, name: string = 'GUI Panel') {
        let f = this.gui.addFolder(name)
        //cull mode
        let cullMode = {}
        cullMode[GPUCullMode.none] = GPUCullMode.none
        cullMode[GPUCullMode.front] = GPUCullMode.front
        cullMode[GPUCullMode.back] = GPUCullMode.back

        // change cull mode by click dropdown box
        f.add({ cullMode: GPUCullMode.none }, 'cullMode', cullMode).onChange((v) => {
            panel.cullMode = v
        })

        //billboard
        let billboard = {}
        billboard['None'] = BillboardType.None
        billboard['Y'] = BillboardType.BillboardY
        billboard['XYZ'] = BillboardType.BillboardXYZ

        // change billboard by click dropdown box
        f.add({ billboard: panel.billboard }, 'billboard', billboard).onChange((v) => {
            panel.billboard = v
        })

        //depth test
        f.add(panel, 'depthTest')
        f.open()
    }
}

new Sample_POI().run()
