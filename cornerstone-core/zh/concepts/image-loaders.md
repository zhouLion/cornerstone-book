# Image Loaders - 图像加载器
> **Image Loader - 图像加载器** 是一个 JavaScript 方法，这个方法负责输入一个图像的 [Image Id](image-ids.md) ，给 Cornerstone 返回一个这张图像的 **Image Load Object - 图像加载对象**。这个对象包含了一个用于处理生成图像的 Promise。

因为加载图像通常需要去请求服务器，所以加载影像的 API 被设计了异步的。Cornerstone 需要 Image Loaders 返回的对象中，包含一个 [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) ，让 Cornerstone 能够从中异步获取影像，在异常时返回一个 [Error](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error)。

## 图像加载器工作流

![图像加载器工作流](/assets/img/image-loader-workflow.png)
- 1、ImageLoader 将自己注册到 Cornerstone，去加载特定 [ImageId](../image-ids.md) URL 格式影像
- 2、程序通过使用 `loadImage()` API 加载一张图像
- 3、Cornerstone 通过传递给 `loadImage()` 方法的 imageId，找到与之注册的 ImageLoader，委派其加载图像
- 4、ImageLoader 将返回一个 `Image Load Object - 图像加载对象`，其中包含一个 `promise` 属性，一旦获取到了像素数据，这个 `promise` 将会返回相应的 [Image Object - 影像对象](./images.md)。获取像素数据可能需要经历使用 XMLHttpRequest 调用远程服务器，解压像素数据（如：来自 JPEG 2000 的数据）然后将像素数据转换为 Cornerstone 能够理解的格式（如：RGB vs YBR 色值）。
- 5、将[Image Object - 影像对象](./images.md) 传给 `Promise` 的 `resolve` 回调，以便于调用 `displayImage()` API 去做展示。

像素数据通常是从服务器上获取的，但也不是一定要这样做。实际上，我们的在线示例中的 ImageLoader 使用的图片，并没有使用服务器去发布。在示例中，图片以 base64 的格式保存在 ImageLoader 中。插件只是简单地将图片从 base64 像素数据转成了像素数组。进一步说，我们可以编写一个可以在客户端生成派生图像的**加载器**。比如，您可以以这种方式实现 [MPR](http://www.xctmr.com/baike/ct/714aae590159663493528de8ab5368b7.html) 功能。

## 可用的图像加载器
图像加载器 | 用途
-------------| --------------
[Cornerstone WADO Image Loader](https://github.com/cornerstonejs/cornerstoneWADOImageLoader) | DICOM Part 10 images<br> Supports WADO-URI and WADO-RS<br> Supports multi-frame DICOM instances<br> Supports reading DICOM files from the File objects
[Cornerstone Web Image Loader](https://github.com/cornerstonejs/cornerstoneWebImageLoader) | PNG and JPEG images

<!-- *Feel free to send a Pull Request if you have an Image Loader you want to add to this list.* -->

## 图像加载对象

Cornerstone 图像加载器需要返回一个包含 `promise` 的 **Image Load Objects - 图像加载对象**。我们选择用对象的形式，而不是返回一个单独的 `Promise`，是因为这样图像加载器，就可以在这个加载器对象中返回其它的属性。比如，我们想要通过图像加载器返回的图像加载对象中的**cancelFn**，去取消执行中或者准备执行的请求。不过这个还在开发中。

## 自己写一个图像加载器
这里的图像加载器的示例，使用 XMLHttpRequest 获取像素数据，然后返回一个包含 Promise 的图像加载对象给 Cornerstone：

````javascript
function loadImage(imageId) {
    // Parse the imageId and return a usable URL (logic omitted)
    const url = parseImageId(imageId);

    // Create a new Promise
    const promise = new Promise((resolve, reject) => {
      // Inside the Promise Constructor, make
      // the request for the DICOM data
      const oReq = new XMLHttpRequest();
      oReq.open("get", url, true);
      oReq.responseType = "arraybuffer";
      oReq.onreadystatechange = function(oEvent) {
          if (oReq.readyState === 4) {
              if (oReq.status == 200) {
                  // Request succeeded, Create an image object (logic omitted)
                  const image = createImageObject(oReq.response);

                  // Return the image object by resolving the Promise
                  resolve(image);
              } else {
                  // An error occurred, return an object containing the error by
                  // rejecting the Promise
                  reject(new Error(oReq.statusText));
              }
          }
      };

      oReq.send();
    });

    // Return an object containing the Promise to cornerstone so it can setup callbacks to be
    // invoked asynchronously for the success/resolve and failure/reject scenarios.
    return {
      promise
    };
}
````
Cornerstone 调用 `loadImage()` 方法，入参 [Image Id](./image-ids.md) 会找到对应的图像加载器，让其负责返回一个 **Image Load Object 图像加载对象**。当图像加载对象中的 Promise 解析成功，会返回一张[Image](./images.md)。在图像加载器通过 `registerImageLoader()` API传入给定的 URL 格式进行注册：

````javascript
// Register the url scheme 'myCustomLoader' to correspond to our loadImage function
cornerstone.registerImageLoader('myCustomLoader', loadImage);

// Images loaded as follows will be passed to our loadImage function:
cornerstone.loadImage('myCustomLoader://example.com/image.dcm')
````
