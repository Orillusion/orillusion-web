import { Scene3D, Object3D, LitMaterial, Engine3D, BoxGeometry, MeshRenderer, Vector3, PlaneGeometry, Color, SphereGeometry, AtmosphericComponent, HoverCameraController, View3D, DirectLight, KelvinUtil, CameraUtil } from "@orillusion/core";
import { Physics, Rigidbody, BodyType, CollisionShapeUtil } from "@orillusion/physics-rapier";

class Sample_RapierBox {
    engine: Engine3D;
    private scene: Scene3D;
    private materials: LitMaterial[];
    private boxGeometry: BoxGeometry;

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

        let scene = new Scene3D();

        let atmosphericSky: AtmosphericComponent;
        atmosphericSky = scene.addComponent(AtmosphericComponent);

        let camera = CameraUtil.createCamera3DObject(scene);
        camera.perspective(60, engine.aspect, 1, 5000);

        let hoverCtrl = camera.object3D.addComponent(HoverCameraController);
        hoverCtrl.setCamera(-30, -15, 50);

        let view = new View3D();
        view.scene = scene;
        view.camera = camera;

        let lightObj3D = new Object3D();
        lightObj3D.x = 0;
        lightObj3D.y = 30;
        lightObj3D.z = -40;
        lightObj3D.rotationX = 35;
        lightObj3D.rotationY = 160;
        lightObj3D.rotationZ = 0;

        let light = lightObj3D.addComponent(DirectLight);
        light.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
        light.castShadow = true;
        light.intensity = 4;
        light.enableCSM = true;

        scene.addChild(light.object3D);

        atmosphericSky.relativeTransform = light.transform;

        this.scene = scene;
        await this.initScene(this.scene);

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

new Sample_RapierBox().run();
