import { Object3D, LitMaterial, Engine3D, BoxGeometry, CylinderGeometry, MeshRenderer, Vector3, Color, KeyEvent, KeyCode, ComponentBase, AtmosphericComponent, CameraUtil, DirectLight, HoverCameraController, KelvinUtil, Scene3D, View3D } from "@orillusion/core";
import { Physics, Rigidbody, BodyType, CollisionShapeUtil, VehicleController } from "@orillusion/physics-rapier";

const RAD2DEG = 180 / Math.PI;

class VehicleDriver extends ComponentBase {
    public vehicle: VehicleController;
    private keys: Record<string, boolean> = {};
    public engineForce: number = 1500;
    public brakeForce: number = 100;
    public maxSteer: number = 0.5;

    public start() {
        const input = this.transform.scene3D.view.engine3D.inputSystem;
        input.addEventListener(KeyEvent.KEY_DOWN, (e: KeyEvent) => this.keys[e.keyCode] = true, this);
        input.addEventListener(KeyEvent.KEY_UP, (e: KeyEvent) => this.keys[e.keyCode] = false, this);
    }

    public onUpdate() {
        if (!this.vehicle || this.vehicle.numWheels() < 4) return;
        const fwd = this.keys[KeyCode.Key_W] ? this.engineForce : (this.keys[KeyCode.Key_S] ? -this.engineForce : 0);
        const brake = this.keys[KeyCode.Key_Space] ? this.brakeForce : 0;
        const steer = this.keys[KeyCode.Key_A] ? this.maxSteer : (this.keys[KeyCode.Key_D] ? -this.maxSteer : 0);

        this.vehicle.setEngineForce(fwd, 2);
        this.vehicle.setEngineForce(fwd, 3);
        for (let i = 0; i < 4; i++) this.vehicle.setBrake(brake, i);
        this.vehicle.setSteering(steer, 0);
        this.vehicle.setSteering(steer, 1);
    }
}

class WheelVisualSync extends ComponentBase {
    public vehicle: VehicleController;
    public steerPivots: Object3D[] = [];
    public spinPivots: Object3D[] = [];

    public onUpdate() {
        const ctrl = this.vehicle?.native;
        if (!ctrl) return;
        const n = Math.min(this.steerPivots.length, ctrl.numWheels());
        for (let i = 0; i < n; i++) {
            const conn = ctrl.wheelChassisConnectionPointCs(i);
            const dir = ctrl.wheelDirectionCs(i);
            const len = ctrl.wheelSuspensionLength(i) ?? 0;
            if (!conn || !dir) continue;
            const sp = this.steerPivots[i];
            sp.x = conn.x + dir.x * len;
            sp.y = conn.y + dir.y * len;
            sp.z = conn.z + dir.z * len;
            sp.rotationY = (ctrl.wheelSteering(i) ?? 0) * RAD2DEG;
            this.spinPivots[i].rotationX = (ctrl.wheelRotation(i) ?? 0) * RAD2DEG;
        }
    }
}

class Sample_RapierVehicle {
    async run() {
        await Physics.init();
        const engine = await Engine3D.init({ renderLoop: () => Physics.update() });
        let scene = new Scene3D();

        let atmosphericSky: AtmosphericComponent;
        atmosphericSky = scene.addComponent(AtmosphericComponent);

        let camera = CameraUtil.createCamera3DObject(scene);
        camera.perspective(60, engine.aspect, 1, 5000);

        let hoverCtrl = camera.object3D.addComponent(HoverCameraController);
        hoverCtrl.setCamera(-30, -15, 40);

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
        fr.geometry = new BoxGeometry(200, 0.2, 60);
        const fm = new LitMaterial(); fm.baseColor = new Color(0.35, 0.35, 0.4); fr.material = fm;
        const fb = floor.addComponent(Rigidbody);
        fb.bodyType = BodyType.Static;
        fb.shape = CollisionShapeUtil.createBoxShape(floor, new Vector3(200, 0.2, 60));
        fb.friction = 1.0;
        scene.addChild(floor);

        const chassis = new Object3D(); chassis.y = 2;
        const cmr = chassis.addComponent(MeshRenderer);
        cmr.geometry = new BoxGeometry(2, 0.6, 4);
        const cm = new LitMaterial(); cm.baseColor = new Color(0.8, 0.2, 0.2); cmr.material = cm;
        const crb = chassis.addComponent(Rigidbody);
        crb.bodyType = BodyType.Dynamic; crb.mass = 200;
        crb.shape = CollisionShapeUtil.createBoxShape(chassis, new Vector3(2, 0.6, 4));
        crb.linearDamping = 0.1;
        crb.angularDamping = 0.5;
        scene.addChild(chassis);

        const vc = chassis.addComponent(VehicleController);
        const wheelOpts = {
            suspensionRestLength: 0.3,
            radius: 0.4,
            stiffness: 30,
            dampingCompression: 4.4,
            dampingRelaxation: 2.3,
            frictionSlip: 1000,
        };
        vc.addWheel({ ...wheelOpts, chassisConnection: new Vector3(-1, -0.3, -1.5) }); // 0 FL
        vc.addWheel({ ...wheelOpts, chassisConnection: new Vector3(1, -0.3, -1.5) });  // 1 FR
        vc.addWheel({ ...wheelOpts, chassisConnection: new Vector3(-1, -0.3, 1.5) });  // 2 RL
        vc.addWheel({ ...wheelOpts, chassisConnection: new Vector3(1, -0.3, 1.5) });   // 3 RR

        const drv = chassis.addComponent(VehicleDriver);
        drv.vehicle = vc;

        const wheelMat = new LitMaterial();
        wheelMat.baseColor = new Color(0.08, 0.08, 0.08);
        const wheelGeo = new CylinderGeometry(wheelOpts.radius, wheelOpts.radius, 0.3, 24);
        const sync = chassis.addComponent(WheelVisualSync);
        sync.vehicle = vc;
        for (let i = 0; i < 4; i++) {
            const steer = new Object3D();
            const spin = new Object3D();
            const mesh = new Object3D();
            const mr = mesh.addComponent(MeshRenderer);
            mr.geometry = wheelGeo;
            mr.material = wheelMat;
            mesh.rotationZ = 90;
            spin.addChild(mesh);
            steer.addChild(spin);
            chassis.addChild(steer);
            sync.steerPivots.push(steer);
            sync.spinPivots.push(spin);
        }

        engine.startRenderView(view);
    }
}

new Sample_RapierVehicle().run();
