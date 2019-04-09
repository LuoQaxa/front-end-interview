// 实现 add、 delete、 has、 clear、 forEach 方法
// 属性 size
// es6中的类现在只有类里面的静态方法，没有类里面的静态属性，如果需要写静态属性，要写成class.prop = '',在类里面使用也需要class.prop 方式调用
function forOf(data, cb) {
  // 检查是否是可以迭代对象
  console.log('data is', data);
  
  console.log('data[Symbol.iterator] is', data[Symbol.iterator]);
  
  if (data[Symbol.iterator] !== 'function') {
    console.log('error not a iterator');
  }
  // 可迭代对象都有一个Symbol.iterator属性，做个属性是一个生成器函数，函数返回的是一个迭代器
  const iterator = data[Symbol.iterator]();
  let result = iterator.next();
  while (!result.done) {
    // 继续执行
    cb(result.value)
    result = iterator.next();
  }
}

// 创建一个迭代器，返回一个迭代器
var makeIterator = function (array, iterator) {
  var nextIndex = 0;

  // new Set(new Set()) 会调用这里
  var obj = {
    next: function () {
      return nextIndex < array.length ? {
        value: iterator(array[nextIndex++]),
        done: false
      } : {
        value: void 0,
        done: true
      };
    }
  };

  // [...set.keys()] 会调用这里
  obj[Symbol.iterator] = function () {
    return obj
  }

  return obj
}

class Set {
  constructor(data) {
    this.values = [];
    this.size = 0;

    // 初始化的时候也要每个元素执行一遍add操作
    // 可能传入的数据就是一个迭代对象，所以不管是什么都可以使用for of来循环，模拟实现一个for of
    forOf(data, (item) => {
      this.add(item);
    })
    // data && data.forEach((item) => {
    //   this.add(item);
    // })
  }

  // 定义一个唯一的不重复的值，利用Symbol保持唯一

  // 如果有一个值是本身不等于本身的那么类型就是NaN
  encodeValue(value) {
    return value === value ? value : set.NaNSymbol;
  }

  // 取出NaN的时候要将它还原
  decodeValue(value) {
    return value === set.NaNSymbol ? NaN : value;
  }
  
  // add 返回的是set本身, 要让操作人知道是否添加成功
  // 添加的时候对值做一个处理
  add(item) {
    item = this.encodeValue(item);
    if (this.values.indexOf(item) === -1) {
      this.values.push(item);
      ++this.size;
    }
    return this;
  }
  has(item) {
    return this.values.indexOf(this.encodeValue(item)) !== -1;
  }
  // 要让人知道是否有删除成功
  delete(item) {
    const index = this.values.indexOf(this.encodeValue(item));
    if (index !== -1) {
      this.values.splice(index, 1);
      --this.size;
      return true;
    } else {
      return false
    }
  }
  clear() {
    this.values = [];
    this.size = 0;
  }
  forEach(callback, thisArg) {
    thisArg = thisArg || global;
    for (var i = 0; i < this.values.length; i++) {
      callback.call(thisArg, this.decodeValue(this.values[i]), this.decodeValue(this.values[i]), this);
    }
  }
  // 返回一个可迭代对象，这个对象
  keys() {
    return makeIterator(this._values, function (value) {
      return decodeValue(value);
    });
  }
  values() {
    this.keys()
  }

  // keys values entries 
}

Set.NaNSymbol = Symbol('NaN')
const set = new Set([1, 2, 3, 4])
console.log(set.size);
set.add(5)
set.add(5)

console.log(set.size);
console.log(set.has(7));
console.log(set.has(1));
console.log(set.delete(1));
console.log(set.has(1));
set.clear();
console.log(set.size);


// indexOf本质上是用===来判断元素是否存在，对于NaN 来说要单独处理
// 判断存储进来的项是否为NaN，如果是就将它存为Symbol,Symbol能够保证唯一性，在set内部实际上存储的是Symbol('NaN'), Symbol('NaN') === Symbol(NaN)，所以可以做比较
// 
set.add(NaN);
console.log(set.size);
set.add(NaN);
console.log(set.size);
console.log(set.has(NaN)); //true



let set1 = new Set(new Set(1,2,3))