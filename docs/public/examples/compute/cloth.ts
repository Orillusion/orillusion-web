import { AtmosphericComponent, BoxGeometry, CameraUtil, ComputeGPUBuffer, ComputeShader, DirectLight, Engine3D, HoverCameraController, KeyCode, KeyEvent, LitMaterial, MeshRenderer, Object3D, PlaneGeometry, Scene3D, SphereGeometry, Time, Vector3, VertexAttributeName, View3D, webGPUContext } from '@orillusion/core';

class Demo_Cloth {
    async run() {
        Engine3D.setting.shadow.autoUpdate = true;
        Engine3D.setting.shadow.updateFrameRate = 1;
        Engine3D.setting.shadow.shadowBound = 5;
        Engine3D.setting.shadow.shadowSize = 2048;
        Engine3D.setting.shadow.shadowBias = 0.0002;

        await Engine3D.init({});

        let scene = new Scene3D();
        let sky = scene.addComponent(AtmosphericComponent);
        await this.initScene(scene);

        let camera = CameraUtil.createCamera3DObject(scene);
        
        camera.perspective(60, webGPUContext.aspect, 0.01, 10000.0);
        let ctl = camera.object3D.addComponent(HoverCameraController);
        ctl.setCamera(30, -28, 2);

        let view = new View3D();
        view.scene = scene;
        view.camera = camera;

        Engine3D.startRenderView(view);
    }

    async initScene(scene: Scene3D) {
        let mat = new LitMaterial();
        mat.baseMap = Engine3D.res.grayTexture;
        mat.roughness = 0.8;
        mat.metallic = 0.1;

        let sphere = new Object3D();
        sphere.transform.z = 0.5;
        let mr = sphere.addComponent(MeshRenderer);
        mr.geometry = new SphereGeometry(0.16, 16, 16);
        mr.material = mat;//new HDRLitMaterial();
        mr.castShadow = true;
        scene.addChild(sphere);

        let cloth = new Object3D();
        let simulator = cloth.addComponent(ClothSimulator);
        simulator.castShadow = true;
        simulator.SetInteractionSphere(sphere);
        scene.addChild(cloth);

        {
            let mat = new LitMaterial();
            mat.baseMap = Engine3D.res.grayTexture;
            mat.roughness = 0.8;
            let plane = new Object3D();
            plane.transform.y = -1;
            let planeMesh = plane.addComponent(MeshRenderer);
            planeMesh.geometry = new PlaneGeometry(100, 100);
            planeMesh.material = mat;
            planeMesh.receiveShadow = true;
            scene.addChild(plane);
        }

        {
            var lightObj = new Object3D();
            lightObj.x = 0;
            lightObj.y = 0;
            lightObj.z = 0;
            lightObj.rotationX = 45;
            lightObj.rotationY = 0;
            lightObj.rotationZ = 0;
            let lc = lightObj.addComponent(DirectLight);
            lc.intensity = 3;
            lc.castShadow = true;
            scene.addChild(lightObj);
        }

        {
            let poleMat = new LitMaterial();


            let pole_L = new Object3D();
            pole_L.transform.y = -0.25;
            pole_L.transform.x = -0.59;
            let mr = pole_L.addComponent(MeshRenderer);
            mr.geometry = new BoxGeometry(0.02, 1.5, 0.02);
            mr.material = poleMat
            mr.castShadow = true;
            scene.addChild(pole_L);

            let pole_R = new Object3D();
            pole_R.transform.y = -0.25;
            pole_R.transform.x = 0.59;
            mr = pole_R.addComponent(MeshRenderer);
            mr.geometry = new BoxGeometry(0.02, 1.5, 0.02);
            mr.material = poleMat
            mr.castShadow = true;
            scene.addChild(pole_R);

            let pole_T = new Object3D();
            pole_T.transform.y = 0.5;
            mr = pole_T.addComponent(MeshRenderer);
            mr.geometry = new BoxGeometry(1.2, 0.02, 0.02);
            mr.material = poleMat
            mr.castShadow = true;
            scene.addChild(pole_T);
        }
    }
}

new Demo_Cloth().run();

type ClothSimulatorConfig = {
    NUMPARTICLES: number,
    NUMTSURFACES: number,
    NUMTEDGES: number,
    NUMTBENDS: number,
    GRAVITY: number,
    DELTATIME: number,
    NUMSUBSTEPS: number,
    STRETCHCOMPLIANCE: number,
    BENDCOMPLIANCE: number,
    SPHERERADIUS: number,
    SPHERECENTREX: number,
    SPHERECENTREY: number,
    SPHERECENTREZ: number,
    clothVertex: Float32Array | Uint16Array | Uint32Array,
    clothFaceTriIds: Float32Array | Uint16Array | Uint32Array,
    clothVertexBuffer: ComputeGPUBuffer,
};

class ClothSimulator extends MeshRenderer {
    protected mConfig: ClothSimulatorConfig;
    protected mClothGeometry: PlaneGeometry;
    protected mInteractionSphere: Object3D;
    protected mClothComputePipeline: ClothSimulatorPipeline;
    protected mKeyState: boolean[] = [false, false, false, false];

    constructor() {
        super();
        this.mConfig = {
            NUMPARTICLES: 0,
            NUMTSURFACES: 0,
            NUMTEDGES: 0,
            NUMTBENDS: 0,
            GRAVITY: -10,
            DELTATIME: 1 / 60,
            NUMSUBSTEPS: 15,
            STRETCHCOMPLIANCE: 0.0,
            BENDCOMPLIANCE: 0.0,
            SPHERERADIUS: 0.2,
            SPHERECENTREX: 0.0,
            SPHERECENTREY: 0.5,
            SPHERECENTREZ: 0.25,
            clothVertex: null,
            clothFaceTriIds: null,
            clothVertexBuffer: null,
        };
        this.mClothGeometry = new PlaneGeometry(1, 1, 20, 20, Vector3.Z_AXIS);
        this.mConfig.clothVertex = this.mClothGeometry.getAttribute(VertexAttributeName.position).data as Float32Array;
        this.mConfig.clothFaceTriIds = this.mClothGeometry.getAttribute(VertexAttributeName.indices).data as Uint16Array;
        this.mConfig.NUMPARTICLES = this.mConfig.clothVertex.length / 3;
        this.mConfig.NUMTSURFACES = this.mConfig.clothFaceTriIds.length / 3;
    }

