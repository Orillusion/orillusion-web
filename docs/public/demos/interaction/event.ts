import { Engine3D, Scene3D, Vector3, Object3D, Camera3D, View3D, AtmosphericComponent, LitMaterial, MeshRenderer, ComponentBase, CEvent, BoxGeometry } from "@orillusion/core";
import dat from 'https://cdn.skypack.dev/dat.gui';

class UserEventScriptLeft extends ComponentBase {
    private rotation: number = 0;

    private OnRunEvent(e: CEvent) {
        console.log(e.type, e.data);
        let params = e.data;
        console.log(params);
        if (params.direction == 'left') {
            this.rotation = -5;
        } else if (params.direction == 'right') {
            this.rotation = 5;
        }
    }

    private OnStopEvent(e: CEvent) {
        console.log(e.type, e.data);
        this.rotation = 0
    }

    public start() {
        Engine3D.inputSystem.addEventListener("RunEvent", this.OnRunEvent, this);
        Engine3D.inputSystem.addEventListener("StopEvent", this.OnStopEvent, this);
    }

    public onUpdate() {
        this.object3D.transform.rotationY += this.rotation;
    }
}

let scene: Scene3D;
let cameraObj: Object3D;
let camera: Camera3D;
let boxObj: Object3D;

async function init() {
    await Engine3D.init({});
    // 创建场景实例
    scene = new Scene3D();
    scene.addComponent(AtmosphericComponent);
    // 创建相机实例
    cameraObj = new Object3D();
    camera = cameraObj.addComponent(Camera3D);
    // 设置正交相机
    camera.perspective(60, Engine3D.aspect, 1, 5000.0);
    camera.lookAt(new Vector3(0, 5, 15), new Vector3(0, 0, 0));
    // 设置主相机
    scene.addChild(cameraObj);

    // 添加物体
    boxObj = new Object3D();
    // 添加事件处理脚本
    boxObj.addComponent(UserEventScriptLeft);
    let mr: MeshRenderer = boxObj.addComponent(MeshRenderer);
    mr.geometry = new BoxGeometry(3, 3, 3);
    // 设置材质
    mr.material = new LitMaterial();
    // 设置位置
    boxObj.localPosition = new Vector3(0, 0, 0);
    // 添加对象至场景
    scene.addChild(boxObj);

    let view = new View3D();
    view.scene = scene;
    view.camera = camera;
    // start render
    Engine3D.startRenderView(view);
}


async function addGui() {
    const gui = new dat.GUI();
    // Debug
    const debugInfo = {
        leftEvent: (() => {
            let params = { 'direction': 'left' };
            let e = new CEvent("RunEvent", params)
            Engine3D.inputSystem.dispatchEvent(e);
        }),
        rightEvent: (() => {
            let params = { 'direction': 'right' };
            let e = new CEvent("RunEvent", params)
            Engine3D.inputSystem.dispatchEvent(e);
        }),
        stopEvent: (() => {
            let e = new CEvent("StopEvent")
            Engine3D.inputSystem.dispatchEvent(e);
        })

    };

    gui.add(debugInfo, "leftEvent");
    gui.add(debugInfo, "rightEvent");
    gui.add(debugInfo, "stopEvent");
}

async function demo() {
    await init();
    addGui();
}

demo();

