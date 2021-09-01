(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{501:function(t,a,s){"use strict";s.r(a);var e=s(49),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"image-loaders-图像加载器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#image-loaders-图像加载器"}},[t._v("#")]),t._v(" Image Loaders - 图像加载器")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Image Loader - 图像加载器")]),t._v(" 是一个 JavaScript 方法，这个方法负责输入一个图像的 "),s("RouterLink",{attrs:{to:"/zh/concepts/image-ids.html"}},[t._v("Image Id")]),t._v(" ，给 Cornerstone 返回一个这张图像的 "),s("strong",[t._v("Image Load Object - 图像加载对象")]),t._v("。这个对象包含了一个用于处理生成图像的 Promise。")],1)]),t._v(" "),s("p",[t._v("因为加载图像通常需要去请求服务器，所以加载影像的 API 被设计了异步的。Cornerstone 需要 Image Loaders 返回的对象中，包含一个 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"}},[t._v("Promise"),s("OutboundLink")],1),t._v(" ，让 Cornerstone 能够从中异步获取影像，在异常时返回一个 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error",target:"_blank",rel:"noopener noreferrer"}},[t._v("Error"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"图像加载器工作流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图像加载器工作流"}},[t._v("#")]),t._v(" 图像加载器工作流")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/img/image-loader-workflow.png"),alt:"图像加载器工作流"}}),t._v(" "),s("ul",[s("li",[t._v("1、ImageLoader 将自己注册到 Cornerstone，去加载特定 "),s("RouterLink",{attrs:{to:"/zh/image-ids.html"}},[s("code",[t._v("ImageId")])]),t._v(" URL 格式影像")],1),t._v(" "),s("li",[t._v("2、程序通过使用 "),s("RouterLink",{attrs:{to:"/zh/api.html#loadImage"}},[s("code",[t._v("loadImage()")])]),t._v(" API 加载一张图像")],1),t._v(" "),s("li",[t._v("3、Cornerstone 通过传递给 "),s("RouterLink",{attrs:{to:"/zh/api.html#loadImage"}},[s("code",[t._v("loadImage()")])]),t._v(" 方法的 "),s("code",[t._v("imageId")]),t._v(" ，找到与之注册的 "),s("code",[t._v("ImageLoader")]),t._v(" ，委派其加载图像")],1),t._v(" "),s("li",[t._v("4、ImageLoader 将返回一个 "),s("code",[t._v("Image Load Object - 图像加载对象")]),t._v("，其中包含一个 "),s("code",[t._v("promise")]),t._v(" 属性，一旦获取到了像素数据，这个 "),s("code",[t._v("promise")]),t._v(" 将会返回相应的 "),s("RouterLink",{attrs:{to:"/zh/concepts/images.html"}},[t._v("Image Object - 影像对象")]),t._v("。获取像素数据可能需要经历使用 XMLHttpRequest 调用远程服务器，解压像素数据（如：来自 JPEG 2000 的数据）然后将像素数据转换为 Cornerstone 能够理解的格式（如：RGB vs YBR 色值）。")],1),t._v(" "),s("li",[t._v("5、将 "),s("RouterLink",{attrs:{to:"/zh/concepts/images.html"}},[t._v("Image Object - 影像对象")]),t._v(" 传给 "),s("code",[t._v("Promise")]),t._v(" 的 "),s("code",[t._v("resolve")]),t._v(" 回调，以便于调用 "),s("code",[t._v("displayImage()")]),t._v(" API 去做展示。")],1)]),t._v(" "),s("p",[t._v("像素数据通常是从服务器上获取的，但也不是一定要这样做。实际上，我们的在线示例中的 ImageLoader 使用的图片，并没有使用服务器去发布。在示例中，图片以 base64 的格式保存在 ImageLoader 中。插件只是简单地将图片从 base64 像素数据转成了像素数组。进一步说，我们可以编写一个可以在客户端生成派生图像的"),s("strong",[t._v("加载器")]),t._v("。比如，您可以以这种方式实现 "),s("a",{attrs:{href:"http://www.xctmr.com/baike/ct/714aae590159663493528de8ab5368b7.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MPR"),s("OutboundLink")],1),t._v(" 功能。")]),t._v(" "),s("h2",{attrs:{id:"可用的图像加载器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可用的图像加载器"}},[t._v("#")]),t._v(" 可用的图像加载器")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("图像加载器")]),t._v(" "),s("th",[t._v("用途")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"https://github.com/cornerstonejs/cornerstoneWADOImageLoader",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cornerstone WADO Image Loader"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("DICOM Part 10 images"),s("br"),t._v(" Supports WADO-URI and WADO-RS"),s("br"),t._v(" Supports multi-frame DICOM instances"),s("br"),t._v(" Supports reading DICOM files from the File objects")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://github.com/cornerstonejs/cornerstoneWebImageLoader",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cornerstone Web Image Loader"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("PNG and JPEG images")])])])]),t._v(" "),s("h2",{attrs:{id:"图像加载对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图像加载对象"}},[t._v("#")]),t._v(" 图像加载对象")]),t._v(" "),s("p",[t._v("Cornerstone 图像加载器需要返回一个包含 "),s("code",[t._v("promise")]),t._v(" 的 "),s("strong",[t._v("Image Load Objects - 图像加载对象")]),t._v("。我们选择用对象的形式，而不是返回一个单独的 "),s("code",[t._v("Promise")]),t._v("，是因为这样图像加载器，就可以在这个加载器对象中返回其它的属性。比如，我们想要通过图像加载器返回的图像加载对象中的"),s("strong",[t._v("cancelFn")]),t._v("，去取消执行中或者准备执行的请求。不过这个还在开发中。")]),t._v(" "),s("h2",{attrs:{id:"自己写一个图像加载器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自己写一个图像加载器"}},[t._v("#")]),t._v(" 自己写一个图像加载器")]),t._v(" "),s("p",[t._v("这里的图像加载器的示例，使用 XMLHttpRequest 获取像素数据，然后返回一个包含 Promise 的图像加载对象给 Cornerstone：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("imageId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Parse the imageId and return a usable URL (logic omitted)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseImageId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("imageId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a new Promise")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" promise "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Inside the Promise Constructor, make")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the request for the DICOM data")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oReq "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      oReq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      oReq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arraybuffer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      oReq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("oEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oReq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oReq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Request succeeded, Create an image object (logic omitted)")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" image "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createImageObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oReq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Return the image object by resolving the Promise")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// An error occurred, return an object containing the error by")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// rejecting the Promise")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oReq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("statusText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      oReq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Return an object containing the Promise to cornerstone so it can setup callbacks to be")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// invoked asynchronously for the success/resolve and failure/reject scenarios.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      promise\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Cornerstone 调用 "),s("code",[t._v("loadImage()")]),t._v(" 方法，入参 "),s("RouterLink",{attrs:{to:"/zh/concepts/image-ids.html"}},[t._v("Image Id")]),t._v(" 会找到对应的图像加载器，让其负责返回一个 "),s("strong",[t._v("Image Load Object 图像加载对象")]),t._v("。一旦图像加载对象中的 Promise 解析成功，会返回一张"),s("RouterLink",{attrs:{to:"/zh/concepts/images.html"}},[t._v("Image")]),t._v("。在图像加载器通过 "),s("RouterLink",{attrs:{to:"/zh/api.html#registerimageloader"}},[s("code",[t._v("registerImageLoader()")])]),t._v(" API传入给定的 URL 格式进行注册：")],1),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Register the url scheme 'myCustomLoader' to correspond to our loadImage function")]),t._v("\ncornerstone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerImageLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myCustomLoader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loadImage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Images loaded as follows will be passed to our loadImage function:")]),t._v("\ncornerstone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myCustomLoader://example.com/image.dcm'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);