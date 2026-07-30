import { Scene3D, CameraUtil, HoverCameraController, View3D, DirectLight, AtmosphericComponent, Object3D, LitMaterial, Engine3D, BoxGeometry, MeshRenderer, Vector3, PlaneGeometry, Color, SphereGeometry, BlendMode } from "@orillusion/core";
import { Physics, Rigidbody, BodyType, CollisionShapeUtil } from "@orillusion/physics-rapier";

class Sample_RapierTriggers {
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

        const zone = new Object3D(); zone.y = 2;
        const zmr = zone.addComponent(MeshRenderer);
        zmr.geometry = new BoxGeometry(6, 4, 6);
        const zmat = new LitMaterial();
        zmat.baseColor = new Color(0.2, 0.9, 0.4, 0.25);
        zmat.blendMode = BlendMode.NORMAL;
        zmat.transparent = true;
        zmr.material = zmat;
        const zrb = zone.addComponent(Rigidbody);
        zrb.bodyType = BodyType.Static;
        zrb.shape = CollisionShapeUtil.createBoxShape(zone, new Vector3(6, 4, 6));
        zrb.isSensor = true;
        zrb.enableEvents = true;

        let inside = 0;
        zrb.onTriggerEnter = (other) => {
            inside++;
            console.log('triggerEnter', other.object3D.name, 'count:', inside);
            zmat.baseColor = new Color(1.0, 0.4, 0.4, 0.35);
        };
        zrb.onTriggerExit = (other) => {
            inside--;
            console.log('triggerExit', other.object3D.name, 'count:', inside);
            if (inside <= 0) zmat.baseColor = new Color(0.2, 0.9, 0.4, 0.25);
        };
        scene.addChild(zone);

        let id = 0;
        const dropInterval = setInterval(() => {
            const o = new Object3D();
            o.name = 'ball_' + (id++);
            o.x = (Math.random() - 0.5) * 4;
            o.z = (Math.random() - 0.5) * 4;
            o.y = 12;
            const mr = o.addComponent(MeshRenderer);
            mr.geometry = new SphereGeometry(0.4, 16, 16);
            const m = new LitMaterial();
            m.baseColor = new Color(Math.random(), Math.random(), Math.random()); mr.material = m;
            const rb = o.addComponent(Rigidbody);
            rb.bodyType = BodyType.Dynamic; rb.mass = 1; rb.restitution = 0.3;
            rb.shape = CollisionShapeUtil.createSphereShape(o, 0.4);
            rb.enableEvents = true;
            scene.addChild(o);
            if (id > 30) clearInterval(dropInterval);
        }, 250);

        let view = new View3D();
        view.camera = camera;
        view.scene = scene;
        engine.startRenderView(view);
    }
}

new Sample_RapierTriggers().run();
