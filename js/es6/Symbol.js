// 5种数据类型： string number boolean null undefined

// Symbol的作用： 起初创建对象的私有成员

// 创建symbol
let firstName = Symbol();
let person = {}

person[firstName] = "nicholas"

console.log(person[firstName]);


// symbol.for 全局注册表
let uid = Symbol.for('uid');
let object = {}

object[uid] = '12345';

console.log(object[uid]);

// 第二次调用直接从Symbol的全局注册表中检索到这个symbol
let uid2 = Symbol.for('uid');
console.log('uid === uid2 is', uid === uid2);


// es6通过在原型链上定义与symbol相关的熟悉来暴露更多的语言内部逻辑，通过预定义一些well known symbol来表示


/* Symbol.hasInstance **/
Symbol.hasInstance
// 每个函数都有Symbol.hasInstance方法
// Symbol.hasInstance被定义在Function prototype上
console.log(Object.getOwnPropertySymbols(Function.prototype)); //[Symbol(Symbol.hasInstance)]

obj instanceof Array;
// 等价于 instanceof本质上是这个方法的简写
Array[Symbol.hasInstance](obj)

// 可改变instanceof的运行方式
function MyObject() {
  
}

Object.defineProperty(MyObject, Symbol.hasInstance, {
  value: function (v) {
    return false
  }
})

let obj = new MyObject();
console.log('obj instanceof MyObject is', obj instanceof MyObject);

/* Symbol.isConcatSpreadable **/
let arr1 = ['mike', 'john']
let arr2 = arr1.concat(['june'], 'effort')

// concat内部会对数组参数自动分解为独立元素，是通过Symbol.isConcatSpreadable属性来控制的

let collection = {
  0: 'hello',
  1: 'world',
  length: 2,
  [Symbol.isConcatSpreadable]: true //如果为true会自动展开，如果为false将整体做为一个对象
}

let message = ['hi'].concat(collection)
console.log(message.length);
console.log(message);




// 总结： Symbol定义的属性难以被意外覆盖，Object.keys 和 Object.getOwnProperty都不能访问，只能通过Object.getOwnPropertySymbols访问
// well known symbol开发者可以Object.defineProperty改变它们



