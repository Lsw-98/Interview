// 原型链继承：让实例的原型等于父类的实例

// 父方法
function fatherFun(flag1) {
  this.flag1 = flag1
}

// 子方法
function childFun(flag2) {
  this.flag2 = flag2
}

// 父实例
const FatherInstance = new fatherFun(true)

// 子继承父
childFun.prototype = FatherInstance

// 子实例
const ChildInstance = new childFun(false)
console.log(ChildInstance.flag1);
console.log(ChildInstance.flag2);
