import { CameraUtil, clamp, ClusterLightingBuffer, ColliderComponent, Color, ComputeGPUBuffer, ComputeShader, Engine3D, HoverCameraController, Material, MeshRenderer, Object3D, PassType, PlaneGeometry, PointerEvent3D, RendererMask, RendererPassState, RenderShaderPass, Scene3D, Shader, ShaderLib, Texture, Time, Vector3, Vector4, View3D, webGPUContext } from '@orillusion/core';
import * as dat from 'dat.gui'

class Demo_FluidOptimize {
    constructor() { }

    protected mLastPoint: Vector3 = new Vector3();
    protected mVelocity: Vector3 = new Vector3();

    async run() {
        Engine3D.setting.material.materialChannelDebug = true;
        Engine3D.setting.pick.enable = true;
        Engine3D.setting.pick.mode = `pixel`;

        await Engine3D.init({});


        let scene = new Scene3D();
        //await this.initScene(scene);

        let camera = CameraUtil.createCamera3DObject(scene);

        camera.perspective(60, webGPUContext.aspect, 0.01, 10000.0);
        let ctl = camera.object3D.addComponent(HoverCameraController);
        ctl.setCamera(-45, -30, 50, new Vector3(15, 0, 10));

        let view = new View3D();
        view.scene = scene;
        view.camera = camera;

        Engine3D.startRenderView(view);
        await this.initScene(scene);

        let gui = new dat.GUI()
        gui.add({'tips': 'move mouse on fluid'}, 'tips')
    }

    async initScene(scene: Scene3D) {
        let obj = new Object3D();

        let emulation = obj.addComponent(FluidEmulation);
        emulation.alwaysRender = true;
        emulation.geometry = new PlaneGeometry(0.15, 0.15, 1.0, 1.0, Vector3.Z_AXIS);
        emulation.material = new FluidSimulatorMaterial2();
        scene.addChild(obj);

        obj.addComponent(ColliderComponent);
        let pickFire = scene.view.pickFire;
        pickFire.addEventListener(
            PointerEvent3D.PICK_MOVE,
            function (e: PointerEvent3D) {
                let point = e.data.worldPos;
                if (point.y >= 0 && (this.mLastPoint.x != point.x && this.mLastPoint.y != point.y && this.mLastPoint.z != point.z)) {
                    try {
                        point.subtract(this.mLastPoint, this.mVelocity);
                        this.mLastPoint.copy(point);
                        let r = scene.view.camera;
                        let ray = r.screenPointToRay(Engine3D.inputSystem.mouseX, Engine3D.inputSystem.mouseY);
                        emulation.updateInputInfo(scene.view.camera.transform.localPosition, ray.direction, this.mVelocity);
                    }
                    catch (e) {
                        console.error(e);
                    }

                    return;
                }
            }, this);
    }

    async initComputeBuffer() { }
}

type FluidSimulatorConfig = {
    GROUP_SIZE: number;
    XMIN: number;
    XMAX: number;
    YMIN: number;
    YMAX: number;
    ZMIN: number;
    ZMAX: number;
    scaleV: number;
    scale: number;
    gridSizeX: number;
    gridSizeY: number;
    gridSizeZ: number;
    gridResolutionX: number;
    gridResolutionY: number;
    gridResolutionZ: number;
    initDensity: number;
    NUM: number;
    dispatchNUM: number;
    GRIDNUM: number;
    dispatchGRID: number;
    CELLNUM: number;
    dispatchCELL: number;
    maxDensity: number;
    timeStep: number;
    PRESSURE_JACOBI_ITERATIONS: number;
    flipness: number;
};

class FluidEmulation extends MeshRenderer {
    protected mConfig: FluidSimulatorConfig;
    protected mFluidComputePipeline: FluidSimulatorPipeline;
    protected mModelViewBuffer: GPUBuffer;
    protected mGlobalArgs: ComputeGPUBuffer;

    constructor() {
        super();
        this.rendererMask = RendererMask.Particle;
        this.mConfig = {
            GROUP_SIZE: 128,
            XMIN: 0,
            XMAX: 15,
            YMIN: 10,
            YMAX: 20,
            ZMIN: 0,
            ZMAX: 20,
            scaleV: 3,
            scale: 0,
            gridSizeX: 30,
            gridSizeY: 20,
            gridSizeZ: 20,
            gridResolutionX: 0,
            gridResolutionY: 0,
            gridResolutionZ: 0,
            initDensity: 20,
            NUM: 0,
            dispatchNUM: 0,
            GRIDNUM: 0,
            dispatchGRID: 0,
            CELLNUM: 0,
            dispatchCELL: 0,
            maxDensity: 0,
            timeStep: 1.0 / 60.0,
            PRESSURE_JACOBI_ITERATIONS: 100,
            flipness: 0.95,
        };
    }

    public setConfig(config: { [key in keyof FluidSimulatorConfig]?: number }) {
        Object.assign(this.mConfig, config);
    }

    public start() {
        const { initDensity, XMIN, XMAX, YMIN, YMAX, ZMIN, ZMAX, scaleV } = this.mConfig;
        this.mConfig.scale = Math.pow(scaleV, 1.0 / 3.0);
        this.mConfig.gridResolutionX = Math.ceil(this.mConfig.gridSizeX * 1);
        this.mConfig.gridResolutionY = Math.ceil(this.mConfig.gridSizeY * 1);
        this.mConfig.gridResolutionZ = Math.ceil(this.mConfig.gridSizeZ * 1);
        this.mConfig.NUM = Math.ceil(initDensity * (XMAX - XMIN) * (YMAX - YMIN) * (ZMAX - ZMIN) * scaleV);
        this.mConfig.dispatchNUM = Math.ceil(this.mConfig.NUM / this.mConfig.GROUP_SIZE);
        this.mConfig.GRIDNUM = (this.mConfig.gridResolutionX + 1) * (this.mConfig.gridResolutionY + 1) * (this.mConfig.gridResolutionZ + 1);
        this.mConfig.dispatchGRID = Math.ceil(this.mConfig.GRIDNUM / this.mConfig.GROUP_SIZE);
        this.mConfig.CELLNUM = this.mConfig.gridResolutionX * this.mConfig.gridResolutionY * this.mConfig.gridResolutionZ;
        this.mConfig.dispatchCELL = Math.ceil(this.mConfig.CELLNUM / this.mConfig.GROUP_SIZE);
        this.mConfig.maxDensity = this.mConfig.NUM / (this.mConfig.XMAX - this.mConfig.XMIN) / (this.mConfig.YMAX - this.mConfig.YMIN) / (this.mConfig.ZMAX - this.mConfig.ZMIN);

        this.mFluidComputePipeline = new FluidSimulatorPipeline(this.mConfig);
        let device = webGPUContext.device;
        const { NUM } = this.mConfig;

        const modelView = new Float32Array(16 * NUM);
        for (let i = 0; i < NUM; ++i) {
            const offset = i * 16;
            modelView[offset + 0] = 1;
            modelView[offset + 5] = 1;
            modelView[offset + 10] = 1;
            modelView[offset + 15] = 1;
        }
        const modelViewBuffer = device.createBuffer({
            size: modelView.byteLength * 4,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
        });
        device.queue.writeBuffer(modelViewBuffer, 0, modelView);

        const mvp = new Float32Array(16 * NUM);
        for (let i = 0; i < NUM; ++i) {
            const offset = i * 16;
            mvp[offset + 0] = 1;
            mvp[offset + 5] = 1;
            mvp[offset + 10] = 1;
            mvp[offset + 15] = 1;
        }
        const mvpBuffer = device.createBuffer({
            size: mvp.byteLength * 4,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
        });
        device.queue.writeBuffer(mvpBuffer, 0, mvp);

        var globalArgsData = new Float32Array(4);
        this.mGlobalArgs = new ComputeGPUBuffer(globalArgsData.byteLength);
        globalArgsData[0] = this.transform.worldMatrix.index;
        this.mGlobalArgs.setFloat32Array("", globalArgsData);
        this.mGlobalArgs.apply();

        this.instanceCount = this.mConfig.NUM;
    }

    public stop() { }

    public updateInputInfo(origin: Vector3, direction: Vector3, velocity: Vector3) {
        this.mFluidComputePipeline.updateInput(origin, direction, velocity);
    }

    private _tickTime = 0;

    public onCompute(view: View3D, command?: GPUCommandEncoder) {
        this._tickTime += Time.delta;
        this.mFluidComputePipeline.updateInputData();
        // if(this._tickTime>=10){
        this.mFluidComputePipeline.compute(command);
        this._tickTime = 0;
        // }

    }

    public nodeUpdate(view: View3D, passType: PassType, renderPassState: RendererPassState, clusterLightingBuffer: ClusterLightingBuffer) {
        let material = this.materials[0];
        let passes = material.getPass(passType);
        if (passes) {
            for (let i = 0; i < passes.length; i++) {
                var subs = passes[i];
                subs.setStorageBuffer(`particlePosition`, this.mFluidComputePipeline.positionBuffer);
                subs.setStorageBuffer(`particleColor`, this.mFluidComputePipeline.colorBuffer);
                subs.setStorageBuffer(`particleGlobalData`, this.mGlobalArgs);
                }
            }
        super.nodeUpdate(view, passType, renderPassState, clusterLightingBuffer);
    }
}

class FluidSimulatorMaterial2 extends Material {
    doubleSided: any;
    constructor() {
        super();

        ShaderLib.register("FluidRenderShaderOpt", FluidRenderShaderOpt);
        let shader = new Shader();
        let pass = new RenderShaderPass('FluidRenderShaderOpt', 'FluidRenderShaderOpt');
        pass.setShaderEntry(`VertMain`, `FragMain`)

        shader.addRenderPass(pass);
        shader.setUniformVector4(`transformUV1`, new Vector4(0, 0, 1, 1));
        shader.setUniformVector4(`transformUV2`, new Vector4(0, 0, 1, 1));
        shader.setUniformColor(`baseColor`, new Color());
        shader.setUniformFloat(`alphaCutoff`, 0.5);
        shader.setUniformFloat(`shadowBias`, 0.00035);

        let shaderState = pass.shaderState ;
        shaderState.acceptShadow = false;
        shaderState.receiveEnv = false;
        shaderState.acceptGI = false;
        shaderState.useLight = false;

        // default value
        this.baseMap = Engine3D.res.whiteTexture;
        this.shader = shader;
        
        // this.transparent = true ;
    }

    public set baseMap(value: Texture) {
        // this.onChange = true;
    }

    public set envMap(texture: Texture) {
        //not need env texture
    }

    public set shadowMap(texture: Texture) {
        //not need shadowMap texture
    }

    debug() {}

}

