console.log(1);

setTimeout(() => {
  new Promise((resolve) => {
    console.log(2);
    resolve();
  }).then(() => {
    console.log(3);
  })
}, 1000);

setTimeout(() => {
  new Promise((resolve) => {
    console.log(8);
    resolve();
  }).then(() => {
    console.log(9);
  })
}, 1000);

new Promise((resolve) => {
  console.log(4);
  resolve();
}).then(() => {
  console.log(5);
})

new Promise((resolve) => {
  console.log(6);
  resolve();
}).then(() => {
  console.log(7);
})

// 1 4 6同步代码执行，将promise放入微任务，settimeout放入宏任务
// 5 7 清空所有的微任务
// 2 取出一件宏任务执行，将微任务放入微任务队列
// 3 清空所有的微任务
// 8 取出一件宏任务执行
// 9 清空微任务