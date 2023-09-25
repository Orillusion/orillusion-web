import { Stats } from '@orillusion/stats'
import { Engine3D, Scene3D, AtmosphericComponent, CameraUtil, HoverCameraController, Object3D, MeshRenderer, BoxGeometry, LitMaterial, DirectLight, KelvinUtil, View3D } from '@orillusion/core'
import dat from 'dat.gui'

// simple base demo
class Sample_Transform {
    private Ori: dat.GUI | undefined
    async run() {
        // init engine
        await Engine3D.init()
        // create new Scene
        let scene = new Scene3D()

        // add performance stats
        scene.addComponent(Stats)

        // add an Atmospheric sky enviroment
        let sky = scene.addComponent(AtmosphericComponent)
        sky.sunY = 0.6

        // init camera3D
        let mainCamera = CameraUtil.createCamera3D(null, scene)
        mainCamera.perspective(60, Engine3D.aspect, 1, 2000.0)

        // add a basic camera controller
        let hoverCameraController = mainCamera.object3D.addComponent(HoverCameraController)
        hoverCameraController.setCamera(15, -15, 10)

        // create a basic cube
        let cubeObj = new Object3D()
        let mr = cubeObj.addComponent(MeshRenderer)
        mr.geometry = new BoxGeometry()
        let mat = new LitMaterial()
        mr.material = mat
        scene.addChild(cubeObj)

        // add a basic direct light
        let lightObj = new Object3D()
        lightObj.rotationX = 45
        lightObj.rotationY = 60
        lightObj.rotationZ = 150
        let dirLight = lightObj.addComponent(DirectLight)
        dirLight.lightColor = KelvinUtil.color_temperature_to_rgb(5355)
        dirLight.intensity = 10
        scene.addChild(lightObj)

        sky.relativeTransform = dirLight.transform

        // create a view with target scene and camera
        let view = new View3D()
        view.scene = scene
        view.camera = mainCamera

        // start render
        Engine3D.startRenderView(view)

        let transform = cubeObj.transform
        // debug GUI
        const gui = new dat.GUI()
        gui.domElement.style.zIndex = '10'
        gui.domElement.parentElement.style.zIndex = '10'

        this.Ori = gui.addFolder('Orillusion')
        this.Ori.open()

        let Trans = this.Ori.addFolder('Transform')
        Trans.add(transform, 'x', -100.0, 100.0, 0.01)
        Trans.add(transform, 'y', -100.0, 100.0, 0.01)
        Trans.add(transform, 'z', -100.0, 100.0, 0.01)
        Trans.add(transform, 'rotationX', 0.0, 360.0, 0.01)
        Trans.add(transform, 'rotationY', 0.0, 360.0, 0.01)
        Trans.add(transform, 'rotationZ', 0.0, 360.0, 0.01)
        Trans.add(transform, 'scaleX', 0.0, 2.0, 0.01)
        Trans.add(transform, 'scaleY', 0.0, 2.0, 0.01)
        Trans.add(transform, 'scaleZ', 0.0, 2.0, 0.01)
        Trans.open()
    }
}

new Sample_Transform().run()
