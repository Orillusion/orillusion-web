# Enumeration: BlendMode

混合模式
|名称|描述|
|:---:|:---:|
|None| 仅在WebGPU中工作，可能会提高没有alpha的大背景图像的性能。源像素未与目标像素混合，因此GPU不会从目标像素读取颜色。|
|ABOVE| 显示对象显示在背景上方。当背景透明时，显示对象的像素值不可见 |
|NORMAL| 正常混合模式 |
|ADD| 将显示对象的组成颜色的值添加到其背景颜色中 |
|BELOW| 显示对象显示在背景后面。背景对象的像素值覆盖显示对象的像素值。如果背景是透明的，则显示对象可见|
|ERASE| 基于显示对象的alpha值擦除背景。|
|MUL| 将显示对象组成颜色的值乘以背景色的颜色，然后除以0xFF进行归一化，得到较暗的颜色。|
|SCREEN| 将源图像和目标图像的分量的逆相乘，然后求逆结果。|
|DIVD| |
|SOFT_ADD| |


### Enumeration Members

- [NONE](BlendMode.md#none)
- [ABOVE](BlendMode.md#above)
- [ALPHA](BlendMode.md#alpha)
- [NORMAL](BlendMode.md#normal)
- [ADD](BlendMode.md#add)
- [BELOW](BlendMode.md#below)
- [ERASE](BlendMode.md#erase)
- [MUL](BlendMode.md#mul)
- [SCREEN](BlendMode.md#screen)
- [DIVD](BlendMode.md#divd)
- [SOFT\_ADD](BlendMode.md#soft_add)

## Enumeration Members

### NONE

• **NONE** = ``0``

仅在WebGPU中工作，可能会提高没有alpha的大背景图像的性能。源像素未与目标像素混合，因此GPU不会从目标像素读取颜色。

#### Defined in

[src/engine/materials/BlendMode.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/BlendMode.ts#L21)

___

### ABOVE

• **ABOVE** = ``1``

显示对象显示在背景上方。当背景透明时，显示对象的像素值不可见。

#### Defined in

[src/engine/materials/BlendMode.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/BlendMode.ts#L25)

___

### ALPHA

• **ALPHA** = ``2``

透明模式

#### Defined in

[src/engine/materials/BlendMode.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/BlendMode.ts#L30)

___

### NORMAL

• **NORMAL** = ``3``

正常混合模式

#### Defined in

[src/engine/materials/BlendMode.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/BlendMode.ts#L35)

___

### ADD

• **ADD** = ``4``

将显示对象的组成颜色的值添加到其背景颜色中

#### Defined in

[src/engine/materials/BlendMode.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/BlendMode.ts#L40)

___

### BELOW

• **BELOW** = ``5``

将显示对象的组成颜色的值添加到其背景颜色中

#### Defined in

[src/engine/materials/BlendMode.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/BlendMode.ts#L45)

___

### ERASE

• **ERASE** = ``6``

基于显示对象的alpha值擦除背景。

#### Defined in

[src/engine/materials/BlendMode.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/BlendMode.ts#L49)

___

### MUL

• **MUL** = ``7``

将显示对象组成颜色的值乘以背景色的颜色，然后除以0xFF进行归一化，得到较暗的颜色。

#### Defined in

[src/engine/materials/BlendMode.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/BlendMode.ts#L53)

___

### SCREEN

• **SCREEN** = ``8``

将源图像和目标图像的分量的逆相乘，然后求逆结果。

#### Defined in

[src/engine/materials/BlendMode.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/BlendMode.ts#L57)

___

### DIVD

• **DIVD** = ``9``

#### Defined in

[src/engine/materials/BlendMode.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/BlendMode.ts#L58)

___

### SOFT\_ADD

• **SOFT\_ADD** = ``10``

#### Defined in

[src/engine/materials/BlendMode.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/BlendMode.ts#L59)
