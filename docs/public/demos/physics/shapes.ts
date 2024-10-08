import { Engine3D, LitMaterial, MeshRenderer, BoxGeometry, Object3D, Scene3D, View3D, Object3DUtil, Vector3, AtmosphericComponent, DirectLight, SphereGeometry, CameraUtil, HoverCameraController, BitmapTexture2D, Color, CylinderGeometry, TorusGeometry, ComponentBase } from "@orillusion/core";
import { TerrainGeometry } from "@orillusion/geometry";
import { Ammo, CollisionShapeUtil, Physics, Rigidbody } from "@orillusion/physics";

class Sample_MultipleShapes {
    scene: Scene3D;
    terrain: Object3D;
    gui: dat.GUI;

    async run() {
        // init physics and engine
        await Physics.init({ useDrag: true });
        await Engine3D.init({
            renderLoop: () => Physics.update()
        });

        // shadow settings
        Engine3D.setting.shadow.shadowBias = 0.01;
        Engine3D.setting.shadow.shadowSize = 1024 * 4;
        Engine3D.setting.shadow.csmMargin = 0.1;
        Engine3D.setting.shadow.csmScatteringExp = 0.8;
        Engine3D.setting.shadow.csmAreaScale = 0.1;
        Engine3D.setting.shadow.updateFrameRate = 1;

        this.scene = new Scene3D();

        // Setup camera
        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, Engine3D.aspect, 0.1, 800.0);
        camera.enableCSM = true;

        let hoverCtrl = camera.object3D.addComponent(HoverCameraController);
        hoverCtrl.setCamera(0, -25, 100);
        hoverCtrl.dragSmooth = 4;

        // Create directional light
        let lightObj3D = new Object3D();
        lightObj3D.localRotation = new Vector3(-35, -143, 92);

        let light = lightObj3D.addComponent(DirectLight);
        light.lightColor = Color.COLOR_WHITE;
        light.castShadow = true;
        light.intensity = 2.2;
        this.scene.addChild(light.object3D);

        // init sky
        let atmosphericSky = this.scene.addComponent(AtmosphericComponent);
        atmosphericSky.sunY = 0.6;

        // Setup view
        let view = new View3D();
        view.camera = camera;
        view.scene = this.scene;

        Engine3D.startRenderView(view);

        // init terrain and create static planes
        await this.initTerrain();
        this.createStaticPlanes();

        this.scene.addComponent(BoxGenerator);
    }

    async initTerrain() {
        // Load textures
        let bitmapTexture = await Engine3D.res.loadTexture('https://cdn.orillusion.com/terrain/test01/bitmap.png');
        let heightTexture = await Engine3D.res.loadTexture('https://cdn.orillusion.com/terrain/test01/height.png');

        const width = 100;
        const height = 100;
        const terrainMaxHeight = 60;
        const segment = 60

        // Create terrain geometry
        let terrainGeometry = new TerrainGeometry(width, height, segment, segment);
        terrainGeometry.setHeight(heightTexture as BitmapTexture2D, terrainMaxHeight);

        let terrain = new Object3D();
        let mr = terrain.addComponent(MeshRenderer);
        mr.geometry = terrainGeometry;

        let mat = new LitMaterial();
        mat.baseMap = bitmapTexture;
        mat.metallic = 0;
        mat.roughness = 1.3;
        mr.material = mat;

        this.terrain = terrain;
        this.scene.addChild(terrain);

        // Add rigidbody to terrain
        let terrainRb = terrain.addComponent(Rigidbody);
        terrainRb.shape = Rigidbody.collisionShape.createHeightfieldTerrainShape(terrain);
        terrainRb.mass = 0; // Static rigidbody
        terrainRb.margin = 0.05;
        terrainRb.isDisableDebugVisible = true;
        terrainRb.friction = 1;
    }

    // Create static planes for boundaries
    createStaticPlanes() {
        // Create bottom static plane
        let staticFloorBottom = Object3DUtil.GetPlane(Engine3D.res.whiteTexture);
        staticFloorBottom.y = -500;
        staticFloorBottom.transform.enable = false;
        this.scene.addChild(staticFloorBottom);

        let bottomRb = staticFloorBottom.addComponent(Rigidbody);
        bottomRb.shape = CollisionShapeUtil.createStaticPlaneShape();
        bottomRb.mass = 0;

        // Create top static plane
        let staticFloorTop = Object3DUtil.GetPlane(Engine3D.res.whiteTexture);
        staticFloorTop.y = 100;
        staticFloorTop.transform.enable = false;
        this.scene.addChild(staticFloorTop);

        let topRb = staticFloorTop.addComponent(Rigidbody);
        topRb.shape = CollisionShapeUtil.createStaticPlaneShape(Vector3.DOWN);
        topRb.mass = 0;
    }
}

