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

// src/VectorBase.ts
var VectorBase = class {
  add(other) {
    if (typeof other === "number") {
      return this.map((e) => e + other);
    } else {
      return this.mapWith(other, (self, other2) => self + other2);
    }
  }
  iadd(other) {
    if (typeof other === "number") {
      return this.imap((e) => e + other);
    } else {
      return this.imapWith(other, (self, other2) => self + other2);
    }
  }
  sub(other) {
    if (typeof other === "number") {
      return this.map((e) => e - other);
    } else {
      return this.mapWith(other, (self, other2) => self - other2);
    }
  }
  isub(other) {
    if (typeof other === "number") {
      return this.imap((e) => e - other);
    } else {
      return this.imapWith(other, (self, other2) => self - other2);
    }
  }
  mul(other) {
    if (typeof other === "number") {
      return this.map((e) => e * other);
    } else {
      return this.mapWith(other, (self, other2) => self * other2);
    }
  }
  imul(other) {
    if (typeof other === "number") {
      return this.imap((e) => e * other);
    } else {
      return this.imapWith(other, (self, other2) => self * other2);
    }
  }
  div(other) {
    if (typeof other === "number") {
      return this.map((e) => e / other);
    } else {
      return this.mapWith(other, (self, other2) => self / other2);
    }
  }
  idiv(other) {
    if (typeof other === "number") {
      return this.imap((e) => e / other);
    } else {
      return this.imapWith(other, (self, other2) => self / other2);
    }
  }
  avg(other) {
    return this.mapWith(other, (self, other2) => (self + other2) / 2);
  }
  iavg(other) {
    return this.imapWith(other, (self, other2) => (self + other2) / 2);
  }
  max(other) {
    if (typeof other === "number") {
      return this.map((e) => Math.max(e, other));
    } else {
      return this.mapWith(other, Math.max);
    }
  }
  imax(other) {
    if (typeof other === "number") {
      return this.imap((e) => Math.max(e, other));
    } else {
      return this.imapWith(other, Math.max);
    }
  }
  min(other) {
    if (typeof other === "number") {
      return this.map((e) => Math.min(e, other));
    } else {
      return this.mapWith(other, Math.min);
    }
  }
  imin(other) {
    if (typeof other === "number") {
      return this.imap((e) => Math.min(e, other));
    } else {
      return this.imapWith(other, Math.min);
    }
  }
  sign() {
    return this.map(Math.sign);
  }
  isign() {
    return this.imap(Math.sign);
  }
  len() {
    return Math.sqrt(this.lenSq());
  }
  norm() {
    return this.normalize();
  }
  normalize() {
    return this.div(this.len());
  }
  inorm() {
    return this.inormalize();
  }
  inormalize() {
    return this.idiv(this.len());
  }
  mix(other, alpha) {
    return this.mapWith(
      other,
      (self, other2) => self + (other2 - self) * alpha
    );
  }
  imix(other, alpha) {
    return this.imapWith(
      other,
      (self, other2) => self + (other2 - self) * alpha
    );
  }
  inv() {
    return this.map((e) => -e);
  }
  iinv() {
    return this.imap((e) => -e);
  }
  izero() {
    return this.map(() => 0);
  }
  dist(other) {
    return Math.sqrt(this.distSq(other));
  }
  distSq(other) {
    return this.mapWith(
      other,
      (self, other2) => (self - other2) * (self - other2)
    ).sum();
  }
  eq(_other) {
    throw new Error(".eq not implemented for this class");
  }
  clone() {
    throw new Error(".clone not implemented for this class");
  }
  toString() {
    throw new Error(".toString not implemented for this class");
  }
  toArray() {
    throw new Error(".toArray not implemented for this class");
  }
  toObject() {
    throw new Error(".toObject not implemented for this class");
  }
  lenSq() {
    throw new Error(".lenSq not implemented for this class");
  }
  sum() {
    throw new Error(".sum not implemented for this class");
  }
  mapWith(_other, _callback) {
    throw new Error(".mapWith not implemented for this class");
  }
  imapWith(_other, _callback) {
    throw new Error(".imapWith not implemented for this class");
  }
  map(_callback) {
    throw new Error(".map not implemented for this class");
  }
  imap(_callback) {
    throw new Error(".imap not implemented for this class");
  }
};

