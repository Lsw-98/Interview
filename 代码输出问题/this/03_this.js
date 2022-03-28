function a() {
  console.log(this);
}

a.call(null);

// 如果第一个参数传入的对象调用者是null或者undefined，call方法将把全局对象（浏览器上是window对象）作为this的值。
// 所以，不管传入null 还是 undefined，其this都是全局对象window。所以，在浏览器上答案是输出 window 对象。

// 在严格模式中，null 就是 null，undefined 就是 undefined
'use strict';

function a() {
  console.log(this);
}
a.call(null); // null
a.call(undefined); // undefined
