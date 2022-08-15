async function promiseAll(asyncList) {
  let list = [];
  let res = [];

  for (let i = 0; i < asyncList.length; i++) {
    if (i + 6 < asyncList.length) {
      list = asyncList.slice(i, i + 6)
      i += 6
    } else {
      list = asyncList.slice(i)
      i = asyncList.length
    }

    try {
      let _res = await Promise.all(list)
      res = res.concat(_res)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  return res
}