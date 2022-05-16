// 创建父对象
let superObj = {
  name: 'Li',
  age: 25,
  friends: ['小明', '小李', '小赵'],
  showName: function () {
    alert(this.name);
  }
}

// 创建需要继承的子对象
let subObj = {};

// 开始拷贝属性(使用for...in...循环)
for (let i in superObj) {
  subObj[i] = superObj[i];
}

console.log(subObj)
console.log(superObj)