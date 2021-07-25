# 工具种类

为了快捷，简便以及有一个相对自由的模版去开发新的工具，所有的工具要继承 `extend` 一个基础类，它提供必要的功能以保证能与 `cornerstoneTools` 框架无缝衔接。

基类有两种工具开发人员感兴趣的方法
- `@abstract` methods: 这些方法必须要子类去实现。
- `@virtual` methods: 这些方法是默认的功能，但是子类可以去重写它以改变功能实现。可以理解为钩子函数

🚧 Check the [`api` docs](https://tools.cornerstonejs.org/api/) for full documentation of the api.

## BaseTool
基础类 - `BaseTool` 是所有 CornerstoneTools 工具类的顶级父类。它负责初始化工具配置项，应用混入 - `mixins`，并且为激活状态的工具提供默认的鼠标或者触控交互功能。

- Virtual Methods:
  - `preMouseDownCallback` 鼠标点击前事件钩子
  - `postMouseDownCallback` 鼠标点击后事件钩子
  - `preTouchStartCallback` 触控前事件钩子
  - `postTouchStartCallback` 触控后事件钩子

### 光标 (可选项)
当工具激活的时候，工具可能需要定义光标的样式，去替换原本的鼠标光标。这个特性是可选的。你必须设置 `globalConfigurationModule` 配置对象中的 `showSVGCursors` 为 `true` 方能使用他们。可以在 `cornerstoneTools` 初始化的时候指定。

```js
cornerstoneTools.init({ showSVGCursors: true });
```
- 通用设置：通过设置 `svgCursor` 为 [`MouseCursor` 对象](../modules/index.md#cursors) 以实现一个单独的光标；
- 按策略设置光标：给 `cursors` 对象中每一种策略分别设置光标效果。

```js
// or
svgCursor: segCircleFillInsideCursor,
// ...
// ...
cursors: {
  FILL_INSIDE: segCircleFillInsideCursor,
  FILL_OUTSIDE: segCircleFillOutsideCursor,
  ERASE_OUTSIDE: segCircleEraseOutsideCursor,
  ERASE_INSIDE: segCircleEraseInsideCursor,
},

```
如果你选择使用「按策略设置光标」的方式去实现 `光标`，你就不必去再设置 `svgCursor`，因为 `BaseTool` 会帮你处理好的。

## BaseAnnotationTool
标绘工具基类 - `BaseAnnotationTool` 是 `BaseTool` 的扩展类。为了开发工具以创建和修改标绘数据。

- Abstract Methods:
  - `createNewMeasurement`
  - `pointNearTool`
  - `distanceFromPoint`
  - `renderToolData`
- Virtual Methods:
  - `mouseMoveCallback`
  - `handleSelectedCallback`
  - `toolSelectedCallback`
  - `updateCachedStats`

## BaseBrushTool
笔刷工具基础类 - `BaseBrushTool` 是 `BaseTool` 的一个扩展类，用于 is an extension of `BaseTool` for Tools which edit the segmentation module's `Labelmap3D` data by painting on the canvas. Used for creating and editing segmentations.

Unlike subclasses of `BaseAnnotationTool`, subclasses of `BaseBrushTool` don't manage the rendering of their own data. Rendering of the segmentation masks is centralized at `src/eventListeners/onImageRenderedBrushEventHandler.js`. If a `Labelmap2D` object exists on a displayed cornerstone image, and either of the [segmentation module's](../modules/index.md#segmentation) `renderFill` or `renderOutline` configuration options are true.

- Abstract Methods:
  - `renderBrush`
  - `_paint`
- Virtual Methods:
  - `mouseDragCallback`
  - `preMouseDownCallback`
  - `_startPainting`
  - `_endPainting`

- [🔧 图像分割工具基础类](./segmentation-tool.md)