class FluidSimulatorBuffer {
    protected mPositionData: Float32Array;
    protected mPositionBuffer: ComputeGPUBuffer;
    protected mVelocityBuffer: ComputeGPUBuffer;
    protected mTempvelocityBuffer: ComputeGPUBuffer;
    protected mGridvelocityBuffer: ComputeGPUBuffer;
    protected mOrivelocityBuffer: ComputeGPUBuffer;
    protected mAtomicvelocityBuffer: ComputeGPUBuffer;
    protected mMarkBuffer: ComputeGPUBuffer;
    protected mWeightBuffer: ComputeGPUBuffer;
    protected mTempweightBuffer: ComputeGPUBuffer;
    protected mAtomicweightBuffer: ComputeGPUBuffer;
    protected mDivergenceBuffer: ComputeGPUBuffer;
    protected mPressureBuffer: ComputeGPUBuffer;
    protected mTemppressureBuffer: ComputeGPUBuffer;
    protected mColorData: Float32Array;
    protected mColorBuffer: ComputeGPUBuffer;
    protected mInputBuffer: ComputeGPUBuffer;
    protected mOutput0Buffer: ComputeGPUBuffer;
    protected mOutput1Buffer: ComputeGPUBuffer;
    protected mOutput2Buffer: ComputeGPUBuffer;
    protected mTimeoutId: any;
    constructor(config: FluidSimulatorConfig) {
        this.initGPUBuffer(config);
    }

    protected initGPUBuffer(config: FluidSimulatorConfig) {
        const { NUM, XMIN, XMAX, YMIN, YMAX, ZMIN, ZMAX, GRIDNUM, CELLNUM } = config;

        // core position buffer
        const position = new Float32Array(4 * NUM);
        for (let i = 0; i < NUM; ++i) {
            position[i * 4 + 0] = Math.random() * (XMAX - XMIN) + XMIN; // x
            position[i * 4 + 1] = Math.random() * (YMAX - YMIN) + YMIN; // y
            position[i * 4 + 2] = Math.random() * (ZMAX - ZMIN) + ZMIN; // z
            position[i * 4 + 3] = 0; // w
        }
        this.mPositionData = position;
        this.mPositionBuffer = new ComputeGPUBuffer(this.mPositionData.length);
        this.mPositionBuffer.setFloat32Array("", this.mPositionData);
        this.mPositionBuffer.apply();

        // velocity for computing position
        this.mVelocityBuffer = new ComputeGPUBuffer(4 * NUM);
        this.mTempvelocityBuffer = new ComputeGPUBuffer(4 * NUM);
        this.mGridvelocityBuffer = new ComputeGPUBuffer(4 * GRIDNUM);
        this.mOrivelocityBuffer = new ComputeGPUBuffer(4 * GRIDNUM);
        this.mAtomicvelocityBuffer = new ComputeGPUBuffer(4 * GRIDNUM);
        
        this.mMarkBuffer = new ComputeGPUBuffer(CELLNUM);
        
        // weight for transfer particle velocities to grid
        this.mWeightBuffer = new ComputeGPUBuffer(4 * GRIDNUM);
        this.mTempweightBuffer = new ComputeGPUBuffer(4 * NUM);
        this.mAtomicweightBuffer = new ComputeGPUBuffer(4 * GRIDNUM);
       
        this.mDivergenceBuffer = new ComputeGPUBuffer(CELLNUM);
        
        this.mPressureBuffer = new ComputeGPUBuffer(CELLNUM);
        this.mTemppressureBuffer = new ComputeGPUBuffer(CELLNUM);
        
        const color = new Float32Array(4 * NUM);
        for (let i = 0; i < NUM; ++i) {
            color[i * 4 + 0] = 1; // r
            color[i * 4 + 1] = 0; // g
            color[i * 4 + 2] = 0; // b
            color[i * 4 + 3] = 1; // a
        }
        this.mColorData = color;
        this.mColorBuffer = new ComputeGPUBuffer(this.mColorData.length);
        this.mColorBuffer.setFloat32Array("", this.mColorData);
        this.mColorBuffer.apply();

        const { gridResolutionX, gridResolutionY, gridResolutionZ, gridSizeX, gridSizeY, gridSizeZ, timeStep, flipness, maxDensity } = config;
        this.mInputBuffer = new ComputeGPUBuffer(24);
        this.mInputBuffer.setFloat("NUM", NUM);
        this.mInputBuffer.setFloat("GRIDNUM", GRIDNUM);
        this.mInputBuffer.setFloat("CELLNUM", CELLNUM);
        this.mInputBuffer.setFloat("gridResolutionX", gridResolutionX);
        this.mInputBuffer.setFloat("gridResolutionY", gridResolutionY);
        this.mInputBuffer.setFloat("gridResolutionZ", gridResolutionZ);
        this.mInputBuffer.setFloat("gridSizeX", gridSizeX);
        this.mInputBuffer.setFloat("gridSizeY", gridSizeY);
        this.mInputBuffer.setFloat("gridSizeZ", gridSizeZ);
        this.mInputBuffer.setFloat("timeStep", timeStep);
        this.mInputBuffer.setFloat("flipness", flipness);
        this.mInputBuffer.setFloat("maxDensity", maxDensity);
        this.mInputBuffer.apply();

        // DEBUG BUFFERS
        this.mOutput0Buffer = new ComputeGPUBuffer(4 * (NUM + 10));
        this.mOutput1Buffer = new ComputeGPUBuffer(4 * (CELLNUM + 10));
        this.mOutput2Buffer = new ComputeGPUBuffer(4 * (GRIDNUM + 10));
    }

    public resetGPUBuffer(config: FluidSimulatorConfig) {}

    public updateInput(origin: Vector3, direction: Vector3, velocity: Vector3) {
        clearTimeout(this.mTimeoutId);
        this.mInputBuffer.setFloat("timeStep", Time.delta);
        this.mInputBuffer.setFloat("mouseVelocityX", velocity.x / 2.0);
        this.mInputBuffer.setFloat("mouseVelocityY", velocity.y / 2.0);
        this.mInputBuffer.setFloat("mouseVelocityZ", velocity.z / 2.0);
        this.mInputBuffer.setFloat("mouseOriginX", origin.x);
        this.mInputBuffer.setFloat("mouseOriginY", origin.y);
        this.mInputBuffer.setFloat("mouseOriginZ", origin.z);
        this.mInputBuffer.setFloat("mouseDirectionX", direction.x);
        this.mInputBuffer.setFloat("mouseDirectionY", direction.y);
        this.mInputBuffer.setFloat("mouseDirectionZ", direction.z);
        this.mTimeoutId = setTimeout(() => {
            this.mInputBuffer.setFloat("mouseVelocityX", 0.0);
            this.mInputBuffer.setFloat("mouseVelocityY", 0.0);
            this.mInputBuffer.setFloat("mouseVelocityZ", 0.0);
        }, 100);
    }

    public updateInputData() {
        this.mInputBuffer.setFloat("timeStep", clamp(Time.delta * 0.001,0,1/60));
        this.mInputBuffer.apply();
    }
}

class FluidSimulatorPipeline extends FluidSimulatorBuffer {
    protected mConfig: FluidSimulatorConfig;
    protected mTransferToGridComputeShader: ComputeShader;
    protected mNormalizegridComputeShader: ComputeShader;
    protected mAddforceComputeShader: ComputeShader;
    protected mEnforceboundariesComputeShader: ComputeShader;
    protected mDivergenceComputeShader: ComputeShader;
    protected mJacobiComputeShader: ComputeShader;
    protected mCopyComputeShader: ComputeShader;
    protected mSubtractComputeShader: ComputeShader;
    protected mTransferToParticlesComputeShader: ComputeShader;
    protected mAdvectComputeShader: ComputeShader;
    protected mClearStateComputeShader: ComputeShader;
    protected mComputeMatrixComputeShader: ComputeShader;

    constructor(config: FluidSimulatorConfig) {
        super(config);
        this.mConfig = config;
        this.initPipeline(config);
    }

    public get positionBuffer(): ComputeGPUBuffer {
        return this.mPositionBuffer;
    }

    public get colorBuffer(): ComputeGPUBuffer {
        return this.mColorBuffer;
    }

    public compute(command: GPUCommandEncoder) {
        let computePass = command.beginComputePass();

        this.mTransferToGridComputeShader.compute(computePass);
        this.mNormalizegridComputeShader.compute(computePass);
        this.mAddforceComputeShader.compute(computePass);
        this.mEnforceboundariesComputeShader.compute(computePass);
        this.mDivergenceComputeShader.compute(computePass);

        for (var i = 0; i < this.mConfig.PRESSURE_JACOBI_ITERATIONS; ++i) {
            this.mJacobiComputeShader.compute(computePass);
            this.mCopyComputeShader.compute(computePass);
        }

        this.mSubtractComputeShader.compute(computePass);
        this.mTransferToParticlesComputeShader.compute(computePass);
        this.mAdvectComputeShader.compute(computePass);
        this.mClearStateComputeShader.compute(computePass);
        // this.mComputeMatrixComputeShader.compute(computePass);

        computePass.end();
    }

