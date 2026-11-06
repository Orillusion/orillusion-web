import { AtmosphericComponent, BoxGeometry, CameraUtil, Color, ComponentBase, CylinderGeometry, DirectLight, Engine3D, GeometryBase, HoverCameraController, KelvinUtil, LitMaterial, MeshRenderer, MotionBlurPost, Object3D, PostProcessingComponent, Scene3D, SphereGeometry, Time, View3D } from '@orillusion/core';
import * as dat from 'dat.gui';

/**
 * Per-object motion blur (setting.render.objectMotionVectors).
 * The camera stands still while the scene moves: a propeller spins, a pendulum swings, a row of spheres
 * shuttles back and forth and a cube tumbles. Each streaks according to its own speed, while the static
 * ground and pillars stay sharp.
 */
class Sample_ObjectMotionBlur {
    private scene: Scene3D;
    private blur: MotionBlurPost;

    async run() {
        const engine = await Engine3D.init({
            setting: {
                shadow: { enable: true, shadowBound: 80 },
                // Must be set at init: every opaque material gets its velocity pass when it is set up
                render: { objectMotionVectors: true }
            }
        });
        this.scene = new Scene3D();
        this.scene.addComponent(AtmosphericComponent).sunY = 0.65;

        const camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(50, engine.aspect, 0.1, 500);
        camera.object3D.addComponent(HoverCameraController).setCamera(20, -12, 40);

        const lightObj = new Object3D();
        lightObj.rotationX = 45;
        lightObj.rotationY = 140;
        const light = lightObj.addComponent(DirectLight);
        light.lightColor = KelvinUtil.color_temperature_to_rgb(5600);
        light.intensity = 3;
        light.castShadow = true;
        light.enableCSM = true;
        this.scene.addChild(lightObj);

        const anim = this.scene.addComponent(SceneAnimation);
        this.build(anim);

        const view = new View3D();
        view.scene = this.scene;
        view.camera = camera;
        engine.startRenderView(view);

        const post = this.scene.addComponent(PostProcessingComponent);
        this.blur = post.addPost(MotionBlurPost);
        this.blur.intensity = 1;
        this.blur.samples = 16;
        this.blur.maxBlurPixels = 96;
        this.initGUI(anim);
    }

    private lit(r: number, g: number, b: number, roughness = 0.6, metallic = 0): LitMaterial {
        const m = new LitMaterial();
        m.baseColor = new Color(r, g, b);
        m.roughness = roughness;
        m.metallic = metallic;
        return m;
    }

    private mesh(parent: Object3D, geo: GeometryBase, mat: LitMaterial, x = 0, y = 0, z = 0): Object3D {
        const obj = new Object3D();
        const mr = obj.addComponent(MeshRenderer);
        mr.geometry = geo;
        mr.material = mat;
        mr.castShadow = true;
        obj.x = x;
        obj.y = y;
        obj.z = z;
        parent.addChild(obj);
        return obj;
    }

