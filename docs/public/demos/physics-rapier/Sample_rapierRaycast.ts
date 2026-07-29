import { Scene3D, CameraUtil, HoverCameraController, DirectLight, View3D, AtmosphericComponent, Object3D, LitMaterial, Engine3D, BoxGeometry, MeshRenderer, Vector3, PlaneGeometry, Color, ComponentBase, Time } from "@orillusion/core";
import { Physics, Rigidbody, BodyType, CollisionShapeUtil, PhysicsQuery } from "@orillusion/physics-rapier";
import { Graphic3D } from "@orillusion/graphic";

class RotatingScanner extends ComponentBase {
    public targetHitMaterial!: LitMaterial;
    public defaultMaterial!: LitMaterial;
    public boxes: Object3D[] = [];
    private elapsed = 0;
    public graphic3D!: Graphic3D;

    public onUpdate() {
        this.elapsed += Time.delta * 0.001;
        const angle = this.elapsed;
        const origin = new Vector3(0, 5, 0);
        const dir = new Vector3(Math.cos(angle), 0, Math.sin(angle));

        for (const b of this.boxes) b.getComponent(MeshRenderer).material = this.defaultMaterial;

        const hit = PhysicsQuery.raycast(origin, dir, { maxDistance: 30 });

        this.graphic3D.Clear?.('scanRay');
        const end = hit ? hit.point : new Vector3(origin.x + dir.x * 30, origin.y + dir.y * 30, origin.z + dir.z * 30);
        this.graphic3D.drawLines('scanRay', [origin, end], hit ? new Color(1, 0.3, 0.3) : new Color(0.3, 1, 0.3));

        if (hit && hit.rigidbody) {
            const obj = hit.rigidbody.object3D;
            obj.getComponent(MeshRenderer).material = this.targetHitMaterial;
        }
    }
}

class Sample_RapierRaycast {
    async run() {
        await Physics.init();
        const engine = await Engine3D.init({ renderLoop: () => Physics.update() });
        let scene = new Scene3D();

        let camera = CameraUtil.createCamera3DObject(scene);
        camera.perspective(60, engine.aspect, 0.1, 800.0);

        let hoverCtrl = camera.object3D.addComponent(HoverCameraController);
        hoverCtrl.setCamera(0, -25, 100);
        hoverCtrl.dragSmooth = 4;

        let lightObj3D = new Object3D();
        lightObj3D.localRotation = new Vector3(-35, -143, 92);

        let light = lightObj3D.addComponent(DirectLight);
        light.lightColor = Color.COLOR_WHITE;
        light.castShadow = true;
        light.enableCSM = true;
        light.intensity = 2.2;
        scene.addChild(light.object3D);

        let atmosphericSky = scene.addComponent(AtmosphericComponent);
        atmosphericSky.sunY = 0.6;

        const floor = new Object3D();
        const fr = floor.addComponent(MeshRenderer);
        fr.geometry = new PlaneGeometry(40, 40);
        const fm = new LitMaterial(); fm.baseColor = new Color(0.4, 0.4, 0.45); fr.material = fm;
        const fb = floor.addComponent(Rigidbody);
        fb.bodyType = BodyType.Static; fb.shape = CollisionShapeUtil.createPlaneShape(20, 0.05);
        scene.addChild(floor);

        const defaultMat = new LitMaterial(); defaultMat.baseColor = new Color(0.6, 0.6, 0.65);
        const hitMat = new LitMaterial(); hitMat.baseColor = new Color(1, 0.4, 0.2);

        const boxes: Object3D[] = [];
        const N = 12;
        for (let i = 0; i < N; i++) {
            const a = (i / N) * Math.PI * 2;
            const r = 8;
            const o = new Object3D(); o.x = Math.cos(a) * r; o.z = Math.sin(a) * r; o.y = 5;
            const mr = o.addComponent(MeshRenderer);
            mr.geometry = new BoxGeometry(1.2, 1.2, 1.2);
            mr.material = defaultMat;
            const rb = o.addComponent(Rigidbody);
            rb.bodyType = BodyType.Static;
            rb.shape = CollisionShapeUtil.createBoxShape(o, new Vector3(1.2, 1.2, 1.2));
            scene.addChild(o);
            boxes.push(o);
        }

        const graphic = new Graphic3D();
        scene.addChild(graphic);

        const scanner = floor.addComponent(RotatingScanner);
        scanner.boxes = boxes;
        scanner.defaultMaterial = defaultMat;
        scanner.targetHitMaterial = hitMat;
        scanner.graphic3D = graphic;

        let view = new View3D();
        view.camera = camera;
        view.scene = scene;
        engine.startRenderView(view);
    }
}

new Sample_RapierRaycast().run();