    protected updateKeyState(keyCode: number, state: boolean) {
        switch (keyCode) {
            case KeyCode.Key_W:
                this.mKeyState[0] = state;
                break;
            case KeyCode.Key_S:
                this.mKeyState[1] = state;
                break;
            case KeyCode.Key_A:
                this.mKeyState[2] = state;
                break;
            case KeyCode.Key_D:
                this.mKeyState[3] = state;
                break;
        }
    }

    public init(){
        super.init();
        this.alwaysRender = true;
        this.geometry = this.mClothGeometry;
        var mat = new LitMaterial();
        mat.roughness = 0.8;
        mat.baseMap = Engine3D.res.redTexture;
        mat.cullMode = 'none';
        this.material = mat;
    }

    public start() {
        Engine3D.inputSystem.addEventListener(KeyEvent.KEY_DOWN, (e: KeyEvent) => this.updateKeyState(e.keyCode, true), this);
        Engine3D.inputSystem.addEventListener(KeyEvent.KEY_UP, (e: KeyEvent) => this.updateKeyState(e.keyCode, false), this);
    }

    public SetInteractionSphere(sphere: Object3D) {
        this.mInteractionSphere = sphere;
    }

    private _tickTime = 0;

    public onCompute(view: View3D, command?: GPUCommandEncoder) {
        if (!this.mClothComputePipeline) {
            this.mConfig.clothVertexBuffer = this.mClothGeometry.vertexBuffer.vertexGPUBuffer;
            this.mClothComputePipeline = new ClothSimulatorPipeline(this.mConfig);
        }

        this._tickTime += Time.delta / 1000.0;
        if (this._tickTime >= this.mConfig.DELTATIME) {
            this._tickTime -= this.mConfig.DELTATIME;
            var pos = new Vector3();
            if (this.mInteractionSphere) {
                var transform = this.mInteractionSphere.transform;
                let dt = Time.delta / 1000.0;
                let speed = 0.5 * dt;
                // W S
                if (this.mKeyState[0]) {
                    transform.z -= speed
                } else if (this.mKeyState[1]) {
                    transform.z += speed
                }
                // A D
                if (this.mKeyState[2]) {
                    transform.x -= speed
                } else if (this.mKeyState[3]) {
                    transform.x += speed
                }
                pos.copyFrom(this.mInteractionSphere.transform.worldPosition);
            }

            this.mClothComputePipeline.compute(command, pos);
        }
    }
}

class ClothSimulatorBuffer {
    protected mPositionBuffer: ComputeGPUBuffer;
    protected mNormalBuffer: ComputeGPUBuffer;
    protected mVertexPositionData: Float32Array;
    protected mVertexPositionBuffer: ComputeGPUBuffer;
    protected mNewPositionBuffer: ComputeGPUBuffer;
    protected mAtomicPositionBuffer: ComputeGPUBuffer;
    protected mAtomicNormalBuffer: ComputeGPUBuffer;
    protected mVelocityBuffer: ComputeGPUBuffer;
    protected mStretchInfosBuffer: ComputeGPUBuffer;
    protected mBendInfosBuffer: ComputeGPUBuffer;
    protected mSurfaceInfosBuffer: ComputeGPUBuffer;
    // protected mInputData: Float32Array;
    protected mInputBuffer: ComputeGPUBuffer;
    protected mOutput0Buffer: ComputeGPUBuffer;

    constructor(config: ClothSimulatorConfig) {
        this.initGPUBuffer(config);
    }

