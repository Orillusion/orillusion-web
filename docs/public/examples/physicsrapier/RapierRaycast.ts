import { Object3D, LitMaterial, Engine3D, BoxGeometry, MeshRenderer, Vector3, PlaneGeometry, Color, ComponentBase, Time, AtmosphericComponent, CameraUtil, DirectLight, HoverCameraController, KelvinUtil, Scene3D, View3D } from "@orillusion/core";
import { Physics, Rigidbody, BodyType, CollisionShapeUtil, PhysicsQuery } from "@orillusion/physics-rapier";
import { Graphic3D } from "@orillusion/graphic";

class RotatingScanner extends ComponentBase {
    public targetHitMaterial: LitMaterial;
    public defaultMaterial: LitMaterial;
    public boxes: Object3D[] = [];
    private elapsed = 0;
    public graphic3D: Graphic3D;

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

        let atmosphericSky: AtmosphericComponent;
        atmosphericSky = scene.addComponent(AtmosphericComponent);

        let camera = CameraUtil.createCamera3DObject(scene);
        camera.perspective(60, engine.aspect, 1, 5000);

        let hoverCtrl = camera.object3D.addComponent(HoverCameraController);
        hoverCtrl.setCamera(-30, -15, 30);

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

        engine.startRenderView(view);
    }
}

new Sample_RapierRaycast().run();