    protected initPipeline(config: FluidSimulatorConfig) {

        this.mTransferToGridComputeShader = new ComputeShader(transferToGrid.cs);
        this.mTransferToGridComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mTransferToGridComputeShader.setStorageBuffer(`position`, this.mPositionBuffer);
        this.mTransferToGridComputeShader.setStorageBuffer(`velocity`, this.mVelocityBuffer);
        this.mTransferToGridComputeShader.setStorageBuffer(`mark`, this.mMarkBuffer);
        this.mTransferToGridComputeShader.setStorageBuffer(`atomicweight`, this.mAtomicweightBuffer);
        this.mTransferToGridComputeShader.setStorageBuffer(`atomicvelocity`, this.mAtomicvelocityBuffer);
        this.mTransferToGridComputeShader.setStorageBuffer(`output`, this.mOutput0Buffer);
        this.mTransferToGridComputeShader.workerSizeX = this.mConfig.dispatchNUM;

        this.mNormalizegridComputeShader = new ComputeShader(normalizegrid.cs);
        this.mNormalizegridComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mNormalizegridComputeShader.setStorageBuffer(`weight`, this.mWeightBuffer);
        this.mNormalizegridComputeShader.setStorageBuffer(`gridvelocity`, this.mGridvelocityBuffer);
        this.mNormalizegridComputeShader.setStorageBuffer(`orivelocity`, this.mOrivelocityBuffer);
        this.mNormalizegridComputeShader.setStorageBuffer(`atomicweight`, this.mAtomicweightBuffer);
        this.mNormalizegridComputeShader.setStorageBuffer(`atomicvelocity`, this.mAtomicvelocityBuffer);
        this.mNormalizegridComputeShader.setStorageBuffer(`output`, this.mOutput2Buffer);
        this.mNormalizegridComputeShader.workerSizeX = this.mConfig.dispatchGRID;
    
        this.mAddforceComputeShader = new ComputeShader(addforce.cs);
        this.mAddforceComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mAddforceComputeShader.setStorageBuffer(`gridvelocity`, this.mGridvelocityBuffer);
        this.mAddforceComputeShader.setStorageBuffer(`output`, this.mOutput2Buffer);
        this.mAddforceComputeShader.workerSizeX = this.mConfig.dispatchGRID;

        this.mEnforceboundariesComputeShader = new ComputeShader(enforceboundaries.cs);
        this.mEnforceboundariesComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mEnforceboundariesComputeShader.setStorageBuffer(`gridvelocity`, this.mGridvelocityBuffer);
        this.mEnforceboundariesComputeShader.setStorageBuffer(`output`, this.mOutput2Buffer);
        this.mEnforceboundariesComputeShader.workerSizeX = this.mConfig.dispatchGRID;

        this.mDivergenceComputeShader = new ComputeShader(divergence.cs);
        this.mDivergenceComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mDivergenceComputeShader.setStorageBuffer(`gridvelocity`, this.mGridvelocityBuffer);
        this.mDivergenceComputeShader.setStorageBuffer(`divergence`, this.mDivergenceBuffer);
        this.mDivergenceComputeShader.setStorageBuffer(`weight`, this.mWeightBuffer);
        this.mDivergenceComputeShader.setStorageBuffer(`mark`, this.mMarkBuffer);
        this.mDivergenceComputeShader.setStorageBuffer(`output`, this.mOutput1Buffer);
        this.mDivergenceComputeShader.workerSizeX = this.mConfig.dispatchCELL;
        
        this.mJacobiComputeShader = new ComputeShader(jacobi.cs);
        this.mJacobiComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mJacobiComputeShader.setStorageBuffer(`divergence`, this.mDivergenceBuffer);
        this.mJacobiComputeShader.setStorageBuffer(`pressure`, this.mPressureBuffer);
        this.mJacobiComputeShader.setStorageBuffer(`temppressure`, this.mTemppressureBuffer);
        this.mJacobiComputeShader.setStorageBuffer(`mark`, this.mMarkBuffer);
        this.mJacobiComputeShader.setStorageBuffer(`output`, this.mOutput1Buffer);
        this.mJacobiComputeShader.workerSizeX = this.mConfig.dispatchCELL;
    
        this.mCopyComputeShader = new ComputeShader(copybuffer.cs);
        this.mCopyComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mCopyComputeShader.setStorageBuffer(`pressure`, this.mPressureBuffer);
        this.mCopyComputeShader.setStorageBuffer(`temppressure`, this.mTemppressureBuffer);
        this.mCopyComputeShader.setStorageBuffer(`output`, this.mOutput1Buffer);
        this.mCopyComputeShader.workerSizeX = this.mConfig.dispatchCELL;
        
        this.mSubtractComputeShader = new ComputeShader(subtract.cs);
        this.mSubtractComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mSubtractComputeShader.setStorageBuffer(`pressure`, this.mPressureBuffer);
        this.mSubtractComputeShader.setStorageBuffer(`gridvelocity`, this.mGridvelocityBuffer);
        this.mSubtractComputeShader.setStorageBuffer(`output`, this.mOutput2Buffer);
        this.mSubtractComputeShader.workerSizeX = this.mConfig.dispatchGRID;

        this.mTransferToParticlesComputeShader = new ComputeShader(transferToParticles.cs);
        this.mTransferToParticlesComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mTransferToParticlesComputeShader.setStorageBuffer(`position`, this.mPositionBuffer);
        this.mTransferToParticlesComputeShader.setStorageBuffer(`velocity`, this.mVelocityBuffer);
        this.mTransferToParticlesComputeShader.setStorageBuffer(`gridvelocity`, this.mGridvelocityBuffer);
        this.mTransferToParticlesComputeShader.setStorageBuffer(`orivelocity`, this.mOrivelocityBuffer);
        this.mTransferToParticlesComputeShader.setStorageBuffer(`color`, this.mColorBuffer);
        this.mTransferToParticlesComputeShader.setStorageBuffer(`output`, this.mOutput0Buffer);
        this.mTransferToParticlesComputeShader.workerSizeX = this.mConfig.dispatchNUM;
       
        this.mAdvectComputeShader = new ComputeShader(advect.cs);
        this.mAdvectComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mAdvectComputeShader.setStorageBuffer(`position`, this.mPositionBuffer);
        this.mAdvectComputeShader.setStorageBuffer(`velocity`, this.mVelocityBuffer);
        this.mAdvectComputeShader.setStorageBuffer(`gridvelocity`, this.mGridvelocityBuffer);
        this.mAdvectComputeShader.setStorageBuffer(`output`, this.mOutput0Buffer);
        this.mAdvectComputeShader.workerSizeX = this.mConfig.dispatchNUM;
        
        this.mClearStateComputeShader = new ComputeShader(clearState.cs);
        this.mClearStateComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mClearStateComputeShader.setStorageBuffer(`mark`, this.mMarkBuffer);
        this.mClearStateComputeShader.setStorageBuffer(`atomicweight`, this.mAtomicweightBuffer);
        this.mClearStateComputeShader.setStorageBuffer(`atomicvelocity`, this.mAtomicvelocityBuffer);
        this.mClearStateComputeShader.setStorageBuffer(`weight`, this.mWeightBuffer);
        this.mClearStateComputeShader.setStorageBuffer(`divergence`, this.mDivergenceBuffer);
        this.mClearStateComputeShader.setStorageBuffer(`pressure`, this.mPressureBuffer);
        this.mClearStateComputeShader.setStorageBuffer(`temppressure`, this.mTemppressureBuffer);
        this.mClearStateComputeShader.workerSizeX = this.mConfig.dispatchGRID;

    }
}

class common {
    public static cs: string = /* wgsl */ `
    fn add(a: f32, b: f32) -> f32 { return select(a, a + b, b != 0.); }
    fn sub(a: f32, b: f32) -> f32 { return select(a, a - b, b != 0.); }
    fn mul(a: f32, b: f32) -> f32 { return select(a, a * b, b != 1.); }
    fn div(a: f32, b: f32) -> f32 { return select(a, a / b, b != 1.); }
    
    fn fastTwoSum(a: f32, b: f32) -> vec2<f32> {
      let s = add(a, b);
      return vec2<f32>(s, sub(b, sub(s, a)));
    }
    
    fn twoSum(a: f32, b: f32) -> vec2<f32> {
      let s = add(a, b);
      let a1  = sub(s, b);
      return vec2<f32>(s, add(sub(a, a1), sub(b, sub(s, a1))));
    }
    
    fn twoProd(a: f32, b: f32) -> vec2<f32> {
      let ab = mul(a, b);
      return vec2<f32>(ab, fma(a, b, -ab));
    }
    
    fn add22(X: vec2<f32>, Y: vec2<f32>) -> vec2<f32> {
      let S = twoSum(X[0], Y[0]);
      let E = twoSum(X[1], Y[1]);
      let v = fastTwoSum(S[0], add(S[1], E[0]));
      return fastTwoSum(v[0], add(v[1], E[1]));
    }
    
    fn sub22(X: vec2<f32>, Y: vec2<f32>) -> vec2<f32> {
      return add22(X, -Y);
    }
    
    fn mul22(X: vec2<f32>, Y: vec2<f32>) -> vec2<f32> {
      let S = twoProd(X[0], Y[0]);
      let c = fma(X[1], Y[0], mul(X[0], Y[1]));
      return fastTwoSum(S[0], add(S[1], c));
    }
    
    fn div22(X: vec2<f32>, Y: vec2<f32>) -> vec2<f32> {
      let s = X[0] / Y[0];
      let T = twoProd(s, Y[0]);
      let e = ((((X[0] - T[0]) - T[1]) + X[1]) - s * Y[1]) / Y[0];
      return fastTwoSum(s, e);
    }
    
    fn _mod (x: f32, y: f32) -> f32{
        return x - floor(x / y) * y;
        // let x_double = vec2<f32>(x, 0.0);
        // let y_double = vec2<f32>(y, 0.0);
        // let result = sub22(x_double, mul22(floor(div22(x_double, y_double)), y_double));
        // return result[0];
    }
    
    fn gridtocell (index: u32, resolution: vec3<f32>) -> vec3<f32>{
        var indexfloat = f32(index) + f32(0.005);
        var cellindex = vec3<f32>(_mod(indexfloat, resolution.x), _mod(floor(indexfloat / resolution.x), resolution.y), 
                        floor(indexfloat / resolution.x / resolution.y)); 
        return cellindex;
    }
    
    fn celltogrid (index: vec3<f32>, resolution: vec3<f32>) -> u32{
        var clampindex = clamp(index, vec3<f32>(0.0), resolution - vec3<f32>(1.0));
        var gridindex = u32(clampindex.x + clampindex.y * resolution.x + clampindex.z * resolution.x * resolution.y);
        return gridindex;
    }
    
    fn interpvel (index: vec3<f32>, velocity1: vec3<f32>, velocity2: vec3<f32>, position: vec3<f32>) -> vec3<f32>{
        var newvelocityx: f32 = (index.x + 1.0 - position.x) * velocity1.x + (position.x - index.x) * velocity2.x;
        var newvelocityy: f32 = (index.y + 1.0 - position.y) * velocity1.y + (position.y - index.y) * velocity2.y;
        var newvelocityz: f32 = (index.z + 1.0 - position.z) * velocity1.z + (position.z - index.z) * velocity2.z;
    
        return vec3<f32>(newvelocityx, newvelocityy, newvelocityz);
    }
    `;
}