    protected initGPUBuffer(config: ClothSimulatorConfig) {

        const { NUMPARTICLES, clothVertex } = config;

        let position_v4 = new Float32Array(NUMPARTICLES * 4)
        for (let i = 0; i < NUMPARTICLES; i++) {
            position_v4[i * 4] = clothVertex[i * 3]
            position_v4[i * 4 + 1] = clothVertex[i * 3 + 1]
            position_v4[i * 4 + 2] = clothVertex[i * 3 + 2]
            position_v4[i * 4 + 3] = 1
        }
        this.mVertexPositionData = position_v4;
        this.mVertexPositionBuffer = new ComputeGPUBuffer(this.mVertexPositionData.length);
        this.mVertexPositionBuffer.setFloat32Array("", this.mVertexPositionData);
        this.mVertexPositionBuffer.apply();

        this.mNewPositionBuffer = new ComputeGPUBuffer(this.mVertexPositionData.length);
        this.mNewPositionBuffer.setFloat32Array("", this.mVertexPositionData);
        this.mNewPositionBuffer.apply();

        this.mAtomicPositionBuffer = new ComputeGPUBuffer(this.mVertexPositionData.length);

        this.mAtomicNormalBuffer = new ComputeGPUBuffer(NUMPARTICLES * 4);
        this.mNormalBuffer = new ComputeGPUBuffer(NUMPARTICLES * 4);

        const { NUMTSURFACES, clothFaceTriIds } = config;

        const invMass = new Float32Array(NUMPARTICLES)
        for (let i = 0; i < NUMTSURFACES; i++) {
            var A = this.getTriArea(clothVertex, clothFaceTriIds, i);
            var pInvMass = A > 0.0 ? 1.0 / A / 3.0 : 0.0;
            invMass[clothFaceTriIds[3 * i]] += pInvMass;
            invMass[clothFaceTriIds[3 * i + 1]] += pInvMass;
            invMass[clothFaceTriIds[3 * i + 2]] += pInvMass;
        }
        let minX = Number.MAX_VALUE;
        let maxX = -Number.MAX_VALUE;
        let minY = Number.MAX_VALUE;
        let maxY = -Number.MAX_VALUE;
        for (let i = 0; i < NUMPARTICLES; i++) {
            minX = Math.min(minX, clothVertex[3 * i]);
            maxX = Math.max(maxX, clothVertex[3 * i]);
            minY = Math.min(minY, clothVertex[3 * i + 1]);
            maxY = Math.max(maxY, clothVertex[3 * i + 1]);
        }
        // console.log(minX, maxX, minY, maxY)
        var eps = 0.0001;
        for (let i = 0; i < NUMPARTICLES; i++) {
            var x = clothVertex[3 * i];
            var y = clothVertex[3 * i + 1];
            if ((y > maxY - eps) && (x < minX + eps || x > maxX - eps))
                invMass[i] = 0.0;
        }

        const velocity = new Float32Array(4 * NUMPARTICLES)
        for (let i = 0; i < NUMPARTICLES; ++i) {
            velocity[i * 4 + 3] = invMass[i]
        }
        this.mVelocityBuffer = new ComputeGPUBuffer(velocity.length);
        this.mVelocityBuffer.setFloat32Array("", velocity);
        this.mVelocityBuffer.apply();

        const neighbors = this.findTriNeighbors(clothFaceTriIds);
        var edgeIds = [];
        var triPairIds = [];
        for (var i = 0; i < NUMTSURFACES; i++) {
            for (var j = 0; j < 3; j++) {
                var id0 = clothFaceTriIds[3 * i + j];
                var id1 = clothFaceTriIds[3 * i + (j + 1) % 3];

                // each edge only once
                var n = neighbors[3 * i + j];
                if (n < 0 || id0 < id1) {
                    edgeIds.push(id0);
                    edgeIds.push(id1);
                }
                // tri pair
                if (n >= 0 && id0 > id1) {
                    // opposite ids
                    var ni = Math.floor(n / 3);
                    var nj = n % 3;
                    var id2 = clothFaceTriIds[3 * i + (j + 2) % 3];
                    var id3 = clothFaceTriIds[3 * ni + (nj + 2) % 3];
                    triPairIds.push(id0);
                    triPairIds.push(id1);
                    triPairIds.push(id2);
                    triPairIds.push(id3);
                }
            }
        }
        const NUMTEDGES = edgeIds.length / 2
        config.NUMTEDGES = NUMTEDGES
        const stretchInfos = new Float32Array(4 * NUMTEDGES)
        for (var i = 0; i < NUMTEDGES; i++) {
            stretchInfos[i * 4 + 0] = edgeIds[2 * i];
            stretchInfos[i * 4 + 1] = edgeIds[2 * i + 1];
            stretchInfos[i * 4 + 2] = Math.sqrt(this.distance(clothVertex, stretchInfos[i * 4], clothVertex, stretchInfos[i * 4 + 1]));
        }
        this.mStretchInfosBuffer = new ComputeGPUBuffer(stretchInfos.length);
        this.mStretchInfosBuffer.setFloat32Array("", stretchInfos);
        this.mStretchInfosBuffer.apply();

        const NUMTBENDS = triPairIds.length / 4
        config.NUMTBENDS = NUMTBENDS
        const bendInfos = new Float32Array(4 * NUMTBENDS)
        for (var i = 0; i < NUMTBENDS; i++) {
            bendInfos[i * 4 + 0] = triPairIds[4 * i + 2];
            bendInfos[i * 4 + 1] = triPairIds[4 * i + 3];
            bendInfos[i * 4 + 2] = Math.sqrt(this.distance(clothVertex, bendInfos[i * 4], clothVertex, bendInfos[i * 4 + 1]));
        }
        this.mBendInfosBuffer = new ComputeGPUBuffer(bendInfos.length);
        this.mBendInfosBuffer.setFloat32Array("", bendInfos);
        this.mBendInfosBuffer.apply();

        let surfaceInfos = new Float32Array(clothFaceTriIds.length / 3 * 4)
        for (let i = 0; i < clothFaceTriIds.length / 3; i++) {
            surfaceInfos[i * 4] = clothFaceTriIds[i * 3]
            surfaceInfos[i * 4 + 1] = clothFaceTriIds[i * 3 + 1]
            surfaceInfos[i * 4 + 2] = clothFaceTriIds[i * 3 + 2]
            surfaceInfos[i * 4 + 3] = 1
        }
        this.mSurfaceInfosBuffer = new ComputeGPUBuffer(surfaceInfos.length);
        this.mSurfaceInfosBuffer.setFloat32Array("", surfaceInfos);
        this.mSurfaceInfosBuffer.apply();

        const { GRAVITY, DELTATIME, NUMSUBSTEPS, STRETCHCOMPLIANCE, BENDCOMPLIANCE, SPHERERADIUS, SPHERECENTREX, SPHERECENTREY, SPHERECENTREZ } = config;
        this.mInputBuffer = new ComputeGPUBuffer(16);
        this.mInputBuffer.setFloat("NUMPARTICLES", NUMPARTICLES);
        this.mInputBuffer.setFloat("NUMTEDGES", NUMTEDGES);
        this.mInputBuffer.setFloat("NUMTBENDS", NUMTBENDS);
        this.mInputBuffer.setFloat("NUMTSURFACES", NUMTSURFACES);
        this.mInputBuffer.setFloat("GRAVITY", GRAVITY);
        this.mInputBuffer.setFloat("DELTATIME", DELTATIME / NUMSUBSTEPS);
        this.mInputBuffer.setFloat("STRETCHCOMPLIANCE", STRETCHCOMPLIANCE);
        this.mInputBuffer.setFloat("BENDCOMPLIANCE", BENDCOMPLIANCE);
        this.mInputBuffer.setFloat("SPHERERADIUS", SPHERERADIUS);
        this.mInputBuffer.setFloat("SPHERECENTREX", SPHERECENTREX);
        this.mInputBuffer.setFloat("SPHERECENTREY", SPHERECENTREY);
        this.mInputBuffer.setFloat("SPHERECENTREZ", SPHERECENTREZ);
        this.mInputBuffer.setFloat("ALPA", 0.0);
        this.mInputBuffer.apply();

        this.mOutput0Buffer = new ComputeGPUBuffer(NUMPARTICLES * 4);
    }

    public updateInputData(pos: Vector3) {
        this.mInputBuffer.setFloat("SPHERECENTREX", pos.x);
        this.mInputBuffer.setFloat("SPHERECENTREY", pos.y);
        this.mInputBuffer.setFloat("SPHERECENTREZ", pos.z);
        this.mInputBuffer.apply();
    }

    protected getTriArea(position: Float32Array | Uint16Array | Uint32Array, triIds: Float32Array | Uint16Array | Uint32Array, i: number) {
        let id0 = triIds[3 * i];
        let id1 = triIds[3 * i + 1];
        let id2 = triIds[3 * i + 2];

        let temp = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        temp[0] = position[id1 * 3] - position[id0 * 3];
        temp[1] = position[id1 * 3 + 1] - position[id0 * 3 + 1];
        temp[2] = position[id1 * 3 + 2] - position[id0 * 3 + 2];
        temp[3] = position[id2 * 3] - position[id0 * 3];
        temp[4] = position[id2 * 3 + 1] - position[id0 * 3 + 1];
        temp[5] = position[id2 * 3 + 2] - position[id0 * 3 + 2];

        this.cross(temp, 2, temp, 0, temp, 1);
        return this.dot(temp, 2, temp, 2) / 2.0;
    }

    protected cross(a: number[], indexa: number, b: number[], indexb: number, c: number[], indexc: number) {
        a[indexa * 3] = b[indexb * 3 + 1] * c[indexc * 3 + 2] - b[indexb * 3 + 2] * c[indexc * 3 + 1];
        a[indexa * 3 + 1] = b[indexb * 3 + 2] * c[indexc * 3 + 0] - b[indexb * 3 + 0] * c[indexc * 3 + 2];
        a[indexa * 3 + 2] = b[indexb * 3 + 0] * c[indexc * 3 + 1] - b[indexb * 3 + 1] * c[indexc * 3 + 0];
    }

