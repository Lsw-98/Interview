// 创建父构造函数
function Father(name, age) {
  this.name = name;
  this.age = age;
  this.showName = function () {
    console.log(this.name);
  }
}

// 设置父构造函数的原型对象
Father.prototype.showAge = function () {
  console.log(this.age);
}

// 创建子类，将父构造函数的参数传递到子构造函数中
function Child(name) {
  Father.call(this, name)
}

// 设置继承
Father.prototype = new Father()
Father.prototype.constructor = Father

const child = new Child("lsw")
child.showName()