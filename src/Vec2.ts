export type Vec2Like = [number, number] | { x: number; y: number };

export default class Vec2 {
    constructor(public x: number, public y: number) {}

    // Methods:
    /**
     * Applies a callback function to each component of this vector and another vector.
     * @param other - The other vector or array of numbers.
     * @param callback - The callback function to apply.
     * @returns A new Vec2 with the result of the callback function applied to each component.
     */
    mapWith(
        other: Vec2Like,
        callback: (self: number, other: number) => number
    ) {
        if (Array.isArray(other)) {
            return new Vec2(
                callback(this.x, other[0]),
                callback(this.y, other[1])
            );
        } else {
            return new Vec2(
                callback(this.x, other.x),
                callback(this.y, other.y)
            );
        }
    }

    /**
     * Applies a callback function to each component of this vector and another vector, in place.
     * @param other - The other vector or array of numbers.
     * @param callback - The callback function to apply.
     * @returns This Vec2.
     */
    imapWith(
        other: Vec2Like,
        callback: (self: number, other: number) => number
    ) {
        if (Array.isArray(other)) {
            this.x = callback(this.x, other[0]);
            this.y = callback(this.y, other[1]);
        } else {
            this.x = callback(this.x, other.x);
            this.y = callback(this.y, other.y);
        }

        return this;
    }

    /**
     * Adds a scalar to each component of this vector, returning a new vector.
     * @param scaler - The scalar to add.
     * @returns A new vector with the scalar added to each component.
     */
    add(scaler: number): Vec2;
    /**

     * Adds another vector to this vector, returning a new vector.
     * @param other - The vector to add.
     * @returns A new vector representing the sum of the two vectors.
     */
    add(other: Vec2Like): Vec2;
    add(other: number | Vec2Like): Vec2 {
        if (typeof other === "number") {
            return this.map((e) => e + other);
        } else {
            return this.mapWith(other, (self, other) => self + other);
        }
    }

    /**
     * Adds a scalar to each component of this vector in-place.
     * @param scaler - The scalar to add.
     * @returns This vector after the addition.
     */
    iadd(scaler: number): Vec2;
    /**
     * Adds another vector to this vector in-place.
     * @param other - The vector to add.
     * @returns This vector after the addition.
     */
    iadd(other: Vec2Like): Vec2;
    iadd(other: number | Vec2Like): Vec2 {
        if (typeof other === "number") {
            return this.imap((e) => e + other);
        } else {
            return this.imapWith(other, (self, other) => self + other);
        }
    }

    /**
     * Subtracts a scalar from each component of this vector, returning a new vector.
     * @param scaler - The scalar to subtract.
     * @returns A new vector with the scalar subtracted from each component.
     */
    sub(scaler: number): Vec2;
    /**
     * Subtracts another vector from this vector, returning a new vector.
     * @param other - The vector to subtract.
     * @returns A new vector representing the difference of the two vectors.
     */
    sub(other: Vec2Like): Vec2;
    sub(other: number | Vec2Like): Vec2 {
        if (typeof other === "number") {
            return this.map((e) => e - other);
        } else {
            return this.mapWith(other, (self, other) => self - other);
        }
    }

    /**
     * Subtracts a scalar from each component of this vector in-place.
     * @param scaler - The scalar to subtract.
     * @returns This vector after the subtraction.
     */
    isub(scaler: number): Vec2;
    /**
     * Subtracts another vector from this vector in-place.
     * @param other - The vector to subtract.
     * @returns This vector after the subtraction.
     */
    isub(other: Vec2Like): Vec2;
    isub(other: number | Vec2Like): Vec2 {
        if (typeof other === "number") {
            return this.imap((e) => e - other);
        } else {
            return this.imapWith(other, (self, other) => self - other);
        }
    }

