[Chrome 67 - Cookies hidden in developer tools network tab](https://blog.ermer.de/2018/06/11/chrome-67-provisional-headers-are-shown/)
[provisional headers are shown 知多少](https://juejin.im/post/5c00980751882518805add83#comment)
<!-- chrome://flags/#site-isolation-trial-opt-out -->

## todo
<!-- 今天发现一个问题cookie hidden in chrome network panel 并且显示未provisional headers as shown -->
<!-- cookie是肯定有在http请求中的，如何验证：利用抓包工具 -->


## network
1. time和size有两个值： size第一行为实际传输时的大小，第二行为文件的实际大小。time的第一行为整个请求到所有数据返回所用的时间，第二行为请求开始到服务器返回第一个字节的时间，也就是不包括下载所有数据的时间。[你知道Chrome Network ，Size 和 Time 为什么有两行参数吗？](https://juejin.im/post/5c78aa2ae51d4575e963dc62)
2. 从这个问题我又发现了有时候size的第一个数值会小于第二个数值，这是因为这个传输的数据进行的压缩，可以在`content-type`这个属性可以看到传输的数据的类型，包括：`gzip, compress, deflate,identity,br(项目中的ttf文件就采用了这种模式来压缩)`