// src/Vec2.ts
var Vec2 = class _Vec2 extends VectorBase {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }
  dot(other) {
    return this.x * other.x + this.y * other.y;
  }
  cross(other) {
    return this.x * other.y - this.y * other.x;
  }
  atan2() {
    return Math.atan2(this.y, this.x);
  }
  set(other, y) {
    if (typeof other == "number") {
      this.x = other;
      this.y = y;
      return this;
    } else {
      return this.imapWith(other, (_, other2) => other2);
    }
  }
  ix(cb) {
    this.x = cb(this.x);
    return this;
  }
  iy(cb) {
    this.y = cb(this.y);
    return this;
  }
  eq(other) {
    if (typeof other === "number") {
      return this.x === other && this.y === other;
    } else if (Array.isArray(other)) {
      return this.x === other[0] && this.y === other[1];
    } else {
      return this.x === other.x && this.y === other.y;
    }
  }
  clone() {
    return new _Vec2(this.x, this.y);
  }
  toString() {
    return `Vec2(${this.x}, ${this.y})`;
  }
  toArray() {
    return [this.x, this.y];
  }
  toObject() {
    return { x: this.x, y: this.y };
  }
  lenSq() {
    return this.x * this.x + this.y * this.y;
  }
  sum() {
    return this.x + this.y;
  }
  mapWith(other, callback) {
    if (Array.isArray(other)) {
      return new _Vec2(
        callback(this.x, other[0]),
        callback(this.y, other[1])
      );
    } else {
      return new _Vec2(
        callback(this.x, other.x),
        callback(this.y, other.y)
      );
    }
  }
  imapWith(other, callback) {
    if (Array.isArray(other)) {
      this.x = callback(this.x, other[0]);
      this.y = callback(this.y, other[1]);
    } else {
      this.x = callback(this.x, other.x);
      this.y = callback(this.y, other.y);
    }
    return this;
  }
  map(callback) {
    return new _Vec2(callback(this.x), callback(this.y));
  }
  imap(callback) {
    this.x = callback(this.x);
    this.y = callback(this.y);
    return this;
  }
  static zero() {
    return _Vec2.fromScaler(0);
  }
  static one() {
    return _Vec2.fromScaler(1);
  }
  static fromScaler(scaler) {
    return new _Vec2(scaler, scaler);
  }
  static fromDegree(degree) {
    return this.fromAngle(degree * Math.PI / 180);
  }
  static fromAngle(angle) {
    return new _Vec2(Math.cos(angle), Math.sin(angle));
  }
  static fromArray(array) {
    return new _Vec2(array[0], array[1]);
  }
  static fromObject(object) {
    return new _Vec2(object.x, object.y);
  }
  static from(other) {
    if (typeof other == "number") return _Vec2.fromScaler(other);
    if (Array.isArray(other)) return _Vec2.fromArray(other);
    return _Vec2.fromObject(other);
  }
  static random(scale = 1) {
    return new _Vec2(Math.random() * scale, Math.random() * scale);
  }
};

// src/Vec3.ts
var Vec3 = class _Vec3 extends VectorBase {
  constructor(x, y, z) {
    super();
    this.x = x;
    this.y = y;
    this.z = z;
  }
  dot(other) {
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }
  cross(other) {
    return new _Vec3(
      other.z * this.y - other.y * this.z,
      other.x * this.z - other.z * this.x,
      other.y * this.x - other.x * this.y
    );
  }
  set(other, y, z) {
    if (typeof other == "number") {
      this.x = other;
      this.y = y;
      this.z = z;
      return this;
    } else {
      return this.imapWith(other, (_, other2) => other2);
    }
  }
  ix(cb) {
    this.x = cb(this.x);
    return this;
  }
  iy(cb) {
    this.y = cb(this.y);
    return this;
  }
  iz(cb) {
    this.z = cb(this.z);
    return this;
  }
  eq(other) {
    if (typeof other === "number") {
      return this.x === other && this.y === other && this.z === other;
    } else if (Array.isArray(other)) {
      return this.x === other[0] && this.y === other[1] && this.z === other[2];
    } else {
      return this.x === other.x && this.y === other.y && this.z == other.z;
    }
  }
  clone() {
    return new _Vec3(this.x, this.y, this.z);
  }
  toString() {
    return `Vec3(${this.x}, ${this.y}, ${this.z})`;
  }
  toArray() {
    return [this.x, this.y, this.z];
  }
  toObject() {
    return { x: this.x, y: this.y };
  }
  lenSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  sum() {
    return this.x + this.y + this.z;
  }
  mapWith(other, callback) {
    if (Array.isArray(other)) {
      return new _Vec3(
        callback(this.x, other[0]),
        callback(this.y, other[1]),
        callback(this.z, other[2])
      );
    } else {
      return new _Vec3(
        callback(this.x, other.x),
        callback(this.y, other.y),
        callback(this.z, other.z)
      );
    }
  }
  imapWith(other, callback) {
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
  map(callback) {
    return new _Vec3(callback(this.x), callback(this.y), callback(this.z));
  }
  imap(callback) {
    this.x = callback(this.x);
    this.y = callback(this.y);
    this.z = callback(this.z);
    return this;
  }
  static zero() {
    return _Vec3.fromScaler(0);
  }
  static one() {
    return _Vec3.fromScaler(1);
  }
  static fromScaler(scaler) {
    return new _Vec3(scaler, scaler, scaler);
  }
  static fromArray(array) {
    return new _Vec3(array[0], array[1], array[2]);
  }
  static fromObject(object) {
    return new _Vec3(object.x, object.y, object.z);
  }
  static from(other) {
    if (typeof other == "number") return _Vec3.fromScaler(other);
    if (Array.isArray(other)) return _Vec3.fromArray(other);
    return _Vec3.fromObject(other);
  }
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
