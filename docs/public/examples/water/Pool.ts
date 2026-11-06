import { AtmosphericComponent, BitmapTexture2D, BoundUtil, BoxGeometry, Camera3D, CameraUtil, Color, ComponentBase, Context3D, DirectLight, Engine3D, GeometryBase, HoverCameraController, KelvinUtil, LitMaterial, MeshRenderer, Object3D, PlaneGeometry, PointerEvent3D, Scene3D, Time, Vector2, Vector3, View3D, WaterRenderer } from '@orillusion/core';
import dat from 'dat.gui';

const POOL_WIDTH = 20;
const POOL_LENGTH = 14;
const POOL_DEPTH = 2;

/**
 * Swimming pool: nearly still water over a tiled floor, with refraction,
 * absorption, sky reflection and caustics. A rubber duck floats on the
 * surface using WaterRenderer.getHeight.
 *
 * Click the water for a splash or the duck to push it under,
 * hold Shift and move the mouse to drag a trail of ripples.
 */
class Sample_Pool {
    async run() {
        // setting.render.water enables real water depth, caustics, ripples and the underwater view
        const engine = await Engine3D.init({ setting: { render: { water: true } } });

        const scene = new Scene3D();
        scene.addComponent(AtmosphericComponent);

        const camera = CameraUtil.createCamera3DObject(scene);
        camera.perspective(60, engine.aspect, 0.1, 1000);
        camera.object3D.addComponent(HoverCameraController).setCamera(144.6, -26.6, 10.9, new Vector3(0, -1, 0));

        const view = new View3D();
        view.scene = scene;
        view.camera = camera;
        engine.startRenderView(view);

        const light = new Object3D();
        light.rotationX = 50;
        light.rotationY = 30;
        const dl = light.addComponent(DirectLight);
        dl.lightColor = KelvinUtil.color_temperature_to_rgb(5500);
        dl.intensity = 3;
        dl.castShadow = true;
        scene.addChild(light);

        createPool(scene, engine.context3D);

        const waterObj = new Object3D();
        const water = waterObj.addComponent(WaterRenderer);
        // Slightly larger than the pool: the waves also move the surface sideways, the walls hide the overlap
        water.width = POOL_WIDTH + 0.6;
        water.length = POOL_LENGTH + 0.6;
        // Still water: short, low waves, about 1.5 cm high at most
        water.waves = [
            { direction: new Vector2(1, 0.3), wavelength: 4, steepness: 0.025 },
            { direction: new Vector2(0.4, 1), wavelength: 2.6, steepness: 0.02 },
            { direction: new Vector2(-0.7, 0.6), wavelength: 1.7, steepness: 0.015 },
            { direction: new Vector2(0.2, -1), wavelength: 1.1, steepness: 0.012 }
        ];
        water.resolution = 200;
        water.waterMaterial.waterDepth = POOL_DEPTH;
        // Faint ripples on the surface; the view of the floor stays clear
        water.detailStrength = 0.2;
        // From underwater, most of the surface shows the world above
        water.waterMaterial.underwaterClarity = 0.8;
        scene.addChild(waterObj);

        const duckModel = await engine.res.loadGltf('https://cdn.orillusion.com/PBR/Duck/Duck.gltf');
        const duck = floatingModel(scene, water, duckModel, 1.2, -3, 2);
        addPointerRipples(engine, camera, water, [duck]);

        addWaterGUI(water);
    }
}

/**
 * Floats its object on the water with WaterRenderer.getHeight, and starts ripples
 * where it disturbs the surface: a splash when pushed, another as it bobs back up.
 */
class Floater extends ComponentBase {
    private water!: WaterRenderer;
    private x = 0;
    private z = 0;
    /** Height of the object's origin above the surface. */
    private lift = 0;
    private size = 1;
    /** Bobbing about the resting height after a push: offset and its speed. */
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

