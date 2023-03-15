import { Engine3D, Scene3D, Vector3, Object3D, Camera3D, ForwardRenderJob, LitMaterial, MeshRenderer, BoxColliderShape, Collider, BoxGeometry, ComponentBase, Color, PointerEvent3D, SphereGeometry } from "@orillusion/core";

export default class TouchDemo {
    scene: Scene3D;

    cameraObj: Object3D;

    camera: Camera3D;

    constructor() { }

    async run() {
        console.log('start demo');

        Engine3D.setting.pick.enable = true;
        Engine3D.setting.pick.mode = `bound`;

        await Engine3D.init();

        this.scene = new Scene3D();
        this.cameraObj = new Object3D();
        this.camera = this.cameraObj.addComponent(Camera3D)
        this.scene.addChild(this.cameraObj);
        this.camera.lookAt(new Vector3(0, 0, 10), new Vector3(0, 0, 0));
        this.camera.perspective(60, window.innerWidth / window.innerHeight, 1, 10000.0);

        let box = this.createBox(-2, 0, 0);
        let sphere = this.createSphere(2, 0, 0);

        let renderJob = new ForwardRenderJob(this.scene);
        Engine3D.startRender(renderJob);
        
        // 统一监听点击事件
        Engine3D.pickFire.addEventListener(PointerEvent3D.PICK_CLICK, this.onPick, this);
    }

    createBox(x: number, y: number, z: number) {
        let boxObj = new Object3D();
        boxObj.transform.localPosition = new Vector3(x, y, z);

        let size: number = 2;
        let shape: BoxColliderShape = new BoxColliderShape().setFromCenterAndSize(new Vector3(0, 0, 0), new Vector3(size, size, size));
        //加一个碰撞盒子。
        let collider = boxObj.addComponent(Collider);
        collider.shape = shape;
        // 为对象添 MeshRenderer
        let mr: MeshRenderer = boxObj.addComponent(MeshRenderer);
        // 设置几何体
        mr.geometry = new BoxGeometry(size, size, size);
        // 设置材质
        mr.material = new LitMaterial();
        this.scene.addChild(boxObj);
        return boxObj;
    }

    createSphere(x: number, y: number, z: number){
        let sphereObj = new Object3D();
        sphereObj.transform.localPosition = new Vector3(x, y, z);

        let size: number = 2;
        let shape: BoxColliderShape = new BoxColliderShape().setFromCenterAndSize(new Vector3(0, 0, 0), new Vector3(size, size, size));
        //加一个碰撞盒子。
        let collider = sphereObj.addComponent(Collider);
        collider.shape = shape;
        // 为对象添 MeshRenderer
        let mr: MeshRenderer = sphereObj.addComponent(MeshRenderer);
        // 设置几何体
        mr.geometry = new SphereGeometry(size/2, 20, 20);
        // 设置材质
        mr.material = new LitMaterial();
        this.scene.addChild(sphereObj);
        return sphereObj;
    }

    onPick(e: PointerEvent3D) {
        console.log('onClick:', e);
        let mr: MeshRenderer = e.target.getComponent(MeshRenderer);
        mr.material.baseColor = Color.random();
    }
}
new TouchDemo().run();


