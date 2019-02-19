// 1. 工厂模式
function createPerson(name) {
  var o = new Object()
  o.name = name;
  o.getName = function () {
    console.log(this.name);
  }  
  return o
}

var person1 = createPerson('kevin')
// 对象无法识别，因为所有的实例都指向一个原型

// 2. 构造函数模式
function Person(name) {
  this.name = name
  this.getName = function () {
    console.log(this.name);
  }
}

var person2 = new Person('kevin')
// 每次创建实例时，每个方法都要被创建一次


// 3. 动态原型模式
function Person(name) {
  this.name = name
  if (typeof this.getName != "function") {
    Person.prototype.getName = function () {
      console.log(this.name);
    }
  }
}
// 这种模式下Person.prototype不能直接写为对象字面量形式。
// new 操作符的执行过程
// 1. 创建一个空对象
// 2. 这个对象的__proto__指向构造函数.prototype
// 3. 执行Person.apply(obj) 执行Person构造函数
// 4. 返回这个对象


// 4. 寄生构造函数模式

