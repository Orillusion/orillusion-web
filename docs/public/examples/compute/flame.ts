
import { AnimatorComponent, AtmosphericComponent, CameraUtil, ClusterLightingBuffer, Color, ComputeGPUBuffer, ComputeShader, DirectLight, Engine3D, GlobalBindGroup, GPUContext, HoverCameraController, Material, MeshRenderer, Object3D, PassType, PlaneGeometry, RendererMask, RendererPassState, RenderShaderPass, Scene3D, Shader, ShaderLib, SkinnedMeshRenderer2, Texture, Time, Vector3, Vector4, VertexAttributeData, VertexAttributeName, View3D, webGPUContext } from "@orillusion/core";

class Demo_Flame {
    constructor() { }

    protected mLastPoint: Vector3 = new Vector3();
    protected mVelocity: Vector3 = new Vector3();

    async run() {
        await Engine3D.init({});

        let scene = new Scene3D();
        let sky = scene.addComponent(AtmosphericComponent);
        await this.initScene(scene);

        let camera = CameraUtil.createCamera3DObject(scene);

        camera.perspective(60, webGPUContext.aspect, 0.01, 10000.0);
        let ctl = camera.object3D.addComponent(HoverCameraController);
        ctl.setCamera(0, 0, 5);

        let view = new View3D();
        view.scene = scene;
        view.camera = camera;
        Engine3D.startRenderView(view);
    }

    async initScene(scene: Scene3D) {
        let cesiumMan = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/CesiumMan/CesiumMan.gltf');
        cesiumMan.rotationX = -90;
        cesiumMan.rotationY = 180;
        cesiumMan.y = -0.8;
        scene.addChild(cesiumMan);

        {
            let obj = new Object3D();
            obj.rotationX = 120;
            obj.rotationY = 306;
            let light = obj.addComponent(DirectLight);
            light.intensity = 5;
            light.castShadow = true;
            light.debug();
            scene.addChild(obj);
        }

        let emulation = cesiumMan.addComponent(FlameSimulator);
        emulation.alwaysRender = true;
        emulation.geometry = new PlaneGeometry(0.01, 0.01, 1.0, 1.0, Vector3.Z_AXIS);
        emulation.material = new FlameSimulatorMaterial();

    }
}

type FlameSimulatorConfig = {
    GROUP_SIZE: number;
    NUM: number;
    SPAWN_RADIUS: number;
    BASE_LIFETIME: number;
    MAX_ADDITIONAL_LIFETIME: number;
    PRESIMULATION_DELTA_TIME: number;
    INITIAL_SPEED: number;
    INITIAL_TURBULENCE: number;
    NOISE_OCTAVES: number;
    SCALE: number;
    NUMBER_OF_BONES: number;
    ANIMATION_FPS: number;
    ANIMATION_LENGTH: number;
    MAX_DELTA_TIME: number;
};

class FlameSimulatorBuffer {
    protected mPositionBuffer: ComputeGPUBuffer;
    protected mNewPositionBuffer: ComputeGPUBuffer;
    protected mBonePositionsBuffer: ComputeGPUBuffer;
    protected mBoneIndicesBuffer: ComputeGPUBuffer;
    protected mBoneWeightsBuffer: ComputeGPUBuffer;
    protected mBoneMatrixBuffer: ComputeGPUBuffer;
    protected mBoneMatricesBuffer: ComputeGPUBuffer;
    protected mInputBuffer: ComputeGPUBuffer;
    // protected mInputData: Float32Array;

    constructor(config: FlameSimulatorConfig) {
        this.initGPUBuffer(config);
    }

