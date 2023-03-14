import { Engine3D, Scene3D, Object3D, Camera3D, Vector3, HoverCameraController, FlyCameraController, FirstPersonCameraController, ThirdPersonCameraController, ForwardRenderJob, LitMaterial, BoxGeometry, MeshRenderer } from "@orillusion/core";

let camera: Camera3D;
let cameraObj: Object3D;
let obj: Object3D;

async function createCube(name: string): Object3D {
    const obj: Object3D = new Object3D();
    obj.name = name;
    obj.x = 0;
    obj.y = 0;
    obj.z = -300;
    // 为对象添 MeshRenderer
    let mr: MeshRenderer = obj.addComponent(MeshRenderer);
    // 设置几何体
    mr.geometry = new BoxGeometry(50, 50, 50);
    // 设置材质
    mr.material = new LitMaterial();
    return obj;
}

async function initCamera() {
    //初始化引擎
    await Engine3D.init({});
    // 新建场景根节点
    let scene3D: Scene3D = new Scene3D();
    cameraObj = new Object3D();
    camera = cameraObj.addComponent(Camera3D);
    camera.perspective(60, window.innerWidth / window.innerHeight, 0.1, 10000.0);
    cameraObj.addComponent(HoverCameraController);
    camera.lookAt(new Vector3(0, 0, -350), new Vector3(0, 0, 0));
    scene3D.addChild(cameraObj);

    obj = await createCube("cube");

    scene3D.addChild(obj);

    // 新建前向渲染业务
    let renderJob: ForwardRenderJob = new ForwardRenderJob(scene3D);
    // 开始渲染
    Engine3D.startRender(renderJob);

}

async function clearComponent() {
    cameraObj.removeComponent(HoverCameraController);
    cameraObj.removeComponent(FlyCameraController);
    cameraObj.removeComponent(FirstPersonCameraController);
    cameraObj.removeComponent(ThirdPersonCameraController);
}

async function changeController(type: string) {
    console.log("changeController ", type);

    clearComponent();

    if (type == 'hover') {
        cameraObj.addComponent(HoverCameraController);
    } else if (type == 'fly') {
        cameraObj.addComponent(FlyCameraController);
    } else if (type == 'first') {
        let cameraController = cameraObj.addComponent(FirstPersonCameraController);
        cameraController.focus = obj;
    }
    else if (type == 'third') {
        let cameraController = cameraObj.addComponent(ThirdPersonCameraController);
        cameraController.focus = obj;

    } else {
        console.error('error type');
    }

}

async function initGUI() {

    let container = document.createElement("div");
    container.style['z-index'] = '10';
    container.style['position'] = 'fixed';
    container.style['right'] = '10px';

    let select = document.createElement('select');
    select.options[0] = new Option("HoverCameraController", "hover");
    select.options[1] = new Option("FlyCameraController", "fly");
    select.options[2] = new Option("FirstPersonCameraController", "first");
    select.options[3] = new Option("ThirdPersonCameraController", "third");
    select.style['color'] = 'white';
    select.style['background'] = 'black';
    select.onchange = function (e) {
        changeController(e.target.value as string);
    }

    container.appendChild(select);
    document.body.appendChild(container)

}

async function start() {
    initGUI();
    initCamera();
}

start();

