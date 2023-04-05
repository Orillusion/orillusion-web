# Mathematics
In a rendering scene, we often apply transformations such as translation, rotation, and scaling to objects (these operations are collectively referred to as "transformations") to achieve the desired interactive effect. We generally perform these transformation calculations using vectors, quaternions, matrices, etc. Therefore, we provide a mathematical library to complete related operations such as vector, quaternion, and matrix operations. In addition, the mathematical library provides more abundant classes to help us describe points, lines, geometric bodies in space, and determine their intersections and spatial relationships in 3D space.

| Type |  Description|
| --- | --- |
| [Vector2](/api/classes/Vector2) | 2D vector containing x and y components |
| [Vector3](/api/classes/Vector3) | 3D vector containing x, y, z, and w components |
| [Rect](/api/classes/Rect) | Rectangle region containing x, y, w, and h components |
| [Color](/api/classes/Color) | Color class using RGBA |
| [Quaternion](/api/classes/Quaternion) | Quaternion containing x, y, z, and w components responsible for rotation-related operations|
| [Matrix3](/api/classes/Matrix3) | 3x3 matrix providing basic matrix operations and transformation-related operations |
| [Matrix4](/api/classes/Matrix4) | 4x4 matrix providing basic matrix operations and transformation-related operations |
| [MathUti](/api/classes/MathUtil) | Built-in mathematical basic calculation factory function |
| [Plane](/api/classes/Plane) | Mathematical plane class |
| [Ray](/api/classes/Ray) | Ray |
| Rand | Normal random |
| Random | Various types of random distribution functions |
| Bezier2D |  |
| Bezier3D |  |
| CubicBezierCurve |  |
| CubicBezierPath |  |
| GradientNew | Color gradient |
| ParticleMath |  Mathematical library used in particle systems |

## Vector
The most basic definition of a vector is a direction. More formally, a vector has a direction (Direction) and a magnitude (Magnitude, also known as strength or length). You can think of a vector as an instruction on a treasure map: "Go left 10 steps, go north 3 steps, and then go right 5 steps"; "left" is the direction, and "10 steps" is the length of the vector. So there are three vectors in the treasure map instructions. Vectors can be in any dimension, but we usually only use 2 to 4 dimensions. If a vector has two dimensions, it represents the direction of a plane (imagine a 2D image), and when it has three dimensions, it can express the direction of a 3D world.
### 2D Vector
```ts
import {Vector2} from "@orillusion/core";

// Create a default 2D vector, with x and y component values of 0.0
let v1 = new Vector2();

// Create a 2D vector, with x and y component values of 1.0
let v2 = new Vector2(1.0, 1.0);

// Set specified values
v1.set(2.0, 2.0);

// Get the component values of the vector
let x = v1.x;
let y = v1.y;

// Calculate the distance between two vectors
let result1 = v1.distance(v2);

// Calculate the sum of two vectors
let result2 = v1.add(v2);

// Calculate the difference between two vectors
let result3 = v1.sum(v2);

// Multiply both components of the vector by a specified value
let result4 = v1.scale(2.0);

// Divide both components of the vector by a specified value
let result5 = v1.divide(2.0);

// Calculate the length of the vector
let result6 = v1.length();

// Calculate the angle between the current vector and a target vector
let result7 = v1.getAngle(v2);

// Calculate the angle between two vectors using a static function
let result8 = Vector2.getAngle(v1, v2);

// Determine whether the current vector is equal to a given vector
let result9 = v1.equals(v2);

// Clone the current vector
let result10 = v1.clone();

// Assign a value to the forward vector using a given vector
v1.copyFrom(v2);

// Convert a vector to a unit vector
v1.normalize();

```
### 3D vector
```ts
import {Vector3} from "@orillusion/core";

// Create a default 3D vector with values of 0.0 for x, y, and z components
let v1 = new Vector3();

// Create a two-dimensional vector, where the x, y, z, and w components are all 1.0
let v2 = new Vector3(1.0, 1.0, 1.0, 1.0);

// Set the specified value
v1.set(2.0, 2.0, 2.0, 2.0);

// Obtain the component values of the vector
let x = v1.x;
let y = v1.y;
let z = v1.z;
let w = v1.w;

// Calculate the length of the vector
let result1 = v1.length();

// Calculate the sum of two vectors
let result2 = v1.add(v2);

// Calculate the difference between two vectors
let result3 = v1.subtract(v2);

// Multiply the two components of this vector by a specified vector simultaneously
let result4 = v1.multiply(v2);

// Divide the two components of this vector by a specified vector simultaneously
let result5 = v1.divided(v2);

// Calculate the distance of a vector using a static function
let result6 = Vector3.distance(v1, v2);

// Calculate the angle between two vectors using a static function
let result7 = Vector3.getAngle(v1, v2);

// Calculate whether the current vector is equal to a given directional quantity
let result9 = v1.equals(v2);

// Clone the current vector
let result9 = v1.clone();

// Assign a value to the forward vector using a given vector
v1.copyFrom(v2);

// Convert a vector to a unit vector
v1.normalize();

```
## Rectangle
Used to represent a rectangular area
```ts
import {Rectangle} from "@orillusion/core";

// Construct a rectangular area with default values of 0
let r1 = new Rectangle();

// Construct a rectangular area using the specified values
let r2 = new Rectangle(0, 0, 10, 10);

// Obtain rectangular width
let h = r1.width;

// Set rectangular width
r1.width = 100;

// Obtain rectangular height
let h = r1.height;

// Set Rectangle Height
r1.height = 100;

// Clone a new rectangle
let r3 = r1.clone();

// Overwrite the existing values of the rectangle with new values
r3.copyFrom(r2);

// Copy the value of this object to the given rectangular object
r2.copyTo(r3);

// Determine whether the given point is within the region
let result1 = r1.inner(0, 0);

// Determine whether rectangular areas are equal
let result2 = r1.equal(r2)

// Determine if there is overlap in the rectangular area
let result3 = r1.equalInnerArea(r2);

// Obtain the overlapping part of two rectangular regions
let result4 = r1.innerArea(r2);

```

