// 闭包是指那些能够访问自由变量的函数
// 自由变量：在函数中使用的，但既不是函数参数也不是函数的局部变量的变量

// 闭包 = 函数 + 函数能够访问的自由变量
// 从技术角度：所有函数都是闭包
var a = 1; 

function foo() {
  console.log(a);
}

foo()

// 从实践角度
// 1. 即使创建它的上下文已经销毁，它仍然存在
// 2. 在代码中引用了自由变量

var scope = "global scope";

function checkscope() {
  var scope = "local scope";

  function f() {
    return scope;
  }
  return f;
}

var foo = checkscope();
foo();


// 作用域，这个是编程语言中都会涉及的，作用域是指程序源代码中定义变量的区域，它规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。
// js 采用词法作用域 lexical scoping 静态作用域
// 第一段
var scope = "global scope";

function checkscope() {
  var scope = "local scope";

  function f() {
    return scope;
  }
  return f();
}
checkscope();
// [checkscope]
// [checkscope, f]
// [checkscope]
// [f]


// 第二段
var scope = "global scope";

function checkscope() {
  var scope = "local scope";

  function f() {
    return scope;
  }
  return f;
}
checkscope()();

// [checkscope]
// []
// [f]
// []

// js函数的执行用到了作用域链，这个作用域链是在函数定义的时候创建的，嵌套的函数f()定义在这个作用域炼7里，其中scope一定是局部变量


// js引擎并非一行一行地分析和执行，而是一段一段的分析执行，当执行一段代码的时候，会进行一个 准备工作， 比如变量提升，函数提升
// 那么这一段一段是如何划分的呢？ 这个准备工作是什么呢？
// 这个准备工作就是 执行上下文 execution context

// 执行上下文栈 execution context stack ecs 来管理执行上下文栈ECStack

// 1. 全局代码： 执行上下文栈中压入全局上下文
// 2. 函数执行： 压入执行栈中，执行完后推出，pop

ECStack = [
  globalContext
]


// 执行上下文包含了哪些内容
// 变量对象: 是与执行上下文相关的数据作用域，存储在上下文中定义的变量和函数声明
{
  variable-object,
  scope-chain,
  this
}
// 全局上下文中的变量对象就是全局对象
// 函数上下文中 activation object AO 表示变量对象 活动对象是在进入函数上下文时刻被创建的，

AO = {
  arguments: {
    0: 1,
    length: 1
  },
  a: 1,
  b: undefined
}
