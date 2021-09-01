(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{483:function(e,t,a){"use strict";a.r(t);var s=a(49),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"developer-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developer-guide"}},[e._v("#")]),e._v(" Developer Guide")]),e._v(" "),a("p",[e._v("In order to edit and rebuild Cornerstone, you will need to install "),a("a",{attrs:{href:"http://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),a("OutboundLink")],1),e._v(". Once you have Node.js and the npm package manager installed, you can use them to install the dependencies for the project and run common development tasks.")]),e._v(" "),a("h2",{attrs:{id:"common-tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-tasks"}},[e._v("#")]),e._v(" Common Tasks")]),e._v(" "),a("h4",{attrs:{id:"installing-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-dependencies"}},[e._v("#")]),e._v(" Installing dependencies")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),a("p",[a("strong",[e._v("Note")]),e._v(": Installing/updating dependencies should be performed after every update from the git repository. If this is not performed, you may run into issues during development.")]),e._v(" "),a("h4",{attrs:{id:"running-the-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-the-build"}},[e._v("#")]),e._v(" Running the build")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" start\n")])])]),a("p",[e._v("Running the build will create both the minified and un-minified versions of the library, as well as their associated source maps.")]),e._v(" "),a("h4",{attrs:{id:"automatically-running-the-build-after-each-source-change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatically-running-the-build-after-each-source-change"}},[e._v("#")]),e._v(" Automatically running the build after each source change")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("watch")]),e._v("\n")])])]),a("p",[e._v("This command can be used if you want to debug issues or add new features to the source code.")]),e._v(" "),a("h4",{attrs:{id:"serving-files-for-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serving-files-for-development"}},[e._v("#")]),e._v(" Serving files for development")]),e._v(" "),a("p",[e._v("There are many ways of running simple HTTP servers. This is just one method, you can also use e.g. 'python -m simplehttpserver 8080'.")]),e._v(" "),a("ol",[a("li",[e._v("Install the 'http-server' package:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("``` bash\nnpm install http-server -g\n```\n")])])]),a("p",[a("strong",[e._v("Note")]),e._v(": you may need to use sudo to install globally")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Run the server")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("``` bash\nhttp-server\n```\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Navigate to http://127.0.0.1:8080/example/index.html to load the examples in a browser.")])]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" If you want to use them on a mobile device, start the HTTP server and navigate to the IP of your computer (e.g. http://192.168.1.11:8080/example/index.html)")]),e._v(" "),a("h4",{attrs:{id:"running-and-debugging-the-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-and-debugging-the-tests"}},[e._v("#")]),e._v(" Running and debugging the tests")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n")])])]),a("p",[e._v("When you run the tests a 'coverage' directory will be created. Note that this directory does not exist in the main repository, since it is solely a build artifact. If you open the HTML file under  'coverage/html/index.html' with a web browser (no HTTP server is required), you will be able to view and examine the test coverage report.")]),e._v(" "),a("p",[a("img",{attrs:{src:"$withBase/assets/img/istanbul-code-coverage.png",alt:"Istanbul Code Coverage Report"}})]),e._v(" "),a("p",[e._v("Once you have started the tests, you can also navigate to http://0.0.0.0:9876/debug within a web browser to debug the tests through the Karma test runner. Note that this URL does not work immediately, since the first step in "),a("code",[e._v("npm test")]),e._v(" is to rebuild the library.")]),e._v(" "),a("h4",{attrs:{id:"running-code-linting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-code-linting"}},[e._v("#")]),e._v(" Running code linting")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run eslint\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Or include automatic fixing with:")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run eslint-fix\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Or automatically fix 'test' directory with:")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run eslint-fix-test\n")])])]),a("p",[e._v("Running the commands above will check the source code for linting issues.")]),e._v(" "),a("h4",{attrs:{id:"submitting-changes-through-pull-requests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submitting-changes-through-pull-requests"}},[e._v("#")]),e._v(" Submitting changes through Pull Requests")]),e._v(" "),a("p",[e._v("If you have made a source code change that you think should be included in the main repository, you can contribute it back to the community by creating a "),a("a",{attrs:{href:"https://github.com/cornerstonejs/cornerstone/pulls",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pull Request"),a("OutboundLink")],1),e._v(". Please create an associated "),a("a",{attrs:{href:"https://github.com/cornerstonejs/cornerstone/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue"),a("OutboundLink")],1),e._v(" to describe the problem you are solving / feature you are adding so the library maintainers can give you feedback on whether or not these changes are appropriate for the repository. It's possible that your bug fix / new feature would be better implemented in another library (e.g. "),a("a",{attrs:{href:"https://github.com/chafey/cornerstoneTools/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cornerstone Tools"),a("OutboundLink")],1),e._v("). Please ensure that all tests pass and you have run ESLint and fixed any issues before submitting a pull request.")]),e._v(" "),a("h2",{attrs:{id:"development-toolchain-and-specifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development-toolchain-and-specifications"}},[e._v("#")]),e._v(" Development Toolchain and Specifications")]),e._v(" "),a("p",[e._v("Cornerstone relies on a number of open source tools, components, and free services to ensure quality and stability. We want to ensure developers can work in modern JavaScript and that end users can use the tools in both current and legacy environments.")]),e._v(" "),a("h4",{attrs:{id:"general"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[e._v("#")]),e._v(" General")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Babel"),a("OutboundLink")],1),e._v(" for transpilation from next generation JavaScript to more widely supported previous JavaScript versions.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebPack"),a("OutboundLink")],1),e._v(" to bundle the project")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ESLint"),a("OutboundLink")],1),e._v(" is used to enforce code styling and maintain quality")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NPM"),a("OutboundLink")],1),e._v(" is used to host the installable package. See "),a("a",{attrs:{href:"https://www.npmjs.com/package/cornerstone-core",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cornerstone Core on NPM"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Semantic Versioning"),a("OutboundLink")],1),e._v(" is used for versioning of the library.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://keepachangelog.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("keep a changelog"),a("OutboundLink")],1),e._v(" is used for the formatting of the changelog.")])]),e._v(" "),a("h4",{attrs:{id:"testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://karma-runner.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Karma"),a("OutboundLink")],1),e._v(" is used as a test runner")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://mochajs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mocha"),a("OutboundLink")],1),e._v(" is used as a test framework")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://chaijs.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chai"),a("OutboundLink")],1),e._v(" is used for test assertions")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://istanbul.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Istanbul"),a("OutboundLink")],1),e._v(" is used to report code coverage")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://travis-ci.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Travis CI"),a("OutboundLink")],1),e._v(" is used to automatically run tests. See "),a("a",{attrs:{href:"https://travis-ci.org/cornerstonejs/cornerstone",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cornerstone Core on Travis CI"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://coveralls.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Coveralls"),a("OutboundLink")],1),e._v(" is used to display code coverage following automatic tests. See "),a("a",{attrs:{href:"https://coveralls.io/github/cornerstonejs/cornerstone?branch=master",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cornerstone Core Coveralls Test Coverage"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/GoogleChrome/puppeteer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Headless Chrome"),a("OutboundLink")],1),e._v(" is used for running headless tests.")])]),e._v(" "),a("h4",{attrs:{id:"documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[e._v("#")]),e._v(" Documentation")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://usejsdoc.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSDoc"),a("OutboundLink")],1),e._v(" formatting is used for documenting the source code.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://documentation.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation.js"),a("OutboundLink")],1),e._v(" generates API documentation in Markdown from JSDoc annotations")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.gitbook.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitBook"),a("OutboundLink")],1),e._v(" transforms the Markdown documentation into HTML")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github Pages"),a("OutboundLink")],1),e._v(" hosts the documentation")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloudflare"),a("OutboundLink")],1),e._v(" is placed in front of Github Pages to serve the documentation over HTTPS.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://rawgit.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rawgit"),a("OutboundLink")],1),e._v(" is used to serve "),a("RouterLink",{attrs:{to:"/example/index.html"}},[e._v("Live Examples")]),e._v(" from the repository. We should transition this to be hosted with Github Pages as well.")],1)]),e._v(" "),a("h2",{attrs:{id:"writing-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-tests"}},[e._v("#")]),e._v(" Writing tests")]),e._v(" "),a("p",[e._v("Here are some general notes on writing tests which may be useful:")]),e._v(" "),a("ul",[a("li",[e._v("Tests must be in the 'test' directory. Please try to ensure they follow the 'src' directory layout for simplicity.")]),e._v(" "),a("li",[e._v('Test file names must end in "_test.js"')]),e._v(" "),a("li",[e._v("The 'coverage_test.js' file ensures that all files are considered by Istanbul, so that code coverage reports can be used to explore the whole repository.")]),e._v(" "),a("li",[e._v("Do not convert 'function ()' to arrow functions (i.e. '=> {}') within the 'it', 'should', or 'describe' blocks or Mocha will fail to run the tests properly.")])]),e._v(" "),a("h2",{attrs:{id:"releasing-a-new-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#releasing-a-new-version"}},[e._v("#")]),e._v(" Releasing a new version")]),e._v(" "),a("ol",[a("li",[e._v("Make sure you have the latest commits from master")]),e._v(" "),a("li",[e._v("Determine the version change you need to make based on the scope of the changes since the last release.")]),e._v(" "),a("li",[e._v("Update the "),a("a",{attrs:{href:"https://github.com/cornerstonejs/cornerstone/blob/master/changelog.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("changelog"),a("OutboundLink")],1)])]),e._v(" "),a("ul",[a("li",[e._v("Make sure to thank any code contributors!")])]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v('Update the package and dependency versions in "package.json"')]),e._v(" "),a("li",[e._v("Update the build version:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run version\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Run the build:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n")])])]),a("ol",{attrs:{start:"7"}},[a("li",[e._v("Commit the changes")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -am "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Bump version <version>"')]),e._v("\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[e._v("Tag the commits with the version number and title")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" tag -a "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<version>"')]),e._v(" -m "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Version <version>"')]),e._v("\n")])])]),a("ol",{attrs:{start:"9"}},[a("li",[e._v("Push the commit with the version number to master")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin master --tags\n")])])]),a("ol",{attrs:{start:"10"}},[a("li",[e._v("Publish the release to NPM:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" publish\n")])])]),a("h2",{attrs:{id:"updating-docs-with-gitbook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-docs-with-gitbook"}},[e._v("#")]),e._v(" Updating Docs with gitbook")]),e._v(" "),a("h3",{attrs:{id:"if-its-your-first-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-its-your-first-time"}},[e._v("#")]),e._v(" If its your first time:")]),e._v(" "),a("ol",[a("li",[e._v("Make sure you have gitbook-cli installed globally, if not, run:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g gitbook-cli\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Go inside the /docs folder and do:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("gitbook "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),a("h3",{attrs:{id:"updating-files-and-deploying"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-files-and-deploying"}},[e._v("#")]),e._v(" Updating files and deploying")]),e._v(" "),a("ol",[a("li",[e._v("On the root folder run:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run docs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# It will serve the documentation on http://localhost:4000/")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# with livereload ")]),e._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Change the docs needed and make sure everything is correct")]),e._v(" "),a("li",[e._v("In order to deploy, run:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run docs:deploy\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);