// 4. 如何实现继承？
// 对象字面量的方式创建对象，实现继承
const parent = {
  name: 'parent',
  age: '23',
  log: function () {
    console.log(this.name);
  }
};

// 如何让child也具有log属性，可以继承父级对象
// 对象有一个__proto__的属性，在对象在调用属性的时候，会在本身的属性上查找，如果没有就找__proto__上找
const child = {
  name: 'child'
}
child.__proto__ = parent;


// 构造函数方式创建对象
function ParentFactory(name) {
  this.name = name;
  this.log = function () {
    console.log(this.name);
  }
}
const parent1 = new ParentFactory();
const child = {};
child.__proto__ = parent1;


function Parent() {
  this.name ='kevin'
}

// 想要被继承或者实例都拥有属性放到prototype上
Parent.prototype.getName = function () {
  console.log(this.name);
}

// 让所有的Child创建的实例都要继承Parent.prototype上的方法
function Child() {
  
}

Child.prototype = new Parent();
// 为什么不直接Child.prototype = Parent.prototype 直接将Child.prototype 指向 Parent.prototype，这样的问题是constructor发生变化了
// Child的constructor === Parent
// 只能继承原型上的属性，不能继承父级的实例属性

var child1 = new Child();

console.log(child1.getName());


// 问题：引用类型的属性被所有实例共享
// 因为new Parent 只被调用了一次赋值给了Child.prototype对象，这个对象的属性是所有的Child实例共有的
function Parent() {
  this.names = ['kevin', 'daisy'];
}

function Child() {

}

Child.prototype = new Parent();

var child1 = new Child();

child1.names.push('yayu');

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy", "yayu"]

// 解决方法就是要在每次创建child实例的时候，都创建一个新的引用
// 在Child的构造函数中将父级中的实例属性拷贝到新的实例里面
// 借用构造函数
function Parent() {
  this.names = ['kevin', 'daisy'];
}

function Child() {
  Parent.call(this);
}

var child1 = new Child();

child1.names.push('yayu');

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy"]

// 问题：在每次实例中都要创建一次方法

// 组合继承
function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

// 属性的继承采用构造函数中Parent.call的方式，方法的继承采用prototype的方式
function Child(name, age) {

  Parent.call(this, name);

  this.age = age;

}

Child.prototype = new Parent();

var child1 = new Child('kevin', '18');

child1.colors.push('black');

console.log(child1.name); // kevin
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]

var child2 = new Child('daisy', '20');

console.log(child2.name); // daisy
console.log(child2.age); // 20
console.log(child2.colors); // ["red", "blue", "green"]


// 原型继承

// Object.create 的模拟实现
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


// 如果就给出了一个对象，叫你继承这个对象，没有给你构造函数如果继承
var person = {
  name: 'kevin',
  friends: ['daisy', 'kelly']
}
function Child() {

}
Child.prototype = person;
var child = new Child();


function createObj(parent) {
  function Child() {};
  Child.prototype = parent;
  return new Child();
}

// 寄生
// 组合继承问题：
// 调用两次Parent的构造函数

function Parent(name) {
  this.name = name;
  this.colors = ['red','green','blue']
}
Parent.prototype.getName = function () {
  console.log(this.name);  
}

function Child() {
  // 这次解决了引用类型的属性，可以在每个child实例中
  // 但是重复存储了属性
  Person.call(this);  
}

// 这样就少去再次执行一个构造函数，将属性重复的挂在prototype上
function F() {}
F.prototype = Parent.prototype;
new F();

// 这里就不需要构造函数中的属性了，只需要 一个对象的 __proto__  指向的是Parent.prototype就可以了
Child.prototype = new Parent()

const child = new Child();



// 封装继承方法
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

// 最佳的是寄生组合式继承
// Parent Child
function prototype(child, parent) {
  var prototype = object(parent);
  prototype.constructor = child;
  child.prototype = prototype;
}