class addforce {
    public static cs: string = /* wgsl */ `
    ${common.cs}

    struct InputArgs {
        NUM: f32,
        GRIDNUM: f32,
        CELLNUM: f32,
        gridResolutionX: f32,
        gridResolutionY: f32,
        gridResolutionZ: f32,
        gridSizeX: f32,
        gridSizeY: f32,
        gridSizeZ: f32,
        timeStep: f32,
        flipness: f32,
        maxDensity: f32,
        mouseVelocityX: f32,
        mouseVelocityY: f32,
        mouseVelocityZ: f32,
        mouseOriginX: f32,
        mouseOriginY: f32,
        mouseOriginZ: f32,
        mouseDirectionX: f32,
        mouseDirectionY: f32,
        mouseDirectionZ: f32,
        rsv0: f32,
        rsv1: f32,
        rsv2: f32,
    };

    @group(0) @binding(0) var<storage, read> input: InputArgs;
    @group(0) @binding(1) var<storage, read_write> gridvelocity: array<vec4<f32>>;
    @group(0) @binding(2) var<storage, read_write> output: array<vec4<f32>>;
    
    fn kernel (position: vec3<f32>, radius: f32, direction: vec3<f32>, origin: vec3<f32>) -> f32{
        var distanceToMouseRay: f32 = length(cross(direction, position - origin));
        var normalizedDistance = max(0.0, distanceToMouseRay / radius);
        return smoothstep(1.0, 0.9, normalizedDistance);
    }
    
    // fn _mod (x: f32, y: f32) -> f32{
    //     return x - floor((x + 0.0) / y) * y;
    // }
    
    // fn gridtocell (index: u32, resolution: vec3<f32>) -> vec3<f32>{
    //     var indexfloat = f32(index) + f32(0.05);
    //     var cellindex = vec3<f32>(_mod(indexfloat, resolution.x), _mod(floor(indexfloat / resolution.x), resolution.y), 
    //                     floor(indexfloat / resolution.x / resolution.y)); 
    //     return cellindex;
    // }
    
    const size = u32(128);
    @compute @workgroup_size(size)
    fn CsMain(
        @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>,
        @builtin(num_workgroups) GroupSize: vec3<u32>
    ) {
        var index = GlobalInvocationID.x;
        if(index >= u32(input.GRIDNUM)){
            return;
        }
    
        var gridResolution = vec3<f32>(input.gridResolutionX, input.gridResolutionY, input.gridResolutionZ);
        var gridSize = vec3<f32>(input.gridSizeX, input.gridSizeY, input.gridSizeZ);
        var timeStep = input.timeStep;
        var mouseVelocity = vec3<f32>(input.mouseVelocityX, input.mouseVelocityY, input.mouseVelocityZ);
        var mouseRayOrigin = vec3<f32>(input.mouseOriginX, input.mouseOriginY, input.mouseOriginZ);
        var mouseRayDirection = vec3<f32>(input.mouseDirectionX, input.mouseDirectionY, input.mouseDirectionZ);
    
        var cellIndex = gridtocell(index, gridResolution + 1.0);  
        var debug = output[index];    
        // output[index][0] = f32(cellIndex.x);
        // output[index][1] = f32(cellIndex.y);
        // output[index][2] = f32(cellIndex.z);
        // output[index][3] = f32(index);
    
        var tempvelocity = vec3<f32>(gridvelocity[index][0], gridvelocity[index][1], gridvelocity[index][2]) 
                         + vec3<f32>(0.0, -40.0 * timeStep, 0.0); //add gravity
    
        var xPosition = vec3<f32>(cellIndex.x, cellIndex.y + 0.5, cellIndex.z + 0.5);
        var yPosition = vec3<f32>(cellIndex.x + 0.5, cellIndex.y, cellIndex.z + 0.5);
        var zPosition = vec3<f32>(cellIndex.x + 0.5, cellIndex.y + 0.5, cellIndex.z);
    
        var mouseRadius: f32 = 5.0;
        var kernelValues = vec3<f32>(kernel(xPosition,mouseRadius,mouseRayDirection,mouseRayOrigin), kernel(yPosition,mouseRadius,mouseRayDirection,mouseRayOrigin), kernel(zPosition,mouseRadius,mouseRayDirection,mouseRayOrigin));
    
        tempvelocity.x += mouseVelocity.x * kernelValues.x * (100.2 * timeStep) ;//* smoothstep(0.0, 1.0 / 200.0, timeStep);
        tempvelocity.y += mouseVelocity.y * kernelValues.y * (100.2 * timeStep) ;//* smoothstep(0.0, 1.0 / 200.0, timeStep);
        tempvelocity.z += mouseVelocity.z * kernelValues.z * (100.2 * timeStep) ;//* smoothstep(0.0, 1.0 / 200.0, timeStep);
    
        gridvelocity[index][0] = tempvelocity.x;
        gridvelocity[index][1] = tempvelocity.y;
        gridvelocity[index][2] = tempvelocity.z;
    
        // output[index][0] = f32(mouseVelocity.x);
        // output[index][1] = f32(mouseVelocity.y);
        // output[index][2] = f32(mouseVelocity.z);
        // output[index][3] = f32(index);
    }
    `;
}

class advect {
    public static cs: string = /* wgsl */ `
    ${common.cs}

    struct InputArgs {
        NUM: f32,
        GRIDNUM: f32,
        CELLNUM: f32,
        gridResolutionX: f32,
        gridResolutionY: f32,
        gridResolutionZ: f32,
        gridSizeX: f32,
        gridSizeY: f32,
        gridSizeZ: f32,
        timeStep: f32,
        flipness: f32,
        maxDensity: f32,
        mouseVelocityX: f32,
        mouseVelocityY: f32,
        mouseVelocityZ: f32,
        mouseOriginX: f32,
        mouseOriginY: f32,
        mouseOriginZ: f32,
        mouseDirectionX: f32,
        mouseDirectionY: f32,
        mouseDirectionZ: f32,
        rsv0: f32,
        rsv1: f32,
        rsv2: f32,
    };

    @group(0) @binding(0) var<storage, read> input: InputArgs;
    @group(0) @binding(1) var<storage, read_write> position: array<vec4<f32>>;
    @group(0) @binding(2) var<storage, read_write> velocity: array<vec4<f32>>;
    @group(0) @binding(3) var<storage, read_write> gridvelocity: array<vec4<f32>>;
    @group(1) @binding(0) var<storage, read_write> output: array<vec4<f32>>;
    
    // fn celltogrid (index: vec3<f32>, resolution: vec3<f32>) -> u32{
    //     var clampindex = clamp(index, vec3<f32>(0.0), resolution - vec3<f32>(1.0));
    //     var gridindex = u32(clampindex.x + clampindex.y * resolution.x + clampindex.z * resolution.x * resolution.y);
    //     return gridindex;//clamp(gridindex, u32(0), u32(resolution.x * resolution.y * resolution.z - 1.0));
    // }
    
    // fn interpvel (index: vec3<f32>, velocity1: vec3<f32>, velocity2: vec3<f32>, position: vec3<f32>) -> vec3<f32>{
    //     var newvelocityx: f32 = (index.x + 1.0 - position.x) * velocity1.x + (position.x - index.x) * velocity2.x;
    //     var newvelocityy: f32 = (index.y + 1.0 - position.y) * velocity1.y + (position.y - index.y) * velocity2.y;
    //     var newvelocityz: f32 = (index.z + 1.0 - position.z) * velocity1.z + (position.z - index.z) * velocity2.z;
    
    //     return vec3<f32>(newvelocityx, newvelocityy, newvelocityz);
    // }
    
    const size = u32(128);
    @compute @workgroup_size(size)
    fn CsMain(
        @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>,
        @builtin(num_workgroups) GroupSize: vec3<u32>
    ) {
        var index = GlobalInvocationID.x;
        if(index >= u32(input.NUM)){
            return;
        }
    
        var gridResolution = vec3<f32>(input.gridResolutionX, input.gridResolutionY, input.gridResolutionZ);
        var gridSize = vec3<f32>(input.gridSizeX, input.gridSizeY, input.gridSizeZ);
        var timeStep = input.timeStep;
        var v = velocity[index];
    
        var particlePosition = vec3<f32>(position[index][0], position[index][1], position[index][2]) / gridSize * gridResolution;
        var cellIndex = vec3<f32>(floor(particlePosition));
        var debug = output[index];
        // output[index][0] = f32(cellIndex.x);
        // output[index][1] = f32(cellIndex.y);
        // output[index][2] = f32(cellIndex.z);
        // output[index][3] = f32(index);
    
        var leftXIndex = celltogrid(cellIndex, gridResolution + 1.0);
        var leftX = gridvelocity[leftXIndex][0];
        var rightXIndex = celltogrid(cellIndex + vec3<f32>(1.0, 0.0, 0.0), gridResolution + 1.0);
        var rightX = gridvelocity[rightXIndex][0];
    
        var bottomYIndex = celltogrid(cellIndex, gridResolution + 1.0);
        var bottomY = gridvelocity[bottomYIndex][1];
        var topYIndex = celltogrid(cellIndex + vec3<f32>(0.0, 1.0, 0.0), gridResolution + 1.0);
        var topY = gridvelocity[topYIndex][1];
    
        var backZIndex = celltogrid(cellIndex, gridResolution + 1.0);
        var backZ = gridvelocity[backZIndex][2];
        var frontZIndex = celltogrid(cellIndex + vec3<f32>(0.0, 0.0, 1.0), gridResolution + 1.0);
        var frontZ = gridvelocity[frontZIndex][2];   
    
        var velocity1 = vec3<f32>(leftX, bottomY, backZ);
        var velocity2 = vec3<f32>(rightX, topY, frontZ);
    
        // var k1 = vec3<f32>(velocity[index][0], velocity[index][1], velocity[index][2]);
        var k1 = interpvel(cellIndex, velocity1, velocity2, particlePosition);
        var k2 = interpvel(cellIndex, velocity1, velocity2, particlePosition + 0.5 * k1 * timeStep);
        var k3 = interpvel(cellIndex, velocity1, velocity2, particlePosition + 0.75 * k2 * timeStep);
        k1 = 2.0 / 9.0 * k1 * timeStep;
        k2 = 3.0 / 9.0 * k2 * timeStep;
        k3 = 4.0 / 9.0 * k3 * timeStep;
        var newPosition = particlePosition + k1 + k2 + k3; 
    
        // var k1 = interpvel(cellIndex, velocity1, velocity2, particlePosition);
        // var k2 = interpvel(cellIndex, velocity1, velocity2, particlePosition + 0.5 * k1 * timeStep);
        // var newPosition = particlePosition + 0.05 * k1 * timeStep + k2 * timeStep; 
    
        newPosition = clamp(newPosition * gridSize / gridResolution, vec3<f32>(0.01), vec3<f32>(gridSize - 0.01));
        position[index][0] = newPosition.x;
        position[index][1] = newPosition.y;
        position[index][2] = newPosition.z;
    } 
    `;
}

