function sendAJAX(url) {
  return new Promise((resolve, reject) => {
    // 创建ajax对象
    const xhr = new XMLHttpRequest()
    // 指定请求方式和路径
    xhr.open("GET", url)
    // 发送请求
    xhr.send()
    // 处理响应结果
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        // 状态码为200代表请求成功
        if (xhr.status >= 200 && xhr.status < 300) {
          // 返回响应体
          resolve(xhr.response)
        } else {
          // 失败返回状态码
          reject(xhr.status)
        }
      }
    }
  })
}

