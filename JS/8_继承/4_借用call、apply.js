// 创建父构造函数
function Father(name) {
  this.name = name;
  this.freinds = ['小王', '小强'];
  this.showName = function () {
    console.log(this.name);
  }
}

// 创建子构造函数
function Child(name) {
  // 使用call调用Father的构造函数
  Father.call(this, name)
}

const child = new Child("lsw")
child.showName()
console.log(child.freinds);
