(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{509:function(t,a,s){"use strict";s.r(a);var n=s(49),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"metadata-providers-元数据供应者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metadata-providers-元数据供应者"}},[t._v("#")]),t._v(" Metadata Providers - 元数据供应者")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[s("strong",[t._v("Metadata Provider - 元数据供应者")]),t._v(" 就是一个 JavaScript 函数，它在 Cornerstone 中的作用是获取与图像有关的元数据。用户可以按他们的想法，自定义 provider 函数，来返回每张指定图像的元数据。")])]),t._v(" "),s("p",[t._v("医学影像通常携带许多非像素级别的元数据，就比如图像的像素间距、患者 ID 或者扫描成像日期等。在某些文件（比如：DICOM）中，这些信息保存在文件头部，还可以读取、解析并且在你的应用程序中传递。还有一些文件（比如：JPEG、PNG），这些信息需要于像素数据之外单独提供。然而，即便是 DICOM 这样的图像，开发人员提供的单独的元数据，这些元数据与从服务器上获取的图像的像素数据分离开来。这是因为这样往往能够提升性能。")]),t._v(" "),s("p",[t._v("为了应付这中场景，Cornerstone 为定义和使用 "),s("em",[t._v("Metadata Providers - 元数据供应者")]),t._v("\n铺好了路。"),s("code",[t._v("Metadata Providers")]),t._v(" 是一个简单的函数，它接收一个 "),s("RouterLink",{attrs:{to:"/zh/concepts/image-ids.html"}},[t._v("Image Id")]),t._v(" 和指定的元数据类型, 返回值就是元数据本身。")],1),t._v(" "),s("p",[t._v("这里一个元数据供应者简单示例，它返回一个张指定图像(Image Id: 'ct://1')的图像平面元数据对象:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("metaDataProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" imageId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'imagePlaneModule'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("imageId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ct://1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            frameOfReferenceUID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.3.6.1.4.1.5962.99.1.2237260787.1662717184.1234892907507.1411.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            rows"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            columns"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            rowCosines"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                z"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            columnCosines"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                z"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            imagePositionPatient"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                z"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("399.100006")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            rowPixelSpacing"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.976562")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            columnPixelSpacing"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.976562")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 Cornerstone 上注册供应者")]),t._v("\ncornerstone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("metaData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metaDataProvider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收元数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" imagePlaneModule "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cornerstone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("metaData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'imagePlaneModule'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ct://1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"相关-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关-api"}},[t._v("#")]),t._v(" 相关 API")]),t._v(" "),s("p",[t._v("元数据供应者相关 API 可参见 "),s("RouterLink",{attrs:{to:"/zh/api.html#metadata"}},[t._v("cornerstone.metaData")])],1),t._v(" "),s("h2",{attrs:{id:"基本说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本说明"}},[t._v("#")]),t._v(" 基本说明")]),t._v(" "),s("ul",[s("li",[t._v("Cornerstone 允许注册多个元数据供应者；")]),t._v(" "),s("li",[t._v("每个供应者都可以按开发者意愿，提供任意想要的信息数据；")]),t._v(" "),s("li",[t._v("一旦一张图像发起元数据请求，Cornerstone 就从已知的供应者中遍历，直至取到对应的元数据类型的元数据集；")]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/api.html#metadata"}},[s("code",[t._v("cornerstone.metaData.addProvider")])]),t._v(" 接收第二个参数标识调用优先级，用来控制 Cornerstone 遍历供应者的优先顺序；")],1),t._v(" "),s("li",[t._v("当使用"),s("a",{attrs:{href:"https://github.com/cornerstonejs/cornerstoneWADOImageLoader",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cornerstone WADO Image Loader"),s("OutboundLink")],1),t._v("加载 DICOM 图像，它们的元数据将被解析并自动添加到一个元数据供应者；")]),t._v(" "),s("li",[t._v("在 "),s("a",{attrs:{href:"https://github.com/cornerstonejs/cornerstoneTools",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cornerstone Tools"),s("OutboundLink")],1),t._v(" 中, 由特定的元数据类型为工具提供元数据。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);