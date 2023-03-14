import {
	Camera3D,
	defaultTexture,
	DirectLight,
	Engine3D,
	ForwardRenderJob,
	GUIHelp,
	LitMaterial,
	HoverCameraController,
	KelvinUtil,
	MeshRenderer,
	Object3D,
	PlaneGeometry,
	Scene3D,
	SphereGeometry,
	Time,
	CameraUtil,
	webGPUContext,
	BoxGeometry,
	GTAOPost,
	Vector3,
	TAAPost,
	SSRPost,
	OutlinePost,
	outlinePostManager,
	Color,
} from '@orillusion/core';

export class Sample_Outline {
	lightObj: Object3D;
	scene: Scene3D;

	constructor() { }

	async run() {
		Engine3D.setting.gi.enable = true;
		Engine3D.setting.gi.indirectIntensity = 5;
		Engine3D.setting.shadow.debug = false;
		Engine3D.setting.shadow.enable = false;
		Engine3D.setting.shadow.shadowBias = 0.002;
		Engine3D.setting.render.postProcessing.taa.debug = false;
		Engine3D.setting.render.postProcessing.gtao.debug = false;
		await Engine3D.init();

		GUIHelp.init();

		this.scene = new Scene3D();
		Camera3D.mainCamera = CameraUtil.createCamera3DObject(this.scene, 'camera');
		Camera3D.mainCamera.perspective(60, webGPUContext.aspect, 1, 2000.0);
		let ctrl = Camera3D.mainCamera.object3D.addComponent(HoverCameraController);
		ctrl.setCamera(180, -45, 15);

		await this.initScene(this.scene);

		let renderJob = new ForwardRenderJob(this.scene);
		renderJob.addPost(new TAAPost());
		renderJob.addPost(new GTAOPost());
		renderJob.addPost(new OutlinePost());
		Engine3D.startRender(renderJob);

		GUIHelp.addButton('Outline Button (click me)', () => {
			this.selectBall();
		});

		this.selectBall();
	}

	private selectBall(): void {
		outlinePostManager.setOutlineList([[this.nextSphere()], [this.nextSphere()], [this.nextSphere()]], [new Color(1, 0.2, 0, 1), new Color(0.2, 1, 0), new Color(0.2, 0, 1)]);
	}

	async initScene(scene: Scene3D) {
		/******** light *******/
		{
			this.lightObj = new Object3D();
			this.lightObj.x = 0;
			this.lightObj.y = 30;
			this.lightObj.z = -40;
			this.lightObj.rotationX = 45;
			this.lightObj.rotationY = 0;
			this.lightObj.rotationZ = 45;
			let lc = this.lightObj.addComponent(DirectLight);
			lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
			lc.intensity = 10;
			scene.addChild(this.lightObj);
		}
		this.createPlane(scene);

		return true;
	}

	private sphereList: Object3D[] = [];
	private sphereIndex = 0;

	private nextSphere(): Object3D {
		this.sphereIndex++;
		if (this.sphereIndex >= this.sphereList.length) {
			this.sphereIndex = 1;
		}

		return this.sphereList[this.sphereIndex];
	}

	private createPlane(scene: Scene3D) {
		let mat = new LitMaterial();
		mat.baseMap = defaultTexture.whiteTexture;
		mat.normalMap = defaultTexture.normalTexture;
		mat.aoMap = defaultTexture.whiteTexture;
		mat.emissiveMap = defaultTexture.blackTexture;
		mat.roughness = 0.5;
		mat.roughness_max = 0.1;
		mat.metallic = 0.5;

		{
			let debugGeo = new PlaneGeometry(1000, 1000);
			let obj: Object3D = new Object3D();
			let mr = obj.addComponent(MeshRenderer);
			mr.material = mat;
			mr.geometry = debugGeo;
			scene.addChild(obj);
		}

		let sphereGeometry = new SphereGeometry(1, 50, 50);
		for (let i = 0; i < 10; i++) {
			let obj: Object3D = new Object3D();
			let mr = obj.addComponent(MeshRenderer);
			mr.material = mat;
			mr.geometry = sphereGeometry;
			obj.x = 2;
			obj.y = 2;

			let angle = (2 * Math.PI * i) / 10;
			obj.x = Math.sin(angle) * 2;
			obj.z = Math.cos(angle) * 2;
			scene.addChild(obj);
			this.sphereList.push(obj);
		}
	}
}

new Sample_Outline().run();