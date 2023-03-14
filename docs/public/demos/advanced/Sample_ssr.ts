import {
	Camera3D,
	defaultTexture,
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
	SSRPost,
	SSR_IS_Kernel,
	Time,
	CameraUtil,
	webGPUContext,
	GTAOPost,
	HDRBloomPost,
} from '@orillusion/core';

export class Sample_SSR {
	lightObj: Object3D;
	scene: Scene3D;
	mats: any[];
	constructor() { }

	async run() {
		Engine3D.setting.shadow.enable = false;
		Engine3D.setting.shadow.shadowBound = 5;
		Engine3D.setting.shadow.shadowBias = 0.0008;
		Engine3D.setting.shadow.debug = false;
		Engine3D.setting.render.postProcessing.taa.debug = false;
		Engine3D.setting.render.postProcessing.gtao.debug = false;
		Engine3D.setting.render.postProcessing.bloom.debug = false;
		await Engine3D.init({
			renderLoop: () => this.loop(),
		});

		GUIHelp.init();

		this.scene = new Scene3D();
		Camera3D.mainCamera = CameraUtil.createCamera3DObject(this.scene, 'camera');
		Camera3D.mainCamera.perspective(60, webGPUContext.aspect, 1, 2000.0);
		let ctrl = Camera3D.mainCamera.object3D.addComponent(HoverCameraController);
		ctrl.setCamera(180, -5, 60);
		await this.initScene(this.scene);

		let renderJob = new ForwardRenderJob(this.scene);
		renderJob.addPost(new GTAOPost());
		renderJob.addPost(new SSRPost());
		// 
		renderJob.debug();

		Engine3D.startRender(renderJob);
	}

	async initScene(scene: Scene3D) {
		/******** light *******/
		{
			this.lightObj = new Object3D();
			let lc = this.lightObj.addComponent(DirectLight);
			lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
			lc.intensity = 20;
			scene.addChild(this.lightObj);
		}

		// 加载外部模型文件;
		let minimalObj = await Engine3D.res.loadGltf('https://cdn.orillusion.com/PBR/ToyCar/ToyCar.gltf');
		minimalObj.scaleX = minimalObj.scaleY = minimalObj.scaleZ = 800;
		scene.addChild(minimalObj);

		this.createPlane(scene);
		return true;
	}


	private sphere: Object3D;

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
			let debugGeo = new PlaneGeometry(200, 200);
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
			this.sphere = obj;
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
		if (this.sphere) {
			this.sphere.x = Math.sin(Time.time * 0.0001) * 30;
			this.sphere.z = Math.cos(Time.time * 0.0001) * 30;
		}
	}
}

new Sample_SSR().run();