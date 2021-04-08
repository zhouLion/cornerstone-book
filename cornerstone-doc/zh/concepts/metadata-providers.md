# Metadata Providers - 元数据供应者

::: tip
**Metadata Provider - 元数据供应者** 就是一个 JavaScript 函数，它在 Cornerstone 中的作用是获取与图像有关的元数据。用户可以按他们的想法，自定义 provider 函数，来返回每张指定图像的元数据。
:::

医学影像通常携带许多非像素级别的元数据，就比如图像的像素间距、患者 ID 或者扫描成像日期等。在某些文件（比如：DICOM）中，这些信息保存在文件头部，还可以读取、解析并且在你的应用程序中传递。还有一些文件（比如：JPEG、PNG），这些信息需要于像素数据之外单独提供。然而，即便是 DICOM 这样的图像，开发人员提供的单独的元数据，这些元数据与从服务器上获取的图像的像素数据分离开来。这是因为这样往往能够提升新能。

为了应付这中场景，Cornerstone 为定义和使用 *Metadata Providers - 元数据供应者*
铺好了路。`Metadata Providers` 是一个简单的函数，它接收一个 [Image Id](image-ids.md) 和指定的元数据类型, 返回值就是元数据本身。

这里一个元数据供应者简单示例，它返回一个张指定图像(Image Id: 'ct://1')的图像平面元数据对象:

````javascript
function metaDataProvider(type, imageId) {
  if (type === 'imagePlaneModule') {
    if (imageId === 'ct://1') {
        return {
            frameOfReferenceUID: "1.3.6.1.4.1.5962.99.1.2237260787.1662717184.1234892907507.1411.0",
            rows: 512,
            columns: 512,
            rowCosines: {
                x: 1,
                y: 0,
                z: 0
            },
            columnCosines: {
                x: 0,
                y: 1,
                z: 0
            },
            imagePositionPatient: {
                x: -250,
                y: -250,
                z: -399.100006
            },
            rowPixelSpacing: 0.976562,
            columnPixelSpacing: 0.976562
        };
    }
  }
}

// 在 Cornerstone 上注册供应者
cornerstone.metaData.addProvider(metaDataProvider);

// 接收元数据
var imagePlaneModule = cornerstone.metaData.get('imagePlaneModule', 'ct://1');
````

## 相关 API
元数据供应者相关 API 可参见 [cornerstone.metaData](../api.md#metadata)
## 基本说明
  * Cornerstone 允许注册多个元数据供应者；
  * 每个供应者都可以按开发者意愿，提供任意想要的信息数据；
  * 一旦一张图像发起元数据请求，Cornerstone 就从已知的供应者中遍历，直至取到对应的元数据类型的元数据集；
  * [`cornerstone.metaData.addProvider`](../api.md#metadata) 接收第二个参数标识调用优先级，用来控制 Cornerstone 遍历供应者的优先顺序；
  * 当使用[Cornerstone WADO Image Loader](https://github.com/cornerstonejs/cornerstoneWADOImageLoader)加载 DICOM 图像，它们的元数据将被解析并自动添加到一个元数据供应者；
  * 在 [Cornerstone Tools](https://github.com/cornerstonejs/cornerstoneTools) 中, 由特定的元数据类型为工具提供元数据。
