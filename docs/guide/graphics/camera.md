# 摄像机

相机是为用户显示或捕获虚拟世界的工具，好比现实世界中观察事物的眼睛，所有炫酷的影像都需要通过相机渲染。在每个场景中必须至少有一个相机才能查看到场景内的对象。`Orillusion` 已经封装了常用的 [相机类型](#相机类型) 和 [控制器](#相机组件)，用户也可以通过 [自定义组件](/guide/core/component) 为相机扩展功能。

## 基本用法
```ts
import { Object3D, Scene3D, Camera3D } from '@orillusion/core'
// 实例化一个场景
let scene = new Scene3D();
// 实例化一个节点
let cameraObj = new Object3D();
// 加载一个相机组件
let camera = cameraObj.addComponent(Camera3D);
// 将相机添加至场景
scene.addChild(cameraObj);

// 创建3D视图
let view = new View3D();
// 填充场景至3D视图
view.scene = scene;
// 填充相机至3D视图
view.camera = camera;
// 开始渲染
Engine3D.startRenderView(view);
```
如果场景内有多个相机，可以通过设置 `view.camera` 来切换目标相机:
```ts
// 如果有多个相机
let cameraObj1 = new Object3D();
let camera1 = cameraObj.addComponent(Camera3D);
let cameraObj2 = new Object3D();
let camera2 = cameraObj.addComponent(Camera3D);

// 创建3D视图
let view = new View3D();
// 设置渲染场景
view.scene = scene;
// 设置 camera1
view.camera = camera1;
...
// 切换使用 camera2 进行渲染
view.camera = camera2;

```

## 相机位置
更改相机位置主要有三种方式：
1. 通过 `TransForm` 变换：通过相机节点 `Object3D` 的 [transForm](/guide/core/transform) 属性可以手动设置相机的位置和方向角度：
```ts
// 创建一个节点
let cameraObj = new Object3D();
// 添加相机组件
let camera = cameraObj.addComponent(Camera3D);
// 设定 Object3D 的 Position 或 Rotation 
cameraObj.x = 10;
cameraObj.rotateX = 90;
...
```

2. 通过组件 `lookAt` 函数：相机组件提供的 [lookAt](/api/classes/Camera3D#lookat) 函数 可以同时设置相机 `Object3D` 的位置和观察目标位置：

```ts
// 创建一个节点
let cameraObj = new Object3D();
// 添加相机组件
let camera = cameraObj.addComponent(Camera3D);
// 使用 Camera3D 组件 lookAt 改变 Object3D 的位置和方向角度
camera.lookAt(new Vector3(0,0,10), new Vector3(0,0,0), new Vector3(0,0,1));
```
| 参数 | 类型 | 描述 | 示例 |
| --- | --- | ------ | --- |
| pos | Vector3 | 自身的位置 （全局） | Vector3(0, 0, 0) |
| target | Vector3 | 目标的位置 （全局） | Vector3(0, 1, 0) |
| up | Vector3 | 相机朝上方向的坐标轴 | Vector3(0, 1, 0) |
3. 相机控制器：引擎内置了几种常用的 [控制器组件](#相机组件)，可以根据用户的输入交互自动调整相机的位置属性。


## 相机类型
目前主要支持正交相机、透视相机供开发者使用。

### 正交投影   

在正交相机模式下无论物体距离相机远或近在渲染结果中物体的大小不变，我们通常在2D绘图中使用正交相机，并在我们的几何图形中将 `z` 坐标设为 `0.0`。但是 `z` 轴可以延伸到任何我们想要的长度。使用正交相机对显示对象进行投影，得到的结果是按照同比例缩放，不会有畸变产生。

![camera_orthoOffCenter](/images/camera_orthoOffCenter.webp)

调用 [camera.orthoOffCenter](/api/classes/Camera3D.html#orthooffcenter) API 可以按照需求设置相机成正交相机：

| 参数 | 类型 | 描述 | 示例 |
| --- | --- | --- | --- |
| left | number | 视锥体x轴最小值 | -window.innerWidth / 2 | 
| right | number | 视锥体x轴最大值 | window.innerWidth / 2 | 
| bottom | number | 视锥体y轴最小值 | -window.innerHeight / 2 | 
| top | number | 视锥体y轴最大值 | window.innerHeight / 2 | 
| near | number | 视锥体近截面z值| 1 |
| far | number | 视锥体远截面z值| 5000 |


### 透视投影
透视投影会利用透视除法对距离观察者很远的对象进行缩短和收缩，逻辑尺寸相同的对象在可视区域靠前位置比靠后位置显得更大，可以实现逼近人眼的观察效果，是3D场景中最常用的投影模式。

![camera_perspective](/images/camera_perspective.webp)

调用 [camera.perspective](/api/classes/Camera3D#perspective) 可以按照需求设置相机为透视相机：

| 参数 | 类型 | 描述 | 示例 |
| --- | --- | --- | --- |
| fov  | number | 透视度 | 60 |
| aspect | number | 视口比例 | window.innerWidth / window.innerHeight |
| near | number | 近截面 | 0.1 |
| far | number | 远截面 | 1000 |

<Demo :height="500" src="/demos/graphics/camera_type.ts"></Demo>

<<< @/public/demos/graphics/camera_type.ts{35-41}

## 相机组件
相机组件为相机提供灵活的扩展支持，可以直接使用预定义组件，也可以自定义组件实现更个性化的需求。组件通过自身的 `update` 函数，执行与 `Engine3D` 主循环同步的自我更新逻辑。

### [自由相机](/api/classes/FlyCameraController)
该像机控制器 ，实现摄像机自由移动。它的交互功能有：
  - 通过 W A S D 向着朝向方向 前进 后退 左右移动
  - 通过按住鼠标左键控制相机的移动朝向

<Demo :height="500" src="/demos/graphics/camera_fly.ts"></Demo>

<<< @/public/demos/graphics/camera_fly.ts

基本用法：
```ts
import { Scene3D, Camera3D, FlyCameraController } from '@orillusion/core'
// 实例化一个节点
let cameraObj = new Object3D();
// 加载一个相机组件
let camera = cameraObj.addComponent(Camera3D);
// 加载控制器组件
let flyController = cameraObj.addComponent(FlyCameraController);
// 通过组件 setCamera 设置相机位置
flyController.setCamera(new Vector3(0, 0, 15), new Vector3(0, 0, 0));
// 设置鼠标移动速度
flyController.moveSpeed = 10;
```
自由相机可以通过 [setCamera](/api/classes/FlyCameraController#setcamera) 设定自身位置和朝向

| 参数 | 类型 | 描述 | 示例 |
| --- | --- | --- | --- |
| targetPos | Vector3 | 自身位置 | new Vector3(0,0,10) |
| lookAtPos | Vector3 | 目标位置  | new Vector3(0,0,0) |

还可以修改 `moveSpeed` 来调整移动的速度快慢

| 参数 | 类型 | 描述 | 示例 |
| --- | --- | --- | --- |
| moveSpeed | number | 移动速度 | 10 |

### [盘旋相机](/api/classes/HoverCameraController)

该相机控制器，实现摄像机在 `xz` 平面移动/围绕当前观察点旋转。它的交互功能有：
  - 按下鼠标左键并移动鼠标，可以使相机围绕当前观察目标进行旋转。
  - 按下鼠标右键并移动鼠标，可以使相机根据鼠标移动的方向与距离平滑移动当前场景可视区域
  - 滑动鼠标滚轮可以控制摄像机的视距

<Demo :height="500" src="/demos/graphics/camera_hover.ts"></Demo>

<<< @/public/demos/graphics/camera_hover.ts


基本用法：
```ts
import { Scene3D, Camera3D, HoverCameraController } from '@orillusion/core'
// 实例化一个节点
let cameraObj = new Object3D();
// 加载一个相机组件
let camera = cameraObj.addComponent(Camera3D);
// 加载控制器组件
let hoverCameraController = cameraObj.addComponent(HoverCameraController);
// 通过组件 setCamera 设置相机位置
hoverController.setCamera(15, -15, 15, new Vector3(0, 0, 0));
```
盘旋相机可以通过 [setCamera](/api/classes/HoverCameraController#setcamera) 控制相机位置和朝向
| 参数 | 类型 | 描述 | 示例 |
| --- | --- | --- | --- |
| roll   | number | 围绕y轴旋转  | 0 |
| pitch  | number | 围绕x轴旋转  | 0 |
| distance | number | 相机与目标的距离 | 10 |
| target   | Vector3 | 朝向目标坐标  | new Vector3(0,0,0) |


### [轨道相机](/api/classes/OrbitController)
该相机控制器，跟盘旋相机很相似，也是围绕一个坐标观察点旋转。但它可以直接设置相机的 `Object3D` 的位置和渲染来控制视角位置和朝向。主要特性如下：
  - 按下鼠标左键并移动鼠标，可以使相机围绕当前观察目标进行全向旋转
  - 按下鼠标右键并移动鼠标，可以根据鼠标移动方向在空间各个方向内移动相机中心，不仅可以在 `xz` 平面内自由移动，也支持 `y` 方向的自由移动
  - 滑动鼠标滚轮可以控制摄像机和中心的距离
  - 可以设置相机自动旋转
  - 可以设置旋转，缩放，平移的速度
  - 可以设置仰角最大值和最小值

<Demo :height="500" src="/demos/graphics/camera_orbit.ts"></Demo>

<<< @/public/demos/graphics/camera_orbit.ts{12-17}


基本用法：
```ts
import { Scene3D, Camera3D, OrbitController } from '@orillusion/core'
// 实例化一个节点
let cameraObj = new Object3D();
// 加载一个相机组件
let camera = cameraObj.addComponent(Camera3D);
// 加载控制器组件
let orbit = cameraObj.addComponent(OrbitController);
// 设置相机 Object3D 位置
cameraObj.localPosition.set(0, 10, 30);
// 开启自动旋转
orbit.autoRotate = true
// 自动旋转速度
orbit.autoRotateSpeed = 0.1
// 缩放速度系数
orbit.zoomFactor = 0.1
// 视角平移速度系数
orbit.panFactor = 0.25
// 视角平滑系数
orbit.smooth = 5
// 缩放最小距离
orbit.minDistance = 1
// 缩放最大距离
orbit.maxDistance = 1000
// 仰角最小值
orbit.minPolarAngle = -90
// 仰角最大值
orbit.minPolarAngle = 90
```

### 自定义控制器
用户可以通过 [自定义组件](/guide/core/script) 来扩展额外的相机组件，可以参考 [OrbitController](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts) 的实现方式。
