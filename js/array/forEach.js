// 模拟实现forEach,
// 1. 跳过空值
// 2. this
// 3. 遍历的范围在第一次调用 callback 前就会确定，调用 forEach 后添加到数组中的项不会被 callback 访问到

// if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArgs) {
    const l = this.length;
    for (let i = 0; i < l; i++) {
      if (this[i]) {
        thisArgs ? callback.call(thisArgs, this[i], i) : callback(this[i], i);
      }
    }
  }
// }

// 测试1
const arr = [1,2,3]
arr.forEach(item => {
  console.log(item);
});

// 测试2
function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function (arr) {
  arr.forEach(function (item) {
    this.sum += item;
    this.count++;
  }, this)
}

var obj = new Counter()
obj.add([1,2,3])
console.log('obj.sum is', obj.sum, 'obj.count, ', obj.count);

// // 测试3
var a = [1, 2, 3, 1, 2, 3];
a.forEach((item, index) => {
  console.log(index, item);
  if (item === 1) {
    a.splice(index, 1);
  }
});

console.log('测试4');

// // 测试4
var a = [1, 2, 3, 1, 2, 3];
a.forEach((item, index) => {
  console.log(index, item);
  if (item === 1) {
    a.push(4);
  }
});



