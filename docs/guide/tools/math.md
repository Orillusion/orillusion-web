# Mathematics
In a rendering scene, we often apply operations such as translation, rotation, and scaling to objects (these operations are collectively referred to as transformations) to achieve the desired interactive effects. These transformation calculations are generally implemented using vectors, quaternions, matrices, etc. For this purpose, we provide a math library to perform related operations on vectors, quaternions, matrices, and more. In addition, the math library provides a richer set of classes to help us describe points, lines, planes, and geometries in space, as well as determine their intersections and positional relationships in 3D space.

| Type |  Description|
| --- | --- |
| [Vector2](/api/classes/Vector2) | 2D vector containing x and y components |
| [Vector3](/api/classes/Vector3) | 3D vector containing x, y, z, and w components |
| [Rect](/api/classes/Rect) | Rectangle region containing x, y, w, and h components |
| [Color](/api/classes/Color) | Color class using RGBA |
| [Quaternion](/api/classes/Quaternion) | Quaternion containing x, y, z, and w components, responsible for rotation-related operations|
| [Matrix3](/api/classes/Matrix3) | 3x3 matrix providing basic matrix operations and transformation-related operations |
| [Matrix4](/api/classes/Matrix4) | 4x4 matrix providing basic matrix operations and transformation-related operations |
| [MathUti](/api/classes/MathUtil) | Built-in mathematical basic calculation factory functions |
| [Plane](/api/classes/Plane) | Mathematical plane class |
| [Ray](/api/classes/Ray) | Ray |
| Rand | Normal random |
| Random | Various types of random distribution functions |
| Bezier2D | 2D Bezier curve |
| Bezier3D | 3D Bezier curve |
| CubicBezierCurve | Cubic Bezier curve |
| CubicBezierPath | Cubic Bezier path |
| GradientNew | Color gradient |
| ParticleMath |  Math library used by the particle system |

## Important Changes (0.9.0)

::: warning Breaking Change
Starting from `@orillusion/core` **0.9.0**, the math library has unified its method naming and calling conventions. This change is **not backward compatible**, and old code needs to be migrated.
:::

### Instance Arithmetic Changed to "In-Place Modification" Semantics

This is the most important behavioral change to be aware of. Previously, instance arithmetic methods such as `a.add(b)` would **return a new object** without modifying `a`; now they **directly modify `a` itself** and return `a` (chained mutator style):

```ts
// 0.8.x (old): a is unchanged, returns a new vector
const c = a.add(b);   // a remains unchanged

// 0.9.0 (new): a is modified in place, c and a are the same object
const c = a.add(b);   // now a === c, and the value of a has already changed!
```

This involves almost all instance arithmetic methods such as `add` / `sub` / `multiply` / `divide` / `cross` / `multiplyScalar`. If you need to keep the original object unchanged, there are two approaches:

```ts
// Approach 1: clone first, then operate
const c = a.clone().add(b);   // a is unchanged

// Approach 2: use static methods (allocation-free, can specify an output object, recommended for hot paths)
const out = new Vector3();
Vector3.add(a, b, out);       // out = a + b, both a and b are unchanged
```

::: tip
The static form `Class.op(a, b, result?)` is the engine's internal preferred "allocation-free" primitive, and all instance methods delegate to it. In hot code called every frame, prefer the static form and reuse the `result` object to avoid frequent GC.
:::

### Method Renaming Mapping Table

