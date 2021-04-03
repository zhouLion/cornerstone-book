---
description: Cornerstone developer guide - dependencies, creating releases
sidebar: auto
---

# 开发者指南
要想编辑或改造 Cornerstone，您将需要安装 [Node.js](http://nodejs.org)。npm 包管理器随着 Node.js 附带一起安装，你可以使用它们来安装项目依赖，并且运行常用的开发任务。

## 常用任务
#### 安装依赖
  ``` bash
  npm install
  ```
::: warning
安装/更新依赖项应该在git存储库的每次更新之后执行。如果不执行此操作，您可能会在开发过程中遇到问题。
:::

#### 运行生成
  ``` bash
  npm start
  ```
运行生成将同时创建这个库的压缩和未压缩的版本，以及它们各自的 source map 文件。

#### 在每次变更后自动运行生成
  ``` bash
  npm run watch
  ```
如果要调试问题或向源代码添加新功能，可以使用此命令。

#### 发布开发使用的文件服务
有很多方法运行一个简单的 HTTP 服务器。下面只举一个例，您也可以使用其它，如 `python -m simplehttpserver 8080`
  1. 安装 `http-server` 包:
  ``` bash
  npm install http-server -g
  ```

  ::: tip
  有时候您可能需要使用 sudo 去执行全局安装。
  :::

  2. 运行服务器
  ``` bash
  http-server
  ```
  3. 访问 [http://127.0.0.1:8080/example/index.html](http://127.0.0.1:8080/example/index.html) 在浏览器加载示例。

::: warning
要想在移动设备上访问这些，您需要运行 HTTP 服务器，然后通过电脑 IP 地址进行访问（比如：[http://192.168.1.11:8080/example/index.html](http://192.168.1.11:8080/example/index.html)）
:::

#### 运行和调试测试用例
``` bash
npm test
```
运行测试时，将创建一个“coverage”目录。请注意，因为它只是一个构建生成文件，所以在主代码库中不存在这个目录。通过浏览器打开“coverage/html/index.html”这个 HTML 文件（不必启用一个 HTTP 服务器），您能够查看和检查测试覆盖报告。

![Istanbul Code Coverage Report]($withBase/assets/img/istanbul-code-coverage.png)

当启动了测试之后，您还可以用浏览器访问 http://0.0.0.0:9876/debug ，通过 Karma 测试程序去进行测试的调试。请注意，这个 URL 不会立即生效，因为 `npm test` 命令的第一步是重新构建整个库。

#### 运行代码风格检测
``` bash
npm run eslint

# Or include automatic fixing with:
npm run eslint-fix

# Or automatically fix 'test' directory with:
npm run eslint-fix-test
```

Running the commands above will check the source code for linting issues.

#### Submitting changes through Pull Requests
If you have made a source code change that you think should be included in the main repository, you can contribute it back to the community by creating a [Pull Request](https://github.com/cornerstonejs/cornerstone/pulls). Please create an associated [Issue](https://github.com/cornerstonejs/cornerstone/issues) to describe the problem you are solving / feature you are adding so the library maintainers can give you feedback on whether or not these changes are appropriate for the repository. It's possible that your bug fix / new feature would be better implemented in another library (e.g. [Cornerstone Tools](https://github.com/chafey/cornerstoneTools/)). Please ensure that all tests pass and you have run ESLint and fixed any issues before submitting a pull request.

## Development Toolchain and Specifications
Cornerstone relies on a number of open source tools, components, and free services to ensure quality and stability. We want to ensure developers can work in modern JavaScript and that end users can use the tools in both current and legacy environments.

#### General
* [Babel](https://babeljs.io/) for transpilation from next generation JavaScript to more widely supported previous JavaScript versions.
* [WebPack](https://webpack.js.org/) to bundle the project
* [ESLint](https://eslint.org/) is used to enforce code styling and maintain quality
* [NPM](https://www.npmjs.com/) is used to host the installable package. See [Cornerstone Core on NPM](https://www.npmjs.com/package/cornerstone-core)
* [Semantic Versioning](https://semver.org/) is used for versioning of the library.
* [keep a changelog](https://keepachangelog.com) is used for the formatting of the changelog.

#### Testing
* [Karma](https://karma-runner.github.io/) is used as a test runner
* [Mocha](https://mochajs.org/) is used as a test framework
* [Chai](https://chaijs.com) is used for test assertions
* [Istanbul](https://istanbul.js.org/) is used to report code coverage
* [Travis CI](https://travis-ci.org/) is used to automatically run tests. See [Cornerstone Core on Travis CI](https://travis-ci.org/cornerstonejs/cornerstone)
* [Coveralls](https://coveralls.io/) is used to display code coverage following automatic tests. See [Cornerstone Core Coveralls Test Coverage](https://coveralls.io/github/cornerstonejs/cornerstone?branch=master)
* [Headless Chrome](https://github.com/GoogleChrome/puppeteer) is used for running headless tests.

#### Documentation
* [JSDoc](https://usejsdoc.org) formatting is used for documenting the source code.
* [documentation.js](https://documentation.js.org/) generates API documentation in Markdown from JSDoc annotations
* [GitBook](https://www.gitbook.com) transforms the Markdown documentation into HTML
* [Github Pages](https://pages.github.com/) hosts the documentation
* [Cloudflare](https://www.cloudflare.com/) is placed in front of Github Pages to serve the documentation over HTTPS.
* [Rawgit](https://rawgit.com/) is used to serve [Live Examples](https://rawgit.com/cornerstonejs/cornerstone/master/example/index.html) from the repository. We should transition this to be hosted with Github Pages as well.

## Writing tests
Here are some general notes on writing tests which may be useful:
* Tests must be in the 'test' directory. Please try to ensure they follow the 'src' directory layout for simplicity.
* Test file names must end in "\_test.js"
* The 'coverage_test.js' file ensures that all files are considered by Istanbul, so that code coverage reports can be used to explore the whole repository.
* Do not convert 'function ()' to arrow functions (i.e. '=> {}') within the 'it', 'should', or 'describe' blocks or Mocha will fail to run the tests properly.

## Releasing a new version
1. Make sure you have the latest commits from master
2. Determine the version change you need to make based on the scope of the changes since the last release.
3. Update the [changelog](https://github.com/cornerstonejs/cornerstone/blob/master/changelog.md)
  * Make sure to thank any code contributors!
4. Update the package and dependency versions in "package.json"
5. Update the build version:
  ``` bash
  npm run version
  ```
6. Run the build:
  ``` bash
  npm run build
  ```
7. Commit the changes
  ``` bash
  git commit -am "Bump version <version>"
  ```
8. Tag the commits with the version number and title
  ``` bash
  git tag -a "<version>" -m "Version <version>"
  ```
9. Push the commit with the version number to master
  ``` bash
  git push origin master --tags
  ```
10. Publish the release to NPM:
  ``` bash
  npm publish
  ```

## Updating Docs with gitbook
### If its your first time:
1. Make sure you have gitbook-cli installed globally, if not, run:
```bash
npm install -g gitbook-cli
```
2. Go inside the /docs folder and do:
``` bash
gitbook install
```

### Updating files and deploying
1. On the root folder run:
```bash
npm run docs
# It will serve the documentation on http://localhost:4000/
# with livereload 
```
2. Change the docs needed and make sure everything is correct
3. In order to deploy, run: 
```bash
npm run docs:deploy
```