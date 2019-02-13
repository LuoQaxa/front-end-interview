1. how this works in js ?
  this的作用是能够改变函数的上下文，在方法调用时决定哪个对象是焦点。
  1.查看函数在哪被调用。
  2.点左侧有没有对象？如果有，它就是 “this” 的引用。如果没有，继续第 3 步。
  3.该函数是不是用 “call”、“apply” 或者 “bind” 调用的？如果是，它会显式地指明 “this” 的引用。如果不是，继续第 4 步。
  4.该函数是不是用 “new” 调用的？如果是，“this” 指向的就是 JavaScript 解释器新创建的对象。如果不是，继续第 5 步。
  5.是否在“严格模式”下？如果是，“this” 就是 undefined，如果不是，继续第 6 步。
  6.JavaScript 很奇怪，“this” 会指向 “window” 对象。
  7.在箭头函数中使用：箭头函数在自己的作用域内不绑定this，如果要使用this，会指向定义时所在的作用域的this值

2. how prototype inheritance works
3. what's the difference between a variable that is: null, undefined, or undeclared ?
4. 