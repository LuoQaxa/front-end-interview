// 装饰器：代码的变化方向都是朝着更简化，复用性更强的方向，这个概念从python这种效率高的语言借鉴而来

// 装饰类，给类添加静态属性

// 装饰属性和方法

class Person {
  say() {
    console.log('hello, ', this.name);
  }
}

function setName(target) {
  target.name = 'luoqian'
}
setName(Person)

const p = new Person()
p.say()


// bark变为只读属性
class Dog {
  @readonly
  bark() {
    return 'wang!wang!'
  }
}

// 注意这里的 `target` 是 `Dog.prototype`
function readonly(target, key, descriptor) {
  descriptor.writable = false
  return descriptor
}

// es7 decorator作用就是返回一个新的descriptor，并把这个新的descriptor应用到目标方法上



// [](https://zhuanlan.zhihu.com/p/20139834)