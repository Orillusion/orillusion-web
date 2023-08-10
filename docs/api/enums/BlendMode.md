# Enumeration: BlendMode

Blend mode
|name|description|

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

Working only in WebGPU may improve the performance of large background images without alpha.
The source pixel is not mixed with the target pixel, so the GPU will not read colors from the target pixel.

#### Defined in

[src/materials/BlendMode.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L11)

___

### ABOVE

• **ABOVE** = ``1``

Display objects above the background. When the background is transparent, 
the pixel values of the displayed object are not visible.

#### Defined in

[src/materials/BlendMode.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L16)

___

### ALPHA

• **ALPHA** = ``2``

Transparent mode

#### Defined in

[src/materials/BlendMode.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L21)

___

### NORMAL

• **NORMAL** = ``3``

Normal blend mode

#### Defined in

[src/materials/BlendMode.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L26)

___

### ADD

• **ADD** = ``4``

Add the values of the component colors of the displayed object to its background color

#### Defined in

[src/materials/BlendMode.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L31)

___

### BELOW

• **BELOW** = ``5``

Add the values of the component colors of the displayed object to its background color

#### Defined in

[src/materials/BlendMode.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L36)

___

### ERASE

• **ERASE** = ``6``

Erase the background based on the alpha value of the displayed object.

#### Defined in

[src/materials/BlendMode.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L40)

___

### MUL

• **MUL** = ``7``

Multiply the values of the displayed object's constituent colors by the background color, 
and then divide by 0xFF for normalization to obtain a darker color.

#### Defined in

[src/materials/BlendMode.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L45)

___

### SCREEN

• **SCREEN** = ``8``

Multiply the inverse of the components of the source and target images, and then calculate the inverse result.

#### Defined in

[src/materials/BlendMode.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L49)

___

### DIVD

• **DIVD** = ``9``

#### Defined in

[src/materials/BlendMode.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L50)

___

### SOFT\_ADD

• **SOFT\_ADD** = ``10``

#### Defined in

[src/materials/BlendMode.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L51)
