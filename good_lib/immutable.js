const update = require('immutability-helper');

const state1 = ['x'];
const state2 = update(state1, {
  $push: ['y']
});

const arr = [1,2,3]
const arr1 = update(arr, {
  $splice: [[2, 1], [0, 0, 3]],
})
console.log(state2);
console.log(arr1);
console.log(arr);


