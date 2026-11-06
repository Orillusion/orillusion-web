import { AtmosphericComponent, BitmapTexture2D, Camera3D, CameraUtil, Color, ComponentBase, Context3D, DirectLight, Engine3D, GeometryBase, HoverCameraController, KelvinUtil, LitMaterial, MeshRenderer, Object3D, PointerEvent3D, Scene3D, SphereGeometry, Time, Vector2, Vector3, VertexAttributeName, View3D, WaterRenderer } from '@orillusion/core';
import dat from 'dat.gui';

const LAKE_RADIUS = 22;
const LAKE_DEPTH = 4;
const TERRAIN_SIZE = 160;

/** Distance from the center to the shoreline in the direction `angle`. */
function shore(angle: number): number {
    return LAKE_RADIUS * (1 + 0.22 * Math.sin(2 * angle + 0.6) + 0.12 * Math.sin(3 * angle + 1.9) + 0.07 * Math.sin(5 * angle + 0.3));
}

/** Ground height: a bowl down to LAKE_DEPTH inside the shoreline, rising into rolling grass outside. */
function groundHeight(x: number, z: number): number {
    const r = Math.hypot(x, z);
    const edge = shore(Math.atan2(z, x));
    const s = r / edge;
    if (s < 1) {
        const bed = 1 - s * s;
        return -LAKE_DEPTH * bed + 0.3 * Math.sin(x * 0.35) * Math.cos(z * 0.29) * bed;
    }
    const out = r - edge;
    const hills = 3 * (Math.sin(x * 0.045 + 1) * Math.cos(z * 0.06) + 1) * smoothstep(6, 30, out);
    return Math.min(out * 0.2, 1.5) + hills;
}

function smoothstep(a: number, b: number, x: number): number {
    const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
    return t * t * (3 - 2 * t);
}

/**
 * Lake: water with an irregular outline (WaterRenderer.surfaceGeometry) in a bowl of terrain.
 * The surface mesh follows the shoreline and reaches a metre past it, under the ground;
 * the underwater view, caustics and ripples all follow the same outline.
 *
 * Click the water for a splash or the buoy to push it under, hold Shift and move the mouse
 * to drag a trail; the buoy can drift or be dropped.
 */
class Sample_Lake {
    async run() {
        const engine = await Engine3D.init({ setting: { render: { water: true } } });

        const scene = new Scene3D();
        scene.addComponent(AtmosphericComponent);

        const camera = CameraUtil.createCamera3DObject(scene);
        camera.perspective(60, engine.aspect, 0.1, 2000);
        camera.object3D.addComponent(HoverCameraController).setCamera(37.7, -30.3, 19.2, new Vector3(7.48, -0.5, 4.13));

        const view = new View3D();
        view.scene = scene;
        view.camera = camera;
        engine.startRenderView(view);

        const light = new Object3D();
        light.rotationX = 45;
        light.rotationY = 40;
        const dl = light.addComponent(DirectLight);
        dl.lightColor = KelvinUtil.color_temperature_to_rgb(5800);
        dl.intensity = 3;
        dl.castShadow = true;
        scene.addChild(light);

        const ground = new LitMaterial();
        ground.baseMap = paintGround(engine.context3D);
        ground.roughness = 0.9;
        ground.metallic = 0;
        const terrain = new Object3D();
        const terrainRenderer = terrain.addComponent(MeshRenderer);
        terrainRenderer.geometry = heightfieldGeometry(TERRAIN_SIZE, 256, groundHeight);
        terrainRenderer.material = ground;
        terrainRenderer.receiveShadow = true;
        scene.addChild(terrain);

        const waterObj = new Object3D();
        const water = waterObj.addComponent(WaterRenderer);
        // Custom outline: the shoreline plus a metre, hidden under the rising ground
        water.surfaceGeometry = radialGeometry((a) => shore(a) + 1, 56, 320);
        water.waves = [
            { direction: new Vector2(1, 0.4), wavelength: 7, steepness: 0.06 },
            { direction: new Vector2(0.6, 1), wavelength: 4.3, steepness: 0.05 },
            { direction: new Vector2(-0.5, 0.8), wavelength: 2.6, steepness: 0.04 },
            { direction: new Vector2(0.9, -0.6), wavelength: 1.8, steepness: 0.03 }
        ];
        // Green, murkier than a pool
        const m = water.waterMaterial;
        m.absorptionColor = new Color(0.25, 0.55, 0.42);
        m.underwaterColor = new Color(0.05, 0.13, 0.1);
        m.density = 0.45;
        water.detailScale = 2.2;
        water.detailStrength = 0.5;
        water.rippleResolution = 384;
        scene.addChild(waterObj);

        const buoy = floatingBall(scene, water, 0.4, 4, 3, new Color(0.95, 0.75, 0.15));
        addPointerRipples(engine, camera, water, [buoy]);

        const gui = addWaterGUI(water);
        const f = gui.addFolder('Buoy');
        f.add(buoy, 'drift');
        f.add({ drop: () => buoy.drop(4) }, 'drop');
        f.open();
        // Start collapsed so the panel does not cover the scene
        gui.close();
    }
}

