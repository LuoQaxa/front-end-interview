const msg = 'testb.bcm';
console.log(msg.endsWith('.bcm'));
console.log(msg.startsWith('test'));
console.log(msg.lastIndexOf('b'));
console.log(msg.includes('test'));

let indent = "".repeat(4),
    indentLevel = 0;
let newIndent = indent.repeat(++indentLevel);
