import { Engine3D, Scene3D, View3D, CameraUtil, Object3D, MeshRenderer, UnLitMaterial, Vector3, PlaneGeometry, GeometryBase, VertexAttributeName, RADIANS_TO_DEGREES, DEGREES_TO_RADIANS, HoverCameraController, Camera3D } from "@orillusion/core";
import * as dat from 'dat.gui';

class Sample_LogDepth {
    camera!: Camera3D;
    gpsCoord = { lon: 121.4737, lat: 31.2304 };
    groundCoord!: Vector3;
    engine!: Engine3D;
    async run() {
        const doublePrecision = sessionStorage.doublePrecision !== 'false';
        const useRTE = sessionStorage.useRTE !== 'false';
        console.log('doublePrecision:', doublePrecision, ' useRTE:', useRTE);
        const engine = await Engine3D.init({
            setting: {
                render: {
                    useLogDepth: true,
                },
                doublePrecision: doublePrecision,
                useRTE: useRTE,
            },
            renderLoop: () => this.renderLoop()
        });
        this.engine = engine;
        const gui = new dat.GUI();

        let scene = new Scene3D();
        let camera = CameraUtil.createCamera3DObject(scene);
        camera.perspective(60, engine.aspect, 1.0, 6378137 * 4);
        this.camera = camera;

        this.groundCoord = GISMath.latLonToEllipsoidCoords(this.gpsCoord.lon, this.gpsCoord.lat, 0);
        const viewPoint = GISMath.latLonToEllipsoidCoords(this.gpsCoord.lon, this.gpsCoord.lat, 100);
        this.camera.lookAt(viewPoint, this.groundCoord, Vector3.UP);
        // camera.object3D.addComponent(HoverCameraController).setCamera(0, 0, 6378137 * 2.5);

        const tileZoom = 20;
        const centerTile = GISMath.lngLatToTile(this.gpsCoord.lon, this.gpsCoord.lat, tileZoom);
        for (let x = centerTile.x - 2; x <= centerTile.x + 2; x++) {
            for (let y = centerTile.y - 2; y <= centerTile.y + 2; y++) {
                scene.addChild(this.createGlobeTile(x, y, tileZoom));
            }
        }

        let view = new View3D();
        view.scene = scene;
        view.camera = camera;
        this.engine.startRenderView(view);

        // change cull mode by click dropdown box
        gui.add(engine.setting, 'doublePrecision').onChange((v: boolean) => {
            sessionStorage.doublePrecision = v
            location.reload()
        });
        gui.add(engine.setting, 'useRTE').onChange((v: boolean) => {
            sessionStorage.useRTE = v
            location.reload()
        });
        gui.open();
    }

    public createGlobeTile(tileX: number, tileY: number, level: number): Object3D {
        let mat = new UnLitMaterial();
        const url = `https://mt1.google.com/vt/lyrs=s&x=${tileX}&y=${tileY}&z=${level}`;
        // const url = `textures/grid.jpg`;
        this.engine.res.loadTexture(url).then((texture) => {
            texture.addressModeU = texture.addressModeV = 'clamp-to-edge';
            mat.baseMap = texture;
        });

        let geo = new GlobeTileGeometry(tileX, tileY, level);

        let obj = new Object3D();
        obj.localPosition = geo.centerPoint;

        let mr = obj.addComponent(MeshRenderer);
        mr.material = mat;
        mr.geometry = geo;
        return obj;
    }

    renderLoop() {
        if (this.camera) {
            const heightCoord = GISMath.latLonToEllipsoidCoords(this.gpsCoord.lon, this.gpsCoord.lat, (60 + Math.sin(Date.now() * 0.0001) * 40));
            this.camera.lookAt(heightCoord, this.groundCoord, Vector3.UP);
        }
    }
}

class GlobeTileGeometry extends GeometryBase {
    public static readonly tileResolution: number = 32;

    public tileX: number;
    public tileY: number;
    public level: number;
    public north!: number;
    public south!: number;
    public west!: number;
    public east!: number;
    public center_lon!: number;
    public center_lat!: number;
    public centerPoint: Vector3 = new Vector3();

