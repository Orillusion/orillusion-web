import { CameraUtil, HoverCameraController, View3D, DirectLight, AtmosphericComponent, Scene3D, Object3D, LitMaterial, Engine3D, BoxGeometry, MeshRenderer, Vector3, PlaneGeometry, Color, SphereGeometry } from "@orillusion/core";
import { Physics, Rigidbody, BodyType, CollisionShapeUtil } from "@orillusion/physics-rapier";

class Sample_Rigidbody {
    engine!: Engine3D;
    scene!: Scene3D;
    materials!: LitMaterial[];
    boxGeometry!: BoxGeometry;

    async run() {
        await Physics.init();

        const engine = this.engine = await Engine3D.init({
            renderLoop: () => Physics.update(),
            setting: {
                shadow: {
                    autoUpdate: true,
                    updateFrameRate: 1,
                    shadowSize: 2048,
                },
            },
        });

        this.scene = new Scene3D();

        // Setup camera
        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, this.engine.aspect, 0.1, 800.0);

        let hoverCtrl = camera.object3D.addComponent(HoverCameraController);
        hoverCtrl.setCamera(0, -25, 100);
        hoverCtrl.dragSmooth = 4;

        // Create directional light
        let lightObj3D = new Object3D();
        lightObj3D.localRotation = new Vector3(-35, -143, 92);

        let light = lightObj3D.addComponent(DirectLight);
        light.lightColor = Color.COLOR_WHITE;
        light.castShadow = true;
        light.enableCSM = true;
        light.intensity = 2.2;
        this.scene.addChild(light.object3D);

        // init sky
        let atmosphericSky = this.scene.addComponent(AtmosphericComponent);
        atmosphericSky.sunY = 0.6;

        await this.initScene(this.scene);

        let view = new View3D();
        view.camera = camera;
        view.scene = this.scene;
        engine.startRenderView(view);
    }

    async initScene(scene: Scene3D) {
        this.initMaterials();
        this.createGround();
        this.dropSphere();

        let interval = setInterval(() => {
            this.addRandomBox();
            if (scene.entityChildren.length > 200) clearInterval(interval);
        }, 100);
    }

    private initMaterials() {
        this.materials = [];
        for (let i = 0; i < 20; i++) {
            const mat = new LitMaterial();
            mat.baseColor = new Color(Math.random(), Math.random(), Math.random(), 1.0);
            mat.metallic = Math.min(Math.random() * 0.1 + 0.2, 1.0);
            mat.roughness = Math.min(Math.random() * 0.5, 1.0);
            this.materials.push(mat);
        }
    }

    private get randomMaterial(): LitMaterial {
        return this.materials[Math.floor(this.materials.length * Math.random())];
    }

    private createGround() {
        const floorMat = new LitMaterial();
        floorMat.baseMap = this.engine.res.grayTexture;
        floorMat.roughness = 0.85;
        floorMat.metallic = 0.01;

        const floor = new Object3D();
        const renderer = floor.addComponent(MeshRenderer);
        renderer.castShadow = true;
        renderer.receiveShadow = true;
        renderer.geometry = new PlaneGeometry(500, 500, 1, 1);
        renderer.material = floorMat;

        const rb = floor.addComponent(Rigidbody);
        rb.bodyType = BodyType.Static;
        rb.shape = CollisionShapeUtil.createPlaneShape(250, 0.05);
        rb.friction = 1.0;

        this.scene.addChild(floor);
    }

    private dropSphere() {
        const sphere = new Object3D();
        const mr = sphere.addComponent(MeshRenderer);
        mr.geometry = new SphereGeometry(1, 32, 32);
        mr.material = this.randomMaterial;
        mr.castShadow = true;
        mr.receiveShadow = true;

        sphere.y = 25;

        const rb = sphere.addComponent(Rigidbody);
        rb.bodyType = BodyType.Dynamic;
        rb.mass = 1;
        rb.restitution = 0.7;
        rb.shape = CollisionShapeUtil.createSphereShape(sphere, 1);

        this.scene.addChild(sphere);
    }

    private addRandomBox() {
        this.boxGeometry ||= new BoxGeometry(1, 1, 1);
        const box = new Object3D();

        const mr = box.addComponent(MeshRenderer);
        mr.geometry = this.boxGeometry;
        mr.material = this.randomMaterial;
        mr.castShadow = true;
        mr.receiveShadow = true;

        box.y = 20;
        box.x = Math.random() * 20 - 10;
        box.z = Math.random() * 20 - 10;

        const rb = box.addComponent(Rigidbody);
        rb.bodyType = BodyType.Dynamic;
        rb.mass = 1;
        rb.shape = CollisionShapeUtil.createBoxShape(box, new Vector3(1, 1, 1));

        this.scene.addChild(box);
    }
}

new Sample_Rigidbody().run();