    protected dot(a: number[], indexa: number, b: number[], indexb: number) {
        return a[indexa * 3] * b[indexb * 3] + a[indexa * 3 + 1] * b[indexb * 3 + 1] + a[indexa * 3 + 2] * b[indexb * 3 + 2];
    }

    protected findTriNeighbors(triIds: Float32Array | Uint16Array | Uint32Array) {
        // create common edges
        var edges:any = [];
        var numTris = triIds.length / 3;

        for (var i = 0; i < numTris; i++) {
            for (var j = 0; j < 3; j++) {
                var id0 = triIds[3 * i + j];
                var id1 = triIds[3 * i + (j + 1) % 3];
                edges.push({
                    id0: Math.min(id0, id1),
                    id1: Math.max(id0, id1),
                    edgeNr: 3 * i + j
                });
            }
        }

        // sort so common edges are next to each other
        edges.sort((a, b) => ((a.id0 < b.id0) || (a.id0 == b.id0 && a.id1 < b.id1)) ? -1 : 1);

        // find matchign edges
        const neighbors = new Float32Array(3 * numTris);
        neighbors.fill(-1);        // open edge

        var nr = 0;
        while (nr < edges.length) {
            var e0 = edges[nr];
            nr++;
            if (nr < edges.length) {
                var e1 = edges[nr];
                if (e0.id0 == e1.id0 && e0.id1 == e1.id1) {
                    neighbors[e0.edgeNr] = e1.edgeNr;
                    neighbors[e1.edgeNr] = e0.edgeNr;
                }
                // nr++;
            }
        }

        return neighbors;
    }

    protected distance(a: Float32Array | Uint16Array | Uint32Array, indexa: number, b: Float32Array | Uint16Array | Uint32Array, indexb: number) {
        let a0 = a[indexa * 3] - b[indexb * 3], a1 = a[indexa * 3 + 1] - b[indexb * 3 + 1], a2 = a[indexa * 3 + 2] - b[indexb * 3 + 2];
        return a0 * a0 + a1 * a1 + a2 * a2;
    }
}

class ClothSimulatorPipeline extends ClothSimulatorBuffer {
    protected mConfig: ClothSimulatorConfig;
    protected mPreProcessComputeShader: ComputeShader;
    protected mStretchingComputeShader: ComputeShader;
    protected mBendingComputeShader: ComputeShader;
    protected mPositionUpdateComputeShader: ComputeShader;
    protected mPostProcessComputeShader: ComputeShader;
    protected mComputeNormalComputeShader: ComputeShader;
    protected mNormalUpdateComputeShader: ComputeShader;
    protected mUpdateVertexBufferComputeShader: ComputeShader;

    constructor(config: ClothSimulatorConfig) {
        super(config);
        this.mConfig = config;
        this.initPipeline(this.mConfig);
    }

    public compute(command: GPUCommandEncoder, pos: Vector3) {
        let computePass = command.beginComputePass();

        const { NUMSUBSTEPS } = this.mConfig;

        this.updateInputData(pos);

        for (let i = 0; i < NUMSUBSTEPS; i++) {
            this.mPreProcessComputeShader.compute(computePass);
            this.mStretchingComputeShader.compute(computePass);
            this.mBendingComputeShader.compute(computePass);
            this.mPositionUpdateComputeShader.compute(computePass);
            this.mPostProcessComputeShader.compute(computePass);
        }
        this.mComputeNormalComputeShader.compute(computePass);
        this.mNormalUpdateComputeShader.compute(computePass);
        this.mUpdateVertexBufferComputeShader.compute(computePass);

        computePass.end();
    }

    protected initPipeline(config: ClothSimulatorConfig) {
        const { NUMPARTICLES, NUMTSURFACES, NUMTEDGES, NUMTBENDS } = this.mConfig;

        this.mPreProcessComputeShader = new ComputeShader(preprocess.cs);
        this.mPreProcessComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mPreProcessComputeShader.setStorageBuffer(`position`, this.mVertexPositionBuffer);
        this.mPreProcessComputeShader.setStorageBuffer(`velocity`, this.mVelocityBuffer);
        this.mPreProcessComputeShader.setStorageBuffer(`newposition`, this.mNewPositionBuffer);
        this.mPreProcessComputeShader.setStorageBuffer(`output`, this.mOutput0Buffer);
        this.mPreProcessComputeShader.workerSizeX = Math.ceil(NUMPARTICLES / 128);

        this.mStretchingComputeShader = new ComputeShader(stretching.cs);
        this.mStretchingComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mStretchingComputeShader.setStorageBuffer(`inposition`, this.mNewPositionBuffer);
        this.mStretchingComputeShader.setStorageBuffer(`velocity`, this.mVelocityBuffer);
        this.mStretchingComputeShader.setStorageBuffer(`atomicposition`, this.mAtomicPositionBuffer);
        this.mStretchingComputeShader.setStorageBuffer(`stretchinfo`, this.mStretchInfosBuffer);
        this.mStretchingComputeShader.setStorageBuffer(`output`, this.mOutput0Buffer);
        this.mStretchingComputeShader.workerSizeX = Math.ceil(NUMTEDGES / 128);
       
        this.mBendingComputeShader = new ComputeShader(bending.cs);
        this.mBendingComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mBendingComputeShader.setStorageBuffer(`inposition`, this.mNewPositionBuffer);
        this.mBendingComputeShader.setStorageBuffer(`velocity`, this.mVelocityBuffer);
        this.mBendingComputeShader.setStorageBuffer(`atomicposition`, this.mAtomicPositionBuffer);
        this.mBendingComputeShader.setStorageBuffer(`bendinfo`, this.mBendInfosBuffer);
        this.mBendingComputeShader.setStorageBuffer(`output`, this.mOutput0Buffer);
        this.mBendingComputeShader.workerSizeX = Math.ceil(NUMTBENDS / 128);

        this.mPositionUpdateComputeShader = new ComputeShader(positionupdate.cs);
        this.mPositionUpdateComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mPositionUpdateComputeShader.setStorageBuffer(`atomicposition`, this.mAtomicPositionBuffer);
        this.mPositionUpdateComputeShader.setStorageBuffer(`outposition`, this.mNewPositionBuffer);
        this.mPositionUpdateComputeShader.setStorageBuffer(`output`, this.mOutput0Buffer);
        this.mPositionUpdateComputeShader.workerSizeX = Math.ceil(NUMPARTICLES / 128);
        
        this.mPostProcessComputeShader = new ComputeShader(postprocess.cs);
        this.mPostProcessComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mPostProcessComputeShader.setStorageBuffer(`newposition`, this.mNewPositionBuffer);
        this.mPostProcessComputeShader.setStorageBuffer(`velocity`, this.mVelocityBuffer);
        this.mPostProcessComputeShader.setStorageBuffer(`position`, this.mVertexPositionBuffer);
        this.mPostProcessComputeShader.setStorageBuffer(`output`, this.mOutput0Buffer);
        this.mPostProcessComputeShader.workerSizeX = Math.ceil(NUMPARTICLES / 128);

        this.mComputeNormalComputeShader = new ComputeShader(computenormal.cs);
        this.mComputeNormalComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mComputeNormalComputeShader.setStorageBuffer(`position`, this.mVertexPositionBuffer);
        this.mComputeNormalComputeShader.setStorageBuffer(`surfaceinfo`, this.mSurfaceInfosBuffer);
        this.mComputeNormalComputeShader.setStorageBuffer(`atomicnormal`, this.mAtomicNormalBuffer);
        this.mComputeNormalComputeShader.setStorageBuffer(`output`, this.mOutput0Buffer);
        this.mComputeNormalComputeShader.workerSizeX = Math.ceil(NUMTSURFACES / 128);

        this.mNormalUpdateComputeShader = new ComputeShader(normalupdate.cs);
        this.mNormalUpdateComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mNormalUpdateComputeShader.setStorageBuffer(`atomicnormal`, this.mAtomicNormalBuffer);
        this.mNormalUpdateComputeShader.setStorageBuffer(`normal`, this.mNormalBuffer);
        this.mNormalUpdateComputeShader.setStorageBuffer(`output`, this.mOutput0Buffer);
        this.mNormalUpdateComputeShader.workerSizeX = Math.ceil(NUMPARTICLES / 128);

        this.mUpdateVertexBufferComputeShader = new ComputeShader(updatevertexbuffer.cs);
        this.mUpdateVertexBufferComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mUpdateVertexBufferComputeShader.setStorageBuffer(`position`, this.mVertexPositionBuffer);
        this.mUpdateVertexBufferComputeShader.setStorageBuffer(`normal`, this.mNormalBuffer);
        this.mUpdateVertexBufferComputeShader.setStorageBuffer(`vertexBuffer`, config.clothVertexBuffer);
        this.mUpdateVertexBufferComputeShader.workerSizeX = Math.ceil(NUMTSURFACES / 128);
    }
}

