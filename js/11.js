// 3. 模拟实现bind
// bind：创建一个新的函数，当这个函数被调用时，bind的第一个参数作为运行时的this
var foo = {
  value: 1
}

function bar(name, age) {
  this.name = name;
  this.age = age;
  console.log(this.value, this.name, this.age);
}

Function.prototype.bind2 = function (context) {
  context = context || window;
  context.fn = this;
  // 处理参数
  let args = []
  for (var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  // delete context.fn;
  // 在bind的时候存储一部分参数

  return () => {
    // 在实际调用的时候在将先前存储的参数组合起来
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    context.fn(...args);
    delete context.fn;
  };
}
const bindResult = bar.bind(foo, 'lidezhen');
bindResult(49);

// 难点：一个绑定函数也能使用new操作符创建对象，这种行为就像把原函数当成构造器。提供的this值被忽略，同时调用时的参数被提供给模拟函数

