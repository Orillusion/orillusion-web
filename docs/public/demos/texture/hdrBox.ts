import { Camera3D, Engine3D, AtmosphericComponent, View3D, HoverCameraController, Object3D, Scene3D, webGPUContext } from "@orillusion/core";

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

    let view = new View3D();
    view.scene = scene;
    view.camera = mainCamera;
    Engine3D.startRenderView(view);

    // [bug]
    scene.addComponent(AtmosphericComponent).sunY = 0.6;
    setTimeout(() => {
        scene.envMap = hdrTextureCube; 
    }, 500);
}

demo()