class bending {
    public static cs: string = /* wgsl */ `
        struct InputArgs {
            NUMPARTICLES: f32,
            NUMTEDGES: f32,
            NUMTBENDS: f32,
            NUMTSURFACES: f32,
            GRAVITY: f32,
            DELTATIME: f32,
            STRETCHCOMPLIANCE: f32,
            BENDCOMPLIANCE: f32,
            SPHERERADIUS: f32,
            SPHERECENTREX: f32,
            SPHERECENTREY: f32,
            SPHERECENTREZ: f32,
            ALPA: f32,
            rsv0: f32,
            rsv1: f32,
            rsv2: f32,
        };

        @group(0) @binding(0) var<storage, read> input: InputArgs;
        @group(0) @binding(1) var<storage, read_write> inposition: array<vec4<f32>>;
        @group(0) @binding(2) var<storage, read_write> velocity: array<vec4<f32>>;
        @group(0) @binding(3) var<storage, read_write> atomicposition: array<atomic<i32>>;
        @group(1) @binding(0) var<storage, read_write> bendinfo: array<vec4<f32>>;
        @group(1) @binding(1) var<storage, read_write> output: array<vec4<f32>>;
        
        const size = u32(128);
        @compute @workgroup_size(size)
        fn CsMain(
            @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>
        ) {
            var index = GlobalInvocationID.x;
            if(index >= u32(input.NUMTBENDS)){
                return;
            }
            var deltatime = input.DELTATIME;
            var compliance = input.BENDCOMPLIANCE;
        
            var alpha = compliance / deltatime / deltatime;
            // for(var i = 0; i < i32(input[2]); i++){
                var index0 = u32(bendinfo[index][0]);
                var index1 = u32(bendinfo[index][1]);
                var weight0 = velocity[index0][3];
                var weight1 = velocity[index1][3];
                var weight = weight0 + weight1;
        
                if(weight == 0.0){
                    return;
                }
                var position0 = vec3<f32>(inposition[index0][0], inposition[index0][1], inposition[index0][2]);
                var position1 = vec3<f32>(inposition[index1][0], inposition[index1][1], inposition[index1][2]);
                var grad = position0 - position1;
                var length = distance(position0, position1);
                if(length == 0.0){
                    return;
                }
        
                grad = grad / length;
                var restlength = bendinfo[index][2];
                var c = length - restlength;
                var lambda = - c / (weight + alpha);
        
                var temp0 = grad * lambda * weight0;
                var temp1 = grad * lambda * weight1;
                atomicAdd(&atomicposition[index0 * u32(4) + u32(0)], i32(temp0.x * 1000000.0));
                atomicAdd(&atomicposition[index0 * u32(4) + u32(1)], i32(temp0.y * 1000000.0));
                atomicAdd(&atomicposition[index0 * u32(4) + u32(2)], i32(temp0.z * 1000000.0));
                atomicAdd(&atomicposition[index0 * u32(4) + u32(3)], i32(1.0));
                atomicSub(&atomicposition[index1 * u32(4) + u32(0)], i32(temp1.x * 1000000.0));
                atomicSub(&atomicposition[index1 * u32(4) + u32(1)], i32(temp1.y * 1000000.0));
                atomicSub(&atomicposition[index1 * u32(4) + u32(2)], i32(temp1.z * 1000000.0));
                atomicAdd(&atomicposition[index1 * u32(4) + u32(3)], i32(1.0));
            // }
            // for(var i = 0; i < i32(input[0]); i++){
            //     outposition[i][0] = inposition[i][0];
            //     outposition[i][1] = inposition[i][1];
            //     outposition[i][2] = inposition[i][2];
            // }
            var debug = output[index];
            // output[index][0] = position0.x;
            // output[index][1] = position0.y;
            // output[index][2] = position[index0][0];
            // output[index][3] = position[index0][1];
        }
    `;
}