class clearState {
    public static cs: string = /* wgsl */ `
    ${common.cs}

    struct InputArgs {
        NUM: f32,
        GRIDNUM: f32,
        CELLNUM: f32,
        gridResolutionX: f32,
        gridResolutionY: f32,
        gridResolutionZ: f32,
        gridSizeX: f32,
        gridSizeY: f32,
        gridSizeZ: f32,
        timeStep: f32,
        flipness: f32,
        maxDensity: f32,
        mouseVelocityX: f32,
        mouseVelocityY: f32,
        mouseVelocityZ: f32,
        mouseOriginX: f32,
        mouseOriginY: f32,
        mouseOriginZ: f32,
        mouseDirectionX: f32,
        mouseDirectionY: f32,
        mouseDirectionZ: f32,
        rsv0: f32,
        rsv1: f32,
        rsv2: f32,
    };

    @group(0) @binding(0) var<storage, read> input: InputArgs;
    @group(0) @binding(1) var<storage, read_write> mark: array<f32>;
    @group(0) @binding(2) var<storage, read_write> atomicweight: array<atomic<i32>>;
    @group(0) @binding(3) var<storage, read_write> atomicvelocity: array<atomic<i32>>;
    @group(1) @binding(0) var<storage, read_write> weight: array<vec4<f32>>;
    @group(1) @binding(1) var<storage, read_write> divergence: array<f32>;
    @group(1) @binding(2) var<storage, read_write> pressure: array<f32>;
    @group(1) @binding(3) var<storage, read_write> temppressure: array<f32>;
    
    // fn _mod (x: f32, y: f32) -> f32{
    //     return x - floor((x + 0.0) / y) * y;
    // }
    
    // fn gridtocell (index: u32, resolution: vec3<f32>) -> vec3<f32>{
    //     var indexfloat = f32(index) + f32(0.05);
    //     var cellindex = vec3<f32>(_mod(indexfloat, resolution.x), _mod(floor(indexfloat / resolution.x), resolution.y), 
    //                     floor(indexfloat / resolution.x / resolution.y)); 
    //     return cellindex;
    // }
    
    // fn celltogrid (index: vec3<f32>, resolution: vec3<f32>) -> u32{
    //     var clampindex = clamp(index, vec3<f32>(0.0), resolution - vec3<f32>(1.0));
    //     var gridindex = u32(clampindex.x + clampindex.y * resolution.x + clampindex.z * resolution.x * resolution.y);
    //     return gridindex;//clamp(gridindex, u32(0), u32(resolution.x * resolution.y * resolution.z - 1.0));
    // }
    
    const size = u32(128);
    @compute @workgroup_size(size)
    fn CsMain(
        @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>,
        @builtin(num_workgroups) GroupSize: vec3<u32>
    ) {
        var index = GlobalInvocationID.x;
        if(index >= u32(input.GRIDNUM)){
            return;
        }
    
        atomicStore(&atomicweight[index * u32(4) + u32(0)], i32(0));
        atomicStore(&atomicweight[index * u32(4) + u32(1)], i32(0));
        atomicStore(&atomicweight[index * u32(4) + u32(2)], i32(0));
        atomicStore(&atomicweight[index * u32(4) + u32(3)], i32(0));
    
        atomicStore(&atomicvelocity[index * u32(4) + u32(0)], i32(0));
        atomicStore(&atomicvelocity[index * u32(4) + u32(1)], i32(0));
        atomicStore(&atomicvelocity[index * u32(4) + u32(2)], i32(0));
    
        weight[index][0] = 0.0;
        weight[index][1] = 0.0;
        weight[index][2] = 0.0;
        weight[index][3] = 0.0;
    
        var gridResolution = vec3<f32>(input.gridResolutionX, input.gridResolutionY, input.gridResolutionZ);
        var cellIndex = gridtocell(index, gridResolution + 1.0);  
        var cellTotIndex = celltogrid(cellIndex, gridResolution);
    
        mark[cellTotIndex] = 0.0;
        divergence[cellTotIndex] = 0.0;
        pressure[cellTotIndex] = 0.0;
        temppressure[cellTotIndex] = 0.0;
    }
    `;
}

class copybuffer {
    public static cs: string = /* wgsl */ `
    struct InputArgs {
        NUM: f32,
        GRIDNUM: f32,
        CELLNUM: f32,
        gridResolutionX: f32,
        gridResolutionY: f32,
        gridResolutionZ: f32,
        gridSizeX: f32,
        gridSizeY: f32,
        gridSizeZ: f32,
        timeStep: f32,
        flipness: f32,
        maxDensity: f32,
        mouseVelocityX: f32,
        mouseVelocityY: f32,
        mouseVelocityZ: f32,
        mouseOriginX: f32,
        mouseOriginY: f32,
        mouseOriginZ: f32,
        mouseDirectionX: f32,
        mouseDirectionY: f32,
        mouseDirectionZ: f32,
        rsv0: f32,
        rsv1: f32,
        rsv2: f32,
    };

    @group(0) @binding(0) var<storage, read> input: InputArgs;
    @group(0) @binding(1) var<storage, read_write> pressure: array<f32>;
    @group(0) @binding(2) var<storage, read_write> temppressure: array<f32>;
    @group(0) @binding(3) var<storage, read_write> output: array<vec4<f32>>;
    
    const size = u32(128);
    @compute @workgroup_size(size)
    fn CsMain(
        @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>,
        @builtin(num_workgroups) GroupSize: vec3<u32>
    ) {
        var index = GlobalInvocationID.x;
        if(index >= u32(input.CELLNUM)){
            return;
        }
        var debug = output[index];
        // output[index][0] = f32(index);
        // output[index][1] = f32(index);
        // output[index][2] = f32(index);
        // output[index][3] = f32(index);
    
        pressure[index] = temppressure[index];
    }
    `;
}

class divergence {
    public static cs: string = /* wgsl */ `
    ${common.cs}

    struct InputArgs {
        NUM: f32,
        GRIDNUM: f32,
        CELLNUM: f32,
        gridResolutionX: f32,
        gridResolutionY: f32,
        gridResolutionZ: f32,
        gridSizeX: f32,
        gridSizeY: f32,
        gridSizeZ: f32,
        timeStep: f32,
        flipness: f32,
        maxDensity: f32,
        mouseVelocityX: f32,
        mouseVelocityY: f32,
        mouseVelocityZ: f32,
        mouseOriginX: f32,
        mouseOriginY: f32,
        mouseOriginZ: f32,
        mouseDirectionX: f32,
        mouseDirectionY: f32,
        mouseDirectionZ: f32,
        rsv0: f32,
        rsv1: f32,
        rsv2: f32,
    };

    @group(0) @binding(0) var<storage, read> input: InputArgs;
    @group(0) @binding(1) var<storage, read_write> gridvelocity: array<vec4<f32>>;
    @group(0) @binding(2) var<storage, read_write> divergence: array<f32>;
    @group(0) @binding(3) var<storage, read_write> weight: array<vec4<f32>>;
    @group(1) @binding(0) var<storage, read> mark: array<f32>;
    @group(1) @binding(1) var<storage, read_write> output: array<vec4<f32>>;
    
    // fn celltogrid (index: vec3<f32>, resolution: vec3<f32>) -> u32{
    //     var clampindex = clamp(index, vec3<f32>(0.0), resolution - vec3<f32>(1.0));
    //     var gridindex = u32(clampindex.x + clampindex.y * resolution.x + clampindex.z * resolution.x * resolution.y);
    //     return gridindex;//clamp(gridindex, u32(0), u32(resolution.x * resolution.y * resolution.z - 1.0));
    // }
    
    // fn _mod (x: f32, y: f32) -> f32{
    //     return x - floor((x + 0.0) / y) * y;
    // }
    
    // fn gridtocell (index: u32, resolution: vec3<f32>) -> vec3<f32>{
    //     var indexfloat = f32(index) + f32(0.05);
    //     var cellindex = vec3<f32>(_mod(indexfloat, resolution.x), _mod(floor(indexfloat / resolution.x), resolution.y), 
    //                     floor(indexfloat / resolution.x / resolution.y)); 
    //     return cellindex;
    // }
    
    const size = u32(128);
    @compute @workgroup_size(size)
    fn CsMain(
        @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>,
        @builtin(num_workgroups) GroupSize: vec3<u32>
    ) {
        var index = GlobalInvocationID.x;
        if(index >= u32(input.CELLNUM)){
            return;
        }
    
        var gridResolution = vec3<f32>(input.gridResolutionX, input.gridResolutionY, input.gridResolutionZ);
        var maxDensity = input.maxDensity;
    
        var cellIndex = gridtocell(index, gridResolution);  
        var debug = output[index];    
        // output[index][0] = f32(cellIndex.x);
        // output[index][1] = f32(cellIndex.y);
        // output[index][2] = f32(cellIndex.z);
        // output[index][3] = f32(densityIndex);
    
        if(mark[index] == 0.0){
            return;
        }
    
        var leftXIndex = celltogrid(cellIndex, gridResolution + 1.0);
        var leftX = gridvelocity[leftXIndex][0];
        var rightXIndex = celltogrid(cellIndex + vec3<f32>(1.0, 0.0, 0.0), gridResolution + 1.0);
        var rightX = gridvelocity[rightXIndex][0];
    
        var bottomYIndex = celltogrid(cellIndex, gridResolution + 1.0);
        var bottomY = gridvelocity[bottomYIndex][1];
        var topYIndex = celltogrid(cellIndex + vec3<f32>(0.0, 1.0, 0.0), gridResolution + 1.0);
        var topY = gridvelocity[topYIndex][1];
    
        var backZIndex = celltogrid(cellIndex, gridResolution + 1.0);
        var backZ = gridvelocity[backZIndex][2];
        var frontZIndex = celltogrid(cellIndex + vec3<f32>(0.0, 0.0, 1.0), gridResolution + 1.0);
        var frontZ = gridvelocity[frontZIndex][2];    
    
        divergence[index] = ((rightX - leftX) + (topY - bottomY) + (frontZ - backZ)) / 6.0;
    
        var densityIndex = celltogrid(cellIndex, gridResolution + 1.0);
        var density = weight[densityIndex][3];
    
        divergence[index] -= max((density - maxDensity) * 1.0, 0.0);
        // output[index][0] = f32(cellIndex.x);
        // output[index][1] = f32(cellIndex.y);
        // output[index][2] = f32(cellIndex.z);
        // output[index][3] = f32(index);
    }
    `;
}

