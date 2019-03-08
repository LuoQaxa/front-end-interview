import fs from 'fs';
console.log(fs);



// export var foo = 'bar';
// setTimeout(() => foo = 'baz', 500);


function foo() {
  export default 'bar' // SyntaxError
}
foo()