| Old API (0.8.x) | New API (0.9.0+) | Description |
| --- | --- | --- |
| `xxx.copyFrom(src)` | `xxx.copy(src)` | All classes (Vector*/Matrix*/Quaternion/Color/Rect…) |
| `Vector3.subtract(v)` | `Vector3.sub(v)` | Vector subtraction |
| `Vector3.crossProduct(v)` | `Vector3.cross(v)` | Cross product |
| `Vector*.scale(s)` / `scaleBy(s)` / `mul(s)` / `multiplyScaler(s)` | `multiplyScalar(s)` | Multiply by scalar, unified naming |
| `Vector3.scale(v: Vector3)` | `Vector3.multiply(v)` | Component-wise vector multiplication |
| `Quaternion.inverse()` | `Quaternion.invert()` | Inverse (instance + static) |
| `Quaternion.fromAxisAngle()` | `Quaternion.setFromAxisAngle()` | Set from axis and angle |
| `Quaternion.fromEulerAngles()` | `Quaternion.setFromEuler()` | Set from Euler angles |
| `Quaternion.fromMatrix()` | `Quaternion.setFromRotationMatrix()` | Set from rotation matrix |

### Newly Added Standard Methods

0.9.0 also adds a large number of commonly used methods to `Vector2/3/4`, `Quaternion`, and `Matrix4` (all chained mutators returning `this`), such as: `addVectors` / `subVectors` / `multiplyVectors`, `dot`, `lengthSq`, `distanceTo`, `lerp` / `lerpVectors`, `applyMatrix4`, `projectOnVector`, `reflect`, `Matrix4.premultiply`, and so on.

## Vector
The most basic definition of a vector is a direction. Or more formally, a vector has a direction (Direction) and a magnitude (Magnitude, also known as strength or length). You can think of a vector as an instruction on a treasure map: "Go left 10 steps, go north 3 steps, and then go right 5 steps"; "left" is the direction, and "10 steps" is the length of the vector. So there are a total of 3 vectors in this treasure map's instructions. Vectors can be in any dimension (Dimension), but we usually only use 2 to 4 dimensions. If a vector has 2 dimensions, it represents the direction of a plane (imagine a 2D image); when it has 3 dimensions, it can express a direction in a 3D world.
### 2D Vector
```ts
import {Vector2} from "@orillusion/core";

// Create a default 2D vector, with both x and y component values of 0.0
let v1 = new Vector2();

// Create a 2D vector, i.e., both x and y components are 1.0
let v2 = new Vector2(1.0, 1.0);

// Set the specified values
v1.set(2.0, 2.0);

// Get the component values of the vector
let x = v1.x;
let y = v1.y;

// Calculate the distance between two vectors
let result1 = v1.distance(v2);

// Calculate the sum of two vectors (note: modifies v1 in place)
v1.add(v2);

// Calculate the difference of two vectors (modifies v1 in place)
v1.sub(v2);

// Multiply both components by a scalar at the same time (modifies v1 in place)
v1.multiplyScalar(2.0);

// Divide both components by a scalar at the same time (modifies v1 in place)
v1.divide(2.0);

// Calculate the length of the vector
let result6 = v1.length();

// Calculate the angle between the current vector and a target vector
let result7 = v1.getAngle(v2);

// Determine whether the current vector is equal to a given vector
let result9 = v1.equals(v2);

// Clone the current vector
let result10 = v1.clone();

// Assign a value to the current vector using a given vector
v1.copy(v2);

// Convert the vector to a unit vector
v1.normalize();

```
### 3D Vector
```ts
import {Vector3} from "@orillusion/core";

// Create a default 3D vector, with x, y, z component values all 0.0
let v1 = new Vector3();

// Create a 3D vector, i.e., x, y, z, w components are all 1.0
let v2 = new Vector3(1.0, 1.0, 1.0, 1.0);

// Set the specified values
v1.set(2.0, 2.0, 2.0, 2.0);

// Get the component values of the vector
let x = v1.x;
let y = v1.y;
let z = v1.z;
let w = v1.w;

// Calculate the length of the vector
let result1 = v1.length();

// Calculate the sum of two vectors (modifies v1 in place)
v1.add(v2);

// Calculate the difference of two vectors (modifies v1 in place)
v1.sub(v2);

// Multiply each component by a vector at the same time (component-wise multiplication, modifies v1 in place)
v1.multiply(v2);

// Divide each component by a vector at the same time (modifies v1 in place)
v1.divide(v2);

// Static form that does not change the input arguments: out = v1 + v2
let out = new Vector3();
Vector3.add(v1, v2, out);

// Calculate the distance of vectors using a static function
let result6 = Vector3.distance(v1, v2);

// Determine whether the current vector is equal to a given vector
let result9 = v1.equals(v2);

// Clone the current vector
let result10 = v1.clone();

// Assign a value to the current vector using a given vector
v1.copy(v2);

// Convert the vector to a unit vector
v1.normalize();

```
## Rectangle
Used to represent a rectangular area
```ts
import {Rectangle} from "@orillusion/core";

// Construct a rectangular area with default values, all defaulting to 0
let r1 = new Rectangle();

// Construct a rectangular area using the specified values
let r2 = new Rectangle(0, 0, 10, 10);

// Get the rectangle width
let h = r1.width;

// Set the rectangle width
r1.width = 100;

// Get the rectangle height
let h = r1.height;

// Set the rectangle height
r1.height = 100;

// Clone a new rectangle
let r3 = r1.clone();

// Overwrite the existing values of the rectangle with new values
r3.copy(r2);

// Copy the values of this object to the given rectangle object
r2.copyTo(r3);

// Determine whether the given point is within the area
let result1 = r1.inner(0, 0);

// Determine whether the rectangular areas are equal
let result2 = r1.equal(r2)

// Determine whether the rectangular areas have an overlapping part
let result3 = r1.equalInnerArea(r2);

// Get the overlapping part of two rectangular areas
let result4 = r1.innerArea(r2);

```

