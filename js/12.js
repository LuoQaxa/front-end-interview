// 3. Person.call()
function Person(name) {
  console.log('Person constructor run');
  this.name = name;
}

// 2. 实例的原型指向 Person.prototype
Person.prototype.prototype.getName = function () {
  console.log('this.name is', name);
}

// 4. return object
const person1 = new Person('luoqian');

