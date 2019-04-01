var arr = ['a', 'b', 'c']
Array.prototype.join1 = function (char) {
  // this拿到需要操作的数组，然后遍历这个数组，将他们连接起来
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      result += this[i] + char
    } else {
      result += this[i]
    }
  }
  return result;
}

Array.prototype.join2 = function (char) {
  let result = this[0] || '';
  let length = this.length;
  for (let i = 1; i < length; i++) {
    result += char + this[i]
  }
  return result
}

arr.join1('-');
console.log(arr.join1('-'));
console.log(arr.join2('-'));
