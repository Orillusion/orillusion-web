import { AtmosphericComponent, BoxGeometry, Engine3D, GeometryBase, LitMaterial, MeshRenderer, Object3D, Object3DUtil, Scene3D, SphereGeometry, TorusGeometry, Vector3 } from "@orillusion/core";

class Sample_ReplaceGeometry {
    engine: Engine3D;
    scene: Scene3D;
    geometries: GeometryBase[];
    renderer: MeshRenderer;
    index = 0;
    async run() {
        const engine = this.engine = await Engine3D.init();

        this.scene = new Scene3D();

        let atmosphericSky: AtmosphericComponent;
        atmosphericSky = this.scene.addComponent(AtmosphericComponent);

        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, engine.aspect, 1, 5000);

        let hoverCtrl = camera.object3D.addComponent(HoverCameraController);
        hoverCtrl.setCamera(-30, -15, 50);

        let view = new View3D();
        view.scene = this.scene;
        view.camera = camera;

        let lightObj3D = new Object3D();
        lightObj3D.x = 0;
        lightObj3D.y = 30;
        lightObj3D.z = -40;
        lightObj3D.rotationX = 20;
        lightObj3D.rotationY = 160;
        lightObj3D.rotationZ = 0;

        let light = lightObj3D.addComponent(DirectLight);
        light.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
        light.castShadow = true;
        light.intensity = 2;
        light.enableCSM = true;

        this.scene.addChild(light.object3D);

        atmosphericSky.relativeTransform = light.transform;

        engine.startRenderView(view);

        this.scene = exampleScene.scene;

        engine.startRenderView(exampleScene.view);


        GUIHelp.init();
        this.initGeometries();

        let duck = await (await this.engine.res.loadGltf('PBR/Duck/Duck.gltf')) as Object3D;
        let duckGeometry = duck.getComponents(MeshRenderer)[0].geometry;
        this.geometries.push(duckGeometry);

        this.initRenderer();
        let scale = new Vector3(1, 1, 1);
        GUIHelp.add(this, 'index', 0, 4, 1).onChange((value) => {
            this.renderer.geometry = this.geometries[value];
            if (value == this.geometries.length - 1) {
                scale.set(0.03, 0.03, 0.03);
            } else {
                scale.set(1, 1, 1);
            }
            this.renderer.object3D.localScale = scale;
        })

        GUIHelp.open();
        this.initFloor();
    }

    initFloor() {
        let floorHeight = 20;
        let floor = Object3DUtil.GetSingleCube(1000, floorHeight, 1000, 0.5, 0.5, 0.5);
        floor.y = -floorHeight;
        this.scene.addChild(floor);
    }

    initGeometries() {
        this.geometries = [];
        this.geometries.push(new SphereGeometry(2, 20, 20));
        this.geometries.push(new BoxGeometry(2, 8, 4));
        this.geometries.push(new TorusGeometry(2, 0.4));
    }

    initRenderer() {
        let obj = new Object3D();
        this.renderer = obj.addComponent(MeshRenderer);
        this.renderer.material = new LitMaterial();
        this.renderer.geometry = this.geometries[0];
        this.scene.addChild(obj);
    }
}

new Sample_ReplaceGeometry().run();