    protected initGPUBuffer(config: FlameSimulatorConfig) {
        let device = webGPUContext.device;

        const { NUM, SPAWN_RADIUS, BASE_LIFETIME, MAX_ADDITIONAL_LIFETIME, NUMBER_OF_BONES } = config;

        const position = new Float32Array(4 * NUM);
        for (let i = 0; i < NUM; ++i) {
            position[i * 4 + 0] = SPAWN_RADIUS * Math.pow(Math.random(), 1 / 3) * Math.sqrt(1.0 - Math.pow(Math.random() * 2.0 - 1.0, 2)) * Math.cos(Math.random() * 2.0 * Math.PI); // x
            position[i * 4 + 1] = SPAWN_RADIUS * Math.pow(Math.random(), 1 / 3) * Math.sqrt(1.0 - Math.pow(Math.random() * 2.0 - 1.0, 2)) * Math.sin(Math.random() * 2.0 * Math.PI); // y
            position[i * 4 + 2] = SPAWN_RADIUS * Math.pow(Math.random(), 1 / 3) * (Math.random() * 2.0 - 1.0); // z
            position[i * 4 + 3] = BASE_LIFETIME * Math.random(); // w
            // console.log(position[i * 4 + 0], position[i * 4 + 1], position[i * 4 + 2]);
        }
        this.mPositionBuffer = new ComputeGPUBuffer(position.length);
        this.mPositionBuffer.setFloat32Array("", position);
        this.mPositionBuffer.apply();

        this.mNewPositionBuffer = new ComputeGPUBuffer(position.length);
        
        const initbonePositions = new Float32Array(4 * NUM);
        this.mBonePositionsBuffer = new ComputeGPUBuffer(initbonePositions.length);

        const initboneIndices = new Float32Array(4 * NUM);
        this.mBoneIndicesBuffer = new ComputeGPUBuffer(initboneIndices.length);

        const initboneWeights = new Float32Array(4 * NUM);
        this.mBoneWeightsBuffer = new ComputeGPUBuffer(initboneWeights.length);
        
        const initboneMatrices = new Float32Array(4 * NUMBER_OF_BONES * 3);
        this.mBoneMatricesBuffer = new ComputeGPUBuffer(initboneMatrices.length);

        const { PRESIMULATION_DELTA_TIME, INITIAL_TURBULENCE, NOISE_OCTAVES, SCALE } = config;
        this.mInputBuffer = new ComputeGPUBuffer(8);
        this.mInputBuffer.setFloat("count", NUM);
        this.mInputBuffer.setFloat("time", PRESIMULATION_DELTA_TIME);
        this.mInputBuffer.setFloat("deltatime", PRESIMULATION_DELTA_TIME);
        this.mInputBuffer.setFloat("persistence", INITIAL_TURBULENCE);
        this.mInputBuffer.setFloat("OCTAVES", NOISE_OCTAVES);
        this.mInputBuffer.setFloat("SCALE", SCALE);
        this.mInputBuffer.apply();
    }

    public updateInput(time: number, deltaTime: number) {
        this.mInputBuffer.setFloat("time", time);
        this.mInputBuffer.setFloat("deltatime", deltaTime);
    }

    public updateInputData() {
        this.mInputBuffer.apply();
    }
}

class FlameSimulatorPipeline extends FlameSimulatorBuffer {
    protected mConfig: FlameSimulatorConfig;
    protected mCopyBoneMatrixComputeShader: ComputeShader;
    protected mSimulationComputeShader: ComputeShader;
    protected mCopyComputeShader: ComputeShader;
    protected mFirstFrame: boolean = false;
    protected mAnimatorComponent: AnimatorComponent;
    protected mSkinnedMeshRenderer: SkinnedMeshRenderer2;
    constructor(config: FlameSimulatorConfig, skeletonAnimation: AnimatorComponent, skinnedMeshRenderer: SkinnedMeshRenderer2) {
        super(config);
        this.mConfig = config;
        this.mAnimatorComponent = skeletonAnimation;
        this.mSkinnedMeshRenderer = skinnedMeshRenderer;
    }

    public get positionBuffer(): ComputeGPUBuffer {
        return this.mPositionBuffer;
    }

