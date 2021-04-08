# Image Cache - 图像缓存

::: tip

Cornerstone 将 **[Images - 图像](../concepts/images.md)** 保存在**图像缓存** 里，以跟踪内存的使用情况

:::

当图像 [Image Load Object - 加载对象](../api.md#imageloadobject) 中的 `Promise` 解析时，生成的图像通过 Cornerstone 存储在图像缓存模块中的对象中。它被设置为作为最近最少使用的（LRU）缓存运行。

最初，调用 [loadImage](../api.md#loadimage) 时，缓存中会填充一个占位符，用于记录大小为0的缓存图像。当跟踪图像加载的 `Promise` 被 `resolve` 后，记录的大小将更新为以字节为单位的实际大小。如果加载失败，占位符将从缓存中删除。

开发者可以：
  * 设置最大缓存字节, 默认 1 GB ([setMaximumSizeBytes](../api.md#setmaximumsizebytes))
  * 手动释放所有图像的缓存 ([purgeCache](../api.md#purgecache))
  * 获取缓存简要信息 ([getCacheInfo](../api.md#getcacheinfo))
  * 更改特定图像的录入缓存大小 ([changeImageIdCacheSize](../api.md#changeimageidcachesize))
