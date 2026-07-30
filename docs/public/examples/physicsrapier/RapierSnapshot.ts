import { Object3D, LitMaterial, Engine3D, BoxGeometry, MeshRenderer, Vector3, PlaneGeometry, Color, SphereGeometry, AtmosphericComponent, CameraUtil, DirectLight, HoverCameraController, KelvinUtil, Scene3D, View3D } from "@orillusion/core";
import { Physics, Rigidbody, BodyType, CollisionShapeUtil } from "@orillusion/physics-rapier";
import dat from "dat.gui";

class Sample_RapierSnapshot {
    private savedSnapshot: Uint8Array | null = null;
    private rigidBodies: Rigidbody[] = [];

    async run() {
        await Physics.init({ deterministic: true });

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

        for (let i = 0; i < 10; i++) {
            const o = new Object3D();
            o.x = (i % 2 - 0.4) * 0.4;
            o.y = 1 + i * 1.00;
            const mr = o.addComponent(MeshRenderer);
            mr.geometry = new BoxGeometry(1, 1, 1);
            const m = new LitMaterial();
            m.baseColor = new Color(0.5 + 0.05 * i, 0.5, 0.7 - 0.05 * i); mr.material = m;
            const rb = o.addComponent(Rigidbody);
            rb.bodyType = BodyType.Dynamic; rb.mass = 1;
            rb.shape = CollisionShapeUtil.createBoxShape(o, new Vector3(1, 1, 1));
            scene.addChild(o);
            this.rigidBodies.push(rb);
        }

        const ball = new Object3D(); ball.x = -10; ball.y = 5;
        const bmr = ball.addComponent(MeshRenderer);
        bmr.geometry = new SphereGeometry(0.6, 24, 24);
        const bm = new LitMaterial(); bm.baseColor = new Color(0.95, 0.7, 0.2); bmr.material = bm;
        const brb = ball.addComponent(Rigidbody);
        brb.bodyType = BodyType.Dynamic; brb.mass = 8;
        brb.shape = CollisionShapeUtil.createSphereShape(ball, 0.6);
        scene.addChild(ball);
        this.rigidBodies.push(brb);

        let gui = new dat.GUI();
        gui.add({ SaveSnapshot: () => {
            this.savedSnapshot = Physics.snapshot();
            console.log('[snapshot] captured', this.savedSnapshot.byteLength, 'bytes');
        }}, 'SaveSnapshot');

        gui.add({ FireCannon: async () => {
            const b = await brb.wait();
            b.setLinvel({ x: 25, y: 8, z: 0 }, true);
        }}, 'FireCannon');

        gui.add({ Rewind: () => {
            if (!this.savedSnapshot) { console.warn('No snapshot to rewind to.'); return; }
            const before = Physics.world.bodies.len();
            Physics.restore(this.savedSnapshot);
            const after = Physics.world.bodies.len();
            console.log(`[rewind] body count ${before} -> ${after}; Rigidbodies re-bound by handle.`);
        }}, 'Rewind');

        gui.open();

        engine.startRenderView(view);
    }
}

new Sample_RapierSnapshot().run();