    /** Pushes the object under; the water lifts it back, bobbing. */
    public push(): void {
        this.bobV = -4;
        this.water.addRipple(this.x, this.z, 0.5, this.size * 1.2);
    }

    public onUpdate(): void {
        if (!this.water) return;
        const dt = Math.min(Time.delta * 0.001, 1 / 30);
        // Buoyancy as a damped spring toward the resting height
        if (this.bob !== 0 || this.bobV !== 0) {
            const before = this.bob;
            this.bobV += (-40 * this.bob - 4 * this.bobV) * dt;
            this.bob += this.bobV * dt;
            // Breaking back through the surface on the way up throws a smaller ring
            if (before < -this.size * 0.3 && this.bob >= -this.size * 0.3 && this.bobV > 1) {
                this.water.addRipple(this.x, this.z, 0.2, this.size);
            }
            if (Math.abs(this.bob) < 1e-3 && Math.abs(this.bobV) < 1e-2) this.bob = this.bobV = 0;
        }
        this.transform.x = this.x;
        this.transform.y = this.water.getHeight(this.x, this.z) + this.lift + this.bob;
        this.transform.z = this.z;
    }
}

/** A model scaled to `length` across, centered on a holder, with `draft` of its height under water. */
function floatingModel(scene: Scene3D, water: WaterRenderer, model: Object3D, length: number, x: number, z: number, draft = 0.18): Floater {
    const holder = new Object3D();
    holder.addChild(model);
    scene.addChild(holder);
    const raw = BoundUtil.genMeshBounds(model);
    const s = length / Math.max(raw.max.x - raw.min.x, raw.max.z - raw.min.z);
    model.scaleX *= s;
    model.scaleY *= s;
    model.scaleZ *= s;
    const b = BoundUtil.genMeshBounds(model);
    model.x = -(b.min.x + b.max.x) / 2;
    model.y = -(b.min.y + b.max.y) / 2;
    model.z = -(b.min.z + b.max.z) / 2;
    const height = b.max.y - b.min.y;
    const radius = Math.max(b.max.x - b.min.x, height, b.max.z - b.min.z) / 2;
    return holder.addComponent(Floater, { water, x, z, lift: height * (0.5 - draft), size: radius });
}

/**
 * Pointer interaction: a click on a floater pushes it under; elsewhere on the water,
 * where the view ray meets the undisturbed surface, it splashes. Shift + move drags a trail.
 */
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

function addWaterGUI(water: WaterRenderer): void {
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
    f.add(water, 'detailStrength', 0, 1, 0.01);
    f.add(water, 'caustics');
    f.add(water, 'causticsIntensity', 0, 2, 0.01);
    f.add(m, 'underwaterClarity', 0, 1, 0.01);
    f.open();
    // Start collapsed so the panel does not cover the scene
    gui.close();
}

