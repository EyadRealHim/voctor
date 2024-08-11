declare class Vec2 {
    x: number;
    y: number;
    constructor(x: number, y: number);
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
    /**
     * Calculates the average of this vector and another vector, returning a new vector.
     * @param other - The other vector.
     * @returns A new vector representing the average of the two vectors.
     */
    avg(other: Vec2): Vec2;
    /**
     * Calculates the average of this vector and another vector in-place.
     * @param other - The other vector.
     * @returns This vector after averaging.
     */
    iavg(other: Vec2): this;
    /**
     * Calculates the dot product of this vector and another vector.
     * @param other - The other vector.
     * @returns The dot product of the two vectors.
     */
    dot(other: Vec2): number;
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
    set(vec: Vec2): this;
    /**
     * Sets the components of this vector to the given x and y values.
     * @param x - The new x component.
     * @param y - The new y component.
     * @returns This vector after the operation.
     */
    set(x: number, y: number): this;
    set(arr: [number, number]): this;
    /**
     * Linearly interpolates between this vector and another vector, returning a new vector.
     * @param other - The other vector.
     * @param alpha - The interpolation factor (between 0 and 1).
     * @returns A new vector representing the interpolated value.
     */
    mix(other: Vec2, alpha: number): Vec2;
    /**
     * Performs a linear interpolation between this vector and another vector in-place.
     *
     * @param other The other vector.
     * @param alpha The interpolation factor (between 0 and 1).
     * @returns This vector after interpolation.
     */
    imix(other: Vec2, alpha: number): this;
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
    izero(): this;
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
    dist(obj: {
        x: number;
        y: number;
    }): number;
    /**
     * Calculates the Euclidean distance between this vector and another Vec2 instance.
     *
     * @param other - The other Vec2 instance.
     * @returns The Euclidean distance between this vector and the other Vec2 instance.
     */
    dist(other: Vec2): number;
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
    distSq(obj: {
        x: number;
        y: number;
    }): number;
    /**
     * Calculates the squared distance between this vector and another Vec2 object.
     * @param other - The other Vec2 object.
     * @returns The squared distance between the two vectors.
     */
    distSq(other: Vec2): number;
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
     * Creates a new Vec2 with random components between 0 and the given scale.
     * @param scale - The maximum value for the random components (default: 1).
     * @returns A new vector with random components.
     */
    static random(scale?: number): Vec2;
}

export { Vec2 as default };
