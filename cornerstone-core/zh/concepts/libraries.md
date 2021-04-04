# 相关库

> Cornerstone 是一项开源项目，旨在搭建一个完备的 web 端医学影像平台。它提供了一些模块化的库，可以结合使用，也可以单独使用。

<img :src="$withBase('/assets/img/library-hierarchy.png')" alt="相关库结构">

其中 `Cornerstone Core library` 是核心要素，通常称之为 *Cornerstone* ，这个库是用来处理 [图像绘制流水线](./rendering-pipeline.md)、[加载](./image-loaders.md)、 [缓存](../advanced/image-cache.md)以及 [视口变换](./viewports.md)。

除了核心库，Cornerstone 开发团队还支持了其它几个库，为开发复杂的影像应用提供生态：

库名                                                          | 描述
-----------------------------------------------------------------|------------
[Cornerstone Core](https://github.com/cornerstonejs/cornerstone) | 用来支持图像绘制、加载、缓存以及视口变换的核心库
[Cornerstone Tools](https://github.com/cornerstonejs/cornerstoneTools) | 可扩展的工具库，支持鼠标、键盘和触控交互
[Cornerstone WADO Image Loader](https://github.com/cornerstonejs/cornerstoneWADOImageLoader) | `DICOM Part 10` 文件的图像加载器
[Cornerstone Web Image Loader](https://github.com/cornerstonejs/cornerstoneWebImageLoader) | Web Image (PNG, JPEG)文件图像加载器
[Cornerstone Math](https://github.com/cornerstonejs/cornerstoneMath) | 用来支持工具开发的数学工具函数、类库
[dicomParser](https://github.com/cornerstonejs/dicomParser) | 健壮的 `DICOM Part 10` 格式解析库