## Color
```ts
import { Color } from '@orillusion/core';

// Create a Color object, with a default value of 1.0
let c1 = new Color();

// Create a Color object using the given values
let c2 = new Color(1, 1, 1, 1);

// Get the red component
let r = c1.r;

// Get the green component
let g = c1.g;

// Get the blue component
let b = c1.b;

// Get the transparency
let a = c1.a;

// Set the color values
c1.setTo(0.5, 0.5, 0.5, 1);

// Get a random color
let c3 = Color.random();

// Clone the color values
let c4 = c3.clone();

// Set the color values using a string
let c3.setHex('#AAA')

// Get the color value string
let result1 = c1.getHex();

```


## Quaternion
Quaternions are simple hypercomplex numbers. In a graphics engine, quaternions are mainly used for 3D rotation (the relationship between quaternions and 3D rotation). Forms that can represent rotation include not only quaternions but also Euler angles, axis angles, matrices, etc. The reason for choosing quaternions is mainly the following advantages:

* They solve the gimbal lock problem
* They only need to store 4 floating-point numbers, which is lighter than a matrix
* For operations such as inverse and concatenation, they are more efficient than matrices

```ts
import { Quaternion } from '@orillusion/core';

// Create a quaternion object using default values, with x, y, z, and w component values all 0
let q1 = new Quaternion();

// Create a quaternion object with specified values
let q2 = new Quaternion(0, 0, 0, 1);

// Set the values of the quaternion, setting the x, y, z, and w component values in turn
q2.set(0, 0, 0, 1);

// Perform an identity rotation quaternion
let result1 = q1.identity();

// Quaternion division
q1.divide(q2);

// Quaternion multiplication
result1.multiply(q1, q2);

// Set this quaternion from the rotation given by an axis and an angle
q1.setFromAxisAngle(new Vector3(), 15);

// Convert the quaternion to an angle and return it
let result2 = q1.toAxisAngle(new Vector3());

// Fill the quaternion object with the given Euler rotation expressed by numeric values
q1.setFromEuler(1, 1, 1);

// Convert the quaternion to Euler angles and return them
let result3 = q1.toEulerAngles();

// Normalize the quaternion. Convert this quaternion to unit coefficients
q1.normalize();

// Rotate a 3D coordinate point
let result4 = q1.transformVector(new Vector3());

// Copy data from a quaternion to this instance
q1.copy(q2);


```

