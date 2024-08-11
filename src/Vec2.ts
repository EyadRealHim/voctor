export default class Vec2 {
    constructor(public x: number, public y: number) {}

    // Methods:
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
    add(other: Vec2): Vec2;
    add(other: number | Vec2): Vec2 {
        if (typeof other === "number") {
            return new Vec2(this.x + other, this.y + other);
        } else {
            return new Vec2(this.x + other.x, this.y + other.y);
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
    iadd(other: Vec2): Vec2;
    iadd(other: number | Vec2): Vec2 {
        if (typeof other === "number") {
            this.x += other;
            this.y += other;
        } else {
            this.x += other.x;
            this.y += other.y;
        }
        return this;
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
    sub(other: Vec2): Vec2;
    sub(other: number | Vec2): Vec2 {
        if (typeof other === "number") {
            return new Vec2(this.x - other, this.y - other);
        } else {
            return new Vec2(this.x - other.x, this.y - other.y);
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
    isub(other: Vec2): Vec2;
    isub(other: number | Vec2): Vec2 {
        if (typeof other === "number") {
            this.x -= other;
            this.y -= other;
        } else {
            this.x -= other.x;
            this.y -= other.y;
        }
        return this;
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
    mul(other: Vec2): Vec2;
    mul(other: number | Vec2): Vec2 {
        if (typeof other === "number") {
            return new Vec2(this.x * other, this.y * other);
        } else {
            return new Vec2(this.x * other.x, this.y * other.y);
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
    imul(other: Vec2): Vec2;
    imul(other: number | Vec2): Vec2 {
        if (typeof other === "number") {
            this.x *= other;
            this.y *= other;
        } else {
            this.x *= other.x;
            this.y *= other.y;
        }
        return this;
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
    div(other: Vec2): Vec2;
    div(other: number | Vec2): Vec2 {
        if (typeof other === "number") {
            return new Vec2(this.x / other, this.y / other);
        } else {
            return new Vec2(this.x / other.x, this.y / other.y);
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
    idiv(other: Vec2): Vec2;
    idiv(other: number | Vec2): Vec2 {
        if (typeof other === "number") {
            this.x /= other;
            this.y /= other;
        } else {
            this.x /= other.x;
            this.y /= other.y;
        }
        return this;
    }

    /**
     * Calculates the average of this vector and another vector, returning a new vector.
     * @param other - The other vector.
     * @returns A new vector representing the average of the two vectors.
     */
    avg(other: Vec2) {
        return new Vec2((this.x + other.x) / 2, (this.y + other.y) / 2);
    }

    /**
     * Calculates the average of this vector and another vector in-place.
     * @param other - The other vector.
     * @returns This vector after averaging.
     */
    iavg(other: Vec2) {
        this.x = (this.x + other.x) / 2;
        this.y = (this.y + other.y) / 2;
        return this;
    }

    /**
     * Calculates the dot product of this vector and another vector.
     * @param other - The other vector.
     * @returns The dot product of the two vectors.
     */
    dot(other: Vec2) {
        return this.x * other.x + this.y * other.y;
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
    max(other: Vec2): Vec2;
    max(other: number | Vec2): Vec2 {
        return new Vec2(
            Math.max(this.x, typeof other === "number" ? other : other.x),
            Math.max(this.y, typeof other === "number" ? other : other.y)
        );
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
    imax(other: Vec2): Vec2;
    imax(other: number | Vec2): Vec2 {
        this.x = Math.max(this.x, typeof other === "number" ? other : other.x);
        this.y = Math.max(this.y, typeof other === "number" ? other : other.y);
        return this;
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
    min(other: Vec2): Vec2;
    min(other: number | Vec2): Vec2 {
        return new Vec2(
            Math.min(this.x, typeof other === "number" ? other : other.x),
            Math.min(this.y, typeof other === "number" ? other : other.y)
        );
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
        this.x = Math.min(this.x, typeof other === "number" ? other : other.x);
        this.y = Math.min(this.y, typeof other === "number" ? other : other.y);
        return this;
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
    set(vec: Vec2): this;
    /**
     * Sets the components of this vector to the given x and y values.
     * @param x - The new x component.
     * @param y - The new y component.
     * @returns This vector after the operation.
     */
    set(x: number, y: number): this;
    set(arr: [number, number]): this;
    set(a1: number | Vec2 | [number, number], a2?: number) {
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
    mix(other: Vec2, alpha: number) {
        return new Vec2(
            this.x + (other.x - this.x) * alpha,
            this.y + (other.y - this.y) * alpha
        );
    }
    /**
     * Performs a linear interpolation between this vector and another vector in-place.
     *
     * @param other The other vector.
     * @param alpha The interpolation factor (between 0 and 1).
     * @returns This vector after interpolation.
     */
    imix(other: Vec2, alpha: number) {
        this.x += (other.x - this.x) * alpha;
        this.y += (other.y - this.y) * alpha;
        return this;
    }

    /**
     * Returns a new vector with the components of this vector inverted.
     * @returns A new vector with inverted components.
     */
    inv() {
        return new Vec2(-this.x, -this.y);
    }

    /**
     * Inverts the components of this vector in-place.
     * @returns This vector after inverting its components.
     */
    iinv() {
        this.x = -this.x;
        this.y = -this.y;

        return this;
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
        this.x = 0;
        this.y = 0;

        return this;
    }

    /**
     * Calculates the Euclidean distance between this vector and an array representing a point.
     *
     * @param arr - An array of two numbers representing the point's x and y coordinates.
     * @returns The Euclidean distance between this vector and the point.
     */
    dist(arr: [number, number]): number;

    /**
     * Calculates the Euclidean distance between this vector and an object representing a point.
     *
     * @param obj - An object with 'x' and 'y' properties representing the point's coordinates.
     * @returns The Euclidean distance between this vector and the point.
     */
    dist(obj: { x: number; y: number }): number;

    /**
     * Calculates the Euclidean distance between this vector and another Vec2 instance.
     *
     * @param other - The other Vec2 instance.
     * @returns The Euclidean distance between this vector and the other Vec2 instance.
     */
    dist(other: Vec2): number;

    /**
     * Calculates the Euclidean distance between this vector and another object.
     *
     * @param other - The other object to calculate the distance to. Can be a Vec2 instance, an object with x and y properties, or an array of two numbers.
     * @returns The Euclidean distance between this vector and the other object.
     */
    dist(other: Vec2 | { x: number; y: number } | [number, number]) {
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
     * Calculates the squared distance between this vector and an array representing another vector.
     * @param arr - An array representing the other vector.
     * @returns The squared distance between the two vectors.
     */
    distSq(arr: [number, number]): number;
    /**
     * Calculates the squared distance between this vector and an object representing another vector.
     * @param obj - An object representing the other vector.
     * @returns The squared distance between the two vectors.
     */
    distSq(obj: { x: number; y: number }): number;
    /**
     * Calculates the squared distance between this vector and another Vec2 object.
     * @param other - The other Vec2 object.
     * @returns The squared distance between the two vectors.
     */
    distSq(other: Vec2): number;
    /**
     * Calculates the squared distance between this vector and another vector represented as an array, object, or Vec2 object.
     * @param other - The other vector.
     * @returns The squared distance between the two vectors.
     */
    distSq(other: Vec2 | { x: number; y: number } | [number, number]) {
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
        return new Vec2(
            Math.cos((degree * Math.PI) / 180),
            Math.sin((degree * Math.PI) / 180)
        );
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
     * Creates a new Vec2 with random components between 0 and the given scale.
     * @param scale - The maximum value for the random components (default: 1).
     * @returns A new vector with random components.
     */
    static random(scale: number = 1) {
        return new Vec2(Math.random() * scale, Math.random() * scale);
    }
}
