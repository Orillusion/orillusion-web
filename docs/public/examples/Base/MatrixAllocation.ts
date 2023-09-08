import { Stats } from '@orillusion/stats'
import { Engine3D, Scene3D, AtmosphericComponent, CameraUtil, HoverCameraController, Object3D, MeshRenderer, BoxGeometry, LitMaterial, DirectLight, KelvinUtil, View3D, Matrix4 } from '@orillusion/core'
import dat from 'dat.gui'

class Sample_MatrixAllocation {
    private Ori: dat.GUI | undefined

    async run() {
        Matrix4.allocCount = 10
        Matrix4.allocOnceCount = 5

        await Engine3D.init()

        let scene = new Scene3D()

        scene.addComponent(Stats)

        scene.addComponent(AtmosphericComponent).sunY = 0.6

        let mainCamera = CameraUtil.createCamera3D(null, scene)
        mainCamera.perspective(60, Engine3D.aspect, 1, 2000.0)

        let hoverCameraController = mainCamera.object3D.addComponent(HoverCameraController)
        hoverCameraController.setCamera(15, -15, 10)

        let cubeObj = new Object3D()
        let mr = cubeObj.addComponent(MeshRenderer)
        mr.geometry = new BoxGeometry()
        let mat = new LitMaterial()
        mr.material = mat
        scene.addChild(cubeObj)

        let view = new View3D()
        view.scene = scene
        view.camera = mainCamera

        Engine3D.startRenderView(view)

        // init dat.gui
        const gui = new dat.GUI()
        gui.domElement.style.zIndex = '10'
        gui.domElement.parentElement.style.zIndex = '10'
        this.Ori = gui.addFolder('Orillusion')
        this.Ori.open()
        let button_add = {
            add: () => {
                let obj = new Object3D()
                obj.x = -5 + Math.random() * 10
                obj.z = -5 + Math.random() * 10
                let mr = obj.addComponent(MeshRenderer)
                mr.geometry = new BoxGeometry()
                mr.material = new LitMaterial()
                scene.addChild(obj)
            }
        }
        this.Ori.add(button_add, 'add')
    }
}

new Sample_MatrixAllocation().run()
