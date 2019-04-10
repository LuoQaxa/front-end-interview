const parser = require("@babel/parser");
const traverse = require('babel-traverse');
const generator = require('babel-generator')

const code = `function square(n) {
  return n * n;
}`;

const ast = parser.parse(code);

// 这个traverse方法，转换之后没有返回值，那么是怎么将转换后的值交给一下步处理的呢
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

const output = generator.default(ast, {}, code);
console.log(output.code);

// 实现了把n转换为了x的过程
