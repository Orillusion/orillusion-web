# 音频组件
引擎通过封装 [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)，提供用户加载播放音频的基础能力:

- `AudioListener` - 虚拟音频接收组件，需要与下列音源配合使用
- `StaticAudio` - 与空间位置无关的音源，播放效果与 Listener 无关
- `PositionAudio` - 基于空间位置的音源，播放效果会随着 Listener 的相对位置改变

## 静态音频
播放与空间位置无关的音频，如全局背景音乐，音效等
```ts
import {AudioListener, StaticAudio} from '@orillusion/media-extention'

// 音频接收组件，静态音频可以添加给任意对象，这里用 scene 为例
let listener = scene.addComponent(AudioListener)

// 创建静态音源
let audioObj = new Object3D()
let staticAudio = audioObj.addComponent(StaticAudio)
// 设置收听对象
staticAudio.setLisenter(listener)
// 加载音频
await staticAudio.load('https://cdn.orillusion.com/audio.ogg')
// 播放音频，声音效果与空间位置无关
staticAudio.play()
```

<Demo :height="500" src="/demos/media/static_audio.ts"></Demo>

<<< @/public/demos/media/static_audio.ts

## 3D空间音频
基于 [PannerNode](https://developer.mozilla.org/en-US/docs/Web/API/PannerNode) 的3D空间位置的音频播放，声音的方位和大小与接收者和音源的相对位置有关。
```ts
import {AudioListener, PositionAudio} from '@orillusion/media-extention'

let movingObj = new Object3D()
// 添加音频接收组件，一般是动态移动的物体，比如添加给 camera 来模拟用户空间位置
let listener = movingObj.addComponent(AudioListener)

// 创建空间音源
let audioObj = new Object3D()
let positionAudio = audioObj.addComponent(PositionAudio)
// 设置音源空间参数, 详见 PannerNode API
positionAudio.refDistance = 10;
positionAudio.maxDistance = 100;
positionAudio.setDirectionalCone( 180, 230, 0.1 ); // coneInnerAngle, coneOuterAngle, coneOuterGain
...
// 显示音频的空间范围
positionAudio.showHelper()

// 设置收听对象
positionAudio.setLisenter(listener)
// 加载音频
await positionAudio.load('https://cdn.orillusion.com/audio.ogg')

// 播放音频，声音方位和大小会随着 movingObj 和 audioObj 的相对位置而变化
positionAudio.play()
```

<Demo :height="500" src="/demos/media/dynamic_audio.ts"></Demo>

<<< @/public/demos/media/dynamic_audio.ts
