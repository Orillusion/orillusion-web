[**@orillusion/physics-rapier**](../README.md)

***

# Interface: WheelOptions

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:7](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L7)

## Properties

### chassisConnection

> **chassisConnection**: `Vector3`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:9](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L9)

Wheel attach point on chassis (chassis-local).

***

### suspensionDirection?

> `optional` **suspensionDirection?**: `Vector3`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:11](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L11)

Suspension direction in chassis-local space. Typically -Y (down).

***

### axleDirection?

> `optional` **axleDirection?**: `Vector3`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:13](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L13)

Wheel rolling axle direction in chassis-local space. Typically +X.

***

### suspensionRestLength

> **suspensionRestLength**: `number`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:15](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L15)

Resting suspension length.

***

### radius

> **radius**: `number`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:17](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L17)

Wheel radius.

***

### stiffness?

> `optional` **stiffness?**: `number`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:19](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L19)

Suspension stiffness coefficient. Default 30.

***

### dampingCompression?

> `optional` **dampingCompression?**: `number`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:21](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L21)

Damping when compressing the suspension. Default 0.83.

***

### dampingRelaxation?

> `optional` **dampingRelaxation?**: `number`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:23](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L23)

Damping when relaxing the suspension. Default 0.88.

***

### frictionSlip?

> `optional` **frictionSlip?**: `number`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:25](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L25)

Tire friction coefficient (longitudinal). Default 1000.

***

### sideFrictionStiffness?

> `optional` **sideFrictionStiffness?**: `number`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:27](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L27)

Side-slip friction stiffness. Default 1.