/**
 * Floats its object on the water with WaterRenderer.getHeight. It can drift in a circle,
 * be dropped in or pushed under, and starts ripples where it disturbs the surface.
 */
class Floater extends ComponentBase {
    /** Drift in a circle starting from the initial point. */
    public drift = false;

    private water!: WaterRenderer;
    private x = 0;
    private z = 0;
    private cx = 0;
    private cz = 0;
    private lift = 0;
    private size = 1;
    private angle = 0;
    /** Height while falling; NaN when floating. */
    private fallY = NaN;
    private vy = 0;
    private wakeX = 0;
    private wakeZ = 0;
    private bob = 0;
    private bobV = 0;

    public init(param?: { water: WaterRenderer; x: number; z: number; lift: number; size: number }): void {
        if (!param) return;
        this.water = param.water;
        this.x = this.cx = this.wakeX = param.x;
        this.z = this.cz = this.wakeZ = param.z;
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

    /** Lifts the object this far above the water and lets it fall. */
    public drop(height: number): void {
        this.fallY = this.water.getHeight(this.x, this.z) + height;
        this.vy = 0;
    }

    public onUpdate(): void {
        if (!this.water) return;
        const dt = Math.min(Time.delta * 0.001, 1 / 30);
        if (this.drift) {
            // Two metres around (cx - 2, cz) at 0.8 m/s
            this.angle += (dt * 0.8) / 2;
            this.x = this.cx + 2 * Math.cos(this.angle) - 2;
            this.z = this.cz + 2 * Math.sin(this.angle);
        }
        if (this.bob !== 0 || this.bobV !== 0) {
            const before = this.bob;
            this.bobV += (-40 * this.bob - 4 * this.bobV) * dt;
            this.bob += this.bobV * dt;
            if (before < -this.size * 0.3 && this.bob >= -this.size * 0.3 && this.bobV > 1) {
                this.water.addRipple(this.x, this.z, 0.2, this.size);
            }
            if (Math.abs(this.bob) < 1e-3 && Math.abs(this.bobV) < 1e-2) this.bob = this.bobV = 0;
        }
        const rest = this.water.getHeight(this.x, this.z) + this.lift + this.bob;
        let y = rest;
        if (!Number.isNaN(this.fallY)) {
            this.vy -= 9.81 * dt;
            this.fallY += this.vy * dt;
            if (this.fallY > rest) {
                y = this.fallY;
            } else {
                // Splash: deeper the faster it hits
                this.water.addRipple(this.x, this.z, Math.min(0.4, -this.vy * 0.05), this.size);
                this.fallY = NaN;
            }
        }
        this.transform.x = this.x;
        this.transform.y = y;
        this.transform.z = this.z;
        // Wake: a small ripple every 0.2 m of travel
        if (Math.hypot(this.x - this.wakeX, this.z - this.wakeZ) > 0.2) {
            this.water.addRipple(this.x, this.z, 0.03, this.size * 0.7);
            this.wakeX = this.x;
            this.wakeZ = this.z;
        }
    }
}

/** A ball floating on the water, a little under half submerged. */
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
    let lastTrail: Vector3 | null = null;
    const hitWater = (e: PointerEvent3D): Vector3 | null => {
        const ray = camera.screenPointToRay(e.mouseX, e.mouseY);
        if (ray.direction.y >= 0) return null;
        const t = (water.baseHeight - ray.origin.y) / ray.direction.y;
        return new Vector3(ray.origin.x + ray.direction.x * t, water.baseHeight, ray.origin.z + ray.direction.z * t);
    };
    const hitFloater = (e: PointerEvent3D): Floater | null => {
        const ray = camera.screenPointToRay(e.mouseX, e.mouseY);
        let best: Floater | null = null;
        let bestT = Infinity;
        for (const f of floaters) {
            const c = f.transform.worldPosition;
            const ox = ray.origin.x - c.x,
                oy = ray.origin.y - c.y,
                oz = ray.origin.z - c.z;
            const b = ox * ray.direction.x + oy * ray.direction.y + oz * ray.direction.z;
            const disc = b * b - (ox * ox + oy * oy + oz * oz - f.radius * f.radius);
            const t = -b - Math.sqrt(Math.max(disc, 0));
            if (disc >= 0 && t > 0 && t < bestT) {
                best = f;
                bestT = t;
            }
        }
        return best;
    };
    engine.inputSystem.addEventListener(
        PointerEvent3D.POINTER_DOWN,
        (e: PointerEvent3D) => {
            const floater = hitFloater(e);
            if (floater) return floater.push();
            const p = hitWater(e);
            // addRipple ignores points off the water
            if (p) water.addRipple(p.x, p.z, splash, radius);
        },
        null
    );
    engine.inputSystem.addEventListener(
        PointerEvent3D.POINTER_MOVE,
        (e: PointerEvent3D) => {
            if (!e.shiftKey) {
                lastTrail = null;
                return;
            }
            const p = hitWater(e);
            if (p && (!lastTrail || Vector3.distance(p, lastTrail) > 0.15)) {
                water.addRipple(p.x, p.z, splash * 0.3, radius * 0.6);
                lastTrail = p;
            }
        },
        null
    );
}

