import { Engine3D, Object3DUtil, Object3D, UIImage, ImageType, Color, WorldPanel, UIPanel, GUICanvas, BillboardType, AtmosphericComponent, Camera3D, HoverCameraController, Scene3D, View3D, GPUCullMode, ViewPanel } from '@orillusion/core'
import * as dat from 'dat.gui'

class Sample_UIPanelOrder {
    GUIHelp: dat.GUI
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
        controller.setCamera(0, -10, 100)
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
        panelRoot.name = 'WorldPanel red'
        panelRoot.scaleX = panelRoot.scaleY = panelRoot.scaleZ = 0.1

        let panelRoot2: Object3D = new Object3D()
        panelRoot2.name = 'WorldPanel blue'
        panelRoot2.z = 20
        panelRoot2.y = -10
        panelRoot2.x = -10
        panelRoot2.scaleX = panelRoot2.scaleY = panelRoot2.scaleZ = 0.1

        let panelRoot3: Object3D = new Object3D()
        panelRoot3.name = 'ViewPanel Green'

        this.GUIHelp = new dat.GUI()
        this.createPanel(panelRoot, canvas, new Color(1.0, 0, 0.0, 0.8), 'world')
        this.createPanel(panelRoot2, canvas, new Color(0, 0, 1, 0.8), 'world')
        this.createPanel(panelRoot3, canvas, new Color(0, 1, 0, 0.5), 'view')
    }

    private createPanel(panelRoot: Object3D, canvas: GUICanvas, color: Color, type: string) {
        let f = this.GUIHelp.addFolder(panelRoot.name)
        if(type === 'world'){
            let panel = panelRoot.addComponent(WorldPanel)
            f.add(panel, 'panelOrder', 0, 10, 1)
            panel.billboard = BillboardType.BillboardXYZ
            panel.needSortOnCameraZ = true
            f.add(panel, 'needSortOnCameraZ')
            f.add({ cullMode: GPUCullMode.none }, 'cullMode', {
                'none' : GPUCullMode.none,
                'front' : GPUCullMode.front,
                'back' : GPUCullMode.back
            }).onChange((v) => {
                panel.cullMode = v
            })
            f.add({ billboard: panel.billboard }, 'billboard', {
                'None' : BillboardType.None,
                'Y' : BillboardType.BillboardY,
                'XYZ' : BillboardType.BillboardXYZ
            }).onChange((v) => {
                panel.billboard = v
            })
            f.add(panel, 'depthTest')
        }else{
            let panel = panelRoot.addComponent(ViewPanel)
            f.add(panel, 'panelOrder', 0, 10, 1)
            canvas
        }
        f.open()

        // create a UIImage
        let obj3D = new Object3D()
        panelRoot.addChild(obj3D)
        let image = obj3D.addComponent(UIImage)
        image.imageType = ImageType.Sliced
        image.uiTransform.resize(400, 300)
        image.color = color

        canvas.addChild(panelRoot)
    }
}

new Sample_UIPanelOrder().run()
