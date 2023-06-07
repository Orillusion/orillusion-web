import { AtmosphericComponent, BillboardType, CEvent, CEventDispatcher, Camera3D, Color, DirectLight, Engine3D, HoverCameraController, ImageType, Object3D, Object3DUtil, PointerEvent3D, Scene3D, TextAnchor, Time, UIImage, UIInteractive, UITextField, Vector3, View3D, WorldPanel, clamp } from '@orillusion/core'

class GUIPanelPOI {
    private readonly alpha = 0.8
    private objUI: Object3D
    private index: number
    private _originColor: Color = new Color()
    private _remainTime: number = -1
    private _backImage: UIImage
    private _outColor = new Color(0, 0.5, 0.75, this.alpha)

    constructor(obj, index: number) {
        this.objUI = obj
        this.index = index
        this.displayUIDetail()
    }

    update(delta: number): void {
        if (this._remainTime > 0) {
            this._remainTime -= delta
            let progress = clamp(this._remainTime, 0, 500)
            progress = 1 - progress / 500
            let color = this._backImage.color
            color.r = this._originColor.r * progress + (1.0 - progress) * 0.2
            color.g = this._originColor.g * progress + (1.0 - progress) * 0.2
            color.b = this._originColor.b * progress + (1.0 - progress) * 0.2
            this._backImage.color = color
        }
        this.updateFrame()
    }

    private lastIndex: number = -1
    private frame: number = Math.floor(Math.random() * 10000)
    private frameStart = 65 //65~77
    private frameCount = 13
    private _icon: UIImage

    private _frameSpeed = 0.05 + 0.1 * Math.random()

    updateFrame() {
        this.frame++
        let newIndex = Math.floor(this.frame * this._frameSpeed) % this.frameCount
        if (newIndex != this.lastIndex) {
            this.lastIndex = newIndex
            let frameKey = (this.lastIndex + this.frameStart).toString().padStart(5, '0')
            this._icon.sprite = Engine3D.res.getGUISprite(frameKey)
        }
    }

    private displayUIDetail(): void {
        let uiChild = this.objUI.addChild(new Object3D()) as Object3D

        let r = Math.random() * 0.25 + 0.2
        let b = Math.random() * 0.25 + 0.2
        let g = Math.random() * 0.25 + 0.2
        this._originColor.setTo(r, g, b, this.alpha)
        //back
        this._backImage = this.addImage(uiChild, ' ', 200, 120, r, g, b, this.alpha)
        this._backImage.uiTransform.x = 100
        this._backImage.uiTransform.y = -60

        uiChild.addEventListener(
            PointerEvent3D.PICK_CLICK_GUI,
            () => {
                this._remainTime = 500
                sampleUIPanelClick.data = this.objUI
                sampleUIPanelDispatcher.dispatchEvent(sampleUIPanelClick)
            },
            this
        )

        uiChild.addEventListener(
            PointerEvent3D.PICK_OVER_GUI,
            () => {
                this._backImage.color = this._outColor
            },
            this
        )

        uiChild.addEventListener(
            PointerEvent3D.PICK_OUT_GUI,
            () => {
                this._backImage.color = this._originColor
            },
            this
        )

        let button = uiChild.addComponent(UIInteractive)
        button.interactive = true

        //icon
        {
            let iconNode = uiChild.addChild(new Object3D()) as Object3D
            let icon = this.addImage(iconNode, '', 100, 100, 1, 1, 1)
            icon.uiTransform.x = -75
            icon.uiTransform.y = 25
            this._icon = icon
            this.updateFrame()
        }

        //text
        {
            let textChild = this.objUI.addChild(new Object3D()) as Object3D
            let text = textChild.addComponent(UITextField)
            text.uiTransform.resize(120, 60)
            text.uiTransform.x = 110
            text.uiTransform.y = -48
            text.alignment = TextAnchor.UpperLeft
            text.text = 'Orilussion'
            text.fontSize = 22
            text.color = new Color(0.9, 0.9, 0.9, 1.0)
        }

        //text
        {
            let textChild = this.objUI.addChild(new Object3D()) as Object3D
            let text = textChild.addComponent(UITextField)
            text.uiTransform.resize(140, 60)
            text.uiTransform.x = 110
            text.uiTransform.y = -100
            text.alignment = TextAnchor.UpperLeft
            text.text = '次时代WebGPU 3D Engine'
            text.fontSize = 18
            text.color = new Color(0.8, 0.8, 0.8, 1.0)
        }
    }

    private addImage(obj: Object3D, texture: string, w: number, h: number, r: number, g: number, b: number, a: number = 1): UIImage {
        let image = obj.addComponent(UIImage)
        image.sprite = Engine3D.res.getGUISprite(texture)
        image.uiTransform.resize(w, h)
        image.imageType = ImageType.Sliced
        image.color.setTo(r, g, b, a)
        return image
    }
}
class GUIPanelBinder {
    objUI: Object3D
    panel: GUIPanelPOI
    ball: Object3D

