// call
var arr = [1,2,3]
// Math.max.call(null, 1,2,3)
// Math.max.apply(null, arr)
// window.Math.max(arr);

// 1. 模拟实现call
// 不定参数，所以可以不显示的写名参数
// 需要返回执行的结果
// context 为null时，默认为window
var foo = {
  value: 1
}

function bar(name, age) {
  this.name = name;
  this.age = age;
  console.log(this.value, this.name, this.age);
}
// foo本身没有bar方法，利用call方法
// bar.call(foo, 'luoqian', 23); ->  foo.bar()

Function.prototype.call2 = function (context) {
  context = context || window;
  context.fn = this;
  // 处理参数
  let args = []
  for(var i = 1; i < arguments.length; i++ ){
    args.push(arguments[i]);
  }
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

// bar.call2(foo, 'luoqian' ,23);


// 2. 模拟实现apply
Function.prototype.apply2 = function (context, arr) {
  context = context || window;
  context.fn = this;
  // 处理参数
  let args = []
  for (var i = 0; i < arr.length; i++) {
    args.push(arr[i]);
  }
  const result = context.fn(...args);
  delete context.fn;
  return result;
}
// bar.apply2(foo, ['apple', 22]);


// 我的实现call和apply，采取es6的，区别在于arguments
// 1. 改变执行时候的this
// bar.call(foo, 'lidezhen', 48);
Function.prototype.call1 = function (obj, ...args) {
  // 其实就是用bar来 bar foo上面要是添加了bar方法就OK了
  // 那就是直接foo.bar()的调用 再传参了
  let context = obj || window;
  context.fn = this;

  context.fn(...args);

  delete context.fn;
}

bar.call1(foo, 'lidezhen', 48);

Function.prototype.apply1 = function (obj, args) {
  // 其实就是用bar来 bar foo上面要是添加了bar方法就OK了
  // 那就是直接foo.bar()的调用 再传参了
  let context = obj || window;
  context.fn = this;

  context.fn(...args);

  delete context.fn;
}

bar.apply1(foo, ['lidezhen', 48]);