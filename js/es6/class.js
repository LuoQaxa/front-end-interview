// 对class的理解还不够深入，当在class中写方法时脑海中还没有和js的语言特性联系起来，还是需要更深入的理解

// 比如在react的处理中在对函数组件和类组件区分的时候就是用了是否是原型上有对应的方法

// es6
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return 'hello, I am ' + this.name;
  }
}
var kevin = new Person('Kevin');
kevin.sayHello(); // hello, I am Kevin

// 特点
// 1. 实例属性 以前只能在con中，而现在有提案在类上 
// 2. 静态属性 不是在实例上的，而是在类上的 Person.prop = 'hhh' 或者类中 static prop = 'hhh'
// 3. 静态方法 也是类上的方法 写法为 static func() {}


// es5
function Person(name) {
  this.name = name;
  this.foo = 'foo'
}
Person.bar = 'bar';


Person.prototype.sayHello = function () {
  return 'hello, I am ' + this.name;
}

// 总结：类上定义的函数就是在构造函数的原型上的方法，constructor上的实例属性就是构造函数中的属性
// 区别：es6类中的方法是不可枚举的no-enumerable

// 在react中子类初始化实例的时候如果不写super，还是会调用父类的constructor方法，而写super的作用是在子类的constructor中拿到this




// babel 编译分析
class Person {
  constructor(name) {
    this.name = name;
  }
}

// 编译后
"use strict";

function _instanceof(left, right) {
  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
    return right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

// 如果直接调用Person类: instance: window, Constructor: Person
function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Person = function Person(name) {
  _classCallCheck(this, Person);

  this.name = name;
};