    public initParticle(attributeArrays: Map<string, VertexAttributeData>) {
        const { NUM } = this.mConfig;

        let indicesAttr = attributeArrays.get(VertexAttributeName.indices);
        let positionAttr = attributeArrays.get(VertexAttributeName.position);
        let jointsAttr = attributeArrays.get(VertexAttributeName.joints0);
        let weightAttr = attributeArrays.get(VertexAttributeName.weights0);

        var bonePositions = new Float32Array(NUM * 4);
        var boneIndices = new Float32Array(NUM * 4);
        var boneWeights = new Float32Array(NUM * 4);

        for (var i = 0; i < NUM; ++i) {
            let triangleCount = indicesAttr.data.length / 3;
            let index = i % triangleCount; // Math.floor(Math.random() * triangleCount);

            let vertexIndexA = indicesAttr.data[index + 0];
            let vertexIndexB = indicesAttr.data[index + 1];
            let vertexIndexC = indicesAttr.data[index + 2];

            let vertexPositionA = [positionAttr.data[vertexIndexA * 3 + 0], positionAttr.data[vertexIndexA * 3 + 1], positionAttr.data[vertexIndexA * 3 + 2]];
            let vertexPositionB = [positionAttr.data[vertexIndexB * 3 + 0], positionAttr.data[vertexIndexB * 3 + 1], positionAttr.data[vertexIndexB * 3 + 2]];
            let vertexPositionC = [positionAttr.data[vertexIndexC * 3 + 0], positionAttr.data[vertexIndexC * 3 + 1], positionAttr.data[vertexIndexC * 3 + 2]];

            let vertexJointIndexA = [jointsAttr.data[vertexIndexA * 4 + 0], jointsAttr.data[vertexIndexA * 4 + 1], jointsAttr.data[vertexIndexA * 4 + 2], jointsAttr.data[vertexIndexA * 4 + 3]];
            let vertexJointIndexB = [jointsAttr.data[vertexIndexB * 4 + 0], jointsAttr.data[vertexIndexB * 4 + 1], jointsAttr.data[vertexIndexB * 4 + 2], jointsAttr.data[vertexIndexB * 4 + 3]];
            let vertexJointIndexC = [jointsAttr.data[vertexIndexC * 4 + 0], jointsAttr.data[vertexIndexC * 4 + 1], jointsAttr.data[vertexIndexC * 4 + 2], jointsAttr.data[vertexIndexC * 4 + 3]];

            let vertexJointWeightA = [weightAttr.data[vertexIndexA * 4 + 0], weightAttr.data[vertexIndexA * 4 + 1], weightAttr.data[vertexIndexA * 4 + 2], weightAttr.data[vertexIndexA * 4 + 3]];
            let vertexJointWeightB = [weightAttr.data[vertexIndexB * 4 + 0], weightAttr.data[vertexIndexB * 4 + 1], weightAttr.data[vertexIndexB * 4 + 2], weightAttr.data[vertexIndexB * 4 + 3]];
            let vertexJointWeightC = [weightAttr.data[vertexIndexC * 4 + 0], weightAttr.data[vertexIndexC * 4 + 1], weightAttr.data[vertexIndexC * 4 + 2], weightAttr.data[vertexIndexC * 4 + 3]];

            var u = Math.random(),
                v = Math.random();
            var tmp = Math.sqrt(u);
            var a = 1 - tmp;
            var b = v * tmp;
            var c = 1 - a - b;

            var weightsByIndex: { [key: number]: any } = {};

            for (var n = 0; n < 4; ++n) {
                if (weightsByIndex[vertexJointIndexA[n]] === undefined) {
                    weightsByIndex[vertexJointIndexA[n]] = vertexJointWeightA[n] * a;
                } else {
                    weightsByIndex[vertexJointIndexA[n]] += vertexJointWeightA[n] * a;
                }
            }

            for (var n = 0; n < 4; ++n) {
                if (weightsByIndex[vertexJointIndexB[n]] === undefined) {
                    weightsByIndex[vertexJointIndexB[n]] = vertexJointWeightB[n] * b;
                } else {
                    weightsByIndex[vertexJointIndexB[n]] += vertexJointWeightB[n] * b;
                }
            }

            for (var n = 0; n < 4; ++n) {
                if (weightsByIndex[vertexJointIndexC[n]] === undefined) {
                    weightsByIndex[vertexJointIndexC[n]] = vertexJointWeightC[n] * c;
                } else {
                    weightsByIndex[vertexJointIndexC[n]] += vertexJointWeightC[n] * c;
                }
            }

            var j = 0;
            for (let index in weightsByIndex) {
                boneIndices[i * 4 + j] = parseInt(index);
                boneWeights[i * 4 + j] = weightsByIndex[index];
                j++;
            }

            var point = this.barycentricToCartesian(vertexPositionA, vertexPositionB, vertexPositionC, a, b, c);

            bonePositions[i * 4] = point[0];
            bonePositions[i * 4 + 1] = point[1];
            bonePositions[i * 4 + 2] = point[2];
            bonePositions[i * 4 + 3] = 0;
        }

        this.mBonePositionsBuffer = new ComputeGPUBuffer(bonePositions.length);
        this.mBonePositionsBuffer.setFloat32Array("", bonePositions);
        this.mBonePositionsBuffer.apply();
        this.mBoneIndicesBuffer = new ComputeGPUBuffer(boneIndices.length);
        this.mBoneIndicesBuffer.setFloat32Array("", boneIndices);
        this.mBoneIndicesBuffer.apply();
        this.mBoneWeightsBuffer = new ComputeGPUBuffer(boneWeights.length);
        this.mBoneWeightsBuffer.setFloat32Array("", boneWeights);
        this.mBoneWeightsBuffer.apply();

        this.initPipeline();
    }

