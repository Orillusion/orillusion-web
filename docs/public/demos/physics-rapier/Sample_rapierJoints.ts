import { View3D, Scene3D, CameraUtil, DirectLight, AtmosphericComponent, HoverCameraController, Object3D, LitMaterial, Engine3D, BoxGeometry, MeshRenderer, Vector3, PlaneGeometry, Color, SphereGeometry } from "@orillusion/core";
import { Physics, Rigidbody, BodyType, CollisionShapeUtil, HingeJoint, SliderJoint, FixedJoint, SphericalJoint, RopeJoint, SpringJoint } from "@orillusion/physics-rapier";

class Sample_RapierJoints {
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

        this.initScene(scene);

        let view = new View3D();
        view.camera = camera;
        view.scene = scene;
        engine.startRenderView(view);
    }

    private mat(c: Color) { const m = new LitMaterial(); m.baseColor = c; m.roughness = 0.6; return m; }

    private box(parent: Object3D, x: number, y: number, z: number, size: Vector3, dynamic = true, color = new Color(0.7, 0.7, 0.7)) {
        const o = new Object3D(); o.x = x; o.y = y; o.z = z;
        const mr = o.addComponent(MeshRenderer);
        mr.geometry = new BoxGeometry(size.x, size.y, size.z); mr.material = this.mat(color);
        const rb = o.addComponent(Rigidbody);
        rb.bodyType = dynamic ? BodyType.Dynamic : BodyType.Static;
        rb.mass = dynamic ? 1 : 0;
        rb.shape = CollisionShapeUtil.createBoxShape(o, size);
        parent.addChild(o);
        return { obj: o, rb };
    }

    private initScene(scene: any) {
        const floor = new Object3D();
        const fr = floor.addComponent(MeshRenderer);
        fr.geometry = new PlaneGeometry(80, 80); fr.material = this.mat(new Color(0.4, 0.4, 0.45));
        const fb = floor.addComponent(Rigidbody);
        fb.bodyType = BodyType.Static; fb.shape = CollisionShapeUtil.createPlaneShape(40, 0.05);
        scene.addChild(floor);

        const hingeAnchor = this.box(scene, -16, 6, 0, new Vector3(0.4, 0.4, 0.4), false, new Color(0.5, 0.5, 0.5));
        const door = this.box(scene, -16, 4.5, 0, new Vector3(0.2, 3, 2), true, new Color(0.7, 0.4, 0.3));
        const hj = door.obj.addComponent(HingeJoint);
        hj.connectedBody = hingeAnchor.rb;
        hj.anchorSelf = new Vector3(0, 1.5, 0);
        hj.anchorTarget = new Vector3(0, 0, 0);
        hj.axis = new Vector3(0, 0, 1);

        const slideAnchor = this.box(scene, -8, 6, 0, new Vector3(0.4, 0.4, 0.4), false, new Color(0.5, 0.5, 0.5));
        const piston = this.box(scene, -7, 6, 0, new Vector3(0.6, 0.6, 0.6), true, new Color(0.4, 0.7, 0.3));
        const sj = piston.obj.addComponent(SliderJoint);
        sj.connectedBody = slideAnchor.rb;
        sj.axis = new Vector3(1, 0, 0);
        sj.setLimit(-2, 2);
        sj.setMotor(3, 0.5);

        const fa = this.box(scene, 0, 6, 0, new Vector3(0.5, 0.5, 0.5), false);
        fa.rb.bodyType = BodyType.KinematicPosition;
        const fb_box = this.box(scene, 0, 5, 0, new Vector3(0.6, 0.6, 0.6), true, new Color(0.3, 0.4, 0.7));
        const fj = fb_box.obj.addComponent(FixedJoint);
        fj.connectedBody = fa.rb;
        fj.anchorSelf = new Vector3(0, 0.5, 0);
        fj.anchorTarget = new Vector3(0, -0.5, 0);
        const t0 = performance.now();
        fa.rb.wait().then(body => {
            const tick = () => {
                const t = (performance.now() - t0) * 0.001;
                body.setNextKinematicTranslation({ x: Math.cos(t) * 2, y: 6 + Math.sin(t) * 0.5, z: Math.sin(t) * 2 });
                requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        });

        const ballAnchor = this.box(scene, 8, 8, 0, new Vector3(0.4, 0.4, 0.4), false);
        const ball = new Object3D(); ball.x = 8; ball.y = 4; ball.z = 0;
        const bmr = ball.addComponent(MeshRenderer);
        bmr.geometry = new SphereGeometry(0.5, 16, 16); bmr.material = this.mat(new Color(0.9, 0.6, 0.2));
        const ballRb = ball.addComponent(Rigidbody);
        ballRb.bodyType = BodyType.Dynamic; ballRb.mass = 1;
        ballRb.shape = CollisionShapeUtil.createSphereShape(ball, 0.5);
        scene.addChild(ball);
        const sphj = ball.addComponent(SphericalJoint);
        sphj.connectedBody = ballAnchor.rb;
        sphj.anchorSelf = new Vector3(0, 1.5, 0);
        sphj.anchorTarget = new Vector3(0, -1.5, 0);
        ballRb.wait().then(b => b.setLinvel({ x: 6, y: 0, z: 0 }, true));

        const ropeAnchor = this.box(scene, 14, 8, 0, new Vector3(0.4, 0.4, 0.4), false);
        const weight = this.box(scene, 14, 3, 0, new Vector3(0.6, 0.6, 0.6), true, new Color(0.6, 0.2, 0.7));
        const rj = weight.obj.addComponent(RopeJoint);
        rj.connectedBody = ropeAnchor.rb;
        rj.length = 4;
        weight.rb.wait().then(b => b.setLinvel({ x: 5, y: 0, z: 0 }, true));

        const sprAnchor = this.box(scene, 20, 9, 0, new Vector3(0.4, 0.4, 0.4), false);
        const bouncy = this.box(scene, 20, 4, 0, new Vector3(0.7, 0.7, 0.7), true, new Color(0.2, 0.7, 0.7));
        const sprj = bouncy.obj.addComponent(SpringJoint);
        sprj.connectedBody = sprAnchor.rb;
        sprj.restLength = 3;
        sprj.stiffness = 100;
        sprj.damping = 5;
    }
}

new Sample_RapierJoints().run();
