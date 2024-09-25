type Vec2Like = [number, number] | {
    x: number;
    y: number;
};
declare class Vec2 {
    x: number;
    y: number;
    constructor(x: number, y: number);
    /**
     * Applies a callback function to each component of this vector and another vector.
     * @param other - The other vector or array of numbers.
     * @param callback - The callback function to apply.
     * @returns A new Vec2 with the result of the callback function applied to each component.
     */
    mapWith(other: Vec2Like, callback: (self: number, other: number) => number): Vec2;
    /**
     * Applies a callback function to each component of this vector and another vector, in place.
     * @param other - The other vector or array of numbers.
     * @param callback - The callback function to apply.
     * @returns This Vec2.
     */
    imapWith(other: Vec2Like, callback: (self: number, other: number) => number): this;
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
    /**
     * Calculates the average of this vector and another vector, returning a new vector.
     * @param other - The other vector.
     * @returns A new vector representing the average of the two vectors.
     */
    avg(other: Vec2Like): Vec2;
    /**
     * Calculates the average of this vector and another vector in-place.
     * @param other - The other vector.
     * @returns This vector after averaging.
     */
    iavg(other: Vec2Like): this;
    /**
     * Calculates the dot product of this vector and another vector.
     * @param other - The other vector.
     * @returns The dot product of the two vectors.
     */
    dot(other: Vec2Like): number;
    /**
     * Computes the cross product of this vector and another Vec2.
     * @param other - The other Vec2.
     * @returns The cross product.
     */
    cross(other: Vec2Like): number;
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
    /**
     * Applies a callback function to each component of the vector, returning a new vector with the results.
     * @param callback - The function to apply to each component.
     * @returns A new vector with the results of applying the callback function to each component.
     */
    map(callback: (value: number) => number): Vec2;
    /**
     * Applies a callback function to each component of the vector in-place.
     * @param callback - The function to apply to each component.
     * @returns This vector after applying the callback function to each component.
     */
    imap(callback: (value: number) => number): this;
    /**
     * Returns a new vector with the sign of each component.
     * @returns A new vector with the sign of each component.
     */
    sign(): Vec2;
    /**
     * Sets each component of this vector to its sign in-place.
     * @returns This vector after the operation.
     */
    isign(): this;
    /**
     * Returns the length (magnitude) of this vector.
     * @returns The length of the vector.
     */
    len(): number;
    /**
     * Returns the squared length (magnitude) of this vector.
     * @returns The squared length of the vector.
     */
    lenSq(): number;
    /**
     * Returns the sum of the components of this vector.
     * @returns The sum of the vector's components.
     */
    sum(): number;
    /**
     * Returns a normalized copy of this vector (alias for .normalize).
     * @returns A new normalized vector.
     */
    norm(): Vec2;
    /**
     * Returns a normalized copy of this vector.
     * @returns A new normalized vector.
     */
    normalize(): Vec2;
    /**
     * Normalizes this vector in-place (alias for .inormalize).
     * @returns This vector after normalization.
     */
    inorm(): Vec2;
    /**
     * Normalizes this vector in-place.
     * @returns This vector after normalization.
     */
    inormalize(): Vec2;
    /**
     * Creates a copy of this vector.
     * @returns A new vector with the same components as this vector.
     */
    clone(): Vec2;
    /**
     * Returns a string representation of this vector.
     * @returns A string in the format "Vec2(x, y)".
     */
    toString(): string;
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
    /**
     * Linearly interpolates between this vector and another vector, returning a new vector.
     * @param other - The other vector.
     * @param alpha - The interpolation factor (between 0 and 1).
     * @returns A new vector representing the interpolated value.
     */
    mix(other: Vec2Like, alpha: number): Vec2;
    /**
     * Performs a linear interpolation between this vector and another vector in-place.
     *
     * @param other The other vector.
     * @param alpha The interpolation factor (between 0 and 1).
     * @returns This vector after interpolation.
     */
    imix(other: Vec2Like, alpha: number): this;
    /**
     * Returns a new vector with the components of this vector inverted.
     * @returns A new vector with inverted components.
     */
    inv(): Vec2;
    /**
     * Inverts the components of this vector in-place.
     * @returns This vector after inverting its components.
     */
    iinv(): this;
    /**
     * Converts this vector to an array of its components.
     * @returns An array containing the x and y components of this vector.
     */
    toArray(): [number, number];
    /**
     * Converts this vector to an object with x and y properties.
     * @returns An object with x and y properties representing the vector's components.
     */
    toObject(): {
        x: number;
        y: number;
    };
    /**
     * Calculates the angle (in radians) using atan2
     * @returns The angle in radians.
     */
    atan2(): number;
    /**
     * Sets the components of this vector to zero in-place.
     * @returns This vector after setting its components to zero.
     */
    izero(): Vec2;
    /**
     * Calculates the Euclidean distance between this vector and another Vec2 instance.
     *
     * @param other - The other Vec2 instance.
     * @returns The Euclidean distance between this vector and the other Vec2 instance.
     */
    dist(other: Vec2Like): number;
    /**
     * Calculates the squared distance between this vector and another Vec2 object.
     * @param other - The other Vec2 object.
     * @returns The squared distance between the two vectors.
     */
    distSq(other: Vec2Like): number;
    /**
     * Creates a new Vec2 with both components set to 0.
     * @returns A new zero vector.
     */
    static zero(): Vec2;
    /**
     * Creates a new Vec2 with both components set to 1.
     * @returns A new vector with components set to 1.
     */
    static one(): Vec2;
    /**
     * Creates a new Vec2 with both components set to the given scalar value.
     * @param scaler - The value to set both components to.
     * @returns A new vector with both components set to the scalar value.
     */
    static fromScaler(scaler: number): Vec2;
    /**
     * Creates a new Vec2 from an angle in degrees.
     * @param degree - The angle in degrees.
     * @returns A new vector representing the direction corresponding to the given angle.
     */
    static fromDegree(degree: number): Vec2;
    /**
     * Creates a new Vec2 from an angle in radians.
     * @param angle - The angle in radians.
     * @returns A new vector representing the direction corresponding to the given angle.
     */
    static fromAngle(angle: number): Vec2;
    /**
     * Creates a new Vec2 from an array of two numbers.
     * @param array - The array containing the x and y components.
     * @returns A new vector with components from the array.
     */
    static fromArray(array: [number, number]): Vec2;
    /**
     * Creates a new Vec2 from an object with x and y properties.
     * @param object - The object containing the x and y components.
     * @returns A new vector with components from the object.
     */
    static fromObject(object: {
        x: number;
        y: number;
    }): Vec2;
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
    static from(object: {
        x: number;
        y: number;
    }): Vec2;
    /**
     * Creates a new Vec2 with random components between 0 and the given scale.
     * @param scale - The maximum value for the random components (default: 1).
     * @returns A new vector with random components.
     */
    static random(scale?: number): Vec2;
}

