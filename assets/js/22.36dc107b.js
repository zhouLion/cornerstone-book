(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{387:function(t,e,a){"use strict";a.r(e);var s=a(49),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"image-loaders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image-loaders"}},[t._v("#")]),t._v(" Image Loaders")]),t._v(" "),a("blockquote",[a("p",[t._v("An "),a("strong",[t._v("Image Loader")]),t._v(" is a JavaScript function that is responsible for taking an "),a("RouterLink",{attrs:{to:"/concepts/image-ids.html"}},[t._v("Image Id")]),t._v(" for an Image and returning the corresponding "),a("strong",[t._v("Image Load Object")]),t._v(" for that Image to Cornerstone. The "),a("strong",[t._v("Image Load Object")]),t._v(" contains a Promise which resolves to produce an "),a("strong",[t._v("Image")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("Since loading images usually requires a call to a server, the API for image loading needs to be asynchronous. Cornerstone requires that Image Loaders return an Object containing a "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"}},[t._v("Promise"),a("OutboundLink")],1),t._v(" which Cornerstone will use to receive the Image Object asynchronously, or an "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error",target:"_blank",rel:"noopener noreferrer"}},[t._v("Error"),a("OutboundLink")],1),t._v(" if one has occurred.")]),t._v(" "),a("h2",{attrs:{id:"image-loader-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image-loader-workflow"}},[t._v("#")]),t._v(" Image Loader Workflow")]),t._v(" "),a("p",[a("img",{attrs:{src:"$withBase/assets/img/image-loader-workflow.png",alt:"Image Loader workflow"}})]),t._v(" "),a("ol",[a("li",[t._v("ImageLoaders register themselves with cornerstone to load specific "),a("RouterLink",{attrs:{to:"/image-ids.html"}},[t._v("ImageId")]),t._v(" URL schemes")],1),t._v(" "),a("li",[t._v("The application requests to load an image using the loadImage() api.")]),t._v(" "),a("li",[t._v("Cornerstone delegates the request to load the image to the ImageLoader registered with the URL scheme of the imageId passed to loadImage().")]),t._v(" "),a("li",[t._v("The ImageLoader will return an Image Load Object containing a Promise which it will resolve with the corresponding "),a("RouterLink",{attrs:{to:"/concepts/images.html"}},[t._v("Image Object")]),t._v(" once it has obtained the pixel data. Obtaining the pixel data may require a call to a remote server using XMLHttpRequest, decompression of the pixel data (e.g. from JPEG 2000), and conversion of the pixel data into the format that Cornerstone understands (e.g. RGB vs YBR color).")],1),t._v(" "),a("li",[t._v("The "),a("RouterLink",{attrs:{to:"/concepts/images.html"}},[t._v("Image Object")]),t._v(" passed back by the resolved Promise is then displayed using the "),a("code",[t._v("displayImage()")]),t._v(" API.")],1)]),t._v(" "),a("p",[t._v("While pixel data is usually obtained from a server, this doesn't always have to be the case. The live examples actually use an ImageLoader plugin to serve up images without requiring a server at all.  In this case, the images are base64 encoded and stored in the ImageLoader plugin itself. The plugin simply converts the base64 pixel data into an array of pixels. Alternatively, one could write an image loader that generates derived images on the client side. For example, you could implement MPR functionality this way.")]),t._v(" "),a("h2",{attrs:{id:"available-image-loaders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-image-loaders"}},[t._v("#")]),t._v(" Available Image Loaders")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Image Loader")]),t._v(" "),a("th",[t._v("Used for")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"https://github.com/cornerstonejs/cornerstoneWADOImageLoader",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cornerstone WADO Image Loader"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("DICOM Part 10 images"),a("br"),t._v(" Supports WADO-URI and WADO-RS"),a("br"),t._v(" Supports multi-frame DICOM instances"),a("br"),t._v(" Supports reading DICOM files from the File objects")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://github.com/cornerstonejs/cornerstoneWebImageLoader",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cornerstone Web Image Loader"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("PNG and JPEG images")])])])]),t._v(" "),a("p",[a("em",[t._v("Feel free to send a Pull Request if you have an Image Loader you want to add to this list.")])]),t._v(" "),a("h2",{attrs:{id:"image-load-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image-load-object"}},[t._v("#")]),t._v(" Image Load Object")]),t._v(" "),a("p",[t._v("Cornerstone Image Loaders return "),a("strong",[t._v("Image Load Objects")]),t._v(" which contain a Promise. The reason we have chosen to use an Object instead of solely returning a Promise is because now Image Loaders can also return other properties in their Image Load Objects. As an example, we intend to implement support for cancelling pending or ongoing requests using a "),a("strong",[t._v("cancelFn")]),t._v(" passed back by an Image Loader within an Image Load Object. This is still in development, however.")]),t._v(" "),a("h2",{attrs:{id:"writing-an-image-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-an-image-loader"}},[t._v("#")]),t._v(" Writing an Image Loader")]),t._v(" "),a("p",[t._v("Here is an example of an Image Loader that fetches pixel data using XMLHttpRequest and return an "),a("strong",[t._v("Image Load Object")]),t._v(" containing a Promise to Cornerstone:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("imageId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Parse the imageId and return a usable URL (logic omitted)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseImageId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("imageId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a new Promise")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" promise "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Inside the Promise Constructor, make")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the request for the DICOM data")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oReq "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      oReq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      oReq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arraybuffer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      oReq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("oEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oReq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oReq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Request succeeded, Create an image object (logic omitted)")]),t._v("\n                  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" image "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createImageObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oReq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Return the image object by resolving the Promise")]),t._v("\n                  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// An error occurred, return an object containing the error by")]),t._v("\n                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// rejecting the Promise")]),t._v("\n                  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oReq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("statusText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      oReq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Return an object containing the Promise to cornerstone so it can setup callbacks to be")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// invoked asynchronously for the success/resolve and failure/reject scenarios.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      promise\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("An Image Loader is responsible for returning an "),a("strong",[t._v("Image Load Object")]),t._v(" corresponding to the "),a("RouterLink",{attrs:{to:"/concepts/image-ids.html"}},[t._v("Image Id")]),t._v(" Cornerstone passed to its loadImage function. When the Promise in the Image Load Object is resolved, it should be resolved with an "),a("RouterLink",{attrs:{to:"/concepts/images.html"}},[t._v("Image")]),t._v(". Image Loaders register themselves for a given URL scheme using the "),a("code",[t._v("registerImageLoader()")]),t._v(" API:")],1),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Register the url scheme 'myCustomLoader' to correspond to our loadImage function")]),t._v("\ncornerstone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerImageLoader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myCustomLoader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loadImage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Images loaded as follows will be passed to our loadImage function:")]),t._v("\ncornerstone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myCustomLoader://example.com/image.dcm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);