function addWaterGUI(water: WaterRenderer): dat.GUI {
    const m = water.waterMaterial;
    const steepness = water.waves.map((w) => w.steepness);
    const toRGB = (c: Color) => [c.r * 255, c.g * 255, c.b * 255];
    const fromRGB = (v: number[]) => new Color(v[0] / 255, v[1] / 255, v[2] / 255);
    const s = {
        paused: false,
        speed: water.timeScale,
        waveHeight: 1,
        absorptionColor: toRGB(m.absorptionColor),
        underwaterColor: toRGB(m.underwaterColor)
    };
    const applyTime = () => (water.timeScale = s.paused ? 0 : s.speed);
    const gui = new dat.GUI();
    const f = gui.addFolder('Water');
    f.add(s, 'paused').onChange(applyTime);
    f.add(s, 'speed', 0, 3, 0.01).onChange(applyTime);
    f.addColor(s, 'absorptionColor').onChange((v: number[]) => (m.absorptionColor = fromRGB(v)));
    f.addColor(s, 'underwaterColor').onChange((v: number[]) => (m.underwaterColor = fromRGB(v)));
    f.add(m, 'density', 0, 2, 0.01);
    f.add(s, 'waveHeight', 0, 3, 0.01).onChange((v: number) => water.waves.forEach((w, i) => (w.steepness = steepness[i] * v)));
    f.add(water, 'caustics');
    f.open();
    return gui;
}

/**
 * Flat mesh in the xz plane bounded by a closed curve around the origin:
 * rings from the center out to `outline(angle)`.
 */
