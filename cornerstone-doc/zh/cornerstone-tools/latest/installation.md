# 安装

## 兼容性

CornerstoneTools.js 不支持 IE8 及其以下的版本，因为它使用了 IE8 不兼容且无法被模拟的 ECMAScript 新特性。它支持 [遵循 ECMAScript 5 标准的现代浏览器](https://caniuse.com/#feat=es5).

## 发布通知
我们是一个小团队，所以我们的文档可能并不总是100%准确。请随时创建一个 issue 和/或 PR 以更新我们的文件。

- 最新稳定版本 `@latest` 2.3.9
- 最新测试版本: `@next` 3.0.0-b.1003

你可以点击 [the cornerstone-tools npm listing](https://www.npmjs.com/package/cornerstone-tools) 的 `versions` 栏，找到标签对应的最新版本。

在 Github 上有每个版本详细的发布公告。

## 直接使用 `<script>` 引入
下载下来，然后通过 script 标签引入。`CornerstoneTools` 将被注册为全局变量。

## CDN
我们推荐指定你可以手动更新的版本号

```html
<script src="https://cdn.jsdelivr.net/npm/cornerstone-tools@next"></script>
```
你可以访问 NPM 包的源码，地址是 [cdn.jsdelivr.net/npm/cornerstone-tools](https://cdn.jsdelivr.net/npm/cornerstone-tools@next).

CornerstoneTools.js 还可以在这里获得 [unpkg](https://unpkg.com/cornerstone-tools).

## NPM
在构建大型项目的时候，推荐使用 NPM 作为安装方式。 它与 [Webpack](https://webpack.js.org/) 或者 [Browserify](http://browserify.org/) 配合起来非常契合。

```shell
# latest stable
npm install --save cornerstone-tools

# latest @next (pre-release)
npm install --save cornerstone-tools@next
```

## 不同构建说明

在 NPM 包的 `dist/` [目录](https://cdn.jsdelivr.net/npm/cornerstone-tools/dist/) 你会发现好几份不同的 cornerstone-tools 构建输出文件。以下是这些不同文件的概述:

| Type             | Bundle                        | Available       |
| ---------------- | ----------------------------- | --------------- |
| UMD              | `cornerstone-tools.js`        | Yes             |
| UMD (production) | `cornerstone-tools.min.js`    | Yes             |
| CommonJS         | `cornerstone-tools.common.js` | _(coming soon)_ |
| ES Module        | `cornerstone-tools.esm.js`    | _(coming soon)_ |

## Terms

- [UMD](https://github.com/umdjs/umd): UMD 包可以直接在浏览器上通过 `<script>` 引入使用。 在 jsDelivr CDN at https://cdn.jsdelivr.net/npm/cornerstone-tools 的默认文件就是 UMD 包 (cornerstone-tools.js).

- [CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1): CommonJS 包 are intended for use with older bundlers like browserify or webpack 1. The default file for these bundlers (`pkg.main`) is the CommonJS build (`cornerstone-tools.common.js`).

- [ES Module](http://exploringjs.com/es6/ch_modules.html): ES module builds are intended for use with modern bundlers like webpack 2+ or rollup. The default file for these bundlers (`pkg.module`) is the ES Module build (`cornerstone-tools.esm.js`).

## Dev Build

1. Update dependencies (after each pull):

```bash
npm install
```

2. Running the build:

```bash
npm start
```

3. Run the local development server:

```bash
npm run start:dev
```
