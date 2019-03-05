[如何验证网站是否是http2.0](https://www.jianshu.com/p/0c4ac947c34b)
[谈谈HTTP/2对前端的影响](https://hectorguo.com/zh/http2-starter/)
[前端开发与 HTTP/2 的羁绊——安利篇](https://aotu.io/notes/2016/03/17/http2-char/index.html)
http1.1时代，每次tcp连接只能下载一个资源，比如一个index.html，服务器只会返回index.html，如果里面有link和script，则会再次向服务器发送请求，这样会有三个性能问题：
1. 如果`html`中包含多个js和css，请求数会随之增加，从而导致TCP往返连接所耗费时间增多
2. 每次发送的请求，http头部信息基本是一样的，从而导致头部信息冗余
3. `index.html`与内部资源文件之间会产生一个延时，而非同步获取。

### 特点：
1. 多路复用，对同一个服务器只建立一次TCP连接，加载多个资源，使用二进制传输，同时会对http头部进行压缩。


#### 多路复用
同一个连接传输多个资源，不会有浏览器限制同一个域的同时请求数
  
#### 头部压缩

#### 服务器推送
浏览器请求 index.html。
服务器发现浏览器请求的 index.html 中包含 style.css 和 something.png 资源，于是直接 index.html, style.css, something.png 三个资源都返回给浏览器。

这样，服务端和浏览器只需要进行一次通信，就可以获取到全部资源。
