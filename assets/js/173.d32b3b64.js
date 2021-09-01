(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{537:function(t,e,a){"use strict";a.r(e);var s=a(49),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"segmentation-segmentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#segmentation-segmentation"}},[t._v("#")]),t._v(" Segmentation {#segmentation}")]),t._v(" "),a("p",[t._v("The segmentation module deals with centralisation of 3D labelmap data for each stack of cornerstone images. The data is centralized for two reasons:")]),t._v(" "),a("ul",[a("li",[t._v("Cornerstone data stored per imageId is of a 2D format, and labelmaps are very much 3D structures. Having the data for an entire 3D labelmap centralized, and 2D and 3D representations of it being accessible by cornerstone as needed provides the flexibility to perfom both 2D and 3D operations without having to re-aggregate data each time.")]),t._v(" "),a("li",[t._v("Storing the 3D labelmap in one "),a("code",[t._v("ArrayBuffer")]),t._v(" allows for better interoperability and harmonous integration with 3D platforms, such as "),a("a",{attrs:{href:"https://kitware.github.io/vtk-js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vtk-js"),a("OutboundLink")],1),t._v(". If using a WebGL library such as "),a("code",[t._v("vtk-js")]),t._v(", it is recommended you set the use of "),a("code",[t._v("Float32Array")]),t._v(" segmentations in the segmentation module configuration.")])]),t._v(" "),a("h3",{attrs:{id:"data-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-structure"}},[t._v("#")]),t._v(" Data Structure")]),t._v(" "),a("p",[t._v("The data is stored in a "),a("em",[t._v("top-down")]),t._v(" hierarchal fashion, with the coarsest level being study-wide. The types themselves are JSDoc'd in "),a("code",[t._v("src/store/modules/segmentationModule/index.js")]),t._v(", but a more in-depth overview is given here:")]),t._v(" "),a("h4",{attrs:{id:"series"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#series"}},[t._v("#")]),t._v(" Series")]),t._v(" "),a("p",[t._v("The series object under "),a("code",[t._v("state.series")]),t._v(" is the highest level object, containing a set of "),a("code",[t._v("BrushStackState")]),t._v("s with a 1:1 correlation with cornerstone stacks. Each "),a("code",[t._v("BrushStackState")]),t._v(" is currently indexed each stack by the imageId of the first image in the stack.")]),t._v(" "),a("h4",{attrs:{id:"brushstackstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brushstackstate"}},[t._v("#")]),t._v(" BrushStackState")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("BrushStackState")]),t._v(" object contains two properties:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("labelmaps3D")]),t._v(": An array of one or more "),a("code",[t._v("Labelmap3D")]),t._v(" objects, which are the same dimensions as the stack ("),a("code",[t._v("width * height * numberOfFrames")]),t._v(").")]),t._v(" "),a("li",[t._v("'activeLabelmapIndex`: The array index of the active labelmap.")])]),t._v(" "),a("p",[t._v("Each "),a("code",[t._v("Labelmap3D")]),t._v(" object can contain multiple non-overlapping segments. To use have overlapping segments in your application, use multiple "),a("code",[t._v("Labelmap3D")]),t._v("s.")]),t._v(" "),a("h4",{attrs:{id:"labelmap3d"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#labelmap3d"}},[t._v("#")]),t._v(" Labelmap3D")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("Labelmap3D")]),t._v(" is a single, non-overlapping labelmap with the following properties:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("buffer")]),t._v(": An "),a("code",[t._v("ArrayBuffer")]),t._v(" where the labels for each voxel are stored sequentially in increasing x, y, z. It has the same orientation as the stack, so increasing "),a("code",[t._v("z")]),t._v(" is increasing "),a("code",[t._v("imageIdIndex")]),t._v(" in the stack. By default, each label is stored as 2 bytes (encoded as Uint16Array), allowing for up to "),a("code",[t._v("65535")]),t._v(" unique segments (+ 0 being empty/unlabelled). By setting the segmentation configuration property "),a("code",[t._v("arrayType")]),t._v(" to "),a("code",[t._v("Float32Array")]),t._v(" you can instead store the labelmap as a format more harmonious with "),a("code",[t._v("vtkjs")]),t._v(". "),a("code",[t._v("vtkjs")]),t._v(" has to convert non-"),a("code",[t._v("Float32Array")]),t._v("s when generating textures to pass to the GPU, and this is very costly. If you are using vtkjs in your application its highly recommended to use "),a("code",[t._v("Float32Array")]),t._v("s for segmentations for decreased texture building times. This is especially noticable when using the "),a("code",[t._v("vtkjs")]),t._v(" paint widget, for example.")]),t._v(" "),a("li",[a("code",[t._v("labelmaps2D")]),t._v(": An array of "),a("code",[t._v("labelmap2D")]),t._v(" views on the "),a("code",[t._v("buffer")]),t._v(", indexed by in-stack "),a("code",[t._v("imageIdIndex")]),t._v(". The "),a("code",[t._v("labelmaps2D")]),t._v(" array is initially empty, and each view is defined only if data is added to it, and should be removed if set empty (all zero labels). This makes it easy for the segmentation renderer, I/O libraries such as "),a("a",{attrs:{href:"https://github.com/dcmjs-org/dcmjs",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("dcmjs")]),a("OutboundLink")],1),t._v(", and tools to localise the extent of segments without having to scan through every label in the stack.")]),t._v(" "),a("li",[a("code",[t._v("metadata")]),t._v(": An array of metadata objects per segment. Metadata is optional and its form is application specific. You may want a simple name for your label in your UI, or you may want more complex objects referencing standard libraries for anatomical region. The metadata is not used internally by "),a("code",[t._v("cornerstoneTools")]),t._v(", but acts an optional logical place to keep such data for your application.")]),t._v(" "),a("li",[a("code",[t._v("activeSegmentIndex")]),t._v(": The index of the segment to be created/modified when using "),a("code",[t._v("BaseBrushTool")]),t._v("s or segmentation tools, when th labelmap is active.")]),t._v(" "),a("li",[a("code",[t._v("colorLUTIndex")]),t._v(": The index of the colorLUT to use when rendering the labelmap.")]),t._v(" "),a("li",[a("code",[t._v("segmentsHidden")]),t._v(": An array of segments to hide from the canvas. Initially empty to save space, set an index to "),a("code",[t._v("true")]),t._v(" to hide the corresponding segment.")])]),t._v(" "),a("h4",{attrs:{id:"labelmap2d"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#labelmap2d"}},[t._v("#")]),t._v(" Labelmap2D")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("Labelmap2D")]),t._v(" is a 2D view of one frame of the segmentation, it is the object primarily interacted with from the cornerstone canvas, and has the following properties:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("pixelData")]),t._v(": a "),a("code",[t._v("Uint16Array")]),t._v(" or "),a("code",[t._v("Float32Array")]),t._v(" view of a portion of the parent "),a("code",[t._v("Labelmap3D")]),t._v("'s "),a("code",[t._v("buffer")]),t._v(", corresponding to the frame. Array type depends on the segmentation module's "),a("code",[t._v("arrayType")]),t._v(" setting.")]),t._v(" "),a("li",[a("code",[t._v("segmentsOnLabelmap")]),t._v(": An array of segments present in the "),a("code",[t._v("pixelData")]),t._v(". Whenever a tool or external manipulates the "),a("code",[t._v("pixelData")]),t._v(" viewed by the "),a("code",[t._v("Labelmap2D")]),t._v(", this list should be updated. This is generally very cheap to do on the fly, e.g. after a scissor action or after a full brush stroke, but speeds up IO dramatically when compressing data to DICOMSEG, for instance, as you can work out how much memory needs to be allocated with very simple checks.")])]),t._v(" "),a("h3",{attrs:{id:"usage-within-cornerstonetools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-within-cornerstonetools"}},[t._v("#")]),t._v(" Usage within cornerstoneTools")]),t._v(" "),a("p",[t._v("When using a tool on a cornerstone image, you can easily access the "),a("code",[t._v("Labelmap2D")]),t._v(" of the active "),a("code",[t._v("Labelmap3D")]),t._v(". by querying the segmentationModule:")]),t._v(" "),a("p",[t._v("Import the "),a("code",[t._v("segmentationModule")]),t._v(" "),a("code",[t._v("getters")]),t._v(" at the top of the file.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getModule "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./store'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//appropriate relative path")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Destructure the parts of the module you require from the getters, setters, state and configuration. Here we only need the getters.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getters "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'segmentation'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Then during "),a("code",[t._v("cornerstoneTools")]),t._v(" event callback, where "),a("code",[t._v("evt")]),t._v(" is the event:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" eventData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" evt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" eventData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  labelmap2D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The `Labelmap2D` for this imageId.")]),t._v("\n  labelmap3D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The `Labelmap3D` for this stack.")]),t._v("\n  currentImageIdIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The currentImageIdIndex of this image in the stack.")]),t._v("\n  activeLabelmapIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The labelmapIndex of this active labelmap.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("labelmap2D")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("This provides you all the information you need. You can grab as few or as many elements of this object as you need by destructuring appropriately.")]),t._v(" "),a("h4",{attrs:{id:"editing-the-labelmap-directly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#editing-the-labelmap-directly"}},[t._v("#")]),t._v(" Editing the labelmap directly")]),t._v(" "),a("p",[t._v("You can then edit the labelmap directly:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" pixelData "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" labelmap2D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\npixelData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"using-the-drawbrushpixels-helper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-drawbrushpixels-helper"}},[t._v("#")]),t._v(" Using the "),a("code",[t._v("drawBrushPixels")]),t._v(" helper")]),t._v(" "),a("p",[t._v("Or if using a brush you can use the "),a("code",[t._v("drawBrushPixels")]),t._v(" helper to paint an array of 2D-coordinates to the "),a("code",[t._v("Labelmap2D")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" columns "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" eventData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pointerArray "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Something grabbed by your brush.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" shouldErase "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Imported from src/util/segmentation")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawBrushPixels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  pointerArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  labelmap2D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pixelData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  labelmap3D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activeSegmentIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  columns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  shouldErase\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("To get the labelmap2D of another image in the stack which is not currently displayed:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" imageIdIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" labelmap2DofImageIdIndex99 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("labelmap2DByImageIdIndex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  labelmap3D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  imageIdIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  columns\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("An example of this usage can be found in the "),a("code",[t._v("SphericalBrushTool")]),t._v(".")]),t._v(" "),a("p",[t._v("Both "),a("code",[t._v("getters.labelmap2D")]),t._v(" and "),a("code",[t._v("getters.labelmap2DByImageIdIndex")]),t._v(" will return the "),a("code",[t._v("Labelmap2D")]),t._v(" if it exists, and create it and return it if not.")]),t._v(" "),a("p",[t._v("Additionally "),a("code",[t._v("getters.labelmap2D")]),t._v(" will initialise and create both the "),a("code",[t._v("BrushStackState")]),t._v(" and "),a("code",[t._v("Labelmap3D")]),t._v(", if neither exist yet.")]),t._v(" "),a("h3",{attrs:{id:"updating-labelmap-occupancy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-labelmap-occupancy"}},[t._v("#")]),t._v(" Updating labelmap occupancy")]),t._v(" "),a("p",[t._v("Upon finishing an operation on a "),a("code",[t._v("Labelmap2D")]),t._v(", the tool/operation should call "),a("code",[t._v("setters.updateSegmentsOnLabelmap2D(labelmap2D)")]),t._v(" on the "),a("code",[t._v("Labelmap2D")]),t._v(" to update its "),a("code",[t._v("segmentsOnLabelmap")]),t._v(" property. This property being correct up to date is useful for other tools, and I/O libraries.")]),t._v(" "),a("p",[t._v("This is not done automatically, because the end of an operationn might depend on the task. E.g. after one use of the "),a("code",[t._v("CircleScissorsTool")]),t._v(", we'll call "),a("code",[t._v("updateSegmentsOnLabelmap2D")]),t._v(", however we only do it at the "),a("em",[t._v("end")]),t._v(" of "),a("code",[t._v("BrushTool")]),t._v(" stroke. You may have a more complicated procedure whereby you perform a series of iterative growcuts with human intervention, and only want to update the labelmap occupancy at the end.")]),t._v(" "),a("h3",{attrs:{id:"usage-by-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-by-application"}},[t._v("#")]),t._v(" Usage by application")]),t._v(" "),a("p",[t._v("The parent application can retrieve information about the labelmaps by querying the API. From "),a("code",[t._v("metadata")]),t._v(", to "),a("code",[t._v("colorLUT")]),t._v("s per "),a("code",[t._v("Labelmap3D")]),t._v(".")]),t._v(" "),a("p",[t._v("The most useful getter function is probably "),a("code",[t._v("getLabelmaps3D(elementOrEnabledElementUID)")]),t._v(", which when given a cornerstone "),a("code",[t._v("element")]),t._v(", or a cornerstone "),a("code",[t._v("enabledElement")]),t._v("'s UUID, returns a list of "),a("code",[t._v("Labelmap3D")]),t._v(" objects, which can be parsed in order to generate UI.")]),t._v(" "),a("p",[t._v("A set of "),a("code",[t._v("setters")]),t._v(" can be linked to UI components to change the active segment, set segment color, etc, refer to the API documentation for a full list of helpers.")]),t._v(" "),a("h3",{attrs:{id:"usage-by-third-party-libraries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-by-third-party-libraries"}},[t._v("#")]),t._v(" Usage by third party libraries.")]),t._v(" "),a("p",[t._v("You may wish to access one or more "),a("code",[t._v("Labelmap3D")]),t._v(" "),a("code",[t._v("buffers")]),t._v(" from outside "),a("code",[t._v("cornerstoneTools")]),t._v(", in order to either export them to persistent storage, or display them in another framwork, such as "),a("a",{attrs:{href:"https://kitware.github.io/vtk-js/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("vtkjs")]),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("To retrieve the ArrayBuffer for the activeLabelmap on an "),a("code",[t._v("element")]),t._v(", from outside of "),a("code",[t._v("cornerstoneTools")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getters "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cornerstoneTools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'segmentation'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Active buffer:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" labelmapIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" colorLUT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("activeLabelmapBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  element\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// All labelmap buffers:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bufferInfoArray "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("labelmapBuffers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A specific buffer:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" buffer7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" colorLUT7 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("labelmapBuffers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("These functions also return the "),a("code",[t._v("colorLUT")]),t._v(" (not just its index), so that you can map another renderer to the same color scheme. Note these are just helper functions, and you can indeed fetch all the "),a("code",[t._v("Labelmap3D")]),t._v(" objects with "),a("code",[t._v("getters.labelmaps3D")]),t._v(", and extract this/more information if you desire.")]),t._v(" "),a("h3",{attrs:{id:"backdoor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backdoor"}},[t._v("#")]),t._v(" Backdoor")]),t._v(" "),a("p",[t._v("Note that other than from the API, you can always access the global "),a("code",[t._v("series")]),t._v(" object:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" state "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'segmentation'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" series "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("series"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("But only modify these if you know what you are doing, as you could potentially break your application by uncleanly deleting/modifying things.")])])}),[],!1,null,null,null);e.default=n.exports}}]);