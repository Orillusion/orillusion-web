import { Engine3D, Scene3D, Object3D, Camera3D, AtmosphericComponent, View3D} from "@orillusion/core";

async function demo() {
	// initializa engine
	await Engine3D.init();
	// 创建 Scene3D，使用默认的 AtmosphericSky 盒子
	let scene3D:Scene3D = new Scene3D();
	// 环境光整体强度
	scene3D.exposure = 1;

	// add an Atmospheric sky enviroment
	let sky = scene3D.addComponent(AtmosphericComponent);
    // 设置太阳位置
    sky.sunX = 0.8;
	
	let cameraObj:Object3D = new Object3D();
	let camera = cameraObj.addComponent(Camera3D);
	camera.perspective(60, window.innerWidth / window.innerHeight, 1, 5000.0);
	scene3D.addChild(cameraObj);
	// create a view with target scene and camera
	let view = new View3D();
	view.scene = scene3D;
	view.camera = camera;
	// start render
	Engine3D.startRenderView(view);
}

demo();