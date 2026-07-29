import { Object3D, LitMaterial, Engine3D, BoxGeometry, MeshRenderer, Vector3, PlaneGeometry, Color, SphereGeometry, CylinderGeometry, Scene3D, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, DirectLight, KelvinUtil } from "@orillusion/core";
import { Physics, Rigidbody, BodyType, CollisionShapeUtil } from "@orillusion/physics-rapier";
import { Graphic3D } from "@orillusion/graphic";

class Sample_RapierDebug {
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

        const drop = (geo: any, shape: any, c: Color, x: number) => {
            const o = new Object3D(); o.x = x; o.y = 6;
            const mr = o.addComponent(MeshRenderer); mr.geometry = geo;
            const m = new LitMaterial(); m.baseColor = c; mr.material = m;
            const rb = o.addComponent(Rigidbody);
            rb.bodyType = BodyType.Dynamic; rb.mass = 1; rb.shape = shape;
            scene.addChild(o);
            return o;
        };
        const a = drop(new BoxGeometry(1, 1, 1), null, new Color(0.7, 0.4, 0.4), -4);
        a.getComponent(Rigidbody).shape = CollisionShapeUtil.createBoxShape(a, new Vector3(1, 1, 1));
        const b = drop(new SphereGeometry(0.6, 24, 24), null, new Color(0.4, 0.7, 0.4), 0);
        b.getComponent(Rigidbody).shape = CollisionShapeUtil.createSphereShape(b, 0.6);
        const c = drop(new CylinderGeometry(0.5, 0.5, 1.2), null, new Color(0.4, 0.4, 0.7), 4);
        c.getComponent(Rigidbody).shape = CollisionShapeUtil.createCylinderShape(c, 0.5, 0.6);

        const graphic = new Graphic3D();
        scene.addChild(graphic);
        Physics.initDebugDrawer(graphic, { enable: true, updateFreq: 1 });

        engine.startRenderView(view);
    }
}

new Sample_RapierDebug().run();
