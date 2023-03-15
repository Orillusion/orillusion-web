import {
    Engine3D,
    Scene3D,
    Object3D,
    Camera3D,
    ForwardRenderJob,
    DirectLight,
    HoverCameraController,
    Color,
    GUIHelp,
    CameraUtil,
    SkeletonAnimation,
    FXAAPost,
    HDRBloomPost,
    Vector3
} from "@orillusion/core";

async function demo() {
    // 初始化引擎环境;
    await Engine3D.init();

    // 启用GUI调试面板;
    GUIHelp.init();

    // 创建场景对象;
    let scene = new Scene3D();
    scene.exposure = 0.3;

    // 初始化相机;
    let mainCamera = CameraUtil.createCamera3DObject(scene);
    Camera3D.mainCamera = mainCamera;
    mainCamera.perspective(60, window.innerWidth / window.innerHeight, 0.1, 10000.0);
    let hc = mainCamera.object3D.addComponent(HoverCameraController);
    hc.setCamera(0, -15, 10, new Vector3(0, 1, 0))
    // 初始化环境图;
    scene.envMap = await Engine3D.res.loadHDRTextureCube('https://cdn.orillusion.com/hdri/1428_v5_low.hdr');
    {
        let ligthObj = new Object3D();
        let dl = ligthObj.addComponent(DirectLight);
        dl.lightColor = new Color(1.0, 0.95, 0.84, 1.0);
        scene.addChild(ligthObj);
        dl.castShadow = true;
        dl.intensity = 1.7;
    }

    // 加载外部模型;
    let soldier = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/glb/Soldier.glb');
    soldier.rotationY = -90;
    soldier.localScale.set(2, 2, 2);
    scene.addChild(soldier);

    // 获取动画控制器;
    let animation = soldier.getComponentsInChild(SkeletonAnimation)[0];

    const runClip = animation.getAnimationClip("Run");
    runClip.addEvent("Begin", 0);
    runClip.addEvent("Mid", runClip.totalTime / 2);
    runClip.addEvent("End", runClip.totalTime);

    animation.events.addEventListener("Begin", (e: AnimationEvent) => {
        console.log("Run-Begin", e.skeletonAnimation.getAnimationClipState('Run').time);
    }, this);
    animation.events.addEventListener("Mid", (e: AnimationEvent) => {
        console.log("Run-Mid", e.skeletonAnimation.getAnimationClipState('Run').time);
    }, this);
    animation.events.addEventListener("End", (e: AnimationEvent) => {
        console.log("Run-End:", e.skeletonAnimation.getAnimationClipState('Run').time);
        e.skeletonAnimation.crossFade("Idle", 0.5);
    }, this);

    GUIHelp.addFolder("Animation-play").open();
    animation.getAnimationClipStates().forEach((clipState, _) => {
        GUIHelp.addButton(clipState.name, () => animation.play(clipState.name));
    });
    GUIHelp.endFolder();


    // 开启渲染任务(前向渲染);
    let forwardRenderJob = new ForwardRenderJob(scene);
    forwardRenderJob.addPost(new FXAAPost());
    forwardRenderJob.addPost(new HDRBloomPost());
    Engine3D.startRender(forwardRenderJob);
}

demo();
