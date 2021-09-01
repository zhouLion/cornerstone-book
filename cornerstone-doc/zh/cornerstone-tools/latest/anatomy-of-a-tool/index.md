# 工具解析

## 模式
工具的模式（在v2中称为工具状态）决定了如何呈现工具，以及如何与之交互。四种标准模式是：
工具的模式分为四种状态：
- Active： 激活
- Passive：被动
- Enabled：启用
- Disabled：禁用

| 模式               | 描述  |
| -------- | ------ |
| Active             | 激活状态的工具将呈现并响应用户输入，或者能够创建新的标绘和/或测量。 |
| Passive            | 被动工具将呈现并被动响应用户输入。他们的数据可以被操纵，但不能被创建。|
| Enabled            | 启用的工具将呈现，但不会响应输入。“启用”工具状态本质上是“只读”状态。 |
| Disabled (default) | 工具的默认状态。禁用的工具不能与交互，也不能在启用的元素上呈现。 |

🚧 You can quickly test these modes out for yourself by checking out [this tool's example/demo page]() ~TODO~

### 切换工具的状态
你要是已经 [启用了一个或者多个元素](../index.md#adding-and-using-tools) 并且已经 [给这些元素添加工具](../index.md#adding-and-using-tools), 可以通过以下两种方式之一更改现有工具的模式：

- 针对所有已启用元素
如果已将同名工具添加到多个启用的元素中，则可以使用以下方法之一更新该工具的所有实例：

```js
// Active
cornerstoneTools.setToolActive('ToolName', options);
// Passive
cornerstoneTools.setToolPassive('ToolName', options);
// Enabled
cornerstoneTools.setToolEnabled('ToolName', options);
// Disabled
cornerstoneTools.setToolDisabled('ToolName', options);
```

- 针对指定的已启用的元素
如果需要工具行为在多个启用的元素之间有所不同，可以使用以下方法之一更改特定启用元素的工具模式：

```js
// Active
cornerstoneTools.setToolActiveForElement(
  enabledElement,
  'ToolName',
  {
    mouseButtonMask: 1,
  },
  ['Mouse']
);

// Passive
cornerstoneTools.setToolPassiveForElement(enabledElement, 'ToolName', options);
// Enabled
cornerstoneTools.setToolEnabledForElement(enabledElement, 'ToolName', options);
// Disabled
cornerstoneTools.setToolDisabledForElement(enabledElement, 'ToolName', options);
```

### 附加说明
- 有些工具可能只能以四种模式中的两种存在。例如，“缩放覆盖工具”只能是“启用”或“禁用”。尝试将其设置为“active”将使工具默认为“enabled”`。
- 不同基本类型的工具或固有的复杂工具可能会稍微偏离这些准则。
- 第三方工具可能不符合这些准则。

## 配置项
当切换工具模式的时候，你也可以去更新它内部配置。因为工具的配置项多种多样，不过也有一些通用的配置项。比如，所有和鼠标交互相关的工具，通过     `mouseButtonMask` 去指定哪个鼠标键去出发它的行为。为了更好的理解配置项是怎么应用的，请看以下示例：

```js
// 设置工具的配置项 `{ mouseButtonMask: 1 }`
cornerstoneTools.setToolActive('ToolName', { mouseButtonMask: 1 });

// 工具的配置项不会变化
cornerstoneTools.setToolActive('ToolName');
cornerstoneTools.setToolActive('ToolName', null);
cornerstoneTools.setToolActive('ToolName', undefined);
cornerstoneTools.setToolActive('ToolName', {});

// 工具的配置项新增了一项 `{ isTouchActive: false }`
cornerstoneTools.setToolActive('ToolName', { isTouchActive: false });

//  上面的 `mouseButtonMask` 配置项的值被更改为 `2`
cornerstoneTools.setToolActive('ToolName', { mouseButtonMask: 2 });
```

### 通用配置项
> TODO: 在 [`BaseTool`](../tool types/index.md#base tool) 上创建一个属性，该属性是工具内部使用的所有配置选项的字符串列表？然后在这里维护一个列表，指出每个属性的用途？

| 配置项                      | 鼠标 | 触控 | 标注 | 刷子 |
| --------------------------- | :---: | :---: | :--------: | :---: |
| `mouseButtonMask`           |   x   |       |            |       |
| `preventHandleOutsideImage` |       |       |     x      |       |
| `isTouchActive`             |       |   x   |            |       |


## 交互类型
🚧 _This section needs content_

## 策略
工具可以有多种操作策略。[`BaseTool`]（../tool types/index.md#base tool）是所有工具的继承源，它接受与工具策略相关的两个参数：

| Argument | Type | Description |
|----------|------|-------------|
| strategies | Object |一种 `Object` ，由 `function` 组成，以 `evt` 和 `configuration` 作为参数并执行操作。
| defaultStrategy | string | 要应用的默认策略的名称。名称应与“strategies”中的属性名称相同。|

在实例化该工具时，`activeStrategy` 设置为 `defaultStrategy` 。如果没有 `defaultStrategy` ，则使用 `strategies` 的第一个函数。策略机制是完全可选的。

`BaseTool` 具有函数 `applyActiveStrategy(evt，this.configuration)` 将执行`activeStrategy`，并返回该策略返回的任何值。

可以通过将 `tool.activeStrategy` 设置为新值来更改策略。可以通过调用 `setDefaultStrategy` 将策略重置为默认值。

使用策略机制的工具的一个简单示例是 [`rotate` Tool](https://github.com/cornerstonejs/cornerstoneTools/blob/master/src/tools/RotateTool.js).

## 混入 
mixin 是一组成员函数，可以在实例化时添加到工具中，从而赋予它额外的行为。mixin 存储在顶级的 `src/Mixins` 目录中。

### 向工具添加 mixin
通过将数组传递给工具构造函数的 `Mixins` 参数，可以将 mixin 添加到工具中。数组的每个元素必须是一个字符串，其中包含要应用的 mixin 的名称。

例如，如果一个工具只有 `Enabled` 或 `Disabled` 才有意义，那么可以将其命名为 `enabledOrDisabledBinaryTool`：

```js
export default class ExampleOverlayTool extends BaseTool {
  // Pass an array of mixins to the constructor.
  constructor(
    name = "ExampleOverlay",
    mixins = ["enabledOrDisabledBinaryTool"]
  ) {
    // Pass mixins to 'super' so that BaseTool's
    // Constructor can attach it to the class.
    super({
      name,
      mixins
    });
  }
}
```

由于这种混入，工具的[模式](index.md#模式)现在将在设置为「Active」时切换到「Enabled」，在设置为「Passive」时切换到「Disabled」

### 注册新的混入
要创建新的mixin，请在 `mixins` 目录中创建一个包含一些函数的新文件，并在“export”中创建一个包含这些函数的 `default` 对象，例如：

```js
// mixins/helloTool.js

function helloTool() {
  console.log("Hello Tool!");
}

export default {
  helloTool
};
```
然后在 `mixins/index.js` 文件内注册这个混入，这将允许通过其构造函数的 `mixins` 参数将其附加到工具：

```js
// mixins/index.js

// Other imports
import helloTool from "./helloTool.js";

export default {
  // Other registered functions...
  helloTool
};
```

## measurement-data
🚧 _This section needs content_
