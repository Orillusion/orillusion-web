import { CameraUtil, Engine3D, HoverCameraController, Object3D, Scene3D, webGPUContext, AtmosphericComponent, View3D, ClusterLightingBuffer, Color, ComputeGPUBuffer, ComputeShader, Material, MeshRenderer, PassType, PlaneGeometry, RendererMask, RendererPassState, RenderShaderPass, Shader, ShaderLib, Texture, Time, Vector3, Vector4 } from '@orillusion/core';
import * as dat from 'dat.gui'

let gui

class Demo_FlowImg {
    async run() {
        await Engine3D.init({});
        gui = new dat.GUI()

        let scene = new Scene3D();
        let sky = scene.addComponent(AtmosphericComponent);
        await this.initScene(scene);

        let camera = CameraUtil.createCamera3DObject(scene);
        
        camera.perspective(60, webGPUContext.aspect, 0.01, 10000.0);
        let ctl = camera.object3D.addComponent(HoverCameraController);
        ctl.distance = 3;

        let view = new View3D();
        view.scene = scene;
        view.camera = camera;

        Engine3D.startRenderView(view);
    }

    async initScene(scene: Scene3D) {
        var obj = new Object3D();
        let image = await this.imageloader('https://cdn.orillusion.com/png/logo.png');
        let simulator = obj.addComponent(FlowImgSimulator);
        simulator.setImageData(image);
        scene.addChild(obj);

        let input = document.createElement('input')
        input.type = 'file'
        input.accept = '.png,.webp'
        input.style.position = 'fixed'
        document.body.appendChild(input)
        input.onchange= async (e)=>{
            let url = URL.createObjectURL(e.target.files[0])
            let image = await this.imageloader(url)
            simulator.setImageData(image);
            simulator.reset()
        }
        
        gui.add({
            'a': ()=>input.click()
        }, 'a').name('Change Image with transparent')
    }

    async initComputeBuffer() { }

    async imageloader(url: string) {
        const res = await fetch(url)
        const img = await res.blob()
        const bitmap = await createImageBitmap(img)
        const r = 1 //bitmap.width / bitmap.height

        const canvas = document.createElement('canvas');
        canvas.hidden = true;
        document.body.appendChild(canvas);

        // const canvas = document.querySelector('#canvas') as HTMLCanvasElement
        const width = canvas.width = 512
        const height = canvas.height = canvas.width / r
        const context = canvas.getContext('2d')
        if (!context)
            throw new Error('no canvas')
        context.drawImage(bitmap, 0, 0, width, height)
        const pixelData = context.getImageData(0, 0, width, height)
        // console.log(pixelData)
        const positions = [], colors = []
        for (let i = 0; i < pixelData.data.length; i += 4) {
            const alpha = pixelData.data[i + 3]
            if (alpha > 0) {
                const r = pixelData.data[i + 0]
                const g = pixelData.data[i + 1]
                const b = pixelData.data[i + 2]
                colors.push(r, g, b, 1)
                const y = Math.floor(i / width / 4)
                const x = (Math.floor(i / 4) - y * width)
                positions.push(x / width, y / width, 0, 1)
            }
        }
        return { positions, colors }
    }
}

