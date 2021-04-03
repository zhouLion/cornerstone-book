# Image Ids - 图片标识

> Cornerstone 的 **Image Id - 图片标识** 是一个 URL，用于标识 Cornerstone 要显示的单个图像。

Cornerstone 使用 Image Id 的 URL 方案来确认，调用何种 [Image Loader - 图像加载器](image-loaders.md) 去实际加载图像。这种策略使得 Cornerstone 支持同时显示来自不同服务器通过不同协议发出来的多张图像。比如，Cornerstone 可以展示一张通过 [WADO-wiki](https://en.wikipedia.org/wiki/DICOMweb) [WADO-知乎](https://zhuanlan.zhihu.com/p/58203768)而获得的 DICOM CT 影像，以及一张由数码相机拍摄的 JPEG 格式的皮肤病图像。

## Image Id 格式
![Image Id format](../assets/img/image-id-format.png)

Cornerstone 并不能判别 URL 所对应的内容，这个活交给了 [Image Loader](image-loaders.md) ，让它来决定 URL 的内容和格式，从而定位到图像。比如，一个定制化编写的 [Image Loader](image-loaders.md)  插件，可以告诉专有服务器使用 GUID、文件名称或者数据库行 id 去查找图片。

这里有一些示例，用来向您展示不同的 [Image Loader](image-loaders.md) 长什么样子的：
* example://1
* dicomweb://server/wado/{uid}/{uid}/{uid}
* http://server/image.jpeg
* custom://server/uuid
