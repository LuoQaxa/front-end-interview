var arr = [1,3,2]

console.log(arr.sort());

// sort语言内置都是快速排序算法,为了方便用选择排序法，每次选择数组中剩下元素的最小的一个


Array.prototype.sort = function (fn) {
  fn = fn || ((a, b) => a - b);
  let roundCount = this.length - 1 // 比较的轮数
  for (let i = 0; i < roundCount; i++) {
    let minIndex = this[i]
    for (let k = i + 1; k < this.length; k++) {
      if (fn.call(null, this[k], this[i]) < 0) {
        [this[i], this[k]] = [this[k], this[i]]
      }
    }
  }
}


Array.prototype.sort = function (fn) {
  fn = fn || ((a, b) => a - b);
  let roundCount = this.length - 1 // 比较的轮数
  for (let i = 0; i < roundCount; i++) {
    // 假设最小的一个就是每次循环的第一个
    let min = this[i]
    // 继续循环每次循环的后面的元素
    for (let k = i + 1; k < this.length; k++) {
      if (fn.call(null, this[k], this[i]) < 0) {
        [this[i], this[k]] = [this[k], this[i]]
      }
    }
  }
}
