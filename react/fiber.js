var queue = []
ReacDOM.render = function (root, container) {
  queue.push(root)
  updateFiberAndView()
}

function getVdomFormQueue() {
  return queue.shift()
}

function Fiber(vnode) {
  for (var i in vnode) {
    this[i] = vnode[i]
  }
  this.uuid = Math.random()
}
//我们简单的Fiber目前来看，只比vdom多了一个uuid属性
function toFiber(vnode) {
  if (!vnode.uuid) {
    return new Fiber(vnode)
  }
  return vnode
}