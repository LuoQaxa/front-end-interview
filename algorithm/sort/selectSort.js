const arr = [34, 4, 534, 2];
function selectSort(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    
    for(let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    console.log('i is', i, arr);
  }
  return arr;
}

console.log(selectSort(arr));
