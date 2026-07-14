[**@orillusion/core**](../README.md)

***

# Class: Color

Defined in: [src/math/Color.ts:5](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L5)

RGBA Color Object

## Constructors

### Constructor

> **new Color**(`r?`, `g?`, `b?`, `a?`): `Color`

Defined in: [src/math/Color.ts:92](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L92)

create new color instance

#### Parameters

##### r?

`number` = `1.0`

red channel

##### g?

`number` = `1.0`

green channel

##### b?

`number` = `1.0`

blue channel

##### a?

`number` = `1.0`

alpha channel

#### Returns

`Color`

## Properties

### COLOR\_RED

> `static` **COLOR\_RED**: `Color`

Defined in: [src/math/Color.ts:10](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L10)

red color

***

### COLOR\_GREEN

> `static` **COLOR\_GREEN**: `Color`

Defined in: [src/math/Color.ts:15](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L15)

green color

***

### COLOR\_BLUE

> `static` **COLOR\_BLUE**: `Color`

Defined in: [src/math/Color.ts:20](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L20)

blue color

***

### COLOR\_WHITE

> `static` **COLOR\_WHITE**: `Color`

Defined in: [src/math/Color.ts:25](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L25)

white color

***

### r

> **r**: `number` = `0`

Defined in: [src/math/Color.ts:68](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L68)

red channel

***

### g

> **g**: `number` = `0`

Defined in: [src/math/Color.ts:73](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L73)

green channel

***

### b

> **b**: `number` = `0`

Defined in: [src/math/Color.ts:78](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L78)

blue channel

***

### a

> **a**: `number` = `0`

Defined in: [src/math/Color.ts:83](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L83)

alpha channel

***

### PRIMARY

> `static` **PRIMARY**: `number` = `0x3f51b5`

Defined in: [src/math/Color.ts:359](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L359)

Preset color: primary.

***

### PRIMARYDARK

> `static` **PRIMARYDARK**: `number` = `0x303f9f`

Defined in: [src/math/Color.ts:361](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L361)

Preset color: primary dark.

***

### ACCENT

> `static` **ACCENT**: `number` = `0xff4081`

Defined in: [src/math/Color.ts:363](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L363)

Preset color: accent.

***

### WHITE

> `static` **WHITE**: `number` = `0xffffff`

Defined in: [src/math/Color.ts:366](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L366)

Preset color: white.

***

### IVORY

> `static` **IVORY**: `number` = `0xfffff0`

Defined in: [src/math/Color.ts:368](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L368)

Preset color: ivory.

***

### LIGHTYELLOW

> `static` **LIGHTYELLOW**: `number` = `0xffffe0`

Defined in: [src/math/Color.ts:370](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L370)

Preset color: light yellow.

***

### YELLOW

> `static` **YELLOW**: `number` = `0xffff00`

Defined in: [src/math/Color.ts:372](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L372)

Preset color: yellow.

***

### SNOW

> `static` **SNOW**: `number` = `0xfffafa`

Defined in: [src/math/Color.ts:374](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L374)

Preset color: snow.

***

### FLORALWHITE

> `static` **FLORALWHITE**: `number` = `0xfffaf0`

Defined in: [src/math/Color.ts:376](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L376)

Preset color: floral white.

***

### LEMONCHIFFON

> `static` **LEMONCHIFFON**: `number` = `0xfffacd`

Defined in: [src/math/Color.ts:378](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L378)

Preset color: lemon chiffon.

***

### CORNSILK

> `static` **CORNSILK**: `number` = `0xfff8dc`

Defined in: [src/math/Color.ts:380](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L380)

Preset color: cornsilk.

***

### SEASHELL

> `static` **SEASHELL**: `number` = `0xfff5ee`

Defined in: [src/math/Color.ts:382](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L382)

Preset color: seashell.

***

### LAVENDERBLUSH

> `static` **LAVENDERBLUSH**: `number` = `0xfff0f5`

Defined in: [src/math/Color.ts:384](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L384)

Preset color: lavender blush.

***

### PAPAYAWHIP

> `static` **PAPAYAWHIP**: `number` = `0xffefd5`

