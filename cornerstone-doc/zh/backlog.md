代办事项:
========
* 超级大图的支持 (如：病状 > 4k * 4k 分辨率)
* 性能相关
  * 进行 ww/wc 操作时切换为低分辩率图片，以提高帧率
  * 仅重新生成已渲染图像中实际可见的部分 - 大概是使用瓦片技术
* 为 cornerstone 的图片创建一个 [自定义元素](http://www.html5rocks.com/en/tutorials/webcomponents/customelements/) 
* 在以联通的 ww/wc 用例的多个视口之间共享 LUT
