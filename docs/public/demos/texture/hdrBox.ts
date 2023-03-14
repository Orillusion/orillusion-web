import { Camera3D, DirectLight, Engine3D, ForwardRenderJob, HoverCameraController, Object3D, Scene3D, webGPUContext, GUIHelp } from "@orillusion/core";

async function demo() {
    await Engine3D.init();

    let scene = new Scene3D();
    let camera = new Object3D();
    scene.addChild(camera);

    let mainCamera = camera.addComponent(Camera3D)
    mainCamera.perspective(60, webGPUContext.aspect, 1, 2000.0);
    let ctrl = camera.addComponent(HoverCameraController);
    ctrl.setCamera(180, 0, 10);

    let hdrTextureCube = await Engine3D.res.loadHDRTextureCube('https://cdn.orillusion.com/hdri/T_Panorama05_HDRI.HDR');
    scene.envMap = hdrTextureCube;

    let renderJob = new ForwardRenderJob(scene);
    Engine3D.startRender(renderJob);
}

demo()