## Color
```ts
import { Color } from '@orillusion/core';

// Create a Color object with a default value of 1.0
let c1 = new Color();

// Create a Color object with the given value
let c2 = new Color(1, 1, 1, 1);

// Obtain the red component
let r = c1.r;

// Obtain green component
let g = c1.g;

// Obtain Blue Component
let b = c1.b;

// Obtain transparency
let a = c1.a;

// Set color values
c1.setTo(0.5, 0.5, 0.5, 1);

// Get Random Colors
let c3 = Color.random();

// Clone Color Values
let c4 = c3.clone();

// Setting color values using strings
let c3.setHex('#AAA')

// Get color value string
let result1 = c1.getHex();

```


## Quaternion
Quaternions are simple hypercomplex number numbers. In the graphics engine, quaternions are mainly used for 3D rotation (the relationship between quaternions and 3D rotation). They can represent not only quaternions but also Euler angles, axis angles, matrices and other forms of rotation. Quaternions have the following advantages:

* Solved the problem of universal joint deadlock
* Only four floating point numbers need to be stored, which is lighter than the matrix
* Compared to matrices, both inverse and concatenation operations are more efficient

```ts
import { Quaternion } from '@orillusion/core';

// Create a quaternion object using default values, with x, y, z, and w components all having values of 0
let q1 = new Quaternion();

// Create a quaternion object with specified values
let q2 = new Quaternion(0, 0, 0, 1);

// Set the values of quaternions, and sequentially set the values of x, y, z, and w components
q2.set(0, 0, 0, 1);

// Perform unit rotation quaternion
let result1 = q1.identity();

// Quaternion division
q1.divide(q2);

// Multiplying quaternions
result1.multiply(q1, q2);

// Set the quaternion from the rotation given by the axis and angle
q1.fromAxisAngle(new Vector3(), 15);

// Convert quaternions to angles and return
let result2 = q1.toAxisAngle(new Vector3());

// Filling Quaternion Objects with a Given Euler Rotation Using Numeric Values
q1.fromEulerAngles(1, 1, 1);

// Converting quaternions to Euler angles returns
let result3 = q1.toEulerAngles();

// Unitize quaternions. Convert this quaternion to a unit coefficient
q1.normalize();

// Rotate a 3-dimensional coordinate point
let result4 = q1.transformVector(new Vector3());

// Copy data from quaternion to this instance
q1.copyFrom(q2);


```

