import {
    Engine3D,
    Vector3,
    Scene3D,
    Object3D,
    Camera3D,
    ForwardRenderJob,
    MeshRenderer,
    HoverCameraController,
    PlaneGeometry,
    GUIHelp
} from "@orillusion/core";

import { VideoTexture,VideoMaterial } from "@orillusion/media-extention"

async function demo() {
    await Engine3D.init();
    GUIHelp.init();
    let scene = new Scene3D();
    let camera = new Object3D();
    scene.addChild(camera)
    let mainCamera = camera.addComponent(Camera3D);
    mainCamera.perspective(60, window.innerWidth / window.innerHeight, 0.1, 10000.0);
    let hc = camera.addComponent(HoverCameraController);
    hc.setCamera(0, 0, 2);

    // 创建视频纹理
    let videoTexture = new VideoTexture();
    await videoTexture.load('https://cdn.orillusion.com/videos/bunny.mp4')
    // 创建视频材质
    let mat = new VideoMaterial();
    mat.baseMap = videoTexture;
    mat.roughness = 1;
    mat.debug();

    // 创建2D平面
    let planeObj = new Object3D();
    let mr = planeObj.addComponent(MeshRenderer);
    mr.geometry = new PlaneGeometry(2, 2, 10, 10, Vector3.Z_AXIS);
    mr.material = mat;
    scene.addChild(planeObj);

    let renderJob = new ForwardRenderJob(scene);
    Engine3D.startRender(renderJob);
}

demo();



