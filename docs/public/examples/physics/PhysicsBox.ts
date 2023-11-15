import { Physics, Rigidbody } from "@orillusion/physics";
import { AtmosphericComponent,DirectLight, KelvinUtil, CameraUtil, HoverCameraController, View3D, Scene3D, Object3D, LitMaterial, Engine3D, BoxGeometry, MeshRenderer, ColliderComponent, BoxColliderShape, Vector3, PlaneGeometry, Color, SphereColliderShape, SphereGeometry } from "@orillusion/core";
import dat from 'dat.gui'
import { Stats } from '@orillusion/stats'

class Sample_PhysicsBox {
    private scene: Scene3D;
    private materials: LitMaterial[];
    private Ori: dat.GUI | undefined

    async run() {
        Engine3D.setting.shadow.autoUpdate = true;
        Engine3D.setting.shadow.updateFrameRate = 1;
        Engine3D.setting.shadow.shadowSize = 2048;

        await Physics.init();
        await Engine3D.init({ renderLoop: () => this.loop() });

        let scene = new Scene3D()
        scene.exposure = 1
        scene.addComponent(Stats)
    
        // init sky
        let atmosphericSky: AtmosphericComponent
        atmosphericSky = scene.addComponent(AtmosphericComponent)
    
        // init Camera3D
        let camera = CameraUtil.createCamera3DObject(scene)
        camera.perspective(60, Engine3D.aspect, 1, 5000)
        camera.enableCSM = true
        // init Camera Controller
        let hoverCtrl = camera.object3D.addComponent(HoverCameraController)
        hoverCtrl.setCamera(-30, -15, 50)
    
        // init View3D
        let view = new View3D()
        view.scene = scene
        view.camera = camera
    
        // create direction light
        let lightObj3D = new Object3D()
        lightObj3D.x = 0
        lightObj3D.y = 30
        lightObj3D.z = -40
        lightObj3D.rotationX = 20
        lightObj3D.rotationY = 160
        lightObj3D.rotationZ = 0
    
        let light = lightObj3D.addComponent(DirectLight)
        light.lightColor = KelvinUtil.color_temperature_to_rgb(5355)
        light.castShadow = true
        light.intensity = 30
    
        scene.addChild(light.object3D)
    
        // relative light to sky
        atmosphericSky.relativeTransform = light.transform


        this.scene = scene;

        let gui = new dat.GUI()
        let DirLight = gui.addFolder('Light')
        DirLight.add(light, 'enable')
        DirLight.add(light.transform, 'rotationX', 0.0, 360.0, 0.01)
        DirLight.add(light.transform, 'rotationY', 0.0, 360.0, 0.01)
        DirLight.add(light.transform, 'rotationZ', 0.0, 360.0, 0.01)
        DirLight.add(light, 'intensity', 0.0, 160.0, 0.01)
        DirLight.add(light, 'indirect', 0.0, 10.0, 0.01)
        DirLight.add(light, 'castShadow')
        DirLight.open()

        await this.initScene(this.scene);
        var button_add = {
            'Add Ball': () => { this.createSphere(); }
        }
        gui.add(button_add, 'Add Ball')
        Engine3D.startRenderView(view);
    }

    initMaterials() {
        this.materials = [];
        for (let i = 0; i < 20; i++) {
            var mat = new LitMaterial();
            mat.baseColor = new Color(Math.random() * 1.0, Math.random() * 1.0, Math.random() * 1.0, 1.0);
            mat.metallic = Math.min(Math.random() * 0.1 + 0.2, 1.0);
            mat.roughness = Math.min(Math.random() * 0.5, 1.0);
            this.materials.push(mat);
        }
    }

    async initScene(scene: Scene3D) {
        /******** load hdr sky *******/
        let envMap = await Engine3D.res.loadHDRTextureCube('https://cdn.orillusion.com/hdri/daytime.hdr');
        scene.envMap = envMap;

        //
        this.initMaterials();
        this.createGround();
        this.createWallBoxes();
        this.createSphere();
        return true;
    }


    // Create a large ball and let it fall freely from the air
    createSphere() {
        var sphereGeo = new SphereGeometry(2, 32, 32);
        var sphere = new Object3D();

        var meshRenderer = sphere.addComponent(MeshRenderer);
        meshRenderer.geometry = sphereGeo;
        var material = new LitMaterial();
        material.baseMap = Engine3D.res.grayTexture;

        meshRenderer.castShadow = true;
        meshRenderer.receiveShadow = true;
        meshRenderer.material = material;

        sphere.x = 0;
        sphere.y = 40;
        sphere.z = 0;

        let collider = sphere.addComponent(ColliderComponent);
        collider.shape = new SphereColliderShape(sphereGeo.radius);
        sphere.addComponent(Rigidbody);

        this.scene.addChild(sphere);
    }

    // make floor
    createGround() {
        let floorMat = new LitMaterial();
        floorMat.baseMap = Engine3D.res.grayTexture;
        floorMat.roughness = 0.85;
        floorMat.metallic = 0.01;

        let floor = new Object3D();
        let meshRenderer = floor.addComponent(MeshRenderer);
        meshRenderer.castShadow = true;
        meshRenderer.receiveShadow = true;
        meshRenderer.geometry = new PlaneGeometry(500, 500, 1, 1);
        meshRenderer.material = floorMat;

        let collider = floor.addComponent(ColliderComponent);
        collider.shape = new BoxColliderShape();
        collider.shape.size = new Vector3(500 / 2, 0.5, 500 / 2);

        let rigidbody = floor.addComponent(Rigidbody);
        rigidbody.mass = 0;

        this.scene.addChild(floor);
    }

    // Create some boxes and arrange them like a wall
    createWallBoxes() {
        let numBricksLength = 10;
        let numBricksHeight = 14;
        let materialIndex = 0;
        for (let i = 0; i < numBricksHeight; i++) {
            for (let j = 0; j < numBricksLength; j++) {
                let geo = new BoxGeometry(1, 1, 1);
                const element = new Object3D();
                let renderer = element.addComponent(MeshRenderer);
                renderer.geometry = geo;

                renderer.material = this.materials[materialIndex % this.materials.length];
                renderer.castShadow = true;
                renderer.receiveShadow = true;

                element.x = j - 4;
                element.y = i;

                let collider = element.addComponent(ColliderComponent);
                collider.shape = new BoxColliderShape();
                collider.shape.size = new Vector3(1, 1, 1);
                element.addComponent(Rigidbody);
                this.scene.addChild(element);
                materialIndex++;
            }
        }
    }

    loop() {
        Physics.update();
    }
}

new Sample_PhysicsBox().run();