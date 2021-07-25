# 介绍

## CornerstoneTools.js 是什么

CornerstoneTools 是一个 JavaScript 库，可以帮助注释、分割和测量医学图像。该库还提供了一个框架，用于创建新工具、以一致、内聚的方式管理所有工具以及导入/导出工具度量数据。

该库并不是孤立的。它是建立在 [Cornerstone](https://cornerstonejs.org/) 之上，这是一个符合标准、快速且可扩展的JavaScript库，用于显示交互式医学图像。

## 牛刀小试
最简单的方法是使用 [JSFiddle Hello World example](https://jsfiddle.net/dannyrb/csnj2tbq/)。请随意在另一个选项卡中打开它，并在我们学习一些基本示例时继续进行操作。或者，你可以 [新建一个 `index.html`](https://gist.githubusercontent.com/dannyrb/63e5f4e76711f8539aea934357344e21/raw/1902fa0ecf7b764ca0011c7d03072f19156b4f93/Cornerstone%2520Tools%2520v3%2520-%2520Hello%2520World) 然后像这样引入

```html
<!-- Dependencies -->
<script src="https://cdn.jsdelivr.net/npm/hammerjs@2.0.8"></script>
<script src="https://cdn.jsdelivr.net/npm/cornerstone-math@0.1.6/dist/cornerstoneMath.js"></script>
<script src="https://cdn.jsdelivr.net/npm/cornerstone-core@2.2.4/dist/cornerstone.js"></script>
<script src="https://cdn.jsdelivr.net/npm/cornerstone-web-image-loader@2.1.0/dist/cornerstoneWebImageLoader.js"></script>

<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/cornerstone-tools@3.0.0-b.641/dist/cornerstoneTools.js"></script>
```

或者：

```html
<!-- Dependencies -->
<script src="https://cdn.jsdelivr.net/npm/hammerjs@2.0.8"></script>
<script src="https://cdn.jsdelivr.net/npm/cornerstone-math@0.1.6"></script>
<script src="https://cdn.jsdelivr.net/npm/cornerstone-core@2.2.4"></script>
<script src="https://cdn.jsdelivr.net/npm/cornerstone-web-image-loader@2.1.0"></script>

<!-- production version, optimized for size and speed -->
<script src="https://cdn.jsdelivr.net/npm/cornerstone-tools@next"></script>
```

[Installation page](installation.md) 提供了更多安装方式

### 依赖项
如果您发现这些依赖项令人困惑，下面是一个高层次的概述，说明了为什么每个依赖项都包含在其中，并且是 cornerstone 工具发挥作用所必需的：

| 依赖项 | 目的  | 备选方案  |
| ----- | --  | ----- |
| Hammer.js     | 添加对触摸事件和手势的跨浏览器支持 | N/A   |
| Cornerstone Math   | 用来辅助向量数学或其他复杂运算的依赖关系  | N/A  |
| Cornerstone (Core)           | 渲染我们的图像，并提供有用的事件和方法，使对视口更改作出响应的工具成为可能 | N/A        |
| Cornerstone Web Image Loader | 添加了从 `http` 或 `https` URL “获取”PNG/JPEG图像的功能。其他图像加载器存在加载 NIFTI 或 DICOM 图像到 cornerstone | [CornerstoneWADOImageLoader](https://github.com/cornerstonejs/cornerstoneWADOImageLoader) (DICOM) / [CornerstoneNIFTIImageLoader](https://github.com/flywheel-io/cornerstone-nifti-image-loader) (NIFTI) |
| debug  | 一个模仿 Node.js core 调试技术的小型 JavaScript 调试实用程序。适用于 Node.js 和 web 浏览器。| N/A  |

如果您发现这一点过于复杂，并且有其他解决方案来管理和使用依赖关系，那么我们总是在寻找关于如何简化流程的新想法。请毫不犹豫地创建一个[GitHub问题](https://github.com/cornerstonejs/cornerstoneTools/issues)讨论（：

## configuration
以前版本的 cornerstoneTools 需要对其内部结构有很强的了解，才能启用/禁用不同的特性和功能。现在，在初始化 cornerstoneTools 时应用合理的默认值。

```js
import cornerstone from 'cornerstone-core';
import cornerstoneMath from 'cornerstone-math';
import cornerstoneTools from 'cornerstone-tools';
import Hammer from 'hammerjs';

cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.Hammer = Hammer;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;

cornerstoneTools.init();
```

`cornerstoneTools.init();` call accepts a configuration object if you would like to deviate from default behaviors of `cornerstoneTool`'s `globalConfiguration`:

```js
cornerstoneTools.init({
  /**
   * When cornerstone elements are enabled,
   * should `mouse` input events be listened for?
   */
  mouseEnabled: true,
  /**
   * When cornerstone elements are enabled,
   * should `touch` input events be listened for?
   */
  touchEnabled: true,
  /**
   * A special flag that synchronizes newly enabled cornerstone elements. When
   * enabled, their active tools are set to reflect tools that have been
   * activated with `setToolActive`.
   */
  globalToolSyncEnabled: false,
  /**
   * Most tools have an associated canvas or SVG cursor. Enabling this flag
   * causes the cursor to be shown when the tool is active, bound to left
   * click, and the user is hovering the enabledElement.
   */
  showSVGCursors: false,
});
```

If you wish to change modules other than the `globalConfiguration` module, you may pass an array of named module configuration like so:

```js
cornerstoneTools.init([
  {
    moduleName: 'globalConfiguration',
    configuration: {
      showSVGCursors: true,
    },
  },
  {
    moduleName: 'segmentation',
    configuration: {
      outlineWidth: 2,
    },
  },
]);
```

You can go further and configure textStyle, toolStyle, toolColors, etc:

```js
// Set the tool font and font size
const fontFamily =
  'Work Sans, Roboto, OpenSans, HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif';

cornerstoneTools.textStyle.setFont(`16px ${fontFamily}`);

// Set the tool width
cornerstoneTools.toolStyle.setToolWidth(2);

// Set color for inactive tools
cornerstoneTools.toolColors.setToolColor('rgb(255, 255, 0)');

// Set color for active tools
cornerstoneTools.toolColors.setActiveColor('rgb(0, 255, 0)');

// and so on...
```

A full list of the settings and their defaults can be found here: [globalConfigurationModule.js](https://github.com/cornerstonejs/cornerstoneTools/blob/master/src/store/modules/globalConfigurationModule.js#L1-L5)

## Adding and Using Tools {#adding-and-using-tools}

In previous versions of Cornerstone Tools, users would need to implement their own Tool manager. This version includes the concept of "adding" Tools to `Enabled` elements to make tracking and managing Tool state across your application easier.

### _Adding a Tool to one or more `Enabled` elements:_

In this example, we're adding a built in Tool to an `Enabled` element.

```js
cornerstoneTools.init();
const LengthTool = cornerstoneTools.LengthTool;

// Make sure we have at least one element Enabled
const element = document.querySelector('#element-1');
cornerstone.enable(element);

// Adds tool to ALL currently Enabled elements
cornerstoneTools.addTool(LengthTool);

// OR add the tool to a specific Enabled element
cornerstoneTools.addToolForElement(element, LengthTool);
```

### _Activating an added Tool:_

When a Tool is added, its default [mode](anatomy-of-a-tool/index.md#modes) is `Disabled`. When a Tool's mode is `Active`, it can be used; if it has measurement data, that data can be created or interacted with. You can read more about changing a Tool's mode in the [anatomy of a tool](anatomy-of-a-tool/index.md#modes) section of our docs. In this example, we change an added Tool's mode to `Active`:

```js
// Activate the tool for ALL currently Enabled elements
cornerstoneTools.setToolActive(LengthTool.name, { mouseButtonMask: 1 });

// OR activate the tool for a specific Enabled element
cornerstoneTools.setToolActiveForElement(
  enabledElement,
  LengthTool.name,
  {
    mouseButtonMask: 1,
  },
  ['Mouse']
);
```

Now that our Tool is `Active`, we should be able to use our `LengthTool` to draw length annotations on the `Enabled` element. Having trouble or just want to see a quick demo? [Check out this jsfiddle!](https://jsfiddle.net/dannyrb/jhxdgu94/)

## 下一步计划

_This section needs content_