## Matrix
In 3D graphics engines, calculations can be performed in multiple different Cartesian coordinate spaces, and transitioning from one coordinate space to another requires the use of transformation matrices. The Matrix module in our math library is precisely designed to provide this capability.

### Three-dimensional matrix
```ts
import { Matrix3 } from '@orillusion/core';

// Create a 3D matrix using default values
let m1 = new Matrix3();

// Create a 3-dimensional matrix using the specified values
let m2 = new Matrix3(10, 0, 0, 10, 0, 0);

// Clone a new object
let m3 = m1.clone();

// Merge the current matrix with the target matrix
m1.concat(m2);

// Overwrite the current matrix value with the target matrix value
m1.copyFrom(m2);

// Reset to identity matrix
m1.identity();

// Invert this matrix
m.invert();

// Rotate according to angle
m1.rotate(10);

// Scale based on offset
m1.scale(10,10);

// Determine whether the matrix is equal
let result1 = m1.equal(m2);
```

### Four-dimensional matrix
```ts
import { Matrix4, Vector3 } from '@orillusion/core';

// Create a 4-dimensional matrix using default values
let m1 = new Matrix4();

// Specify the creation of a wasm 4-dimensional matrix
let m2 = new Matrix4(false);

// Clone a new object
let m3 = m1.clone();

// Multiplicative matrix
m1.multiply(m2);

// Additive matrix
m1.add(m2);

// Matrix subtraction
m1.sub(m2);

// Obtain inverse matrix
m.invert();

// Current matrix transpose
m1.transpose();

// Set matrix displacement
m1.position = new Vector3(10,10, 10);

// Return matrix displacement
let position = m1.position;

// Set matrix scaling
m1.scale = new Vector3(10,10, 10);

// Return to matrix scaling
let scale = m1.scale;

```

## Flat
```ts
import { Plane, Vector3, Ray } from '@orillusion/core';

// Construct a new planar object, using planar position and planar normal as constructors
let p1 = new Plane(new Vector3(0,0,0), new Vector3(0,0,1));

// Copy Plane
let p2 = p1.clone();

// Determine whether the plane intersects with a certain line segment and calculate the intersection point
let point1 = new Vector3();
let result1 = p1.intersectsLine(new Vector3(0,0,0), new Vector3(10,10,10), point1);

// Determine whether the plane intersects with a certain ray and calculate the intersection point
let point2 = new Vector3();
let result2 = p1.intersectsRay(new Ray(), point2);

```

## Ray
```ts
import { Plane, Vector3, Ray } from '@orillusion/core';

// Construct a new ray with a default starting point and direction of 0
let r1 = new Ray();

// Construct a new ray using the specified starting point and direction
let r2 = new Ray(new Vector3(0,0,0), new Vector3(1,1,1));

// Clone a ray object
let r3 = r1.copy();

// Obtain ray direction
let direction = r1.direction;

// Set ray direction
r1.direction = new Vector3( 1, 1, 1);

// Calculate a point on a ray
let result1 = r1.at(1);

// Set ray start point
r1.setOrigin(new Vector3(1,1,1));

// Obtain the starting point of the ray
let result2 = r1.getOrigin();

```

## MathUtil

```ts
import { MathUtil, Vector3, Matrix4 } from '@orillusion/core';

// Limit numerical values to a certain range
let result1 = MathUtil.clampf(1, 0, 2);

// Standardize the perspective to limit it within the range of [-180, 180]
let result2 = MathUtil.normalizeAngle(100);

// Returns the decimal part of a certain number
let result3 = MathUtil.fract(1.1);

// Calculate the angle between two vectors
let result4 = MathUtil.angle_360(new Vector3(10, 10, 10), new Vector3(20, 20, 20));

// Calculate quaternions that transform from one direction to another
let result5 = MathUtil.fromToRotation(new Vector3(10, 10, 10), new Vector3(20, 20, 20));

// Calculate the vector transformation and assign the result to the input variable
let result6 = MathUtil.transformVector(new Matrix4(), new Vector3(20, 20, 20))
```