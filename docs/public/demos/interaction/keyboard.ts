import { Engine3D, Scene3D, Vector3, Object3D, Camera3D, ForwardRenderJob, LitMaterial, BoxGeometry, MeshRenderer, ComponentBase, KeyEvent, KeyCode } from "@orillusion/core";


class KeyboardScript extends ComponentBase {
    private front: boolean = false;
    private back: boolean = false;
    private left: boolean = false;
    private right: boolean = false;
    private q: boolean = false;
    private e: boolean = false;

    protected start() {
        Engine3D.inputSystem.addEventListener(KeyEvent.KEY_UP, this.keyUp, this);
        Engine3D.inputSystem.addEventListener(KeyEvent.KEY_DOWN, this.keyDown, this);
    }
    private keyDown(e: KeyEvent) {
        // console.log('keyDown:', e.keyCode);
        if (e.keyCode == KeyCode.Key_W) {
            this.front = true;
        } else if (e.keyCode == KeyCode.Key_S) {
            this.back = true;
        } else if (e.keyCode == KeyCode.Key_A) {
            this.left = true;
        } else if (e.keyCode == KeyCode.Key_D) {
            this.right = true;
        } else if (e.keyCode == KeyCode.Key_Q) {
            this.q = true;
        } else if (e.keyCode == KeyCode.Key_E) {
            this.e = true;
        }

    }
    private keyUp(e: KeyEvent) {
        // console.log('keyUp:', e.keyCode);
        let transform = this.object3D.transform;
        console.log(transform.x, transform.y, transform.z, transform.rotationX);
        if (e.keyCode == KeyCode.Key_W) {
            this.front = false;
        } else if (e.keyCode == KeyCode.Key_S) {
            this.back = false;
        } else if (e.keyCode == KeyCode.Key_A) {
            this.left = false;
        } else if (e.keyCode == KeyCode.Key_D) {
            this.right = false;
        } else if (e.keyCode == KeyCode.Key_Q) {
            this.q = false;
        } else if (e.keyCode == KeyCode.Key_E) {
            this.e = false;
        } else {
            transform.x = 0;
            transform.y = 0;
            transform.z = 0;
            transform.rotationX = 0;
            console.log(transform.x, transform.y, transform.z, transform.rotationX);
        }
    }


    update() {
        if (!this.enable) return;

        let transform = this.object3D.transform;
        if (this.front)
            transform.z -= 1;
        if (this.back)
            transform.z += 1;
        if (this.left)
            transform.x -= 1;
        if (this.right)
            transform.x += 1;
        if (this.q)
            transform.rotationX -= 5;
        if (this.e)
            transform.rotationX += 5
    }
}

let scene: Scene3D;
let cameraObj: Object3D;
let camera: Camera3D;
let boxObj: Object3D;

async function init() {
    await Engine3D.init({});

    // 创建场景实例
    scene = new Scene3D();

    // 创建相机实例
    cameraObj = new Object3D();
    camera = cameraObj.addComponent(Camera3D);
    // 设置正交相机
    camera.perspective(60, window.innerWidth / window.innerHeight, 1, 5000.0);
    camera.lookAt(new Vector3(0, 5, 15), new Vector3(0, 0, 0));

    // 设置主相机
    Camera3D.mainCamera = camera;
    scene.addChild(cameraObj);

    // 添加物体
    boxObj = new Object3D();
    boxObj.addComponent(KeyboardScript);
    let mr: MeshRenderer = boxObj.addComponent(MeshRenderer);
    mr.geometry = new BoxGeometry(3, 3, 3);
    // 设置材质
    mr.material = new LitMaterial();
    // 设置位置
    boxObj.localPosition = new Vector3(0, 0, 0);
    // 添加对象至场景
    scene.addChild(boxObj);

    //进行前向渲染
    let renderJob = new ForwardRenderJob(scene);
    // 开始执行渲染
    Engine3D.startRender(renderJob);
}

init();



