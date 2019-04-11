// 讨论class的继承

// es5 寄生组合继承
function Person(name) {
  this.name = name 
}

Person.prototype.sayHello = function () {
  console.log('hello, my name is', this.name);
}


function Child(name, age) {
  this.age = age

  // 继承实例属性
  Person.call(this, name);
}

Child.prototype.sayAge = function () {
  console.log('hello, my age is', this.age);
}



// 以Parent.prototype为原型创建一个对象
// TODO: 这样的话child原型上的方法就被覆盖，那如何保持子类原型上的方法呢
// TODO: 实现自己的继承函数
// Child.prototype = Object.create(Person.prototype);
Child.prototype = Person.prototype;

const c = new Child('luoqian', 24)
c.sayHello();


// 两个函数如何实现继承



// 父类的静态方法可以被子类继承
class Foo {
  static classMethod() {
    return 'hello';
  }
}

class Bar extends Foo {}

Bar.classMethod(); // 'hello'
// 为什么能够继承父类的静态方法呢


// Object.setPrototypeOf(Child, Parent)




//  babel编译
// super(this) babel编译

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

// o是Child的实例，获取原型对象o的原型对象就是Child.__proto__
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}


_this = _possibleConstructorReturn(this, _getPrototypeOf(Child).call(this, name)); // 调用父类的 constructor(name)