Defined in: [src/math/Color.ts:386](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L386)

Preset color: papaya whip.

***

### BLANCHEDALMOND

> `static` **BLANCHEDALMOND**: `number` = `0xffebcd`

Defined in: [src/math/Color.ts:388](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L388)

Preset color: blanched almond.

***

### MISTYROSE

> `static` **MISTYROSE**: `number` = `0xffe4e1`

Defined in: [src/math/Color.ts:390](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L390)

Preset color: misty rose.

***

### BISQUE

> `static` **BISQUE**: `number` = `0xffe4c4`

Defined in: [src/math/Color.ts:392](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L392)

Preset color: bisque.

***

### MOCCASIN

> `static` **MOCCASIN**: `number` = `0xffe4b5`

Defined in: [src/math/Color.ts:394](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L394)

Preset color: moccasin.

***

### NAVAJOWHITE

> `static` **NAVAJOWHITE**: `number` = `0xffdead`

Defined in: [src/math/Color.ts:396](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L396)

Preset color: navajo white.

***

### PEACHPUFF

> `static` **PEACHPUFF**: `number` = `0xffdab9`

Defined in: [src/math/Color.ts:398](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L398)

Preset color: peach puff.

***

### GOLD

> `static` **GOLD**: `number` = `0xffd700`

Defined in: [src/math/Color.ts:400](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L400)

Preset color: gold.

***

### PINK

> `static` **PINK**: `number` = `0xffc0cb`

Defined in: [src/math/Color.ts:402](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L402)

Preset color: pink.

***

### LIGHTPINK

> `static` **LIGHTPINK**: `number` = `0xffb6c1`

Defined in: [src/math/Color.ts:404](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L404)

Preset color: light pink.

***

### ORANGE

> `static` **ORANGE**: `number` = `0xffa500`

Defined in: [src/math/Color.ts:406](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L406)

Preset color: orange.

***

### LIGHTSALMON

> `static` **LIGHTSALMON**: `number` = `0xffa07a`

Defined in: [src/math/Color.ts:408](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L408)

Preset color: light salmon.

***

### DARKORANGE

> `static` **DARKORANGE**: `number` = `0xff8c00`

Defined in: [src/math/Color.ts:410](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L410)

Preset color: dark orange.

***

### CORAL

> `static` **CORAL**: `number` = `0xff7f50`

Defined in: [src/math/Color.ts:412](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L412)

Preset color: coral.

***

### HOTPINK

> `static` **HOTPINK**: `number` = `0xff69b4`

Defined in: [src/math/Color.ts:414](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L414)

Preset color: hot pink.

***

### TOMATO

> `static` **TOMATO**: `number` = `0xff6347`

Defined in: [src/math/Color.ts:416](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L416)

Preset color: tomato.

***

### ORANGERED

> `static` **ORANGERED**: `number` = `0xff4500`

Defined in: [src/math/Color.ts:418](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L418)

Preset color: orange red.

***

### DEEPPINK

> `static` **DEEPPINK**: `number` = `0xff1493`

Defined in: [src/math/Color.ts:420](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L420)

Preset color: deep pink.

***

### FUCHSIA

> `static` **FUCHSIA**: `number` = `0xff00ff`

Defined in: [src/math/Color.ts:422](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L422)

Preset color: fuchsia.

***

### MAGENTA

> `static` **MAGENTA**: `number` = `0xff00ff`

Defined in: [src/math/Color.ts:424](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L424)

Preset color: magenta.

***

### RED

> `static` **RED**: `number` = `0xff0000`

Defined in: [src/math/Color.ts:426](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L426)

Preset color: red.

***

### OLDLACE

> `static` **OLDLACE**: `number` = `0xfdf5e6`

Defined in: [src/math/Color.ts:428](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L428)

Preset color: old lace.

***

### LIGHTGOLDENRODYELLOW

> `static` **LIGHTGOLDENRODYELLOW**: `number` = `0xfafad2`

Defined in: [src/math/Color.ts:430](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L430)

Preset color: light goldenrod yellow.

***

### LINEN

> `static` **LINEN**: `number` = `0xfaf0e6`

Defined in: [src/math/Color.ts:432](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L432)

