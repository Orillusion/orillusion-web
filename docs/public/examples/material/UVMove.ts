import { Scene3D, Engine3D, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, Object3D, DirectLight, KelvinUtil, MeshRenderer, PlaneGeometry, LitMaterial, Color, BlendMode, ComponentBase, Material, Time, Vector4 } from '@orillusion/core';
import dat from 'dat.gui';

class Sample_UVMove {
    scene: Scene3D;
    lightObj: Object3D;
    async run() {
        await Engine3D.init();

        this.scene = new Scene3D();
        let sky = this.scene.addComponent(AtmosphericComponent);

        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, Engine3D.aspect, 0.01, 5000.0);

        camera.object3D.addComponent(HoverCameraController).setCamera(25, -25, 200);

        let view = new View3D();
        view.scene = this.scene;
        view.camera = camera;

        Engine3D.startRenderView(view);

        await this.initScene();
        sky.relativeTransform = this.lightObj.transform;
    }

    async initScene() {
        /******** light *******/
        {
            let lightObj = (this.lightObj = new Object3D());
            lightObj.rotationX = 57;
            lightObj.rotationY = 347;
            lightObj.rotationZ = 0;

            let directLight = lightObj.addComponent(DirectLight);
            directLight.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
            directLight.intensity = 3;
            this.scene.addChild(lightObj);
        }
        {
            // add floor
            let floor = new Object3D();
            let material = new LitMaterial();
            material.doubleSide = true;
            material.baseMap = await Engine3D.res.loadTexture('https://cdn.orillusion.com/textures/diffuse.jpg');

            let renderer = floor.addComponent(MeshRenderer);
            renderer.material = material;
            renderer.geometry = new PlaneGeometry(200, 200, 1, 1);

            floor.y = -10;
            this.scene.addChild(floor);
        }
        {
            // add plane
            let plane = new Object3D();
            let renderer = plane.addComponent(MeshRenderer);
            let material = new LitMaterial();
            material.baseMap = await Engine3D.res.loadTexture('https://cdn.orillusion.com/particle/T_Fx_Object_229.png');
            renderer.material = material;
            material.blendMode = BlendMode.NORMAL;
            renderer.geometry = new PlaneGeometry(100, 100, 1, 1);
            this.scene.addChild(plane);

            let uvmove = plane.addComponent(UVMoveComponent);
            let gui = new dat.GUI();
            let f = gui.addFolder('UV Move');
            f.add(uvmove.speed, 'x', -1, 1, 0.01);
            f.add(uvmove.speed, 'y', -1, 1, 0.01);
            f.add(uvmove.speed, 'z', 0.1, 10, 0.01);
            f.add(uvmove.speed, 'w', 0.1, 10, 0.01);
            f.add(uvmove, 'enable');
            f.open();
        }
    }
}

class UVMoveComponent extends ComponentBase {
    private _material: Material;
    private readonly _speed: Vector4 = new Vector4(0.1, 0.1, 1, 1);

    public get speed(): Vector4 {
        return this._speed;
    }

    public set speed(value: Vector4) {
        this._speed.copyFrom(value);
    }

    start(): void {
        let mr = this.object3D.getComponent(MeshRenderer);
        if (mr) {
            this._material = mr.material;
        }
    }

    onUpdate(): void {
        if (this._material) {
            let value = this._material.getUniformV4(`baseMapOffsetSize`);
            value.x += Time.delta * this._speed.x * 0.001;
            value.y += Time.delta * this._speed.y * 0.001;
            value.z = this._speed.z;
            value.w = this._speed.w;
            this._material.setUniformVector4(`baseMapOffsetSize`, value);
        }
    }
}

new Sample_UVMove().run();
