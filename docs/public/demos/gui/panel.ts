import {
    Engine3D,
    Scene3D,
    Object3D,
    Camera3D,
    View3D,
    TextAnchor,
    UITextField,
    DirectLight,
    HoverCameraController,
    Color,
    CameraUtil,
    webGPUContext,
    Vector3,
    CEvent,
    CEventDispatcher,
    WorldPanel,
    KelvinUtil,
    Time,
    clamp,
    UIImage,
    PointerEvent3D,
    UIInteractive,
    ImageType,
    LitMaterial,
    BoxGeometry,
    MeshRenderer
} from '@orillusion/core'

var scene: Scene3D
var hover
async function demo() {
    // initializa engine
    await Engine3D.init({
        renderLoop: () => {
            renderUpdate()
        }
    })

    Engine3D.setting.shadow.shadowBound = 200
    Engine3D.setting.shadow.shadowBias = 0.002

    Engine3D.setting.shadow.autoUpdate = true
    Engine3D.setting.shadow.updateFrameRate = 1

    scene = new Scene3D()
    let camera = CameraUtil.createCamera3DObject(scene)
    camera.perspective(60, webGPUContext.aspect, 1, 5000.0)

    hover = camera.object3D.addComponent(HoverCameraController)
    hover.setCamera(45, -45, 200, new Vector3(0, 20, 0))

    let view = new View3D()
    view.scene = scene
    view.camera = camera
    Engine3D.startRenderView(view)

    await initScene()

    let model = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/wukong/wukong.gltf')
    let scale = 50
    model.localScale = new Vector3(scale, scale, scale)
    scene.addChild(model)
    scene.addChild(GetSingleCube(400, 1, 400, 0.2, 0.2, 0.2))

    await Engine3D.res.loadFont('https://cdn.orillusion.com/fnt/0.fnt')
    await Engine3D.res.loadAtlas('https://cdn.orillusion.com/atlas/Sheet_atlas.json')

    makeUIPanelList()
}

var sampleUIPanelClick: CEvent = new CEvent('ClickUIPanel')
var sampleUIPanelDispatcher: CEventDispatcher = new CEventDispatcher()
var nodeList: _GUIPanelBinder[] = []
var bindTarget3DRoot: Object3D
var lightObj
function makeUIPanelList(): void {
    let uiRoot = new Object3D()
    bindTarget3DRoot = new Object3D()
    bindTarget3DRoot.y = 50
    scene.addChild(bindTarget3DRoot)
    Engine3D.renderJob.guiCanvas.addGUIChild(uiRoot)

    for (let i = 0; i < 50; i++) {
        //panel
        let panelRoot: Object3D = uiRoot.addChild(new Object3D()) as Object3D
        panelRoot.addComponent(WorldPanel)

        //random position
        let angle = Math.PI * 2 * Math.random()
        let pos = new Vector3()
        pos.set(Math.sin(angle), Math.cos(angle), (Math.random() - 0.5) * 2)
        pos.multiplyScalar(50 * Math.sqrt(Math.random() + 0.25))

        let ball = new Object3D()
        ball.localPosition = pos
        bindTarget3DRoot.addChild(ball)

        //binder
        let node = new _GUIPanelBinder(ball, panelRoot, i)
        nodeList.push(node)
    }
    sampleUIPanelDispatcher.addEventListener(
        sampleUIPanelClick.type,
        (e) => {
            let target = e.data as Object3D
            let targetPos = Camera3D.mainCamera.worldToScreenPoint(target.transform.worldPosition)
            let orginPos = Camera3D.mainCamera.worldToScreenPoint(new Vector3())
            isSpeedAdd = targetPos.x > orginPos.x ? 1 : -1
            speedAngle += 50
        },
        this
    )
}

function GetSingleCube(sizeX: number, sizeY: number, sizeZ: number, r: number, g: number, b: number) {
    let mat = new LitMaterial()
    mat.baseColor = new Color(r, g, b, 1)

    let obj = new Object3D()
    let mr = obj.addComponent(MeshRenderer)
    mr.castGI = true
    mr.geometry = new BoxGeometry(sizeX, sizeY, sizeZ)
    mr.material = mat
    return obj
}

async function initScene() {
    /******** light *******/
    {
        lightObj = new Object3D()
        lightObj.rotationX = 54
        lightObj.rotationY = 100
        lightObj.rotationZ = 0
        let lc = lightObj.addComponent(DirectLight)
        lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355)
        lc.castShadow = true
        lc.intensity = 40
        scene.addChild(lightObj)
    }
}

var speedAngle = 1
var isSpeedAdd = 1
function renderUpdate() {
    if (bindTarget3DRoot) {
        speedAngle -= 0.2
        speedAngle = Math.max(speedAngle, 1)
        bindTarget3DRoot.rotationY += 0.01 * speedAngle * isSpeedAdd

        for (let binder of nodeList) {
            binder.update(Time.delta)
        }
    }
}

export class _GUIPanelBinder {
    objUI: Object3D
    panel: _GUIPanelPOI
    private ball: Object3D

    constructor(ball: Object3D, ui: Object3D, index: number) {
        this.ball = ball
        this.objUI = ui
        this.objUI.name = 'panel ' + index
        this.objUI.scaleX = this.objUI.scaleY = this.objUI.scaleZ = 0.1
        this.panel = new _GUIPanelPOI(this.objUI, index)
    }

    update(delta: number) {
        this.objUI.localPosition = this.ball.transform.worldPosition
        this.panel.update(delta)
    }
}

class _GUIPanelPOI {
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
            this._icon.texture = Engine3D.res.getSubTexture(frameKey)
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
            icon.uiTransform.x = 30
            icon.uiTransform.y = -30
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
            text.uiTransform.resize(120, 60)
            text.uiTransform.x = 110
            text.uiTransform.y = -100
            text.alignment = TextAnchor.UpperLeft
            text.text = 'Hello WebGPU，次时代三维引擎'
            text.fontSize = 18
            text.color = new Color(0.8, 0.8, 0.8, 1.0)
        }
    }

    private addImage(obj: Object3D, texture: string, w: number, h: number, r: number, g: number, b: number, a: number = 1): UIImage {
        let image = obj.addComponent(UIImage)
        image.texture = Engine3D.res.getSubTexture(texture)
        image.uiTransform.resize(w, h)
        image.imageType = ImageType.Sliced
        image.color.setTo(r, g, b, a)
        return image
    }
}

demo()