class enforceboundaries {
    public static cs: string = /* wgsl */ `
    ${common.cs}

    struct InputArgs {
        NUM: f32,
        GRIDNUM: f32,
        CELLNUM: f32,
        gridResolutionX: f32,
        gridResolutionY: f32,
        gridResolutionZ: f32,
        gridSizeX: f32,
        gridSizeY: f32,
        gridSizeZ: f32,
        timeStep: f32,
        flipness: f32,
        maxDensity: f32,
        mouseVelocityX: f32,
        mouseVelocityY: f32,
        mouseVelocityZ: f32,
        mouseOriginX: f32,
        mouseOriginY: f32,
        mouseOriginZ: f32,
        mouseDirectionX: f32,
        mouseDirectionY: f32,
        mouseDirectionZ: f32,
        rsv0: f32,
        rsv1: f32,
        rsv2: f32,
    };

    @group(0) @binding(0) var<storage, read_write> input: InputArgs;
    @group(0) @binding(1) var<storage, read_write> gridvelocity: array<vec4<f32>>;
    @group(0) @binding(2) var<storage, read_write> output: array<vec4<f32>>;
    
    // fn _mod (x: f32, y: f32) -> f32{
    //     return x - floor((x + 0.05) / y) * y;
    // }
    
    // fn gridtocell (index: u32, resolution: vec3<f32>) -> vec3<f32>{
    //     var indexfloat = f32(index) + f32(0.05);
    //     var cellindex = vec3<f32>(_mod(indexfloat, resolution.x), _mod(floor(indexfloat / resolution.x), resolution.y), 
    //                     floor(indexfloat / resolution.x / resolution.y)); 
    //     return cellindex;
    // }
    
    const size = u32(128);
    @compute @workgroup_size(size)
    fn CsMain(
        @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>,
        @builtin(num_workgroups) GroupSize: vec3<u32>
    ) {
        var index = GlobalInvocationID.x;
        if(index >= u32(input.GRIDNUM)){
            return;
        }
    
        var gridResolution = vec3<f32>(input.gridResolutionX, input.gridResolutionY, input.gridResolutionZ);
        var cellIndex = gridtocell(index, gridResolution + 1.0);  
        var debug = output[index];
        // output[index][0] = f32(cellIndex.x);
        // output[index][1] = f32(cellIndex.y);
        // output[index][2] = f32(cellIndex.z);
        // output[index][3] = f32(index);
    
        if(cellIndex.x < 0.5){
            gridvelocity[index][0] = 0.0;
        }
        if(cellIndex.x > gridResolution.x - 0.5){
            gridvelocity[index][0] = 0.0;
        }    
        if(cellIndex.y < 0.5){
            gridvelocity[index][1] = 0.0;
        }
        if(cellIndex.y > gridResolution.y - 0.5){
            gridvelocity[index][1] = min(gridvelocity[index][1], 0.0);
        }
        if(cellIndex.z < 0.5){
            gridvelocity[index][2] = 0.0;
        }
        if(cellIndex.z > gridResolution.z - 0.5){
            gridvelocity[index][2] = 0.0;
        }
    }
    `;
}

class jacobi {
    public static cs: string = /* wgsl */ `
    ${common.cs}

    struct InputArgs {
        NUM: f32,
        GRIDNUM: f32,
        CELLNUM: f32,
        gridResolutionX: f32,
        gridResolutionY: f32,
        gridResolutionZ: f32,
        gridSizeX: f32,
        gridSizeY: f32,
        gridSizeZ: f32,
        timeStep: f32,
        flipness: f32,
        maxDensity: f32,
        mouseVelocityX: f32,
        mouseVelocityY: f32,
        mouseVelocityZ: f32,
        mouseOriginX: f32,
        mouseOriginY: f32,
        mouseOriginZ: f32,
        mouseDirectionX: f32,
        mouseDirectionY: f32,
        mouseDirectionZ: f32,
        rsv0: f32,
        rsv1: f32,
        rsv2: f32,
    };

    @group(0) @binding(0) var<storage, read> input: InputArgs;
    @group(0) @binding(1) var<storage, read_write> divergence: array<f32>;
    @group(0) @binding(2) var<storage, read_write> pressure: array<f32>;
    @group(0) @binding(3) var<storage, read_write> temppressure: array<f32>;
    @group(1) @binding(0) var<storage, read> mark: array<f32>;
    @group(1) @binding(1) var<storage, read_write> output: array<vec4<f32>>;
    
    // fn celltogrid (index: vec3<f32>, resolution: vec3<f32>) -> u32{
    //     var clampindex = clamp(index, vec3<f32>(0.0), resolution - vec3<f32>(1.0));
    //     var gridindex = u32(clampindex.x + clampindex.y * resolution.x + clampindex.z * resolution.x * resolution.y);
    //     return gridindex;//clamp(gridindex, u32(0), u32(resolution.x * resolution.y * resolution.z - 1.0));
    // }
    
    // fn _mod (x: f32, y: f32) -> f32{
    //     return x - floor((x + 0.0) / y) * y;
    // }
    
    // fn gridtocell (index: u32, resolution: vec3<f32>) -> vec3<f32>{
    //     var indexfloat = f32(index) + f32(0.05);
    //     var cellindex = vec3<f32>(_mod(indexfloat, resolution.x), _mod(floor(indexfloat / resolution.x), resolution.y), 
    //                     floor(indexfloat / resolution.x / resolution.y)); 
    //     return cellindex;
    // }
    
    const size = u32(128);
    @compute @workgroup_size(size)
    fn CsMain(
        @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>,
        @builtin(num_workgroups) GroupSize: vec3<u32>
    ) {
        var index = GlobalInvocationID.x;
        if(index >= u32(input.CELLNUM)){
            return;
        }
    
        var gridResolution = vec3<f32>(input.gridResolutionX, input.gridResolutionY, input.gridResolutionZ);
        var cellIndex = gridtocell(index, gridResolution);
        var debug = output[index];
        // output[index][0] = f32(cellIndex.x);
        // output[index][1] = f32(cellIndex.y);
        // output[index][2] = f32(cellIndex.z);
        // output[index][3] = f32(index);
    
        if(mark[index] == 0.0){
            return;
        }
    
        var leftXIndex = celltogrid(cellIndex + vec3<f32>(-1.0, 0.0, 0.0), gridResolution);
        var leftX = pressure[leftXIndex];
        var rightXIndex = celltogrid(cellIndex + vec3<f32>(1.0, 0.0, 0.0), gridResolution);
        var rightX = pressure[rightXIndex];  
    
        var bottomYIndex = celltogrid(cellIndex + vec3<f32>(0.0, -1.0, 0.0), gridResolution);
        var bottomY = pressure[bottomYIndex];
        var topYIndex = celltogrid(cellIndex + vec3<f32>(0.0, 1.0, 0.0), gridResolution);
        var topY = pressure[topYIndex];
    
        var backZIndex = celltogrid(cellIndex + vec3<f32>(0.0, 0.0, -1.0), gridResolution);
        var backZ = pressure[backZIndex];
        var frontZIndex = celltogrid(cellIndex + vec3<f32>(0.0, 0.0, 1.0), gridResolution);
        var frontZ = pressure[frontZIndex];   
    
        temppressure[index] = f32(rightX + leftX + topY + bottomY + frontZ + backZ - divergence[index]) / 6.0;   
    }
    `;
}

class normalizegrid {
    public static cs: string = /* wgsl */ `
    ${common.cs}

    struct InputArgs {
        NUM: f32,
        GRIDNUM: f32,
        CELLNUM: f32,
        gridResolutionX: f32,
        gridResolutionY: f32,
        gridResolutionZ: f32,
        gridSizeX: f32,
        gridSizeY: f32,
        gridSizeZ: f32,
        timeStep: f32,
        flipness: f32,
        maxDensity: f32,
        mouseVelocityX: f32,
        mouseVelocityY: f32,
        mouseVelocityZ: f32,
        mouseOriginX: f32,
        mouseOriginY: f32,
        mouseOriginZ: f32,
        mouseDirectionX: f32,
        mouseDirectionY: f32,
        mouseDirectionZ: f32,
        rsv0: f32,
        rsv1: f32,
        rsv2: f32,
    };

    @group(0) @binding(0) var<storage, read> input: InputArgs;
    @group(0) @binding(1) var<storage, read_write> weight: array<vec4<f32>>;
    @group(0) @binding(2) var<storage, read_write> gridvelocity: array<vec4<f32>>;
    @group(0) @binding(3) var<storage, read_write> orivelocity: array<vec4<f32>>;
    @group(1) @binding(0) var<storage, read_write> atomicweight: array<atomic<i32>>;
    @group(1) @binding(1) var<storage, read_write> atomicvelocity: array<atomic<i32>>;
    @group(1) @binding(2) var<storage, read_write> output: array<vec4<f32>>;
    
    // fn _mod (x: f32, y: f32) -> f32{
    //     return x - floor((x + 0.0) / y) * y;
    // }
    
    // fn gridtocell (index: u32, resolution: vec3<f32>) -> vec3<f32>{
    //     var indexfloat = f32(index);// + f32(0.05);
    //     var cellindex = vec3<f32>(_mod(indexfloat, resolution.x), _mod(floor(indexfloat / resolution.x), resolution.y), 
    //                     floor(indexfloat / resolution.x / resolution.y)); 
    //     return cellindex;
    // }
    
    const size = u32(128);
    @compute @workgroup_size(size)
    fn CsMain(
        @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>,
        @builtin(num_workgroups) GroupSize: vec3<u32>
    ) {
        var index = GlobalInvocationID.x;
        if(index >= u32(input.GRIDNUM)){
            return;
        }
    
        weight[index][0] = f32(atomicLoad(&atomicweight[index * u32(4) + u32(0)])) / 1000.0;
        weight[index][1] = f32(atomicLoad(&atomicweight[index * u32(4) + u32(1)])) / 1000.0;
        weight[index][2] = f32(atomicLoad(&atomicweight[index * u32(4) + u32(2)])) / 1000.0;
        weight[index][3] = f32(atomicLoad(&atomicweight[index * u32(4) + u32(3)])) / 1000.0;
    
        gridvelocity[index][0] = 0.0;
        if(weight[index][0] > 0.0){
            gridvelocity[index][0] = f32(atomicLoad(&atomicvelocity[index * u32(4) + u32(0)])) / 1000.0 / weight[index][0];
        }
        gridvelocity[index][1] = 0.0;
        if(weight[index][1] > 0.0){
            gridvelocity[index][1] = f32(atomicLoad(&atomicvelocity[index * u32(4) + u32(1)])) / 1000.0 / weight[index][1];
        }
        gridvelocity[index][2] = 0.0;
        if(weight[index][2] > 0.0){
            gridvelocity[index][2] = f32(atomicLoad(&atomicvelocity[index * u32(4) + u32(2)])) / 1000.0 / weight[index][2];
        }
    
        var gridResolution = vec3<f32>(input.gridResolutionX, input.gridResolutionY, input.gridResolutionZ);
        var cellIndex = gridtocell(index, gridResolution + 1.0); 
        // var a = output[0];
        // output[index][0] = f32(index);
        // output[index][1] = (gridResolution + 1.0).x;
        // output[index][2] = floor((f32(index)+f32(0.00001)) / (gridResolution + 1.0).x);
        // // output[index][3] = floor(f32(index) / (gridResolution + 1.0).x) * (gridResolution + 1.0).x;
        // output[index][3] = f32(index) - floor(f32(index) / (gridResolution + 1.0).x) * (gridResolution + 1.0).x;
        var debug = output[index];
        // output[index][0] = f32(cellIndex.x);
        // output[index][1] = f32(cellIndex.y);
        // output[index][2] = f32(cellIndex.z);
        // output[index][3] = f32(index);
    
        if(cellIndex.x > gridResolution.x - 0.5){
            gridvelocity[index][1] = 0.0;
            gridvelocity[index][2] = 0.0;
            weight[index][1] = 0.0;
            weight[index][2] = 0.0;
            weight[index][3] = 0.0;
        }
        if(cellIndex.y > gridResolution.y - 0.5){
            gridvelocity[index][0] = 0.0;
            gridvelocity[index][2] = 0.0;
            weight[index][0] = 0.0;
            weight[index][2] = 0.0;
            weight[index][3] = 0.0;
        }
        if(cellIndex.z > gridResolution.z - 0.5){
            gridvelocity[index][0] = 0.0;
            gridvelocity[index][1] = 0.0;
            weight[index][0] = 0.0;
            weight[index][1] = 0.0;
            weight[index][3] = 0.0;
        }
    
        orivelocity[index][0] = gridvelocity[index][0];
        orivelocity[index][1] = gridvelocity[index][1];
        orivelocity[index][2] = gridvelocity[index][2];
    }
    `;
}

