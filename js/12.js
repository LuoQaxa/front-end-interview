// 3. Person.call()
function Person(name) {
  console.log('Person constructor run');
  this.name = name;
}

// 2. 实例的原型指向 Person.prototype
Person.prototype.getName = function () {
  console.log('this.name is', this.name);
}

// 4. return object
const person1 = new Person('luoqian');
console.log(person1.name);
person1.getName()

// 传入
function myNew(Constructor, ...args) {
  let obj = {};
  Constructor.apply(obj, args);
  obj.__proto__ = Constructor.prototype;
  return obj
}

const person2 = myNew(Person, 'zhangruqian');
console.log(person2);
console.log(person2.name);
person2.getName()

// 对象创建
// 1. let obj = {}, 
// 2. Object.create(),
// 3. new Object
// 这三种的区别,Object.create(obj || null), 传入一个对象，新创建的对象会继承这个对象，如果传入null，顶上就没有prototype可找了
let obj = Object.create()
obj.__proto__ = {name: 'luoqian'}
// 如果这样设置__proto__会被当成一个obj的一个属性值，而不是去修改了原型，在console中打印出来是实的，如果是原型指向是虚的

// __proto__ 不能说是一个属性，它来自于Object.prototype，可以说是一个getter/setter.
// obj.__proto 等同于 Object.getPrototypeOf(obj)

