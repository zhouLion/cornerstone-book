## 标绘-基类 BaseAnnotationTool

`BaseAnnotationTool` 是 `BaseTool` 的扩展类。为了开发工具以创建和修改标绘数据。

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