class subtract {
    public static cs: string = /* wgsl */ `
    ${common.cs}

    struct InputArgs {
        NUM: f32,
        GRIDNUM: f32,
        CELLNUM: f32,
        gridResolutionX: f32,
        gridResolutionY: f32,
        gridResolutionZ: f32,
        gridSizeX: f32,
        gridSizeY: f32,
        gridSizeZ: f32,
        timeStep: f32,
        flipness: f32,
        maxDensity: f32,
        mouseVelocityX: f32,
        mouseVelocityY: f32,
        mouseVelocityZ: f32,
        mouseOriginX: f32,
        mouseOriginY: f32,
        mouseOriginZ: f32,
        mouseDirectionX: f32,
        mouseDirectionY: f32,
        mouseDirectionZ: f32,
        rsv0: f32,
        rsv1: f32,
        rsv2: f32,
    };

    @group(0) @binding(0) var<storage, read> input: InputArgs;
    @group(0) @binding(1) var<storage, read_write> pressure: array<f32>;
    @group(0) @binding(2) var<storage, read_write> gridvelocity: array<vec4<f32>>;
    @group(0) @binding(3) var<storage, read_write> output: array<vec4<f32>>;
    
    // fn celltogrid (index: vec3<f32>, resolution: vec3<f32>) -> u32{
    //     var clampindex = clamp(index, vec3<f32>(0.0), resolution - vec3<f32>(1.0));
    //     var gridindex = u32(clampindex.x + clampindex.y * resolution.x + clampindex.z * resolution.x * resolution.y);
    //     return gridindex;//clamp(gridindex, u32(0), u32(resolution.x * resolution.y * resolution.z - 1.0));
    // }
    
    // fn _mod (x: f32, y: f32) -> f32{
    //     return x - floor((x + 0.0) / y) * y;
    // }
    
    // fn gridtocell (index: u32, resolution: vec3<f32>) -> vec3<f32>{
    //     var indexfloat = f32(index) + f32(0.05);
    //     var cellindex = vec3<f32>(_mod(indexfloat, resolution.x), _mod(floor(indexfloat / resolution.x), resolution.y), 
    //                     floor(indexfloat / resolution.x / resolution.y)); 
    //     return cellindex;
    // }
    
    const size = u32(128);
    @compute @workgroup_size(size)
    fn CsMain(
        @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>,
        @builtin(num_workgroups) GroupSize: vec3<u32>
    ) {
        var index = GlobalInvocationID.x;
        if(index >= u32(input.GRIDNUM)){
            return;
        }
        
        var gridResolution = vec3<f32>(input.gridResolutionX, input.gridResolutionY, input.gridResolutionZ);
        var cellIndex = gridtocell(index, gridResolution + 1.0);
        var debug = output[index];
        // output[index][0] = f32(cellIndex.x);
        // output[index][1] = f32(cellIndex.y);
        // output[index][2] = f32(cellIndex.z);
        // output[index][3] = f32(index);
    
        var leftXIndex = celltogrid(cellIndex + vec3<f32>(-1.0, 0.0, 0.0), gridResolution);
        var leftX = pressure[leftXIndex];
        var rightXIndex = celltogrid(cellIndex + vec3<f32>(0.0, 0.0, 0.0), gridResolution);
        var rightX = pressure[rightXIndex];  
    
        var bottomYIndex = celltogrid(cellIndex + vec3<f32>(0.0, -1.0, 0.0), gridResolution);
        var bottomY = pressure[bottomYIndex];
        var topYIndex = celltogrid(cellIndex + vec3<f32>(0.0, 0.0, 0.0), gridResolution);
        var topY = pressure[topYIndex];
    
        var backZIndex = celltogrid(cellIndex + vec3<f32>(0.0, 0.0, -1.0), gridResolution);
        var backZ = pressure[backZIndex];
        var frontZIndex = celltogrid(cellIndex + vec3<f32>(0.0, 0.0, 0.0), gridResolution);
        var frontZ = pressure[frontZIndex];    
    
        var gradient = vec3<f32>(rightX - leftX, topY - bottomY, frontZ - backZ) / 1.0;
        var tempvelocity = vec3<f32>(gridvelocity[index][0], gridvelocity[index][1], gridvelocity[index][2]) - gradient;
    
        gridvelocity[index][0] = tempvelocity.x;
        gridvelocity[index][1] = tempvelocity.y;
        gridvelocity[index][2] = tempvelocity.z;
    
        // output[index][0] = f32(gradient.x);
        // output[index][1] = f32(gradient.y);
        // output[index][2] = f32(gradient.z);
        // output[index][3] = f32(index);
    }
    `;
}

class transferToGrid {
    public static cs: string = /* wgsl */ `
    ${common.cs}

    struct InputArgs {
        NUM: f32,
        GRIDNUM: f32,
        CELLNUM: f32,
        gridResolutionX: f32,
        gridResolutionY: f32,
        gridResolutionZ: f32,
        gridSizeX: f32,
        gridSizeY: f32,
        gridSizeZ: f32,
        timeStep: f32,
        flipness: f32,
        maxDensity: f32,
        mouseVelocityX: f32,
        mouseVelocityY: f32,
        mouseVelocityZ: f32,
        mouseOriginX: f32,
        mouseOriginY: f32,
        mouseOriginZ: f32,
        mouseDirectionX: f32,
        mouseDirectionY: f32,
        mouseDirectionZ: f32,
        rsv0: f32,
        rsv1: f32,
        rsv2: f32,
    };

    @group(0) @binding(0) var<storage, read> input: InputArgs;
    @group(0) @binding(1) var<storage, read_write> position: array<vec4<f32>>;
    @group(0) @binding(2) var<storage, read_write> velocity: array<vec4<f32>>;
    @group(0) @binding(3) var<storage, read_write> mark: array<f32>;
    @group(1) @binding(0) var<storage, read_write> atomicweight: array<atomic<i32>>;
    @group(1) @binding(1) var<storage, read_write> atomicvelocity: array<atomic<i32>>;
    @group(1) @binding(2) var<storage, read_write> output: array<vec4<f32>>;
    
    // fn celltogrid (index: vec3<f32>, resolution: vec3<f32>) -> u32{
    //     var clampindex = clamp(index, vec3<f32>(0.0), resolution - vec3<f32>(1.0));
    //     var gridindex = u32(clampindex.x + clampindex.y * resolution.x + clampindex.z * resolution.x * resolution.y);
    //     return gridindex;//clamp(gridindex, u32(0), u32(resolution.x * resolution.y * resolution.z - 1.0));
    // }
    
    fn h (r: f32)  -> f32 {
        if (r >= 0.0 && r <= 1.0) {
            return 1.0 - r;
        } else if (r >= -1.0 && r <= 0.0) {
            return 1.0 + r;
        } else {
            return 0.0;
        }
    }
    
    fn k (v: vec3<f32>) -> f32 {
        return h(v.x) * h(v.y) * h(v.z);
    }
    
    const size = u32(128);
    @compute @workgroup_size(size)
    fn CsMain(
        @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>,
        @builtin(num_workgroups) GroupSize: vec3<u32>
    ) {
        var index = GlobalInvocationID.x;
        if(index >= u32(input.NUM)){
            return;
        }
    
        var gridResolution = vec3<f32>(input.gridResolutionX, input.gridResolutionY, input.gridResolutionZ);
        var gridSize = vec3<f32>(input.gridSizeX, input.gridSizeY, input.gridSizeZ);
    
        var particlePosition = vec3<f32>(position[index][0], position[index][1], position[index][2]) / gridSize * gridResolution;
        var cellIndex = vec3<f32>(floor(particlePosition));
    
        var cellTotIndex = celltogrid(cellIndex, gridResolution);
        mark[cellTotIndex] = 1.0;
    
        cellTotIndex = celltogrid(cellIndex, gridResolution + 1.0);
    
        var debug = output[index];
        // output[index][0] = f32(cellIndex.x);
        // output[index][1] = f32(cellIndex.y);
        // output[index][2] = f32(cellIndex.z);
        // output[index][3] = f32(cellTotIndex);
        
        var xPosition = vec3<f32>(cellIndex.x, cellIndex.y + 0.5, cellIndex.z + 0.5);
        var wx = k(particlePosition - xPosition);
        atomicAdd(&atomicweight[cellTotIndex * u32(4) + u32(0)], i32(wx * 1000.0));
    
        var yPosition = vec3<f32>(cellIndex.x + 0.5, cellIndex.y, cellIndex.z + 0.5);
        var wy = k(particlePosition - yPosition);
        atomicAdd(&atomicweight[cellTotIndex * u32(4) + u32(1)], i32(wy * 1000.0));
        
        var zPosition = vec3<f32>(cellIndex.x + 0.5, cellIndex.y + 0.5, cellIndex.z);
        var wz = k(particlePosition - zPosition);
        atomicAdd(&atomicweight[cellTotIndex * u32(4) + u32(2)], i32(wz * 1000.0));
    
        var scalarPosition = vec3<f32>(cellIndex.x + 0.5, cellIndex.y + 0.5, cellIndex.z + 0.5);
        var wscalar = k(particlePosition - scalarPosition);
        atomicAdd(&atomicweight[cellTotIndex * u32(4) + u32(3)], i32(wscalar * 1000.0));
    
        atomicAdd(&atomicvelocity[cellTotIndex * u32(4) + u32(0)], i32(wx * velocity[index][0] * 1000.0));
        atomicAdd(&atomicvelocity[cellTotIndex * u32(4) + u32(1)], i32(wy * velocity[index][1] * 1000.0));
        atomicAdd(&atomicvelocity[cellTotIndex * u32(4) + u32(2)], i32(wz * velocity[index][2] * 1000.0));
    }
    `;
}

