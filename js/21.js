// 浅拷贝和深拷贝

// 浅拷贝，只是复制存在栈中的，对象类型的指针，该指针还是指向堆内存中的同一个对象，还是同一块内存空间
// 深拷贝

// 浅拷贝和赋值的区别
const obj = {
  a: 1,
  b: 2,
  c: [1,2,3]
}

// const obj1 = obj;
// obj1.a = 2;
// console.log(obj, obj1);


// function shadowCopy(obj) {
//   let result = {};
//   for (let item in obj) {
//     if (obj.hasOwnProperty(item)) {
//       result[item] = obj[item]
//     }
//   }
//   return result
// }

// const obj2 = shadowCopy(obj);
// obj2.a = 2;
// obj2.c[0] = 3
// console.log(obj, obj2);

const testObjCopy = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    f: 4
  }
}

function checkType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

function deepCopy(target) {
  let result, type = checkType(target);
  if (type === 'Array') {
    result = []
  }
  if (type === 'Object') {
    result = {}
  } else {
    return target
  }
  for (let i in target) {
    let value = target[i];
    if (checkType(value) === 'Array' || checkType(value) === 'Object') {
      result[i] = deepCopy(value)
    } else {
      result[i] = target[i]
    }
  }
  return result
}

const obj1 = deepCopy(obj);
console.log(obj1);
