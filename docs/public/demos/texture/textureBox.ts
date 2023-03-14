import { Camera3D, DirectLight, Engine3D, ForwardRenderJob, GUIHelp, HoverCameraController, KelvinUtil, Object3D, Scene3D, webGPUContext, BitmapTextureCube } from '@orillusion/core';

async function demo() {
    await Engine3D.init();

    let scene = new Scene3D();
    let camera = new Object3D();
    scene.addChild(camera);

    let mainCamera = camera.addComponent(Camera3D);
    mainCamera.perspective(60, webGPUContext.aspect, 1, 2000.0);
    let ctrl = camera.addComponent(HoverCameraController);
    ctrl.setCamera(180, 0, 10);

    let evnMap = new BitmapTextureCube();
    let urls: string[] = [];
    urls.push('https://cdn.orillusion.com/textures/cubemap/skybox_nx.png');
    urls.push('https://cdn.orillusion.com/textures/cubemap/skybox_px.png');
    urls.push('https://cdn.orillusion.com/textures/cubemap/skybox_py.png');
    urls.push('https://cdn.orillusion.com/textures/cubemap/skybox_ny.png');
    urls.push('https://cdn.orillusion.com/textures/cubemap/skybox_nz.png');
    urls.push('https://cdn.orillusion.com/textures/cubemap/skybox_pz.png');
    await evnMap.load(urls);
    scene.envMap = evnMap;
    let renderJob = new ForwardRenderJob(scene);
    Engine3D.startRender(renderJob);
}

demo()