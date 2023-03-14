import {
    Engine3D,
    Vector3,
    Scene3D,
    Object3D,
    Camera3D,
    ForwardRenderJob,
    UnLitMaterial,
    MeshRenderer,
    HoverCameraController,
    PlaneGeometry,
    DirectLight,
    Color
} from "@orillusion/core";

async function demo() {
    await Engine3D.init();
    let scene = new Scene3D();
    let camera = new Object3D();
    scene.addChild(camera)
    let mainCamera = camera.addComponent(Camera3D);
    mainCamera.perspective(60, window.innerWidth / window.innerHeight, 0.1, 10000.0);
    let hc = camera.addComponent(HoverCameraController);
    hc.setCamera(0, 0, 2);

    // 创建2D纹理
    let mat = new UnLitMaterial();
    let texture = await Engine3D.res.loadTexture('https://cdn.orillusion.com/gltfs/cube/material_02.png');
    mat.baseMap = texture;
    mat.roughness = 1;

    // 创建2D平面
    let planeObj = new Object3D();
    let mr = planeObj.addComponent(MeshRenderer);
    mr.geometry = new PlaneGeometry(2, 2, 10, 10, Vector3.Z_AXIS);
    mr.material = mat;
    scene.addChild(planeObj);

    // 添加光照
    let lightObj = new Object3D();
    lightObj.rotationX = -45;
    let light = lightObj.addComponent(DirectLight);
    light.lightColor = new Color(1.0, 1.0, 1.0, 1.0);
    light.intensity = 10;
    scene.addChild(lightObj);

    let renderJob = new ForwardRenderJob(scene);
    Engine3D.startRender(renderJob);
}

demo();



