//获得原型副本
function object(o) {
  function F() { };
  F.prototype = o;
  return new F()
}
//使子类获得父类原型上的属性和方法
function inheritPrototype(SubType, SuperType) {
  let prototype = object(SuperType.prototype);
  prototype.constructor = SubType;
  SubType.prototype = prototype
}

function SuperClass(name, age) {
  this.name = name;
  this.age = age;
  this.showName = function () {
    console.log(this.name);
  }
}
SuperClass.prototype.sayAge = function () {
  console.log(this.age);
}
//使子类获得父类构造函数实例属性
function SubClass(name, age) {
  SuperClass.call(this, name);
  this.age = age
}

inheritPrototype(SubClass, SuperClass);

let sub = new SubClass("he", 26)