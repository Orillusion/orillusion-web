import { AtmosphericComponent, CameraUtil, Color, DirectLight, Engine3D, HoverCameraController, KelvinUtil, Object3D, Scene3D, SpriteRenderer, Vector2, View3D } from "@orillusion/core";
import { VideoTexture } from "@orillusion/media-extention";
import dat from "dat.gui";

class Sample_Video {
    engine: Engine3D;
    scene: Scene3D;
    view: View3D;
    lightObj: Object3D;

    private obj: Object3D;
    private sprite: SpriteRenderer;
    private video: VideoTexture;

    private readonly state = {
        width: 16,
        height: 9,
        color: new Color(1, 1, 1, 1),
    };

    async run() {
        this.engine = await Engine3D.init({});

        this.scene = new Scene3D();
        let sky = this.scene.addComponent(AtmosphericComponent);

        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, this.engine.aspect, 0.1, 5000.0);
        camera.object3D.addComponent(HoverCameraController).setCamera(0, -10, 40);

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

        this.video = new VideoTexture(this.engine.context3D);
        await this.video.load('https://cdn.orillusion.com/videos/bunny.mp4');

        this.obj = new Object3D();
        this.sprite = this.obj.addComponent(SpriteRenderer);
        this.sprite.size = new Vector2(this.state.width, this.state.height);
        this.sprite.pivot = new Vector2(0.5, 0.5);
        this.sprite.color = this.state.color;
        this.sprite.texture = this.video;
        this.scene.addChild(this.obj);
    }

    private initGUI() {
        let gui = new dat.GUI();
        gui.add(this.state, 'width', 2, 40, 0.5).onChange(v => this.sprite.size = new Vector2(v, this.state.height));
        gui.add(this.state, 'height', 2, 40, 0.5).onChange(v => this.sprite.size = new Vector2(this.state.width, v));
        gui.addColor({ color: Object.values(this.state.color).map((v) => v * 255) }, 'color').onChange((v) => {
            this.state.color = new Color().copyFromArray(v);
        });
        gui.open();

    }
}

new Sample_Video().run();
