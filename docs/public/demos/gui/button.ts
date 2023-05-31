import { Engine3D, Scene3D, Object3D, Camera3D, ViewPanel, UIButton, HoverCameraController, PointerEvent3D, View3D, AtmosphericComponent } from '@orillusion/core'

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

        await Engine3D.res.loadAtlas('https://cdn.orillusion.com/atlas/UI_atlas.json')

        let view = new View3D()
        view.scene = scene3D
        view.camera = camera
        Engine3D.startRenderView(view)

        // create panel root
        let panelRoot: Object3D = new Object3D()
        panelRoot.addComponent(ViewPanel)

        let canvas = view.enableUICanvas()
        canvas.addChild(panelRoot)

        // create button node
        let buttonQuad = new Object3D()
        panelRoot.addChild(buttonQuad)
        // create button component
        let button: UIButton = buttonQuad.addComponent(UIButton)
        // set button size
        button.uiTransform.resize(180, 60)

        button.normalSprite = Engine3D.res.getGUISprite('button-up')
        button.downSprite = Engine3D.res.getGUISprite('button-down')
        button.overSprite = Engine3D.res.getGUISprite('button-over')
        button.disableSprite = Engine3D.res.getGUISprite('button-disable')

        // add listener
        buttonQuad.addEventListener(PointerEvent3D.PICK_CLICK_GUI, this.onClick, this)
        buttonQuad.addEventListener(PointerEvent3D.PICK_OUT_GUI, this.onOut, this)
        buttonQuad.addEventListener(PointerEvent3D.PICK_OVER_GUI, this.onOver, this)
        buttonQuad.addEventListener(PointerEvent3D.PICK_DOWN_GUI, this.onDown, this)
    }

    private onClick() {}

    private onOut() {}

    private onOver() {}

    private onDown() {
        alert('clicked me!')
    }
}
new Sample_button().run()
