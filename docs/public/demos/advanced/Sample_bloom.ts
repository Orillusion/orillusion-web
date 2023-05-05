import { BoxGeometry, CameraUtil, Color, View3D, DirectLight, Engine3D, PostProcessingComponent, HDRBloomPost, LitMaterial, HoverCameraController, MeshRenderer, Object3D, Scene3D, webGPUContext, AtmosphericComponent } from '@orillusion/core';

export class Sample_bloom {
	scene: Scene3D;
	constructor() { }

	async run() {
		await Engine3D.init({});

		this.scene = new Scene3D();
		this.scene.addComponent(AtmosphericComponent).sunY = 0.6;

		let mainCamera = CameraUtil.createCamera3DObject(this.scene);
		mainCamera.perspective(60, webGPUContext.aspect, 1, 2000.0);
		let hoverCameraController = mainCamera.object3D.addComponent(HoverCameraController);
		hoverCameraController.setCamera(45, -45, 15);

		await this.initScene();

        let view = new View3D();
        view.scene = this.scene;
        view.camera = mainCamera;
        Engine3D.startRenderView(view);

		let postProcessing = this.scene.addComponent(PostProcessingComponent);
		let bloom = postProcessing.addPost(HDRBloomPost);
	}

	async initScene() {
		// 初始化平行光;
		let ligthObj = new Object3D();
		let dl = ligthObj.addComponent(DirectLight);
		dl.lightColor = new Color(1.0, 0.95, 0.84, 1.0);
		ligthObj.transform.rotationX = 45;
		this.scene.addChild(ligthObj);

		{
			//emisstive
			let lightMat = new LitMaterial();
			lightMat.emissiveMap = Engine3D.res.whiteTexture;
			lightMat.emissiveColor = new Color(1.0, 1.0, 0.0);
			lightMat.emissiveIntensity = 5;

			let obj = new Object3D();
			let mr = obj.addComponent(MeshRenderer);
			mr.geometry = new BoxGeometry(3, 3, 3);
			mr.material = lightMat;
			obj.transform.x = -5;
			this.scene.addChild(obj);
		}

		{
			//emisstive
			let lightMat = new LitMaterial();
			lightMat.emissiveMap = Engine3D.res.whiteTexture;
			lightMat.emissiveColor = new Color(0.0, 1.0, 1.0);
			lightMat.emissiveIntensity = 3;

			let obj = new Object3D();
			let mr = obj.addComponent(MeshRenderer);
			mr.geometry = new BoxGeometry(3, 3, 3);
			mr.material = lightMat;
			obj.transform.x = 0;
			this.scene.addChild(obj);
		}

		{
			let lightMat = new LitMaterial();
			let obj = new Object3D();
			let mr = obj.addComponent(MeshRenderer);
			mr.geometry = new BoxGeometry(3, 3, 3);
			mr.material = lightMat;
			obj.transform.x = 5;
			this.scene.addChild(obj);
		}

		// 加载外部模型文件;
		let minimalObj = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/wukong/wukong.gltf');
		this.scene.addChild(minimalObj);
	}
}
new Sample_bloom().run();