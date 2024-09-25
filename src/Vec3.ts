import VectorBase from "./VectorBase";

export type Vec3Like =
    | [number, number, number]
    | { x: number; y: number; z: number };

export class Vec3 extends VectorBase<Vec3, Vec3Like> {
    constructor(public x: number, public y: number, public z: number) {
        super();
    }

    dot(other: Vec3) {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    }

    cross(other: Vec3) {
        return new Vec3(
            other.z * this.y - other.y * this.z,
            other.x * this.z - other.z * this.x,
            other.y * this.x - other.x * this.y
        );
    }

    set(x: number, y: number, z: number): this;
    set(other: Vec3Like): this;
    set(other: number | Vec3Like, y?: number, z?: number): this {
        if (typeof other == "number") {
            this.x = other;
            this.y = y!; // Assertion.
            this.z = z!; // Assertion.

            return this;
        } else {
            return this.imapWith(other, (_, other) => other);
        }
    }

    ix(cb: (value: number) => number): this {
        this.x = cb(this.x);
        return this;
    }

    iy(cb: (value: number) => number): this {
        this.y = cb(this.y);
        return this;
    }

    iz(cb: (value: number) => number): this {
        this.z = cb(this.z);
        return this;
    }

    override eq(scaler: number): boolean;
    override eq(other: Vec3Like): boolean;
    override eq(other: number | Vec3Like): boolean {
        if (typeof other === "number") {
            return this.x === other && this.y === other && this.z === other;
        } else if (Array.isArray(other)) {
            return (
                this.x === other[0] &&
                this.y === other[1] &&
                this.z === other[2]
            );
        } else {
            return (
                this.x === other.x && this.y === other.y && this.z == other.z
            );
        }
    }

    override clone(): Vec3 {
        return new Vec3(this.x, this.y, this.z);
    }

    override toString(): string {
        return `Vec3(${this.x}, ${this.y}, ${this.z})`;
    }

    override toArray(): [number, number, number] {
        return [this.x, this.y, this.z];
    }

    override toObject(): { x: number; y: number } {
        return { x: this.x, y: this.y };
    }

    override lenSq(): number {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }

    override sum(): number {
        return this.x + this.y + this.z;
    }

    override mapWith(
        other: Vec3Like,
        callback: (self: number, other: number) => number
    ) {
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
                callback(this.z, other.z)
            );
        }
    }

    override imapWith(
        other: Vec3Like,
        callback: (self: number, other: number) => number
    ) {
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

    override map(callback: (value: number) => number) {
        return new Vec3(callback(this.x), callback(this.y), callback(this.z));
    }

    override imap(callback: (value: number) => number) {
        this.x = callback(this.x);
        this.y = callback(this.y);
        this.z = callback(this.z);
        return this;
    }

    static zero() {
        return Vec3.fromScaler(0);
    }

    static one() {
        return Vec3.fromScaler(1);
    }

    static fromScaler(scaler: number) {
        return new Vec3(scaler, scaler, scaler);
    }

    static fromArray(array: [number, number, number]) {
        return new Vec3(array[0], array[1], array[2]);
    }

    static fromObject(object: { x: number; y: number; z: number }) {
        return new Vec3(object.x, object.y, object.z);
    }

    static from(scaler: number): Vec3;
    static from(other: Vec3Like): Vec3;
    static from(other: number | Vec3Like) {
        if (typeof other == "number") return Vec3.fromScaler(other);
        if (Array.isArray(other)) return Vec3.fromArray(other);

        return Vec3.fromObject(other);
    }

    static random(scale: number = 1) {
        return new Vec3(
            Math.random() * scale,
            Math.random() * scale,
            Math.random() * scale
        );
    }
}
