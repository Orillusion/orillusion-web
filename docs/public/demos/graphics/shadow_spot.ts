import { GUIHelp, Engine3D, Scene3D, Object3D, Camera3D, Vector3, ForwardRenderJob, LitMaterial, BoxGeometry, MeshRenderer, UnLitMaterial, SphereGeometry, DirectLight, PointLight, SpotLight, HoverCameraController, PlaneGeometry } from "@orillusion/core";

async function demo() {
    // 配置 shadow 参数
    Engine3D.setting.shadow.autoUpdate = true;
    Engine3D.setting.shadow.shadowBound = 100;
    Engine3D.setting.shadow.shadowBias = 0.0016;
    Engine3D.setting.shadow.pointShadowBias = 3;
    Engine3D.setting.shadow.type = 'SOFT'

    await Engine3D.init();
    GUIHelp.init();
    let scene3D: Scene3D = new Scene3D();
    let cameraObj: Object3D = new Object3D();
    let camera = cameraObj.addComponent(Camera3D);
    camera.perspective(60, window.innerWidth / window.innerHeight, 1, 5000.0);
    let controller = cameraObj.addComponent(HoverCameraController);
    controller.setCamera(0, -45, 150, new Vector3(0, 0, 0));
    scene3D.addChild(cameraObj);

    //SpotLight 
    {
        let sp = new SphereGeometry(5, 30, 30);

        let obj = new Object3D();
        let light = obj.addComponent(SpotLight);
        scene3D.addChild(obj);
        obj.x = -30;
        obj.y = 15;
        obj.z = 40;
        obj.rotationX = 0;
        obj.rotationY = 145;
        obj.rotationZ = 0;
        light.intensity = 50;
        light.range = 150;
        light.outerAngle = 110;
        light.innerAngle = 30;
        light.castShadow = true;

        light.debug();
        light.debugDraw(true);

    }

    //创建box，用于产生阴影
    {
        let castShadowObj = new Object3D();
        castShadowObj.y = 5
        let mr = castShadowObj.addComponent(MeshRenderer);
        mr.geometry = new BoxGeometry(10, 10, 10);
        mr.material = new LitMaterial();
        mr.castShadow = true;
        scene3D.addChild(castShadowObj);
    }

    //创建一个plane，用于接受阴影
    {
        let receiveShadowObj = new Object3D();
        let mr = receiveShadowObj.addComponent(MeshRenderer);
        mr.geometry = new BoxGeometry(2000, 1, 2000);
        mr.material = new LitMaterial();
        // mr2.material.debug();
        mr.receiveShadow = true;
        scene3D.addChild(receiveShadowObj);
    }
    // 创建渲染任务
    let renderJob: ForwardRenderJob = new ForwardRenderJob(scene3D);
    Engine3D.startRender(renderJob);
}

demo();