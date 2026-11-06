import { AtmosphericComponent, BitmapTexture2D, BoxGeometry, CameraUtil, Color, ComponentBase, Context3D, DirectLight, Engine3D, FluidDebug, FluidDepthFilter, FluidRenderer, FluidThicknessMode, GeometryBase, HoverCameraController, KelvinUtil, LitMaterial, MeshRenderer, Object3D, PlaneGeometry, Scene3D, View3D } from '@orillusion/core';
import dat from 'dat.gui';

/**
 * Screen-space fluid rendering of CPU-simulated particles: a block of particles drops
 * into a pool and sloshes around. A pillar in the pool shows that opaque geometry clips the fluid.
 */
class Sample_Fluid {
    async run() {
        // setting.render.fluid adds the FluidPass that draws every FluidRenderer
        const engine = await Engine3D.init({ setting: { render: { fluid: true } } });

        const scene = new Scene3D();
        scene.addComponent(AtmosphericComponent);

        const camera = CameraUtil.createCamera3DObject(scene);
        camera.perspective(60, engine.aspect, 0.1, 500);
        camera.object3D.addComponent(HoverCameraController).setCamera(30, -35, 7);

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

        // Particles rest at y >= 0.05 with radius 0.08: the floor sits below their lowest point
        const floorY = -0.05;
        const slab = 0.12;
        scene.addChild(mesh(new PlaneGeometry(20, 20), solid(new Color(0.15, 0.15, 0.17), 0.8), 0, floorY - slab - 0.01, 0, true));
        scene.addChild(mesh(new BoxGeometry(0.6, 2.5, 0.6), solid(new Color(0.92, 0.92, 0.9), 0.8), 0.8, floorY + 1.25, 0.4, true));
        const pool = createPool(scene, engine.context3D, { width: 3.2, depth: 3.2, wallHeight: 0.6, wallThickness: slab, tileSize: 0.1, lanes: 2, x: -1.6, y: floorY, z: -1.6 });

        const fluidObj = new Object3D();
        const fluid = fluidObj.addComponent(FluidRenderer);
        fluid.particleSize = 0.16;
        // Blur over about one particle diameter so the spheres merge into a smooth surface
        fluid.blurDepthFilterSize = 15;
        fluid.blurDepthNumIterations = 6;
        fluid.depthFilter = FluidDepthFilter.NarrowRange;
        // Stretch particles along their neighbors: flat regions stay flat, thin sheets stay thin
        fluid.useAnisotropy = true;
        // Fade the thin free edges into the background
        fluid.edgeSoftness = 5;
        fluid.blurThicknessFilterSize = 10;
        fluid.blurThicknessNumIterations = 2;
        const sim = fluidObj.addComponent(BoxSloshSimulation, { fluid, count: 6000 });
        scene.addChild(fluidObj);

        const s = {
            showPool: true,
            fluidColor: [fluid.fluidColor.r * 255, fluid.fluidColor.g * 255, fluid.fluidColor.b * 255],
            reset: () => sim.reset()
        };
        const gui = new dat.GUI();
        const f = gui.addFolder('Fluid');
        f.add(fluid, 'enable');
        // Hide the pool to look at the fluid's free edges
        f.add(s, 'showPool').onChange((v: boolean) => (pool.transform.enable = v));
        f.add(fluid, 'particleSize', 0.02, 0.5, 0.01);
        f.add(fluid, 'particleThicknessAlpha', 0, 0.3, 0.005);
        f.addColor(s, 'fluidColor').onChange((v: number[]) => (fluid.fluidColor = new Color(v[0] / 255, v[1] / 255, v[2] / 255)));
        f.add(fluid, 'density', 0, 10, 0.1);
        f.add(fluid, 'refractionStrength', 0, 3, 0.05);
        f.add(fluid, 'fresnelClamp', 0, 1, 0.01);
        f.add(fluid, 'specularPower', 1, 1000, 1);
        f.add(fluid, 'edgeSoftness', 0, 20, 0.5);
        f.add(fluid, 'depthFilter', { Bilateral: FluidDepthFilter.Bilateral, NarrowRange: FluidDepthFilter.NarrowRange });
        f.add(fluid, 'thicknessMode', { Accumulated: FluidThicknessMode.Accumulated, Geometric: FluidThicknessMode.Geometric });
        f.add(fluid, 'useAnisotropy');
        f.add(fluid, 'debug');
        f.add(fluid, 'debugFeature', {
            Depth: FluidDebug.DepthTexture,
            DepthBlurred: FluidDebug.DepthBlurredTexture,
            Thickness: FluidDebug.ThicknessTexture,
            ThicknessBlurred: FluidDebug.ThicknessBlurredTexture,
            Normals: FluidDebug.Normals
        });
        f.add(sim, 'paused');
        f.add(s, 'reset');
        f.open();

        const depth = gui.addFolder('Depth blur');
        depth.add(fluid, 'enableBlurDepth');
        depth.add(fluid, 'blurDepthFilterSize', 0, 60, 1);
        depth.add(fluid, 'blurDepthNumIterations', 0, 10, 1);
        depth.add(fluid, 'blurDepthDepthScale', 0, 30, 0.5);

        const thickness = gui.addFolder('Thickness blur');
        thickness.add(fluid, 'enableBlurThickness');
        thickness.add(fluid, 'blurThicknessFilterSize', 0, 30, 1);
        thickness.add(fluid, 'blurThicknessNumIterations', 0, 10, 1);
        // Start collapsed so the panel does not cover the scene
        gui.close();
    }
}

