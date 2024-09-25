export default class VectorBase<Vec extends VectorBase<any, unknown>, VecLike> {
    add(scaler: number): Vec;
    add(other: VecLike): Vec;
    add(other: number | VecLike): Vec {
        if (typeof other === "number") {
            return this.map((e) => e + other);
        } else {
            return this.mapWith(other, (self, other) => self + other);
        }
    }

    iadd(scaler: number): Vec;
    iadd(other: VecLike): Vec;
    iadd(other: number | VecLike): Vec {
        if (typeof other === "number") {
            return this.imap((e) => e + other);
        } else {
            return this.imapWith(other, (self, other) => self + other);
        }
    }

    sub(scaler: number): Vec;
    sub(other: VecLike): Vec;
    sub(other: number | VecLike): Vec {
        if (typeof other === "number") {
            return this.map((e) => e - other);
        } else {
            return this.mapWith(other, (self, other) => self - other);
        }
    }

    isub(scaler: number): Vec;
    isub(other: VecLike): Vec;
    isub(other: number | VecLike): Vec {
        if (typeof other === "number") {
            return this.imap((e) => e - other);
        } else {
            return this.imapWith(other, (self, other) => self - other);
        }
    }

    mul(scaler: number): Vec;
    mul(other: VecLike): Vec;
    mul(other: number | VecLike): Vec {
        if (typeof other === "number") {
            return this.map((e) => e * other);
        } else {
            return this.mapWith(other, (self, other) => self * other);
        }
    }

    imul(scaler: number): Vec;
    imul(other: VecLike): Vec;
    imul(other: number | VecLike): Vec {
        if (typeof other === "number") {
            return this.imap((e) => e * other);
        } else {
            return this.imapWith(other, (self, other) => self * other);
        }
    }

    div(scaler: number): Vec;
    div(other: VecLike): Vec;
    div(other: number | VecLike): Vec {
        if (typeof other === "number") {
            return this.map((e) => e / other);
        } else {
            return this.mapWith(other, (self, other) => self / other);
        }
    }

    idiv(scaler: number): Vec;
    idiv(other: VecLike): Vec;
    idiv(other: number | VecLike): Vec {
        if (typeof other === "number") {
            return this.imap((e) => e / other);
        } else {
            return this.imapWith(other, (self, other) => self / other);
        }
    }

    avg(other: VecLike) {
        return this.mapWith(other, (self, other) => (self + other) / 2);
    }

    iavg(other: VecLike) {
        return this.imapWith(other, (self, other) => (self + other) / 2);
    }

    max(scaler: number): Vec;
    max(other: VecLike): Vec;
    max(other: number | VecLike): Vec {
        if (typeof other === "number") {
            return this.map((e) => Math.max(e, other));
        } else {
            return this.mapWith(other, Math.max);
        }
    }

    imax(scaler: number): Vec;
    imax(other: VecLike): Vec;
    imax(other: number | VecLike): Vec {
        if (typeof other === "number") {
            return this.imap((e) => Math.max(e, other));
        } else {
            return this.imapWith(other, Math.max);
        }
    }

    min(scaler: number): Vec;
    min(other: VecLike): Vec;
    min(other: number | VecLike): Vec {
        if (typeof other === "number") {
            return this.map((e) => Math.min(e, other));
        } else {
            return this.mapWith(other, Math.min);
        }
    }

    imin(scaler: number): Vec;
    imin(other: VecLike): Vec;
    imin(other: number | VecLike): Vec {
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

    mix(other: VecLike, alpha: number) {
        return this.mapWith(
            other,
            (self, other) => self + (other - self) * alpha
        );
    }

    imix(other: VecLike, alpha: number) {
        return this.imapWith(
            other,
            (self, other) => self + (other - self) * alpha
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

    dist(other: VecLike) {
        return Math.sqrt(this.distSq(other));
    }

    distSq(other: VecLike): number {
        return this.mapWith(
            other,
            (self, other) => (self - other) * (self - other)
        ).sum();
    }

    eq(scaler: number): boolean;
    eq(other: VecLike): boolean;
    eq(_other: number | VecLike): boolean {
        throw new Error(".eq not implemented for this class");
    }

    clone(): Vec {
        throw new Error(".clone not implemented for this class");
    }

    toString(): string {
        throw new Error(".toString not implemented for this class");
    }

    toArray(): number[] {
        throw new Error(".toArray not implemented for this class");
    }

    toObject(): {} {
        throw new Error(".toObject not implemented for this class");
    }

    lenSq(): number {
        throw new Error(".lenSq not implemented for this class");
    }

    sum(): number {
        throw new Error(".sum not implemented for this class");
    }

    mapWith(
        _other: VecLike,
        _callback: (self: number, other: number) => number
    ): Vec {
        throw new Error(".mapWith not implemented for this class");
    }

    imapWith(
        _other: VecLike,
        _callback: (self: number, other: number) => number
    ): Vec {
        throw new Error(".imapWith not implemented for this class");
    }

    map(_callback: (value: number) => number): Vec {
        throw new Error(".map not implemented for this class");
    }

    imap(_callback: (value: number) => number): Vec {
        throw new Error(".imap not implemented for this class");
    }
}
