type Vec3Like = { x: number; y: number; z: number } | [number, number, number];

export default class Vec3 {
    constructor(public x: number, public y: number, public z: number) {}

    // Methods:
    /**
     * Applies a callback function to each component of this vector and another vector.
     * @param other - The other vector or array of numbers.
     * @param callback - The callback function to apply.
     * @returns A new Vec3 with the result of the callback function applied to each component.
     */
    mapWith(other: Vec3Like, callback: (v1: number, v2: number) => number) {
        if (Array.isArray(other)) {
            return new Vec3(
                callback(this.x, other[0]),
                callback(this.y, other[1]),
                callback(this.z, other[2])
            );
        } else {
            return new Vec3(
                callback(this.x, other.x),
                callback(this.y, other.y),
                callback(this.z, other.y)
            );
        }
    }

    /**
     * Applies a callback function to each component of this vector and another vector, in place.
     * @param other - The other vector or array of numbers.
     * @param callback - The callback function to apply.
     * @returns This Vec3.
     */
    imapWith(other: Vec3Like, callback: (v1: number, v2: number) => number) {
        if (Array.isArray(other)) {
            this.x = callback(this.x, other[0]);
            this.y = callback(this.y, other[1]);
            this.z = callback(this.z, other[2]);
        } else {
            this.x = callback(this.x, other.x);
            this.y = callback(this.y, other.y);
            this.z = callback(this.z, other.z);
        }

        return this;
    }

