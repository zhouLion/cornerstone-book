(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{391:function(e,r,t){"use strict";t.r(r);var n=t(49),i=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"rendering-loop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rendering-loop"}},[e._v("#")]),e._v(" Rendering Loop")]),e._v(" "),t("blockquote",[t("p",[e._v("Viewport (e.g. windowing, pan, zoom, etc...) changes for Cornerstone Enabled Elements are updated through a rendering loop based on "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame",target:"_blank",rel:"noopener noreferrer"}},[e._v("requestAnimationFrame"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("p",[e._v("The rendering loop make use of the "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame",target:"_blank",rel:"noopener noreferrer"}},[e._v("requestAnimationFrame"),t("OutboundLink")],1),e._v(" (RAF) method in most modern browsers. If RAF is not available, it is shimmed with a 16 ms timer using "),t("code",[e._v("setTimeout")]),e._v(" and "),t("code",[e._v("clearTimeout")]),e._v(".")]),e._v(" "),t("p",[e._v("The rendering loop is enabled on an element-by-element basis when elements are enabled or disabled for use with Cornerstone.")]),e._v(" "),t("p",[e._v("The workflow is as follows:")]),e._v(" "),t("ol",[t("li",[e._v("A "),t("RouterLink",{attrs:{to:"/api.html#draw"}},[e._v("draw()")]),e._v(" callback is registered with RAF;")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/api.html#draw"}},[e._v("draw()")]),e._v(" is called by the browser just after a frame is displayed on screen;")],1),e._v(" "),t("li",[e._v("Once called,")])]),e._v(" "),t("ul",[t("li",[e._v("if the element was scheduled for re-rendering, it is rendered and "),t("RouterLink",{attrs:{to:"/api.html#draw"}},[e._v("draw()")]),e._v(" is re-registered with RAF;")],1),e._v(" "),t("li",[e._v("if the element was "),t("strong",[e._v("not")]),e._v(" scheduled for re-rendering, no work is performed and the callback is re-registered with RAF;")]),e._v(" "),t("li",[e._v("if the element was disabled, the callback is "),t("strong",[e._v("not")]),e._v(" re-registered, ending the rendering loop.")])]),e._v(" "),t("p",[e._v("This means that:")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/api.html#draw"}},[e._v("draw()")]),e._v(" and "),t("RouterLink",{attrs:{to:"/api.html#invalidate"}},[e._v("invalidate()")]),e._v(" do not trigger immediate rendering of the viewport. Instead, they flag the image as needing re-rendering;")],1),e._v(" "),t("li",[e._v("Each cornerstone element registers its own RAF loop;")]),e._v(" "),t("li",[e._v("If the rendering time exceeds 16 ms on a 60 Hz system, rendering frames are skipped;")]),e._v(" "),t("li",[e._v("Only one render per frame is possible, even if render time is much lower than 16 ms;")]),e._v(" "),t("li",[e._v("All interactions (e.g. windowing, pan, zoom, etc...) are combined and rendered in the next frame.")])])])}),[],!1,null,null,null);r.default=i.exports}}]);