    /**
     * Multiplies each component of this vector by a scalar, returning a new vector.
     * @param scaler - The scalar to multiply by.
     * @returns A new vector with each component multiplied by the scalar.
     */
    mul(scaler: number): Vec2;
    /**
     * Multiplies this vector by another vector component-wise, returning a new vector.
     * @param other - The vector to multiply by.
     * @returns A new vector representing the component-wise product of the two vectors.
     */
    mul(other: Vec2Like): Vec2;
    mul(other: number | Vec2Like): Vec2 {
        if (typeof other === "number") {
            return this.map((e) => e * other);
        } else {
            return this.mapWith(other, (self, other) => self * other);
        }
    }

    /**
     * Multiplies each component of this vector by a scalar in-place.
     * @param scaler - The scalar to multiply by.
     * @returns This vector after the multiplication.
     */
    imul(scaler: number): Vec2;
    /**
     * Multiplies this vector by another vector component-wise in-place.
     * @param other - The vector to multiply by.
     * @returns This vector after the multiplication.
     */
    imul(other: Vec2Like): Vec2;
    imul(other: number | Vec2Like): Vec2 {
        if (typeof other === "number") {
            return this.imap((e) => e * other);
        } else {
            return this.imapWith(other, (self, other) => self * other);
        }
    }

    /**
     * Divides each component of this vector by a scalar, returning a new vector.
     * @param scaler - The scalar to divide by.
     * @returns A new vector with each component divided by the scalar.
     */
    div(scaler: number): Vec2;
    /**
     * Divides this vector by another vector component-wise, returning a new vector.
     * @param other - The vector to divide by.
     * @returns A new vector representing the component-wise division of the two vectors.
     */
    div(other: Vec2Like): Vec2;
    div(other: number | Vec2Like): Vec2 {
        if (typeof other === "number") {
            return this.map((e) => e / other);
        } else {
            return this.mapWith(other, (self, other) => self / other);
        }
    }

    /**
     * Divides each component of this vector by a scalar in-place.
     * @param scaler - The scalar to divide by.
     * @returns This vector after the division.
     */
    idiv(scaler: number): Vec2;
    /**
     * Divides this vector by another vector component-wise in-place.
     * @param other - The vector to divide by.
     * @returns This vector after the division.
     */
    idiv(other: Vec2Like): Vec2;
    idiv(other: number | Vec2Like): Vec2 {
        if (typeof other === "number") {
            return this.imap((e) => e / other);
        } else {
            return this.imapWith(other, (self, other) => self / other);
        }
    }

    /**
     * Calculates the average of this vector and another vector, returning a new vector.
     * @param other - The other vector.
     * @returns A new vector representing the average of the two vectors.
     */
    avg(other: Vec2Like) {
        return this.mapWith(other, (self, other) => (self + other) / 2);
    }

    /**
     * Calculates the average of this vector and another vector in-place.
     * @param other - The other vector.
     * @returns This vector after averaging.
     */
    iavg(other: Vec2Like) {
        return this.imapWith(other, (self, other) => (self + other) / 2);
    }

    /**
     * Calculates the dot product of this vector and another vector.
     * @param other - The other vector.
     * @returns The dot product of the two vectors.
     */
    dot(other: Vec2Like): number {
        if (Array.isArray(other)) {
            return this.x * other[0] + this.y * other[1];
        } else {
            return this.x * other.x + this.y * other.y;
        }
    }

    /**
     * Computes the cross product of this vector and another Vec2.
     * @param other - The other Vec2.
     * @returns The cross product.
     */
    cross(other: Vec2Like): number {
        if (Array.isArray(other)) {
            return this.x * other[1] + this.y * other[0];
        } else {
            return this.x * other.y - this.y * other.x;
        }
    }