## Matrix
In a 3D graphics engine, calculations can be performed in multiple different Cartesian coordinate spaces, and transitioning from one coordinate space to another requires the use of transformation matrices. The Matrix module in our math library exists precisely to provide this capability.

### 3D Matrix
```ts
import { Matrix3 } from '@orillusion/core';

// Create a 3D matrix using default values
let m1 = new Matrix3();

// Create a 3D matrix using the specified values
let m2 = new Matrix3(10, 0, 0, 10, 0, 0);

// Clone a new object
let m3 = m1.clone();

// Merge the current matrix with the target matrix
m1.concat(m2);

// Overwrite the current matrix values with the target matrix values
m1.copy(m2);

// Reset to the identity matrix
m1.identity();

// Invert this matrix
m.invert();

// Rotate according to an angle
m1.rotate(10);

// Scale according to an offset
m1.scale(10,10);

// Determine whether the matrices are equal
let result1 = m1.equal(m2);
```

### 4D Matrix
```ts
import { Matrix4, Vector3 } from '@orillusion/core';

// Create a 4D matrix using default values
let m1 = new Matrix4();

// Specify the creation of a wasm 4D matrix
let m2 = new Matrix4(false);

// Clone a new object
let m3 = m1.clone();

// Multiply matrices
m1.multiply(m2);

// Add matrices
m1.add(m2);

// Subtract matrices
m1.sub(m2);

// Get the inverse matrix
m.invert();

// Transpose the current matrix
m1.transpose();

// Set the matrix translation
m1.position = new Vector3(10,10, 10);

// Return the matrix translation
let position = m1.position;

// Set the matrix scale
m1.scale = new Vector3(10,10, 10);

// Return the matrix scale
let scale = m1.scale;

```

## Plane
```ts
import { Plane, Vector3, Ray } from '@orillusion/core';

// Construct a new plane object, using the plane position and the plane normal vector as constructor arguments
let p1 = new Plane(new Vector3(0,0,0), new Vector3(0,0,1));

// Copy the plane
let p2 = p1.clone();

// Determine whether the plane intersects a line segment, and calculate the intersection point
let point1 = new Vector3();
let result1 = p1.intersectsLine(new Vector3(0,0,0), new Vector3(10,10,10), point1);

// Determine whether the plane intersects a ray, and calculate the intersection point
let point2 = new Vector3();
let result2 = p1.intersectsRay(new Ray(), point2);

```

## Ray
```ts
import { Plane, Vector3, Ray } from '@orillusion/core';

// Construct a new ray, with the default origin and direction both 0
let r1 = new Ray();

// Construct a new ray using the specified origin and direction
let r2 = new Ray(new Vector3(0,0,0), new Vector3(1,1,1));

// Clone a ray object
let r3 = r1.copy();

// Get the ray direction
let direction = r1.direction;

// Set the ray direction
r1.direction = new Vector3( 1, 1, 1);

// Calculate a point on the ray
let result1 = r1.at(1);

// Set the ray origin
r1.setOrigin(new Vector3(1,1,1));

// Get the origin of the ray
let result2 = r1.getOrigin();

```

## MathUtil

```ts
import { MathUtil, Vector3, Matrix4 } from '@orillusion/core';

// Limit a numeric value within a certain range
let result1 = MathUtil.clampf(1, 0, 2);

// Normalize an angle to limit it within the range [-180, 180]
let result2 = MathUtil.normalizeAngle(100);

// Return the fractional part of a number
let result3 = MathUtil.fract(1.1);

// Calculate the angle between two vectors
let result4 = MathUtil.angle_360(new Vector3(10, 10, 10), new Vector3(20, 20, 20));

// Calculate the quaternion that transforms from one direction to another
let result5 = MathUtil.fromToRotation(new Vector3(10, 10, 10), new Vector3(20, 20, 20));

// Calculate the vector transformation and assign the result to the input variable
let result6 = MathUtil.transformVector(new Matrix4(), new Vector3(20, 20, 20))
```
