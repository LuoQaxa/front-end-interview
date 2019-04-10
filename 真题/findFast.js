 // （1.）最短时间内找出（2.）响应速度最快且（3.）成功的接口。
 // 实现 findFatest 函数。

 const urls = [
   'https://www.toutiao.com/a',
   'https://www.toutiao.com/b',
   'https://www.toutiao.com/bb',
   'https://www.toutiao.com/d',
   'https://www.toutiao.com/e',
 ]
 findFatest(urls).then(url => console.log(url))

// 类似于race,但是race是一旦有成功或者拒绝，是不保证成功的

// 如果只写了一个resolve函数，
// 如果一个接口响应速度很快，但是失败了，没有写失败的回调函数会怎样
function findFast(urls) {
  return new Promise((resolve, reject) => {
    let errCount = 0;
    for ( let i = 0; i < urls.length; i++) {
      fetch(urls[i]).then((value) => {
        resolve(value)
      }, (err) => {
        // 只有一个失败了忽略，不改变promise的状态，如果所有都失败了才忽略
        errCount++
        if (errCount === urls.length) {
          reject('all fail');
        }
      })
    }
  })
}

// 不能不写reject,如果上一个promise失败了会报错的
Promise.reject().then(() => {
  console.log('success');
}).catch(() => console.log('err')
)