class computenormal {
    public static cs: string = /* wgsl */ `
        struct InputArgs {
            NUMPARTICLES: f32,
            NUMTEDGES: f32,
            NUMTBENDS: f32,
            NUMTSURFACES: f32,
            GRAVITY: f32,
            DELTATIME: f32,
            STRETCHCOMPLIANCE: f32,
            BENDCOMPLIANCE: f32,
            SPHERERADIUS: f32,
            SPHERECENTREX: f32,
            SPHERECENTREY: f32,
            SPHERECENTREZ: f32,
            ALPA: f32,
            rsv0: f32,
            rsv1: f32,
            rsv2: f32,
        };

        @group(0) @binding(0) var<storage, read> input: InputArgs;
        @group(0) @binding(1) var<storage, read_write> position: array<vec4<f32>>;
        @group(0) @binding(2) var<storage, read_write> surfaceinfo: array<vec4<f32>>;
        @group(0) @binding(3) var<storage, read_write> atomicnormal: array<atomic<i32>>;
        @group(1) @binding(0) var<storage, read_write> output: array<vec4<f32>>;
        
        const size = u32(128);
        @compute @workgroup_size(size)
        fn CsMain(
            @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>
        ) {
            var index = GlobalInvocationID.x;
            if(index >= u32(input.NUMTSURFACES)){
                return;
            }
        
            var index0 = u32(surfaceinfo[index][0]);
            var index1 = u32(surfaceinfo[index][1]);
            var index2 = u32(surfaceinfo[index][2]);
            var vector1 = vec3<f32>(position[index1][0] - position[index0][0], position[index1][1] - position[index0][1], position[index1][2] - position[index0][2]);
            var vector2 = vec3<f32>(position[index2][0] - position[index1][0], position[index2][1] - position[index1][1], position[index2][2] - position[index1][2]);
            var temp = cross(vector1, vector2);
            temp = temp / length(temp);
                
            atomicAdd(&atomicnormal[index0 * u32(4) + u32(0)], i32(temp.x * 1000000.0));
            atomicAdd(&atomicnormal[index0 * u32(4) + u32(1)], i32(temp.y * 1000000.0));
            atomicAdd(&atomicnormal[index0 * u32(4) + u32(2)], i32(temp.z * 1000000.0));
            atomicAdd(&atomicnormal[index0 * u32(4) + u32(3)], i32(1.0));
            atomicAdd(&atomicnormal[index1 * u32(4) + u32(0)], i32(temp.x * 1000000.0));
            atomicAdd(&atomicnormal[index1 * u32(4) + u32(1)], i32(temp.y * 1000000.0));
            atomicAdd(&atomicnormal[index1 * u32(4) + u32(2)], i32(temp.z * 1000000.0));
            atomicAdd(&atomicnormal[index1 * u32(4) + u32(3)], i32(1.0));
            atomicAdd(&atomicnormal[index2 * u32(4) + u32(0)], i32(temp.x * 1000000.0));
            atomicAdd(&atomicnormal[index2 * u32(4) + u32(1)], i32(temp.y * 1000000.0));
            atomicAdd(&atomicnormal[index2 * u32(4) + u32(2)], i32(temp.z * 1000000.0));
            atomicAdd(&atomicnormal[index2 * u32(4) + u32(3)], i32(1.0));

            var debug = output[index];
            // output[index][0] = velocity[index][0];
            // output[index][1] = velocity[index][1];
            // output[index][2] = currentposition.x;
            // output[index][3] = oldposition.x;
            // output[index][2] = tempvelocity.z;
            // output[index][3] = newposition[index0][1];
        }
    `;
}

class normalupdate {
    public static cs: string = /* wgsl */ `
        struct InputArgs {
            NUMPARTICLES: f32,
            NUMTEDGES: f32,
            NUMTBENDS: f32,
            NUMTSURFACES: f32,
            GRAVITY: f32,
            DELTATIME: f32,
            STRETCHCOMPLIANCE: f32,
            BENDCOMPLIANCE: f32,
            SPHERERADIUS: f32,
            SPHERECENTREX: f32,
            SPHERECENTREY: f32,
            SPHERECENTREZ: f32,
            ALPA: f32,
            rsv0: f32,
            rsv1: f32,
            rsv2: f32,
        };

        @group(0) @binding(0) var<storage, read> input: InputArgs;
        @group(0) @binding(1) var<storage, read_write> atomicnormal: array<atomic<i32>>;
        @group(0) @binding(2) var<storage, read_write> normal: array<vec4<f32>>;
        @group(0) @binding(3) var<storage, read_write> output: array<vec4<f32>>;
        
        const size = u32(128);
        @compute @workgroup_size(size)
        fn CsMain(
            @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>
        ) {
            var index = GlobalInvocationID.x;
            if(index >= u32(input.NUMPARTICLES)){
                return;
            }
    
            var num = f32(atomicLoad(&atomicnormal[index * u32(4) + u32(3)]));
            var temp = vec3<f32>(f32(atomicLoad(&atomicnormal[index * u32(4) + u32(0)])) / (num) / 1000000.0,
                                 f32(atomicLoad(&atomicnormal[index * u32(4) + u32(1)])) / (num) / 1000000.0,
                                 f32(atomicLoad(&atomicnormal[index * u32(4) + u32(2)])) / (num) / 1000000.0);
            // temp = temp / length(temp);
            normal[index][0] = temp.x;
            normal[index][1] = temp.y;
            normal[index][2] = temp.z;
            atomicStore(&atomicnormal[index * u32(4) + u32(0)], i32(0.0));
            atomicStore(&atomicnormal[index * u32(4) + u32(1)], i32(0.0));
            atomicStore(&atomicnormal[index * u32(4) + u32(2)], i32(0.0));
            atomicStore(&atomicnormal[index * u32(4) + u32(3)], i32(0.0));
        
            var debug = output[index];
            // output[index][0] = f32(index);
            // output[index][1] = normal[index][0];
            // output[index][2] = normal[index][0];
            // output[index][3] = normal[index][1];
        }
    `;
}