class transferToParticles {
    public static cs: string = /* wgsl */ `
    ${common.cs}

    struct InputArgs {
        NUM: f32,
        GRIDNUM: f32,
        CELLNUM: f32,
        gridResolutionX: f32,
        gridResolutionY: f32,
        gridResolutionZ: f32,
        gridSizeX: f32,
        gridSizeY: f32,
        gridSizeZ: f32,
        timeStep: f32,
        flipness: f32,
        maxDensity: f32,
        mouseVelocityX: f32,
        mouseVelocityY: f32,
        mouseVelocityZ: f32,
        mouseOriginX: f32,
        mouseOriginY: f32,
        mouseOriginZ: f32,
        mouseDirectionX: f32,
        mouseDirectionY: f32,
        mouseDirectionZ: f32,
        rsv0: f32,
        rsv1: f32,
        rsv2: f32,
    };

    @group(0) @binding(0) var<storage, read> input: InputArgs;
    @group(0) @binding(1) var<storage, read_write> position: array<vec4<f32>>;
    @group(0) @binding(2) var<storage, read_write> velocity: array<vec4<f32>>;
    @group(0) @binding(3) var<storage, read_write> gridvelocity: array<vec4<f32>>;
    @group(1) @binding(0) var<storage, read_write> orivelocity: array<vec4<f32>>;
    @group(1) @binding(1) var<storage, read_write> color : array<vec4<f32>>;
    @group(1) @binding(2) var<storage, read_write> output: array<vec4<f32>>;
    
    // fn celltogrid (index: vec3<f32>, resolution: vec3<f32>) -> u32{
    //     var clampindex = clamp(index, vec3<f32>(0.0), resolution - vec3<f32>(1.0));
    //     var gridindex = u32(clampindex.x + clampindex.y * resolution.x + clampindex.z * resolution.x * resolution.y);
    //     return gridindex;//clamp(gridindex, u32(0), u32(resolution.x * resolution.y * resolution.z - 1.0));
    // }
    
    // fn interpvel (index: vec3<f32>, velocity1: vec3<f32>, velocity2: vec3<f32>, position: vec3<f32>) -> vec3<f32>{
    //     var newvelocityx: f32 = (index.x + 1.0 - position.x) * velocity1.x + (position.x - index.x) * velocity2.x;
    //     var newvelocityy: f32 = (index.y + 1.0 - position.y) * velocity1.y + (position.y - index.y) * velocity2.y;
    //     var newvelocityz: f32 = (index.z + 1.0 - position.z) * velocity1.z + (position.z - index.z) * velocity2.z;
    
    //     return vec3<f32>(newvelocityx, newvelocityy, newvelocityz);
    // }
    
    fn hsvToRGB(c: vec3<f32>) -> vec3<f32>{
        var k = vec4<f32>(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        var p = abs(fract(c.xxx + k.xyz) * 6.0 - k.www);
        return c.z * mix(k.xxx, clamp(p - k.xxx, vec3<f32>(0.0), vec3<f32>(1.0)), c.y);
    }
    
    const size = u32(128);
    @compute @workgroup_size(size)
    fn CsMain(
        @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>,
        @builtin(num_workgroups) GroupSize: vec3<u32>
    ) {
        var index = GlobalInvocationID.x;
        if(index >= u32(input.NUM)){
            return;
        }
        
        var gridResolution = vec3<f32>(input.gridResolutionX, input.gridResolutionY, input.gridResolutionZ);
        var gridSize = vec3<f32>(input.gridSizeX, input.gridSizeY, input.gridSizeZ);
        var flipness = input.flipness;
    
        var particlePosition = vec3<f32>(position[index][0], position[index][1], position[index][2]) / gridSize * gridResolution;
        var cellIndex = vec3<f32>(floor(particlePosition));
        // var cellTotIndex = celltogrid(cellIndex, gridResolution + 1.0);
        var debug = output[index];
        // output[index][0] = f32(cellIndex.x);
        // output[index][1] = f32(cellIndex.y);
        // output[index][2] = f32(cellIndex.z);
        // output[index][3] = f32(index);
    
        var leftXIndex = celltogrid(cellIndex, gridResolution + 1.0);
        var leftX = gridvelocity[leftXIndex][0];
        var orileftX = orivelocity[leftXIndex][0];
        var rightXIndex = celltogrid(cellIndex + vec3<f32>(1.0, 0.0, 0.0), gridResolution + 1.0);
        var rightX = gridvelocity[rightXIndex][0];
        var orirightX = orivelocity[rightXIndex][0];
    
        var bottomYIndex = celltogrid(cellIndex, gridResolution + 1.0);
        var bottomY = gridvelocity[bottomYIndex][1];
        var oribottomY = orivelocity[bottomYIndex][1]; 
        var topYIndex = celltogrid(cellIndex + vec3<f32>(0.0, 1.0, 0.0), gridResolution + 1.0);
        var topY = gridvelocity[topYIndex][1];
        var oritopY = orivelocity[topYIndex][1];
    
        var backZIndex = celltogrid(cellIndex, gridResolution + 1.0);
        var backZ = gridvelocity[backZIndex][2];
        var oribackZ = orivelocity[backZIndex][2];
        var frontZIndex = celltogrid(cellIndex + vec3<f32>(0.0, 0.0, 1.0), gridResolution + 1.0);
        var frontZ = gridvelocity[frontZIndex][2]; 
        var orifrontZ = orivelocity[frontZIndex][2];  
    
        var velocity1 = vec3<f32>(leftX, bottomY, backZ);
        var velocity2 = vec3<f32>(rightX, topY, frontZ);
        var orivelocity1 = vec3<f32>(orileftX, oribottomY, oribackZ);
        var orivelocity2 = vec3<f32>(orirightX, oritopY, orifrontZ);
    
        var particleVelocity = vec3<f32>(velocity[index][0], velocity[index][1], velocity[index][2]);
        var currentVelocity = interpvel(cellIndex, velocity1, velocity2, particlePosition);
        var originalVelocity = interpvel(cellIndex, orivelocity1, orivelocity2, particlePosition);
    
        var velocityChange = vec3<f32>(currentVelocity - originalVelocity);
        var flipVelocity = vec3<f32>(particleVelocity + velocityChange);
        var picVelocity = vec3<f32>(currentVelocity);
        var tempvelocity = vec3<f32>(mix(picVelocity, flipVelocity, flipness));
    
        velocity[index][0] = tempvelocity.x;
        velocity[index][1] = tempvelocity.y;
        velocity[index][2] = tempvelocity.z;
        // output[index][0] = f32(tempvelocity.x);
        // output[index][1] = f32(tempvelocity.y);
        // output[index][2] = f32(tempvelocity.z);
        // output[index][3] = f32(index);
    
        var speed = length(tempvelocity);
        var tempcolor = hsvToRGB(vec3<f32>(max(0.6 - speed * 0.0025, 0.52), 0.75, 1.0));
        color[index][0] = tempcolor.x;
        color[index][1] = tempcolor.y;
        color[index][2] = tempcolor.z;
        color[index][3] = 1.0;
    }    
    `;
}

let FluidRenderShaderOpt = /* wgsl */ `
    #include "Common_vert"
    #include "Common_frag"
    #include "UnLit_frag"
    #include "UnLitMaterialUniform_frag"
    #include "MathShader"

    struct Particle_global {
        instance_index : f32,
        particles_Radius : f32,
        time : f32,
        timeDelta : f32,
    };

    @group(1) @binding(0)
    var baseMapSampler: sampler;

    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;

    @group(3) @binding(0)
    var<storage, read> particlePosition : array<vec4<f32>>;

    @group(3) @binding(1) 
    var<storage, read> particleColor : array<vec4<f32>>;

    @group(3) @binding(2)
    var<storage, read> particleGlobalData: Particle_global;

    fn calcBillboard( pos : vec3<f32>, worldMatrix:mat4x4<f32> ) -> mat4x4<f32>{
        var dir:vec3<f32> = normalize(globalUniform.cameraWorldMatrix[3].xyz - pos.xyz) ;
        let mat3 = mat3x3<f32>(
           worldMatrix[0].xyz,
           worldMatrix[1].xyz,
           worldMatrix[2].xyz
        );
        var v3Look:vec3<f32> = normalize( dir * mat3 )  ;
        var v3Right:vec3<f32> = normalize( cross( vec3<f32>( 0.0 , 1.0 , 0.0 ) * mat3 , v3Look ));
        var v3Up:vec3<f32> = cross( v3Look , v3Right );
        var matLookAt : mat4x4<f32> = mat4x4<f32>(
           vec4<f32>( v3Right.xyz , 0.0 ),
           vec4<f32>( v3Up.xyz , 0.0 ),
           vec4<f32>( v3Look.xyz , 0.0 ),
           vec4<f32>( 0.0,0.0,0.0 , 1.0 )
        );
        return matLookAt ;
   }

    fn vert(vertex:VertexAttributes) -> VertexOutput {
        var particlePos = particlePosition[vertex.index];
        var worldMatrix = models.matrix[u32(particleGlobalData.instance_index)];
        var normalMatrix = transpose(inverse( mat3x3<f32>(worldMatrix[0].xyz,worldMatrix[1].xyz,worldMatrix[2].xyz) ));

        var wPosition = vertex.position.xyz;

        var worldNormal = normalize(normalMatrix * vertex.normal.xyz);

        var v_mat4:mat4x4<f32> = calcBillboard(particlePos.xyz, worldMatrix);
        wPosition = ( v_mat4 * vec4(wPosition,1.0) ).xyz;

        wPosition.x += particlePos.x;
        wPosition.y += particlePos.y;
        wPosition.z += particlePos.z;

        ORI_VertexOut.varying_UV0 = vertex.uv;
    
        var worldPos = (worldMatrix * vec4<f32>(wPosition.xyz, 1.0));
        var viewPosition = ((globalUniform.viewMat) * worldPos);

        ORI_VertexOut.varying_WPos = worldPos;
        ORI_VertexOut.varying_WPos.w = f32(particleGlobalData.instance_index);
        ORI_VertexOut.index = f32(particleGlobalData.instance_index) ;

        var clipPosition = globalUniform.projMat * viewPosition ;

        //ORI_VertexOut.varying_ViewPos = clipPosition.xyz;

        ORI_VertexOut.member = clipPosition;
            
        //ORI_VertexOut.fragCoord = normalize(vertex.position.xy) + vec2<f32>(0.5, 0.5);
        ORI_VertexOut.varying_Color = particleColor[vertex.index];
        ORI_VertexOut.varying_WNormal = worldNormal ; 

        return ORI_VertexOut;
    }

    fn frag() {
        let color = ORI_VertexVarying.vColor;
        let worldPos = ORI_VertexVarying.vWorldPos;
        let worldNormal = ORI_VertexVarying.vWorldNormal;
        
        let V = normalize(globalUniform.cameraWorldMatrix[3].xyz - worldPos.xyz) ;
        let N = worldNormal.xyz;

        let att = max( dot(V,N) , 0.0) * 0.35 + 0.65 ;
        var newColor = color.xyz * att ;

        ORI_ShadingInput.BaseColor = vec4<f32>(newColor.xyz ,color.w );

        UnLit();
    }`

new Demo_FluidOptimize().run()