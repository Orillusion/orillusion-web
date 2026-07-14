import {AtmosphericComponent, BillboardComponent, BillboardType, BitmapTexture2D, CameraUtil, DirectLight, Engine3D, HoverCameraController, Object3D, Scene3D, SpriteRenderer, Vector2, View3D, Sprite, Vector4, Color } from "@orillusion/core";
import * as dat from 'dat.gui';

class Sample_atlas {
    private sprite!: SpriteRenderer;
    private spriteObj!: Object3D;
    private billboard!: BillboardComponent;
    private gui!: dat.GUI;

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
        
        this.gui = new dat.GUI();

        const camera = CameraUtil.createCamera3DObject(scene);
        camera.perspective(60, engine.aspect, 0.1, 5000);
        camera.object3D.addComponent(HoverCameraController).setCamera(0, -15, 2);

        const view = new View3D();
        view.scene = scene;
        view.camera = camera;
        engine.startRenderView(view);

        // Sun light for the atmospheric sky
        const lightObj = new Object3D();
        lightObj.rotationX = 45; lightObj.rotationY = 110;
        lightObj.addComponent(DirectLight).intensity = 3;
        scene.addChild(lightObj);
        sky.relativeTransform = lightObj.transform;

        // Load a texture
        const atlasTexture = new BitmapTexture2D();
        await atlasTexture.load('https://cdn.orillusion.com/particle/crystal_debug.png');

        // The sprite
        this.spriteObj = new Object3D();
        this.sprite = this.spriteObj.addComponent(SpriteRenderer);
        this.sprite.texture = atlasTexture;
        this.spriteObj.localPosition.set(this.s.x, this.s.y, this.s.z);
        scene.addChild(this.spriteObj);

        this.sprite.size = new Vector2(this.s.width, this.s.height);
        this.sprite.cornerRadius = this.s.cornerRadius;

        // Billboard is composed as a separate component
        this.billboard = this.spriteObj.addComponent(BillboardComponent);
        this.billboard.type = this.s.billboard;

        {
            const sprite1 = new Sprite({
                texture: atlasTexture,
                region: new Vector4(0, 0, 1.0 / 4, 1.0 / 4),
                pivot: new Vector2(0.5, 0.5),
                name: '1',
            });

            const Obj = new Object3D();
            const spriteObj = Obj.addComponent(SpriteRenderer);
            spriteObj.color = new Color(1, 1, 0, 1);
            spriteObj.sprite = sprite1;
            scene.addChild(Obj);
        }

        this.initGUI();
    }

    private initGUI() {
        const s = this.s;
        const folder = this.gui.addFolder('Basic');
        folder.add(s, 'width',  0.2, 10, 0.1).onChange(v => this.sprite.size = new Vector2(v, s.height));
        folder.add(s, 'height', 0.2, 10, 0.1).onChange(v => this.sprite.size = new Vector2(s.width, v));
        folder.add(s, 'x', -10, 10, 0.1).onChange(v => this.spriteObj.x = v);
        folder.add(s, 'y', -10, 10, 0.1).onChange(v => this.spriteObj.y = v);
        folder.add(s, 'z', -10, 10, 0.1).onChange(v => this.spriteObj.z = v);
        folder.add(s, 'cornerRadius', 0, 1, 0.01).onChange(v => this.sprite.cornerRadius = v);
        folder.add(s, 'billboard', {
            None: BillboardType.None,
            'Billboard Y': BillboardType.BillboardY,
            'Billboard XYZ': BillboardType.BillboardXYZ,
        }).onChange(v => this.billboard.type = Number(v));
        folder.open();
    }
}

new Sample_atlas().run();