Preset color: linen.

***

### ANTIQUEWHITE

> `static` **ANTIQUEWHITE**: `number` = `0xfaebd7`

Defined in: [src/math/Color.ts:434](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L434)

Preset color: antique white.

***

### SALMON

> `static` **SALMON**: `number` = `0xfa8072`

Defined in: [src/math/Color.ts:436](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L436)

Preset color: salmon.

***

### GHOSTWHITE

> `static` **GHOSTWHITE**: `number` = `0xf8f8ff`

Defined in: [src/math/Color.ts:438](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L438)

Preset color: ghost white.

***

### MINTCREAM

> `static` **MINTCREAM**: `number` = `0xf5fffa`

Defined in: [src/math/Color.ts:440](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L440)

Preset color: mint cream.

***

### WHITESMOKE

> `static` **WHITESMOKE**: `number` = `0xf5f5f5`

Defined in: [src/math/Color.ts:442](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L442)

Preset color: white smoke.

***

### BEIGE

> `static` **BEIGE**: `number` = `0xf5f5dc`

Defined in: [src/math/Color.ts:444](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L444)

Preset color: beige.

***

### WHEAT

> `static` **WHEAT**: `number` = `0xf5deb3`

Defined in: [src/math/Color.ts:446](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L446)

Preset color: wheat.

***

### SANDYBROWN

> `static` **SANDYBROWN**: `number` = `0xf4a460`

Defined in: [src/math/Color.ts:448](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L448)

Preset color: sandy brown.

***

### AZURE

> `static` **AZURE**: `number` = `0xf0ffff`

Defined in: [src/math/Color.ts:450](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L450)

Preset color: azure.

***

### HONEYDEW

> `static` **HONEYDEW**: `number` = `0xf0fff0`

Defined in: [src/math/Color.ts:452](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L452)

Preset color: honeydew.

***

### ALICEBLUE

> `static` **ALICEBLUE**: `number` = `0xf0f8ff`

Defined in: [src/math/Color.ts:454](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L454)

Preset color: alice blue.

***

### KHAKI

> `static` **KHAKI**: `number` = `0xf0e68c`

Defined in: [src/math/Color.ts:456](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L456)

Preset color: khaki.

***

### LIGHTCORAL

> `static` **LIGHTCORAL**: `number` = `0xf08080`

Defined in: [src/math/Color.ts:458](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L458)

Preset color: light coral.

***

### PALEGOLDENROD

> `static` **PALEGOLDENROD**: `number` = `0xeee8aa`

Defined in: [src/math/Color.ts:460](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L460)

Preset color: pale goldenrod.

***

### VIOLET

> `static` **VIOLET**: `number` = `0xee82ee`

Defined in: [src/math/Color.ts:462](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L462)

Preset color: violet.

***

### DARKSALMON

> `static` **DARKSALMON**: `number` = `0xe9967a`

Defined in: [src/math/Color.ts:464](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L464)

Preset color: dark salmon.

***

### LAVENDER

> `static` **LAVENDER**: `number` = `0xe6e6fa`

Defined in: [src/math/Color.ts:466](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L466)

Preset color: lavender.

***

### LIGHTCYAN

> `static` **LIGHTCYAN**: `number` = `0xe0ffff`

Defined in: [src/math/Color.ts:468](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L468)

Preset color: light cyan.

***

### BURLYWOOD

> `static` **BURLYWOOD**: `number` = `0xdeb887`

Defined in: [src/math/Color.ts:470](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L470)

Preset color: burlywood.

***

### PLUM

> `static` **PLUM**: `number` = `0xdda0dd`

Defined in: [src/math/Color.ts:472](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L472)

Preset color: plum.

***

### GAINSBORO

> `static` **GAINSBORO**: `number` = `0xdcdcdc`

Defined in: [src/math/Color.ts:474](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L474)

Preset color: gainsboro.

***

### CRIMSON

> `static` **CRIMSON**: `number` = `0xdc143c`

Defined in: [src/math/Color.ts:476](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L476)

Preset color: crimson.

***

### PALEVIOLETRED

> `static` **PALEVIOLETRED**: `number` = `0xdb7093`

