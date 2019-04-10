`<link> preconnent`: 可以让链接在文档解析的时候，提前进行dns解析和tcp链接，因为http1的情况下每次tcp连接只能下载一个资源，而在http2的情况下可以对同一个服务器只建立一次tcp连接，加载多个资源。如果这个css资源在不同的服务器上那还是可以加上`preconnent`属性的

`<script> async`: 由于`script`标签会阻塞后续的dom渲染，一些第三方的脚本，可以使用async和defer来解决第三方的阻塞问题。
[参考](https://www.cnblogs.com/jiasm/p/7683930.html)
async 不会阻塞html的解析和渲染，但是它是只要下载完毕之后就会执行

