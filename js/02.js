// 1. 为什么需要原型和原型链？
// 因为js虽然是一个面向对象的语言，但是它没有类的概念，js靠的是原型和原型链来实现属性的继承

// tips：基本数据类型
// null undefined number string symbol boolean
// object Array Date Function

// 2. 每一个对象object，都有一个__proto__属性，这个属性其实就是对其他对象的引用

// 3. 每个函数都有一个prototype属性和constructor属性，既然函数也是对象，那么函数也有__proto__的属性

// 工作原理只要搞清楚一张图就可以完全理解原型链
// https://juejin.im/post/5bc755b15188255c89015f39#comment

const obj = new Object();
// 对象实例，有哪些原型上的属性
// constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocalString toString valueOf __proto__ 
// 那么这些属性是从哪里来的呢 obj.__proto__ === Object.prototype 在这个对象上有这些属性

// 对于构造函数来说
function Person() {

}
const person = new Person();

// Person 构造器
// 函数为啥拥有对象的属性，函数也是对象，这么说的原因是，Person.__proto__ === Function.prototype, Function.prototype.__proto === Object.prototype
// Object.prototype.__proto__ === null
// 除此之外还有 构造函数的属性 arguments caller length name apply bind call 


// js 的其他构造器
// 拥有其他的属性



// 我的答案： js中没有class的概念，所以用原型来实现类的功能，比如继承等。 在js中的基本数据类型有6种，和对象类型。每一个对象上都有一个__proto__属性，每一个函数，函数也是
// 对象除了__proto__属性外还有一个prototype属性。当访问某个对象的属性时，会先在对象自身的属性中查找，如果没有找到会沿着原型链，也就是__proto__属性指向的对象查找。指向
// 的对象就是对象的构造函数的prototype。
// 一个普通对象上有一些hasOwnProperty等属性，就是因为Object.prototype上包含这些属性，Object.prototype.__proto__ === null。 所以说null是原型链的顶端。
// 一个构造函数对象，如自定义的构造函数，还有js内置的如Number， Date等构造器 它们的原型属性都是Function.prototype。 Number.__proto__ = Function.prototype。
// Function.prototype对象上拥有call apply bind等方法，因此所有的构造器都拥有这些方法。

