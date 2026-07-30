import { Scene3D, Object3D, LitMaterial, Engine3D, BoxGeometry, MeshRenderer, Vector3, PlaneGeometry, Color, SphereGeometry, CylinderGeometry, AtmosphericComponent, CameraUtil, DirectLight, HoverCameraController, KelvinUtil, View3D } from "@orillusion/core";
import { Physics, Rigidbody, BodyType, CollisionShapeUtil } from "@orillusion/physics-rapier";

class Sample_RapierMultipleShapes {
    engine: Engine3D;
    private scene: Scene3D;

    async run() {
        await Physics.init();
        const engine = this.engine = await Engine3D.init({ renderLoop: () => Physics.update() });
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
        this.scene = scene;
        this.initScene();
        engine.startRenderView(view);
    }

    private mat(c: Color) { const m = new LitMaterial(); m.baseColor = c; m.roughness = 0.6; m.metallic = 0.1; return m; }

    private initScene() {
        const floor = new Object3D();
        const fr = floor.addComponent(MeshRenderer);
        fr.geometry = new PlaneGeometry(60, 60); fr.material = this.mat(new Color(0.5, 0.5, 0.55));
        const fb = floor.addComponent(Rigidbody);
        fb.bodyType = BodyType.Static; fb.shape = CollisionShapeUtil.createPlaneShape(30, 0.05);
        this.scene.addChild(floor);

        const drop = (obj: Object3D, shape: any, x: number, color: Color) => {
            obj.x = x; obj.y = 8; obj.z = (Math.random() - 0.5) * 4;
            const mr = obj.getComponent(MeshRenderer); if (mr) mr.material = this.mat(color);
            const rb = obj.addComponent(Rigidbody);
            rb.bodyType = BodyType.Dynamic; rb.mass = 1; rb.shape = shape;
            this.scene.addChild(obj);
        };

        const b = new Object3D(); const br = b.addComponent(MeshRenderer);
        br.geometry = new BoxGeometry(1, 1, 1);
        drop(b, CollisionShapeUtil.createBoxShape(b, new Vector3(1, 1, 1)), -8, new Color(0.9, 0.4, 0.4));

        const s = new Object3D(); const sr = s.addComponent(MeshRenderer);
        sr.geometry = new SphereGeometry(0.6, 24, 24);
        drop(s, CollisionShapeUtil.createSphereShape(s, 0.6), -4, new Color(0.4, 0.9, 0.4));

        const c = new Object3D(); const cr = c.addComponent(MeshRenderer);
        cr.geometry = new CylinderGeometry(0.6, 0.6, 1.4);
        drop(c, CollisionShapeUtil.createCylinderShape(c, 0.6, 0.7), 0, new Color(0.4, 0.4, 0.9));

        const co = new Object3D(); const cor = co.addComponent(MeshRenderer);
        cor.geometry = new CylinderGeometry(0.001, 0.6, 1.4);
        drop(co, CollisionShapeUtil.createConeShape(co, 0.6, 0.7), 4, new Color(0.9, 0.9, 0.4));

        const cap = new Object3D(); const capr = cap.addComponent(MeshRenderer);
        capr.geometry = new CylinderGeometry(0.5, 0.5, 1.4);
        drop(cap, CollisionShapeUtil.createCapsuleShape(cap, 0.5, 0.2), 8, new Color(0.9, 0.4, 0.9));
    }
}

new Sample_RapierMultipleShapes().run();