/**
 * Minimal particle motion (gravity, damping, box walls, a pillar and soft particle spreading
 * on a hash grid). Not a physical fluid solver; it only produces liquid-like particle motion to render.
 */
class BoxSloshSimulation extends ComponentBase {
    public paused = false;

    private fluid!: FluidRenderer;
    private count = 0;
    /** xyzw per particle: the layout FluidRenderer expects by default (16-byte stride, position at offset 0) */
    private pos!: Float32Array;
    private vel!: Float32Array;
    private readonly half = 1.6;
    private readonly spacing = 0.1;

    public init(param?: { fluid: FluidRenderer; count: number }): void {
        if (!param) return;
        this.fluid = param.fluid;
        this.count = param.count;
        this.pos = new Float32Array(this.count * 4);
        this.vel = new Float32Array(this.count * 3);
        this.reset();
    }

    public reset(): void {
        const n = Math.ceil(Math.cbrt(this.count));
        for (let i = 0; i < this.count; i++) {
            const x = i % n,
                y = Math.floor(i / (n * n)),
                z = Math.floor(i / n) % n;
            this.pos[i * 4 + 0] = -this.half + 0.2 + x * this.spacing + Math.random() * 0.01;
            this.pos[i * 4 + 1] = 1.0 + y * this.spacing;
            this.pos[i * 4 + 2] = -this.half + 0.2 + z * this.spacing + Math.random() * 0.01;
            this.pos[i * 4 + 3] = 1;
            this.vel[i * 3 + 0] = 2.0;
            this.vel[i * 3 + 1] = 0;
            this.vel[i * 3 + 2] = 1.0;
        }
        this.fluid.setDataBuffer(this.pos);
    }

    public onUpdate(): void {
        if (this.paused || !this.fluid) return;
        const dt = 1 / 60;
        for (let s = 0; s < 2; s++) this.step(dt / 2);
        // The array was modified in place: call setDataBuffer again to upload it
        this.fluid.setDataBuffer(this.pos);
    }

    private step(dt: number): void {
        const { pos, vel, count, half } = this;
        const h = this.spacing;
        const cell = new Map<number, number[]>();
        const key = (x: number, y: number, z: number) => ((x + 512) * 1024 + (y + 512)) * 1024 + (z + 512);
        for (let i = 0; i < count; i++) {
            const k = key(Math.floor(pos[i * 4] / h), Math.floor(pos[i * 4 + 1] / h), Math.floor(pos[i * 4 + 2] / h));
            let list = cell.get(k);
            if (!list) cell.set(k, (list = []));
            list.push(i);
        }

        for (let i = 0; i < count; i++) {
            const px = pos[i * 4],
                py = pos[i * 4 + 1],
                pz = pos[i * 4 + 2];
            const cx = Math.floor(px / h),
                cy = Math.floor(py / h),
                cz = Math.floor(pz / h);
            let fx = 0,
                fy = 0,
                fz = 0;
            for (let dx = -1; dx <= 1; dx++)
                for (let dy = -1; dy <= 1; dy++)
                    for (let dz = -1; dz <= 1; dz++) {
                        const list = cell.get(key(cx + dx, cy + dy, cz + dz));
                        if (!list) continue;
                        for (const j of list) {
                            if (j === i) continue;
                            const rx = px - pos[j * 4],
                                ry = py - pos[j * 4 + 1],
                                rz = pz - pos[j * 4 + 2];
                            const d2 = rx * rx + ry * ry + rz * rz;
                            if (d2 >= h * h || d2 < 1e-10) continue;
                            const d = Math.sqrt(d2);
                            const push = ((h - d) / h) * 60;
                            fx += (rx / d) * push;
                            fy += (ry / d) * push;
                            fz += (rz / d) * push;
                        }
                    }
            vel[i * 3] = (vel[i * 3] + fx * dt) * 0.995;
            vel[i * 3 + 1] = (vel[i * 3 + 1] + (fy - 9.8) * dt) * 0.995;
            vel[i * 3 + 2] = (vel[i * 3 + 2] + fz * dt) * 0.995;
        }

        const r = h * 0.5;
        for (let i = 0; i < count; i++) {
            let x = pos[i * 4] + vel[i * 3] * dt;
            let y = pos[i * 4 + 1] + vel[i * 3 + 1] * dt;
            let z = pos[i * 4 + 2] + vel[i * 3 + 2] * dt;
            if (y < r) {
                y = r;
                vel[i * 3 + 1] *= -0.3;
            }
            if (x < -half + r) {
                x = -half + r;
                vel[i * 3] *= -0.3;
            }
            if (x > half - r) {
                x = half - r;
                vel[i * 3] *= -0.3;
            }
            if (z < -half + r) {
                z = -half + r;
                vel[i * 3 + 2] *= -0.3;
            }
            if (z > half - r) {
                z = half - r;
                vel[i * 3 + 2] *= -0.3;
            }
            // Pillar at (0.8, 0.4), half extent 0.3
            const ox = x - 0.8,
                oz = z - 0.4,
                e = 0.3 + r;
            if (Math.abs(ox) < e && Math.abs(oz) < e && y < 2.5) {
                if (e - Math.abs(ox) < e - Math.abs(oz)) {
                    x = 0.8 + Math.sign(ox) * e;
                    vel[i * 3] *= -0.3;
                } else {
                    z = 0.4 + Math.sign(oz) * e;
                    vel[i * 3 + 2] *= -0.3;
                }
            }
            pos[i * 4] = x;
            pos[i * 4 + 1] = y;
            pos[i * 4 + 2] = z;
        }
    }
}

