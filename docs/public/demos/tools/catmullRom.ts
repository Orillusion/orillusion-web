import { AtmosphericComponent, BoxGeometry, CameraUtil, CatmullRomCurve3, CatmullRomType, Color, ComponentBase, Cylindrical, DirectLight, Engine3D, GeometryBase, HoverCameraController, KelvinUtil, LitMaterial, Material, MeshRenderer, Object3D, Scene3D, SphereGeometry, Spherical, Time, UnLitMaterial, Vector3, View3D } from '@orillusion/core';
import { Graphic3D } from '@orillusion/graphic';
import * as dat from 'dat.gui';

/**
 * CatmullRomCurve3: the red spheres are the control points and the white line is the spline through them.
 * Yellow dots are getSpacedPoints (equal arc length), cyan dots are getPoints (equal parameter): the cyan ones
 * bunch up where control points are close. The orange box travels with getPointAt (constant speed) and faces
 * along getTangentAt.
 * Spherical / Cylindrical: the green ball orbits on a sphere and the purple one climbs a helix, both driven by
 * coordinate conversion only.
 */
class Sample_CatmullRom {
    private scene: Scene3D;
    private graphic: Graphic3D;
    private curve: CatmullRomCurve3;
    private spacedDots: Object3D[] = [];
    private paramDots: Object3D[] = [];
    private readonly state = { curveType: 'centripetal' as CatmullRomType, tension: 0.5, closed: true, length: 0 };

    async run() {
        const engine = await Engine3D.init();
        this.scene = new Scene3D();
        this.scene.addComponent(AtmosphericComponent).sunY = 0.6;

        const camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(45, engine.aspect, 0.1, 1000);
        camera.object3D.addComponent(HoverCameraController).setCamera(-30, -35, 85, new Vector3(0, 4, -4));

        const lightObj = new Object3D();
        lightObj.rotationX = 45;
        lightObj.rotationY = 160;
        const light = lightObj.addComponent(DirectLight);
        light.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
        light.intensity = 2;
        light.castShadow = true;
        light.enableCSM = true;
        this.scene.addChild(lightObj);

        this.graphic = new Graphic3D();
        this.scene.addChild(this.graphic);

        const control = [
            // three control points close together
            new Vector3(-30, 2, -10),
            new Vector3(-24, 10, -6),
            new Vector3(-20, 3, 0),
            new Vector3(5, 14, 14),
            new Vector3(28, 4, 6),
            new Vector3(24, 8, -18),
            new Vector3(-4, 2, -24)
        ];
        this.curve = new CatmullRomCurve3(control, this.state.closed, this.state.curveType, this.state.tension);

        const unlit = (r: number, g: number, b: number) => {
            const m = new UnLitMaterial();
            m.baseColor = new Color(r, g, b);
            return m;
        };
        const lit = (r: number, g: number, b: number) => {
            const m = new LitMaterial();
            m.baseColor = new Color(r, g, b);
            m.roughness = 0.5;
            return m;
        };
        control.forEach((p) => this.add(new SphereGeometry(0.9, 16, 16), unlit(1, 0.15, 0.1), p));
        const small = new SphereGeometry(0.35, 8, 8);
        const yellow = unlit(1, 0.9, 0.2);
        const cyan = unlit(0.2, 0.9, 1);
        for (let i = 0; i <= 40; i++) {
            this.spacedDots.push(this.add(small, yellow));
            this.paramDots.push(this.add(small, cyan));
        }

        const motion = this.scene.addComponent(Motion);
        motion.curve = this.curve;
        motion.follower = this.add(new BoxGeometry(1.6, 1.6, 4), lit(0.9, 0.5, 0.1));
        motion.satellite = this.add(new SphereGeometry(1, 24, 24), lit(0.2, 0.8, 0.3));
        motion.helix = this.add(new SphereGeometry(1, 24, 24), lit(0.6, 0.3, 0.9));

        const floor = this.add(new BoxGeometry(120, 1, 120), lit(0.45, 0.45, 0.5), new Vector3(0, -1, 0));
        floor.getComponent(MeshRenderer).castShadow = false;

        const view = new View3D();
        view.scene = this.scene;
        view.camera = camera;
        engine.startRenderView(view);

        this.rebuild();
        this.initGUI(motion);
    }

