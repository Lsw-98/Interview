function url_curring(protocol) {
  return function (hostname, pathname) {
    return `${protocol}${hostname}${pathname}`
  }
}

// 减少参数的复用
const url_https = url_curring("https://")

const url1 = url_https('www.baidu.com', '/home')
const url2 = url_https('www.baidu.com', '/login')
const url3 = url_https('www.baidu.com', '/user')

console.log(url1);
console.log(url2);
console.log(url3);