class FlowImgSimulator extends MeshRenderer {
    protected mConfig: FlowImgSimulatorConfig;
    protected mFlowImgComputePipeline: FlowImgSimulatorPipeline;
    protected mGlobalArgs: ComputeGPUBuffer;
    protected mImagedata: any;
    constructor() {
        super();
        this.addRendererMask(RendererMask.Particle);
        this.mConfig = {
            GROUP_SIZE: 128,
            NUM: 200000, //partical number 1W~100W
            PARTICAL_RADIUS: 0, // 1 / Math.sqrt(NUM),
            SPAWN_RADIUS: 0.05, //thickness 0~0.1
            BASE_LIFETIME: 0.01,
            MAX_ADDITIONAL_LIFETIME: 0.5, //lifetime 0~1
            PRESIMULATION_DELTA_TIME: 0.2,
            INITIAL_SPEED: 0.5, // partical speed 0~1
            INITIAL_TURBULENCE: 0.0, // turbulence 0~1
            NOISE_OCTAVES: 3,
            MAX_DELTA_TIME: 1,
            directionX: 0.0, //X -1~1
            directionY: -0.2000000, //Y -1~1
            directionZ: -0.5000000, //Z -1~1
        };
        this.mConfig.PARTICAL_RADIUS = 1 / Math.sqrt(this.mConfig.NUM);
        let time
        let reset = () => {
            clearTimeout(time)
            time = setTimeout(() => {
                this.reset(this.mConfig)
            }, 100)
        }
        let f = gui.addFolder("FlowImgSimulator");
        f.add(this.mConfig, 'PARTICAL_RADIUS', 0.001, 1, 0.001).onChange(reset);
        f.add(this.mConfig, 'SPAWN_RADIUS', 0, 0.1, 0.01).onChange(reset);
        f.add(this.mConfig, 'MAX_ADDITIONAL_LIFETIME', 0, 2, 0.01).onChange(reset);
        f.add(this.mConfig, 'INITIAL_SPEED', 0, 1, 0.01);
        f.add(this.mConfig, 'INITIAL_TURBULENCE', 0, 1, 0.01);
        f.add(this.mConfig, 'directionX', -1, 1, 0.01);
        f.add(this.mConfig, 'directionY', -1, 1, 0.01);
        f.add(this.mConfig, 'directionZ', -1, 1, 0.01);
        f.open();
    }

    public reset(config?: FlowImgSimulatorConfig) {
        if (config)
            this.mConfig = config;
        this.mFlowImgComputePipeline.reinitGPUBuffer(this.mConfig, this.mImagedata);
    }

    public setImageData(image: any) {
        this.mImagedata = image;
    }

    public init() {
        super.init();
        const { PARTICAL_RADIUS } = this.mConfig;
        this.alwaysRender = true;
        this.geometry = new PlaneGeometry(PARTICAL_RADIUS * 2.0, PARTICAL_RADIUS * 2.0, 1.0, 1.0, Vector3.Z_AXIS);
        this.material = new FlowImgSimulatorMaterial();
        let device = webGPUContext.device;

        var globalArgsData = new Float32Array(4);
        this.mGlobalArgs = new ComputeGPUBuffer(globalArgsData.byteLength);
        globalArgsData[0] = this.transform.worldMatrix.index;
        globalArgsData[1] = this.mConfig.PARTICAL_RADIUS;
        this.mGlobalArgs.setFloat32Array("", globalArgsData);
        this.mGlobalArgs.apply();

        this.instanceCount = this.mConfig.NUM;
    }

    public start() {
        super.start();
        this.mFlowImgComputePipeline = new FlowImgSimulatorPipeline(this.mConfig, this.mImagedata);
    }

    public stop() { }

    public onCompute(view: View3D, command?: GPUCommandEncoder) {
        this.mFlowImgComputePipeline.compute(command);
    }

    public nodeUpdate(view: View3D, passType: PassType, renderPassState: RendererPassState, clusterLightingBuffer: ClusterLightingBuffer) {
        let material = this.materials[0];
        let passes = material.getPass(passType);
        if (passes) {
            for (let i = 0; i < passes.length; i++) {
                var subs = passes[i];
                subs.setStorageBuffer(`particlePosition`, this.mFlowImgComputePipeline.positionBuffer);
                subs.setStorageBuffer(`particleColor`, this.mFlowImgComputePipeline.colorBuffer);
                subs.setStorageBuffer(`particleGlobalData`, this.mGlobalArgs);
                }
            }
        super.nodeUpdate(view, passType, renderPassState, clusterLightingBuffer);
    }
}