    private add(geo: GeometryBase, mat: Material, p: Vector3 = new Vector3()): Object3D {
        const obj = new Object3D();
        const mr = obj.addComponent(MeshRenderer);
        mr.geometry = geo;
        mr.material = mat;
        mr.castShadow = true;
        obj.localPosition = p;
        this.scene.addChild(obj);
        return obj;
    }

    private rebuild() {
        const c = this.curve;
        c.closed = this.state.closed;
        c.curveType = this.state.curveType;
        c.tension = this.state.tension;
        this.graphic.Clear('curve');
        this.graphic.drawLines('curve', c.getPoints(300), new Color(1, 1, 1));
        // Equal arc length (yellow, above the line) vs. equal curve parameter (cyan, below the line)
        const spaced = c.getSpacedPoints(40);
        const param = c.getPoints(40);
        for (let i = 0; i <= 40; i++) {
            this.spacedDots[i].localPosition = new Vector3(spaced[i].x, spaced[i].y + 0.9, spaced[i].z);
            this.paramDots[i].localPosition = new Vector3(param[i].x, param[i].y - 0.9, param[i].z);
        }
        this.state.length = +c.getLength().toFixed(2);
    }

    private initGUI(motion: Motion) {
        const gui = new dat.GUI();
        const f = gui.addFolder('CatmullRomCurve3');
        f.add(this.state, 'curveType', ['centripetal', 'chordal', 'catmullrom']).onChange(() => this.rebuild());
        // Only used by the 'catmullrom' type: 0 gives straight segments, larger values a looser curve
        f.add(this.state, 'tension', 0, 1, 0.01).onChange(() => this.rebuild());
        f.add(this.state, 'closed').onChange(() => this.rebuild());
        f.add(motion, 'constantSpeed');
        f.add(motion, 'speed', 0, 0.4, 0.005);
        f.add(this.state, 'length').listen();
        f.open();
        // Start collapsed so the panel does not cover the scene
        gui.close();
    }
}

/** Moves the follower along the curve and the two satellites by coordinate conversion. */
class Motion extends ComponentBase {
    public curve: CatmullRomCurve3;
    public follower: Object3D;
    public satellite: Object3D;
    public helix: Object3D;
    public constantSpeed = true;
    public speed = 0.08;
    private u = 0;
    private spherical = new Spherical(9, Math.PI / 3, 0);
    private cylindrical = new Cylindrical(6, 0, 0);

    public onUpdate(): void {
        if (!this.curve) return;
        const dt = Time.delta * 0.001;
        this.u = (this.u + dt * this.speed) % 1;
        // getPointAt / getTangentAt: constant speed; getPoint / getTangent: speed varies with control point spacing
        const pos = this.constantSpeed ? this.curve.getPointAt(this.u) : this.curve.getPoint(this.u);
        const tan = this.constantSpeed ? this.curve.getTangentAt(this.u) : this.curve.getTangent(this.u);
        this.follower.transform.lookAt(pos, new Vector3(pos.x + tan.x, pos.y + tan.y, pos.z + tan.z));

        // Orbit on a sphere of radius 9 around (0, 14, 0)
        this.spherical.theta += dt * 0.9;
        this.spherical.phi = Math.PI / 2 + Math.sin(Time.time * 0.0007) * 0.9;
        const s = this.spherical.toVector3();
        this.satellite.localPosition = new Vector3(s.x, s.y + 14, s.z);

        // Climb a helix of radius 6 around the Y axis
        this.cylindrical.theta += dt * 1.6;
        this.cylindrical.y = 14 + Math.sin(this.cylindrical.theta * 0.25) * 9;
        this.helix.localPosition = this.cylindrical.toVector3();
    }
}

new Sample_CatmullRom().run();
