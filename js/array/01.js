
const arr = [1,2,3,4,5]
Array.prototype.multiply = function () {
  return this.concat(this.map(item => item * item))
}
const list = arr.multiply(); //[1,2,3,4,5,1,4,9,16,25]

console.log(list);


// 打乱数组的元素的顺序，并计算前3个元素的值
const arr1 = [1, 2, 3, 4, 5];
arr1.sort((a,b) => Math.random() - 0.5)
const result1 = arr1.slice(0,3).reduce((prev, next) => prev + next, 0)
console.log(arr1);
console.log(result1);


// 生成长度为15的数组，每个元素的值在100以内（不要用for循环）
Array.from(new Array(15), item => parseInt(Math.random() * 100 + 1), 10)