Defined in: [src/math/Color.ts:478](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L478)

Preset color: pale violet red.

***

### GOLDENROD

> `static` **GOLDENROD**: `number` = `0xdaa520`

Defined in: [src/math/Color.ts:481](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L481)

Preset color: goldenrod.

***

### ORCHID

> `static` **ORCHID**: `number` = `0xda70d6`

Defined in: [src/math/Color.ts:483](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L483)

Preset color: orchid.

***

### THISTLE

> `static` **THISTLE**: `number` = `0xd8bfd8`

Defined in: [src/math/Color.ts:485](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L485)

Preset color: thistle.

***

### LIGHTGREY

> `static` **LIGHTGREY**: `number` = `0xd3d3d3`

Defined in: [src/math/Color.ts:487](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L487)

Preset color: light grey.

***

### TAN

> `static` **TAN**: `number` = `0xd2b48c`

Defined in: [src/math/Color.ts:489](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L489)

Preset color: tan.

***

### CHOCOLATE

> `static` **CHOCOLATE**: `number` = `0xd2691e`

Defined in: [src/math/Color.ts:491](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L491)

Preset color: chocolate.

***

### PERU

> `static` **PERU**: `number` = `0xcd853f`

Defined in: [src/math/Color.ts:493](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L493)

Preset color: peru.

***

### INDIANRED

> `static` **INDIANRED**: `number` = `0xcd5c5c`

Defined in: [src/math/Color.ts:495](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L495)

Preset color: indian red.

***

### MEDIUMVIOLETRED

> `static` **MEDIUMVIOLETRED**: `number` = `0xc71585`

Defined in: [src/math/Color.ts:497](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L497)

Preset color: medium violet red.

***

### SILVER

> `static` **SILVER**: `number` = `0xc0c0c0`

Defined in: [src/math/Color.ts:499](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L499)

Preset color: silver.

***

### DARKKHAKI

> `static` **DARKKHAKI**: `number` = `0xbdb76b`

Defined in: [src/math/Color.ts:501](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L501)

Preset color: dark khaki.

***

### ROSYBROWN

> `static` **ROSYBROWN**: `number` = `0xbc8f8f`

Defined in: [src/math/Color.ts:503](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L503)

Preset color: rosy brown.

***

### MEDIUMORCHID

> `static` **MEDIUMORCHID**: `number` = `0xba55d3`

Defined in: [src/math/Color.ts:505](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L505)

Preset color: medium orchid.

***

### DARKGOLDENROD

> `static` **DARKGOLDENROD**: `number` = `0xb8860b`

Defined in: [src/math/Color.ts:507](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L507)

Preset color: dark goldenrod.

***

### FIREBRICK

> `static` **FIREBRICK**: `number` = `0xb22222`

Defined in: [src/math/Color.ts:509](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L509)

Preset color: firebrick.

***

### POWDERBLUE

> `static` **POWDERBLUE**: `number` = `0xb0e0e6`

Defined in: [src/math/Color.ts:511](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L511)

Preset color: powder blue.

***

### LIGHTSTEELBLUE

> `static` **LIGHTSTEELBLUE**: `number` = `0xb0c4de`

Defined in: [src/math/Color.ts:513](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L513)

Preset color: light steel blue.

***

### PALETURQUOISE

> `static` **PALETURQUOISE**: `number` = `0xafeeee`

Defined in: [src/math/Color.ts:515](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L515)

Preset color: pale turquoise.

***

### GREENYELLOW

> `static` **GREENYELLOW**: `number` = `0xadff2f`

Defined in: [src/math/Color.ts:517](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L517)

Preset color: green yellow.

***

### LIGHTBLUE

> `static` **LIGHTBLUE**: `number` = `0xadd8e6`

Defined in: [src/math/Color.ts:519](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L519)

Preset color: light blue.

***

### DARKGRAY

> `static` **DARKGRAY**: `number` = `0xa9a9a9`

Defined in: [src/math/Color.ts:521](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L521)

Preset color: dark gray.

***

### BROWN

> `static` **BROWN**: `number` = `0xa52a2a`

