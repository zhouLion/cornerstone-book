## 图像分割工具基础类 Segmentation Tool

"Segmentation Tools" 是 `BaseTool` 的派生类， that interact with the labelmap layer in some way other than by manually brushing, for which you would choose to derive from `BaseBrushTool`.

### Anatomy
图像分割工具是一个模块化设计模式，而非一个工具类，同时它是功能的组合，而非继承。

`SegmentationTool` 是通过一些组件组合而成的：

-  [Segmentation Mixin](../tool-mixins/index.md#segmentation-mixins) - The role of a segmentation mixin is to provide a delineation mechanism, which generates an `operationData` object which is passed to the active strategy alongside the cornerstone event.
- One or more `strategies` to be called when the segmentation mixin calls `this.applyActiveStrategy(evt, operationData)`.
- An (optional) set of `cursors` for `strategies`.

### Example

Below is an example of a Segementation Tool:

```js
/**
 * @public
 * @class CircleScissorsTool
 * @memberof Tools
 * @classdesc Tool for manipulating labelmap data using a circle.
 * @extends Tools.Base.BaseTool
 */
export default class CircleScissorsTool extends BaseTool {
  /** @inheritdoc */
  constructor(props = {}) {
    const defaultProps = {
      name: 'CircleScissors',
      strategies: {
        FILL_INSIDE: fillInsideCircle,
        FILL_OUTSIDE: fillOutsideCircle,
        ERASE_OUTSIDE: eraseOutsideCircle,
        ERASE_INSIDE: eraseInsideCircle,
      },
      cursors: {
        FILL_INSIDE: segCircleFillInsideCursor,
        FILL_OUTSIDE: segCircleFillOutsideCursor,
        ERASE_OUTSIDE: segCircleEraseOutsideCursor,
        ERASE_INSIDE: segCircleEraseInsideCursor,
      },
      defaultStrategy: 'FILL_INSIDE',
      supportedInteractionTypes: ['Mouse', 'Touch'],
      svgCursor: segCircleFillInsideCursor,
      mixins: ['circleSegmentationMixin'],
    };

    super(props, defaultProps);
  }
}
```

Lets analyse the components unique to segmentation tools:

#### Segmentation Mixins

```js
// ...
mixins: ['circleSegmentationMixin'];
// ...
```

The `mixins` prop can be used as with `BaseTool`, but at least one [segmentation mixin](../tool-mixins/index.md#segmentation-mixins) must be used. The job the segmentation mixin is to take user input through some means, implement `_applyStrategy`, and call the `strategy` with appropriate input.

#### Mixin-aware Strategies

```js
// ...
strategies: {
  FILL_INSIDE: fillInsideCircle,
  FILL_OUTSIDE: fillOutsideCircle,
  ERASE_OUTSIDE: eraseOutsideCircle,
  ERASE_INSIDE: eraseInsideCircle,
},
// ...
defaultStrategy: 'FILL_INSIDE',
// ...
```

The `strategies` prop defines a set of operations that can be executed at the end of delineation. The strategies implemented should expect `operationData` of the form provided by the segmentation mixin implemented by the Tool.
