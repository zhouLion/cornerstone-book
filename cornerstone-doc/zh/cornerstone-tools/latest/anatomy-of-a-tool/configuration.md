## configuration
配置项

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

> TODO: 在[`BaseTool`]（../tool types/index.md#base tool）上创建一个属性，该属性是工具内部使用的所有配置选项的字符串列表？然后在这里维护一个列表，指出每个属性的用途？

| 配置项                      | 鼠标 | 触控 | 标注 | 刷子 |
| --------------------------- | :---: | :---: | :--------: | :---: |
| `mouseButtonMask`           |   x   |       |            |       |
| `preventHandleOutsideImage` |       |       |     x      |       |
| `isTouchActive`             |       |   x   |            |       |
