"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Vec2: () => Vec2,
  Vec3: () => Vec3
});
module.exports = __toCommonJS(src_exports);

// src/Vec2.ts
var Vec2 = class _Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add(other) {
    if (typeof other === "number") {
      return new _Vec2(this.x + other, this.y + other);
    } else {
      return new _Vec2(this.x + other.x, this.y + other.y);
    }
  }
  iadd(other) {
    if (typeof other === "number") {
      this.x += other;
      this.y += other;
    } else {
      this.x += other.x;
      this.y += other.y;
    }
    return this;
  }
  sub(other) {
    if (typeof other === "number") {
      return new _Vec2(this.x - other, this.y - other);
    } else {
      return new _Vec2(this.x - other.x, this.y - other.y);
    }
  }
  isub(other) {
    if (typeof other === "number") {
      this.x -= other;
      this.y -= other;
    } else {
      this.x -= other.x;
      this.y -= other.y;
    }
    return this;
  }
  mul(other) {
    if (typeof other === "number") {
      return new _Vec2(this.x * other, this.y * other);
    } else {
      return new _Vec2(this.x * other.x, this.y * other.y);
    }
  }
  imul(other) {
    if (typeof other === "number") {
      this.x *= other;
      this.y *= other;
    } else {
      this.x *= other.x;
      this.y *= other.y;
    }
    return this;
  }
  div(other) {
    if (typeof other === "number") {
      return new _Vec2(this.x / other, this.y / other);
    } else {
      return new _Vec2(this.x / other.x, this.y / other.y);
    }
  }
  idiv(other) {
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
  avg(other) {
    return new _Vec2((this.x + other.x) / 2, (this.y + other.y) / 2);
  }
  /**
   * Calculates the average of this vector and another vector in-place.
   * @param other - The other vector.
   * @returns This vector after averaging.
   */
  iavg(other) {
    this.x = (this.x + other.x) / 2;
    this.y = (this.y + other.y) / 2;
    return this;
  }
  /**
   * Calculates the dot product of this vector and another vector.
   * @param other - The other vector.
   * @returns The dot product of the two vectors.
   */
  dot(other) {
    return this.x * other.x + this.y * other.y;
  }
  /**
   * Computes the cross product of this vector and another Vec2.
   * @param other - The other Vec2.
   * @returns The cross product.
   */
  cross(other) {
    return this.x * other.y - this.y * other.x;
  }
  max(other) {
    return new _Vec2(
      Math.max(this.x, typeof other === "number" ? other : other.x),
      Math.max(this.y, typeof other === "number" ? other : other.y)
    );
  }
  imax(other) {
    this.x = Math.max(this.x, typeof other === "number" ? other : other.x);
    this.y = Math.max(this.y, typeof other === "number" ? other : other.y);
    return this;
  }
  min(other) {
    return new _Vec2(
      Math.min(this.x, typeof other === "number" ? other : other.x),
      Math.min(this.y, typeof other === "number" ? other : other.y)
    );
  }
  imin(other) {
    this.x = Math.min(this.x, typeof other === "number" ? other : other.x);
    this.y = Math.min(this.y, typeof other === "number" ? other : other.y);
    return this;
  }
  /**
   * Applies a callback function to each component of the vector, returning a new vector with the results.
   * @param callback - The function to apply to each component.
   * @returns A new vector with the results of applying the callback function to each component.
   */
  map(callback) {
    return new _Vec2(callback(this.x), callback(this.y));
  }
  /**
   * Applies a callback function to each component of the vector in-place.
   * @param callback - The function to apply to each component.
   * @returns This vector after applying the callback function to each component.
   */
  imap(callback) {
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
    return new _Vec2(this.x, this.y);
  }
  /**
   * Returns a string representation of this vector.
   * @returns A string in the format "Vec2(x, y)".
   */
  toString() {
    return `Vec2(${this.x}, ${this.y})`;
  }
  set(a1, a2) {
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
  mix(other, alpha) {
    return new _Vec2(
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
  imix(other, alpha) {
    this.x += (other.x - this.x) * alpha;
    this.y += (other.y - this.y) * alpha;
    return this;
  }
  /**
   * Returns a new vector with the components of this vector inverted.
   * @returns A new vector with inverted components.
   */
  inv() {
    return new _Vec2(-this.x, -this.y);
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
  toArray() {
    return [this.x, this.y];
  }
  /**
   * Converts this vector to an object with x and y properties.
   * @returns An object with x and y properties representing the vector's components.
   */
  toObject() {
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
   * Calculates the Euclidean distance between this vector and another object.
   *
   * @param other - The other object to calculate the distance to. Can be a Vec2 instance, an object with x and y properties, or an array of two numbers.
   * @returns The Euclidean distance between this vector and the other object.
   */
  dist(other) {
    if (Array.isArray(other)) {
      return Math.sqrt(
        (this.x - other[0]) * (this.x - other[0]) + (this.y - other[1]) * (this.y - other[1])
      );
    } else {
      return Math.sqrt(
        (this.x - other.x) * (this.x - other.x) + (this.y - other.y) * (this.y - other.y)
      );
    }
  }
  /**
   * Calculates the squared distance between this vector and another vector represented as an array, object, or Vec2 object.
   * @param other - The other vector.
   * @returns The squared distance between the two vectors.
   */
  distSq(other) {
    if (Array.isArray(other)) {
      return (this.x - other[0]) * (this.x - other[0]) + (this.y - other[1]) * (this.y - other[1]);
    } else {
      return (this.x - other.x) * (this.x - other.x) + (this.y - other.y) * (this.y - other.y);
    }
  }
  // Static:
  /**
   * Creates a new Vec2 with both components set to 0.
   * @returns A new zero vector.
   */
  static zero() {
    return _Vec2.fromScaler(0);
  }
  /**
   * Creates a new Vec2 with both components set to 1.
   * @returns A new vector with components set to 1.
   */
  static one() {
    return _Vec2.fromScaler(1);
  }
  /**
   * Creates a new Vec2 with both components set to the given scalar value.
   * @param scaler - The value to set both components to.
   * @returns A new vector with both components set to the scalar value.
   */
  static fromScaler(scaler) {
    return new _Vec2(scaler, scaler);
  }
  /**
   * Creates a new Vec2 from an angle in degrees.
   * @param degree - The angle in degrees.
   * @returns A new vector representing the direction corresponding to the given angle.
   */
  static fromDegree(degree) {
    return new _Vec2(
      Math.cos(degree * Math.PI / 180),
      Math.sin(degree * Math.PI / 180)
    );
  }
  /**
   * Creates a new Vec2 from an angle in radians.
   * @param angle - The angle in radians.
   * @returns A new vector representing the direction corresponding to the given angle.
   */
  static fromAngle(angle) {
    return new _Vec2(Math.cos(angle), Math.sin(angle));
  }
  /**
   * Creates a new Vec2 from an array of two numbers.
   * @param array - The array containing the x and y components.
   * @returns A new vector with components from the array.
   */
  static fromArray(array) {
    return new _Vec2(array[0], array[1]);
  }
  /**
   * Creates a new Vec2 from an object with x and y properties.
   * @param object - The object containing the x and y components.
   * @returns A new vector with components from the object.
   */
  static fromObject(object) {
    return new _Vec2(object.x, object.y);
  }
  /**
   * Creates a new Vec2 from a number, an array of two numbers, or an object with x and y properties.
   * @param other - The value to create the vector from.
   * @returns A new Vec2 instance.
   */
  static from(other) {
    if (typeof other == "number") return _Vec2.fromScaler(other);
    if (Array.isArray(other)) return _Vec2.fromArray(other);
    return _Vec2.fromObject(other);
  }
  /**
   * Creates a new Vec2 with random components between 0 and the given scale.
   * @param scale - The maximum value for the random components (default: 1).
   * @returns A new vector with random components.
   */
  static random(scale = 1) {
    return new _Vec2(Math.random() * scale, Math.random() * scale);
  }
};

// src/Vec3.ts
var Vec3 = class _Vec3 {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  add(other) {
    if (typeof other === "number") {
      return new _Vec3(this.x + other, this.y + other, this.z + other);
    } else {
      return new _Vec3(
        this.x + other.x,
        this.y + other.y,
        this.z + other.z
      );
    }
  }
  iadd(other) {
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
  sub(other) {
    if (typeof other === "number") {
      return new _Vec3(this.x - other, this.y - other, this.z - other);
    } else {
      return new _Vec3(
        this.x - other.x,
        this.y - other.y,
        this.z - other.z
      );
    }
  }
  isub(other) {
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
  mul(other) {
    if (typeof other === "number") {
      return new _Vec3(this.x * other, this.y * other, this.z * other);
    } else {
      return new _Vec3(
        this.x * other.x,
        this.y * other.y,
        this.z * other.z
      );
    }
  }
  imul(other) {
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
  div(other) {
    if (typeof other === "number") {
      return new _Vec3(this.x / other, this.y / other, this.z / other);
    } else {
      return new _Vec3(
        this.x / other.x,
        this.y / other.y,
        this.z / other.z
      );
    }
  }
  idiv(other) {
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
  avg(other) {
    return new _Vec3(
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
  iavg(other) {
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
  dot(other) {
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }
  /**
   * Calculates the cross product of this vector and another vector.
   * @param other - The other vector.
   * @returns A new Vec3 representing the cross product.
   */
  cross(other) {
    return new _Vec3(
      other.z * this.y - other.y * this.z,
      other.x * this.z - other.z * this.x,
      other.y * this.x - other.x * this.y
    );
  }
  max(other) {
    return new _Vec3(
      Math.max(this.x, typeof other === "number" ? other : other.x),
      Math.max(this.y, typeof other === "number" ? other : other.y),
      Math.max(this.z, typeof other === "number" ? other : other.z)
    );
  }
  imax(other) {
    this.x = Math.max(this.x, typeof other === "number" ? other : other.x);
    this.y = Math.max(this.y, typeof other === "number" ? other : other.y);
    this.y = Math.max(this.z, typeof other === "number" ? other : other.z);
    return this;
  }
  min(other) {
    return new _Vec3(
      Math.min(this.x, typeof other === "number" ? other : other.x),
      Math.min(this.y, typeof other === "number" ? other : other.y),
      Math.min(this.z, typeof other === "number" ? other : other.z)
    );
  }
  imin(other) {
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
  map(callback) {
    return new _Vec3(callback(this.x), callback(this.y), callback(this.z));
  }
  /**
   * Applies a callback function to each component of this vector, in place.
   * @param callback - The callback function to apply.
   * @returns This Vec3.
   */
  imap(callback) {
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
    return new _Vec3(this.x, this.y, this.z);
  }
  /**
   * Returns a string representation of this vector.
   * @returns A string representation of this vector.
   */
  toString() {
    return `Vec3(${this.x}, ${this.y}, ${this.z})`;
  }
  set(a1, a2, a3) {
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
  mix(other, alpha) {
    return new _Vec3(
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
  imix(other, alpha) {
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
    return new _Vec3(-this.x, -this.y, -this.z);
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
  toArray() {
    return [this.x, this.y, this.z];
  }
  /**
   * Converts this vector to an object.
   * @returns An object representing this vector.
   */
  toObject() {
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
  dist(other) {
    if (Array.isArray(other)) {
      return Math.sqrt(
        (this.x - other[0]) * (this.x - other[0]) + (this.y - other[1]) * (this.y - other[1]) + (this.z - other[2]) * (this.z - other[2])
      );
    } else {
      return Math.sqrt(
        (this.x - other.x) * (this.x - other.x) + (this.y - other.y) * (this.y - other.y) + (this.z - other.z) * (this.z - other.z)
      );
    }
  }
  distSq(other) {
    if (Array.isArray(other)) {
      return (this.x - other[0]) * (this.x - other[0]) + (this.y - other[1]) * (this.y - other[1]) + (this.z - other[2]) * (this.z - other[2]);
    } else {
      return (this.x - other.x) * (this.x - other.x) + (this.y - other.y) * (this.y - other.y) + (this.z - other.z) * (this.z - other.z);
    }
  }
  // Static:
  /**
   * Returns a new Vec3 with all components set to zero.
   * @returns A new Vec3 with all components set to zero.
   */
  static zero() {
    return _Vec3.fromScaler(0);
  }
  /**
   * Returns a new Vec3 with all components set to one.
   * @returns A new Vec3 with all components set to one.
   */
  static one() {
    return _Vec3.fromScaler(1);
  }
  /**
   * Creates a new Vec3 from a scaler value.
   * @param scaler - The scaler value.
   * @returns A new Vec3 with all components set to the scaler value.
   */
  static fromScaler(scaler) {
    return new _Vec3(scaler, scaler, scaler);
  }
  /**
   * Creates a new Vec3 from an array of values.
   * @param array - The array of values.
   * @returns A new Vec3 with components set to the values in the array.
   */
  static fromArray(array) {
    return new _Vec3(array[0], array[1], array[2]);
  }
  /**
   * Creates a new Vec3 from an object with x, y, and z properties.
   * @param object - The object with x, y, and z properties.
   * @returns A new Vec3 with components set to the values in the object.
   */
  static fromObject(object) {
    return new _Vec3(object.x, object.y, object.z);
  }
  static from(other) {
    if (typeof other == "number") return _Vec3.fromScaler(other);
    if (Array.isArray(other)) return _Vec3.fromArray(other);
    return _Vec3.fromObject(other);
  }
  /**
   * Creates a new Vec3 with random components.
   * @param scale - The scale of the random components.
   * @returns A new Vec3 with random components.
   */
  static random(scale = 1) {
    return new _Vec3(
      Math.random() * scale,
      Math.random() * scale,
      Math.random() * scale
    );
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Vec2,
  Vec3
});
