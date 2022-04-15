function testPromise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('成功！')
    }, 1000)
    setTimeout(() => {
      reject('失败！')
    }, 3000)
  }).then((res) => {
    console.log('First then:', res)
    return 'From first then'
  }).catch(err => {
    console.log('First catch:', err)
    return 'From first catch'
  }).finally((res) => {
    console.log('First finally', res)
    return 'From first finally'
  }).then((res) => {
    console.log('Second then:', res)
    return 'From second then'
  }).catch(err => {
    console.log('Second catch:', err)
    return 'From second catch'
  }).finally((res) => {
    console.log('Second finally', res)
    return 'From second  finally'
  }).then((res) => {
    console.log('Third then:', res)
    return 'From third then'
  }).catch(err => {
    console.log('Third catch:', err)
    return 'From third catch'
  }).finally((res) => {
    console.log('Third finally', res)
    return 'From third  finally'
  })
}

function testPromise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  }).then(res => {
    console.log(res);
  }).finally((res) => {
    console.log("Finally");
  })
}

testPromise1()
testPromise2()