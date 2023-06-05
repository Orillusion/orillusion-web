import { Engine3D, Object3DUtil, Object3D, UIImage, ImageType, Color, WorldPanel, UIPanel, GUICanvas, BillboardType, AtmosphericComponent, Camera3D, HoverCameraController, Scene3D, View3D } from '@orillusion/core'
import * as dat from 'dat.gui'

class Sample_UIPanelOrder {
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

        // create floor
        let floor = Object3DUtil.GetSingleCube(100, 2, 50, 0.5, 0.5, 0.5)
        scene3D.addChild(floor)
        floor.y = -40

        // enable ui canvas at index 0
        let canvas = scene3D.view.enableUICanvas()
        //create UI root
        let panelRoot: Object3D = new Object3D()
        panelRoot.scaleX = panelRoot.scaleY = panelRoot.scaleZ = 0.1

        let panelRoot2: Object3D = new Object3D()
        panelRoot2.z = 20
        panelRoot2.x = -20
        panelRoot2.scaleX = panelRoot2.scaleY = panelRoot2.scaleZ = 0.1

        let panel1 = this.createPanel(panelRoot, canvas, new Color(1.0, 0, 0.0, 0.8))
        let panel2 = this.createPanel(panelRoot2, canvas, new Color(0, 0, 1, 0.8))

        panel1.needSortOnCameraZ = true
        panel2.needSortOnCameraZ = true
        let GUIHelp = new dat.GUI()

        GUIHelp.add({ label: `Red Panel` }, 'label')

        GUIHelp.add(panel1, 'panelOrder', 0, 10, 1)
        GUIHelp.add(panel1, 'needSortOnCameraZ')
        GUIHelp.add({ label: `Blue Panel` }, 'label')
        GUIHelp.add(panel2, 'panelOrder', 0, 10, 1)
        GUIHelp.add(panel2, 'needSortOnCameraZ')
        GUIHelp.open()
    }

    private createPanel(panelRoot: Object3D, canvas: GUICanvas, color: Color): UIPanel {
        let panel = panelRoot.addComponent(WorldPanel)
        panel.billboard = BillboardType.BillboardXYZ
        canvas.addChild(panel.object3D)
        // create image
        let obj3D = new Object3D()
        panelRoot.addChild(obj3D)
        let image = obj3D.addComponent(UIImage)
        image.imageType = ImageType.Sliced
        image.uiTransform.resize(400, 300)
        image.color = color
        return panel
    }
}

new Sample_UIPanelOrder().run()