    public compute(command: GPUCommandEncoder) {
        const { BASE_LIFETIME, PRESIMULATION_DELTA_TIME, NUM, GROUP_SIZE } = this.mConfig;

        let compute_command = GPUContext.beginCommandEncoder();
        GPUContext.computeCommand(compute_command, [this.mCopyBoneMatrixComputeShader]);

        for (var i = 0; i < (this.mFirstFrame ? BASE_LIFETIME / PRESIMULATION_DELTA_TIME : 1); ++i) {
            GPUContext.computeCommand(compute_command, [this.mSimulationComputeShader, this.mCopyComputeShader]);
            // GPUContext.computeCommand(compute_command, [this.mSimulationComputeShader]);
        }

        GPUContext.endCommandEncoder(command);

        this.mFirstFrame = false;
    }

    protected initPipeline() {

        this.mBoneMatrixBuffer = new ComputeGPUBuffer(16 * this.mAnimatorComponent.numJoint);

        this.mCopyBoneMatrixComputeShader = new ComputeShader(CopyBoneMatrix.cs);
        this.mCopyBoneMatrixComputeShader.setStorageBuffer(`matrixs`, GlobalBindGroup.modelMatrixBindGroup.matrixBufferDst);
        this.mCopyBoneMatrixComputeShader.setStorageBuffer(`jointsMatrixIndexTable`, this.mAnimatorComponent.jointMatrixIndexTableBuffer);
        this.mCopyBoneMatrixComputeShader.setStorageBuffer(`bonesTransformMatrix`, this.mBoneMatrixBuffer);
        this.mCopyBoneMatrixComputeShader.workerSizeX = Math.ceil(this.mAnimatorComponent.numJoint / 16);

        const { NUM, GROUP_SIZE } = this.mConfig;
        this.mSimulationComputeShader = new ComputeShader(Simulation.cs);
        this.mSimulationComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mSimulationComputeShader.setStorageBuffer(`position`, this.mPositionBuffer);
        this.mSimulationComputeShader.setStorageBuffer(`newposition`, this.mNewPositionBuffer);
        this.mSimulationComputeShader.setStorageBuffer(`boneposition`, this.mBonePositionsBuffer);
        this.mSimulationComputeShader.setStorageBuffer(`boneindices`, this.mBoneIndicesBuffer);
        this.mSimulationComputeShader.setStorageBuffer(`boneweights`, this.mBoneWeightsBuffer);

        this.mSimulationComputeShader.setStorageBuffer(`bonesTransform`, this.mBoneMatrixBuffer);
        this.mSimulationComputeShader.setStorageBuffer(`bonesInverseMatrix`, this.mSkinnedMeshRenderer.inverseBindMatrixBuffer);

        this.mSimulationComputeShader.workerSizeX = Math.ceil(NUM / GROUP_SIZE);

        this.mCopyComputeShader = new ComputeShader(Copy.cs);
        this.mCopyComputeShader.setStorageBuffer(`input`, this.mInputBuffer);
        this.mCopyComputeShader.setStorageBuffer(`position`, this.mPositionBuffer);
        this.mCopyComputeShader.setStorageBuffer(`newposition`, this.mNewPositionBuffer);
        this.mCopyComputeShader.workerSizeX = Math.ceil(NUM / GROUP_SIZE);
    }

    protected barycentricToCartesian(vertexA: number[], vertexB: number[], vertexC: number[], a: number, b: number, c: number) {
        var result = [vertexA[0] * a + vertexB[0] * b + vertexC[0] * c, vertexA[1] * a + vertexB[1] * b + vertexC[1] * c, vertexA[2] * a + vertexB[2] * b + vertexC[2] * c];
        return result;
    }
}