class positionupdate {
    public static cs: string = /* wgsl */ `
        struct InputArgs {
            NUMPARTICLES: f32,
            NUMTEDGES: f32,
            NUMTBENDS: f32,
            NUMTSURFACES: f32,
            GRAVITY: f32,
            DELTATIME: f32,
            STRETCHCOMPLIANCE: f32,
            BENDCOMPLIANCE: f32,
            SPHERERADIUS: f32,
            SPHERECENTREX: f32,
            SPHERECENTREY: f32,
            SPHERECENTREZ: f32,
            ALPA: f32,
            rsv0: f32,
            rsv1: f32,
            rsv2: f32,
        };

        @group(0) @binding(0) var<storage, read> input: InputArgs;
        @group(0) @binding(1) var<storage, read_write> atomicposition: array<atomic<i32>>;
        @group(0) @binding(2) var<storage, read_write> outposition: array<vec4<f32>>;
        @group(0) @binding(3) var<storage, read_write> output: array<vec4<f32>>;
        
        const size = u32(128);
        @compute @workgroup_size(size)
        fn CsMain(
            @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>
        ) {
            var index = GlobalInvocationID.x;
            if(index >= u32(input.NUMPARTICLES)){
                return;
            }
            var alpha = input.ALPA;
            var num = f32(atomicLoad(&atomicposition[index * u32(4) + u32(3)]));
            outposition[index][0] += f32(atomicLoad(&atomicposition[index * u32(4) + u32(0)])) / (num + alpha) / 1000000.0;
            outposition[index][1] += f32(atomicLoad(&atomicposition[index * u32(4) + u32(1)])) / (num + alpha) / 1000000.0;
            outposition[index][2] += f32(atomicLoad(&atomicposition[index * u32(4) + u32(2)])) / (num + alpha) / 1000000.0;
            atomicStore(&atomicposition[index * u32(4) + u32(0)], i32(0.0));
            atomicStore(&atomicposition[index * u32(4) + u32(1)], i32(0.0));
            atomicStore(&atomicposition[index * u32(4) + u32(2)], i32(0.0));
            atomicStore(&atomicposition[index * u32(4) + u32(3)], i32(0.0));
        
            var debug = output[index];
            // output[index][0] = f32(index);
            // output[index][1] = num;
            // output[index][2] = position[index0][0];
            // output[index][3] = position[index0][1];
        }
    `;
}

class postprocess {
    public static cs: string = /* wgsl */ `
        struct InputArgs {
            NUMPARTICLES: f32,
            NUMTEDGES: f32,
            NUMTBENDS: f32,
            NUMTSURFACES: f32,
            GRAVITY: f32,
            DELTATIME: f32,
            STRETCHCOMPLIANCE: f32,
            BENDCOMPLIANCE: f32,
            SPHERERADIUS: f32,
            SPHERECENTREX: f32,
            SPHERECENTREY: f32,
            SPHERECENTREZ: f32,
            ALPA: f32,
            rsv0: f32,
            rsv1: f32,
            rsv2: f32,
        };

        @group(0) @binding(0) var<storage, read> input: InputArgs;
        @group(0) @binding(1) var<storage, read_write> newposition: array<vec4<f32>>;
        @group(0) @binding(2) var<storage, read_write> velocity: array<vec4<f32>>;
        @group(0) @binding(3) var<storage, read_write> position: array<vec4<f32>>;
        @group(1) @binding(0) var<storage, read_write> output: array<vec4<f32>>;
        
        fn intersectSphere(origin: vec3<f32>, ray: vec3<f32>, spherecenter: vec3<f32>, sphereradius: f32) -> f32{   
            var tosphere = origin - spherecenter;   
            var a = dot(ray, ray);   
            var b = 2.0 * dot(tosphere, ray);   
            var c = dot(tosphere, tosphere) - sphereradius*sphereradius;   
            var discriminant = b*b - 4.0*a*c;   
            if(discriminant > 0.0) {     
                var t = (-b - sqrt(discriminant)) / (2.0 * a);     
                if(t > 0.0) {
                    return t;
                }   
            }   
            return 0.0; 
        }
        
        const size = u32(128);
        @compute @workgroup_size(size)
        fn CsMain(
            @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>
        ) {
            var index = GlobalInvocationID.x;
            if(index >= u32(input.NUMPARTICLES)){
                return;
            }
            var deltatime = input.DELTATIME;
            var spherecentre = vec3<f32>(input.SPHERECENTREX, input.SPHERECENTREY, input.SPHERECENTREZ);
            var sphereradius = input.SPHERERADIUS;
        
            if(velocity[index][3] == 0.0){
                return;
            }
            var oldposition = vec3<f32>(position[index][0], position[index][1], position[index][2]);
            var currentposition = vec3<f32>(newposition[index][0], newposition[index][1], newposition[index][2]);
        
            var tempvelocity = (currentposition - oldposition) / deltatime;
            if(distance(spherecentre, currentposition) < sphereradius){
                var ray = currentposition - spherecentre;
                // var tsphere = intersectSphere(oldposition, ray, spherecentre, sphereradius);
                currentposition = currentposition + ray * (sphereradius - distance(spherecentre, currentposition));
                tempvelocity = (currentposition - oldposition) / deltatime;
                // output[index][0] = distance(spherecentre, currentposition);
                // output[index][1] = ray.z;
                // output[index][2] = ray.x;
                // output[index][3] = ray.y;
            }
            
            velocity[index][0] = tempvelocity.x;
            velocity[index][1] = tempvelocity.y;
            velocity[index][2] = tempvelocity.z;
            position[index][0] = newposition[index][0];
            position[index][1] = newposition[index][1];
            position[index][2] = newposition[index][2];
                
            var debug = output[index];
            // output[index][0] = velocity[index][0];
            // output[index][1] = velocity[index][1];
            // output[index][2] = currentposition.x;
            // output[index][3] = oldposition.x;
            // output[index][2] = tempvelocity.z;
            // output[index][3] = newposition[index0][1];
        }
    `;
}

class preprocess {
    public static cs:string = /* wgsl */ `
        struct InputArgs {
            NUMPARTICLES: f32,
            NUMTEDGES: f32,
            NUMTBENDS: f32,
            NUMTSURFACES: f32,
            GRAVITY: f32,
            DELTATIME: f32,
            STRETCHCOMPLIANCE: f32,
            BENDCOMPLIANCE: f32,
            SPHERERADIUS: f32,
            SPHERECENTREX: f32,
            SPHERECENTREY: f32,
            SPHERECENTREZ: f32,
            ALPA: f32,
            rsv0: f32,
            rsv1: f32,
            rsv2: f32,
        };

        @group(0) @binding(0) var<storage, read> input: InputArgs;
        @group(0) @binding(1) var<storage, read_write> position: array<vec4<f32>>;
        @group(0) @binding(2) var<storage, read_write> velocity: array<vec4<f32>>;
        @group(0) @binding(3) var<storage, read_write> newposition: array<vec4<f32>>;
        @group(1) @binding(0) var<storage, read_write> output: array<vec4<f32>>;
        
        const size = u32(128);
        @compute @workgroup_size(size)
        fn CsMain(
            @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>
        ) {
            var index = GlobalInvocationID.x;
            if(index >= u32(input.NUMPARTICLES)){
                return;
            }
            var gravity = input.GRAVITY;
            var deltatime = input.DELTATIME;
        
            if(velocity[index][3] == 0.0){
                return;
            }
            var oldposition = vec3<f32>(position[index][0], position[index][1], position[index][2]);
            var tempvelocity = vec3<f32>(velocity[index][0], velocity[index][1], velocity[index][2])
                            + vec3<f32>(0.0, gravity * deltatime, 0.0);
            var tempposition = oldposition + tempvelocity * deltatime;
            // if(tempposition.y < 0.0){
            //     tempposition.x = oldposition.x;
            //     tempposition.y = 0.0;
            //     tempposition.z = oldposition.z;
            // }     
            newposition[index][0] = tempposition.x;
            newposition[index][1] = tempposition.y;
            newposition[index][2] = tempposition.z;
        
            var debug = output[index];
            // output[index][0] = tempposition.x;
            // output[index][1] = tempposition.y;
            // output[index][2] = tempposition.z;
            // output[index][3] = f32(index);
        }
    `;
}

