# Rendering Pipeline - 渲染管道

::: tip

Cornerstone 将根据图像类型（例如灰度、颜色、标签地图、视口伪彩色）从多个图像渲染管道中进行选择。

:::
## 渲染管道工作流程
<img :src="$withBase('/assets/img/rendering-pipeline.png')" alt="渲染管道工作流程">

## 渲染管道类型

绘制途径 | 描述
------------------------------------------------------- | -----------------------------
[renderGrayscaleImage](../api.md#rendergrayscaleimage)  | 灰度图像的默认渲染管道。包括模态和 VOI-LUT 变换。
[renderPseudoColorImage](../api.md#renderpseudocolorimage) | 设置 **colormap** 属性时使用。这将在模态 LUT 和 VOI-LUT 变换之后对像素数据应用伪彩色LUT变换。
[renderColorImage](../api.md#rendercolorimage) | 彩色图像的默认渲染管道。所有像素的Alpha都是不透明的，除非图像的 **rgba** 属性设置为true。
[renderWebImage](../api.md#renderwebimage) | 用于浏览器加载的图像（PNG、JPEG）的自定义渲染管道。如果未应用 VOI-LUT 变换（windowWidth、windowCenter、invert），则可以直接从图像 [`getImage`](../api#getimage) 函数绘制画布。
[renderLabelMapImage](../api.md#renderlabelmapimage) | 标签贴图的渲染管道。伪彩色 LUT 变换直接应用于存储的像素数据。不应用模态或 VOI-LUT 变换。