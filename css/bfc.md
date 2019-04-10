[参考](https://juejin.im/post/5bc33d0d6fb9a05d1658afc7)

bfc block formating context
块级格式化上下文
bfc是一个容器，用于管理块级子元素，这里面的子元素是box level，块级元素。这个区域和外部毫不相干

如何创建：
1. float为 left|right
2. overflow为 hidden|auto|scroll
3. display为 table-cell|table-caption|inline-block|inline-flex|flex
4. position为 absolute|fixed
5. 根元素

特性：
1. 会阻止垂直外边距折叠
   - 相邻兄弟元素都margin重叠，解决方案是让他们不处于同一个bfc，用div wrap其中一个元素，并且设置overflow：hidden生成一个新的bfc
   - 父子元素的margin会重叠,解决方案可以让父元素形成一个新的bfc，同样采取overflow的方式
2. bfc不会重叠浮动元素
   - 如果浮动元素重叠，可以使其中一个元素形成bfc给元素添加overflow
3. bfc可以包含浮动
   - 经常在元素浮动后会发生高度塌陷的问题，可以让父元素变成一个bfc

总结起来bfc就是一个容器，它具有自己的一些特性，规定了块级元素的布局规则，在实际的布局中经常会利用bfc的特性来处理一些问题，比如说margin重叠，子元素浮动父元素高度塌陷，浮动元素重叠.