Defined in: [src/math/Color.ts:523](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L523)

Preset color: brown.

***

### SIENNA

> `static` **SIENNA**: `number` = `0xa0522d`

Defined in: [src/math/Color.ts:525](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L525)

Preset color: sienna.

***

### DARKORCHID

> `static` **DARKORCHID**: `number` = `0x9932cc`

Defined in: [src/math/Color.ts:527](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L527)

Preset color: dark orchid.

***

### PALEGREEN

> `static` **PALEGREEN**: `number` = `0x98fb98`

Defined in: [src/math/Color.ts:529](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L529)

Preset color: pale green.

***

### DARKVIOLET

> `static` **DARKVIOLET**: `number` = `0x9400d3`

Defined in: [src/math/Color.ts:531](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L531)

Preset color: dark violet.

***

### MEDIUMPURPLE

> `static` **MEDIUMPURPLE**: `number` = `0x9370db`

Defined in: [src/math/Color.ts:533](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L533)

Preset color: medium purple.

***

### LIGHTGREEN

> `static` **LIGHTGREEN**: `number` = `0x90ee90`

Defined in: [src/math/Color.ts:535](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L535)

Preset color: light green.

***

### DARKSEAGREEN

> `static` **DARKSEAGREEN**: `number` = `0x8fbc8f`

Defined in: [src/math/Color.ts:537](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L537)

Preset color: dark sea green.

***

### SADDLEBROWN

> `static` **SADDLEBROWN**: `number` = `0x8b4513`

Defined in: [src/math/Color.ts:539](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L539)

Preset color: saddle brown.

***

### DARKMAGENTA

> `static` **DARKMAGENTA**: `number` = `0x8b008b`

Defined in: [src/math/Color.ts:541](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L541)

Preset color: dark magenta.

***

### DARKRED

> `static` **DARKRED**: `number` = `0x8b0000`

Defined in: [src/math/Color.ts:543](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L543)

Preset color: dark red.

***

### BLUEVIOLET

> `static` **BLUEVIOLET**: `number` = `0x8a2be2`

Defined in: [src/math/Color.ts:545](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L545)

Preset color: blue violet.

***

### LIGHTSKYBLUE

> `static` **LIGHTSKYBLUE**: `number` = `0x87cefa`

Defined in: [src/math/Color.ts:547](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L547)

Preset color: light sky blue.

***

### SKYBLUE

> `static` **SKYBLUE**: `number` = `0x87ceeb`

Defined in: [src/math/Color.ts:549](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L549)

Preset color: sky blue.

***

### GRAY

> `static` **GRAY**: `number` = `0x808080`

Defined in: [src/math/Color.ts:551](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L551)

Preset color: gray.

***

### OLIVE

> `static` **OLIVE**: `number` = `0x808000`

Defined in: [src/math/Color.ts:553](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L553)

Preset color: olive.

***

### PURPLE

> `static` **PURPLE**: `number` = `0x800080`

Defined in: [src/math/Color.ts:555](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L555)

Preset color: purple.

***

### MAROON

> `static` **MAROON**: `number` = `0x800000`

Defined in: [src/math/Color.ts:557](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L557)

Preset color: maroon.

***

### AQUAMARINE

> `static` **AQUAMARINE**: `number` = `0x7fffd4`

Defined in: [src/math/Color.ts:559](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L559)

Preset color: aquamarine.

***

### CHARTREUSE

> `static` **CHARTREUSE**: `number` = `0x7fff00`

Defined in: [src/math/Color.ts:561](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L561)

Preset color: chartreuse.

***

### LAWNGREEN

> `static` **LAWNGREEN**: `number` = `0x7cfc00`

Defined in: [src/math/Color.ts:563](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L563)

Preset color: lawn green.

***

### MEDIUMSLATEBLUE

> `static` **MEDIUMSLATEBLUE**: `number` = `0x7b68ee`

Defined in: [src/math/Color.ts:565](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L565)

Preset color: medium slate blue.

***

### LIGHTSLATEGRAY

> `static` **LIGHTSLATEGRAY**: `number` = `0x778899`

Defined in: [src/math/Color.ts:567](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L567)

Preset color: light slate gray.

