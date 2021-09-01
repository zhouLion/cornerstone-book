(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{378:function(e,r,t){"use strict";t.r(r);var o=t(49),n=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"legacy-browser-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#legacy-browser-support"}},[e._v("#")]),e._v(" Legacy Browser Support")]),e._v(" "),t("blockquote",[t("p",[e._v("Cornerstone can be made to support legacy browsers by incorporating polyfills for some modern web browser features.")])]),e._v(" "),t("p",[e._v("You "),t("strong",[e._v("may")]),e._v(" need to include polyfills for these features, depending on which browsers you target.")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://caniuse.com/#feat=promises",target:"_blank",rel:"noopener noreferrer"}},[e._v("Promises"),t("OutboundLink")],1),e._v(" represent the eventual result of an asynchronous operation. These are used by "),t("RouterLink",{attrs:{to:"/concepts/image-loaders.html"}},[e._v("Image Loaders")]),e._v(". You will need to polyfill Promises to use Internet Explorer 11. Here is "),t("a",{attrs:{href:"https://github.com/taylorhakes/promise-polyfill",target:"_blank",rel:"noopener noreferrer"}},[e._v("a lightweight Promise polyfill"),t("OutboundLink")],1),e._v(" which is MIT Licensed.")],1)]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://caniuse.com/#feat=requestanimationframe",target:"_blank",rel:"noopener noreferrer"}},[e._v("requestAnimationFrame"),t("OutboundLink")],1),e._v(" is a method for efficiently running animations. We currently "),t("a",{attrs:{href:"https://github.com/cornerstonejs/cornerstone/blob/master/src/internal/requestAnimationFrame.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("check for its availability ourselves within Cornerstone"),t("OutboundLink")],1),e._v(", but may remove this in the future. There are many options for a "),t("a",{attrs:{href:"https://gist.github.com/paulirish/1579671",target:"_blank",rel:"noopener noreferrer"}},[e._v("requestAnimationFrame polyfill in this gist by Paul Irish"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://caniuse.com/#feat=high-resolution-time",target:"_blank",rel:"noopener noreferrer"}},[e._v("performance.now"),t("OutboundLink")],1),e._v(" is used for high-resolution timing for performance monitoring within Cornerstone. We are currently "),t("a",{attrs:{href:"https://github.com/cornerstonejs/cornerstone/blob/master/src/internal/now.js#L11",target:"_blank",rel:"noopener noreferrer"}},[e._v("avoiding errors ourselves within Cornerstone"),t("OutboundLink")],1),e._v(", but may remove this in the future. Here is a "),t("a",{attrs:{href:"https://gist.github.com/paulirish/5438650",target:"_blank",rel:"noopener noreferrer"}},[e._v("performance.now polyfill"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://caniuse.com/#feat=webgl",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebGL"),t("OutboundLink")],1),e._v(" is used for hardware acceleration in our "),t("RouterLink",{attrs:{to:"/advanced/webgl-rendering-pipeline.html"}},[e._v("optional high-performance rendering path")]),e._v(". WebGL 1.0 is well supported but may still have issues in some browsers, which is why it is not enabled by default. We currently provide a "),t("a",{attrs:{href:"https://github.com/cornerstonejs/cornerstone/blob/master/src/webgl/renderer.js#L80",target:"_blank",rel:"noopener noreferrer"}},[e._v("fallback pathway on WebGL failure"),t("OutboundLink")],1),e._v(" so that rendering can continue via HTML5 Canvas APIs.")],1)])]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" There may be further tests which could be added to the core codebase to trigger automatic fallback to Canvas rendering. If you have any specific suggestions, feel free to open an issue to discuss this.")])])}),[],!1,null,null,null);r.default=n.exports}}]);