class BoxGenerator extends ComponentBase {
    private lastTime: number = performance.now(); // Save last time

    public container: Object3D;
    public interval: number = 1000; // Interval for adding shapes
    public totalShapes: number = 30; // Maximum number of shapes

    async start() {
        this.container = new Object3D();
        this.object3D.addChild(this.container);
    }

    // Update loop
    public onUpdate(): void {
        let now: number = performance.now();
        if (now - this.lastTime > this.interval) {
            if (this.container.numChildren >= this.totalShapes) {
                let index = Math.floor(now / this.interval) % this.totalShapes;
                let shapeObject = this.container.getChildByIndex(index) as Object3D;
                shapeObject.localPosition.set(Math.random() * 60 - 60 / 2, 40, Math.random() * 60 - 60 / 2);
                shapeObject.getComponent(Rigidbody).updateTransform(shapeObject.localPosition, null, true);
            } else {
                this.addRandomShape();
            }
            this.lastTime = now; // Save current time
        }
    }

    private addRandomShape(): void {
        const shapeObject = new Object3D();
        let mr = shapeObject.addComponent(MeshRenderer);
        let mat = new LitMaterial();
        mat.baseColor = Color.random();

        let size = 1 + Math.random() / 2;
        let height = 1 + Math.random() * (3 - 1);
        let radius = 0.5 + Math.random() / 2;
        const segments = 32;

        let shape: Ammo.btCollisionShape;
        let shapeType = Math.floor(Math.random() * 6); // Six basic shapes
        switch (shapeType) {
            case 0: // Box shape
                mr.geometry = new BoxGeometry(size, size, size);
                mr.material = mat;
                shape = CollisionShapeUtil.createBoxShape(shapeObject);
                break;
            case 1: // Sphere shape
                mr.geometry = new SphereGeometry(radius, segments, segments);
                mr.material = mat;
                shape = CollisionShapeUtil.createSphereShape(shapeObject);
                break;
            case 2: // Cylinder shape
                mr.geometry = new CylinderGeometry(radius, radius, height, segments, segments);
                mr.materials = [mat, mat, mat];
                shape = CollisionShapeUtil.createCylinderShape(shapeObject);
                break;
            case 3: // Cone shape
                mr.geometry = new CylinderGeometry(0.01, radius, height, segments, segments);
                mr.materials = [mat, mat, mat];
                shape = CollisionShapeUtil.createConeShape(shapeObject);
                break;
            case 4: // Capsule shape
                mr.geometry = new CylinderGeometry(radius, radius, height, segments, segments);
                mr.material = mat;
                const { r, g, b } = mat.baseColor;
                let topSphere = Object3DUtil.GetSingleSphere(radius, r, g, b);
                topSphere.y = height / 2;
                let bottomSphere = topSphere.clone();
                bottomSphere.y = -height / 2;
                shapeObject.addChild(topSphere);
                shapeObject.addChild(bottomSphere);
                shape = CollisionShapeUtil.createCapsuleShape(shapeObject);
                break;
            case 5: // Torus shape (convex hull shape)
                mr.geometry = new TorusGeometry(radius, size / 5, segments / 2, segments / 2);
                mr.material = mat;
                shape = CollisionShapeUtil.createConvexHullShape(shapeObject);
                break;
            default:
                break;
        }

        const posRange = 60;
        shapeObject.x = Math.random() * posRange - posRange / 2;
        shapeObject.y = 40;
        shapeObject.z = Math.random() * posRange - posRange / 2;

        shapeObject.localRotation = new Vector3(Math.random() * 360, Math.random() * 360, Math.random() * 360);
        this.container.addChild(shapeObject);

        // Add rigidbody to shape
        let rigidbody = shapeObject.addComponent(Rigidbody);
        rigidbody.shape = shape;
        rigidbody.mass = Math.random() * 10 + 0.1;
        rigidbody.rollingFriction = 0.5;
        rigidbody.damping = [0.1, 0.1];

        // Enable continuous collision detection (CCD)
        const maxDimension = Math.max(size, height, radius);
        const ccdMotionThreshold = maxDimension * 0.1; // Set motion threshold to 10% of max dimension
        const ccdSweptSphereRadius = maxDimension * 0.05; // Set swept sphere radius to 5% of max dimension
        rigidbody.ccdSettings = [ccdMotionThreshold, ccdSweptSphereRadius];
    }
}

new Sample_MultipleShapes().run();
