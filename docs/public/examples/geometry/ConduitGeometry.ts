import { BitmapTexture2D, Color, Engine3D, ExtrudeGeometry, GeometryBase, LitMaterial, MeshRenderer, SphereGeometry, Vector3, AtmosphericComponent, CameraUtil, DirectLight, HoverCameraController, KelvinUtil, Object3D, Scene3D, View3D } from '@orillusion/core';
import dat from 'dat.gui';
import { Stats } from '@orillusion/stats';

// An sample to use ExtrudeGeometry
class Sample_ConduitGeometry {
    scene: Scene3D;
    material: LitMaterial;
    object3Ds: Object3D[] = [];
    isClosedConduit: boolean = true;
    shapeRadius = 1;
    modelRadius = 4;
    private geo: GeometryBase;
    private mats: LitMaterial[];

    async run() {
        await Engine3D.init();

        // init Scene3D
        this.scene = new Scene3D();
        this.scene.exposure = 1;
        this.scene.addComponent(Stats);

        // init sky
        let atmosphericSky: AtmosphericComponent;
        atmosphericSky = this.scene.addComponent(AtmosphericComponent);

        // init Camera3D
        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, Engine3D.aspect, 1, 5000);

        // init Camera Controller
        let hoverCtrl = camera.object3D.addComponent(HoverCameraController);
        hoverCtrl.setCamera(-30, -15, 50);

        // init View3D
        let view = new View3D();
        view.scene = this.scene;
        view.camera = camera;

        // create direction light
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
        light.intensity = 3;

        this.scene.addChild(light.object3D);

        // relative light to sky
        atmosphericSky.relativeTransform = light.transform;

        Engine3D.startRenderView(view);

        await this.createMaterial();

        let gui = new dat.GUI();
        gui.add(this, 'isClosedConduit').onChange(() => {
            if (this.object3Ds.length) {
                for (let item of this.object3Ds) {
                    item.removeSelf();
                }
            }
            this.object3Ds.length = 0;
            this.createConduit();
        });
        this.createConduit();
    }

    async createMaterial() {
        this.material = new LitMaterial();
        let texture = new BitmapTexture2D();
        texture.addressModeU = 'repeat';
        texture.addressModeV = 'repeat';
        await texture.load('https://cdn.orillusion.com/textures/grid.webp');
        this.material.baseMap = texture;
    }

    private createConduit() {
        let shape = this.getShape();
        let curve = this.getCurve();
        let conduitObject3D = new Object3D();
        this.scene.addChild(conduitObject3D);

        let renderer = conduitObject3D.addComponent(MeshRenderer);
        renderer.material = this.material;
        let geometry = (renderer.geometry = new ExtrudeGeometry().build(shape, this.isClosedConduit, curve, 0.2));

        this.object3Ds.push(conduitObject3D);
        //show vertex point
        for (const item of geometry.sections) {
            for (let i = 0, count = item.rotateShape.length; i < count; i++) {
                let ball = this.showPoint(item.rotateShape[i].add(item.center), i);
                this.object3Ds.push(ball);
            }
        }
    }

    private getShape(): Vector3[] {
        let vertexList: Vector3[] = []; //circle
        let radius = this.shapeRadius;
        const vertexCount = 8;
        for (let i = 0; i < vertexCount; i++) {
            let angle = (Math.PI * 2 * i) / vertexCount;
            let point = new Vector3(Math.sin(angle), 0, Math.cos(angle)).multiplyScalar(radius);
            vertexList.push(point);
        }
        return vertexList;
    }

    private getCurve(): Vector3[] {
        let vertexList: Vector3[] = [];
        let radius = this.modelRadius;
        const sectionCount = 60;
        for (let i = 0; i < sectionCount; i++) {
            let angle = (Math.PI * 2 * i) / 20;
            radius += (0.1 * i) / sectionCount;
            let offsetY = 0.6 - Math.sqrt(i / sectionCount);
            let point = new Vector3(Math.sin(angle), offsetY * 6, Math.cos(angle)).multiplyScalar(radius);
            vertexList.push(point);
        }
        return vertexList;
    }

    private showPoint(p: Vector3, index: number): Object3D {
        this.geo ||= new SphereGeometry(0.3, 10, 10);
        if (!this.mats) {
            this.mats = [];
            for (let i = 0; i < 40; i++) {
                let mat = new LitMaterial();
                mat.baseColor = Color.random();
                this.mats.push(mat);
            }
        }

        let obj = new Object3D();
        this.scene.addChild(obj);
        let m = obj.addComponent(MeshRenderer);
        m.material = this.mats[index];
        m.geometry = this.geo;

        obj.localPosition = p;

        return obj;
    }
}

new Sample_ConduitGeometry().run();
