import {
    Engine3D, Vector3, Scene3D, Object3D, Camera3D, MeshRenderer, HoverCameraController, PlaneGeometry, View3D
} from "@orillusion/core";

import { ImageMaterial } from "@orillusion/media-extention"

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
    let texture = await Engine3D.res.loadTexture('https://cdn.orillusion.com/gltfs/cube/material_02.png');
    // 创建图片材质
    let mat = new ImageMaterial();
    mat.baseMap = texture;
    // mat.debug();

    // 创建2D平面
    let planeObj = new Object3D();
    let mr = planeObj.addComponent(MeshRenderer);
    mr.geometry = new PlaneGeometry(2, 2, 10, 10, Vector3.Z_AXIS);
    mr.material = mat;
    scene.addChild(planeObj);

    let view = new View3D();
    view.scene = scene;
    view.camera = mainCamera;
    // start render
    Engine3D.startRenderView(view);
}

demo();



