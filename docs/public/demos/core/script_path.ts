import { ComponentBase, Time, DirectLight, Color, LitMaterial, MeshRenderer, Scene3D, BoxGeometry, Object3D, Engine3D, Camera3D, HoverCameraController, View3D, AtmosphericComponent } from '@orillusion/core'

class PathAnimation extends ComponentBase {
    onUpdate() {
        this.object3D.x = Math.sin(Time.time * 0.001) * 2
        this.object3D.y = Math.cos(Time.time * 0.001) * 2
    }
}

class UserLogic {
    private scene: Scene3D
    private cube: Object3D
    private light: DirectLight

    init(scene3D: Scene3D) {
        this.scene = scene3D
        this.createCube()
        this.createLight()
        this.createComponents()
    }

    private createCube() {
        let mat = new LitMaterial()
        let obj: Object3D = new Object3D()
        let geometry = new BoxGeometry(3, 3, 3)
        let mr = obj.addComponent(MeshRenderer)
        mr.material = mat
        mr.geometry = geometry
        this.scene.addChild(obj)
        this.cube = obj
    }

    private createLight() {
        let light: Object3D = new Object3D()
        let component = light.addComponent(DirectLight)
        light.rotationX = 45
        light.rotationY = 30
        component.lightColor = new Color(1.0, 1.0, 0, 1)
        component.intensity = 2
        this.scene.addChild(light)
        this.light = component
    }

    private createComponents() {
        this.cube.addComponent(PathAnimation)
    }

    async run() {
        await Engine3D.init()
        this.init(new Scene3D())
        let cameraObj = new Object3D()
        let camera = cameraObj.addComponent(Camera3D)
        camera.perspective(60, Engine3D.aspect, 1, 5000.0)
        let controller = camera.object3D.addComponent(HoverCameraController)
        controller.setCamera(45, 0, 15)
        this.scene.addChild(cameraObj)
        // add an Atmospheric sky enviroment
        this.scene.addComponent(AtmosphericComponent).sunY = 0.6
        // create a view with target scene and camera
        let view = new View3D()
        view.scene = this.scene
        view.camera = camera
        // start render
        Engine3D.startRenderView(view)
    }
}
new UserLogic().run()
