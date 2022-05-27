var CancelToken = axios.CancelToken;
var source = CancelToken.source();
axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // 处理错误
  }
});
// 取消请求（message 参数是可选的）
source.cancel('Operation canceled by the user.');