var m = Object.defineProperty;
var h = (t, e, r) => e in t ? m(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var o = (t, e, r) => (h(t, typeof e != "symbol" ? e + "" : e, r), r);
import { registerMaterial as c, MaterialBase as s, ShaderLib as u, Vector4 as n, Color as l, BlendMode as p, Engine3D as d, Texture as g, webGPUContext as f } from "@orillusion/core";
const x = `#include "Common_vert"\r
#include "Common_frag"\r
#include "UnLit_frag"\r
    \r
struct StandMaterial {\r
    transformUV1:vec4<f32>,\r
    transformUV2:vec4<f32>,\r
\r
    baseColor: vec4<f32>,\r
    rectClip: vec4<f32>,\r
\r
    keyColor: vec4<f32>,\r
    colorCutoff: f32,\r
    colorFeathering: f32,\r
    maskFeathering: f32,\r
    sharpening: f32,\r
    despoil: f32,\r
    despoilLuminanceAdd: f32,\r
};\r
\r
@group(1) @binding(auto)\r
var baseMapSampler: sampler;\r
@group(1) @binding(auto)\r
var baseMap: texture_external;\r
\r
@group(2) @binding(0)\r
var<uniform> materialUniform: StandMaterial;\r
\r
fn vert(inputData:VertexAttributes) -> VertexOutput {\r
    ORI_Vert(inputData) ;\r
    return ORI_VertexOut ;\r
}\r
\r
fn frag(){\r
    let baseColor = materialUniform.baseColor;\r
    let transformUV1 = materialUniform.transformUV1;\r
    let uv = transformUV1.zw * ORI_VertexVarying.fragUV0.xy + transformUV1.xy; \r
    if(uv.x < materialUniform.rectClip.x || uv.x > (1.0-materialUniform.rectClip.z)) {\r
        discard;\r
    }\r
    if(uv.y < materialUniform.rectClip.y || uv.y > (1.0-materialUniform.rectClip.w)) {\r
        discard;\r
    }\r
\r
    let texSize = textureDimensions(baseMap).xy;\r
    let color = textureLoad(baseMap, vec2<i32>( i32(uv.x * f32(texSize.x)), i32(uv.y * f32(texSize.y))) );\r
\r
    let key_cb = rgb2cb(materialUniform.keyColor.rgb);\r
    let key_cr = rgb2cr(materialUniform.keyColor.rgb);\r
    let pixelWidth: vec2<f32> = vec2<f32>(1.0 / f32(texSize.x), 0);\r
    let pixelHeight: vec2<f32> = vec2<f32>(0, 1.0 / f32(texSize.y));\r
\r
    let c = maskedTex2D(uv, texSize, key_cb, key_cr);\r
    let r = maskedTex2D(uv + pixelWidth, texSize, key_cb, key_cr);\r
    let l = maskedTex2D(uv - pixelWidth, texSize, key_cb, key_cr);\r
    let d = maskedTex2D(uv + pixelHeight, texSize, key_cb, key_cr); \r
    let u = maskedTex2D(uv - pixelHeight, texSize, key_cb, key_cr);\r
    let rd = maskedTex2D(uv + pixelWidth + pixelHeight, texSize, key_cb, key_cr) * 0.707;\r
    let dl = maskedTex2D(uv - pixelWidth + pixelHeight, texSize, key_cb, key_cr) * 0.707;\r
    let lu = maskedTex2D(uv - pixelHeight - pixelWidth, texSize, key_cb, key_cr) * 0.707;\r
    let ur = maskedTex2D(uv + pixelWidth - pixelHeight, texSize, key_cb, key_cr) * 0.707;\r
    let blurContribution = (r + l + d + u + rd + dl + lu + ur + c) * 0.12774655;\r
    let smoothedMask = smoothstep(materialUniform.sharpening, 1, mix(c, blurContribution, materialUniform.maskFeathering));\r
    var result = color * smoothedMask;\r
\r
    let v = (2 * result.b + result.r) / 4;\r
    if(result.g > v) {\r
        result.g = mix(result.g, v, materialUniform.despoil);\r
    }\r
    let dif = (color - result);\r
    let desaturatedDif = rgb2y(dif.xyz);\r
    result += mix(0, desaturatedDif, materialUniform.despoilLuminanceAdd);\r
\r
    ORI_ShadingInput.BaseColor = result * baseColor ;\r
    UnLit();\r
}\r
\r
fn rgb2cr(color: vec3<f32>) -> f32 {\r
    return 0.5 + color.r * 0.5 - color.g * 0.418688 - color.b * 0.081312;\r
}\r
\r
fn rgb2y(color: vec3<f32>) -> f32 {\r
    return color.r * 0.299 + color.g * 0.587 + color.b * 0.114;\r
}\r
\r
fn rgb2cb(color: vec3<f32>) -> f32 {\r
    return 0.5 + color.r * -0.168736 - color.g * 0.331264 + color.b * 0.5;\r
}\r
\r
fn colorclose(Cb_p: f32, Cr_p: f32, Cb_key: f32, Cr_key: f32, tola: f32, tolb: f32) -> f32 {\r
    let temp = (Cb_key - Cb_p) * (Cb_key - Cb_p) + (Cr_key - Cr_p) * (Cr_key - Cr_p);\r
    let tola2 = tola * tola;\r
    let tolb2 = tolb * tolb;\r
    if (temp < tola2) {\r
        return 0;\r
    }\r
    if (temp < tolb2) {\r
        return (temp - tola2) / (tolb2 - tola2);\r
    }\r
    return 1;\r
}\r
\r
fn maskedTex2D(uv: vec2<f32>, texSize: vec2<u32>, key_cb: f32, key_cr: f32) -> f32 {\r
    let color = textureLoad(baseMap, vec2<i32>( i32(uv.x * f32(texSize.x)), i32(uv.y * f32(texSize.y))) );\r
    let pix_cb = rgb2cb(color.rgb);\r
    let pix_cr = rgb2cr(color.rgb);\r
    return colorclose(pix_cb, pix_cr, key_cb, key_cr, materialUniform.colorCutoff, materialUniform.colorFeathering);\r
}\r
`;
class v extends s {
  /**
   * Create new ChromaKey material
   */
  constructor() {
    super(), u.register("ChromaKeyShader", x);
    let e = this.setShader("ChromaKeyShader", "ChromaKeyShader");
    e.setShaderEntry("VertMain", "FragMain"), e.setUniformVector4("transformUV1", new n(0, 0, 1, 1)), e.setUniformVector4("transformUV2", new n(0, 0, 1, 1)), e.setUniformColor("baseColor", new l()), e.setUniformVector4("rectClip", new n(0, 0, 0, 0)), e.setUniformFloat("alphaCutoff", 0.5), e.setUniformColor("keyColor", new l(0, 1, 0, 0)), e.setUniformFloat("colorCutoff", 0.4), e.setUniformFloat("colorFeathering", 0.5), e.setUniformFloat("maskFeathering", 1), e.setUniformFloat("sharpening", 0.5), e.setUniformFloat("despoil", 0.6), e.setUniformFloat("despoilLuminanceAdd", 0);
    let r = e.shaderState;
    r.acceptShadow = !1, r.receiveEnv = !1, r.acceptGI = !1, r.useLight = !1, r.castShadow = !1, r.useZ = !1, r.blendMode = p.ALPHA, this.baseMap = d.res.whiteTexture;
  }
  /**
   * Set the clip rect area
   */
  set rectClip(e) {
    this.renderShader.uniforms.rectClip.vector4 = e;
  }
  /**
   * Get current clip rect area
   */
  get rectClip() {
    return this.renderShader.uniforms.rectClip.vector4;
  }
  /**
   * Set the chromakey color
   */
  set keyColor(e) {
    this.renderShader.uniforms.keyColor.color = e;
  }
  /**
   * Get the chromakey color
   */
  get keyColor() {
    return this.renderShader.uniforms.keyColor.color;
  }
  /**
   * Set the color cutoff factor
   */
  set colorCutoff(e) {
    this.renderShader.uniforms.colorCutoff.value = e;
  }
  /**
   * Get the color cutoff factor
   */
  get colorCutoff() {
    return this.renderShader.uniforms.colorCutoff.value;
  }
  /**
   * Set the color feather factor
   */
  set colorFeathering(e) {
    this.renderShader.uniforms.colorFeathering.value = e;
  }
  /**
   * Get the color feather factor
   */
  get colorFeathering() {
    return this.renderShader.uniforms.colorFeathering.value;
  }
  /**
   * Set the mask feather factor
   */
  set maskFeathering(e) {
    this.renderShader.uniforms.maskFeathering.value = e;
  }
  /**
   * Get the mask feather factor
   */
  get maskFeathering() {
    return this.renderShader.uniforms.maskFeathering.value;
  }
  /**
   * Set the sharpen factor
   */
  set sharpening(e) {
    this.renderShader.uniforms.sharpening.value = e;
  }
  /**
   * Get the sharpen factor
   */
  get sharpening() {
    return this.renderShader.uniforms.sharpening.value;
  }
  /**
   * Set the despoil factor
   */
  set despoil(e) {
    this.renderShader.uniforms.despoil.value = e;
  }
  /**
   * Get the despoil factor
   */
  get despoil() {
    return this.renderShader.uniforms.despoil.value;
  }
  /**
   * Set the despoil luminance factor
   */
  set despoilLuminanceAdd(e) {
    this.renderShader.uniforms.despoilLuminanceAdd.value = e;
  }
  /**
   * Get the despoil luminance factor
   */
  get despoilLuminanceAdd() {
    return this.renderShader.uniforms.despoilLuminanceAdd.value;
  }
  /**
   * Show a debug GUI
   */
  debug() {
  }
}
c("ChromaKeyMaterial", v);
const C = `#include "Common_vert"\r
#include "Common_frag"\r
#include "UnLit_frag"\r
#include "VideoUniform_frag"\r
\r
@group(1) @binding(auto)\r
var baseMapSampler: sampler;\r
@group(1) @binding(auto)\r
var baseMap: texture_2d<f32>;\r
\r
fn vert(inputData:VertexAttributes) -> VertexOutput {\r
    ORI_Vert(inputData) ;\r
    return ORI_VertexOut ;\r
}\r
\r
fn frag(){\r
    let transformUV1 = materialUniform.transformUV1;\r
\r
    let uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; \r
\r
    if(uv.x < materialUniform.rectClip.x || uv.x > (1.0-materialUniform.rectClip.z)) {\r
        discard;\r
    }\r
\r
    if(uv.y < materialUniform.rectClip.y || uv.y > (1.0-materialUniform.rectClip.w)) {\r
        discard;\r
    }\r
\r
    let videoColor = textureSample(baseMap, baseMapSampler, uv);\r
\r
    ORI_ShadingInput.BaseColor = videoColor * materialUniform.baseColor ;\r
    UnLit();\r
}`;
class V extends s {
  /**
   * Create a new ImageMaterial
   */
  constructor() {
    super(), u.register("ImageMaterialShader", C);
    let e = this.setShader("ImageMaterialShader", "ImageMaterialShader");
    e.setShaderEntry("VertMain", "FragMain"), e.setUniformVector4("transformUV1", new n(0, 0, 1, 1)), e.setUniformVector4("transformUV2", new n(0, 0, 1, 1)), e.setUniformColor("baseColor", new l()), e.setUniformVector4("rectClip", new n(0, 0, 0, 0)), e.setUniformFloat("alphaCutoff", 0.5);
    let r = e.shaderState;
    r.acceptShadow = !1, r.receiveEnv = !1, r.acceptGI = !1, r.useLight = !1, r.castShadow = !1, r.useZ = !1, this.baseMap = d.res.whiteTexture;
  }
  /**
   * Set the clip rect area
   */
  set rectClip(e) {
    this.renderShader.uniforms.rectClip.vector4 = e;
  }
  /**
   * Get the clip rect area
   */
  get rectClip() {
    return this.renderShader.uniforms.rectClip.vector4;
  }
  /**
   * Set no env Map
   */
  set envMap(e) {
  }
  /**
   * Set no shadow Map
   */
  set shadowMap(e) {
  }
  /**
   * Start debug GUI
   */
  debug() {
  }
}
const b = `#include "Common_vert"\r
#include "Common_frag"\r
#include "UnLit_frag"\r
#include "VideoUniform_frag"\r
\r
@group(1) @binding(auto)\r
var baseMapSampler: sampler;\r
@group(1) @binding(auto)\r
var baseMap: texture_external;\r
\r
fn vert(inputData:VertexAttributes) -> VertexOutput {\r
    ORI_Vert(inputData) ;\r
    return ORI_VertexOut ;\r
}\r
\r
fn frag(){\r
    var transformUV1 = materialUniform.transformUV1;\r
    var transformUV2 = materialUniform.transformUV2;\r
\r
    var uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; \r
\r
    if(uv.x < materialUniform.rectClip.x || uv.x > (1.0-materialUniform.rectClip.z)){\r
        discard;\r
    }\r
    if(uv.y < materialUniform.rectClip.y || uv.y > (1.0-materialUniform.rectClip.w)){\r
        discard;\r
    }\r
    \r
    let size = textureDimensions(baseMap).xy - 1;\r
    let iuv = vec2<i32>(uv * vec2<f32>(size));\r
    let videoColor = textureLoad(baseMap, iuv) ;\r
\r
    ORI_ShadingInput.BaseColor = videoColor * materialUniform.baseColor ;\r
    UnLit();\r
}`;
class U extends s {
  /**
   * Create new VideoMaterial
   */
  constructor() {
    super(), u.register("VideoShader", b);
    let e = this.setShader("VideoShader", "VideoShader");
    e.setShaderEntry("VertMain", "FragMain"), e.setUniformVector4("transformUV1", new n(0, 0, 1, 1)), e.setUniformVector4("transformUV2", new n(0, 0, 1, 1)), e.setUniformColor("baseColor", new l()), e.setUniformVector4("rectClip", new n(0, 0, 0, 0)), e.setUniformFloat("alphaCutoff", 0.5);
    let r = e.shaderState;
    r.acceptShadow = !1, r.receiveEnv = !1, r.acceptGI = !1, r.useLight = !1, r.castShadow = !1, r.useZ = !1, this.baseMap = d.res.whiteTexture;
  }
  /**
   * Set the clip rect area
   */
  set rectClip(e) {
    this.renderShader.uniforms.rectClip.vector4 = e;
  }
  /**
   * Get the clip rect area
   */
  get rectClip() {
    return this.renderShader.uniforms.rectClip.vector4;
  }
  /**
   * Set no envMap
   */
  set envMap(e) {
  }
  /**
   * Set no shadowMap
   */
  set shadowMap(e) {
  }
  /**
   * Start debug GUI
   */
  debug() {
  }
}
c("VideoMaterial", U);
class _ extends g {
  constructor() {
    super();
    o(this, "media");
    o(this, "external", !1);
    o(this, "_des");
    o(this, "videoTexture");
    this.useMipmap = !1, this.isVideoTexture = !0, this.samplerBindingLayout = null;
  }
  /**
   * load one Video Source
   * @param video the url of a video source, or a MediaStream object, or a HTMLVideoElement
   */
  async load(r) {
    let a, i;
    if (this.media && !this.external && (i = this.media), typeof r == "string")
      a = this.createVideo(), a.src = r;
    else if (r.constructor.name === "MediaStream")
      a = this.createVideo(), a.srcObject = r;
    else if (r.constructor.name === "HTMLVideoElement")
      this.external = !0, a = r;
    else
      throw new Error("no video or src provided");
    await a.play(), this.media = a, this._des = {
      source: this.media
    }, i && (i.pause(), i.src = i.srcObject = null, i.load());
  }
  getGPUTexture() {
    return null;
  }
  updateGPUTexture() {
  }
  getGPUView() {
    return this.samplerBindingLayout = null, this.videoTexture = f.device.importExternalTexture(this._des), this.noticeChange(), this.videoTexture;
  }
  noticeChange() {
    this.gpuSampler = f.device.createSampler(this), this._stateChangeRef.forEach((r, a) => {
      r();
    });
  }
  createVideo() {
    let r = document.createElement("video");
    return r.controls = !1, r.autoplay = !1, r.muted = !0, r.loop = !0, r.playsInline = !0, r.crossOrigin = "", r;
  }
}
export {
  v as ChromaKeyMaterial,
  V as ImageMaterial,
  U as VideoMaterial,
  _ as VideoTexture
};
