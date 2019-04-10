const parser = require("@babel/parser");
const code = `function square(n) {
  return n * n;
}`;
const output = parser.parse(code)
console.log(output);

// parse("code", {
//   // parse in strict mode and allow module declarations
//   sourceType: "module",

//   plugins: [
//     // enable jsx and flow syntax
//     "jsx",
//     "flow"
//   ]
// });