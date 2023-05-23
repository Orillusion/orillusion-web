import { Engine3D, Scene3D, Vector3, Object3D, AtmosphericComponent, Camera3D, View3D, LitMaterial, BoxGeometry, MeshRenderer, ComponentBase, KeyEvent, KeyCode } from '@orillusion/core'

class KeyboardScript extends ComponentBase {
    private front: boolean = false
    private back: boolean = false
    private left: boolean = false
    private right: boolean = false
    private q: boolean = false
    private e: boolean = false

    public start() {
        Engine3D.inputSystem.addEventListener(KeyEvent.KEY_UP, this.keyUp, this)
        Engine3D.inputSystem.addEventListener(KeyEvent.KEY_DOWN, this.keyDown, this)
    }
    private keyDown(e: KeyEvent) {
        // console.log('keyDown:', e.keyCode);
        if (e.keyCode == KeyCode.Key_W) {
            this.front = true
        } else if (e.keyCode == KeyCode.Key_S) {
            this.back = true
        } else if (e.keyCode == KeyCode.Key_A) {
            this.left = true
        } else if (e.keyCode == KeyCode.Key_D) {
            this.right = true
        } else if (e.keyCode == KeyCode.Key_Q) {
            this.q = true
        } else if (e.keyCode == KeyCode.Key_E) {
            this.e = true
        }
    }
    private keyUp(e: KeyEvent) {
        // console.log('keyUp:', e.keyCode);
        let transform = this.object3D.transform
        console.log(transform.x, transform.y, transform.z, transform.rotationX)
        if (e.keyCode == KeyCode.Key_W) {
            this.front = false
        } else if (e.keyCode == KeyCode.Key_S) {
            this.back = false
        } else if (e.keyCode == KeyCode.Key_A) {
            this.left = false
        } else if (e.keyCode == KeyCode.Key_D) {
            this.right = false
        } else if (e.keyCode == KeyCode.Key_Q) {
            this.q = false
        } else if (e.keyCode == KeyCode.Key_E) {
            this.e = false
        } else {
            transform.x = 0
            transform.y = 0
            transform.z = 0
            transform.rotationX = 0
            console.log(transform.x, transform.y, transform.z, transform.rotationX)
        }
    }

    public onUpdate() {
        if (!this.enable) return

        let transform = this.object3D.transform
        if (this.front) transform.z -= 1
        if (this.back) transform.z += 1
        if (this.left) transform.x -= 1
        if (this.right) transform.x += 1
        if (this.q) transform.rotationX -= 5
        if (this.e) transform.rotationX += 5
    }
}

let scene: Scene3D
let cameraObj: Object3D
let camera: Camera3D
let boxObj: Object3D

await Engine3D.init()

scene = new Scene3D()
scene.addComponent(AtmosphericComponent)

cameraObj = new Object3D()
camera = cameraObj.addComponent(Camera3D)
camera.perspective(60, Engine3D.aspect, 1, 5000.0)
camera.lookAt(new Vector3(0, 5, 15), new Vector3(0, 0, 0))

scene.addChild(cameraObj)

boxObj = new Object3D()
boxObj.addComponent(KeyboardScript)
let mr: MeshRenderer = boxObj.addComponent(MeshRenderer)
mr.geometry = new BoxGeometry(3, 3, 3)
mr.material = new LitMaterial()
boxObj.localPosition = new Vector3(0, 0, 0)
scene.addChild(boxObj)

let view = new View3D()
view.scene = scene
view.camera = camera
// start render
Engine3D.startRenderView(view)
