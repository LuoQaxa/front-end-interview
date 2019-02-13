const arr = [34, 4, 534, 2];
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp;
      }
    }
    console.log('i is',i, arr);
    
     
  }
  return arr;
}
console.log(bubbleSort(arr));

// 第一层循环： 遍历数组的每一项，需遍历length - 1轮，每一轮结束即一次冒泡的过程，可以确定一个元素的位置
// 第二层循环： 每一项与其他项进行比较
