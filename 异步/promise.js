// 手写promise
// 要遵循promise a+ 规范
// 1. promise有三个状态 pending fulfilled rejected
// 2. 状态是不可逆的，fulfilled或者rejected之后就不会变为其他状态了
// 3. fulfilled后一个成功的值
// 4. rejected后有一个失败的原因
// 5. 若是executor函数报错 直接执行reject();
// 6. 每一个promise都有一个then方法，它会返回一个新的promise，它接收两个参数，返回一个新的实例的原因是，状态是不可逆的，
// 如果返回的是同一个promise，多个then调用就失去意义了。对于then来说，本质上可以看成flatmap
// 一个是成功的回调，一个是失败的回调
// 7. 可以有多个then
// 可以把promise看为一个状态机，初始状态为pending，
// 简单易懂的版本
// [参考](https: //juejin.im/post/5b2f02cd5188252b937548ab#heading-8)
class MyPromise {
  constructor(executor) {
    // fn会立即执行
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onRejectCallbacks = [];
    this.onFulfillCallbacks = [];
    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        // this.onfulfilled(value);
        this.onFulfillCallbacks.forEach(cb => {
          cb(value);
        });
      }
    }
    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectCallbacks.forEach(cb => {
          cb(reason);
        });
      }
    }
    try {
      executor(resolve, reject);
    } catch (error) {
      reject()
    }
    
  }

  // 每一个实例上都有这个方法，这个方法什么时候调用呢
  // 不能立即调用，只有当成功或者失败后调用，并且需要实现promise是异步的
  // 调用then的时候可能是还在pending状态，也有可能是在其他状态，比如promise里面是同步的函数的时候
  then(onfulfilled, onrejected) {
    onfulfilled = typeof onfulfilled === 'function' ? onfulfilled : value => value;
    onrejected = typeof onrejected === 'function' ? onrejected : err => { throw(err) };
     // 声明返回的promise2
    //  获取回调运行得结果，然后处理回调运行得结果和我要新返回得promise2之间得关系
     let promise2 = new Promise((resolve, reject) => {
       if (this.state === 'fulfilled') {
         setTimeout(() => {
           try {
             let x = onfulfilled(this.value);
             resolvePromise(promise2, x, resolve, reject);
           } catch (error) {
             reject(e)
           }
         }, 0);
         
       };
       if (this.state === 'rejected') {
         setTimeout(() => {
           try {
             let x = onRejected(this.value);
             resolvePromise(promise2, x, resolve, reject);
           } catch (error) {
             reject(e)
           }
         }, 0);
       };
       if (this.state === 'pending') {
        //  如果当前状态还是在pending，将回调push到cbs中，并且要保证这些函数也是异步的
         this.onResolvedCallbacks.push(() => {
           setTimeout(() => {
             try {
               let x = onfulfilled(this.value);
               resolvePromise(promise2, x, resolve, reject);
             } catch (error) {
               reject(e)
             }
           }, 0);
           
         })
         this.onRejectedCallbacks.push(() => {
           setTimeout(() => {
             try {
               let x = onRejected(this.value);
               resolvePromise(promise2, x, resolve, reject);
             } catch (error) {
               reject(e)
             }
           }, 0);
         })
       }
     });
     // 返回promise，完成链式
     return promise2;

  }
}


// 在执行这个then方法的时候，会根据当前promise的状态来执行，最终等到resolve或者reject后，都会执行onfulfilled，或者 onreject方法
// 执行完这个函数之后，肯定会有返回值，
// promise2， x是回调执行后的返回值， promise2的resolve 和 reject
// 手写3遍resolvePromise方法
/**
 * 
 * @param {*} promise2 新的promise
 * @param {*} x onfulfilled 或者 onrejected 的返回值
 */
function resolvePromise(promise2, x, resolve, reject) {
 if (promise2 === x) {
   return reject(new TypeError('Error'))
 } 
 let called;
//  判断x的类型，如果是一个promise实例子
 if (x != null && typeof x === 'function' || typeof x === 'object') {
   try {
     const then = x.then
     if (typeof then === 'function') {
      // 如果then是一个函数，就直接调用它,并且将这个返回的promise执行后的值，传递给它的回调函数
       then.call(x, (y) => {
          if (called) return;
          called = true
          resolvePromise(promise2, y, resolve, reject)
       }, (err) => {
          if (called) return;
          called = true
          reject(err)
       })
     } else {
       resolve(x)
     }
   } catch (err) {
     if (called) return;
     called = true
     reject(err)
   }
 } else {
   resolve(x)
 }
}

MyPromise.resolve = (x) => {
  return new Promise(resolve, reject => {
    resolve(x)
  })
}

// 看promises谁先跑完就resolve
MyPromise.race = (promises) => {
  return new Promise(resolve, reject => {
    for (let i = 0; i < promises.length; i++) {
      // 给每一个promise都添加then函数，即等任意一个promise成功或者失败后就执行返回的promise的resolve或者reject
      promises[i].then((value) => {
        resolve(value)
      })
    }
  })
}

// 所有的promises都要执行成功，返回的所有promises结果的数组
// 需要定义一个变量来看是否所有的promise都执行
// 如果要保证返回的数据的顺序是按照传入的promises的顺序
// 写一个函数的时候要知道传入的参数，返回的是什么，有什么作用
MyPromise.all = (promises) => {
  let arr = [];
  let i = 0;
  function processData(i, value) {
    arr[i] = value;
    i++;
    if (i === promises.length) {
      resolve(arr);
    }
  }
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then((value) => {
        processData(i, value)
      }, reject)
    }
    
  })
}


module.exports = MyPromise

