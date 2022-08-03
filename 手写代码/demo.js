// function promiseAll(promises) {

// }

// const a = new Promise((res) => {
//   setTimeout(() => {
//     res(1)
//   }, 3000)
// })

// const b = new Promise((res) => {
//   setTimeout(() => {
//     res(2)
//   }, 1000)
// })

// const c = new Promise((res, reject) => {
//   setTimeout(() => {
//     reject(1)
//   }, 500)
// })

// const d = new Promise((res) => {
//   setTimeout(() => {
//     res(4)
//   }, 2000)
// })

// promiseAll([a, b, c, d]).then((res) => {
//   console.log(res) // [1, 2, null, 4]
// })


// for in 遍历为什么没有遍历
// 变量怎么判断有没有被定义（window.hasOwnProperty）
// 使用babel将es6转为es5，块级作用域怎么实现的

// function Foo() {
//   getName = function () {
//     console.log('1');
//   };
//   return this;
// }

// Foo.getName = function () {
//   console.log('2');
// };

// Foo.prototype.getName = function () {
//   console.log('3');
// };

// var getName = function () {
//   console.log('4');
// };


// function getName() {
//   console.log(5);
// }

// Foo.getName();  // 2
// // Foo().getName();
// getName();  // 4
// new Foo.getName();  // 2
// new Foo().getName();  // 1
// new new Foo().getName();  //  3


class PubSub {
  constructor() {
    this.handles = {}
  }

  on(eventType, handle) {
    if (!this.handles.hasOwnProperty(eventType)) {
      this.handles[eventType] = []
    }

    if (typeof handle === "function") {
      this.handles[eventType].push(handle)
    } else {
      console.log("缺少回调函数");
    }
    return this
  }

  off(eventType, handle) {
    if (!this.handles.hasOwnProperty(eventType)) {
      console.log(`"${eventType}"事件未注册`);
    } else if (typeof handle !== "function") {
      console.log("缺少回调函数");
    } else {
      this.handles[eventType].forEach((item, key, arr) => {
        if (item === handle) {
          arr.splice(key, 1)
        }
      })
    }
    return this
  }

  emit(eventType, ...args) {
    if (this.handles.hasOwnProperty(eventType)) {
      this.handles[eventType].forEach((item) => {
        item.apply(null, args)
      })
    } else {
      console.log(`"${eventType}"事件未注册`);
    }
    return this
  }
}

