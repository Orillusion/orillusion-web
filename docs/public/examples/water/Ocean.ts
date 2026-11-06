import { AtmosphericComponent, Camera3D, CameraUtil, Color, ComponentBase, DirectLight, Engine3D, GeometryBase, HoverCameraController, KelvinUtil, LitMaterial, MeshRenderer, Object3D, PointerEvent3D, Scene3D, SphereGeometry, Time, Vector2, Vector3, VertexAttributeName, View3D, WaterRenderer, WaterSpectrum } from '@orillusion/core';
import dat from 'dat.gui';

/** Radius of the ocean disc around the buoy. */
const OCEAN_RADIUS = 3000;

/**
 * Open ocean: long swells over deep water with no bottom in sight. The waves come from
 * a wind spectrum simulated with FFTs (WaterRenderer.spectrum); whitecaps leave foam.
 *
 * The surface is a disc of rings around the buoy, centimetres apart near it and growing
 * with distance; each wave fades out where the rings get too coarse for it
 * (WaterRenderer.waveFadeDistance), so the distance does not alias.
 *
 * Ripples are simulated in a 60 m square around the buoy (WaterRenderer.rippleArea):
 * click the water to splash, or the buoy to push it under.
 */
class Sample_Ocean {
    async run() {
        const engine = await Engine3D.init({ setting: { render: { water: true } } });

        const scene = new Scene3D();
        scene.addComponent(AtmosphericComponent);

        const camera = CameraUtil.createCamera3DObject(scene);
        camera.perspective(60, engine.aspect, 0.1, 5000);
        // Low over the water, looking across toward the sun
        camera.object3D.addComponent(HoverCameraController).setCamera(150, -8, 28, new Vector3(0, 0, 0));

        const view = new View3D();
        view.scene = scene;
        view.camera = camera;
        engine.startRenderView(view);

        const light = new Object3D();
        light.rotationX = 30;
        light.rotationY = 150;
        const dl = light.addComponent(DirectLight);
        dl.lightColor = KelvinUtil.color_temperature_to_rgb(5500);
        dl.intensity = 3;
        scene.addChild(light);

        const waterObj = new Object3D();
        const water = waterObj.addComponent(WaterRenderer);
        // 400 rings, 5 cm apart at the center; farther out the spacing is about 1.75% of the distance,
        // so a wave gets four vertices per wavelength out to 14 wavelengths
        const growth = 0.0175 * 400;
        water.surfaceGeometry = radialGeometry(
            () => OCEAN_RADIUS,
            400,
            512,
            (t) => (Math.exp(growth * t) - 1) / (Math.exp(growth) - 1)
        );
        // Fade each wave out before the rings get too coarse for it
        water.waveFadeDistance = 14;
        // A rough sea from a 12 m/s wind over 100 km of open water, simulated with FFTs
        const spectrum = new WaterSpectrum();
        spectrum.windSpeed = 12;
        spectrum.windDirection = new Vector2(1, 0.3);
        spectrum.fetch = 100000;
        water.spectrum = spectrum;
        // No Gerstner waves: the spectrum makes all of them
        water.waves = [];
        // Clear, deep blue water; nothing below to catch caustics
        const m = water.waterMaterial;
        m.absorptionColor = new Color(0.1, 0.4, 0.6);
        m.underwaterColor = new Color(0.0, 0.07, 0.14);
        m.density = 0.08;
        // Wind-roughened: the sky reflection is soft
        m.reflectionRoughness = 0.08;
        water.caustics = false;
        // Wind chop a few metres long, gentle at this scale
        water.detailScale = 2.5;
        water.detailStrength = 0.4;
        // A grid over the whole ocean would be metres per cell; ripples need a smaller area
        water.rippleArea = 60;
        scene.addChild(waterObj);

        const buoy = floatingBall(scene, water, 1.2, 0, 0, new Color(0.9, 0.2, 0.15));
        addPointerRipples(engine, camera, water, [buoy]);

        const toRGB = (c: Color) => [c.r * 255, c.g * 255, c.b * 255];
        const fromRGB = (v: number[]) => new Color(v[0] / 255, v[1] / 255, v[2] / 255);
        const s = {
            paused: false,
            speed: water.timeScale,
            absorptionColor: toRGB(m.absorptionColor),
            underwaterColor: toRGB(m.underwaterColor)
        };
        const applyTime = () => (water.timeScale = s.paused ? 0 : s.speed);
        const gui = new dat.GUI();
        const sea = gui.addFolder('Sea');
        sea.add(spectrum, 'windSpeed', 1, 25, 0.1);
        sea.add(spectrum, 'fetch', 1000, 500000, 1000);
        sea.add(spectrum, 'amplitude', 0, 3, 0.01);
        sea.add(spectrum, 'choppiness', 0, 2, 0.01);
        sea.open();
        const f = gui.addFolder('Water');
        f.add(s, 'paused').onChange(applyTime);
        f.add(s, 'speed', 0, 3, 0.01).onChange(applyTime);
        f.addColor(s, 'absorptionColor').onChange((v: number[]) => (m.absorptionColor = fromRGB(v)));
        f.addColor(s, 'underwaterColor').onChange((v: number[]) => (m.underwaterColor = fromRGB(v)));
        f.add(m, 'density', 0, 2, 0.01);
        f.add(m, 'foamIntensity', 0, 1, 0.01);
        f.add(m, 'reflectionRoughness', 0, 0.5, 0.01);
        f.add(m, 'subsurfaceIntensity', 0, 3, 0.01);
        f.open();
        // Start collapsed so the panel does not cover the scene
        gui.close();
    }
}

