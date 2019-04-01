// iterator 有什么作用呢？为什么需要这个可迭代对象，减少多层循环的复杂度
// 迭代器的定义：每一个迭代器对象都有一个next的方法，每次调用都会返回一个结果对象

function createIterator(items) {
  let i = 0;
  return {
    next: () => {
      // 其实内部不用判断了，直接返回值就ok了
      let done = i < items.length ? false : true;
      let value = items[i++] || undefined;
      
      return { done, value }
    }
  }
}
// ++i 先+，后执行
// i++ 先执行，后+

let iterator = createIterator([1,2,3]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

 //{ done: false, value: 1}


//  生成器 是一种返回迭代器的函数，这样就不用自己手写生成迭代器的函数
function *createIterator1() {
  yield 1;
  yield 2;
  yield 3;
}

let iterator1 = createIterator1();
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());


