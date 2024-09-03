import { Engine3D, Object3D, Scene3D, View3D, Vector3, AtmosphericComponent, DirectLight, CameraUtil, HoverCameraController, MeshRenderer, LitMaterial, Color, BoxGeometry, BitmapTexture2D, BlendMode, SphereGeometry, GridObject } from "@orillusion/core";
import { Physics, Rigidbody, CollisionShapeUtil, ActivationState, GhostTrigger } from "@orillusion/physics";

class Sample_AreaDetection {
    async run() {
        // Initialize physics and engine
        await Physics.init();
        await Engine3D.init({ renderLoop: () => Physics.update() });

        let scene = new Scene3D();

        let camera = CameraUtil.createCamera3DObject(scene);
        camera.perspective(60, Engine3D.aspect, 0.1, 800.0);
        camera.object3D.addComponent(HoverCameraController).setCamera(0, -25, 50);

        // Create directional light
        let lightObj3D = new Object3D();
        lightObj3D.localRotation = new Vector3(151, -39, -35);
        lightObj3D.addComponent(DirectLight).castShadow = true;
        scene.addChild(lightObj3D);

        // Initialize sky
        scene.addComponent(AtmosphericComponent).sunY = 0.6;

        let view = new View3D();
        view.camera = camera;
        view.scene = scene;

        Engine3D.startRenderView(view);

        this.createGround(scene);
        this.createBall(scene);
        await this.createGhostTrigger(scene);
    }

    createGround(scene: Scene3D) {
        let obj = new GridObject(50, 5);
        scene.addChild(obj);

        // add rigidbody to ground
        let rb = obj.addComponent(Rigidbody);
        rb.shape = CollisionShapeUtil.createBoxShape(obj);
        rb.mass = 0;
    }

    createBall(scene: Scene3D) {
        const ball = new Object3D();
        let mr = ball.addComponent(MeshRenderer);
        mr.geometry = new SphereGeometry(0.7, 32, 32);
        mr.material = new LitMaterial();

        ball.y = 20;
        scene.addChild(ball);

        // add rigidbody to ball
        let rigidbody = ball.addComponent(Rigidbody);
        rigidbody.shape = CollisionShapeUtil.createSphereShape(ball);
        rigidbody.mass = 1;
        rigidbody.restitution = 1.98; // set high elasticity
        rigidbody.activationState = ActivationState.DISABLE_DEACTIVATION;
    }

    async createGhostTrigger(scene: Scene3D) {
        const obj = new Object3D();
        let mr = obj.addComponent(MeshRenderer);
        mr.geometry = new BoxGeometry(10, 5, 10);
        let material = new LitMaterial();

        const baseColor = new Color(0, 1, 0.5, 1.0);
        material.baseColor = baseColor;
        material.transparent = true;
        material.cullMode = 'none';
        // material.depthCompare = 'always';
        material.blendMode = BlendMode.ADD;

        let texture = new BitmapTexture2D();
        await texture.load('https://cdn.orillusion.com/textures/grid.webp');

        material.baseMap = texture;
        mr.material = material;

        obj.y = 10;
        scene.addChild(obj);

        let ghostTrigger = obj.addComponent(GhostTrigger);
        ghostTrigger.shape = CollisionShapeUtil.createBoxShape(obj);

        // ghost collision event to change color
        let timer: number | null = null;
        ghostTrigger.collisionEvent = (contactPoint, selfBody, otherBody) => {
            if (timer !== null) clearTimeout(timer);
            else material.baseColor = new Color(Color.SALMON);

            timer = setTimeout(() => {
                material.baseColor = baseColor;
                timer = null;
            }, 100);
        }

    }

}

new Sample_AreaDetection().run();