/** Floats its object on the water with WaterRenderer.getHeight; a push sends it under and it bobs back up. */
class Floater extends ComponentBase {
    private water!: WaterRenderer;
    private x = 0;
    private z = 0;
    private lift = 0;
    private size = 1;
    private bob = 0;
    private bobV = 0;

    public init(param?: { water: WaterRenderer; x: number; z: number; lift: number; size: number }): void {
        if (!param) return;
        this.water = param.water;
        this.x = param.x;
        this.z = param.z;
        this.lift = param.lift;
        this.size = param.size;
    }

    public get radius(): number {
        return this.size;
    }

    public push(): void {
        this.bobV = -4;
        this.water.addRipple(this.x, this.z, 0.5, this.size * 1.2);
    }

    public onUpdate(): void {
        if (!this.water) return;
        const dt = Math.min(Time.delta * 0.001, 1 / 30);
        if (this.bob !== 0 || this.bobV !== 0) {
            const before = this.bob;
            this.bobV += (-40 * this.bob - 4 * this.bobV) * dt;
            this.bob += this.bobV * dt;
            if (before < -this.size * 0.3 && this.bob >= -this.size * 0.3 && this.bobV > 1) {
                this.water.addRipple(this.x, this.z, 0.2, this.size);
            }
            if (Math.abs(this.bob) < 1e-3 && Math.abs(this.bobV) < 1e-2) this.bob = this.bobV = 0;
        }
        // With a spectrum, getHeight also queues the point for the GPU; the FFT part arrives a frame or two later
        this.transform.x = this.x;
        this.transform.y = this.water.getHeight(this.x, this.z) + this.lift + this.bob;
        this.transform.z = this.z;
    }
}

function floatingBall(scene: Scene3D, water: WaterRenderer, radius: number, x: number, z: number, color: Color): Floater {
    const ball = new Object3D();
    const mr = ball.addComponent(MeshRenderer);
    mr.geometry = new SphereGeometry(radius, 32, 32);
    const mat = new LitMaterial();
    mat.baseColor = color;
    mat.roughness = 0.4;
    mat.metallic = 0;
    mr.material = mat;
    const floater = ball.addComponent(Floater, { water, x, z, lift: radius * 0.6, size: radius });
    scene.addChild(ball);
    return floater;
}

function addPointerRipples(engine: Engine3D, camera: Camera3D, water: WaterRenderer, floaters: Floater[], splash = 0.4, radius = 0.4): void {
    engine.inputSystem.addEventListener(
        PointerEvent3D.POINTER_DOWN,
        (e: PointerEvent3D) => {
            const ray = camera.screenPointToRay(e.mouseX, e.mouseY);
            for (const f of floaters) {
                const c = f.transform.worldPosition;
                const ox = ray.origin.x - c.x,
                    oy = ray.origin.y - c.y,
                    oz = ray.origin.z - c.z;
                const b = ox * ray.direction.x + oy * ray.direction.y + oz * ray.direction.z;
                if (b * b - (ox * ox + oy * oy + oz * oz - f.radius * f.radius) >= 0 && b < 0) return f.push();
            }
            if (ray.direction.y >= 0) return;
            const t = (water.baseHeight - ray.origin.y) / ray.direction.y;
            // Points outside rippleArea are ignored
            water.addRipple(ray.origin.x + ray.direction.x * t, ray.origin.z + ray.direction.z * t, splash, radius);
        },
        null
    );
}

/**
 * Flat mesh in the xz plane bounded by a closed curve around the origin:
 * rings from the center out to `outline(angle)`, radii spaced by `ringRadius(t)` for t from 0 to 1.
 */
function radialGeometry(outline: (angle: number) => number, rings: number, segments: number, ringRadius: (t: number) => number = (t) => t): GeometryBase {
    const count = 1 + rings * segments;
    const pos = new Float32Array(count * 3);
    const nor = new Float32Array(count * 3);
    const uv = new Float32Array(count * 2);
    nor[1] = 1;
    uv[0] = uv[1] = 0.5;
    for (let s = 0; s < segments; s++) {
        const a = (s / segments) * Math.PI * 2;
        const edge = outline(a);
        for (let r = 1; r <= rings; r++) {
            const i = 1 + (r - 1) * segments + s;
            const rr = edge * ringRadius(r / rings);
            pos[i * 3] = Math.cos(a) * rr;
            pos[i * 3 + 2] = Math.sin(a) * rr;
            nor[i * 3 + 1] = 1;
            uv[i * 2] = 0.5 + (0.5 * Math.cos(a) * r) / rings;
            uv[i * 2 + 1] = 0.5 + (0.5 * Math.sin(a) * r) / rings;
        }
    }
    const idx: number[] = [];
    for (let s = 0; s < segments; s++) idx.push(0, 1 + ((s + 1) % segments), 1 + s);
    for (let r = 1; r < rings; r++) {
        for (let s = 0; s < segments; s++) {
            const a = 1 + (r - 1) * segments + s;
            const b = 1 + (r - 1) * segments + ((s + 1) % segments);
            idx.push(a, b, a + segments, b, b + segments, a + segments);
        }
    }
    const g = new GeometryBase();
    g.setIndices(count > 65535 ? new Uint32Array(idx) : new Uint16Array(idx));
    g.setAttribute(VertexAttributeName.position, pos);
    g.setAttribute(VertexAttributeName.normal, nor);
    g.setAttribute(VertexAttributeName.uv, uv);
    g.setAttribute(VertexAttributeName.TEXCOORD_1, uv);
    g.addSubGeometry({ indexStart: 0, indexCount: idx.length, vertexStart: 0, vertexCount: 0, firstStart: 0, index: 0, topology: 0 });
    return g;
}

new Sample_Ocean().run();
