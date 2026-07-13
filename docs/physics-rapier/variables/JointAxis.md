[**@orillusion/physics-rapier**](../README.md)

***

# Variable: JointAxis

> `const` **JointAxis**: `object`

Defined in: [packages/physics-rapier/joint/GenericJoint.ts:11](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/joint/GenericJoint.ts#L11)

Bit-mask of joint axes to lock. Combine with `|`. Each unset axis remains
free; each set axis is locked. Default `LockAll - LinX` would lock 5 axes
leaving X translation free.

## Type Declaration

### LinX

> `readonly` **LinX**: `1` = `1`

### LinY

> `readonly` **LinY**: `2` = `2`

### LinZ

> `readonly` **LinZ**: `4` = `4`

### AngX

> `readonly` **AngX**: `8` = `8`

### AngY

> `readonly` **AngY**: `16` = `16`

### AngZ

> `readonly` **AngZ**: `32` = `32`

### LockAll

> `readonly` **LockAll**: `number`
