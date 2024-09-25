import assert from "node:assert/strict";
import test from "node:test";

import { Vec2 } from "./Vec2";
import { Vec3 } from "./Vec3";

test("Addition", () => {
    {
        const a = new Vec2(3, 1);
        const b = Vec2.fromScaler(3);

        assert(a.add(b).eq([6, 4]), "Addition failed for Vec2");
    }

    {
        const a = new Vec3(3, 1, 5);
        const b = Vec3.one();

        assert(a.add(b).eq([4, 2, 6]), "Addition failed for Vec3");
    }
});

test("Subtraction", () => {
    {
        const a = new Vec2(3, 1);
        const b = Vec2.fromScaler(3);

        assert(a.sub(b).eq([0, -2]), "Subtraction failed for Vec2");
    }

    {
        const a = new Vec3(3, 1, 5);
        const b = Vec3.one();

        assert(a.sub(b).eq([2, 0, 4]), "Subtraction failed for Vec3");
    }
});

test("Multiplication", () => {
    {
        const a = new Vec2(3, 1);
        const b = Vec2.fromScaler(3);

        assert(a.mul(b).eq([9, 3]), "Multiplication failed for Vec2");
    }

    {
        const a = new Vec3(3, 1, 5);
        const b = Vec3.one();

        assert(a.mul(b).eq([3, 1, 5]), "Multiplication failed for Vec3");
    }
});

test("Division", () => {
    {
        const a = new Vec2(3, 1);
        const b = Vec2.fromScaler(3);

        assert(a.div(b).eq([1, 1 / 3]), "Division failed for Vec2");
    }

    {
        const a = new Vec3(3, 1, 5);
        const b = Vec3.one();

        assert(a.div(b).eq([3, 1, 5]), "Division failed for Vec3");
    }
});

test("In place Addition", () => {
    {
        const a = new Vec2(3, 1);
        const b = Vec2.fromScaler(3);

        a.iadd(b);
        assert(a.eq([6, 4]), "In place addition failed for Vec2");
    }

    {
        const a = new Vec3(3, 1, 5);
        const b = Vec3.one();

        a.iadd(b);
        assert(a.eq([4, 2, 6]), "In place addition failed for Vec3");
    }
});

test("In place Subtraction", () => {
    {
        const a = new Vec2(3, 1);
        const b = Vec2.fromScaler(3);

        a.isub(b);
        assert(a.eq([0, -2]), "In place subtraction failed for Vec2");
    }

    {
        const a = new Vec3(3, 1, 6);
        const b = Vec3.one();

        a.isub(b);
        assert(a.eq([2, 0, 5]), "In place subtraction failed for Vec3");
    }
});

test("In place Division", () => {
    {
        const a = new Vec2(3, 1);
        const b = Vec2.fromScaler(3);

        a.idiv(b);
        assert(a.eq([1, 1 / 3]), "In place division failed for Vec2");
    }

    {
        const a = new Vec3(3, 1, 6);
        const b = Vec3.one();

        a.idiv(b);
        assert(a.eq([3, 1, 6]), "In place division failed for Vec3");
    }
});

test("Vec2 set", () => {
    const a = new Vec2(0, 0);
    a.set(1, 2);
    assert(a.eq([1, 2]), "Setting individual components failed");
    a.set({ x: 3, y: 4 });
    assert(a.eq([3, 4]), "Setting from object failed");
});

test("Vec3 set", () => {
    const a = new Vec3(0, 0, 0);
    a.set(1, 2, 3);
    assert(a.eq([1, 2, 3]), "Setting individual components failed");
    a.set({ x: 4, y: 5, z: 6 });
    assert(a.eq([4, 5, 6]), "Setting from object failed");
});

test("Vec2 dot", () => {
    const a = new Vec2(1, 2);
    const b = new Vec2(3, 4);
    assert(a.dot(b) === 11, "Dot product failed");
});

test("Vec3 dot", () => {
    const a = new Vec3(1, 2, 3);
    const b = new Vec3(4, 5, 6);
    assert(a.dot(b) === 32, "Dot product failed");
});

test("Vec2 len", () => {
    const a = new Vec2(3, 4);
    assert(a.len() === 5, "len failed for Vec2");
});

test("Vec3 len", () => {
    const a = new Vec3(1, 2, 2);
    assert(a.len() === 3, "len failed for Vec3");
});

test("Vec2 lenSq", () => {
    const a = new Vec2(3, 4);
    assert(a.lenSq() === 25, "lenSq failed for Vec2");
});

test("Vec3 lenSq", () => {
    const a = new Vec3(1, 2, 2);
    assert(a.lenSq() === 9, "lenSq failed for Vec3");
});