    /**
     * Returns a new vector with the maximum x and y components between this vector and a scalar.
     * @param scaler - The scalar to compare against.
     * @returns A new vector with the maximum components.
     */
    max(scaler: number): Vec2;
    /**
     * Returns a new vector with the maximum x and y components between this vector and another vector.
     * @param other - The other vector to compare against.
     * @returns A new vector with the maximum components.
     */
    max(other: Vec2Like): Vec2;
    max(other: number | Vec2Like): Vec2 {
        if (typeof other === "number") {
            return this.map((e) => Math.max(e, other));
        } else {
            return this.mapWith(other, Math.max);
        }
    }

    /**
     * Sets the x and y components of this vector to the maximum of their current values and the corresponding components of another vector or a scalar.
     * @param scaler - The scalar to compare against.
     * @returns This vector after the operation.
     */
    imax(scaler: number): Vec2;
    /**
     * Sets the x and y components of this vector to the maximum of their current values and the corresponding components of another vector.
     * @param other - The other vector to compare against.
     * @returns This vector after the operation.
     */
    imax(other: Vec2Like): Vec2;
    imax(other: number | Vec2Like): Vec2 {
        if (typeof other === "number") {
            return this.imap((e) => Math.max(e, other));
        } else {
            return this.imapWith(other, Math.max);
        }
    }

    /**
     * Returns a new vector with the minimum x and y components between this vector and a scalar.
     * @param scaler - The scalar to compare against.
     * @returns A new vector with the minimum components.
     */
    min(scaler: number): Vec2;
    /**
     * Returns a new vector with the minimum x and y components between this vector and another vector.
     * @param other - The other vector to compare against.
     * @returns A new vector with the minimum components.
     */
    min(other: Vec2Like): Vec2;
    min(other: number | Vec2Like): Vec2 {
        if (typeof other === "number") {
            return this.map((e) => Math.min(e, other));
        } else {
            return this.mapWith(other, Math.min);
        }
    }

    /**
     * Sets the x and y components of this vector to the minimum of their current values and the corresponding components of another vector or a scalar.
     * @param scaler - The scalar to compare against.
     * @returns This vector after the operation.
     */
    imin(scaler: number): Vec2;
    /**
     * Sets the x and y components of this vector to the minimum of their current values and the corresponding components of another vector.
     * @param other - The other vector to compare against.
     * @returns This vector after the operation.
     */
    imin(other: Vec2): Vec2;
    imin(other: number | Vec2): Vec2 {
        if (typeof other === "number") {
            return this.imap((e) => Math.min(e, other));
        } else {
            return this.imapWith(other, Math.min);
        }
    }

    /**
     * Applies a callback function to each component of the vector, returning a new vector with the results.
     * @param callback - The function to apply to each component.
     * @returns A new vector with the results of applying the callback function to each component.
     */
    map(callback: (value: number) => number) {
        return new Vec2(callback(this.x), callback(this.y));
    }

    /**
     * Applies a callback function to each component of the vector in-place.
     * @param callback - The function to apply to each component.
     * @returns This vector after applying the callback function to each component.
     */
    imap(callback: (value: number) => number) {
        this.x = callback(this.x);
        this.y = callback(this.y);
        return this;
    }

    /**
     * Returns a new vector with the sign of each component.
     * @returns A new vector with the sign of each component.
     */
    sign() {
        return this.map(Math.sign);
    }

    /**
     * Sets each component of this vector to its sign in-place.
     * @returns This vector after the operation.
     */
    isign() {
        return this.imap(Math.sign);
    }

    /**
     * Returns the length (magnitude) of this vector.
     * @returns The length of the vector.
     */
    len() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * Returns the squared length (magnitude) of this vector.
     * @returns The squared length of the vector.
     */
    lenSq() {
        return this.x * this.x + this.y * this.y;
    }

    /**
     * Returns the sum of the components of this vector.
     * @returns The sum of the vector's components.
     */
    sum() {
        return this.x + this.y;
    }

    /**
     * Returns a normalized copy of this vector (alias for .normalize).
     * @returns A new normalized vector.
     */
    norm() {
        return this.normalize();
    }