    constructor(tileX: number, tileY: number, level: number) {
        super();
        this.tileX = tileX;
        this.tileY = tileY;
        this.level = level;
        const tileResolution = GlobeTileGeometry.tileResolution;

        const tileSize = (tileResolution + 1) * (tileResolution + 1);
        this.buildTileBounds();

        const step1 = tileResolution + 1;
        const vertexCount = tileSize;
        GISMath.latLonToEllipsoidCoords(this.center_lon, this.center_lat, 0, this.centerPoint);

        let numIndices = 0;
        const indexs = new Uint32Array(tileResolution * tileResolution * 6);
        const vertexs = new Float32Array(vertexCount * 3);
        const normals = new Float32Array(vertexCount * 3);
        const uvs = new Float32Array(vertexCount * 2);
        for (let i = 0; i < vertexCount; i++) {
            const vertex = this.getPointFromIndex(i);

            const relativePosition = vertex.sub(this.centerPoint);
            vertexs[i * 3 + 0] = relativePosition.x;
            vertexs[i * 3 + 1] = relativePosition.y;
            vertexs[i * 3 + 2] = relativePosition.z;

            relativePosition.normalize();
            normals[i * 3 + 0] = relativePosition.x;
            normals[i * 3 + 1] = relativePosition.y;
            normals[i * 3 + 2] = relativePosition.z;

            const col = i % step1;
            const row = Math.floor(i / step1);
            uvs[i * 2 + 0] = col / tileResolution;
            uvs[i * 2 + 1] = row / tileResolution;

            if (col != tileResolution && row != tileResolution) {
                indexs[numIndices++] = i + 1;
                indexs[numIndices++] = i + 0;
                indexs[numIndices++] = i + step1;

                indexs[numIndices++] = i + 1;
                indexs[numIndices++] = i + step1;
                indexs[numIndices++] = i + step1 + 1;
            }
        }

        this.setIndices(indexs);
        this.setAttribute(VertexAttributeName.position, vertexs);
        this.setAttribute(VertexAttributeName.normal, normals);
        this.setAttribute(VertexAttributeName.uv, uvs);
        this.addSubGeometry({
            indexStart: 0,
            indexCount: indexs.length,
            vertexStart: 0,
            vertexCount: 0,
            firstStart: 0,
            index: 0,
            topology: 0,
        });
    }

    protected buildTileBounds() {
        const n = Math.pow(2, this.level);

        const lon_min = (this.tileX + 0) / n * 360.0 - 180.0;
        const lon_max = (this.tileX + 1) / n * 360.0 - 180.0;

        const lat_min_rad = Math.atan(Math.sinh(Math.PI * (1 - 2 * (this.tileY + 1) / n)));
        const lat_max_rad = Math.atan(Math.sinh(Math.PI * (1 - 2 * (this.tileY + 0) / n)));

        const lat_min = lat_min_rad * 180.0 / Math.PI;
        const lat_max = lat_max_rad * 180.0 / Math.PI;

        this.north = lat_max;
        this.south = lat_min;
        this.west = lon_min;
        this.east = lon_max;
        this.center_lon = (lon_min + lon_max) / 2;
        this.center_lat = (lat_min + lat_max) / 2;
    }

    protected getPointFromIndex(i: number, target: Vector3 = new Vector3()): Vector3 {
        const tileResolution = GlobeTileGeometry.tileResolution;
        const step1 = tileResolution + 1;
        const col = i % step1;
        const row = Math.floor(i / step1);
        const tileTotalNum = Math.pow(2, this.level);

        const lonX = this.mapNumberToInterval(col, 0, tileResolution, this.west, this.east);

        const latY = Math.atan(Math.sinh(Math.PI * (1.0 - 2.0 * (this.tileY + row / tileResolution) / tileTotalNum))) * RADIANS_TO_DEGREES;

        return GISMath.latLonToEllipsoidCoords(lonX, latY, 0, target);
    }

    protected mapNumberToInterval(v0: number, minV0: number, maxV0: number, minV1: number, maxV1: number): number {
        return (v0 - minV0) * (maxV1 - minV1) / (maxV0 - minV0) + minV1;
    }
}

class GISMath {
    public static readonly RADIUS: number = 6378137;
    public static readonly f: number = 1 / 298.257223563;
    public static readonly e2: number = 2 * GISMath.f - GISMath.f * GISMath.f;

    public static latLonToEllipsoidCoords(longitude: number, latitude: number, altitude: number = 0, target: Vector3 = new Vector3()): Vector3 {
        const phiRad = latitude * DEGREES_TO_RADIANS;
        const lambdaRad = longitude * DEGREES_TO_RADIANS;

        const N = GISMath.RADIUS / Math.sqrt(1 - GISMath.e2 * Math.sin(phiRad) * Math.sin(phiRad));

        const x = (N + altitude) * Math.cos(phiRad) * Math.cos(lambdaRad);
        const y = (N + altitude) * Math.cos(phiRad) * Math.sin(lambdaRad);
        const z = (N * (1 - GISMath.e2) + altitude) * Math.sin(phiRad);
        target.set(y, z, x);
        return target;
    }

    public static lngLatToTile(lng: number, lat: number, zoom: number): { x: number; y: number } {
        const x = (lng + 180) / 360;

        const latRad = (lat * Math.PI) / 180;
        const y = (1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2;

        const n = Math.pow(2, zoom);

        const tileX = Math.floor(x * n);
        const tileY = Math.floor(y * n);

        return {
            x: Math.max(0, Math.min(tileX, n - 1)),
            y: Math.max(0, Math.min(tileY, n - 1))
        };
    }
}

new Sample_LogDepth().run();
