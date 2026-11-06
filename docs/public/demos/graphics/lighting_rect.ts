import { BoxGeometry, CameraUtil, Color, ComponentBase, Engine3D, GeometryBase, HoverCameraController, LitMaterial, Material, MeshRenderer, Object3D, RectLight, Scene3D, SphereGeometry, TorusGeometry, UnLitMaterial, Vector3, View3D } from '@orillusion/core';
import * as dat from 'dat.gui';

type Panel = { obj: Object3D; light: RectLight; face: Object3D; mat: UnLitMaterial };

/**
 * RectLight: a dark studio lit only by three rectangular panels.
 * A warm key panel on the left, a cool one on the right and a magenta strip that swings over the stage.
 * The glossy floor shows each panel as a stretched rectangular reflection; the back wall and the matte
 * spheres show the soft, size-dependent diffuse falloff. The sphere rows sweep roughness from mirror-like to matte.
 * The light itself is invisible: each panel carries a thin unlit box so you can see where the emitter is.
 */
class Sample_RectLight {
    private scene: Scene3D;
    private panels: Panel[] = [];

    async run() {
        const engine = await Engine3D.init();
        this.scene = new Scene3D();

        const camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(50, engine.aspect, 0.1, 500);
        camera.object3D.addComponent(HoverCameraController).setCamera(20, -18, 30, new Vector3(0, 3, 0));

        this.buildStage();
        this.addPanel('key (warm)', new Color(1.0, 0.72, 0.45), 6, new Vector3(-9, 5, 3), new Vector3(0, 2, 0), 5, 4);
        this.addPanel('fill (cool)', new Color(0.45, 0.7, 1.0), 5, new Vector3(9, 4, 4), new Vector3(0, 2, 0), 3, 6);
        this.addPanel('strip (magenta)', new Color(1.0, 0.25, 0.8), 8, new Vector3(0, 8, -2), new Vector3(0, 0, -2), 10, 1);

        const swing = this.scene.addComponent(Swing);
        swing.target = this.panels[2].obj;

        const view = new View3D();
        view.scene = this.scene;
        view.camera = camera;
        engine.startRenderView(view);
        this.initGUI(swing);
    }

    private mesh(geo: GeometryBase, mat: Material, x: number, y: number, z: number): Object3D {
        const obj = new Object3D();
        const mr = obj.addComponent(MeshRenderer);
        mr.geometry = geo;
        mr.material = mat;
        obj.x = x;
        obj.y = y;
        obj.z = z;
        this.scene.addChild(obj);
        return obj;
    }

    private lit(r: number, g: number, b: number, roughness: number, metallic = 0): LitMaterial {
        const m = new LitMaterial();
        m.baseColor = new Color(r, g, b, 1);
        m.roughness = roughness;
        m.metallic = metallic;
        return m;
    }

    private buildStage() {
        // Glossy floor and matte back wall
        this.mesh(new BoxGeometry(60, 0.4, 60), this.lit(0.35, 0.35, 0.37, 0.35), 0, -0.2, 0);
        this.mesh(new BoxGeometry(60, 24, 0.4), this.lit(0.7, 0.7, 0.7, 1.0), 0, 12, -12);
        // Two rows of spheres sweeping roughness: metal in front, dielectric behind
        const ball = new SphereGeometry(1.2, 48, 48);
        for (let i = 0; i < 6; i++) {
            this.mesh(ball, this.lit(0.85, 0.85, 0.85, 0.1 + i * 0.18, 1), (i - 2.5) * 3, 1.2, 1);
            this.mesh(ball, this.lit(0.8, 0.8, 0.8, 0.2 + i * 0.16, 0), (i - 2.5) * 3, 1.2, -3);
        }
        const torus = this.mesh(new TorusGeometry(2, 0.6, 48, 64), this.lit(0.9, 0.75, 0.4, 0.4, 1), 0, 3.4, -7);
        torus.rotationX = 70;
    }

    private addPanel(name: string, color: Color, intensity: number, pos: Vector3, target: Vector3, width: number, height: number) {
        const obj = new Object3D();
        obj.name = name;
        const light = obj.addComponent(RectLight);
        light.lightColor = color;
        light.intensity = intensity;
        light.width = width;
        light.height = height;
        light.range = 45;
        this.scene.addChild(obj);
        // The panel emits along the object's forward axis: lookAt points it at the target
        obj.transform.lookAt(pos, target);

        // Visible emitter: a thin unlit box in the light's own plane
        const face = new Object3D();
        const mr = face.addComponent(MeshRenderer);
        mr.geometry = new BoxGeometry(1, 1, 0.05);
        const mat = new UnLitMaterial();
        mr.material = mat;
        mr.castShadow = false;
        obj.addChild(face);
        const panel = { obj, light, face, mat };
        this.panels.push(panel);
        this.syncFace(panel);
    }

    private syncFace(p: Panel) {
        p.face.localScale = new Vector3(p.light.width, p.light.height, 1);
        const c = p.light.lightColor;
        const k = Math.min(p.light.intensity, 12) / 4;
        p.mat.baseColor = new Color(c.r * k, c.g * k, c.b * k, 1);
    }

    private initGUI(swing: Swing) {
        const gui = new dat.GUI();
        for (const p of this.panels) {
            const f = gui.addFolder(p.obj.name);
            const c = p.light.lightColor;
            const proxy = { enable: true, color: [c.r * 255, c.g * 255, c.b * 255] };
            f.add(proxy, 'enable').onChange((v: boolean) => {
                p.light.enable = v;
                p.face.transform.enable = v;
            });
            f.add(p.light, 'intensity', 0, 20, 0.1).onChange(() => this.syncFace(p));
            f.add(p.light, 'width', 0.2, 16, 0.1).onChange(() => this.syncFace(p));
            f.add(p.light, 'height', 0.2, 16, 0.1).onChange(() => this.syncFace(p));
            f.add(p.light, 'range', 5, 80, 1);
            f.addColor(proxy, 'color').onChange((v: number[]) => {
                p.light.lightColor = new Color(v[0] / 255, v[1] / 255, v[2] / 255, 1);
                this.syncFace(p);
            });
        }
        const s = gui.addFolder('strip animation');
        s.add(swing, 'enable').name('swing');
        s.add(swing, 'speed', 0, 3, 0.05);
        // Start collapsed so the panel does not cover the scene
        gui.close();
    }
}

/** Swings the magenta strip light over the stage. */
class Swing extends ComponentBase {
    public target: Object3D;
    public speed = 0.6;
    private time = 0;

    public onUpdate(): void {
        if (!this.target) return;
        this.time += 0.016 * this.speed;
        const x = Math.sin(this.time) * 7;
        this.target.transform.lookAt(new Vector3(x, 8, -2 + Math.cos(this.time * 0.7) * 3), new Vector3(x * 0.3, 0, -2));
    }
}

new Sample_RectLight().run();