class FlameSimulator extends MeshRenderer {
    protected mConfig: FlameSimulatorConfig;
    protected mFlameComputePipeline: FlameSimulatorPipeline;
    protected mGlobalArgs: ComputeGPUBuffer;
    constructor() {
        super();
        this.addRendererMask(RendererMask.Particle)
        this.mConfig = {
            GROUP_SIZE: 128,
            NUM: 60000,
            SPAWN_RADIUS: 0.1,
            BASE_LIFETIME: 0.7,
            MAX_ADDITIONAL_LIFETIME: 5,
            PRESIMULATION_DELTA_TIME: 0.2,
            INITIAL_SPEED: 1,
            INITIAL_TURBULENCE: 0.4,
            NOISE_OCTAVES: 3,
            SCALE: 10,
            NUMBER_OF_BONES: 57,
            ANIMATION_FPS: 30,
            ANIMATION_LENGTH: 0.7333,
            MAX_DELTA_TIME: 2,
        };
    }
    public setConfig(config: FlameSimulatorConfig) {
        this.mConfig = config;
    }

    public start() {
        var globalArgsData = new Float32Array(4);
        this.mGlobalArgs = new ComputeGPUBuffer(globalArgsData.byteLength);
        globalArgsData[0] = this.transform.worldMatrix.index;
        this.mGlobalArgs.setFloat32Array("", globalArgsData);
        this.mGlobalArgs.apply();

        this.instanceCount = this.mConfig.NUM;
    }

    public stop() { }

    public onCompute(view: View3D, command?: GPUCommandEncoder) {
        if (this.mFlameComputePipeline) {
            this.mFlameComputePipeline.updateInput(Time.time / 1000.0, Time.delta / 1000.0);
            this.mFlameComputePipeline.updateInputData();
            this.mFlameComputePipeline.compute(command);
        }
    }

    public nodeUpdate(view: View3D, passType: PassType, renderPassState: RendererPassState, clusterLightingBuffer: ClusterLightingBuffer) {
        if (!this.mFlameComputePipeline) {
            let animatorComponent = this.object3D.getComponentsInChild(AnimatorComponent)[0];
            let skinnedMeshRenderer = this.object3D.getComponentsInChild(SkinnedMeshRenderer2)[0];
            let attributeArrays = skinnedMeshRenderer.geometry.vertexAttributeMap;
            this.mFlameComputePipeline = new FlameSimulatorPipeline(this.mConfig, animatorComponent, skinnedMeshRenderer);
            this.mFlameComputePipeline.initParticle(attributeArrays);

            let material = this.materials[0];
            let passes = material.getPass(passType)
            if (passes) {
                for (let i = 0; i < passes.length; i++) {
                    var subs = passes[i];
                    subs.setStorageBuffer(`particlePosition`, this.mFlameComputePipeline.positionBuffer);
                    subs.setStorageBuffer(`particleGlobalData`, this.mGlobalArgs);
                }
            }
        }
        super.nodeUpdate(view, passType, renderPassState, clusterLightingBuffer);
    }
}

