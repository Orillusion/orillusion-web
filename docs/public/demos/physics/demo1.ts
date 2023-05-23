import { BoxColliderShape, BoxGeometry, Camera3D, AtmosphericComponent, ColliderComponent, Color, DirectLight, Engine3D, View3D, LitMaterial, HoverCameraController, MeshRenderer, Object3D, PlaneGeometry, Scene3D, Vector2, Vector3 } from '@orillusion/core'
import { Physics, Rigidbody } from '@orillusion/physics'

export class Sample_box {
    async run() {
        await Physics.init()
        // Init Engine3D
        await Engine3D.init({
            canvasConfig: { devicePixelRatio: 1 },
            renderLoop: () => {
                if (Physics.isInited) {
                    Physics.update()
                }
            }
        })
        let scene3D = new Scene3D()
        scene3D.addComponent(AtmosphericComponent)
        let cameraObj = new Object3D()
        let mainCamera = cameraObj.addComponent(Camera3D)
        mainCamera.perspective(60, Engine3D.aspect, 1, 5000.0)
        let controller = mainCamera.object3D.addComponent(HoverCameraController)
        controller.setCamera(45, -15, 200, new Vector3(0, 50, 0))
        scene3D.addChild(cameraObj)

        let light: Object3D = new Object3D()
        let component = light.addComponent(DirectLight)
        light.rotationX = 45
        light.rotationY = 30
        component.lightColor = new Color(1.0, 1.0, 1.0, 1.0)
        component.intensity = 20
        scene3D.addChild(light)

        this.addPlane(scene3D, new Vector2(100, 100), new Vector3(0, 0, 0), new Vector3(0, 0, 0))
        const obj = new Object3D()
        let mr = obj.addComponent(MeshRenderer)
        mr.geometry = new BoxGeometry(5, 5, 5)
        mr.material = new LitMaterial()
        mr.material.baseColor = new Color(Math.random(), Math.random(), Math.random(), 1.0)
        obj.y = 100
        obj.rotationX = Math.random() * 360
        // add a Rigidbody with mass to the box
        let rigidbody = obj.addComponent(Rigidbody)
        rigidbody.mass = 10
        // add a box collider shape to the box
        let collider = obj.addComponent(ColliderComponent)
        collider.shape = new BoxColliderShape()
        collider.shape.size = new Vector3(5, 5, 5)
        scene3D.addChild(obj)

        let view = new View3D()
        view.scene = scene3D
        view.camera = mainCamera
        // start render
        Engine3D.startRenderView(view)
    }
    addPlane(scene: Scene3D, size: Vector2, pos: Vector3, rot: Vector3) {
        const obj = new Object3D()
        let mr = obj.addComponent(MeshRenderer)
        mr.geometry = new PlaneGeometry(size.x, size.y)
        mr.material = new LitMaterial()
        mr.material.baseColor = new Color(0.04, 0.42, 0.45, 1)
        obj.localPosition = pos
        obj.localRotation = rot
        // add a Rigidbody with no mass, static body
        let rigidbody = obj.addComponent(Rigidbody)
        rigidbody.mass = 0
        // add a box collider shape with small y value
        let collider = obj.addComponent(ColliderComponent)
        collider.shape = new BoxColliderShape()
        collider.shape.size = new Vector3(size.x, 0.1, size.y)
        scene.addChild(obj)
    }
}

new Sample_box().run()
