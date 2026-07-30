import { AtmosphericComponent, BitmapTexture2D, CameraUtil, Color, DirectLight, Engine3D, HoverCameraController, KelvinUtil, Object3D, Scene3D, SpriteRenderer, Vector2, Vector3, View3D } from "@orillusion/core";
import dat from "dat.gui";

class Sample_RenderOrder {
    engine: Engine3D;
    scene: Scene3D;
    view: View3D;
    lightObj: Object3D;
    texture: BitmapTexture2D;

    private cards: Array<{ sprite: SpriteRenderer; name: string }> = [];

    async run() {
        this.engine = await Engine3D.init({});

        this.scene = new Scene3D();
        let sky = this.scene.addComponent(AtmosphericComponent);

        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, this.engine.aspect, 0.1, 5000.0);
        camera.object3D.addComponent(HoverCameraController).setCamera(0, -10, 8);

        this.view = new View3D();
        this.view.scene = this.scene;
        this.view.camera = camera;

        this.engine.startRenderView(this.view);

        await this.initScene();
        sky.relativeTransform = this.lightObj.transform;

        this.initGUI();
    }

    async initScene() {
        {
            this.lightObj = new Object3D();
            this.lightObj.rotationX = 45;
            this.lightObj.rotationY = 110;
            let lc = this.lightObj.addComponent(DirectLight);
            lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
            lc.intensity = 3;
            this.scene.addChild(this.lightObj);
        }

        {
            this.texture = new BitmapTexture2D();
            this.texture.flipY = true;
            await this.texture.load('https://cdn.orillusion.com/images/T_Fx_Object_229.webp');
        }

        const defs = [
            { name: 'red',   color: new Color(1.0, 0.3, 0.3, 1), offsetX: -0.5, offsetY:  0.4, order: 3000 },
            { name: 'green', color: new Color(0.3, 1.0, 0.4, 1), offsetX:  0.5, offsetY:  0.4, order: 3001 },
            { name: 'blue',  color: new Color(0.4, 0.5, 1.0, 1), offsetX:  0.0, offsetY: -0.4, order: 3002 },
        ] as const;

        for (const d of defs) {
            const obj = new Object3D();
            const sprite = obj.addComponent(SpriteRenderer);
            sprite.texture = this.texture;
            sprite.size = new Vector2(2.0, 2.0);
            sprite.pivot = new Vector2(0.5, 0.5);
            sprite.cornerRadius = 0.2;
            sprite.color = d.color;
            obj.localPosition = new Vector3(d.offsetX, d.offsetY + 2, 0);
            this.scene.addChild(obj);
            sprite.renderOrder = d.order;
            this.cards.push({ sprite, name: d.name });
        }
    }

    private _preset(topName: string) {
        const others = this.cards.filter(c => c.name !== topName);
        others[0].sprite.renderOrder = 3000;
        others[1].sprite.renderOrder = 3001;
        this.cards.find(c => c.name === topName)!.sprite.renderOrder = 3002;
    }

    private initGUI() {
        let gui = new dat.GUI();
        gui.add({ on: () => this._preset('red')}, 'on').name('Red on top');
        gui.add({ on: () => this._preset('green')}, 'on').name('Green on top');
        gui.add({ on: () => this._preset('blue')}, 'on').name('Blue on top');
        gui.open();
    }
}

new Sample_RenderOrder().run();
