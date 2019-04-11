// 原型链继承：纯的利用原型继承方法和属性
function Parent() {
  this.name = 'kevin'
}
Parent.prototype.getName = function () {
  return this.name
}

function Child() {
  
}

Child.prototype.sayAge = function () {
  console.log('i am age');
  
}

// 区别在于new Parent会执行一次Parent的构造函数
// Child.prototype.__proto__ = Parent.prototype
Child.prototype = new Parent()


const c = new Child()
console.log(c.name);
console.log(c.getName());
// c.sayAge()

// 1. 因为访问c.name name属性实际上是原型上的属性，所以存在属性实例共享的问题，也就是不管属性还是方法都被放在了原型上继承
// 2. 不能在实例c的时候传参



// 构造函数继承： 纯的利用构造函数继承属性和方法
function Parent() {
  this.name = 'kevin'
  this.getName = function () {
    return this.name
  }
}

function Child() {
  Parent.call(this)
}

// 1. 每个实例都有一个函数定义



// 组合继承
function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child(name, age) {

  Parent.call(this, name);

  this.age = age;

}
// 子类的原型上就不能定义方法，什么方式可以解决这个问题
// Child.prototype.sayAge = function () {
//   console.log('sayage'); 
// }

// 原型继承的关键在于
Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child1 = new Child('kevin', '18');


// 原型式继承
// 传入的对象做为创建对象的原型，也就是继承了这个传入的对象

// 返回的新对象的__proto属性要指向o, 这样就可以拿到o上的属性和方法，那么实现就是将创建这个新对象的构造函数.prototype = o
// 这样返回的新对象的__proto__就指向了o，就拥有了o上的方法和属性
// 只要是原型上的继承都会涉及到引用共享的问题
function createObj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

var person = {
  name: 'kevin',
  friends: ['daisy', 'kelly']
}

var person1 = createObj(person);
var person2 = createObj(person);

person1.name = 'person1';
console.log(person2.name); // kevin

person1.firends.push('taylor');
console.log(person2.friends); // ["daisy", "kelly", "taylor"] 



// 创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。
function createObj(o) {
  var clone = Object.create(o);
  clone.sayName = function () {
    console.log('hi');
  }
  return clone;
}



// TODO: child原型上的方法会被父类的覆盖
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function prototype(child, parent) {
  var prototype = object(parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}

function Parent() {
  this.name = 'kevin'
}
Parent.prototype.getName = function () {
  return this.name
}

function Child() {
  Parent.call(this)
}
// 当我们使用的时候：
prototype(Child, Parent);