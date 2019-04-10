// 用于函数的定义
interface Router {
  (input: string) : string
}

// 函数的参数是一个参数就可以这样定义
function test(func: Router, params) {
  func(params)
}

test((str) => {
  console.log(str);
  return str;
}, 'luoqian')