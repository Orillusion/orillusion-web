[**@orillusion/core**](../README.md)

***

# Class: ProfilerUtil

Defined in: [src/util/ProfilerUtil.ts:38](https://github.com/orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L38)

Lightweight profiling helper: accumulates per-pass draw statistics for
each View3D and tracks named timing labels for performance measurement.

## Constructors

### Constructor

> **new ProfilerUtil**(): `ProfilerUtil`

#### Returns

`ProfilerUtil`

## Properties

### viewMap

> `static` **viewMap**: `Map`\<[`View3D`](View3D.md), [`ProfilerDraw`](../type-aliases/ProfilerDraw.md)\>

Defined in: [src/util/ProfilerUtil.ts:43](https://github.com/orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L43)

Per-view draw-statistic records keyed by the owning View3D.

***

### testObj

> `static` **testObj**: `object`

Defined in: [src/util/ProfilerUtil.ts:46](https://github.com/orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L46)

Scratch counters available for ad-hoc debugging.

#### testValue1

> **testValue1**: `number` = `0`

#### testValue2

> **testValue2**: `number` = `0`

#### testValue3

> **testValue3**: `number` = `0`

#### testValue4

> **testValue4**: `number` = `0`

## Methods

### startView()

> `static` **startView**(`view`): `void`

Defined in: [src/util/ProfilerUtil.ts:54](https://github.com/orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L54)

Ensure a draw-stat record exists for the view and reset all pass counters to zero.

#### Parameters

##### view

[`View3D`](View3D.md)

#### Returns

`void`

***

### viewCount()

> `static` **viewCount**(`view`): [`ProfilerDraw`](../type-aliases/ProfilerDraw.md)

Defined in: [src/util/ProfilerUtil.ts:90](https://github.com/orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L90)

Reset and return the draw-stat record for the view.

#### Parameters

##### view

[`View3D`](View3D.md)

#### Returns

[`ProfilerDraw`](../type-aliases/ProfilerDraw.md)

***

### viewCount\_vertex()

> `static` **viewCount\_vertex**(`view`, `pass`, `v`): `void`

Defined in: [src/util/ProfilerUtil.ts:96](https://github.com/orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L96)

Accumulate vertex count for a pass of the view.

#### Parameters

##### view

[`View3D`](View3D.md)

##### pass

`string`

##### v

`number`

#### Returns

`void`

***

### viewCount\_indices()

> `static` **viewCount\_indices**(`view`, `pass`, `v`): `void`

Defined in: [src/util/ProfilerUtil.ts:101](https://github.com/orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L101)

Accumulate index count for a pass of the view.

#### Parameters

##### view

[`View3D`](View3D.md)

##### pass

`string`

##### v

`number`

#### Returns

`void`

***

### viewCount\_tri()

> `static` **viewCount\_tri**(`view`, `pass`, `v`): `void`

Defined in: [src/util/ProfilerUtil.ts:106](https://github.com/orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L106)

Accumulate triangle count for a pass of the view.

#### Parameters

##### view

[`View3D`](View3D.md)

##### pass

`string`

##### v

`number`

#### Returns

`void`

***

### viewCount\_instance()

> `static` **viewCount\_instance**(`view`, `pass`, `v`): `void`

Defined in: [src/util/ProfilerUtil.ts:111](https://github.com/orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L111)

Accumulate instance count for a pass of the view.

#### Parameters

##### view

[`View3D`](View3D.md)

##### pass

`string`

##### v

`number`

#### Returns

`void`

***

### viewCount\_draw()

> `static` **viewCount\_draw**(`view`, `pass`): `void`

Defined in: [src/util/ProfilerUtil.ts:116](https://github.com/orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L116)

Increment the draw-call count for a pass of the view.

#### Parameters

##### view

[`View3D`](View3D.md)

##### pass

`string`

#### Returns

`void`

***

### viewCount\_pipeline()

> `static` **viewCount\_pipeline**(`view`, `pass`): `void`

Defined in: [src/util/ProfilerUtil.ts:121](https://github.com/orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L121)

Increment the pipeline-switch count for a pass of the view.

#### Parameters

##### view

[`View3D`](View3D.md)

##### pass

`string`

#### Returns

`void`

***

### removeView()

> `static` **removeView**(`view`): `void`

Defined in: [src/util/ProfilerUtil.ts:128](https://github.com/orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L128)

Drop the view's draw-stat record.

#### Parameters

##### view

[`View3D`](View3D.md)

#### Returns

`void`

***

### start()

> `static` **start**(`id`): `void`

Defined in: [src/util/ProfilerUtil.ts:133](https://github.com/orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L133)

Begin (or restart) timing the named label.

#### Parameters

##### id

`string`

#### Returns

`void`

***

### end()

> `static` **end**(`id`): `void`

Defined in: [src/util/ProfilerUtil.ts:153](https://github.com/orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L153)

Stop timing the named label and record its total elapsed time.

#### Parameters

##### id

`string`

#### Returns

`void`

***

### countStart()

> `static` **countStart**(`id`, `id2?`): `void`

Defined in: [src/util/ProfilerUtil.ts:162](https://github.com/orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L162)

Increment a label's call count and optionally begin timing a child label.

#### Parameters

##### id

`string`

##### id2?

`string` = `""`

#### Returns

`void`

***

### countEnd()

> `static` **countEnd**(`id`, `id2`): `void`

Defined in: [src/util/ProfilerUtil.ts:186](https://github.com/orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L186)

Stop timing a child label and record its elapsed time and count.

#### Parameters

##### id

`string`

##### id2

`string`

#### Returns

`void`

***

### print()

> `static` **print**(`id`): `void`

Defined in: [src/util/ProfilerUtil.ts:208](https://github.com/orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L208)

Log the named label's total elapsed time to the console.

#### Parameters

##### id

`string`

#### Returns

`void`
