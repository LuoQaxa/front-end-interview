// set 是一种有序列表，其中含有一些相互独立的非重复值，通过set集合可以快速访问其中的数据，更有效地追踪各种离散值

let set = new Set();
set.add(5)
set.add('5')

console.log(set.size);

set.add(6);

console.log(set.has(5));

set.delete(5);

console.log(set.has(5));

set.clear()
console.log(set.size);

// set 对比对象，set中的值更独立，也不会有隐士的类型转换，对象会把所有的属性都转为字符串

