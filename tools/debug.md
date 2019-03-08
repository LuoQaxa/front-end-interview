#### 一 调试
[浏览器基础](https://juejin.im/post/5c6b6d3be51d454cff27982b)
todo: hover的时候


#### 二 [线上调试](https://juejin.im/post/5c6b6dcfe51d45529d331ab4)
1. 线上的网页修改之后刷新，修改完的样式或者其他修改就会丢失。利用`source`下的`overrides`，浏览器会将修改都缓存起来。刷新之后还是保存着修改后的代码。
调试完成之后利用`change`查看所有修改


2. 利用代理调试线上代码
  

#### 三 源码调试
1. node: 分为两种在`chrome`中调试和在编辑器`vscode`中调试。
  - Chrome： 第一步：`node --inspect index.js`, 第二步：打开chrome://inspect, 第三步： 打开`Target`中的地址进行调试
  - vscode：自定义`launch.json`文件，node使用默认的配置应该就可以了

2. webpack插件调试
3. babel插件调试
4. 源码调试

[参考](https://github.com/hua1995116/debug.git)