***

### SLATEGRAY

> `static` **SLATEGRAY**: `number` = `0x708090`

Defined in: [src/math/Color.ts:569](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L569)

Preset color: slate gray.

***

### OLIVEDRAB

> `static` **OLIVEDRAB**: `number` = `0x6b8e23`

Defined in: [src/math/Color.ts:571](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L571)

Preset color: olive drab.

***

### SLATEBLUE

> `static` **SLATEBLUE**: `number` = `0x6a5acd`

Defined in: [src/math/Color.ts:573](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L573)

Preset color: slate blue.

***

### DIMGRAY

> `static` **DIMGRAY**: `number` = `0x696969`

Defined in: [src/math/Color.ts:575](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L575)

Preset color: dim gray.

***

### MEDIUMAQUAMARINE

> `static` **MEDIUMAQUAMARINE**: `number` = `0x66cdaa`

Defined in: [src/math/Color.ts:577](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L577)

Preset color: medium aquamarine.

***

### CORNFLOWERBLUE

> `static` **CORNFLOWERBLUE**: `number` = `0x6495ed`

Defined in: [src/math/Color.ts:579](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L579)

Preset color: cornflower blue.

***

### CADETBLUE

> `static` **CADETBLUE**: `number` = `0x5f9ea0`

Defined in: [src/math/Color.ts:581](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L581)

Preset color: cadet blue.

***

### DARKOLIVEGREEN

> `static` **DARKOLIVEGREEN**: `number` = `0x556b2f`

Defined in: [src/math/Color.ts:583](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L583)

Preset color: dark olive green.

***

### INDIGO

> `static` **INDIGO**: `number` = `0x4b0082`

Defined in: [src/math/Color.ts:585](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L585)

Preset color: indigo.

***

### MEDIUMTURQUOISE

> `static` **MEDIUMTURQUOISE**: `number` = `0x48d1cc`

Defined in: [src/math/Color.ts:587](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L587)

Preset color: medium turquoise.

***

### DARKSLATEBLUE

> `static` **DARKSLATEBLUE**: `number` = `0x483d8b`

Defined in: [src/math/Color.ts:589](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L589)

Preset color: dark slate blue.

***

### STEELBLUE

> `static` **STEELBLUE**: `number` = `0x4682b4`

Defined in: [src/math/Color.ts:591](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L591)

Preset color: steel blue.

***

### ROYALBLUE

> `static` **ROYALBLUE**: `number` = `0x4169e1`

Defined in: [src/math/Color.ts:593](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L593)

Preset color: royal blue.

***

### TURQUOISE

> `static` **TURQUOISE**: `number` = `0x40e0d0`

Defined in: [src/math/Color.ts:595](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L595)

Preset color: turquoise.

***

### MEDIUMSEAGREEN

> `static` **MEDIUMSEAGREEN**: `number` = `0x3cb371`

Defined in: [src/math/Color.ts:597](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L597)

Preset color: medium sea green.

***

### LIMEGREEN

> `static` **LIMEGREEN**: `number` = `0x32cd32`

Defined in: [src/math/Color.ts:599](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L599)

Preset color: lime green.

***

### DARKSLATEGRAY

> `static` **DARKSLATEGRAY**: `number` = `0x2f4f4f`

Defined in: [src/math/Color.ts:601](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L601)

Preset color: dark slate gray.

***

### SEAGREEN

> `static` **SEAGREEN**: `number` = `0x2e8b57`

Defined in: [src/math/Color.ts:603](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L603)

Preset color: sea green.

***

### FORESTGREEN

> `static` **FORESTGREEN**: `number` = `0x228b22`

Defined in: [src/math/Color.ts:605](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L605)

Preset color: forest green.

***

### LIGHTSEAGREEN

> `static` **LIGHTSEAGREEN**: `number` = `0x20b2aa`

Defined in: [src/math/Color.ts:607](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L607)

Preset color: light sea green.

***

### DODGERBLUE

> `static` **DODGERBLUE**: `number` = `0x1e90ff`

Defined in: [src/math/Color.ts:609](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L609)

Preset color: dodger blue.

***

### MIDNIGHTBLUE

