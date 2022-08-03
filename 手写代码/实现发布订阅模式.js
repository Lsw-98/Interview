// // 基本思路
// // 需要有一个list对象缓存订阅事件
// // 订阅（on）如果存在事件就往list里面缓存事件
// // 取消订阅（off）从list对象找到订阅事件删除
// // 发布（emit）从list对象找到事件去执行就OK
// // 只发布一次（once）执行完删除即可

// class EventEmitter {
//   constructor() {
//     // 事件缓存列表
//     this.list = {}
//   }
//   // 订阅
//   on(name, fn) {
//     // 如果存在事件
//     if (this.list[name]) {
//       this.list[name].push(fn)
//     } else {
//       this.list[name] = [fn]
//     }
//   }
//   // 取消订阅
//   off(name, fn) {
//     // 找到已经注册的事件
//     let tasks = this.list[name]
//     // 判断该事件是否注册
//     if (tasks) {
//       const index = tasks.findIndex(f === fn || f.callback === fn)
//       if (index >= 0) {
//         tasks.splice(index, 1)
//       }
//     }
//   }
//   // 发布
//   emit(name, once = false, ...args) {
//     if (this.list[name]) {
//       // 创建副本，如果回调函数内部继续注册相同的事件，会造成死循环
//       let tasks = this.list[name].slice()
//       for (let fn of tasks) {
//         fn(...args)
//       }
//       // 如果只发布订阅一次，执行完上面代码就把事件删除
//       if (once) {
//         delete this.list[name]
//       }
//     }
//   }
// }

// // 测试
// let eventBus = new EventEmitter()
// let fn1 = function (name, age) {
//   console.log(`${name} ${age}`)
// }
// let fn2 = function (name, age) {
//   console.log(`hello, ${name} ${age}`)
// }
// eventBus.on('aaa', fn1)
// eventBus.on('aaa', fn2)
// eventBus.emit('aaa', false, '布兰', 12)
// Object.defineProperty


class PubSub {
  constructor() {
    this.handles = {};
  }

  // 订阅事件
  on(eventType, handle) {
    if (!this.handles.hasOwnProperty(eventType)) {
      this.handles[eventType] = [];
    }
    if (typeof handle == 'function') {
      this.handles[eventType].push(handle);
    } else {
      throw new Error('缺少回调函数');
    }
    return this;
  }

  // 发布事件
  emit(eventType, ...args) {
    if (this.handles.hasOwnProperty(eventType)) {
      this.handles[eventType].forEach((item, key, arr) => {
        item.apply(null, args);
      })
    } else {
      throw new Error(`"${eventType}"事件未注册`);
    }
    return this;
  }

  // 删除事件
  off(eventType, handle) {
    if (!this.handles.hasOwnProperty(eventType)) {
      throw new Error(`"${eventType}"事件未注册`);
    } else if (typeof handle != 'function') {
      throw new Error('缺少回调函数');
    } else {
      this.handles[eventType].forEach((item, key, arr) => {
        if (item == handle) {
          arr.splice(key, 1);
        }
      })
    }
    return this; // 实现链式操作
  }
}

let callback = function () {
  console.log('you are so nice');
}
let pubsub = new PubSub();
pubsub.on('completed', (...args) => {
  console.log(args.join(' '));
})
pubsub.on('completed', callback);
pubsub.emit('completed', 'what', 'a', 'fucking day');
pubsub.off('completed', callback);
pubsub.emit('completed', 'what', 'a', 'fucking day');
