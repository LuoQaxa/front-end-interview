#### async的作用是什么？
我们写了很多`async await`的函数，但是有没有想过为什么需要在函数前写`async`，`async`有什么实际上的作用呢？ 
试验：
```js
async function foo() {
  console.log('use async without await');
}
const result = foo()
console.log(result);
```
这个`foo`函数能够正常运行，只是返回的结果是一个`promise`。所以`async`函数返回的是一个promise对象。不管函数有没有`return`值，`async`都会通过`Promise.resolve()`封装成一个对象。如果这个函数抛出异常，会用`Promise.reject`方法传递这个值。

#### await的作用是什么？
`await`会暂停异步函数的执行，等待后面的异步操作的执行结果返回。
根据[文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await)可以知道：
1. 表达式：`[return_value] = await expression`
2. 返回值：返回`Promise`对象的处理结果，如果不是`Promise`对象，则返回该值本身。

#### async await的优缺点是什么？
1. 对比promise写法和await写法
```js
function resolveAfterSecond(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x)
    }, 2000);
  })
}

resolveAfterSecond(10).then((v) => {
  console.log(v);
})


async function testAsync() {
  const result = await resolveAfterSecond(10);
  return result;
}
testAsync().then(v => {
  console.log(v);
})
```
这样看上去好像并没有什么优势，那么什么时候`async await`能展现真正的实力呢？

引用mdn描述：
> async/await的用途是简化使用 promises 异步调用的操作，并对一组 Promises执行某些操作。正如Promises类似于结构化回调，async/await类似于组合生成器和 
> promises。
总结起来：**async/await 的优势在于处理 then调用 链**， `promise`通过`then`来解决多层回调的问题，`async await`可以进一步地优化它。缺点在于`await`可能会导致性能问题，因为`await`会阻塞代码，也许之后的异步代码并不依赖于前者，但仍然要等待前者完成，导致代码失去了并发性。

2. 举个栗子
