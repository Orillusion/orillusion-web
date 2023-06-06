import { AtmosphericComponent, BitmapTexture2D, Camera3D, Engine3D, HoverCameraController, Object3D, Scene3D, Texture, UIImageGroup, View3D, ViewPanel, makeAloneSprite } from '@orillusion/core'
import * as dat from 'dat.gui'

class Sample_UIImageGroup {
    scene: Scene3D
    imageGroup: UIImageGroup

    async run() {
        Engine3D.setting.shadow.autoUpdate = true
        Engine3D.setting.shadow.shadowBias = 0.002
        // initializa engine
        await Engine3D.init()
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
        controller.setCamera(0, -20, 30)
        // add camera node
        scene3D.addChild(cameraObj)

        let view = new View3D()
        view.scene = scene3D
        view.camera = camera
        Engine3D.startRenderView(view)

        this.scene = scene3D

        await this.createImageGroup()
    }

    async createImageGroup() {
        // enable ui canvas
        let canvas = this.scene.view.enableUICanvas()
        //create UI root
        let panelRoot: Object3D = new Object3D()
        //create panel
        let panel = panelRoot.addComponent(ViewPanel)
        canvas.addChild(panel.object3D)

        let bitmapTexture2D = new BitmapTexture2D()
        bitmapTexture2D.flipY = true
        await bitmapTexture2D.load('https://cdn.orillusion.com/images/webgpu.png')

        let uiNode = new Object3D()
        panelRoot.addChild(uiNode)
        //create sprite sheet list
        this.imageGroup = this.createSpriteSheets(uiNode, bitmapTexture2D)
        this.createGUI()
    }

    private halfSize = 0
    createGUI() {
        let GUIHelp = new dat.GUI()
        let quat = this.imageGroup.getQuad(1)
        let f = GUIHelp.addFolder('Position')
        let pos = { x: quat.x, y: quat.y }
        let action = () => this.imageGroup.setXY(1, pos.x, pos.y)
        f.add(pos, 'x', -Engine3D.width * 0.5, Engine3D.width * 0.5, 1).onChange(action)
        f.add(pos, 'y', -Engine3D.height * 0.5, Engine3D.height * 0.5, 1).onChange(action)
        f.open()
        
        f = GUIHelp.addFolder('Size')
        let size = { width: quat.width, height: quat.height }
        let action2 = () => this.imageGroup.setSize(1, size.width, size.height)
        f.add(size, 'width', 0, 256, 1).onChange(action2)
        f.add(size, 'height', 0, 256, 1).onChange(action2)
        f.open()
    }

    private createSpriteSheets(root: Object3D, texture: Texture): UIImageGroup {
        let sprite = makeAloneSprite('logo', texture)
        let imgGroup = root.addComponent(UIImageGroup, { count: 2 })
        let size = 128
        this.halfSize = size * 0.5
        for (let i = 0; i < 2; i++) {
            imgGroup.setSprite(i, sprite)
            imgGroup.setSize(i, size, size)
            if (i == 1) {
                imgGroup.setXY(1, -this.halfSize, 128 - this.halfSize)
            } else {
                imgGroup.setXY(0, -this.halfSize, -this.halfSize)
            }
        }
        return imgGroup
    }
}

new Sample_UIImageGroup().run()
