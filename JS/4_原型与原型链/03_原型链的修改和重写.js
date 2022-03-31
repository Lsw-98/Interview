function Person(name) {
  this.name = name
}

Person.prototype

// 修改原型
Person.prototype.getName = function () { }

Person.prototype

const p1 = new Person("lsw")

p1.__proto__ === Person.prototype
p1.__proto__ === p1.constructor.prototype



// 重写原型
Person.prototype = {
  getName: function () { }
}

const p2 = new Person("lsw")

p2.__proto__ === Person.prototype
p2.__proto__ === p2.constructor.prototype