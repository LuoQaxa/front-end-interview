// import * as babylon from "babylon";
const parser = require("@babel/parser");
const traverse = require('babel-traverse');

const code = `function square(n) {
  return n * n;
}`;

const ast = parser.parse(code);

traverse.default(ast, {
  enter(path) {
    if (
      path.node.type === "Identifier" &&
      path.node.name === "n"
    ) {
      path.node.name = "x";
    }
  }
});




