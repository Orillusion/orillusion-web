import {
    Engine3D, Scene3D, CameraUtil, HoverCameraController, Object3D, DirectLight, Color, SkeletonAnimationComponent, AtmosphericComponent, View3D
} from "@orillusion/core";

async function demo() {
    // 初始化引擎环境;
    await Engine3D.init({});

    // 创建场景对象;
    let scene = new Scene3D();

    // 初始化相机;
    let mainCamera = CameraUtil.createCamera3DObject(scene);
    mainCamera.perspective(60, Engine3D.aspect, 0.1, 10000.0);
    mainCamera.object3D.addComponent(HoverCameraController);

    // 初始化环境图;
    // let envMap = await Engine3D.res.loadHDRTextureCube('https://cdn.orillusion.com/hdri/1428_v5_low.hdr');
    // scene.envMap = envMap;

    // 初始化场景;
    let ligthObj = new Object3D();
    let dl = ligthObj.addComponent(DirectLight);
    dl.lightColor = new Color(1.0, 0.95, 0.84, 1.0);
    scene.addChild(ligthObj);
    dl.castShadow = true;
    dl.intensity = 1.7;

    // 加载外部模型;
    let cesiumMan = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/glb/CesiumMan.glb');
    let cesiumMan_skeleton = cesiumMan.getChildByName("Cesium_Man0") as Object3D;
    cesiumMan_skeleton.localScale.set(20, 20, 20);
    cesiumMan_skeleton.localPosition.x = 30;
    cesiumMan_skeleton.rotationX = -90;
    scene.addChild(cesiumMan_skeleton);

    // 获取动画控制器;
    var cesiumManAnimator = cesiumMan_skeleton.getComponentsInChild(SkeletonAnimationComponent)[0];
    cesiumManAnimator.play('anim_0', 1);

    // clone
    for (let i = 0; i < 100; i++) {
        let cesiumMan_clone = cesiumMan.clone();
        cesiumMan_clone.localPosition.set(-100 + Math.random() * 200, 0, -100 + Math.random() * 200);
        scene.addChild(cesiumMan_clone);
    }

    scene.addComponent(AtmosphericComponent).sunY = 0.6;

    // create a view with target scene and camera
    let view = new View3D();
    view.scene = scene;
    view.camera = mainCamera;
    // start render
    Engine3D.startRenderView(view);

    // let postProcessing = scene.addComponent(PostProcessingComponent);
    // postProcessing.addPost(FXAAPost);
    // postProcessing.addPost(HDRBloomPost);
}

demo();
