(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{531:function(e,o,t){"use strict";t.r(o);var n=t(49),a=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"migrating-major-versions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrating-major-versions"}},[e._v("#")]),e._v(" Migrating Major Versions")]),e._v(" "),t("p",[e._v("In "),t("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Semantic Versioning"),t("OutboundLink")],1),e._v(", a major version change (1.x.x to 2.x.x) occurs when we make incompatible API changes between releases. Simply put, sometimes we need to "),t("em",[e._v("break")]),e._v(" things to provide new major features or optimizations. If you find yourself upgrading to a new major version, you should expect additional work will need to be done to upgrade your codebase. This page contains documentation to help update code bases using an older version of Cornerstone:")]),e._v(" "),t("h2",{attrs:{id:"v2-x-x-from-v1-x-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2-x-x-from-v1-x-x"}},[e._v("#")]),e._v(" v2.x.x from v1.x.x")]),e._v(" "),t("p",[e._v("This major version drops jQuery as a dependency across all Cornerstone libraries. To accomplish this, how we changed promises internally needed to change; as well as how we emit and consume emitted events. The migration should be fairly painless, unless you've built a large number of custom tools that rely on jQuery.")]),e._v(" "),t("h3",{attrs:{id:"update-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-packages"}},[e._v("#")]),e._v(" Update Packages")]),e._v(" "),t("ul",[t("li",[e._v("Update "),t("code",[e._v("cornerstone-core")]),e._v(" to v2.x.x")]),e._v(" "),t("li",[e._v("Update "),t("code",[e._v("cornerstone-tools")]),e._v(" to v2.x.x")]),e._v(" "),t("li",[e._v("If you use "),t("code",[e._v("cornerstone-wado-image-loader")]),e._v(", update it to v2.x.x")]),e._v(" "),t("li",[e._v("If you use "),t("code",[e._v("cornerstone-web-image-loader")]),e._v(", update it to v2.x.x")])]),e._v(" "),t("h3",{attrs:{id:"update-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-code"}},[e._v("#")]),e._v(" Update Code")]),e._v(" "),t("p",[t("em",[e._v("You no longer need to provide a jQuery external dependency:")])]),e._v(" "),t("p",[t("code",[e._v("cornerstonePackageNameHere.external.$ = $")])]),e._v(" "),t("p",[t("em",[e._v("Framework level events have been changed:")])]),e._v(" "),t("ul",[t("li",[e._v("From: "),t("code",[e._v("$(cornerstone.events).on('CornerstoneEventName', function(evt, data){ })")])]),e._v(" "),t("li",[e._v("To: "),t("code",[e._v("cornerstone.event.addEventListener('cornerstoneeventname', function(evt){ })")])])]),e._v(" "),t("p",[e._v("Where "),t("code",[e._v("evt.detail")]),e._v(" now contains the data previously in the old handler's second param.")]),e._v(" "),t("p",[t("em",[e._v("To listen to events for a given enabled element, change:")])]),e._v(" "),t("ul",[t("li",[e._v("From: "),t("code",[e._v("$.on('CornerstoneCamelCaseName', function (evt, data) { })")])]),e._v(" "),t("li",[e._v("To: "),t("code",[e._v("element.addEventListener('cornerstonelowercasename', function (evt){ })")])])]),e._v(" "),t("p",[e._v("Where "),t("code",[e._v("evt.detail")]),e._v(" now contains the data previously in the old handler's second param.")]),e._v(" "),t("p",[e._v("You can see a full list of CornerstoneTool events here: "),t("a",{attrs:{href:"https://github.com/cornerstonejs/cornerstoneTools/blob/29182180ed3f850ba41c609b98b96464affca5f0/src/events.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/events.js"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"v1-x-x-from-v0-9-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-x-x-from-v0-9-x"}},[e._v("#")]),e._v(" v1.x.x from v0.9.x")]),e._v(" "),t("p",[t("strong",[e._v("TODO")])])])}),[],!1,null,null,null);o.default=a.exports}}]);