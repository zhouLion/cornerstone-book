(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{574:function(t,e,o){"use strict";o.r(e);var a=o(49),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h2",{attrs:{id:"strategies-strategies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#strategies-strategies"}},[t._v("#")]),t._v(" Strategies {#strategies}")]),t._v(" "),o("p",[t._v("Tools may optionally have multiple strategies of operation. "),o("RouterLink",{attrs:{to:"/zh/cornerstone-tools/v3/tool-types/#base-tool"}},[o("code",[t._v("BaseTool")])]),t._v(", from which all Tools inherit, takes two arguments related to the Tools strategies:")],1),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Argument")]),t._v(" "),o("th",[t._v("Type")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("strategies")]),t._v(" "),o("td",[t._v("Object")]),t._v(" "),o("td",[t._v("An "),o("code",[t._v("Object")]),t._v(" comprised of "),o("code",[t._v("function")]),t._v("s that take the "),o("code",[t._v("evt")]),t._v(" and Tool "),o("code",[t._v("configuration")]),t._v(" as arguments and perform an operation.")])]),t._v(" "),o("tr",[o("td",[t._v("defaultStrategy")]),t._v(" "),o("td",[t._v("string")]),t._v(" "),o("td",[t._v("The name of the default strategy to apply. The name should be identical to a property name in "),o("code",[t._v("strategies")])])])])]),t._v(" "),o("p",[t._v("Upon instantiation of the Tool, the "),o("code",[t._v("activeStrategy")]),t._v(" is set to the "),o("code",[t._v("defaultStrategy")]),t._v(". If "),o("code",[t._v("defaultStrategy")]),t._v(" is absent, the first function of the "),o("code",[t._v("strategies")]),t._v(" is used. The strategies mechanism is entirely optional.")]),t._v(" "),o("p",[o("code",[t._v("BaseTool")]),t._v(" has the function "),o("code",[t._v("applyActiveStrategy (evt, this.configuration)")]),t._v(" which will execute the "),o("code",[t._v("activeStrategy")]),t._v(", and return any value returned by the strategy.")]),t._v(" "),o("p",[t._v("The strategy can be changed by setting "),o("code",[t._v("tool.activeStrategy")]),t._v(" to a new value. The strategy can be reset to the default by calling "),o("code",[t._v("setDefaultStrategy")]),t._v(".")]),t._v(" "),o("p",[t._v("A simple example of a Tool that utilizes the strategy mechanism is the "),o("a",{attrs:{href:"https://github.com/cornerstonejs/cornerstoneTools/blob/master/src/imageTools/rotate.js",target:"_blank",rel:"noopener noreferrer"}},[o("code",[t._v("rotate")]),t._v(" Tool"),o("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=s.exports}}]);