1. js中的this?
  this的作用是能够改变函数的上下文，在方法调用时决定哪个对象是焦点。
  1.查看函数在哪被调用。
  2.点左侧有没有对象？如果有，它就是 “this” 的引用。如果没有，继续第 3 步。
  3.该函数是不是用 “call”、“apply” 或者 “bind” 调用的？如果是，它会显式地指明 “this” 的引用。如果不是，继续第 4 步。
  4.该函数是不是用 “new” 调用的？如果是，“this” 指向的就是 JavaScript 解释器新创建的对象。如果不是，继续第 5 步。
  5.是否在“严格模式”下？如果是，“this” 就是 undefined，如果不是，继续第 6 步。
  6.JavaScript 很奇怪，“this” 会指向 “window” 对象。
  7.在箭头函数中使用：箭头函数在自己的作用域内不绑定this，如果要使用this，会指向定义时所在的作用域的this值

2. js中的原型链？
   
3. js中如何实现继承？
4. 闭包理解
  
**对象相关**
5. What's the difference between host objects宿主对象 and native objects内置对象? 
![类型关系](https://img-blog.csdn.net/20130624221901250?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZm9hbWZsb3dlcg==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)
6. 创建对象的多种方式和优缺点

**数组相关**
7. forEach 与 map的区别: forEach 返回值为undefined，map返回为新数组，原数组不改变。

8. JavaScript 中，定义函数时用 var foo = function () {} 和 function foo() 有什么区别？

9. Explain "hoisting"
10. call 和 apply模拟实现
11. bind的模拟实现
12. new的模拟实现
  
13. 谈谈变量提升
14. 怎么判断对象类型
Object.prototype.toString().call(func) [Object, Function] 

15. 对象字面量创建和new Object创建的区别是什么?
16. 垃圾回收
17. 浏览器中的eventloop和node中的有什么区别？
18. ['1','2','3'].map(parseInt)
19. 将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数据
20. 节流和防抖