> `static` **MIDNIGHTBLUE**: `number` = `0x191970`

Defined in: [src/math/Color.ts:611](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L611)

Preset color: midnight blue.

***

### AQUA

> `static` **AQUA**: `number` = `0x00ffff`

Defined in: [src/math/Color.ts:613](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L613)

Preset color: aqua.

***

### CYAN

> `static` **CYAN**: `number` = `0x00ffff`

Defined in: [src/math/Color.ts:615](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L615)

Preset color: cyan.

***

### SPRINGGREEN

> `static` **SPRINGGREEN**: `number` = `0x00ff7f`

Defined in: [src/math/Color.ts:617](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L617)

Preset color: spring green.

***

### LIME

> `static` **LIME**: `number` = `0x00ff00`

Defined in: [src/math/Color.ts:619](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L619)

Preset color: lime.

***

### MEDIUMSPRINGGREEN

> `static` **MEDIUMSPRINGGREEN**: `number` = `0x00fa9a`

Defined in: [src/math/Color.ts:621](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L621)

Preset color: medium spring green.

***

### DARKTURQUOISE

> `static` **DARKTURQUOISE**: `number` = `0x00ced1`

Defined in: [src/math/Color.ts:623](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L623)

Preset color: dark turquoise.

***

### DEEPSKYBLUE

> `static` **DEEPSKYBLUE**: `number` = `0x00bfff`

Defined in: [src/math/Color.ts:625](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L625)

Preset color: deep sky blue.

***

### DARKCYAN

> `static` **DARKCYAN**: `number` = `0x008b8b`

Defined in: [src/math/Color.ts:627](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L627)

Preset color: dark cyan.

***

### TEAL

> `static` **TEAL**: `number` = `0x008080`

Defined in: [src/math/Color.ts:629](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L629)

Preset color: teal.

***

### GREEN

> `static` **GREEN**: `number` = `0x008000`

Defined in: [src/math/Color.ts:631](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L631)

Preset color: green.

***

### DARKGREEN

> `static` **DARKGREEN**: `number` = `0x006400`

Defined in: [src/math/Color.ts:633](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L633)

Preset color: dark green.

***

### BLUE

> `static` **BLUE**: `number` = `0x0000ff`

Defined in: [src/math/Color.ts:635](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L635)

Preset color: blue.

***

### MEDIUMBLUE

> `static` **MEDIUMBLUE**: `number` = `0x0000cd`

Defined in: [src/math/Color.ts:637](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L637)

Preset color: medium blue.

***

### DARKBLUE

> `static` **DARKBLUE**: `number` = `0x00008b`

Defined in: [src/math/Color.ts:639](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L639)

Preset color: dark blue.

***

### NAVY

> `static` **NAVY**: `number` = `0x000080`

Defined in: [src/math/Color.ts:641](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L641)

Preset color: navy.

***

### BLACK

> `static` **BLACK**: `number` = `0x000000`

Defined in: [src/math/Color.ts:643](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L643)

Preset color: black.

## Accessors

### rgb

#### Get Signature

> **get** **rgb**(): `number`[]

Defined in: [src/math/Color.ts:256](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L256)

get rgb to array

##### Returns

`number`[]

#### Set Signature

> **set** **rgb**(`c`): `void`

Defined in: [src/math/Color.ts:263](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L263)

set rgb by array

##### Parameters

###### c

`number`[]

##### Returns

`void`

***

### rgba

#### Get Signature

> **get** **rgba**(): `number`[]

Defined in: [src/math/Color.ts:270](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L270)

get rgba to array

##### Returns

`number`[]

#### Set Signature

> **set** **rgba**(`c`): `void`

Defined in: [src/math/Color.ts:277](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L277)

set rgb by array

##### Parameters

###### c

`number`[]

##### Returns

`void`

## Methods

### convertToHDRRGB()

> **convertToHDRRGB**(): `Color`

Defined in: [src/math/Color.ts:99](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L99)

convert to hdr color , channel a is intensity

#### Returns

`Color`

***

### unSerialized()

> **unSerialized**(`data`): `this`

Defined in: [src/math/Color.ts:111](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L111)

