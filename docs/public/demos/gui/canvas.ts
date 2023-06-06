import { Engine3D, Object3D, UIImage, ImageType, Color, UIPanel, ViewPanel, Scene3D, Vector2, UITextField, UIShadow, AtmosphericComponent, Camera3D, HoverCameraController, View3D } from '@orillusion/core'

class Sample_UIMultiCanvas {
    async run() {
        Engine3D.setting.shadow.autoUpdate = true
        Engine3D.setting.shadow.shadowBias = 0.002

        // initializa engine
        await Engine3D.init()
        // load fnt
        await Engine3D.res.loadFont('https://cdn.orillusion.com/fnt/0.fnt')
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
        controller.setCamera(0, -20, 50)
        // add camera node
        scene3D.addChild(cameraObj)

        let view = new View3D()
        view.scene = scene3D
        view.camera = camera
        Engine3D.startRenderView(view)

        let total: number = 4
        for (let i = 0; i < total; i++) {
            let size: Vector2 = new Vector2()
            size.x = 500 - i * 100
            size.y = 400 - i * 100
            this.createPanel(scene3D, i, size)
        }
    }

    private createPanel(scene: Scene3D, index: number, size: Vector2): UIPanel {
        let panelRoot: Object3D = new Object3D()
        // enable ui canvas at index
        let canvas = scene.view.enableUICanvas(index)
        let panel = panelRoot.addComponent(ViewPanel)
        canvas.addChild(panel.object3D)
        // create image
        let obj3D = new Object3D()
        panelRoot.addChild(obj3D)
        let image = obj3D.addComponent(UIImage)
        image.isShadowless = true
        image.imageType = ImageType.Sliced
        image.uiTransform.resize(size.x, size.y)
        image.color = Color.random()

        //text
        let text = obj3D.addComponent(UITextField)
        text.text = 'Canvas index: ' + index
        text.fontSize = 24

        //shadow
        let shadow = obj3D.addComponent(UIShadow)
        shadow.shadowOffset.multiplyScaler(0.4)
        return panel
    }
}

new Sample_UIMultiCanvas().run()
