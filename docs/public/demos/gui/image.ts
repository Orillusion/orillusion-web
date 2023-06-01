import { Engine3D, Scene3D, Object3D, Camera3D, View3D, ViewPanel, UIImage, HoverCameraController, Color, ImageType, AtmosphericComponent, BitmapTexture2D, makeAloneSprite } from '@orillusion/core'

export class Sample_button {
    async run() {
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
        controller.setCamera(0, -20, 15)
        // add camera node
        scene3D.addChild(cameraObj)

        let view = new View3D()
        view.scene = scene3D
        view.camera = camera
        Engine3D.startRenderView(view)

        // create panel root
        let panelRoot: Object3D = new Object3D()
        panelRoot.addComponent(ViewPanel)

        let canvas = view.enableUICanvas()
        canvas.addChild(panelRoot)
        
        // load a BitmapTexture2D
        let bitmapTexture2D = new BitmapTexture2D()
        bitmapTexture2D.flipY = true
        await bitmapTexture2D.load('https://cdn.orillusion.com/images/webgpu.png')

        // create image node
        let imageQuad = new Object3D()
        panelRoot.addChild(imageQuad)
        // create image component
        let image: UIImage = imageQuad.addComponent(UIImage)
        // set image size
        image.uiTransform.resize(320, 320)
        // set image source
        image.sprite = makeAloneSprite('webgpu', bitmapTexture2D)
    }
}

new Sample_button().run()
