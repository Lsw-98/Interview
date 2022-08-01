class MyLazyMan {
  constructor(name) {
    this.queue = [];
    this.queue.push(() => {
      setTimeout(() => {
        console.log(`Hi! This is ${name}`);
      })
      this.next(); // 千万不要忘记执行 next
    })

    // 这里依旧是确保在同步代码后执行
    setTimeout(() => {
      this.next();
    })
  }
  next() {
    setTimeout(() => {
      if (this.queue.length === 0) return;
      const task = this.queue.shift();
      task();
    })
  }
  eat(something) {
    this.queue.push(() => {
      console.log(`Eat ${something}`);
      this.next();
    });
    return this;
  }
  sleep(second) {
    this.queue.push(() => {
      setTimeout(() => {
        console.log(`Wake up after ${second}`);
        this.next();
      }, second * 1000);
    });
    return this;
  }
  sleepFirst(second) {
    this.queue.unshift(() => {
      setTimeout(() => {
        console.log(`Wake up after ${second}`);
        this.next();
      }, second * 1000)
    });
    return this;
  }
}

function LazyMan(name) {
  return new MyLazyMan(name);
}

LazyMan("Hank")
LazyMan("Hank").sleep(10).eat("dinner")
LazyMan("Hank").eat("dinner").eat("supper")
LazyMan("Hank").sleepFirst(5).eat("supper")

// class Lazy {
//   constructor(value) {
//     console.log(value);
//   }

//   eat(value) {
//     console.log(value);
//     return this
//   }

//   sleep(delay) {
//     let date = new Date();
//     while (true) {
//       let newDate = new Date()
//       if (newDate.getTime() - date.getTime() >= delay) {
//         break;
//       }
//     }
//     return this
//   }
// }

// function lazyMan(name) {
//   return new Lazy(name)
// }


// lazyMan('name').eat('apple').sleep(1000).eat('orange')