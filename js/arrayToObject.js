var arr = [{id: 1, name: 'luoqian'}, {id: 2, name: 'zhangruqian'}]
// 如果转换这个obj为需要的数组，我也想了那么好久
var obj = {
  "choices": [{
    "id": 1,
    "name": "单项选择题"
  }, {
    "id": 2,
    "name": "多项选择题"
  }],
  "blanks": [{
    "id": 20,
    "name": "单项填空题"
  }],
  "yes_no": [{
    "id": 6,
    "name": "判断题"
  }],
  "others": [{
    "id": 10,
    "name": "Python操作题"
  }, {
    "id": 11,
    "name": "kitten创作题"
  }]
}
// {
//   1: 'dsd'
// }

// var obj  = {}
// arr.forEach(item => {
//   obj[item['id']] = item['name']
// })
// console.log(obj);
// // 就算传入的是数子，取的时候对象也会转为字符串
// console.log(obj[1]);


const result = arr.reduce((prev, next) => prev[next['id']] = next['name'], {})
console.log(result);
console.log(arr);


const RAWCATAGORY = {
  choices: [1, 2],
  blanks: [20, 21],
  others: [10, 11],
  yes_no: [6]
}

//  const judgeCategory = (type, id) => {
//    console.log(RAWCATAGORY[type]);
//    console.log(id in RAWCATAGORY[type]);
   
//    const result = id in RAWCATAGORY[type];
//    return result
//  }
const judgeCategory = (type, id) => {
  console.log(RAWCATAGORY[type]);
  console.log(id in RAWCATAGORY[type]);

  // const result = id in RAWCATAGORY[type];
  return id in RAWCATAGORY[type]
}

 console.log(judgeCategory('choices', 1));
 

