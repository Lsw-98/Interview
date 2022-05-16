function SuperClass(name, age) {
  this.name = name;
  this.age = age;
  this.showName = function () {
    console.log(this.name);
  }
}

SuperClass.prototype.friends = ['小王', '小强', '小王八'];

function SubClass(name, age) {
  // 借用构造函数(Person)
  SuperClass.call(this, name, age);
}

// 使用深拷贝实现继承
deepCopy(SubClass.prototype, SuperClass.prototype);
SubClass.prototype.constructor = SubClass;
