import { BoxColliderShape, BoxGeometry, Camera3D, ColliderComponent, Color, ComponentBase, DirectLight, Engine3D, AtmosphericComponent, View3D, LitMaterial, HoverCameraController, MeshRenderer, Object3D, PlaneGeometry, Scene3D, Vector2, Vector3 } from '@orillusion/core'
import { Physics, Rigidbody } from '@orillusion/physics'

export class Sample_colliders {
    constructor() {}

    addPlane(scene: Scene3D, size: Vector2, pos: Vector3, rot: Vector3) {
        const obj = new Object3D()
        let mr = obj.addComponent(MeshRenderer)
        mr.geometry = new PlaneGeometry(size.x, size.y)
        mr.material = new LitMaterial()
        mr.material.baseColor = new Color(0.04, 0.42, 0.45, 1)
        obj.localPosition = pos
        obj.localRotation = rot
        // add a rigidbody with no mass - static body
        let rigidbody = obj.addComponent(Rigidbody)
        rigidbody.mass = 0
        // add a box collider shape with small y value
        let collider = obj.addComponent(ColliderComponent)
        collider.shape = new BoxColliderShape()
        collider.shape.size = new Vector3(size.x, 0.1, size.y)
        scene.addChild(obj)
        return obj
    }

    loop() {
        if (Physics.isInited) {
            Physics.update()
        }
    }

    async run() {
        // Init physics engine
        await Physics.init()
        // Init Engine3D
        await Engine3D.init({
            canvasConfig: { devicePixelRatio: 1 },
            renderLoop: () => this.loop()
        })

        let scene3D = new Scene3D()
        scene3D.addComponent(AtmosphericComponent)
        let cameraObj = new Object3D()
        let mainCamera = cameraObj.addComponent(Camera3D)
        mainCamera.lookAt(new Vector3(0, 0, 10), new Vector3(0, 0, 0))
        mainCamera.perspective(60, Engine3D.aspect, 1, 5000.0)
        let controller = mainCamera.object3D.addComponent(HoverCameraController)
        controller.setCamera(45, -15, 150, new Vector3(0, 30, 0))
        scene3D.addChild(cameraObj)

        let light: Object3D = new Object3D()
        let component = light.addComponent(DirectLight)
        light.rotationX = 45
        light.rotationY = 30
        component.lightColor = new Color(1.0, 1.0, 1.0, 1.0)
        component.intensity = 20
        scene3D.addChild(light)

        this.addPlane(scene3D, new Vector2(100, 100), new Vector3(0, 0, 0), new Vector3(0, 0, 0))
        scene3D.addComponent(BoxGenerator)

        let view = new View3D()
        view.scene = scene3D
        view.camera = mainCamera
        // start render
        Engine3D.startRenderView(view)
    }
}

class BoxGenerator extends ComponentBase {
    // save last time
    private _lastTime: number = performance.now()

    // a simple loop update
    public onUpdate(): void {
        // get current time
        let now: number = performance.now()
        // add a box every 300ms
        if (now - this._lastTime > 300) {
            // add a box
            this._addBox()
            // remove the first box after 500 boxes
            if (this.object3D.entityChildren.length > 500) this.object3D.removeChildByIndex(4)
            // save current time
            this._lastTime = now
        }
    }

    // add a box
    private _addBox(): void {
        const obj = new Object3D()
        let mr = obj.addComponent(MeshRenderer)
        mr.geometry = new BoxGeometry(5, 5, 5)
        mr.material = new LitMaterial()
        mr.material.baseColor = new Color(Math.random(), Math.random(), Math.random(), 1.0)
        obj.localPosition = new Vector3(Math.random() * 70 - 35, 50, Math.random() * 70 - 35)
        obj.localRotation = new Vector3(Math.random() * 360, Math.random() * 360, Math.random() * 360)
        // add a rigidbody with mass 10
        let rigidbody = obj.addComponent(Rigidbody)
        rigidbody.mass = 10
        // add a box collider shape
        let collider = obj.addComponent(ColliderComponent)
        collider.shape = new BoxColliderShape()
        collider.shape.size = new Vector3(5, 5, 5)

        this.object3D.addChild(obj)
    }
}

new Sample_colliders().run()
