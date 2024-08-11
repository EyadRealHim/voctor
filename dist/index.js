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
  default: () => src_default
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
  set(a1, a2) {
    if (typeof a1 === "number") {
      if (typeof a2 == "number") {
        this.x = a1;
        this.y = a2;
      } else {
        this.x = this.y = a1;
      }
    } else {
      this.x = a1.x;
      this.y = a1.y;
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
   * Creates a new Vec2 with random components between 0 and the given scale.
   * @param scale - The maximum value for the random components (default: 1).
   * @returns A new vector with random components.
   */
  static random(scale = 1) {
    return new _Vec2(Math.random() * scale, Math.random() * scale);
  }
};

// src/index.ts
var src_default = Vec2;
