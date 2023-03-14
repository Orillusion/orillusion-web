import { Engine3D, Scene3D, Object3D, Camera3D, ForwardRenderJob, LitMaterial, BoxGeometry, MeshRenderer, DirectLight, HoverCameraController, Color, Vector3 } from "@orillusion/core";

async function demo() {
	// initializa engine
	await Engine3D.init();
	// create new scene as root node
	let scene3D:Scene3D = new Scene3D();
	// create camera
	let cameraObj:Object3D = new Object3D();
	let camera = cameraObj.addComponent(Camera3D);
	// adjust camera view
	camera.perspective(60, window.innerWidth / window.innerHeight, 1, 5000.0);
	// set camera controller
	let controller = cameraObj.addComponent(HoverCameraController);
  	controller.setCamera(0, 0, 15);
	// add camera node
	scene3D.addChild(cameraObj);
	// create light
	let light:Object3D = new Object3D();
	// add direct light component
	let component:DirectLight = light.addComponent(DirectLight);
	// adjust lighting
	light.rotationX = 45;
	light.rotationY = 30;
	component.lightColor = new Color(1.0, 1.0, 1.0, 1.0);
	component.intensity = 1;
	// add light object
	scene3D.addChild(light);
	// create new object
	const obj:Object3D = new Object3D();
	// add MeshRenderer
	let mr:MeshRenderer = obj.addComponent(MeshRenderer);
	// set geometry
	mr.geometry = new BoxGeometry(5, 5, 5);
	// set material
	mr.material = new LitMaterial();
	// set position and rotation
	obj.localPosition = new Vector3(0, 0, 0);
  	obj.localRotation = new Vector3(0, 45, 0);
	// add object
	scene3D.addChild(obj);
	// create new forward rendering job
	let renderJob:ForwardRenderJob = new ForwardRenderJob(scene3D);
	// start rendering
	Engine3D.startRender(renderJob);
}

demo();