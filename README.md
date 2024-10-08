### Voctor

**Voctor** is a versatile and high-performance library for vector mathematics, providing easy-to-use implementations for vectors. Ideal for applications in graphics, gaming, and scientific computing, it offers efficient arithmetic operations, vector manipulations, and utility functions like normalization and distance calculations. Integrate `voctor` into your project with ease to streamline vector operations and enhance your computational tasks.

[![npm version](https://badge.fury.io/js/voctor.svg)](https://badge.fury.io/js/voctor)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Installation:**

```bash
npm install voctor
```

**Usage Example:**

```typescript
import { Vec2, Vec3 } from "voctor";

{
    const a = new Vec2(1, 5);
    const b = Vec2.fromArray([1, 0]);

    console.log(a.add(b)); // Vec2 { x: 2, y: 5 }
}

{
    const a = Vec3.fromScaler(100);
    const b = Vec3.fromObject({
        x: 1,
        y: 8,
        z: 16,
    });

    console.log(a.sub(b)); // Vec3 { x: 99, y: 92, z: 84 }
}
```
