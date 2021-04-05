# rendering-loop - 渲染循环

::: tip

Cornerstone 视口变动 (比如： 开窗、平移、缩放等等)，**Enabled Element - 激活元素** 是依靠基于 [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) 的 **渲染循环** 去做更新的。

:::

## 原理说明
在大多数现代浏览器中，**渲染循环** 使用 [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) (RAF)方法。如果RAF不可用，它将用一个16毫秒的定时器 -- `setTimeout` 和`clearTimeout` 进行微调。

在 Cornerstone 中渲染循环功能基于元素启用的。在 Cornerstone 中用 [`enable(element)`](../api#enable) 和 [`disable(element)`](../api#disable) 来启用和禁用元素。

## 工作流程
工作流成如下：

- 在 RAF 注册 draw() 回调；
- 在屏幕上显示帧之后，浏览器调用 draw()；
- 一旦调用
  - 如果元素计划重新呈现，则它将被呈现并重新向RAF注册 draw()；
  - 如果元素计划重新呈现，则不执行任何工作，回调将重新注册到 RAF；
  - 如果元素已经被禁用，回调返回是not重新注册结束渲染循环。

这意味着:

- cornerstone.draw() 和 cornerstone.invalidate() 不再触发立即渲染视图，而是将图像标记为需要重新呈现；
- 每个cornerstone 元素注册自己的RAF循环；
- 如果在一个60赫兹的系统中渲染时间超过16毫秒，则跳过渲染帧；
- 即使渲染时间远低于16ms，每个帧只能有一个渲染；
- 所有的交互(平移、缩放等)都被合并并呈现在下一帧中。