    /**
     * Adds a scaler to this vector.
     * @param scaler - The scaler to add.
     * @returns A new Vec3 with the scaler added.
     */
    add(scaler: number): Vec3;
    /**
     * Adds another vector to this vector.
     * @param other - The vector to add.
     * @returns A new Vec3 with the other vector added.
     */
    add(other: Vec3): Vec3;
    add(other: number | Vec3): Vec3 {
        if (typeof other === "number") {
            return new Vec3(this.x + other, this.y + other, this.z + other);
        } else {
            return new Vec3(
                this.x + other.x,
                this.y + other.y,
                this.z + other.z
            );
        }
    }
    /**
     * Adds a scaler to this vector, in place.
     * @param scaler - The scaler to add.
     * @returns This Vec3.
     */
    iadd(scaler: number): Vec3;
    /**
     * Adds another vector to this vector, in place.
     * @param other - The vector to add.
     * @returns This Vec3.
     */
    iadd(other: Vec3): Vec3;
    iadd(other: number | Vec3): Vec3 {
        if (typeof other === "number") {
            this.x += other;
            this.y += other;
            this.z += other;
        } else {
            this.x += other.x;
            this.y += other.y;
            this.z += other.z;
        }
        return this;
    }
    /**
     * Subtracts a scaler from this vector.
     * @param scaler - The scaler to subtract.
     * @returns A new Vec3 with the scaler subtracted.
     */
    sub(scaler: number): Vec3;
    /**
     * Subtracts another vector from this vector.
     * @param other - The vector to subtract.
     * @returns A new Vec3 with the other vector subtracted.
     */
    sub(other: Vec3): Vec3;
    sub(other: number | Vec3): Vec3 {
        if (typeof other === "number") {
            return new Vec3(this.x - other, this.y - other, this.z - other);
        } else {
            return new Vec3(
                this.x - other.x,
                this.y - other.y,
                this.z - other.z
            );
        }
    }
    /**
     * Subtracts a scaler from this vector, in place.
     * @param scaler - The scaler to subtract.
     * @returns This Vec3.
     */
    isub(scaler: number): Vec3;
    /**
     * Subtracts another vector from this vector, in place.
     * @param other - The vector to subtract.
     * @returns This Vec3.
     */
    isub(other: Vec3): Vec3;
    isub(other: number | Vec3): Vec3 {
        if (typeof other === "number") {
            this.x -= other;
            this.y -= other;
            this.z -= other;
        } else {
            this.x -= other.x;
            this.y -= other.y;
            this.z -= other.z;
        }
        return this;
    }
    /**
     * Multiplies this vector by a scaler.
     * @param scaler - The scaler to multiply by.
     * @returns A new Vec3 multiplied by the scaler.
     */
    mul(scaler: number): Vec3;
    /**
     * Multiplies this vector by another vector.
     * @param other - The vector to multiply by.
     * @returns A new Vec3 multiplied by the other vector.
     */
    mul(other: Vec3): Vec3;
    mul(other: number | Vec3): Vec3 {
        if (typeof other === "number") {
            return new Vec3(this.x * other, this.y * other, this.z * other);
        } else {
            return new Vec3(
                this.x * other.x,
                this.y * other.y,
                this.z * other.z
            );
        }
    }
    /**
     * Multiplies this vector by a scaler, in place.
     * @param scaler - The scaler to multiply by.
     * @returns This Vec3.
     */
    imul(scaler: number): Vec3;
    /**
     * Multiplies this vector by another vector, in place.
     * @param other - The vector to multiply by.
     * @returns This Vec3.
     */
    imul(other: Vec3): Vec3;
    imul(other: number | Vec3): Vec3 {
        if (typeof other === "number") {
            this.x *= other;
            this.y *= other;
            this.z *= other;
        } else {
            this.x *= other.x;
            this.y *= other.y;
            this.z *= other.z;
        }
        return this;
    }
    /**
     * Divides this vector by a scaler.
     * @param scaler - The scaler to divide by.
     * @returns A new Vec3 divided by the scaler.
     */
    div(scaler: number): Vec3;
    /**
     * Divides this vector by another vector.
     * @param other - The vector to divide by.
     * @returns A new Vec3 divided by the other vector.
     */
    div(other: Vec3): Vec3;
    div(other: number | Vec3): Vec3 {
        if (typeof other === "number") {
            return new Vec3(this.x / other, this.y / other, this.z / other);
        } else {
            return new Vec3(
                this.x / other.x,
                this.y / other.y,
                this.z / other.z
            );
        }
    }
    /**
     * Divides this vector by a scaler, in place.
     * @param scaler - The scaler to divide by.
     * @returns This Vec3.
     */
    idiv(scaler: number): Vec3;
    /**
     * Divides this vector by another vector, in place.
     * @param other - The vector to divide by.
     * @returns This Vec3.
     */
    idiv(other: Vec3): Vec3;
    idiv(other: number | Vec3): Vec3 {
        if (typeof other === "number") {
            this.x /= other;
            this.y /= other;
            this.z /= other;
        } else {
            this.x /= other.x;
            this.y /= other.y;
            this.z /= other.z;
        }
        return this;
    }
    /**
     * Calculates the average of this vector and another vector.
     * @param other - The other vector.
     * @returns A new Vec3 representing the average.
     */
    avg(other: Vec3) {
        return new Vec3(
            (this.x + other.x) / 2,
            (this.y + other.y) / 2,
            (this.z + other.z) / 2
        );
    }
    /**
     * Averages this vector with another vector, in place.
     * @param other - The other vector.
     * @returns This Vec3.
     */
    iavg(other: Vec3) {
        this.x = (this.x + other.x) / 2;
        this.y = (this.y + other.y) / 2;
        this.z = (this.z + other.z) / 2;
        return this;
    }
    /**
     * Calculates the dot product of this vector and another vector.
     * @param other - The other vector.
     * @returns The dot product.
     */
    dot(other: Vec3) {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    }
    /**
     * Calculates the cross product of this vector and another vector.
     * @param other - The other vector.
     * @returns A new Vec3 representing the cross product.
     */
    cross(other: Vec3) {
        return new Vec3(
            other.z * this.y - other.y * this.z,
            other.x * this.z - other.z * this.x,
            other.y * this.x - other.x * this.y
        );
    }
    /**
     * Returns a new Vec3 with the maximum value of each component of this vector and a scaler.
     * @param scaler - The scaler to compare with.
     * @returns A new Vec3 with the maximum value of each component.
     */
    max(scaler: number): Vec3;
    /**
     * Returns a new Vec3 with the maximum value of each component of this vector and another vector.
     * @param other - The other vector to compare with.
     * @returns A new Vec3 with the maximum value of each component.
     */
    max(other: Vec3): Vec3;
    max(other: number | Vec3): Vec3 {
        return new Vec3(
            Math.max(this.x, typeof other === "number" ? other : other.x),
            Math.max(this.y, typeof other === "number" ? other : other.y),
            Math.max(this.z, typeof other === "number" ? other : other.z)
        );
    }
    /**
     * Sets each component of this vector to the maximum value of each component of this vector and a scaler, in place.
     * @param scaler - The scaler to compare with.
     * @returns This Vec3.
     */
    imax(scaler: number): Vec3;
    /**
     * Sets each component of this vector to the maximum value of each component of this vector and another vector, in place.
     * @param other - The other vector to compare with.
     * @returns This Vec3.
     */
    imax(other: Vec3): Vec3;
    imax(other: number | Vec3): Vec3 {
        this.x = Math.max(this.x, typeof other === "number" ? other : other.x);
        this.y = Math.max(this.y, typeof other === "number" ? other : other.y);
        this.y = Math.max(this.z, typeof other === "number" ? other : other.z);
        return this;
    }
    /**
     * Returns a new Vec3 with the minimum value of each component of this vector and a scaler.
     * @param scaler - The scaler to compare with.
     * @returns A new Vec3 with the minimum value of each component.
     */
    min(scaler: number): Vec3;
    /**
     * Returns a new Vec3 with the minimum value of each component of this vector and another vector.
     * @param other - The other vector to compare with.
     * @returns A new Vec3 with the minimum value of each component.
     */
    min(other: Vec3): Vec3;
    min(other: number | Vec3): Vec3 {
        return new Vec3(
            Math.min(this.x, typeof other === "number" ? other : other.x),
            Math.min(this.y, typeof other === "number" ? other : other.y),
            Math.min(this.z, typeof other === "number" ? other : other.z)
        );
    }
    /**
     * Sets each component of this vector to the minimum value of each component of this vector and a scaler, in place.
     * @param scaler - The scaler to compare with.
     * @returns This Vec3.
     */
    imin(scaler: number): Vec3;
    /**
     * Sets each component of this vector to the minimum value of each component of this vector and another vector, in place.
     * @param other - The other vector to compare with.
     * @returns This Vec3.
     */
    imin(other: Vec3): Vec3;
    imin(other: number | Vec3): Vec3 {
        this.x = Math.min(this.x, typeof other === "number" ? other : other.x);
        this.y = Math.min(this.y, typeof other === "number" ? other : other.y);
        this.y = Math.min(this.z, typeof other === "number" ? other : other.z);
        return this;
    }
    /**
     * Applies a callback function to each component of this vector.
     * @param callback - The callback function to apply.
     * @returns A new Vec3 with the callback function applied to each component.
     */
    map(callback: (value: number) => number) {
        return new Vec3(callback(this.x), callback(this.y), callback(this.z));
    }
    /**
     * Applies a callback function to each component of this vector, in place.
     * @param callback - The callback function to apply.
     * @returns This Vec3.
     */
    imap(callback: (value: number) => number) {
        this.x = callback(this.x);
        this.y = callback(this.y);
        this.z = callback(this.z);
        return this;
    }
    /**
     * Returns a new Vec3 with the sign of each component of this vector.
     * @returns A new Vec3 with the sign of each component.
     */
    sign() {
        return this.map(Math.sign);
    }
    /**
     * Sets each component of this vector to its sign, in place.
     * @returns This Vec3.
     */
    isign() {
        return this.imap(Math.sign);
    }
    /**
     * Calculates the length of this vector.
     * @returns The length of this vector.
     */
    len() {
        return Math.sqrt(this.lenSq());
    }
    /**
     * Calculates the squared length of this vector.
     * @returns The squared length of this vector.
     */
    lenSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    /**
     * Calculates the sum of the components of this vector.
     * @returns The sum of the components.
     */
    sum() {
        return this.x + this.y + this.z;
    }
    /**
     * Normalizes this vector.
     * @returns A new Vec3 representing the normalized vector.
     */
    norm() {
        return this.normalize();
    }
    /**
     * Normalizes this vector.
     * @returns A new Vec3 representing the normalized vector.
     */
    normalize() {
        return this.div(this.len());
    }
    /**
     * Normalizes this vector, in place.
     * @returns This Vec3.
     */
    inorm() {
        return this.normalize();
    }
    /**
     * Normalizes this vector, in place.
     * @returns This Vec3.
     */
    inormalize() {
        return this.idiv(this.len());
    }
    /**
     * Clones this vector.
     * @returns A new Vec3 with the same components as this vector.
     */
    clone() {
        return new Vec3(this.x, this.y, this.z);
    }
    /**
     * Returns a string representation of this vector.
     * @returns A string representation of this vector.
     */
    toString() {
        return `Vec3(${this.x}, ${this.y}, ${this.z})`;
    }
    /**
     * Sets the components of this vector to a scaler value.
     * @param scaler - The scaler value to set the components to.
     * @returns This Vec3.
     */
    set(scaler: number): this;
    /**
     * Sets the components of this vector to the components of another vector.
     * @param vec - The vector to set the components to.
     * @returns This Vec3.
     */
    set(vec: Vec3): this;
    /**
     * Sets the components of this vector to the given x, y, and z values.
     * @param x - The x value to set.
     * @param y - The y value to set.
     * @param z - The z value to set.
     * @returns This Vec3.
     */
    set(x: number, y: number, z: number): this;
    /**
     * Sets the components of this vector to the values in the given array.
     * @param arr - The array of values to set the components to.
     * @returns This Vec3.
     */
    set(arr: [number, number, number]): this;
    set(
        a1: number | Vec3 | [number, number, number],
        a2?: number,
        a3?: number
    ) {
        if (typeof a1 === "number") {
            if (typeof a2 == "number" && typeof a3 == "number") {
                this.x = a1;
                this.y = a2;
                this.z = a3;
            } else {
                this.x = this.y = this.z = a1;
            }
        } else {
            if (Array.isArray(a1)) {
                this.x = a1[0];
                this.y = a1[1];
                this.z = a1[2];
            } else {
                this.x = a1.x;
                this.y = a1.y;
                this.z = a1.z;
            }
        }

        return this;
    }
    /**
     * Linearly interpolates between this vector and another vector.
     * @param other - The other vector.
     * @param alpha - The interpolation factor.
     * @returns A new Vec3 representing the interpolated vector.
     */
    mix(other: Vec3, alpha: number) {
        return new Vec3(
            this.x + (other.x - this.x) * alpha,
            this.y + (other.y - this.y) * alpha,
            this.z + (other.z - this.z) * alpha
        );
    }
    /**
     * Linearly interpolates between this vector and another vector, in place.
     * @param other - The other vector.
     * @param alpha - The interpolation factor.
     * @returns This Vec3.
     */
    imix(other: Vec3, alpha: number) {
        this.x += (other.x - this.x) * alpha;
        this.y += (other.y - this.y) * alpha;
        this.z += (other.z - this.z) * alpha;
        return this;
    }
    /**
     * Inverts this vector.
     * @returns A new Vec3 representing the inverted vector.
     */
    inv() {
        return new Vec3(-this.x, -this.y, -this.z);
    }
    /**
     * Inverts this vector, in place.
     * @returns This Vec3.
     */
    iinv() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;