type FlowImgSimulatorConfig = {
    GROUP_SIZE: number;
    NUM: number;
    PARTICAL_RADIUS: number;
    SPAWN_RADIUS: number;
    BASE_LIFETIME: number;
    MAX_ADDITIONAL_LIFETIME: number;
    PRESIMULATION_DELTA_TIME: number;
    INITIAL_SPEED: number;
    INITIAL_TURBULENCE: number;
    NOISE_OCTAVES: number;
    MAX_DELTA_TIME: number;
    directionX: number;
    directionY: number;
    directionZ: number;
};


class FlowImgSimulatorBuffer {
    // protected mInputData: Float32Array;
    protected mInputBuffer: ComputeGPUBuffer;
    protected mPositionData: Float32Array;
    protected mPositionBuffer: ComputeGPUBuffer;
    protected mNewPositionBuffer: ComputeGPUBuffer;
    protected mSpawnData: Float32Array;
    protected mSpawnBuffer: ComputeGPUBuffer;
    protected mColorData: Float32Array;
    protected mColorBuffer: ComputeGPUBuffer;
    protected mConfig: FlowImgSimulatorConfig;

    constructor(config: FlowImgSimulatorConfig, imagedata: any) {
        this.mConfig = config;
        this.initGPUBuffer(config, imagedata);
        this.reinitGPUBuffer(config, imagedata);
    }

    public updateInputData() {
        const { INITIAL_TURBULENCE, NOISE_OCTAVES, directionX, directionY, directionZ } = this.mConfig;

        this.mInputBuffer.setFloat("persistence", INITIAL_TURBULENCE);
        this.mInputBuffer.setFloat("OCTAVES", NOISE_OCTAVES);
        this.mInputBuffer.setFloat("directionX", directionX);
        this.mInputBuffer.setFloat("directionY", directionY);
        this.mInputBuffer.setFloat("directionZ", directionZ);
        this.mInputBuffer.apply();

        this.mColorBuffer.setFloat32Array("", this.mColorData);
        this.mColorBuffer.apply();
    }

    public reinitGPUBuffer(config: FlowImgSimulatorConfig, imagedata: any) {
        const { NUM, SPAWN_RADIUS, BASE_LIFETIME, MAX_ADDITIONAL_LIFETIME } = config;

        var imageindex: any = [];
        for (let i = 0; i < NUM; ++i) {
            imageindex[i] = Math.floor(Math.random() * imagedata.positions.length / 4);
        }
        
        for (let i = 0; i < NUM; ++i) {
            this.mPositionData[i * 4 + 0] = (imagedata.positions[imageindex[i] * 4] * 2.0 - 1.0) // x
            this.mPositionData[i * 4 + 1] = -(imagedata.positions[imageindex[i] * 4 + 1] * 2.0 - 1.0) // y
            this.mPositionData[i * 4 + 2] = SPAWN_RADIUS * Math.pow(Math.random(), 1 / 3) * (Math.random() * 2.0 - 1.0) // z
            this.mPositionData[i * 4 + 3] = BASE_LIFETIME * Math.random() // w
        }
        this.mPositionBuffer.setFloat32Array("", this.mPositionData);
        this.mPositionBuffer.apply();

        for (let i = 0; i < NUM; ++i) {
            this.mSpawnData[i * 4 + 0] = (imagedata.positions[imageindex[i] * 4] * 2.0 - 1.0) // x
            this.mSpawnData[i * 4 + 1] = -(imagedata.positions[imageindex[i] * 4 + 1] * 2.0 - 1.0) // y
            this.mSpawnData[i * 4 + 2] = SPAWN_RADIUS * Math.pow(Math.random(), 1 / 3) * (Math.random() * 2.0 - 1.0) // z
            this.mSpawnData[i * 4 + 3] = BASE_LIFETIME + Math.random() * MAX_ADDITIONAL_LIFETIME
        }
        this.mSpawnBuffer.setFloat32Array("", this.mSpawnData);
        this.mSpawnBuffer.apply();

        for (let i = 0; i < NUM; ++i) {
            this.mColorData[i * 4 + 0] = imagedata.colors[imageindex[i] * 4] / 256.0//0.5 // r
            this.mColorData[i * 4 + 1] = imagedata.colors[imageindex[i] * 4 + 1] / 256.0//0.5 // g
            this.mColorData[i * 4 + 2] = imagedata.colors[imageindex[i] * 4 + 2] / 256.0//0.5 // b
            this.mColorData[i * 4 + 3] = imagedata.colors[imageindex[i] * 4 + 3]//1 // a
        }
        this.mColorBuffer.setFloat32Array("", this.mColorData);
        this.mColorBuffer.apply();

        const { PRESIMULATION_DELTA_TIME, INITIAL_TURBULENCE, NOISE_OCTAVES, directionX, directionY, directionZ } = config;
        this.mInputBuffer.setFloat("count", NUM);
        this.mInputBuffer.setFloat("time", PRESIMULATION_DELTA_TIME);
        this.mInputBuffer.setFloat("deltatime", PRESIMULATION_DELTA_TIME);
        this.mInputBuffer.setFloat("persistence", INITIAL_TURBULENCE);
        this.mInputBuffer.setFloat("OCTAVES", NOISE_OCTAVES);
        this.mInputBuffer.setFloat("directionX", directionX);
        this.mInputBuffer.setFloat("directionY", directionY);
        this.mInputBuffer.setFloat("directionZ", directionZ);
        this.mInputBuffer.apply();
    }

