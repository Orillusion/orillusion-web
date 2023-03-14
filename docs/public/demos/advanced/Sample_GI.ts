import { Camera3D, CameraUtil, defaultTexture, DirectLight, Engine3D, ForwardRenderJob, GlobalIlluminationComponent, GUIHelp, HDRBloomPost, LitMaterial, HoverCameraController, KelvinUtil, MeshRenderer, Object3D, PlaneGeometry, Scene3D, SphereGeometry, webGPUContext } from '@orillusion/core';

export class Sample_GI {
	lightObj: Object3D;
	cameraObj: Camera3D;
	scene: Scene3D;
	hover: HoverCameraController;
	constructor() { }

	async run() {
		await Engine3D.init({});
		Engine3D.setting.gi.enable = true;
		Engine3D.setting.gi.debug = true;
		Engine3D.setting.gi.gridYCount = 3;
		Engine3D.setting.gi.gridXCount = 6;
		Engine3D.setting.gi.gridZCount = 6;
		Engine3D.setting.gi.probeSpace = 36;
		Engine3D.setting.gi.offsetX = -4;
		Engine3D.setting.gi.offsetY = 29;
		Engine3D.setting.gi.offsetZ = 7;
		Engine3D.setting.gi.indirectIntensity = 2;
		Engine3D.setting.gi.probeSize = 32;
		Engine3D.setting.gi.octRTSideSize = 32;
		Engine3D.setting.gi.autoRenderProbe = true;

		Engine3D.setting.shadow.shadowBound = 100;
		Engine3D.setting.shadow.shadowBias = 0.00005;
		Engine3D.setting.shadow.debug = true;

		Engine3D.setting.shadow.autoUpdate = true;
		Engine3D.setting.shadow.updateFrameRate = 1;

		Engine3D.setting.render.postProcessing.bloom = {
			enable: true,
			blurX: 4,
			blurY: 4,
			intensity: 0.5,
			brightness: 1.25,
		};
		GUIHelp.init();

		this.scene = new Scene3D();
		let camera = CameraUtil.createCamera3DObject(this.scene);
		camera.perspective(60, webGPUContext.aspect, 1, 5000.0);
		let ctrl = camera.object3D.addComponent(HoverCameraController);
		ctrl.setCamera(-60, -25, 100);

		let renderJob = new ForwardRenderJob(this.scene);
		renderJob.addPost(new HDRBloomPost());

		this.addGIProbes();

		renderJob.debug();
		Engine3D.startRender(renderJob);

		await this.initScene();
	}

	private addGIProbes() {
		let probeObj = new Object3D();
		let component = probeObj.addComponent(GlobalIlluminationComponent);
		this.scene.addChild(probeObj);
	}

	async initScene() {
		/******** light *******/
		{
			this.lightObj = new Object3D();
			this.lightObj.rotationX = 15;
			this.lightObj.rotationY = 110;
			this.lightObj.rotationZ = 0;
			let lc = this.lightObj.addComponent(DirectLight);
			lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
			lc.castShadow = true;
			lc.intensity = 10;
			lc.debug();
			this.scene.addChild(this.lightObj);
		}

		let ball: Object3D;
		{
			let mat = new LitMaterial();
			mat.baseMap = defaultTexture.whiteTexture;
			mat.normalMap = defaultTexture.normalTexture;
			mat.aoMap = defaultTexture.whiteTexture;
			mat.maskMap = defaultTexture.createTexture(32, 32, 255.0, 255.0, 0.0, 1);
			mat.emissiveMap = defaultTexture.blackTexture;
			mat.roughness = 0.5;
			mat.metallic = 0.2;

			let floor = new Object3D();
			let mr = floor.addComponent(MeshRenderer);
			mr.geometry = new PlaneGeometry(2000, 2000);
			mr.material = mat;
			this.scene.addChild(floor);

			ball = new Object3D();
			mr = ball.addComponent(MeshRenderer);
			mr.geometry = new SphereGeometry(6, 20, 20);
			mr.material = mat;
			mat.shaderState.acceptGI = true;
			this.scene.addChild(ball);
			ball.transform.x = -17;
			ball.transform.y = 34;
			ball.transform.z = 23;
		}

		let chair = (await Engine3D.res.loadGltf('https://cdn.orillusion.com/PBR/SheenChair/SheenChair.gltf', { onProgress: (e) => this.onLoadProgress(e), onComplete: (e) => this.onComplete(e) })) as Object3D;
		chair.scaleX = chair.scaleY = chair.scaleZ = 60;
		chair.transform.y = 0;
		this.scene.addChild(chair);

		let Duck = (await Engine3D.res.loadGltf('https://cdn.orillusion.com/PBR/Duck/Duck.gltf', { onProgress: (e) => this.onLoadProgress(e), onComplete: (e) => this.onComplete(e) })) as Object3D;
		Duck.scaleX = Duck.scaleY = Duck.scaleZ = 0.15;
		Duck.transform.y = 0;
		Duck.transform.x = -16;
		Duck.transform.z = 36;
		this.scene.addChild(Duck);

		GUIHelp.addFolder('Move Ball')
		GUIHelp.add(ball.transform, 'x', -80, 80, 1);
		GUIHelp.add(ball.transform, 'z', -80, 80, 1);
		GUIHelp.endFolder();

		GUIHelp.addFolder('Move Duck')
		GUIHelp.add(Duck.transform, 'x', -80, 80, 1);
		GUIHelp.add(Duck.transform, 'z', -80, 80, 1);
		GUIHelp.endFolder();
	}

	onLoadProgress(e) {
		console.log(e);
	}

	onComplete(e) {
		console.log(e);
	}

	renderUpdate() {

	}
}
new Sample_GI().run();
