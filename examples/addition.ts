import Vec2 from "voctor";

const a = new Vec2(1, 5);
const b = Vec2.fromArray([1, 0]);

console.log(a.add(b)); // Vec2 { x: 2, y: 5 }
