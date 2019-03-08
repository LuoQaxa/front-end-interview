// 截流：快速点击的时候不能一直发送请求，或者一直执行回调函数，而是在限定的时间内只执行一次事件

/**
 * 定时器版本, 有定时器的时候就不执行，没有定时器的时候就执行，第一次触发的时候没有定时器，但是也得等到wait后才会执行第一次，而不再触发后，会多执行一次
 * @param {*} func 
 * @param {*} wait 
 */
function throttle(func, wait) {
  let timeout;
  return (args) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        func(...args);
        timeout = null
      }, wait);
    }
  }
}

/**
 * 时间戳版本, 第一次会马上触发
 * @param {*} func 
 * @param {*} wait 
 */
function throttle(func, wait) {
  let previous = 0;
  debugger
  return (...args) => {
    const now = new Daste().getTime(); 
    if ((now - previous) >= wait) {
      func(...args);
      previous = now
    }
  }
}


// 第三版： 鼠标移入立即执行，停止后还能触发执行一次
function throttle(func, wait) {
  let previous = 0;
  let later = () => {
    previous = +new Date();
    timeout = null;
    func.apply(context, args)
  }
  return (...args) => {
    let now = +new Date();
    // 剩余的时间
    // 第一次的时候剩余的时间是小于零的。并且没有定时器，所以就直接执行了，并且会添加一个定时器
    // 这算是一个什么关系呢？或者的关系，就是只要有一个达到了条件就执行，并且要兼顾着更新另外一个条件的值，或者关系的时候可以用else if的方式
    let remaining = wait - (now - previous);
    if (remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null
      }
      previous = now;
      func(...args);
    }else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }
  }
}




function throttle(func, wait) {
  let timeout;
  let previous = 0;

  (...args) => {
    let now = +new Date()
    if (now - previous > wait) {
      // 已经到了时间了，但是还要兼顾着定时器
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      func(...args);
      previous = now;
    } else if (!timeout) {
      setTimeout(() => {
        func(...args);
        timeout = null;
        previous = +new Date();
      }, wait);
    }
  }
}
// 1. 到时间了，没有定时器
// 2. 到时间了，有定时器
// 3. 没到时间，没有定时器

// 总结起来：定时器版本不会马上触发，而最后多触发一次
// 时间戳版本会马上触发，离开之后马上不触发
// 理想的效果：


// 防抖： 对比单反中的拍照概念很好，为了防止抖动，拍照的时候会拍下多张然后进行合成。在js中就是等着事件没有触发了再执行回调，特别适用于输入框验证和进行即时后端搜索的情况
// 一定是再事件触发n秒后执行，如果在n秒内触发，就以新的事件为准，直到n秒在执行
function debounce(func, wait) {
  let timeout;

  return (...args) => {
    // 添加定时器前先将定时器删除，只有等不执行了最后一个定时器就不会被删除就可以执行了
    clearTimeout(timeout);
    setTimeout(() => {
      func(...args);
    }, wait);
  }
}