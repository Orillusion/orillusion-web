import { Engine3D, Vector3, Scene3D, Object3D, Camera3D, AtmosphericComponent, View3D, UnLitMaterial, MeshRenderer, HoverCameraController, PlaneGeometry, Vector4, GPUAddressMode, DirectLight, Color } from '@orillusion/core'

await Engine3D.init()
let scene = new Scene3D()
let camera = new Object3D()
scene.addChild(camera)
let mainCamera = camera.addComponent(Camera3D)
mainCamera.perspective(60, Engine3D.aspect, 0.1, 10000.0)
let hc = camera.addComponent(HoverCameraController)
hc.setCamera(0, 0, 2)

// add a dir light
let lightObj = new Object3D()
lightObj.rotationX = -45
let light = lightObj.addComponent(DirectLight)
light.lightColor = new Color(1.0, 1.0, 1.0, 1.0)
light.intensity = 10
scene.addChild(lightObj)

// add an Atmospheric sky enviroment
scene.addComponent(AtmosphericComponent).sunY = 0.6
// create a view with target scene and camera
let view = new View3D()
view.scene = scene
view.camera = mainCamera
// start render
Engine3D.startRenderView(view)

let texture = await Engine3D.res.loadTexture('https://cdn.orillusion.com/images/webgpu.webp')
// texture.addressModeU = GPUAddressMode.repeat;
// texture.addressModeV = GPUAddressMode.repeat;
let mat = new UnLitMaterial()
mat.uvTransform_1 = new Vector4(0, 0, 2, 2)
mat.baseMap = texture

let planeObj = new Object3D()
let mr = planeObj.addComponent(MeshRenderer)
mr.geometry = new PlaneGeometry(2, 2, 10, 10, Vector3.Z_AXIS)
mr.material = mat
scene.addChild(planeObj)

let select = document.createElement('select')
select.innerHTML = `
    <option value="repeat">Repeat</option>
    <option value="mirror_repeat">Mirror-Repeat</option>
    <option value="clamp_to_edge">Clamp-to-Edge</option>
    `
select.setAttribute('style', 'position:fixed;right:5px;top:5px')
document.body.appendChild(select)

select.addEventListener('change', () => {
    texture.addressModeU = GPUAddressMode[select.value]
    texture.addressModeV = GPUAddressMode[select.value]
})