class FlameSimulatorMaterial extends Material {
    doubleSided: any;
    constructor() {
        super();

        ShaderLib.register("FlameRenderShader", FlameRenderShader);
        let shader = new Shader();
        let pass = new RenderShaderPass('FlameRenderShader', 'FlameRenderShader');
        pass.setShaderEntry(`VertMain`, `FragMain`)

        shader.addRenderPass(pass);
        shader.setUniformVector4(`transformUV1`, new Vector4(0, 0, 1, 1));
        shader.setUniformVector4(`transformUV2`, new Vector4(0, 0, 1, 1));
        shader.setUniformColor(`baseColor`, new Color());
        shader.setUniformFloat(`alphaCutoff`, 0.5);
        shader.setUniformFloat(`shadowBias`, 0.00035);

        let shaderState = pass.shaderState;
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

let FlameRenderShader = /* wgsl */ `
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
        let lifetime = clamp(particlePos.w + 0.2, 0.0, 1.0);

        let beginColor = vec3<f32>(0.0, 1.0, 0.0);
        let endColor = vec3<f32>(0.0, 0.0, 0.0);
        let finalColor = beginColor + (endColor - beginColor) * (1.0 - lifetime);
        ORI_VertexOut.varying_Color = vec4<f32>(finalColor, 1.0);
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
            SCALE: f32,
            rsv0: f32,
            rsv1: f32,
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

class CopyBoneMatrix {
    public static cs: string = /* wgsl */ `
        @group(0) @binding(0) var<storage, read> matrixs: array<mat4x4<f32>>;
        @group(0) @binding(1) var<storage, read> jointsMatrixIndexTable: array<f32>;
        @group(0) @binding(2) var<storage, read_write> bonesTransformMatrix: array<mat4x4<f32>>;

        @compute @workgroup_size(16)
        fn CsMain(
            @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>,
            @builtin(num_workgroups) GroupSize: vec3<u32>
        ) {
            var index = GlobalInvocationID.x;
            bonesTransformMatrix[index] = matrixs[u32(jointsMatrixIndexTable[index])];
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
            SCALE: f32,
            rsv0: f32,
            rsv1: f32,
        };

    @group(0) @binding(0) var<storage, read> input: InputArgs;
    @group(0) @binding(1) var<storage, read> position: array<vec4<f32>>;
    @group(0) @binding(2) var<storage, read_write> newposition: array<vec4<f32>>;
    
    @group(1) @binding(0) var<storage, read> boneposition: array<vec4<f32>>;
    @group(1) @binding(1) var<storage, read> boneindices: array<vec4<f32>>;
    @group(1) @binding(2) var<storage, read> boneweights: array<vec4<f32>>;
    @group(1) @binding(3) var<storage, read> bonesTransform: array<mat4x4<f32>>;
    @group(1) @binding(4) var<storage, read> bonesInverseMatrix: array<mat4x4<f32>>;
    
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
        
        var time = input.time;
        var deltatime = input.deltatime;
        var persistence = input.persistence;
        var OCTAVES = u32(input.OCTAVES);
        var scalein = input.SCALE;
    
        var oldPosition = vec3<f32>(position[index][0], position[index][1], position[index][2]);
        var noisePosition = oldPosition * 2.0;
        var noiseTime = time / 2.0;
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
                                  yNoisePotentialDerivatives[0] - xNoisePotentialDerivatives[1]) * 0.075 * scalein;
        var velocity = vec3(-3.0, 0.0, 0.5);
        var totalVelocity = velocity + noiseVelocity;
        var oldLifetime = position[index][3];
        if (oldLifetime > 0.55000000) {
            totalVelocity = vec3(0.0, 0.0, 0.0);
        }
        var temp = oldPosition + totalVelocity * deltatime;
        var newLifetime = oldLifetime - deltatime;
        if (newLifetime < 0.0) {
            let jointIndex_0 = i32(floor(boneindices[index][0]));
            let jointIndex_1 = i32(floor(boneindices[index][1]));
            let jointIndex_2 = i32(floor(boneindices[index][2]));
            let jointIndex_3 = i32(floor(boneindices[index][3]));

            let jointWeight0 = boneweights[index][0];
            let jointWeight1 = boneweights[index][1];
            let jointWeight2 = boneweights[index][2];
            let jointWeight3 = boneweights[index][3];

            let joint_0 = bonesTransform[jointIndex_0] * bonesInverseMatrix[jointIndex_0] * jointWeight0;
            let joint_1 = bonesTransform[jointIndex_1] * bonesInverseMatrix[jointIndex_1] * jointWeight1;
            let joint_2 = bonesTransform[jointIndex_2] * bonesInverseMatrix[jointIndex_2] * jointWeight2;
            let joint_3 = bonesTransform[jointIndex_3] * bonesInverseMatrix[jointIndex_3] * jointWeight3;
  
            let result = (joint_0 + joint_1 + joint_2 + joint_3) * vec4<f32>(boneposition[index].xyz, 1.0);//(joint_0 + joint_1 + joint_2 + joint_3) * 

            temp = result.xyz + totalVelocity * 0.05; // (position0 * weight0 + position1 * weight1 + position2 * weight2 + position3 * weight3) / 200.0;
            newLifetime = 0.70000000 + newLifetime;
        }
        
        newposition[index][0] = temp.x;
        newposition[index][1] = temp.y;
        newposition[index][2] = temp.z;
        newposition[index][3] = newLifetime;
    }

    `;
}

new Demo_Flame().run()
