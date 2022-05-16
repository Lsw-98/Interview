// 创建父类构造函数，并添加属性
function fatherClass(name) {
  this.name = name
  this.showName = function () {
    console.log(this.name);
  }
}

// 给父类的原型添加属性
fatherClass.prototype.showAge = function () {
  console.log(this.age);
}

// 创建子构造函数
function childClass() {

}

// 设置子构造函数的原型对象实现继承
childClass.prototype = fatherClass.prototype

/**
 * 父原型对象改变，子原型对象跟着改变
 * 这种放，子类只能获得父类原型中的方法和属性，无法获取父类构造函数中的属性
 */