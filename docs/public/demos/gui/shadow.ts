import { Engine3D, Scene3D, Object3D, Camera3D, View3D, ViewPanel, UIImage, HoverCameraController, Color, AtmosphericComponent, UIShadow, UITextField, TextAnchor, Vector2, Time } from '@orillusion/core'
import * as dat from 'dat.gui'

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
        controller.setCamera(0, 0, 15)
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
        await Engine3D.res.loadFont('https://cdn.orillusion.com/fnt/0.fnt')

        // create image node
        let imageQuad = new Object3D()
        panelRoot.addChild(imageQuad)
        // create image component
        let image: UIImage = imageQuad.addComponent(UIImage)
        image.color = new Color(0.2, 0.2, 0.2, 0.5)
        image.isShadowless = true
        // set image size
        image.uiTransform.resize(480, 120)

        let text = imageQuad.addComponent(UITextField)
        text.fontSize = 42
        text.alignment = TextAnchor.MiddleCenter
        text.color = new Color(0.8, 0.8, 0.8, 1.0)
        text.text = 'Orillusion'

        // add shadow
        let shadow = imageQuad.addComponent(UIShadow)
        let shadowColor = new Color(1.0, 0.5, 0.5, 0.8)
        shadow.shadowQuality = 4
        shadow.shadowOffset = new Vector2(2, -2)
        shadow.shadowRadius = 2

        let GUIHelp = new dat.GUI()
        let f = GUIHelp.addFolder('GUI Shadow')
        f.add(shadow, 'shadowQuality', 0, 4, 1)
        f.add(shadow, 'shadowRadius', 0, 10, 0.01)
        f.add(shadow.shadowOffset, 'x', -100, 100, 0.1).onChange(()=>{
            shadow.shadowOffset = shadow.shadowOffset
        })
        f.add(shadow.shadowOffset, 'y', -100, 100, 0.1).onChange(()=>{
            shadow.shadowOffset = shadow.shadowOffset
        })
        f.addColor({ color: Object.values(shadowColor).map((v) => v * 255) }, 'color').onChange((v) => {
            shadowColor.copyFromArray(v)
            shadow.shadowColor = shadowColor
        })
        f.open()
    }
}

new Sample_button().run()
