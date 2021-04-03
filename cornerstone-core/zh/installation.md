# 安装

## 直接下载/CDN
[https://unpkg.com/cornerstone-core](https://unpkg.com/cornerstone-core)

::: tip
[Unpkg.com](https://unpkg.com) 提供了一个基于 npm 的 CDN 链接。上面的链接将永远指向于在 npm 上发行的最新版本。你也可以像这样指定的链接形式去指定特定的版本 `https://unpkg.com/cornerstone-core@2.0.0`.
:::

``` html
<!-- 下载在本地，通过相对路径引入 -->
<script src="/path/to/cornerstone.js"></script>

<!-- 直接 CDN 引入 -->
<script src="https://unpkg.com/cornerstone-core"></script>
```
- - -


## NPM
``` bash
npm install cornerstone-core --save
```
可以在模块系统中通过这样引入 `cornerstone`：
``` js
import * as cornerstone from 'cornerstone-core'
```
如果全局使用 `<script>` 标签引入了，就不需要再 `import` 了。

- - -

## 开发构建
如果想使用最新的开发构建版本，您就必须直接从 GitHub 上克隆并自己构建 `cornerstone`。
``` bash
git clone https://github.com/cornerstonejs/cornerstone.git node_modules/cornerstone
cd node_modules/cornerstone
npm install
npm run build
```
