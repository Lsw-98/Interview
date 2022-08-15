let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled#123';
console.log(parseParam(url));

function parseParam(url) {
  const paramObj = {}
  const paramsStr = /.+\?(.+)\#.+$/.exec(url)
  const paramsArr = paramsStr.split("&")
  paramsArr.forEach(item => {
    if (/=/.test(item)) {
      let [key, value] = item.split("=")
      value = decodeURIComponent(value)
      value = /^\d+$/.test(value) ? parseFloat(value) : value
      if (paramObj.hasOwnProperty(key)) {
        paramObj[key] = [].concat(paramObj[key], value)
      } else {
        paramObj[key] = value
      }
    } else {
      paramObj[item] = true
    }
  })
  return paramObj
}