/** Tiled pool around (0, -POOL_DEPTH .. 0, 0) with a white coping and a plain ground. */
function createPool(scene: Scene3D, ctx: Context3D) {
    const t = 0.6;
    const wallTop = 0.4;
    // Ground around the pool opening (four strips, leaving the pool open)
    const groundMat = solid(new Color(0.55, 0.53, 0.5), 0.9);
    const G = 80,
        hw = POOL_WIDTH / 2 + 1.5 * t,
        hl = POOL_LENGTH / 2 + 1.5 * t;
    const side = G / 2 - hl;
    scene.addChild(mesh(new PlaneGeometry(G, side), groundMat, 0, wallTop, -(hl + side / 2)));
    scene.addChild(mesh(new PlaneGeometry(G, side), groundMat, 0, wallTop, hl + side / 2));
    scene.addChild(mesh(new PlaneGeometry(G / 2 - hw, 2 * hl), groundMat, -(hw + (G / 2 - hw) / 2), wallTop, 0));
    scene.addChild(mesh(new PlaneGeometry(G / 2 - hw, 2 * hl), groundMat, hw + (G / 2 - hw) / 2, wallTop, 0));
    const tiles = new LitMaterial();
    tiles.baseMap = paintTiles(ctx);
    tiles.roughness = 0.7;
    tiles.metallic = 0;
    scene.addChild(mesh(new BoxGeometry(POOL_WIDTH, t, POOL_LENGTH), tiles, 0, -POOL_DEPTH - t / 2, 0));
    const wall = solid(new Color(0.55, 0.82, 0.88), 0.4);
    const h = POOL_DEPTH + wallTop;
    const cy = -POOL_DEPTH + h / 2;
    scene.addChild(mesh(new BoxGeometry(POOL_WIDTH + 2 * t, h, t), wall, 0, cy, -POOL_LENGTH / 2 - t / 2));
    scene.addChild(mesh(new BoxGeometry(POOL_WIDTH + 2 * t, h, t), wall, 0, cy, POOL_LENGTH / 2 + t / 2));
    scene.addChild(mesh(new BoxGeometry(t, h, POOL_LENGTH), wall, -POOL_WIDTH / 2 - t / 2, cy, 0));
    scene.addChild(mesh(new BoxGeometry(t, h, POOL_LENGTH), wall, POOL_WIDTH / 2 + t / 2, cy, 0));
    const coping = solid(new Color(0.95, 0.95, 0.92), 0.6);
    for (const [w, l, x, z] of [
        [POOL_WIDTH + 4 * t, t, 0, -POOL_LENGTH / 2 - t],
        [POOL_WIDTH + 4 * t, t, 0, POOL_LENGTH / 2 + t],
        [t, POOL_LENGTH, -POOL_WIDTH / 2 - t, 0],
        [t, POOL_LENGTH, POOL_WIDTH / 2 + t, 0]
    ]) {
        scene.addChild(mesh(new BoxGeometry(w, 0.15, l), coping, x, wallTop + 0.075, z));
    }
}

/** Light aqua mosaic with grout and dark lane lines along x. */
function paintTiles(ctx: Context3D): BitmapTexture2D {
    const tile = 0.5;
    const tx = Math.round(POOL_WIDTH / tile),
        tz = Math.round(POOL_LENGTH / tile);
    const px = Math.floor(2048 / Math.max(tx, tz));
    const canvas = document.createElement('canvas');
    canvas.width = tx * px;
    canvas.height = tz * px;
    const g = canvas.getContext('2d')!;
    g.fillStyle = 'rgb(225, 242, 246)';
    g.fillRect(0, 0, canvas.width, canvas.height);
    const grout = Math.max(1, Math.round(px * 0.08));
    for (let i = 0; i < tx; i++) {
        for (let j = 0; j < tz; j++) {
            const k = 0.94 + Math.random() * 0.1;
            g.fillStyle = `rgb(${Math.round(110 * k)}, ${Math.round(200 * k)}, ${Math.round(218 * k)})`;
            g.fillRect(i * px + grout, j * px + grout, px - 2 * grout, px - 2 * grout);
        }
    }
    g.fillStyle = 'rgb(18, 42, 105)';
    for (let l = 1; l <= 3; l++) {
        const zc = Math.round((l * tz) / 4) * px;
        g.fillRect(2 * px, zc - px / 2, canvas.width - 4 * px, px);
    }
    const tex = new BitmapTexture2D(true, ctx, 'srgb');
    tex.source = canvas;
    return tex;
}

function solid(color: Color, roughness: number): LitMaterial {
    const m = new LitMaterial();
    m.baseColor = color;
    m.roughness = roughness;
    m.metallic = 0;
    return m;
}

function mesh(geometry: GeometryBase, material: LitMaterial, x: number, y: number, z: number): Object3D {
    const obj = new Object3D();
    obj.x = x;
    obj.y = y;
    obj.z = z;
    const mr = obj.addComponent(MeshRenderer);
    mr.geometry = geometry;
    mr.material = material;
    mr.receiveShadow = true;
    return obj;
}

new Sample_Pool().run();
