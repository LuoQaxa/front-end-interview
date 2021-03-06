// let 和 var的区别
// let 和const的区别

// var hosting提升机制：在全局作用域和函数作用域中，不管是在哪里声明的变量，都会被提升到作用域的顶部

function getValue(condition) {
  if (condition) {
    var value = "blue";
    return value;    
  } else {
    console.log(value);
    return null;
  }
}
getValue()

function getValue(condition) {
  var value;
  if (condition) {
    value = "blue";
    return value;
  } else {
    console.log(value);
    return null;
  }
}

// es6之前js没有块级作用域
// 引入let使js拥有了块级作用域，在作用域外不能访问变量
// 可以在scope中看到当代码运行到let value = "blue"时，会增加一个block{value：undefined}，当代码执行离开此代码块后value立即被销毁

// 禁止重声明
 var count = 30
 let count = 30
// 为什么不能重复声明呢

// 临时死区 temporal dead zone
// js引擎在扫描js代码的发现变量声明时，要么将它提升至作用域顶部（遇到var），要么将声明放在TDZ中（遇到let和const），访问TDZ中的变量会触发运行时错误，只有执行过变量
// 声明，变量才会从TDZ中移出，然后方可正常访问
console.log(typeof value); //undefined
if (true) {
  let value = "blue"
}
// 区别
if (true) {
  console.log(typeof value); //报错
  let value = "blue"
}


var funcs = [];
// 循环中的函数
for (var i = 0; i < 10; i++) {
  funcs.push((function (value) {
    return function () {
      console.log(value)
    }
  })(i))
}
funcs.forEach((func) => func())



// 总结：
// let 和var的区别
// 1. let 声明的变量具有块级作用域，并且变量声明不会提升， 因为js扫描代码会把let const放到tdz中，访问tdz中的变量会报错，这使得相对安全的typeof操作也有可能报错。
// 2. let 不能重复声明
// 3. let const声明的变量不会创建全局属性，也就是不会挂载在window上
// 4. 在循环有块作用域绑定

