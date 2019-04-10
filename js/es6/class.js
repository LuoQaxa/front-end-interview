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


// es5
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  return 'hello, I am ' + this.name;
}

// 总结：类上定义的函数就是在构造函数的原型上的方法，constructor上的实例属性就是构造函数中的属性
// 区别：es6类中的方法是不可枚举的no-enumerable