    protected initGPUBuffer(config: FlowImgSimulatorConfig, imagedata: any) {
        const { NUM } = config;

        this.mPositionData = new Float32Array(4 * NUM);
        this.mPositionBuffer = new ComputeGPUBuffer(this.mPositionData.length);
        this.mNewPositionBuffer = new ComputeGPUBuffer(this.mPositionData.length);

        this.mSpawnData = new Float32Array(4 * NUM);
        this.mSpawnBuffer = new ComputeGPUBuffer(this.mSpawnData.length);

        this.mColorData = new Float32Array(4 * NUM);
        this.mColorBuffer = new ComputeGPUBuffer(this.mColorData.length);
        
        this.mInputBuffer = new ComputeGPUBuffer(8);
    }
}

class FlowImgSimulatorMaterial extends Material {
    doubleSided: any;
    constructor() {
        super();
        ShaderLib.register("FlowImgRenderShader", FlowImgRenderShader);
        let shader = new Shader();
        let pass = new RenderShaderPass('FlowImgRenderShader', 'FlowImgRenderShader');
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

class FlowImgSimulatorPipeline extends FlowImgSimulatorBuffer {
    protected mSimulationComputeShader: ComputeShader;
    protected mDataCopyComputeShader: ComputeShader;
    protected mFirstFrame: boolean = false;
    constructor(config: FlowImgSimulatorConfig, imagedata: any) {
        super(config, imagedata);
        this.initPipeline();
    }

    public get positionBuffer(): ComputeGPUBuffer {
        return this.mPositionBuffer;
    }

    public get colorBuffer(): ComputeGPUBuffer {
        return this.mColorBuffer;
    }

    public reset(config: FlowImgSimulatorConfig, imagedata: any) {
        this.mFirstFrame = true;
        this.reinitGPUBuffer(config, imagedata);
    }

    public compute(command: GPUCommandEncoder) {
        const { BASE_LIFETIME, PRESIMULATION_DELTA_TIME, NUM, GROUP_SIZE, INITIAL_SPEED } = this.mConfig;

        if (this.mFirstFrame) {
            this.mInputBuffer.setFloat("time", PRESIMULATION_DELTA_TIME);
            this.mInputBuffer.setFloat("deltatime", PRESIMULATION_DELTA_TIME);
        } else {
            this.mInputBuffer.setFloat("time", Time.time / 1000.0);
            this.mInputBuffer.setFloat("deltatime", INITIAL_SPEED * (Time.delta / 1000.0));
        }
        this.updateInputData();

        let computePass = command.beginComputePass();

        for (var i = 0; i < (this.mFirstFrame ? BASE_LIFETIME / PRESIMULATION_DELTA_TIME : 1); ++i) {
            this.mSimulationComputeShader.compute(computePass);
            this.mDataCopyComputeShader.compute(computePass);
        }

        computePass.end();

        this.mFirstFrame = false;
    }

    protected initPipeline() {
        const { NUM, GROUP_SIZE } = this.mConfig;

        this.mSimulationComputeShader = new ComputeShader(Simulation.cs);
        this.mSimulationComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mSimulationComputeShader.setStorageBuffer(`position`, this.mPositionBuffer);
        this.mSimulationComputeShader.setStorageBuffer(`spawn`, this.mSpawnBuffer);
        this.mSimulationComputeShader.setStorageBuffer(`newposition`, this.mNewPositionBuffer);
        this.mSimulationComputeShader.setStorageBuffer(`color`, this.mColorBuffer);
        this.mSimulationComputeShader.workerSizeX = Math.ceil(NUM / GROUP_SIZE);

        this.mDataCopyComputeShader = new ComputeShader(Copy.cs);
        this.mDataCopyComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mDataCopyComputeShader.setStorageBuffer(`position`, this.mPositionBuffer);
        this.mDataCopyComputeShader.setStorageBuffer(`newposition`, this.mNewPositionBuffer);
        this.mDataCopyComputeShader.workerSizeX = Math.ceil(NUM / GROUP_SIZE);
    }
}

let FlowImgRenderShader = /* wgsl */ `
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

        var wPosition = vertex.position.xyz;

        // wPosition *= particleGlobalData.particles_Radius;

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

        var clipPosition = globalUniform.projMat * viewPosition ;

        //ORI_VertexOut.varying_ViewPos = clipPosition.xyz;

        ORI_VertexOut.member = clipPosition;
            
        //ORI_VertexOut.fragCoord = normalize(vertex.position.xy) + vec2<f32>(0.5, 0.5);
        ORI_VertexOut.varying_Color = particleColor[vertex.index];
    
        return ORI_VertexOut;
    }

    fn frag() {
        let color = ORI_VertexVarying.vColor;
        ORI_ShadingInput.BaseColor = color;
        UnLit();
    }`

class Copy {
    public static cs: string = /* wgsl */ `
        struct InputArgs {
            count: f32,
            time: f32,
            deltatime: f32,
            persistence: f32,
            OCTAVES: f32,
            directionX: f32,
            directionY: f32,
            directionZ: f32,
        };

        @group(0) @binding(0) var<storage, read> input: InputArgs;
        @group(0) @binding(1) var<storage, read_write> position: array<vec4<f32>>;
        @group(0) @binding(2) var<storage, read_write> newposition: array<vec4<f32>>;
        
        const size = u32(128);
        @compute @workgroup_size(size)
        fn CsMain(
            @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>,
            @builtin(num_workgroups) GroupSize: vec3<u32>
        ) {
            var index = GlobalInvocationID.x;
            if(index >= u32(input.count)){
                return;
            }
        
            position[index] = newposition[index];
        
        }
    `;
}
    
class Simulation {
    public static cs: string = /* wgsl */ `
        struct InputArgs {
            count: f32,
            time: f32,
            deltatime: f32,
            persistence: f32,
            OCTAVES: f32,
            directionX: f32,
            directionY: f32,
            directionZ: f32,
        };

        @group(0) @binding(0) var<storage, read> input: InputArgs;
        @group(0) @binding(1) var<storage, read_write> position: array<vec4<f32>>;
        @group(0) @binding(2) var<storage, read_write> spawn: array<vec4<f32>>;
        @group(0) @binding(3) var<storage, read_write> newposition: array<vec4<f32>>;
        
        @group(1) @binding(0) var<storage, read_write> color: array<vec4<f32>>;
        
        fn mod289v(x: vec4<f32>) -> vec4<f32>{
            return x - floor(x * (1.0 / 289.0)) * 289.0;
        }
        
        fn mod289(x: f32) -> f32{
            return x - floor(x * (1.0 / 289.0)) * 289.0;
        }
        
        fn permutev(x: vec4<f32>) -> vec4<f32>{
            return mod289v(((x*34.0)+1.0)*x);
        }
        
        fn permute(x: f32) -> f32{
            return mod289(((x*34.0)+1.0)*x);
        }
        
        fn taylorInvSqrtv(r: vec4<f32>) -> vec4<f32>{
            return 1.79284291400159 - 0.85373472095314 * r;
        }
        
        fn taylorInvSqrt(r: f32) -> f32{
            return 1.79284291400159 - 0.85373472095314 * r;
        }
        
        fn grad4(j: f32, ip: vec4<f32>) -> vec4<f32>{
            let ones = vec4(1.0, 1.0, 1.0, -1.0);
            var p: vec4<f32>;
            var s: vec4<f32>;
            p = vec4(floor(fract(vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0, 0.0);
            p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
            s = vec4<f32>(p < vec4(0.0));
            p = vec4(p.xyz + (s.xyz*2.0 - 1.0) * s.www, p.w); 
            return p;
        }
        
        fn simplexNoiseDerivatives(v: vec4<f32>) -> vec4<f32>{
            let C = vec4( 0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);
            let F4 = 0.309016994374947451;
            var i  = floor(v + dot(v, vec4(F4)) );
            var x0 = v -   i + dot(i, C.xxxx);
            var i0: vec4<f32>;
            var isX = step( x0.yzw, x0.xxx );
            var isYZ = step( x0.zww, x0.yyz );
            // i0.x = isX.x + isX.y + isX.z;
            // i0.yzw = 1.0 - isX;
            i0 = vec4(isX.x + isX.y + isX.z, 1.0 - isX);
            i0.y += isYZ.x + isYZ.y;
            // i0.zw += 1.0 - isYZ.xy;
            i0 = vec4(i0.xy, i0.zw + (1.0 - isYZ.xy));
            i0.z += isYZ.z;
            i0.w += 1.0 - isYZ.z;
            var i3 = clamp( i0, vec4<f32>(0.0), vec4<f32>(1.0) );
            var i2 = clamp( i0 - 1.0, vec4<f32>(0.0), vec4<f32>(1.0) );
            var i1 = clamp( i0 - 2.0, vec4<f32>(0.0), vec4<f32>(1.0) );
            var x1 = x0 - i1 + C.xxxx;
            var x2 = x0 - i2 + C.yyyy;
            var x3 = x0 - i3 + C.zzzz;
            var x4 = x0 + C.wwww;
            i = mod289v(i); 
            var j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
            var j1 = permutev( permutev( permutev( permutev (
                    i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
                    + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
                    + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
                    + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));
            var ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;
            var p0 = grad4(j0,   ip);
            var p1 = grad4(j1.x, ip);
            var p2 = grad4(j1.y, ip);
            var p3 = grad4(j1.z, ip);
            var p4 = grad4(j1.w, ip);
            var norm = taylorInvSqrtv(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
            p0 *= norm.x;
            p1 *= norm.y;
            p2 *= norm.z;
            p3 *= norm.w;
            p4 *= taylorInvSqrt(dot(p4,p4));
            var values0 = vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2));
            var values1 = vec2(dot(p3, x3), dot(p4, x4));
            var m0 = max(0.5 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), vec3<f32>(0.0));
            var m1 = max(0.5 - vec2(dot(x3,x3), dot(x4,x4)), vec2<f32>(0.0));
            var temp0 = -6.0 * m0 * m0 * values0;
            var temp1 = -6.0 * m1 * m1 * values1;
            var mmm0 = m0 * m0 * m0;
            var mmm1 = m1 * m1 * m1;
            var dx = temp0[0] * x0.x + temp0[1] * x1.x + temp0[2] * x2.x + temp1[0] * x3.x + temp1[1] * x4.x + mmm0[0] * p0.x + mmm0[1] * p1.x + mmm0[2] * p2.x + mmm1[0] * p3.x + mmm1[1] * p4.x;
            var dy = temp0[0] * x0.y + temp0[1] * x1.y + temp0[2] * x2.y + temp1[0] * x3.y + temp1[1] * x4.y + mmm0[0] * p0.y + mmm0[1] * p1.y + mmm0[2] * p2.y + mmm1[0] * p3.y + mmm1[1] * p4.y;
            var dz = temp0[0] * x0.z + temp0[1] * x1.z + temp0[2] * x2.z + temp1[0] * x3.z + temp1[1] * x4.z + mmm0[0] * p0.z + mmm0[1] * p1.z + mmm0[2] * p2.z + mmm1[0] * p3.z + mmm1[1] * p4.z;
            var dw = temp0[0] * x0.w + temp0[1] * x1.w + temp0[2] * x2.w + temp1[0] * x3.w + temp1[1] * x4.w + mmm0[0] * p0.w + mmm0[1] * p1.w + mmm0[2] * p2.w + mmm1[0] * p3.w + mmm1[1] * p4.w;
            return vec4(dx, dy, dz, dw) * 49.0;
        }
        
        const size = u32(128);
        @compute @workgroup_size(size)
        fn CsMain(
            @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>,
            @builtin(num_workgroups) GroupSize: vec3<u32>
        ) {
            var index = GlobalInvocationID.x;
            if(index >= u32(input.count)){
                return;
            }
            
            let time = input.time;
            let deltatime = input.deltatime;
            let persistence = input.persistence;
            var OCTAVES = u32(input.OCTAVES);
            let directionX = input.directionX;
            let directionY = input.directionY;
            let directionZ = input.directionZ;
        
            var oldPosition = vec3<f32>(position[index][0], position[index][1], position[index][2]);
            var noisePosition = oldPosition * 1.50000000;
            var noiseTime = time * 0.00025000;
            var xNoisePotentialDerivatives = vec4(0.0);
            var yNoisePotentialDerivatives = vec4(0.0);
            var zNoisePotentialDerivatives = vec4(0.0);
            
            for (var i = u32(0); i < OCTAVES; i++) {
                var scale = (1.0 / 2.0) * pow(2.0, f32(i));
                var noiseScale = pow(persistence, f32(i));
        
                if (persistence == 0.0 && i == u32(0)) {
                    noiseScale = 1.0;
                }
                xNoisePotentialDerivatives += simplexNoiseDerivatives(vec4(noisePosition * pow(2.0, f32(i)), noiseTime)) * noiseScale * scale;
                yNoisePotentialDerivatives += simplexNoiseDerivatives(vec4((noisePosition + vec3(123.4, 129845.6, -1239.1)) * pow(2.0, f32(i)), noiseTime)) * noiseScale * scale;
                zNoisePotentialDerivatives += simplexNoiseDerivatives(vec4((noisePosition + vec3(-9519.0, 9051.0, -123.0)) * pow(2.0, f32(i)), noiseTime)) * noiseScale * scale;
            }
        
            var noiseVelocity = vec3(zNoisePotentialDerivatives[1] - yNoisePotentialDerivatives[2], 
                                    xNoisePotentialDerivatives[2] - zNoisePotentialDerivatives[0],
                                    yNoisePotentialDerivatives[0] - xNoisePotentialDerivatives[1]) * 0.007500000 * 3.0;
        
            var velocity = vec3(directionX, directionY, directionZ);
            var totalVelocity = velocity + noiseVelocity;
        
            var temp = oldPosition + totalVelocity * deltatime;
        
            var oldLifetime = position[index][3];
            var newLifetime = oldLifetime - deltatime;
            if (newLifetime < 0.0) {
                newLifetime = max(newLifetime, -0.16);
                temp = vec3<f32>(spawn[index][0], spawn[index][1], spawn[index][2]);
                newLifetime = spawn[index][3] + 2.0 * newLifetime;
                // color[index][0] = 1.0;
                // color[index][1] = 1.0;
                // color[index][2] = 1.0;
            }
            var debug = color[index];
            newposition[index][0] = temp.x;
            newposition[index][1] = temp.y;
            newposition[index][2] = temp.z;
            newposition[index][3] = newLifetime;
        }
    `;
}

new Demo_FlowImg().run();
