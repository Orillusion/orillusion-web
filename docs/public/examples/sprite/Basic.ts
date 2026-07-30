import { AtmosphericComponent, BillboardComponent, BillboardType, BitmapTexture2D, CameraUtil, DirectLight, Engine3D, HoverCameraController, Object3D, Scene3D, SpriteRenderer, Vector2, View3D } from "@orillusion/core";
import dat from "dat.gui";

class Sample_Basic {
    private sprite!: SpriteRenderer;
    private spriteObj!: Object3D;
    private billboard!: BillboardComponent;

    private readonly s = {
        width: 2,
        height: 2,
        x: 0,
        y: 2,
        z: 0,
        cornerRadius: 0,
        billboard: BillboardType.None,
    };

    async run() {
        const engine = await Engine3D.init({});
        const scene = new Scene3D();
        const sky = scene.addComponent(AtmosphericComponent);

        const camera = CameraUtil.createCamera3DObject(scene);
        camera.perspective(60, engine.aspect, 0.1, 5000);
        camera.object3D.addComponent(HoverCameraController).setCamera(0, -15, 10);

        const view = new View3D();
        view.scene = scene;
        view.camera = camera;
        engine.startRenderView(view);

        const lightObj = new Object3D();
        lightObj.rotationX = 45; lightObj.rotationY = 110;
        lightObj.addComponent(DirectLight).intensity = 3;
        scene.addChild(lightObj);
        sky.relativeTransform = lightObj.transform;

        const tex = new BitmapTexture2D();
        tex.flipY = true;
        await tex.load('https://cdn.orillusion.com/images/T_Fx_Object_229.webp');

        this.spriteObj = new Object3D();
        this.sprite = this.spriteObj.addComponent(SpriteRenderer);
        this.sprite.texture = tex;
        this.spriteObj.localPosition.set(this.s.x, this.s.y, this.s.z);
        scene.addChild(this.spriteObj);

        this.sprite.size = new Vector2(this.s.width, this.s.height);
        this.sprite.cornerRadius = this.s.cornerRadius;

        this.billboard = this.spriteObj.addComponent(BillboardComponent);
        this.billboard.type = this.s.billboard;

        this.initGUI();
    }

    private initGUI() {
        const s = this.s;
        let gui = new dat.GUI();
        gui.add(s, 'width',  0.2, 10, 0.1).onChange(v => this.sprite.size = new Vector2(v, s.height));
        gui.add(s, 'height', 0.2, 10, 0.1).onChange(v => this.sprite.size = new Vector2(s.width, v));
        gui.add(s, 'x', -10, 10, 0.1).onChange(v => this.spriteObj.x = v);
        gui.add(s, 'y', -10, 10, 0.1).onChange(v => this.spriteObj.y = v);
        gui.add(s, 'z', -10, 10, 0.1).onChange(v => this.spriteObj.z = v);
        gui.add(s, 'cornerRadius', 0, 1, 0.01).onChange(v => this.sprite.cornerRadius = v);
        gui.add(s, 'billboard', {
            None: BillboardType.None,
            'Billboard Y': BillboardType.BillboardY,
            'Billboard XYZ': BillboardType.BillboardXYZ,
        }).onChange(v => this.billboard.type = Number(v));
        gui.open();
    }
}

new Sample_Basic().run();