unSerialized color by data

#### Parameters

##### data

`any`

#### Returns

`this`

***

### hexToRGB()

> **hexToRGB**(`value`): `Color`

Defined in: [src/math/Color.ts:123](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L123)

update this color rgb from hexadecimal no alpha

#### Parameters

##### value

`number`

#### Returns

`Color`

***

### hexToRGBA()

> **hexToRGBA**(`value`): `Color`

Defined in: [src/math/Color.ts:135](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L135)

update this color rgb from hexadecimal has alpha

#### Parameters

##### value

`number`

#### Returns

`Color`

***

### random()

> `static` **random**(`base?`): `Color`

Defined in: [src/math/Color.ts:147](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L147)

random on color

#### Parameters

##### base?

`number` = `1.0`

#### Returns

`Color`

***

### randomRGB()

> `static` **randomRGB**(`seedR?`, `seedG?`, `seedB?`, `baseR?`, `baseG?`, `baseB?`): `Color`

Defined in: [src/math/Color.ts:160](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L160)

generate a random color from per-channel seeds and base values

#### Parameters

##### seedR?

`number` = `0.5`

##### seedG?

`number` = `0.5`

##### seedB?

`number` = `0.5`

##### baseR?

`number` = `0.5`

##### baseG?

`number` = `0.5`

##### baseB?

`number` = `0.5`

#### Returns

`Color`

***

### randomGray()

> `static` **randomGray**(`base?`, `random?`): `Color`

Defined in: [src/math/Color.ts:174](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L174)

random on color

#### Parameters

##### base?

`number` = `0.5`

##### random?

`number` = `0.5`

#### Returns

`Color`

***

### setTo()

> **setTo**(`r`, `g`, `b`, `a`): `this`

Defined in: [src/math/Color.ts:191](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L191)

set rgba to this color

#### Parameters

##### r

`number`

red channel

##### g

`number`

green channel

##### b

`number`

blue channel

##### a

`number`

alpha channel

#### Returns

`this`

***

### setHex()

> **setHex**(`hex`): `this`

Defined in: [src/math/Color.ts:203](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L203)

update this color rgba from hexadecimal

#### Parameters

##### hex

`string`

hex string.

#### Returns

`this`

***

### getHex()

> **getHex**(): `string`

Defined in: [src/math/Color.ts:240](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L240)

convert this color to hex string code

#### Returns

`string`

***

### clone()

> **clone**(): `Color`

Defined in: [src/math/Color.ts:285](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L285)

clone this color

#### Returns

`Color`

***

### copy()

> **copy**(`src`): `this`

Defined in: [src/math/Color.ts:293](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L293)

copy color from source color

#### Parameters

##### src

`Color`

#### Returns

`this`

***

### copyFromArray()

> **copyFromArray**(`arr`, `scalar?`): `this`

Defined in: [src/math/Color.ts:307](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L307)

copy color from array

#### Parameters

##### arr

`number`[]

[ 255 , 255 , 255 , 255 ]

##### scalar?

`number` = `255`

#### Returns

`this`

***

### copyFromVector()

> **copyFromVector**(`value`): `this`

Defined in: [src/math/Color.ts:321](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L321)

copy color from vector3 or vector4

#### Parameters

##### value

{ x: number, y: number, z: number, w?: number }

###### x

`number`

###### y

`number`

###### z

`number`

###### w?

`number`

#### Returns

`this`

***

### hexRGBColor()

> `static` **hexRGBColor**(`hexColor`, `dst?`): `Color`

Defined in: [src/math/Color.ts:334](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L334)

update this color rgb from hexadecimal no alpha

#### Parameters

##### hexColor

`number`

rgb color

##### dst?

`Color` = `null`

ref out color

#### Returns

`Color`

***

### lerp()

> `static` **lerp**(`v`, `c1`, `c2`, `target?`): `Color`

Defined in: [src/math/Color.ts:348](https://github.com/orillusion/orillusion/blob/main/src/math/Color.ts#L348)

lerp two color

#### Parameters

##### v

`number`

##### c1

`Color`

##### c2

`Color`

##### target?

`Color`

#### Returns

`Color`
