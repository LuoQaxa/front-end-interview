function compose(...args) {
  return args.reduce((a, b) => (...args) => a(b(...args)))
}

function a(b) {
  console.log('a is run over b is', b);
}

function b() {
  console.log('b is run over');
  return 'b'
}

compose(a, b)() //a(b())