        return this;
    }
    /**
     * Converts this vector to an array.
     * @returns An array representing this vector.
     */
    toArray(): [number, number, number] {
        return [this.x, this.y, this.z];
    }
    /**
     * Converts this vector to an object.
     * @returns An object representing this vector.
     */
    toObject(): { x: number; y: number; z: number } {
        return { x: this.x, y: this.y, z: this.z };
    }
    /**
     * Sets the components of this vector to zero, in place.
     * @returns This Vec3.
     */
    izero() {
        this.x = 0;
        this.y = 0;
        this.z = 0;

        return this;
    }
    /**
     * Calculates the distance between this vector and another vector represented as an array.
     * @param arr - The other vector as an array.
     * @returns The distance between the vectors.
     */
    dist(arr: [number, number, number]): number;
    /**
     * Calculates the distance between this vector and another vector represented as an object.
     * @param obj - The other vector as an object.
     * @returns The distance between the vectors.
     */
    dist(obj: { x: number; y: number; z: number }): number;
    /**
     * Calculates the distance between this vector and another vector.
     * @param other - The other vector.
     * @returns The distance between the vectors.
     */
    dist(other: Vec3): number;
    dist(
        other:
            | Vec3
            | { x: number; y: number; z: number }
            | [number, number, number]
    ) {
        if (Array.isArray(other)) {
            return Math.sqrt(
                (this.x - other[0]) * (this.x - other[0]) +
                    (this.y - other[1]) * (this.y - other[1]) +
                    (this.z - other[2]) * (this.z - other[2])
            );
        } else {
            return Math.sqrt(
                (this.x - other.x) * (this.x - other.x) +
                    (this.y - other.y) * (this.y - other.y) +
                    (this.z - other.z) * (this.z - other.z)
            );
        }
    }
    /**
     * Calculates the squared distance between this vector and another vector represented as an array.
     * @param arr - The other vector as an array.
     * @returns The squared distance between the vectors.
     */
    distSq(arr: [number, number, number]): number;
    /**
     * Calculates the squared distance between this vector and another vector represented as an object.
     * @param obj - The other vector as an object.
     * @returns The squared distance between the vectors.
     */
    distSq(obj: { x: number; y: number; z: number }): number;
    /**
     * Calculates the squared distance between this vector and another vector.
     * @param other - The other vector.
     * @returns The squared distance between the vectors.
     */
    distSq(other: Vec3): number;
    distSq(
        other:
            | Vec3
            | { x: number; y: number; z: number }
            | [number, number, number]
    ) {
        if (Array.isArray(other)) {
            return (
                (this.x - other[0]) * (this.x - other[0]) +
                (this.y - other[1]) * (this.y - other[1]) +
                (this.z - other[2]) * (this.z - other[2])
            );
        } else {
            return (
                (this.x - other.x) * (this.x - other.x) +
                (this.y - other.y) * (this.y - other.y) +
                (this.z - other.z) * (this.z - other.z)
            );
        }
    }

    // Static:
    /**
     * Returns a new Vec3 with all components set to zero.
     * @returns A new Vec3 with all components set to zero.
     */
    static zero() {
        return Vec3.fromScaler(0);
    }
    /**
     * Returns a new Vec3 with all components set to one.
     * @returns A new Vec3 with all components set to one.
     */
    static one() {
        return Vec3.fromScaler(1);
    }
    /**
     * Creates a new Vec3 from a scaler value.
     * @param scaler - The scaler value.
     * @returns A new Vec3 with all components set to the scaler value.
     */
    static fromScaler(scaler: number) {
        return new Vec3(scaler, scaler, scaler);
    }
    /**
     * Creates a new Vec3 from an array of values.
     * @param array - The array of values.
     * @returns A new Vec3 with components set to the values in the array.
     */
    static fromArray(array: [number, number, number]) {
        return new Vec3(array[0], array[1], array[2]);
    }
    /**
     * Creates a new Vec3 from an object with x, y, and z properties.
     * @param object - The object with x, y, and z properties.
     * @returns A new Vec3 with components set to the values in the object.
     */
    static fromObject(object: { x: number; y: number; z: number }) {
        return new Vec3(object.x, object.y, object.z);
    }
    /**
     * Creates a new Vec3 from a scaler value.
     * @param scaler - The scaler value.
     * @returns A new Vec3 with all components set to the scaler value.
     */
    static from(scaler: number): Vec3;
    /**
     * Creates a new Vec3 from an array of values.
     * @param array - The array of values.
     * @returns A new Vec3 with components set to the values in the array.
     */
    static from(array: [number, number, number]): Vec3;
    /**
     * Creates a new Vec3 from an object with x, y, and z properties.
     * @param object - The object with x, y, and z properties.
     * @returns A new Vec3 with components set to the values in the object.
     */
    static from(object: { x: number; y: number; z: number }): Vec3;
    static from(
        other:
            | number
            | [number, number, number]
            | { x: number; y: number; z: number }
    ) {
        if (typeof other == "number") return Vec3.fromScaler(other);
        if (Array.isArray(other)) return Vec3.fromArray(other);

        return Vec3.fromObject(other);
    }
    /**
     * Creates a new Vec3 with random components.
     * @param scale - The scale of the random components.
     * @returns A new Vec3 with random components.
     */
    static random(scale: number = 1) {
        return new Vec3(
            Math.random() * scale,
            Math.random() * scale,
            Math.random() * scale
        );
    }
}
