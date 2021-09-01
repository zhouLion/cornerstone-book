(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{525:function(t,s,o){"use strict";o.r(s);var e=o(49),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h2",{attrs:{id:"creating-your-tool-creating-your-tool"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-your-tool-creating-your-tool"}},[t._v("#")]),t._v(" Creating Your Tool {#creating-your-tool}")]),t._v(" "),o("p",[t._v("Once you have an appropriate base class chosen (we will use the "),o("code",[t._v("BaseTool")]),t._v(" in this example), you can extend it to start building your Tool. In this example we shall make a Tool that logs "),o("code",[t._v("'Hello cornerstoneTools!'")]),t._v(" to the console on every mouse click.")]),t._v(" "),o("h3",{attrs:{id:"class-definition"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#class-definition"}},[t._v("#")]),t._v(" Class Definition")]),t._v(" "),o("p",[t._v("By convention the class name should be in PascalCase, and suffixed with "),o("code",[t._v("Tool")]),t._v(".\nFor example we shall call our wonderful tool "),o("code",[t._v("HelloWorldTool")]),t._v(":")]),t._v(" "),o("div",{staticClass:"language-js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" csTools "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cornerstone-tools'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" BaseTool "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" csTools"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("importInternal")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token string"}},[t._v("'base/BaseTool'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NOTE: if you're creating a tool inside the CornerstoneTools repository")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// you can import BaseTool directly from `src/tools/base`.")]),t._v("\n\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorldTool")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseTool")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HelloWorld'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      supportedInteractionTypes"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),o("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mouse'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),o("p",[t._v("The constructor must call "),o("code",[t._v("super()")]),t._v(", which passes an object to the constructor of the superclass ("),o("code",[t._v("BaseTool")]),t._v(", in this case, but the same object is passed to "),o("code",[t._v("BaseAnnotationTool")]),t._v(" or "),o("code",[t._v("BaseBrushTool")]),t._v("). The object passed may have the following properties:")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Property")]),t._v(" "),o("th",[t._v("Requirement")]),t._v(" "),o("th",[t._v("description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("name")]),t._v(" "),o("td",[t._v("Mandatory")]),t._v(" "),o("td",[t._v("The name of the Tool.")])]),t._v(" "),o("tr",[o("td",[t._v("supportedInteractionTypes")]),t._v(" "),o("td",[t._v("Mandatory")]),t._v(" "),o("td",[t._v("An array of strings listing the interaction types, "),o("code",[t._v("mouse")]),t._v(" and/or "),o("code",[t._v("touch")]),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/zh/cornerstone-tools/latest/anatomy-of-a-tool/#strategies"}},[t._v("strategies")])],1),t._v(" "),o("td",[t._v("Optional")]),t._v(" "),o("td",[t._v("If your Tool has multiple strategies of operation, you may pass an array of functions for each strategy here (see the "),o("code",[t._v("RotateTool")]),t._v(" for a good example).")])]),t._v(" "),o("tr",[o("td",[t._v("defaultStrategy")]),t._v(" "),o("td",[t._v("Optional")]),t._v(" "),o("td",[t._v("If you have multiple strategies, this one should be used by default (pass a string identical to the strategy function name).")])]),t._v(" "),o("tr",[o("td",[t._v("configuration")]),t._v(" "),o("td",[t._v("Optional")]),t._v(" "),o("td",[t._v("An object with configurable properties used by your Tool. It may include your Tool's sensitivity, how an annotation displays when rendered, etc.")])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/zh/cornerstone-tools/latest/anatomy-of-a-tool/#mixins"}},[t._v("mixins")])],1),t._v(" "),o("td",[t._v("Optional")]),t._v(" "),o("td",[t._v("An array of mixins (commonly used behaviours/functionality) to add to the Tool.")])])])]),t._v(" "),o("p",[t._v("For our simple Tool we pass only the two mandatory fields to "),o("code",[t._v("super")]),t._v(". For the Tool's own constructor, it must at minimum take "),o("code",[t._v("name")]),t._v(" as a parameter, and it must have a default value. By convention the default name is the same as the classname, minus the "),o("code",[t._v("Tool")]),t._v(" suffix.")])])}),[],!1,null,null,null);s.default=a.exports}}]);