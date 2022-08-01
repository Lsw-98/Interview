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

class Lazy {
  constructor(name) {
    this.quque = []
    this.quque.push(() => {
      setTimeout(() => {
        console.log(name);
        this.next()
      });
    })
    setTimeout(() => {
      this.next()
    });
  }

  next() {
    setTimeout(() => {
      if (this.quque.length === 0) return
      const task = this.quque.shift()
      task()
    })
  }

  eat(value) {
    this.quque.push(() => {
      console.log(value);
      this.next()
    })
    return this
  }

  sleep(delay) {
    this.quque.push(() => {
      setTimeout(() => {
        this.next()
      }, delay * 1000);
    })
    return this
  }

  sleepFirst(delay) {
    this.quque.unshift(() => {
      setTimeout(() => {
        this.next()
      }, delay * 1000);
    })
    return this
  }
}

function LazyMan(name) {
  return new Lazy(name)
}

// LazyMan('name').eat('apple').sleep(1).eat('orange')
// LazyMan("Hank")
// LazyMan("Hank").sleep(10).eat("dinner")
// LazyMan("Hank").eat("dinner").eat("supper")
// LazyMan("Hank").sleepFirst(5).eat("supper")

async function main() {
  for (let i = 1; i < 6; i++) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000);
    })
    console.log(i);
  }
}

main()