    constructor(ball: Object3D, ui: Object3D, index: number) {
        this.ball = ball
        this.objUI = ui
        this.objUI.name = 'panel ' + index
        this.objUI.scaleX = this.objUI.scaleY = this.objUI.scaleZ = 0.1
        this.panel = new GUIPanelPOI(this.objUI, index)
    }

    update(delta: number) {
        this.objUI.localPosition = this.ball.transform.worldPosition
        this.panel.update(delta)
    }
}

let sampleUIPanelClick: CEvent = new CEvent('ClickUIPanel')
let sampleUIPanelDispatcher: CEventDispatcher = new CEventDispatcher()

class Sample_UIMultiPanel {
    camera: Camera3D
    scene: Scene3D
    view: View3D

    async run() {
        Engine3D.setting.shadow.autoUpdate = true
        Engine3D.setting.shadow.shadowBias = 0.0001
        Engine3D.setting.shadow.shadowBound = 200

        await Engine3D.init({
            renderLoop: () => {
                this.renderUpdate()
            }
        })

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
        controller.setCamera(0, -10, 150, new Vector3(0, 15, 0))
        // add camera node
        scene3D.addChild(cameraObj)
        // create light
        let light: Object3D = new Object3D()
        // add direct light component
        let component: DirectLight = light.addComponent(DirectLight)
        // adjust lighting
        light.rotationX = 21
        light.rotationZ = -30
        component.lightColor = new Color(1.0, 1.0, 1.0, 1.0)
        component.intensity = 20
        component.castShadow = true
        // add light object
        scene3D.addChild(light)

        let view = new View3D()
        view.scene = scene3D
        view.camera = camera
        Engine3D.startRenderView(view)
        this.scene = scene3D
        this.camera = view.camera
        this.view = view

        let model = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/wukong/wukong.gltf')
        model.localScale = new Vector3(1, 1, 1).multiplyScalar(50)

        this.scene.addChild(model)
        this.scene.addChild(Object3DUtil.GetSingleCube(400, 1, 400, 0.2, 0.2, 0.2))

        await Engine3D.res.loadFont('https://cdn.orillusion.com/fnt/0.fnt')
        await Engine3D.res.loadAtlas('https://cdn.orillusion.com/atlas/Sheet_atlas.json')

        this.makeUIPanelList()
    }

    private nodeList: GUIPanelBinder[] = []
    private bindTarget3DRoot: Object3D

    private makeUIPanelList(): void {
        this.bindTarget3DRoot = new Object3D()
        this.bindTarget3DRoot.y = 50
        this.scene.addChild(this.bindTarget3DRoot)
        let canvas = this.view.enableUICanvas()

        for (let i = 0; i < 50; i++) {
            //panel
            let panelRoot: Object3D = new Object3D()
            let panel = panelRoot.addComponent(WorldPanel)
            panel.billboard = BillboardType.BillboardXYZ
            panel.needSortOnCameraZ = true
            canvas.addChild(panel.object3D)

            //random position
            let angle = Math.PI * 2 * Math.random()
            let pos = new Vector3()
            pos.set(Math.sin(angle), Math.cos(angle), (Math.random() - 0.5) * 2)
            pos.multiplyScalar(50 * Math.sqrt(Math.random() + 0.25))

            let ball = this.bindTarget3DRoot.addChild(new Object3D()) as Object3D
            ball.localPosition = pos

            //binder
            let node = new GUIPanelBinder(ball, panelRoot, i)
            this.nodeList.push(node)
        }

        sampleUIPanelDispatcher.addEventListener(
            sampleUIPanelClick.type,
            (e) => {
                let target = e.data as Object3D
                let targetPos = this.view.camera.worldToScreenPoint(target.transform.worldPosition)
                let orginPos = this.view.camera.worldToScreenPoint(new Vector3())
                this.isSpeedAdd = targetPos.x > orginPos.x ? 1 : -1
                this.speedAngle += 50
                console.log(this.isSpeedAdd)
            },
            this
        )
    }
    private speedAngle: number = 1
    private isSpeedAdd: number = 1

    renderUpdate() {
        if (this.bindTarget3DRoot) {
            this.speedAngle -= 0.2
            this.speedAngle = Math.max(this.speedAngle, 1)
            this.bindTarget3DRoot.rotationY += 0.01 * this.speedAngle * this.isSpeedAdd

            for (let binder of this.nodeList) {
                binder.update(Time.delta)
            }
        }
    }
}

new Sample_UIMultiPanel().run()
