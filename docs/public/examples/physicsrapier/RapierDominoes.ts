import { Object3D, LitMaterial, Engine3D, BoxGeometry, MeshRenderer, Vector3, PlaneGeometry, Color, SphereGeometry, Scene3D, AtmosphericComponent, CameraUtil, DirectLight, HoverCameraController, KelvinUtil, View3D } from "@orillusion/core";
import { Physics, Rigidbody, BodyType, CollisionShapeUtil } from "@orillusion/physics-rapier";

class Sample_RapierDominoes {
    async run() {
        await Physics.init();
        const engine = await Engine3D.init({ renderLoop: () => Physics.update() });
        let scene = new Scene3D();

        let atmosphericSky: AtmosphericComponent;
        atmosphericSky = scene.addComponent(AtmosphericComponent);

        let camera = CameraUtil.createCamera3DObject(scene);
        camera.perspective(60, engine.aspect, 1, 5000);

        let hoverCtrl = camera.object3D.addComponent(HoverCameraController);
        hoverCtrl.setCamera(-30, -15, 60);

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
        fr.geometry = new PlaneGeometry(120, 120);
        const fm = new LitMaterial(); fm.baseColor = new Color(0.5, 0.5, 0.55); fr.material = fm;
        const fb = floor.addComponent(Rigidbody);
        fb.bodyType = BodyType.Static; fb.shape = CollisionShapeUtil.createPlaneShape(60, 0.05);
        fb.friction = 1;
        scene.addChild(floor);

        const N = 80;
        const radius = 25;
        const w = 0.3, h = 3, d = 1.4;
        for (let i = 0; i < N; i++) {
            const t = i / N;
            const angle = t * Math.PI * 1.6 - Math.PI * 0.8;
            const o = new Object3D();
            o.x = Math.cos(angle) * radius;
            o.z = Math.sin(angle) * radius;
            o.y = h / 2;
            o.localRotation = new Vector3(0, -angle * 180 / Math.PI - 90, 0);

            const mr = o.addComponent(MeshRenderer);
            mr.geometry = new BoxGeometry(w, h, d);
            const m = new LitMaterial();
            m.baseColor = new Color(0.5 + 0.5 * Math.cos(t * 6), 0.5 + 0.5 * Math.sin(t * 5), 0.5);
            mr.material = m;

            const rb = o.addComponent(Rigidbody);
            rb.bodyType = BodyType.Dynamic; rb.mass = 0.5;
            rb.shape = CollisionShapeUtil.createBoxShape(o, new Vector3(w, h, d));
            rb.friction = 0.6;
            rb.restitution = 0.05;
            scene.addChild(o);
        }

        const ang0 = -Math.PI * 0.8;
        const tanX = -Math.sin(ang0), tanZ = Math.cos(ang0);
        const ballRadius = 0.6;
        const ball = new Object3D();
        ball.x = Math.cos(ang0) * radius - tanX * 3;
        ball.z = Math.sin(ang0) * radius - tanZ * 3;
        ball.y = ballRadius;
        const bmr = ball.addComponent(MeshRenderer);
        bmr.geometry = new SphereGeometry(ballRadius, 24, 24);
        const bm = new LitMaterial(); bm.baseColor = new Color(0.9, 0.7, 0.2); bmr.material = bm;
        const brb = ball.addComponent(Rigidbody);
        brb.bodyType = BodyType.Dynamic; brb.mass = 5;
        brb.shape = CollisionShapeUtil.createSphereShape(ball, ballRadius);
        scene.addChild(ball);

        brb.wait().then(() => {
            brb.applyImpulse(new Vector3(tanX * 30, 0, tanZ * 30));
        });

        engine.startRenderView(view);
    }
}

new Sample_RapierDominoes().run();
