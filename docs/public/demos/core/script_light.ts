import { ComponentBase, Time, DirectLight, Color, LitMaterial, MeshRenderer, Scene3D, BoxGeometry, Object3D, Engine3D, Camera3D, HoverCameraController, View3D, AtmosphericComponent } from '@orillusion/core'

class LightAnimation extends ComponentBase {
    private light: DirectLight
    private color: Color

    public start() {
        this.light = this.object3D.getComponent(DirectLight)
        this.color = this.light.lightColor
    }
    public onUpdate() {
        this.color.r = Math.pow(Math.sin(Time.time * 0.001), 10)
        this.light.lightColor = this.color
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
        mat.roughness = 1.0
        let obj: Object3D = new Object3D()
        let geometry = new BoxGeometry(3, 3, 3)
        let mr = obj.addComponent(MeshRenderer)
        mr.material = mat
        mr.geometry = geometry
        this.scene.addChild(obj)
    }

    private createLight() {
        let light: Object3D = new Object3D()
        let component = light.addComponent(DirectLight)
        light.rotationX = -45
        light.rotationZ = -45
        component.lightColor = new Color(1.0, 0, 0, 1)
        component.intensity = 10
        this.scene.addChild(light)
        this.light = component
    }

    private createComponents() {
        this.light.object3D.addComponent(LightAnimation)
    }

    async run() {
        await Engine3D.init()
        this.init(new Scene3D())
        let cameraObj = new Object3D()
        let camera = cameraObj.addComponent(Camera3D)
        camera.perspective(60, Engine3D.aspect, 1, 5000.0)
        let controller = camera.object3D.addComponent(HoverCameraController)
        controller.setCamera(-135, 0, 15)
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
