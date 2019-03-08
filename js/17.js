// js为浏览器交互而诞生的，由于交互中处理最多的是对dom的操作，如果js为多线程，就会涉及到线程的读写锁的问题，所以js被设计为单线程非阻塞的语言。

// js在执行过程中会产生执行环境，这些执行环境会被顺序的加入执行栈中。遇到异步的代码会挂起并加入到task队列中，一旦执行栈为空，event loop就会从task队列中拿出需要执行的代码
// 并放入执行栈中执行。

// 不同的任务源会分配到不同的task队列中。 任务源可以分为微任务microtask，和宏任务macrotask。 在es6规范中，微任务称jobs，macrotask为task。
console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

new Promise((resolve) => {
  console.log('Promise')
  resolve()
}).then(function () {
  console.log('promise1');
}).then(function () {
  console.log('promise2');
});

console.log('script end');
// script start => Promise => script end => promise1 => promise2 => setTimeout


// 微任务：promise，nodejs中的process.nextTick，Object.observe，mutationObserver
// 宏任务：settimeout setinterval setImmediate i/o ui rendering

// 并不是说微任务就快于宏任务


// 理解node中的process.nextTick: https://www.oschina.net/translate/understanding-process-next-tick?print
// 不太理解什么时候使用这个api，有什么作用

// node中eventloop比较复杂，运行结果和顺序也不一定，而浏览器中是确定的。


// node11 后和浏览器的行为统一了，都是每一个宏任务执行完就执行微任务。

