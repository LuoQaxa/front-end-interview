// this 有什么用？为什么需要this？
const name = 'clever code';
const person = {
  name: 'foo coder',
  hello: function(sth) {
    // console.log(person.name + "says" + sth );
    // 这里也可以使用person.name来实现，但是就没有办法复用这个函数
    console.log(this.name + " says " + sth);
  }
}
// person.hello('hello world');

// 改变this的指向，复用函数
const dog = {
  name: 'tom'
}
person.hello.call(dog, "hello dog");

//参考： https://juejin.im/post/5b9f176b6fb9a05d3827d03f






