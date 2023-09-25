import { Engine3D, Scene3D, CameraUtil, View3D, AtmosphericComponent, ComponentBase, Time, Object3DUtil, KelvinUtil, DirectLight, Object3D, HoverCameraController } from '@orillusion/core'
import { Stats } from '@orillusion/stats'
import dat from 'dat.gui'

// sample use component
class Sample_UseComponent {
    private Ori: dat.GUI | undefined
    async run() {
        // init engine
        await Engine3D.init()
        // create new Scene
        let scene = new Scene3D()
        // add atmospheric sky
        scene.addComponent(AtmosphericComponent)
        scene.addComponent(Stats)

        // init camera3D
        let mainCamera = CameraUtil.createCamera3D(null, scene)
        mainCamera.perspective(60, Engine3D.aspect, 1, 2000.0)
        let hoverCameraController = mainCamera.object3D.addComponent(HoverCameraController)
        hoverCameraController.setCamera(15, -15, 10)

        // create a view with target scene and camera
        let view = new View3D()
        view.scene = scene
        view.camera = mainCamera

        // start render
        Engine3D.startRenderView(view)

        // create cube
        let cube = Object3DUtil.GetSingleCube(2, 4, 1, 0.7, 1, 0.5)
        cube.name = 'cube'
        scene.addChild(cube)

        // register a component
        let component = cube.addComponent(RotateComponent)

        // gui
        const gui = new dat.GUI()
        gui.domElement.style.zIndex = '10'
        gui.domElement.parentElement.style.zIndex = '10'

        this.Ori = gui.addFolder('Orillusion')
        this.Ori.open()
        this.Ori.add(component, 'enable')

        /******** light *******/
        {
            let lightObj3D = new Object3D()
            lightObj3D.x = 0
            lightObj3D.y = 30
            lightObj3D.z = -40
            lightObj3D.rotationX = 45
            lightObj3D.rotationY = 0
            lightObj3D.rotationZ = 0
            let directLight = lightObj3D.addComponent(DirectLight)
            directLight.lightColor = KelvinUtil.color_temperature_to_rgb(5355)
            directLight.castShadow = true
            directLight.intensity = 40
            let DirLight = this.Ori.addFolder('DirectLight')
            DirLight.add(directLight, 'enable')
            DirLight.add(directLight.transform, 'rotationX', 0.0, 360.0, 0.01)
            DirLight.add(directLight.transform, 'rotationY', 0.0, 360.0, 0.01)
            DirLight.add(directLight.transform, 'rotationZ', 0.0, 360.0, 0.01)
            DirLight.addColor(directLight, 'lightColor')
            DirLight.add(directLight, 'intensity', 0.0, 160.0, 0.01)
            DirLight.add(directLight, 'indirect', 0.0, 10.0, 0.01)
            DirLight.add(directLight, 'castShadow')
            DirLight.open()
            scene.addChild(lightObj3D)
        }
    }
}

class RotateComponent extends ComponentBase {
    public init(param?: any): void {
        console.log('RotateComponent init, name : ', this.object3D.name)
    }
    public start(): void {
        console.log('RotateComponent start, name :', this.object3D.name)
    }

    public onUpdate(): void {
        this.transform.rotationY = Math.sin(Time.time * 0.01) * 90
    }

    public onEnable(view?: View3D) {
        console.log('RotateComponent init, name : ', this.object3D.name)
        this._enable = true
    }
    public onDisable(view?: View3D) {
        console.log('RotateComponent init, name : ', this.object3D.name)
        this._enable = false
    }
}

new Sample_UseComponent().run()