type Vec3Like = {
    x: number;
    y: number;
    z: number;
} | [number, number, number];
declare class Vec3 {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    /**
     * Applies a callback function to each component of this vector and another vector.
     * @param other - The other vector or array of numbers.
     * @param callback - The callback function to apply.
     * @returns A new Vec3 with the result of the callback function applied to each component.
     */
    mapWith(other: Vec3Like, callback: (v1: number, v2: number) => number): Vec3;
    /**
     * Applies a callback function to each component of this vector and another vector, in place.
     * @param other - The other vector or array of numbers.
     * @param callback - The callback function to apply.
     * @returns This Vec3.
     */
    imapWith(other: Vec3Like, callback: (v1: number, v2: number) => number): this;
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
    /**
     * Calculates the average of this vector and another vector.
     * @param other - The other vector.
     * @returns A new Vec3 representing the average.
     */
    avg(other: Vec3): Vec3;
    /**
     * Averages this vector with another vector, in place.
     * @param other - The other vector.
     * @returns This Vec3.
     */
    iavg(other: Vec3): this;
    /**
     * Calculates the dot product of this vector and another vector.
     * @param other - The other vector.
     * @returns The dot product.
     */
    dot(other: Vec3): number;
    /**
     * Calculates the cross product of this vector and another vector.
     * @param other - The other vector.
     * @returns A new Vec3 representing the cross product.
     */
    cross(other: Vec3): Vec3;
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
    /**
     * Applies a callback function to each component of this vector.
     * @param callback - The callback function to apply.
     * @returns A new Vec3 with the callback function applied to each component.
     */
    map(callback: (value: number) => number): Vec3;
    /**
     * Applies a callback function to each component of this vector, in place.
     * @param callback - The callback function to apply.
     * @returns This Vec3.
     */
    imap(callback: (value: number) => number): this;
    /**
     * Returns a new Vec3 with the sign of each component of this vector.
     * @returns A new Vec3 with the sign of each component.
     */
    sign(): Vec3;
    /**
     * Sets each component of this vector to its sign, in place.
     * @returns This Vec3.
     */
    isign(): this;
    /**
     * Calculates the length of this vector.
     * @returns The length of this vector.
     */
    len(): number;
    /**
     * Calculates the squared length of this vector.
     * @returns The squared length of this vector.
     */
    lenSq(): number;
    /**
     * Calculates the sum of the components of this vector.
     * @returns The sum of the components.
     */
    sum(): number;
    /**
     * Normalizes this vector.
     * @returns A new Vec3 representing the normalized vector.
     */
    norm(): Vec3;
    /**
     * Normalizes this vector.
     * @returns A new Vec3 representing the normalized vector.
     */
    normalize(): Vec3;
    /**
     * Normalizes this vector, in place.
     * @returns This Vec3.
     */
    inorm(): Vec3;
    /**
     * Normalizes this vector, in place.
     * @returns This Vec3.
     */
    inormalize(): Vec3;
    /**
     * Clones this vector.
     * @returns A new Vec3 with the same components as this vector.
     */
    clone(): Vec3;
    /**
     * Returns a string representation of this vector.
     * @returns A string representation of this vector.
     */
    toString(): string;
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
    /**
     * Linearly interpolates between this vector and another vector.
     * @param other - The other vector.
     * @param alpha - The interpolation factor.
     * @returns A new Vec3 representing the interpolated vector.
     */
    mix(other: Vec3, alpha: number): Vec3;
    /**
     * Linearly interpolates between this vector and another vector, in place.
     * @param other - The other vector.
     * @param alpha - The interpolation factor.
     * @returns This Vec3.
     */
    imix(other: Vec3, alpha: number): this;
    /**
     * Inverts this vector.
     * @returns A new Vec3 representing the inverted vector.
     */
    inv(): Vec3;
    /**
     * Inverts this vector, in place.
     * @returns This Vec3.
     */
    iinv(): this;
    /**
     * Converts this vector to an array.
     * @returns An array representing this vector.
     */
    toArray(): [number, number, number];
    /**
     * Converts this vector to an object.
     * @returns An object representing this vector.
     */
    toObject(): {
        x: number;
        y: number;
        z: number;
    };
    /**
     * Sets the components of this vector to zero, in place.
     * @returns This Vec3.
     */
    izero(): this;
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
    dist(obj: {
        x: number;
        y: number;
        z: number;
    }): number;
    /**
     * Calculates the distance between this vector and another vector.
     * @param other - The other vector.
     * @returns The distance between the vectors.
     */
    dist(other: Vec3): number;
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
    distSq(obj: {
        x: number;
        y: number;
        z: number;
    }): number;
    /**
     * Calculates the squared distance between this vector and another vector.
     * @param other - The other vector.
     * @returns The squared distance between the vectors.
     */
    distSq(other: Vec3): number;
    /**
     * Returns a new Vec3 with all components set to zero.
     * @returns A new Vec3 with all components set to zero.
     */
    static zero(): Vec3;
    /**
     * Returns a new Vec3 with all components set to one.
     * @returns A new Vec3 with all components set to one.
     */
    static one(): Vec3;
    /**
     * Creates a new Vec3 from a scaler value.
     * @param scaler - The scaler value.
     * @returns A new Vec3 with all components set to the scaler value.
     */
    static fromScaler(scaler: number): Vec3;
    /**
     * Creates a new Vec3 from an array of values.
     * @param array - The array of values.
     * @returns A new Vec3 with components set to the values in the array.
     */
    static fromArray(array: [number, number, number]): Vec3;
    /**
     * Creates a new Vec3 from an object with x, y, and z properties.
     * @param object - The object with x, y, and z properties.
     * @returns A new Vec3 with components set to the values in the object.
     */
    static fromObject(object: {
        x: number;
        y: number;
        z: number;
    }): Vec3;
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
    static from(object: {
        x: number;
        y: number;
        z: number;
    }): Vec3;
    /**
     * Creates a new Vec3 with random components.
     * @param scale - The scale of the random components.
     * @returns A new Vec3 with random components.
     */
    static random(scale?: number): Vec3;
}

export { Vec2, Vec3 };
