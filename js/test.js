let obj = { a: {b: 1, c: 3, d: { e: 4 }}, c: 2}
let arr = [[1], 2]

function walk(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof(obj[key]) === 'object') {
      arr.push(walk(obj[key]));
    } else {
      arr.push(obj[key])
    }
  }
  return arr
}


console.log(walk(obj));


['1','2','3'].map(console.log)
// arr.map((currentValue, index, currentArr))
parseInt('1', 0)