    private build(anim: SceneAnimation) {
        this.mesh(this.scene, new BoxGeometry(80, 0.4, 80), this.lit(0.5, 0.5, 0.52, 0.9), 0, -0.2, 0);
        // Static pillars: a sharp reference next to the moving things
        const pillar = new BoxGeometry(1, 8, 1);
        for (let i = -3; i <= 3; i++) this.mesh(this.scene, pillar, this.lit(0.85, 0.85, 0.85, 0.7), i * 6, 4, -12);

        // Propeller: hub + three blades, rotating around z
        const propeller = new Object3D();
        propeller.x = -10;
        propeller.y = 8;
        this.scene.addChild(propeller);
        this.mesh(propeller, new CylinderGeometry(0.8, 0.8, 1.2, 24), this.lit(0.2, 0.2, 0.22, 0.4, 1)).rotationX = 90;
        const blade = new BoxGeometry(0.4, 7, 1.2);
        const bladeMats = [this.lit(0.9, 0.2, 0.15), this.lit(0.95, 0.8, 0.2), this.lit(0.2, 0.5, 0.95)];
        for (let i = 0; i < 3; i++) {
            const arm = new Object3D();
            arm.rotationZ = i * 120;
            propeller.addChild(arm);
            this.mesh(arm, blade, bladeMats[i], 0, 3.8, 0);
        }
        this.mesh(this.scene, new BoxGeometry(0.6, 8, 0.6), this.lit(0.3, 0.3, 0.3), -10, 4, -1);

        // Pendulum: pivot at the top, bob at the end of a rod
        const pendulum = new Object3D();
        pendulum.y = 12;
        this.scene.addChild(pendulum);
        this.mesh(pendulum, new CylinderGeometry(0.12, 0.12, 9, 12), this.lit(0.6, 0.6, 0.6, 0.4, 1), 0, -4.5, 0);
        this.mesh(pendulum, new SphereGeometry(1.4, 32, 32), this.lit(0.95, 0.55, 0.15, 0.3, 1), 0, -9.5, 0);
        this.mesh(this.scene, new BoxGeometry(6, 0.4, 0.4), this.lit(0.3, 0.3, 0.3), 0, 12.2, 0);

        // Shuttle: five spheres sliding along x, each with a different phase
        const ball = new SphereGeometry(0.9, 32, 32);
        const shuttle: Object3D[] = [];
        for (let i = 0; i < 5; i++) shuttle.push(this.mesh(this.scene, ball, this.lit(0.2 + i * 0.15, 0.8, 0.3), 0, 1.2, 4 + i * 2.2));

        const tumbler = this.mesh(this.scene, new BoxGeometry(3, 3, 3), this.lit(0.85, 0.3, 0.6, 0.5), 11, 4, 0);

        anim.propeller = propeller;
        anim.pendulum = pendulum;
        anim.shuttle = shuttle;
        anim.tumbler = tumbler;
    }

    private initGUI(anim: SceneAnimation) {
        const gui = new dat.GUI();
        const f = gui.addFolder('Object motion blur');
        f.add({ blur: true }, 'blur').onChange((v: boolean) => (this.blur.intensity = v ? 1 : 0));
        f.add(this.blur, 'intensity', 0, 3, 0.05);
        f.add(this.blur, 'samples', 2, 32, 1);
        f.add(this.blur, 'maxBlurPixels', 4, 256, 1);
        f.add(anim, 'propellerRpm', 0, 300, 1);
        f.add(anim, 'swing');
        f.add(anim, 'shuttleSpeed', 0, 3, 0.05);
        f.add(anim, 'tumble');
        f.open();
        // Start collapsed so the panel does not cover the scene
        gui.close();
    }
}

/** Moves the objects every frame. */
class SceneAnimation extends ComponentBase {
    public propellerRpm = 90;
    public swing = true;
    public shuttleSpeed = 1;
    public tumble = true;
    public propeller: Object3D;
    public pendulum: Object3D;
    public shuttle: Object3D[] = [];
    public tumbler: Object3D;
    private t = 0;

    public onUpdate(): void {
        if (!this.propeller) return;
        const dt = Math.min(Time.delta, 50) / 1000;
        this.t += dt;
        // rpm to degrees per second
        this.propeller.rotationZ += this.propellerRpm * 6 * dt;
        if (this.swing) this.pendulum.rotationZ = Math.sin(this.t * 2.2) * 50;
        for (let i = 0; i < this.shuttle.length; i++) {
            this.shuttle[i].x = Math.sin((this.t * this.shuttleSpeed + i * 0.6) * 1.8) * 12;
        }
        if (this.tumble) {
            this.tumbler.rotationX += 140 * dt;
            this.tumbler.rotationY += 90 * dt;
        }
    }
}

new Sample_ObjectMotionBlur().run();
