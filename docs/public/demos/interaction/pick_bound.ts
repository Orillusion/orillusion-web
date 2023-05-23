import { Engine3D, Scene3D, Vector3, Object3D, AtmosphericComponent, Camera3D, View3D, LitMaterial, MeshRenderer, BoxColliderShape, ColliderComponent, BoxGeometry, ComponentBase, Color, PointerEvent3D, SphereGeometry } from '@orillusion/core'

export default class TouchDemo {
    scene: Scene3D

    cameraObj: Object3D

    camera: Camera3D

    constructor() {}

    async run() {
        console.log('start demo')
        // enable pick and use bound mode
        Engine3D.setting.pick.enable = true
        Engine3D.setting.pick.mode = `bound`

        await Engine3D.init()

        this.scene = new Scene3D()
        this.scene.addComponent(AtmosphericComponent)
        this.cameraObj = new Object3D()
        this.camera = this.cameraObj.addComponent(Camera3D)
        this.scene.addChild(this.cameraObj)
        this.camera.lookAt(new Vector3(0, 0, 10), new Vector3(0, 0, 0))
        this.camera.perspective(60, Engine3D.aspect, 1, 10000.0)

        let box = this.createBox(-2, 0, 0)
        let sphere = this.createSphere(2, 0, 0)

        let view = new View3D()
        view.scene = this.scene
        view.camera = this.camera
        // start render
        Engine3D.startRenderView(view)

        // listen all pick_click events
        view.pickFire.addEventListener(PointerEvent3D.PICK_CLICK, this.onPick, this)
    }

    createBox(x: number, y: number, z: number) {
        let boxObj = new Object3D()
        boxObj.transform.localPosition = new Vector3(x, y, z)

        let size: number = 2
        let shape: BoxColliderShape = new BoxColliderShape().setFromCenterAndSize(new Vector3(0, 0, 0), new Vector3(size, size, size))
        // add a box collider
        let collider = boxObj.addComponent(ColliderComponent)
        collider.shape = shape
        let mr: MeshRenderer = boxObj.addComponent(MeshRenderer)
        mr.geometry = new BoxGeometry(size, size, size)
        mr.material = new LitMaterial()
        this.scene.addChild(boxObj)
        return boxObj
    }

    createSphere(x: number, y: number, z: number) {
        let sphereObj = new Object3D()
        sphereObj.transform.localPosition = new Vector3(x, y, z)

        let size: number = 2
        let shape: BoxColliderShape = new BoxColliderShape().setFromCenterAndSize(new Vector3(0, 0, 0), new Vector3(size, size, size))
        // add a box collider
        let collider = sphereObj.addComponent(ColliderComponent)
        collider.shape = shape
        let mr: MeshRenderer = sphereObj.addComponent(MeshRenderer)
        mr.geometry = new SphereGeometry(size / 2, 20, 20)
        mr.material = new LitMaterial()
        this.scene.addChild(sphereObj)
        return sphereObj
    }

    onPick(e: PointerEvent3D) {
        console.log('onClick:', e)
        let mr: MeshRenderer = e.target.getComponent(MeshRenderer)
        mr.material.baseColor = Color.random()
    }
}
new TouchDemo().run()
