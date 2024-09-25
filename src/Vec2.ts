import VectorBase from "./VectorBase";

export type Vec2Like = [number, number] | { x: number; y: number };

export class Vec2 extends VectorBase<Vec2, Vec2Like> {
    constructor(public x: number, public y: number) {
        super();
    }

    dot(other: Vec2) {
        return this.x * other.x + this.y * other.y;
    }

    cross(other: Vec2) {
        return this.x * other.y - this.y * other.x;
    }

    atan2() {
        return Math.atan2(this.y, this.x);
    }

    set(x: number, y: number): this;
    set(other: Vec2Like): this;
    set(other: number | Vec2Like, y?: number): this {
        if (typeof other == "number") {
            this.x = other;
            this.y = y!; // Assertion.

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

    override eq(scaler: number): boolean;
    override eq(other: Vec2Like): boolean;
    override eq(other: number | Vec2Like): boolean {
        if (typeof other === "number") {
            return this.x === other && this.y === other;
        } else if (Array.isArray(other)) {
            return this.x === other[0] && this.y === other[1];
        } else {
            return this.x === other.x && this.y === other.y;
        }
    }

    override clone(): Vec2 {
        return new Vec2(this.x, this.y);
    }

    override toString(): string {
        return `Vec2(${this.x}, ${this.y})`;
    }

    override toArray(): [number, number] {
        return [this.x, this.y];
    }

    override toObject(): { x: number; y: number } {
        return { x: this.x, y: this.y };
    }

    override lenSq(): number {
        return this.x * this.x + this.y * this.y;
    }

    override sum(): number {
        return this.x + this.y;
    }

    override mapWith(
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

    override imapWith(
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

    override map(callback: (value: number) => number) {
        return new Vec2(callback(this.x), callback(this.y));
    }

    override imap(callback: (value: number) => number) {
        this.x = callback(this.x);
        this.y = callback(this.y);
        return this;
    }

    static zero() {
        return Vec2.fromScaler(0);
    }

    static one() {
        return Vec2.fromScaler(1);
    }

    static fromScaler(scaler: number) {
        return new Vec2(scaler, scaler);
    }

    static fromDegree(degree: number) {
        return this.fromAngle((degree * Math.PI) / 180);
    }

    static fromAngle(angle: number) {
        return new Vec2(Math.cos(angle), Math.sin(angle));
    }

    static fromArray(array: [number, number]) {
        return new Vec2(array[0], array[1]);
    }

    static fromObject(object: { x: number; y: number }) {
        return new Vec2(object.x, object.y);
    }

    static from(scaler: number): Vec2;
    static from(other: Vec2Like): Vec2;
    static from(other: number | Vec2Like) {
        if (typeof other == "number") return Vec2.fromScaler(other);
        if (Array.isArray(other)) return Vec2.fromArray(other);

        return Vec2.fromObject(other);
    }

    static random(scale: number = 1) {
        return new Vec2(Math.random() * scale, Math.random() * scale);
    }
}