type PoolOptions = { width: number; depth: number; wallHeight: number; wallThickness: number; tileSize: number; lanes: number; x: number; y: number; z: number };

/** Pool: a mosaic-tiled floor slab, light aqua walls and a white coping. The inner volume starts at (x, y, z). */
function createPool(scene: Scene3D, ctx: Context3D, o: PoolOptions): Object3D {
    const { width: w, depth: d, wallHeight: h, wallThickness: t, x: x0, y: y0, z: z0 } = o;
    const pool = new Object3D();
    const floorMat = solid(new Color(1, 1, 1), 0.35);
    floorMat.baseMap = paintFloor(ctx, o);
    pool.addChild(mesh(new BoxGeometry(w, t, d), floorMat, x0 + w / 2, y0 - t / 2, z0 + d / 2));
    const wallMat = solid(new Color(0.55, 0.82, 0.88), 0.4);
    const copingMat = solid(new Color(0.95, 0.95, 0.92), 0.6);
    const ch = Math.max(0.02, t * 0.4);
    const walls: [number, number, number, number][] = [
        [w + 2 * t, t, x0 + w / 2, z0 - t / 2],
        [w + 2 * t, t, x0 + w / 2, z0 + d + t / 2],
        [t, d, x0 - t / 2, z0 + d / 2],
        [t, d, x0 + w + t / 2, z0 + d / 2]
    ];
    for (const [sx, sz, cx, cz] of walls) {
        pool.addChild(mesh(new BoxGeometry(sx, h + t, sz), wallMat, cx, y0 + (h - t) / 2, cz));
        pool.addChild(mesh(new BoxGeometry(sx + t * 0.3, ch, sz + t * 0.3), copingMat, cx, y0 + h + ch / 2, cz));
    }
    scene.addChild(pool);
    return pool;
}

/** Mosaic tiles with light grout and dark-blue lane lines. */
function paintFloor(ctx: Context3D, o: PoolOptions): BitmapTexture2D {
    const tilesX = Math.round(o.width / o.tileSize);
    const tilesZ = Math.round(o.depth / o.tileSize);
    const px = Math.max(8, Math.floor(2048 / Math.max(tilesX, tilesZ)));
    const canvas = document.createElement('canvas');
    canvas.width = tilesX * px;
    canvas.height = tilesZ * px;
    const g = canvas.getContext('2d')!;
    g.fillStyle = 'rgb(225, 242, 246)';
    g.fillRect(0, 0, canvas.width, canvas.height);
    const grout = Math.max(1, Math.round(px * 0.08));
    for (let i = 0; i < tilesX; i++) {
        for (let j = 0; j < tilesZ; j++) {
            const k = 0.94 + Math.random() * 0.1;
            g.fillStyle = `rgb(${Math.round(110 * k)}, ${Math.round(200 * k)}, ${Math.round(218 * k)})`;
            g.fillRect(i * px + grout, j * px + grout, px - 2 * grout, px - 2 * grout);
        }
    }
    g.fillStyle = 'rgb(18, 42, 105)';
    const margin = 2 * px;
    for (let l = 1; l <= o.lanes; l++) {
        const zc = Math.round((l * tilesZ) / (o.lanes + 1)) * px;
        g.fillRect(margin, zc - px / 2, canvas.width - 2 * margin, px);
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

function mesh(geometry: GeometryBase, material: LitMaterial, x: number, y: number, z: number, castShadow = false): Object3D {
    const obj = new Object3D();
    obj.x = x;
    obj.y = y;
    obj.z = z;
    const mr = obj.addComponent(MeshRenderer);
    mr.geometry = geometry;
    mr.material = material;
    mr.receiveShadow = true;
    mr.castShadow = castShadow;
    return obj;
}

new Sample_Fluid().run();