    /**
     * Returns a normalized copy of this vector.
     * @returns A new normalized vector.
     */
    normalize() {
        return this.div(this.len());
    }

    /**
     * Normalizes this vector in-place (alias for .inormalize).
     * @returns This vector after normalization.
     */
    inorm() {
        return this.normalize();
    }

    /**
     * Normalizes this vector in-place.
     * @returns This vector after normalization.
     */
    inormalize() {
        return this.idiv(this.len());
    }

    /**
     * Creates a copy of this vector.
     * @returns A new vector with the same components as this vector.
     */
    clone() {
        return new Vec2(this.x, this.y);
    }

    /**
     * Returns a string representation of this vector.
     * @returns A string in the format "Vec2(x, y)".
     */
    toString() {
        return `Vec2(${this.x}, ${this.y})`;
    }

    /**
     * Sets the components of this vector to a scalar value.
     * @param scaler - The scalar value to set both components to.
     * @returns This vector after the operation.
     */
    set(scaler: number): this;
    /**
     * Sets the components of this vector to the components of another vector.
     * @param vec - The vector to copy components from.
     * @returns This vector after the operation.
     */
    set(vec: Vec2Like): this;
    /**
     * Sets the components of this vector to the given x and y values.
     * @param x - The new x component.
     * @param y - The new y component.
     * @returns This vector after the operation.
     */
    set(x: number, y: number): this;
    set(a1: number | Vec2Like, a2?: number) {
        if (typeof a1 === "number") {
            if (typeof a2 == "number") {
                this.x = a1;
                this.y = a2;
            } else {
                this.x = this.y = a1;
            }
        } else {
            if (Array.isArray(a1)) {
                this.x = a1[0];
                this.y = a1[1];
            } else {
                this.x = a1.x;
                this.y = a1.y;
            }
        }

        return this;
    }

    /**
     * Linearly interpolates between this vector and another vector, returning a new vector.
     * @param other - The other vector.
     * @param alpha - The interpolation factor (between 0 and 1).
     * @returns A new vector representing the interpolated value.
     */
    mix(other: Vec2Like, alpha: number) {
        return this.mapWith(
            other,
            (self, other) => self + (other - self) * alpha
        );
    }
    /**
     * Performs a linear interpolation between this vector and another vector in-place.
     *
     * @param other The other vector.
     * @param alpha The interpolation factor (between 0 and 1).
     * @returns This vector after interpolation.
     */
    imix(other: Vec2Like, alpha: number) {
        return this.imapWith(
            other,
            (self, other) => self + (other - self) * alpha
        );
    }

    /**
     * Returns a new vector with the components of this vector inverted.
     * @returns A new vector with inverted components.
     */
    inv() {
        return this.map((e) => -e);
    }

    /**
     * Inverts the components of this vector in-place.
     * @returns This vector after inverting its components.
     */
    iinv() {
        return this.imap((e) => -e);
    }

    /**
     * Converts this vector to an array of its components.
     * @returns An array containing the x and y components of this vector.
     */
    toArray(): [number, number] {
        return [this.x, this.y];
    }

    /**
     * Converts this vector to an object with x and y properties.
     * @returns An object with x and y properties representing the vector's components.
     */
    toObject(): { x: number; y: number } {
        return { x: this.x, y: this.y };
    }

    /**
     * Calculates the angle (in radians) using atan2
     * @returns The angle in radians.
     */
    atan2() {
        return Math.atan2(this.y, this.x);
    }

    /**
     * Sets the components of this vector to zero in-place.
     * @returns This vector after setting its components to zero.
     */
    izero() {
        return this.map(() => 0);
    }

    /**
     * Calculates the Euclidean distance between this vector and another Vec2 instance.
     *
     * @param other - The other Vec2 instance.
     * @returns The Euclidean distance between this vector and the other Vec2 instance.
     */
    dist(other: Vec2Like) {
        if (Array.isArray(other)) {
            return Math.sqrt(
                (this.x - other[0]) * (this.x - other[0]) +
                    (this.y - other[1]) * (this.y - other[1])
            );
        } else {
            return Math.sqrt(
                (this.x - other.x) * (this.x - other.x) +
                    (this.y - other.y) * (this.y - other.y)
            );
        }
    }

