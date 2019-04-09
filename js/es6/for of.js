// 可迭代对象：具有Symbol.iterator属性的对象
// 生成器生成的迭代器都有这个属性

let values = [1,2,3]

for (let num of values) {
  console.log(num);
}

// for of背后的原理

const obj = {
  value: 1
}

// Symbol.iterator是一个function，并且函数返回的是迭代器或者函数是一个生成器
obj[Symbol.iterator] = function *() {
  yield 1;
  yield 2;
}
for (let item of obj) {
  console.log(item);
  
}

// 模拟实现for of, 原理是运行
function forOf(obj, cb) {
  if (typeof obj[Symbol.iterator] !== "function")
    throw new TypeError(result + " is not iterable");
  if (typeof cb !== "function") throw new TypeError("cb must be callable");

  // 不断的调用next
  let iterator = obj[Symbol.iterator]();
  let result = iterator.next();
  while (!result.done) {
    cb(result.value);
    result = iterator.next();
  }
}
forOf(obj, console.log)


var colors = ["red", "green", "blue"];
for (let entry of colors.entries()) {
  console.log(entry)
}