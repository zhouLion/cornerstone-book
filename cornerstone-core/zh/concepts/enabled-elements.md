---
sidebar: false
---
# Enabled Element - 激活元素

> 在 Cornerstone 中, **Enabled Element** 指的是 [HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement) (通常使用 [div](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/div))，我们在它上面展示可交互的医学影像。

要展示一张图片，前端开发者需要做以下事情：

1. 在页面中用 script 标签引入 Cornerstone js 脚本文件；
2. 在页面中引入一个或多个 [Image Loaders](image-loaders.md) ，让 Cornerstone 用来加载像素数据（比如： WADO, WADO-RS, 自定义的）；
3. 添加一个 DOM 元素，用来在里面展示影像；
4. 使用 CSS 给元素定位，并且设置一定的宽高；
5. 调用 [`.enable()`](../api.md#enable) API 为元素展示影像做准备；
6. 使用 [`.loadImage()`](../api.md#loadimage) API 去加载影像图片；
7. 调用 [`.displayImage()`](../api.md#displayimage) API 去展示加载好的影像；

可见 [最简单示例](https://rawgit.com/chafey/cornerstone/master/example/jsminimal/index.html) 使用 Cornerstone 所需的最少代码

您可能还需要引入 [Cornerstone Tools Library - Cornerstone 工具库](https://github.com/chafey/cornerstoneTools) 去实现一些比如**开窗术**（windowing）, **平移**（pan）, **缩放比例**（zoom）和 **测量**（measurements）等等的工具。