    /**
     * Calculates the squared distance between this vector and another Vec2 object.
     * @param other - The other Vec2 object.
     * @returns The squared distance between the two vectors.
     */
    distSq(other: Vec2Like) {
        if (Array.isArray(other)) {
            return (
                (this.x - other[0]) * (this.x - other[0]) +
                (this.y - other[1]) * (this.y - other[1])
            );
        } else {
            return (
                (this.x - other.x) * (this.x - other.x) +
                (this.y - other.y) * (this.y - other.y)
            );
        }
    }

    // Static:
    /**
     * Creates a new Vec2 with both components set to 0.
     * @returns A new zero vector.
     */
    static zero() {
        return Vec2.fromScaler(0);
    }
    /**
     * Creates a new Vec2 with both components set to 1.
     * @returns A new vector with components set to 1.
     */
    static one() {
        return Vec2.fromScaler(1);
    }
    /**
     * Creates a new Vec2 with both components set to the given scalar value.
     * @param scaler - The value to set both components to.
     * @returns A new vector with both components set to the scalar value.
     */
    static fromScaler(scaler: number) {
        return new Vec2(scaler, scaler);
    }
    /**
     * Creates a new Vec2 from an angle in degrees.
     * @param degree - The angle in degrees.
     * @returns A new vector representing the direction corresponding to the given angle.
     */
    static fromDegree(degree: number) {
        return this.fromAngle((degree * Math.PI) / 180);
    }
    /**
     * Creates a new Vec2 from an angle in radians.
     * @param angle - The angle in radians.
     * @returns A new vector representing the direction corresponding to the given angle.
     */
    static fromAngle(angle: number) {
        return new Vec2(Math.cos(angle), Math.sin(angle));
    }
    /**
     * Creates a new Vec2 from an array of two numbers.
     * @param array - The array containing the x and y components.
     * @returns A new vector with components from the array.
     */
    static fromArray(array: [number, number]) {
        return new Vec2(array[0], array[1]);
    }
    /**
     * Creates a new Vec2 from an object with x and y properties.
     * @param object - The object containing the x and y components.
     * @returns A new vector with components from the object.
     */
    static fromObject(object: { x: number; y: number }) {
        return new Vec2(object.x, object.y);
    }

    /**
     * Creates a new Vec2 from a single number, setting both x and y to that number.
     * @param scaler - The number to create the vector from.
     * @returns A new Vec2 instance.
     */
    static from(scaler: number): Vec2;
    /**
     * Creates a new Vec2 from an array of two numbers.
     * @param array - The array of two numbers [x, y].
     * @returns A new Vec2 instance.
     */
    static from(array: [number, number]): Vec2;
    /**
     * Creates a new Vec2 from an object with x and y properties.
     * @param object - The object with x and y properties.
     * @returns A new Vec2 instance.
     */
    static from(object: { x: number; y: number }): Vec2;
    /**
     * Creates a new Vec2 from a number, an array of two numbers, or an object with x and y properties.
     * @param other - The value to create the vector from.
     * @returns A new Vec2 instance.
     */
    static from(other: number | [number, number] | { x: number; y: number }) {
        if (typeof other == "number") return Vec2.fromScaler(other);
        if (Array.isArray(other)) return Vec2.fromArray(other);

        return Vec2.fromObject(other);
    }

    /**
     * Creates a new Vec2 with random components between 0 and the given scale.
     * @param scale - The maximum value for the random components (default: 1).
     * @returns A new vector with random components.
     */
    static random(scale: number = 1) {
        return new Vec2(Math.random() * scale, Math.random() * scale);
    }
}
