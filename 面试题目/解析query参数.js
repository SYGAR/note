// 题目√
// 实现一个方法，解析输入 URL 中的 Query 参数，举例:
// 输入 URL : https://google.com/search?a=b&c=d
// 返回结果 : { a: 'b', c: 'd' }

function parseQueryString(url) {
  // todo
  let obj = {}
  let arr = url.split('?')[1].split('&')
  for (let i = 0; i < arr.length; i++) {
    let arr2 = arr[i].split('=')
    // 给对象赋值
    // obj['a']='b'
    // obj['c']='d'
    obj[arr2[0]] = arr2[1]
  }
  return obj
}
console.log(parseQueryString('https://google.com/search?a=b&c=d'))