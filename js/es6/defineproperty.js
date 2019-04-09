var obj = {
  value: 1
}

// 如何知道obj发生了变化

// es5
// 属性描述符包括数据描述符和存取描述符，但是不能一起设置两种类型的操作符
Object.defineProperty(obj, 'num', {
  value: 1,
  writable: true,
  enumerable: true,
  configurable: true
})
Object.defineProperty(obj, 'num', {
  get() {
    return value
  },
  set(newValue) {
    value = newValue
  }
})



function Archiver() {
  var archive = [];
  // 代理实例上的num属性
  Object.defineProperty(this, 'num', {
    get: function () {
      console.log('执行了 get 操作')
      return null;
    },
    set: function (value) {
      console.log('执行了 set 操作')
      value = value;
      archive.push({
        val: value
      });
    }
  })
  this.getArchive = function () {
    return archive;
  };
}
// Archiver.prototype.getArchive = function () {
//   console.log(this.archive);
//   return this.archive
// }

// 监控数据的改变
var arc = new Archiver();
arc.num
arc.num = 11
arc.num = 13
console.log(arc.getArchive()); //[{value: 11}, {value: 13}]



// var obj = {
//   num: 1
// }

// // 多一个变量来存储旧值
// var num = 1

// Object.defineProperty(obj, 'num', {
//   get: function () {
//     console.log('执行了 get 操作')
//     return num;
//   },
//   set: function (newValue) {
//     console.log('执行了 set 操作')
//     num = newValue;
//     document.getElementById('container').innerHTML = newValue;
//   }
// })

// // 只需要更改这个对象的值，而不需要直接操作dom，其实内部也是操作dom的
// document.getElementById('button').addEventListener("click", function() {
//   obj.num += 1;
// });

// 如果需要监听多个值就需要一个个去defineproperty和定义一个变量来存储旧值，这样就很麻烦，定义一个watch函数
var obj = {
  value: 1
}

watch(obj, "value", function (newvalue) {
  document.getElementById('container').innerHTML = newvalue;
})

document.getElementById('button').addEventListener("click", function () {
  obj.value += 1
});

// 监听对象的某一个属性，属性变化执行回调
(function () {
  var root = this;

  function watch(obj, name, func) {
    var value = obj[name];

    Object.defineProperty(obj, name, {
      get: function () {
        return value;
      },
      set: function (newValue) {
        value = newValue;
        func(value)
      }
    });

    if (value) obj[name] = value
  }

  this.watch = watch;
})()