
const arr = [[3,2,22,1],[1,3,45,8,16,[30,12]],10]


// Array.from(new Set(arr.flat())).sort((a,b) => a - b)
Array.from(new Set(arr.flat(Infinity))).sort((a, b) => {
  return a - b
})

console.log(arr);

function flat(arr) {
  // 其实也是一个递归遍历
  
}


// 数组的操作
// 参考： http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84-flat%EF%BC%8CflatMap


// 1. 扩展运算符，常用在不定参数，后面还可以放置表达式, 除此之外数组的参数不再需要apply方法转为函数参数
// const arr = [
//   ...(x > 0 ? ['a'] : []),
//   'b'
// ]

function foo(...items) {
  console.log(...items)
}

foo(4,5)

// 1. Array.from： 将类数组对象转为数组

// 2. Array.of:

// 3. Array.flat: 








