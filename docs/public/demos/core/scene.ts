import { Engine3D, Scene3D, Object3D, Camera3D, ForwardRenderJob, GUIHelp, AtmosphericSky} from "@orillusion/core";

async function demo() {
	// initializa engine
	await Engine3D.init();
    GUIHelp.init();
	// 创建 Scene3D，使用默认的 AtmosphericSky 盒子
	let scene3D:Scene3D = new Scene3D();
    // 显示 AtmosphericSky 设置菜单
    scene3D.debugAtomSky();
	// 环境光整体强度
	scene3D.exposure = 1
    // 设置太阳位置
    let sun = scene3D.envMap as AtmosphericSky
    sun.sunX = 0.8;
	
	let cameraObj:Object3D = new Object3D();
	let camera = cameraObj.addComponent(Camera3D);
	camera.perspective(60, window.innerWidth / window.innerHeight, 1, 5000.0);
	scene3D.addChild(cameraObj);
	let renderJob:ForwardRenderJob = new ForwardRenderJob(scene3D);
	Engine3D.startRender(renderJob);
}

demo();