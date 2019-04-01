// [1,2]
var arr = [{id: 1, name: 'luo'},{id: 1, name: 'luo'},{id: 2, name: 'luo'}]

// new Set 的去重复，只能去重复基本类型的数组，而如果数组里面有对象
// 1. 如果先遍历一遍找出所有的id
// 2. 再map id去找 数组中的项，再放入数组中
// 总共就需要遍历3次

// 引用类型的数组去重
// 简单的对象直接采用json.stringify来去重
// underscore 的is函数 或者json.stringify

var array = [1, 1, '1', '1'];

function unique(array) {
  // 储存最后unique的数组
  // 添加每一项之前，先去result去查找，是否有相同的元素，如果没有才添加
  // 从数组中找是否有那一个元素，可以使用indexof或者includes
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const convertObj = JSON.stringify(array[i])
    if (result.indexOf(convertObj) === -1) {
      result.push(convertObj)
    }
  
  }
  return result
}

console.log(unique(arr)); // [1, "1"]

// 数组去重的思路可以是双重循环，或者已经排序的数组，比较前后两个元素，new set，还有就是对象类型可以采用json.stringify



