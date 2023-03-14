import {
    BoxColliderShape,
    Camera3D,
    CameraUtil,
    Collider,
    Color,
    defaultTexture,
    DirectLight,
    Engine3D,
    ForwardRenderJob,
    GUIHelp,
    HDRBloomPost,
    LitMaterial,
    HoverCameraController,
    KelvinUtil,
    MeshRenderer,
    Object3D,
    PointerEvent3D,
    Scene3D,

    SphereGeometry,
    Vector3,
    webGPUContext,
} from '@orillusion/core';

export class Sample_MousePick {
    lightObj: Object3D;
    cameraObj: Camera3D;
    scene: Scene3D;
    hover: HoverCameraController;

    constructor() { }

    async run() {
        Engine3D.setting.pickerMode.enable = true;
        Engine3D.setting.pickerMode.mode = `pixel`;
        Engine3D.setting.shadow.debug = false;

        await Engine3D.init({});

        GUIHelp.init();

        this.scene = new Scene3D();
        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, webGPUContext.aspect, 1, 5000.0);

        this.hover = camera.object3D.addComponent(HoverCameraController);
        this.hover.setCamera(-45, -45, 120);

        let wukong = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/wukong/wukong.gltf');
        wukong.transform.y = 30;
        wukong.transform.scaleX = 20;
        wukong.transform.scaleY = 20;
        wukong.transform.scaleZ = 20;
        wukong.forChild((node) => {
            if (node.hasComponent(MeshRenderer)){ 
                node.addComponent(Collider)
            }
        });
        this.scene.addChild(wukong);

        this.initPickObject(this.scene);

        let renderJob = new ForwardRenderJob(this.scene);
        renderJob.addPost(new HDRBloomPost());
        Engine3D.startRender(renderJob);

        // 统一监听鼠标拾取
        Engine3D.pickFire.addEventListener(PointerEvent3D.PICK_UP, this.onUp, this);
        Engine3D.pickFire.addEventListener(PointerEvent3D.PICK_DOWN, this.onDow, this);
        Engine3D.pickFire.addEventListener(PointerEvent3D.PICK_CLICK, this.onPick, this);
        Engine3D.pickFire.addEventListener(PointerEvent3D.PICK_OVER, this.onOver, this);
        Engine3D.pickFire.addEventListener(PointerEvent3D.PICK_OUT, this.onOut, this);
        Engine3D.pickFire.addEventListener(PointerEvent3D.PICK_MOVE, this.onMove, this);
    }

    private initPickObject(scene: Scene3D): void {
        /******** light *******/
        {
            this.lightObj = new Object3D();
            this.lightObj.rotationX = 125;
            this.lightObj.rotationY = 0;
            this.lightObj.rotationZ = 40;
            let lc = this.lightObj.addComponent(DirectLight);
            lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
            lc.castShadow = true;
            lc.intensity = 10;
            lc.debug()
            scene.addChild(this.lightObj);
        }

        let size: number = 9;
        let shape = new BoxColliderShape();
        shape.setFromCenterAndSize(new Vector3(), new Vector3(size, size, size));

        let geometry = new SphereGeometry(size / 2, 20, 20);
        for (let i = 0; i < 10; i++) {
            let obj = new Object3D();
            obj.name = 'sphere ' + i;
            scene.addChild(obj);
            obj.x = (i - 5) * 10;

            let mat = new LitMaterial();
            mat.emissiveMap = defaultTexture.grayTexture;
            mat.emissiveIntensity = 0.0;

            let renderer = obj.addComponent(MeshRenderer);
            renderer.geometry = geometry;
            renderer.material = mat;
            obj.addComponent(Collider);
        }
    }

    private onUp(e: PointerEvent3D) {
        console.log('onUp', e.target.name, e.data.pickInfo)
        let obj = e.target as Object3D;
        let mr = obj.getComponent(MeshRenderer);
        mr.material.baseColor = Color.random()
    }

    private onDow(e: PointerEvent3D) {
        console.log('onDown', e.target.name, e.data.pickInfo)
        let obj = e.target as Object3D;
        let mr = obj.getComponent(MeshRenderer);
        mr.material.baseColor = Color.random()
    }

    private onPick(e: PointerEvent3D) {
        console.log('onPick', e.target.name, e.data.pickInfo)
        let obj = e.target as Object3D;
        let mr = obj.getComponent(MeshRenderer);
        mr.material.baseColor = Color.random()
    }

    private onOver(e: PointerEvent3D) {
        console.log('onOver', e.target.name, e.data.pickInfo)
        let obj = e.target as Object3D;
        let mr = obj.getComponent(MeshRenderer);
        mr.material.baseColor = Color.random()
    }

    private onOut(e: PointerEvent3D) {
        console.log('onOut', e.target.name, e.data.pickInfo)
        let obj = e.target as Object3D;
        let mr = obj.getComponent(MeshRenderer);
        mr.material.baseColor = Color.random()
    }

    private onMove(e: PointerEvent3D) {
        console.log('onMove', e.target.name, e.data.pickInfo)
    }
}
new Sample_MousePick().run();