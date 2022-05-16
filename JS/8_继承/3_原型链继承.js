// 创建父构造函数
function Father() {
  this.name = 'lsw';
  this.age = 25;
  this.showName = function () {
    console.log(this.name);
  }
}

// 创建父构造函数的原型
Father.prototype.friends = ['张三', '李四'];
Father.prototype.showAge = function () {
  console.log(this.age);
}

// 创建子构造函数
function Child() {

}

// 继承
Child.prototype = new Father()
// 修改子构造函数的原型的属性和方法
Child.prototype.constructor = Child

let child = new Child()
console.log(child.name);


// 当我们改变friends时，父构造函数的原型也会跟着变化
child.friends.push("王五")
console.log(child.friends);
let father = new Father()
console.log(father.friends);