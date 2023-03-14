import {
	defaultTexture,
	DepthOfFieldPost,
	DirectLight,
	Engine3D,
	ForwardRenderJob,
	GLTFParser,
	GUIHelp,
	LitMaterial,
	HoverCameraController,
	KelvinUtil,
	MeshRenderer,
	Object3D,
	PlaneGeometry,
	Scene3D,
	SphereGeometry,
	SSR_IS_Kernel,
	CameraUtil,
	webGPUContext,
} from '@orillusion/core';

export class Sample_DepthOfView {
	lightObj: Object3D;
	scene: Scene3D;
	constructor() { }

	async run() {
		Engine3D.setting.gi.enable = true;
		Engine3D.setting.shadow.enable = true;
		Engine3D.setting.shadow.debug = false;
		Engine3D.setting.shadow.shadowBound = 10;
		Engine3D.setting.shadow.shadowBias = -0.001;

		await Engine3D.init({
			renderLoop: () => this.loop(),
		});

		GUIHelp.init();

		this.scene = new Scene3D();
		let camera = CameraUtil.createCamera3DObject(this.scene);
		camera.perspective(60, webGPUContext.aspect, 1, 5000.0);
		let ctrl = camera.object3D.addComponent(HoverCameraController);
		ctrl.setCamera(100, -15, 150);

		await this.initScene(this.scene);

		let renderJob = new ForwardRenderJob(this.scene);
		renderJob.addPost(new DepthOfFieldPost());
		//
		renderJob.debug();

		Engine3D.startRender(renderJob);
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
			lc.intensity = 5;
			scene.addChild(this.lightObj);
		}

		// 加载外部模型文件;
		let minimalObj = await Engine3D.res.loadGltf('https://cdn.orillusion.com/PBR/ToyCar/ToyCar.gltf');
		minimalObj.scaleX = minimalObj.scaleY = minimalObj.scaleZ = 800;
		scene.addChild(minimalObj);

		this.createPlane(scene);
		return true;
	}

	private createPlane(scene: Scene3D) {
		let mat = new LitMaterial();
		mat.baseMap = defaultTexture.grayTexture;
		mat.normalMap = defaultTexture.normalTexture;
		mat.aoMap = defaultTexture.whiteTexture;
		mat.maskMap = defaultTexture.createTexture(32, 32, 255.0, 10.0, 0.0, 1);
		mat.emissiveMap = defaultTexture.blackTexture;
		mat.roughness = 0.1;
		mat.roughness_max = 0.1;
		mat.metallic = 0.0;

		{
			let debugGeo = new PlaneGeometry(2000, 2000);
			let obj: Object3D = new Object3D();
			let mr = obj.addComponent(MeshRenderer);
			mr.material = mat;
			mr.geometry = debugGeo;
			scene.addChild(obj);
		}

		{
			let sphereGeometry = new SphereGeometry(10, 50, 50);
			let obj: Object3D = new Object3D();
			let mr = obj.addComponent(MeshRenderer);
			mr.material = mat;
			mr.geometry = sphereGeometry;
			obj.x = 30;
			obj.y = 10;
			scene.addChild(obj);
		}

		{
			let seeds = SSR_IS_Kernel.createSeeds();
			let sphereGeometry = new SphereGeometry(2, 50, 50);
			for (let i = 0; i < seeds.length; i++) {
				let pt = seeds[i];
				let obj: Object3D = new Object3D();
				let mr = obj.addComponent(MeshRenderer);
				mr.material = mat;
				mr.geometry = sphereGeometry;

				obj.y = pt.z;
				obj.x = pt.x;
				obj.z = pt.y;
				scene.addChild(obj);
			}
		}
	}

	private loop(): void {
	}
}

new Sample_DepthOfView().run();
