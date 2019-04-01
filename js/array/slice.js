var arr = ['a', 'b', 'c']

// console.log(arr.slice(0, 4));

Array.prototype.slice1 = function (begin, end) {
  let result = [];
  begin = begin || 0;
  end = end || this.length; //如果不传就为数组的长度
  for (let i = begin; i < end; i++) {
    if (this[i]) {
      result.push(this[i])
    }
  }
  return result;
}

console.log(arr.slice1(0, 1));

// 由于slice方法只需要传入的this有length方法，所以可以用这个方法来将伪数组转为数组
Array.prototype.slice.call(arraylike);

// es6
Array.from(arraylike)