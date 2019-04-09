// 比起defineProperty，proxy可以代理的不知是get和set，拦截操作高达13种，has

// 使用 has 方法隐藏某些属性，不被 in 运算符发现
var handler = {
  has(target, key) {
    if (key[0] === '_') {
      return false;
    }
    return key in target;
  }
};
var target = {
  _prop: 'foo',
  prop: 'foo'
};
var proxy = new Proxy(target, handler);
console.log('_prop' in proxy); // false


// target 也可以是一个函数
var target = function () { return 'I am the target'; };
var handler = {
  apply: function () {
    return 'I am the proxy';
  }
};

var p = new Proxy(target, handler);

p();
// "I am the proxy"


// 拦截第一个字符为下划线的属性名，不被for of遍历到
let target = {
  _bar: 'foo',
  _prop: 'bar',
  prop: 'baz'
};

let handler = {
  ownKeys(target) {
    return Reflect.ownKeys(target).filter(key => key[0] !== '_');
  }
};

let proxy = new Proxy(target, handler);
for (let key of Object.keys(proxy)) {
  console.log(target[key]);
}
// "baz"

// proxy版本的watch

function watch(target, prop, callback) {
  const proxy = new Proxy(target, {
     get(target, prop) {
      return Reflect.get(target, prop)
     },
     set(target, prop, value) {
       Reflect.set(target, prop, value)
       callback(prop, value)
     }
  })
}

var obj = {
  value: 1
}

var newObj = watch(obj, function (key, newvalue) {
  if (key == 'value') document.getElementById('container').innerHTML = newvalue;
})

document.getElementById('button').addEventListener("click", function () {
  // 与object.defineproperty不同的是需要修改代理对象，才可以触发拦截
  newObj.value += 1
});
