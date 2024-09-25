declare class VectorBase<Vec extends VectorBase<any, unknown>, VecLike> {
    add(scaler: number): Vec;
    add(other: VecLike): Vec;
    iadd(scaler: number): Vec;
    iadd(other: VecLike): Vec;
    sub(scaler: number): Vec;
    sub(other: VecLike): Vec;
    isub(scaler: number): Vec;
    isub(other: VecLike): Vec;
    mul(scaler: number): Vec;
    mul(other: VecLike): Vec;
    imul(scaler: number): Vec;
    imul(other: VecLike): Vec;
    div(scaler: number): Vec;
    div(other: VecLike): Vec;
    idiv(scaler: number): Vec;
    idiv(other: VecLike): Vec;
    avg(other: VecLike): Vec;
    iavg(other: VecLike): Vec;
    max(scaler: number): Vec;
    max(other: VecLike): Vec;
    imax(scaler: number): Vec;
    imax(other: VecLike): Vec;
    min(scaler: number): Vec;
    min(other: VecLike): Vec;
    imin(scaler: number): Vec;
    imin(other: VecLike): Vec;
    sign(): Vec;
    isign(): Vec;
    len(): number;
    norm(): Vec;
    normalize(): Vec;
    inorm(): Vec;
    inormalize(): Vec;
    mix(other: VecLike, alpha: number): Vec;
    imix(other: VecLike, alpha: number): Vec;
    inv(): Vec;
    iinv(): Vec;
    izero(): Vec;
    dist(other: VecLike): number;
    distSq(other: VecLike): number;
    eq(scaler: number): boolean;
    eq(other: VecLike): boolean;
    clone(): Vec;
    toString(): string;
    toArray(): number[];
    toObject(): {};
    lenSq(): number;
    sum(): number;
    mapWith(_other: VecLike, _callback: (self: number, other: number) => number): Vec;
    imapWith(_other: VecLike, _callback: (self: number, other: number) => number): Vec;
    map(_callback: (value: number) => number): Vec;
    imap(_callback: (value: number) => number): Vec;
}

type Vec2Like = [number, number] | {
    x: number;
    y: number;
};
declare class Vec2 extends VectorBase<Vec2, Vec2Like> {
    x: number;
    y: number;
    constructor(x: number, y: number);
    dot(other: Vec2): number;
    cross(other: Vec2): number;
    atan2(): number;
    set(x: number, y: number): this;
    set(other: Vec2Like): this;
    ix(cb: (value: number) => number): this;
    iy(cb: (value: number) => number): this;
    eq(scaler: number): boolean;
    eq(other: Vec2Like): boolean;
    clone(): Vec2;
    toString(): string;
    toArray(): [number, number];
    toObject(): {
        x: number;
        y: number;
    };
    lenSq(): number;
    sum(): number;
    mapWith(other: Vec2Like, callback: (self: number, other: number) => number): Vec2;
    imapWith(other: Vec2Like, callback: (self: number, other: number) => number): this;
    map(callback: (value: number) => number): Vec2;
    imap(callback: (value: number) => number): this;
    static zero(): Vec2;
    static one(): Vec2;
    static fromScaler(scaler: number): Vec2;
    static fromDegree(degree: number): Vec2;
    static fromAngle(angle: number): Vec2;
    static fromArray(array: [number, number]): Vec2;
    static fromObject(object: {
        x: number;
        y: number;
    }): Vec2;
    static from(scaler: number): Vec2;
    static from(other: Vec2Like): Vec2;
    static random(scale?: number): Vec2;
}

type Vec3Like = [number, number, number] | {
    x: number;
    y: number;
    z: number;
};
declare class Vec3 extends VectorBase<Vec3, Vec3Like> {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    dot(other: Vec3): number;
    cross(other: Vec3): Vec3;
    set(x: number, y: number, z: number): this;
    set(other: Vec3Like): this;
    ix(cb: (value: number) => number): this;
    iy(cb: (value: number) => number): this;
    iz(cb: (value: number) => number): this;
    eq(scaler: number): boolean;
    eq(other: Vec3Like): boolean;
    clone(): Vec3;
    toString(): string;
    toArray(): [number, number, number];
    toObject(): {
        x: number;
        y: number;
    };
    lenSq(): number;
    sum(): number;
    mapWith(other: Vec3Like, callback: (self: number, other: number) => number): Vec3;
    imapWith(other: Vec3Like, callback: (self: number, other: number) => number): this;
    map(callback: (value: number) => number): Vec3;
    imap(callback: (value: number) => number): this;
    static zero(): Vec3;
    static one(): Vec3;
    static fromScaler(scaler: number): Vec3;
    static fromArray(array: [number, number, number]): Vec3;
    static fromObject(object: {
        x: number;
        y: number;
        z: number;
    }): Vec3;
    static from(scaler: number): Vec3;
    static from(other: Vec3Like): Vec3;
    static random(scale?: number): Vec3;
}

export { Vec2, type Vec2Like, Vec3, type Vec3Like };
