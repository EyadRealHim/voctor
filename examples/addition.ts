import { Vec2, Vec3 } from "/home/user/voctor";

{
    const a = new Vec2(1, 5);
    const b = Vec2.fromArray([1, 0]);

    console.log(a.add(b)); // Vec2 { x: 2, y: 5 }
}

{
    const a = Vec3.fromScaler(100);
    const b = Vec3.fromObject({
        x: 1,
        y: 8,
        z: 16,
    });

    console.log(a.sub(b)); // Vec3 { x: 99, y: 92, z: 84 }
}
