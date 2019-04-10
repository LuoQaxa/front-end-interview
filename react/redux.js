import { createStore } from 'redux';

const reducer = function (state, action) {
  if (action === 'ADD') {
    return {
      number: +state.number
    }
  }
}
const store = createStore(reducer)

function createStore(params) {
  
}

// 将这个store通过 react-redux提供的provider传入到组件中去
export {
  createStore
}


