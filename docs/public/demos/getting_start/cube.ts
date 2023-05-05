import { Engine3D, Scene3D, Object3D, Camera3D, LitMaterial, BoxGeometry, MeshRenderer, DirectLight, HoverCameraController, Color, Vector3, View3D, AtmosphericComponent } from "@orillusion/core";

async function demo() {
	// initializa engine
	await Engine3D.init();
	// create new scene as root node
	let scene3D:Scene3D = new Scene3D();
	// add an Atmospheric sky enviroment
	let sky = scene3D.addComponent(AtmosphericComponent);
	sky.sunY = 0.6;
	// create camera
	let cameraObj:Object3D = new Object3D();
	let camera = cameraObj.addComponent(Camera3D);
	// adjust camera view
	camera.perspective(60, Engine3D.aspect, 1, 5000.0);
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
	// create a view with target scene and camera
	let view = new View3D();
	view.scene = scene3D;
	view.camera = camera;
	// start render
	Engine3D.startRenderView(view);
}

demo();