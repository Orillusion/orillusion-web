import { Camera3D, defaultTexture, DirectLight, Engine3D, ForwardRenderJob, GUIHelp, LitMaterial, HoverCameraController, KelvinUtil, MeshRenderer, Object3D, PlaneGeometry, Scene3D, SphereGeometry, Time, CameraUtil, webGPUContext, BoxGeometry, GTAOPost, Vector3, TAAPost, SSRPost } from '@orillusion/core';

export class Sample_GTAO {
	lightObj: Object3D;
	scene: Scene3D;
	constructor() { }

	async run() {
		Engine3D.setting.shadow.enable = true;
		Engine3D.setting.shadow.debug = false;
		Engine3D.setting.shadow.shadowBound = 40;
		Engine3D.setting.shadow.shadowBias = 0.0005;
		Engine3D.setting.shadow.autoUpdate = true;
		Engine3D.setting.shadow.updateFrameRate = 1;
		await Engine3D.init({
			renderLoop: () => this.loop(),
		});

		GUIHelp.init();

		this.scene = new Scene3D();
		Camera3D.mainCamera = CameraUtil.createCamera3DObject(this.scene, 'camera');
		Camera3D.mainCamera.perspective(60, webGPUContext.aspect, 1, 5000.0);
		let ctrl = Camera3D.mainCamera.object3D.addComponent(HoverCameraController);
		ctrl.setCamera(100, -15, 40);
		await this.initScene(this.scene);

		let renderJob = new ForwardRenderJob(this.scene);
		renderJob.addPost(new GTAOPost());
		// renderJob.debug();
		Engine3D.startRender(renderJob);

		//
		let data = await Engine3D.res.loadGltf('https://cdn.orillusion.com/PBR/Duck/Duck.gltf');
		this.scene.addChild(data);
		data.scaleX = data.scaleY = data.scaleZ = 0.05;
	}

	async initScene(scene: Scene3D) {
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
			lc.needUpdataShadow = true;
			scene.addChild(this.lightObj);
		}
		this.createPlane(scene);
		return true;
	}

	private sphere: Object3D;

	private createPlane(scene: Scene3D) {
		let mat = new LitMaterial();
		mat.baseMap = defaultTexture.whiteTexture;
		mat.normalMap = defaultTexture.normalTexture;
		mat.aoMap = defaultTexture.whiteTexture;
		mat.maskMap = defaultTexture.createTexture(32, 32, 255.0, 10.0, 0.0, 1);
		mat.emissiveMap = defaultTexture.blackTexture;
		mat.roughness = 0.1;
		mat.roughness_max = 0.1;
		mat.metallic = 0.0;

		{
			let debugGeo = new PlaneGeometry(1000, 1000);
			let obj: Object3D = new Object3D();
			let mr = obj.addComponent(MeshRenderer);
			mr.material = mat;
			mr.geometry = debugGeo;
			scene.addChild(obj);
		}

		{
			let sphereGeometry = new SphereGeometry(5, 50, 50);
			let obj: Object3D = new Object3D();
			let mr = obj.addComponent(MeshRenderer);
			mr.material = mat;
			mr.geometry = sphereGeometry;
			obj.x = 10;
			obj.y = 2;
			scene.addChild(obj);
			this.sphere = obj;
			GUIHelp.add(this, 'runBall');
			GUIHelp.add(this.sphere, 'y', -10, 10, 0.1);
		}
	}

	private runBall: boolean = true;
	private loop(): void {
		if (this.sphere && this.runBall) {
			this.sphere.x = Math.sin(Time.time * 0.001) * 10;
			this.sphere.z = Math.cos(Time.time * 0.001) * 10;
		}
	}
}

new Sample_GTAO().run();