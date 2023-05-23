import { Engine3D, Scene3D, Object3D, Camera3D, AtmosphericComponent, View3D, UnLitMaterial, MeshRenderer, PlaneGeometry, BitmapTexture2D, Vector4, OrbitController, DirectLight, Color } from '@orillusion/core'

await Engine3D.init()
let scene = new Scene3D()
let camera = new Object3D()
camera.y = 10
camera.z = 30
scene.addChild(camera)
let mainCamera = camera.addComponent(Camera3D)
mainCamera.perspective(60, Engine3D.aspect, 0.1, 10000.0)
let oribit = camera.addComponent(OrbitController)
oribit.autoRotate = true

// add a dir light
let lightObj = new Object3D()
lightObj.rotationX = -45
let light = lightObj.addComponent(DirectLight)
light.lightColor = new Color(1.0, 1.0, 1.0, 1.0)
light.intensity = 1
scene.addChild(lightObj)

// add an Atmospheric sky enviroment
scene.addComponent(AtmosphericComponent).sunY = 0.6
// create a view with target scene and camera
let view = new View3D()
view.scene = scene
view.camera = mainCamera
// start render
Engine3D.startRenderView(view)

const imageCanvas = document.createElement('canvas')
const context = imageCanvas.getContext('2d') as CanvasRenderingContext2D
{
    imageCanvas.width = imageCanvas.height = 128
    context.fillStyle = '#444'
    context.fillRect(0, 0, 128, 128)
    context.fillStyle = '#fff'
    context.fillRect(0, 0, 64, 64)
    context.fillRect(64, 64, 64, 64)
}
const image = imageCanvas.toDataURL('image/png')
let texture = new BitmapTexture2D()
texture.useMipmap = true
await texture.load(image)
let mat = new UnLitMaterial()
mat.baseMap = texture
mat.uvTransform_1 = new Vector4(0, 0, 100, 100)

let plane = new PlaneGeometry(1000, 1000, 10, 10)
let planeObj = new Object3D()
let mr = planeObj.addComponent(MeshRenderer)
mr.geometry = plane
mr.material = mat
scene.addChild(planeObj)

let select = document.createElement('select')
select.innerHTML = `
    <option value="true">Use MipMap</option>
    <option value="false">No MipMap</option>
    `
select.setAttribute('style', 'position:fixed;right:5px;top:5px')
document.body.appendChild(select)

select.addEventListener('change', () => {
    texture.useMipmap = select.value === 'true'
})
