import { Engine3D, Vector3, Scene3D, Object3D, Camera3D, MeshRenderer, HoverCameraController, PlaneGeometry, View3D } from '@orillusion/core'

import { ImageMaterial } from '@orillusion/media-extention'

await Engine3D.init()
let scene = new Scene3D()
let camera = new Object3D()
scene.addChild(camera)
let mainCamera = camera.addComponent(Camera3D)
mainCamera.perspective(60, Engine3D.aspect, 0.1, 10000.0)
let hc = camera.addComponent(HoverCameraController)
hc.setCamera(0, 0, 2)

// create a 2D image texture
let texture = await Engine3D.res.loadTexture('https://cdn.orillusion.com/gltfs/cube/material_02.png')
// create a image material
let mat = new ImageMaterial()
mat.baseMap = texture

// create a 2D plane to show the image
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
