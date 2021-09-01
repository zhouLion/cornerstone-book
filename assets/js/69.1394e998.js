(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{433:function(t,s,o){"use strict";o.r(s);var e=o(49),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h2",{attrs:{id:"base-tool-base-tool"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#base-tool-base-tool"}},[t._v("#")]),t._v(" Base Tool {#base-tool}")]),t._v(" "),o("p",[t._v("The "),o("code",[t._v("BaseTool")]),t._v(" is the top level parent of all Tools in Cornerstone Tools. It takes care of initializing the Tool's configuration, applying mixins, and providing "),o("code",[t._v("@virtual")]),t._v(" functions for mouse/touch interaction for "),o("code",[t._v("Active")]),t._v(" tools.")]),t._v(" "),o("ul",[o("li",[t._v("Virtual Methods:\n"),o("ul",[o("li",[o("code",[t._v("preMouseDownCallback")])]),t._v(" "),o("li",[o("code",[t._v("postMouseDownCallback")])]),t._v(" "),o("li",[o("code",[t._v("preTouchStartCallback")])]),t._v(" "),o("li",[o("code",[t._v("postTouchStartCallback")])])])])]),t._v(" "),o("h2",{attrs:{id:"cursors-optional"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cursors-optional"}},[t._v("#")]),t._v(" Cursors (Optional)")]),t._v(" "),o("p",[t._v("Any tool may define cursors to replace the mouse cursor when active. This feature is optional. You must set the "),o("code",[t._v("globalConfigurationModule")]),t._v(" option "),o("code",[t._v("showSVGCursors")]),t._v(" to "),o("code",[t._v("true")]),t._v(" to use them. This can be done upon initialization of "),o("code",[t._v("cornerstoneTools")]),t._v(":")]),t._v(" "),o("div",{staticClass:"language-js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[t._v("cornerstoneTools"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" showSVGCursors"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),o("p",[t._v("A tool may implement a single cursor by setting the "),o("code",[t._v("svgCursor")]),t._v(" to an "),o("RouterLink",{attrs:{to:"/cornerstone-tools/latest/modules/#cursors"}},[o("code",[t._v("MouseCursor")]),t._v(" object")]),t._v(", or by setting a set of cursors per strategy tag:")],1),t._v(" "),o("div",{staticClass:"language-js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\ncursors"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FILL_INSIDE")]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" segCircleFillInsideCursor"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FILL_OUTSIDE")]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" segCircleFillOutsideCursor"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ERASE_OUTSIDE")]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" segCircleEraseOutsideCursor"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ERASE_INSIDE")]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" segCircleEraseInsideCursor"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or")]),t._v("\nsvgCursor"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" segCircleFillInsideCursor"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])]),o("p",[t._v("If you are using the "),o("em",[t._v("cursor-by-strategy")]),t._v(" method implemented by "),o("code",[t._v("cursors")]),t._v(", you do not need to set the default "),o("code",[t._v("svgCursor")]),t._v(", as "),o("code",[t._v("BaseTool")]),t._v(" will do this for you.")])])}),[],!1,null,null,null);s.default=a.exports}}]);