class stretching {
    public static cs:string = /* wgsl */ `
        struct InputArgs {
            NUMPARTICLES: f32,
            NUMTEDGES: f32,
            NUMTBENDS: f32,
            NUMTSURFACES: f32,
            GRAVITY: f32,
            DELTATIME: f32,
            STRETCHCOMPLIANCE: f32,
            BENDCOMPLIANCE: f32,
            SPHERERADIUS: f32,
            SPHERECENTREX: f32,
            SPHERECENTREY: f32,
            SPHERECENTREZ: f32,
            ALPA: f32,
            rsv0: f32,
            rsv1: f32,
            rsv2: f32,
        };

        @group(0) @binding(0) var<storage, read> input: InputArgs;
        @group(0) @binding(1) var<storage, read_write> inposition: array<vec4<f32>>;
        @group(0) @binding(2) var<storage, read_write> velocity: array<vec4<f32>>;
        @group(0) @binding(3) var<storage, read_write> atomicposition: array<atomic<i32>>;
        @group(1) @binding(0) var<storage, read_write> stretchinfo: array<vec4<f32>>;
        @group(1) @binding(1) var<storage, read_write> output: array<vec4<f32>>;
        
        const size = u32(128);
        @compute @workgroup_size(size)
        fn CsMain(
            @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>
        ) {
            var index = GlobalInvocationID.x;
            if(index >= u32(input.NUMTEDGES)){
                return;
            }
            var deltatime = input.DELTATIME;
            var compliance = input.STRETCHCOMPLIANCE;
        
            var alpha = compliance / deltatime / deltatime;
            // for(var i = 0; i < i32(input[1]); i++){
                var index0 = u32(stretchinfo[index][0]);
                var index1 = u32(stretchinfo[index][1]);
                var weight0 = velocity[index0][3];
                var weight1 = velocity[index1][3];
                var weight = weight0 + weight1;
        
                if(weight == 0.0){
                    return;
                }
                var position0 = vec3<f32>(inposition[index0][0], inposition[index0][1], inposition[index0][2]);
                var position1 = vec3<f32>(inposition[index1][0], inposition[index1][1], inposition[index1][2]);
                var grad = position0 - position1;
                var length = distance(position0, position1);
                if(length == 0.0){
                    return;
                }
        
                grad = grad / length;
                var restlength = stretchinfo[index][2];
                var c = length - restlength;
                var lambda = - c / (weight + alpha);
        
                var temp0 = grad * lambda * weight0;
                var temp1 = grad * lambda * weight1;
                atomicAdd(&atomicposition[index0 * u32(4) + u32(0)], i32(temp0.x * 1000000.0));
                atomicAdd(&atomicposition[index0 * u32(4) + u32(1)], i32(temp0.y * 1000000.0));
                atomicAdd(&atomicposition[index0 * u32(4) + u32(2)], i32(temp0.z * 1000000.0));
                atomicAdd(&atomicposition[index0 * u32(4) + u32(3)], i32(1.0));
                atomicSub(&atomicposition[index1 * u32(4) + u32(0)], i32(temp1.x * 1000000.0));
                atomicSub(&atomicposition[index1 * u32(4) + u32(1)], i32(temp1.y * 1000000.0));
                atomicSub(&atomicposition[index1 * u32(4) + u32(2)], i32(temp1.z * 1000000.0));
                atomicAdd(&atomicposition[index1 * u32(4) + u32(3)], i32(1.0));
            // }
            // for(var i = 0; i < i32(input[0]); i++){
            //     outposition[i][0] = inposition[i][0];
            //     outposition[i][1] = inposition[i][1];
            //     outposition[i][2] = inposition[i][2];
            // }
            var debug = output[index];
            // output[index][0] = position0.x;
            // output[index][1] = position0.y;
            // output[index][2] = position[index0][0];
            // output[index][3] = position[index0][1];
        }
    `;
}

class updatevertexbuffer {
    public static cs: string =/* wgsl */ `
        struct InputArgs {
            NUMPARTICLES: f32,
            NUMTEDGES: f32,
            NUMTBENDS: f32,
            NUMTSURFACES: f32,
            GRAVITY: f32,
            DELTATIME: f32,
            STRETCHCOMPLIANCE: f32,
            BENDCOMPLIANCE: f32,
            SPHERERADIUS: f32,
            SPHERECENTREX: f32,
            SPHERECENTREY: f32,
            SPHERECENTREZ: f32,
            ALPA: f32,
            rsv0: f32,
            rsv1: f32,
            rsv2: f32,
        };

        @group(0) @binding(0) var<storage, read> input: InputArgs;
        @group(0) @binding(1) var<storage, read> position: array<vec4<f32>>;
        @group(0) @binding(2) var<storage, read> normal: array<vec4<f32>>;
        @group(0) @binding(3) var<storage, read_write> vertexBuffer: array<f32>;
        
        const size = u32(128);
        @compute @workgroup_size(size)
        fn CsMain(
            @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>
        ) {
            var index = GlobalInvocationID.x;
            if(index >= u32(input.NUMTSURFACES)){
                return;
            }
            
            let pos = position[index];
            let nor = normal[index];

            let stride = u32(3+3+2+2);
            index *= stride;
            // update position
            vertexBuffer[index + 0] = pos[0];
            vertexBuffer[index + 1] = pos[1];
            vertexBuffer[index + 2] = pos[2];
            // // update normal
            vertexBuffer[index + 3] = nor[0];
            vertexBuffer[index + 4] = nor[1];
            vertexBuffer[index + 5] = nor[2];
        }
    `;
}
