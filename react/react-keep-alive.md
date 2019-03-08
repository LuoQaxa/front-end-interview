[参考](https://github.com/fi3ework/blog/issues/23)
浏览器支持：scroll Restoration，在非spa页面没问题
在spa中：
1. 浏览器试图恢复滚动距离时，页面可能还没加载完毕，因为回退的页面需要重新mount，可能存在异步加载的不放，导致页面出现跳动。
2. 点击链接进入页面就不会应用滚动恢复这一行为。只有在点击浏览器按钮的前进后退按钮时，才会触发 popstate 事件并触发 scroll restoration，通过点击链接无法触发滚动恢复。
3. 这是一个非规范的API

react-live-route
在切换到详情页的路径时，不将列表页unmount，而是display: none.


