/*
步骤：
1. 创建一个XHR对象
2. 使用open方法创建一个HTTP请求，参数是请求的方法，
   请求的地址是否异步和用户认证信息
3. 在发起请求前，可以使用setRequestHeader为请求添加请求头。一个XHR对象共有5个状态，
   当它的状态变化时会触发onreadystatechange事件，可以通过设置监听函数来处理请求后的结果
   当对象的 readyState 变为 4 的时候，代表服务器返回的数据接收完成，这个时候可以通过判断
   请求的状态，如果状态是 2xx 或者 304 的话则代表返回正常。这个时候就可以通过 
   response 中的数据来对页面进行更新了。
4. 当对象的属性和监听函数设置完后，调用send方法来向服务器发起请求
*/

const URL = "/server"
let xhr = new XMLHttpRequest()
// 创建HTTP请求
xhr.open("GET", URL, true)
// 设置状态监听函数
xhr.onreadystatechange = function () {
  if (this.readyState !== 4) return
  // 请求成功时
  if (this.status === 200) {
    handle(this.response)
  } else {
    console.error(this.statusText);
  }
}
// 发送http请求
xhr.send(null)