function radialGeometry(outline: (angle: number) => number, rings: number, segments: number): GeometryBase {
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
            const rr = (edge * r) / rings;
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
    return indexedGeometry(pos, nor, uv, idx);
}

/** Square grid of `size` world units centered on the origin, raised by `height(x, z)`. */
function heightfieldGeometry(size: number, segments: number, height: (x: number, z: number) => number): GeometryBase {
    const n = segments + 1;
    const pos = new Float32Array(n * n * 3);
    const nor = new Float32Array(n * n * 3);
    const uv = new Float32Array(n * n * 2);
    const step = size / segments;
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
            const k = j * n + i;
            const x = -size / 2 + i * step,
                z = -size / 2 + j * step;
            pos[k * 3] = x;
            pos[k * 3 + 1] = height(x, z);
            pos[k * 3 + 2] = z;
            const e = step * 0.5;
            const dx = (height(x + e, z) - height(x - e, z)) / (2 * e);
            const dz = (height(x, z + e) - height(x, z - e)) / (2 * e);
            const len = Math.hypot(dx, 1, dz);
            nor[k * 3] = -dx / len;
            nor[k * 3 + 1] = 1 / len;
            nor[k * 3 + 2] = -dz / len;
            uv[k * 2] = i / segments;
            uv[k * 2 + 1] = j / segments;
        }
    }
    const idx: number[] = [];
    for (let j = 0; j < segments; j++) {
        for (let i = 0; i < segments; i++) {
            const a = j * n + i,
                b = a + 1,
                c = a + n,
                d = c + 1;
            idx.push(a, c, b, b, c, d);
        }
    }
    return indexedGeometry(pos, nor, uv, idx);
}

function indexedGeometry(pos: Float32Array, nor: Float32Array, uv: Float32Array, idx: number[]): GeometryBase {
    const g = new GeometryBase();
    g.setIndices(pos.length / 3 > 65535 ? new Uint32Array(idx) : new Uint16Array(idx));
    g.setAttribute(VertexAttributeName.position, pos);
    g.setAttribute(VertexAttributeName.normal, nor);
    g.setAttribute(VertexAttributeName.uv, uv);
    g.setAttribute(VertexAttributeName.TEXCOORD_1, uv);
    g.addSubGeometry({ indexStart: 0, indexCount: idx.length, vertexStart: 0, vertexCount: 0, firstStart: 0, index: 0, topology: 0 });
    return g;
}

/** Ground colors by height: mud and sand under the water, a sandy beach, then grass. */
function paintGround(ctx: Context3D): BitmapTexture2D {
    const size = 1024;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const g = canvas.getContext('2d')!;
    const img = g.createImageData(size, size);
    const mix = (a: number[], b: number[], t: number) => a.map((v, i) => v + (b[i] - v) * t);
    const mud = [70, 64, 48],
        sand = [196, 182, 140],
        grass = [62, 120, 34],
        dryGrass = [104, 136, 48];
    for (let j = 0; j < size; j++) {
        for (let i = 0; i < size; i++) {
            const x = (i / size - 0.5) * TERRAIN_SIZE;
            const z = (j / size - 0.5) * TERRAIN_SIZE;
            const y = groundHeight(x, z);
            const noise = 0.92 + 0.16 * Math.random();
            const c = y < 0.4 ? mix(sand, mud, smoothstep(0.2, 3, -y)) : mix(sand, mix(grass, dryGrass, smoothstep(2, 6, y)), smoothstep(0.4, 1.2, y));
            const k = (j * size + i) * 4;
            img.data[k] = c[0] * noise;
            img.data[k + 1] = c[1] * noise;
            img.data[k + 2] = c[2] * noise;
            img.data[k + 3] = 255;
        }
    }
    g.putImageData(img, 0, 0);
    const tex = new BitmapTexture2D(true, ctx, 'srgb');
    tex.source = canvas;
    return tex;
}

new Sample_Lake().run();
