// 题目
// promise 实现强制等待的效果

// promise 实现强制等待的效果
const delay = async (time: ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

const run = async () => {
 await delay(2000) // 2s 之后才会执行
  console.log('delay 2s！')
}
run()