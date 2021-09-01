(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{386:function(e,t,a){"use strict";a.r(t);var o=a(49),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"image-ids"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image-ids"}},[e._v("#")]),e._v(" Image Ids")]),e._v(" "),a("blockquote",[a("p",[e._v("A Cornerstone "),a("strong",[e._v("Image Id")]),e._v(" is a URL which identifies a single image for cornerstone to display.")])]),e._v(" "),a("p",[e._v("The URL scheme in the Image Id is used by Cornerstone to determine which "),a("RouterLink",{attrs:{to:"/concepts/image-loaders.html"}},[e._v("Image Loader")]),e._v(" plugin to call to actually load the image. This strategy allows Cornerstone to simultaneously display multiple images obtained with different protocols from different servers. For example, Cornerstone could display a DICOM CT image obtained via "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/DICOMweb",target:"_blank",rel:"noopener noreferrer"}},[e._v("WADO"),a("OutboundLink")],1),e._v(" alongside a JPEG dermatology image captured by a digital camera and stored on a file system.")],1),e._v(" "),a("h4",{attrs:{id:"the-image-id-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-image-id-format"}},[e._v("#")]),e._v(" The Image Id format")]),e._v(" "),a("p",[a("img",{attrs:{src:"$withBase/assets/img/image-id-format.png",alt:"Image Id format"}})]),e._v(" "),a("p",[e._v("Cornerstone does not specify what the contents of the URL are - it is up to the "),a("RouterLink",{attrs:{to:"/concepts/image-loaders.html"}},[e._v("Image Loader")]),e._v(" to define the contents and format of the URL so that it can locate the image. For example, a proprietary "),a("RouterLink",{attrs:{to:"/concepts/image-loaders.html"}},[e._v("Image Loader")]),e._v(" plugin could be written to talk to a proprietary server and lookup images using a GUID, filename or database row id.")],1),e._v(" "),a("p",[e._v("Here are some examples of what an Image Id could look like for different "),a("RouterLink",{attrs:{to:"/concepts/image-loaders.html"}},[e._v("Image Loader")]),e._v(" plugins:")],1),e._v(" "),a("ul",[a("li",[e._v("example://1")]),e._v(" "),a("li",[e._v("dicomweb://server/wado/{uid}/{uid}/{uid}")]),e._v(" "),a("li",[e._v("http://server/image.jpeg")]),e._v(" "),a("li",[e._v("custom://server/uuid")])])])}),[],!1,null,null,null);t.default=r.exports}}]);