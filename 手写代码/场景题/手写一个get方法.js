resp = {
  message: 'success',
  code: 0,
  data: [{ title: 'hello' }]
}

function get(resp, str) {
  if (resp.message === "success" && resp.code === 0) {
    const arr = str.split(".");
    const num = arr[0].match(/\d+/g);
    return resp.data.length >= num + 1 ? resp.data[num].title : null
  } else {
    return "请求失败"
  }
}

console.log(get(resp, 'data[0].title')) // hello
console.log(get(resp, 'data[1].title')) // null