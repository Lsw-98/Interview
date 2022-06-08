var obj = {
  "2": "a",
  "3": "b",
  "4": "cc",
  "length": 5,
  "push": Array.prototype.push,
  "splice": Array.prototype.splice,
  "pop": Array.prototype.pop
};
console.log(obj);
obj.push("c");
obj.push("d");
obj.push("f");

console.log(obj);
obj.pop;
console.log(obj);