const Promise1 = require('./promise');
console.log(Promise1);

function timeOut(delay) {
  return new Promise1((resolve, reject) => {
    setTimeout(() => {
      reject(`延迟${delay}打印`)
    }, 2000);
  })
}

// timeOut(1000);

// 链式调用
// 一个是成功的回调，一个是失败的回调

timeOut(1000).then((value) => {
  // console.log('success value is,', value);
   // th，en可以自己手动返回一个promise，比如说我们有两个请求，第二个请
   // 求依赖第一个请求

}, (reason) => {
  console.log('reject reason is,', reason);
})

timeOut(1000).then((value) => {
  // console.log('success value is,', value);
  return new Promise((resolve, reject) => {
    resolve(4);
  })
}, (reason) => {
  console.log('reject reason1 is,', reason);
}).then((value) => {
  console.log(value);
})

// 写一个node的readfile 的promise版本


// 循环引用报错
let p = new Promise((resolve, reject) => {
  resolve(0)
})
let p2 = p.then(() => {
  return p2
})

// 如果







