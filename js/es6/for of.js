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

// Symbol.iterator是一个function，并且函数返回的是
obj[Symbol.iterator] = function name(params) {
  
}