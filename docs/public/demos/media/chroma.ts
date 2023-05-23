import { Engine3D, Vector3, Scene3D, Object3D, Camera3D, View3D, MeshRenderer, HoverCameraController, PlaneGeometry, Color } from '@orillusion/core'
import { VideoTexture, ChromaKeyMaterial } from '@orillusion/media-extention'
import * as dat from 'dat.gui'

await Engine3D.init()
let scene = new Scene3D()
let camera = new Object3D()
scene.addChild(camera)
let mainCamera = camera.addComponent(Camera3D)
mainCamera.perspective(60, Engine3D.aspect, 0.1, 10000.0)
let hc = camera.addComponent(HoverCameraController)
hc.setCamera(0, 0, 2)

// create a video texture
let videoTexture = new VideoTexture()
await videoTexture.load('https://cdn.orillusion.com/videos/chromakey.webm')
// create a chromakey material
let mat = new ChromaKeyMaterial()
mat.baseMap = videoTexture

// set target color to filter the background
mat.keyColor = new Color(0, 1, 0, 0)
mat.colorCutoff = 0.06
mat.colorFeathering = 0.25

let GUIHelp = new dat.GUI()
GUIHelp.addFolder('ChromaKek')
GUIHelp.addColor({ color: [0, 255, 0] }, 'color').onChange((v) => {
    mat.keyColor = new Color(0, 1, 0).copyFromArray(v)
})
GUIHelp.add(mat, 'colorCutoff', 0, 1, 0.01)
GUIHelp.add(mat, 'colorFeathering', 0, 1, 0.01)
GUIHelp.add(mat, 'sharpening', 0, 1, 0.01)

// create a 2D plane to play the video
let planeObj = new Object3D()
let mr = planeObj.addComponent(MeshRenderer)
mr.geometry = new PlaneGeometry(2, 2, 10, 10, Vector3.Z_AXIS)
mr.material = mat
scene.addChild(planeObj)

let view = new View3D()
view.scene = scene
view.camera = mainCamera
// start render
Engine3D.startRenderView(view)
