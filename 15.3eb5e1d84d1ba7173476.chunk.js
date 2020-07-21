(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{306:function(n,a,e){"use strict";e.r(a),a.default='<p>Webpack 提供了多种接口来自定义编译过程。\n接口间存在一些重叠功能，例如配置选项可能通过 CLI 标志启用，\n而其他仅存在于单个接口。\n以下概念可以帮助你快速入门。</p>\n<h2 id="cli">CLI <a href="#cli" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>命令行界面（CLI），\n用于配置构建并与之交互。它在早期原型制作和性能分析的情况下特别有用。\n大多数情况下，\nCLI 只是用于通过配置文件和一些标志（例如<code>--env</code>）来启动进程。</p>\n<p><a href="/api/cli">了解更多关于 CLI 的知识！</a></p>\n<h2 id="module">模块 <a href="#module" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>使用 webpack 处理模块时，\n最重要的是理解不同的模块语法 --\n特别是受支持的<a href="/api/module-methods">方法</a>和<a href="/api/module-variables">变量</a>。</p>\n<p><a href="/api/module-methods">了解更多关于模块的知识！</a></p>\n<h2 id="node">Node <a href="#node" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>尽管大多数用户可以借助 CLI 和配置文件控制编译，\n通过 Node 接口可以实现更细粒度的控制。\n这包括传递多个配置、\n以程序的方式运行、查阅并收集统计信息。</p>\n<p><a href="/api/node">了解更多关于 Node API 的知识！</a></p>\n<h2 id="loaders">Loaders <a href="#loaders" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Loaders 用于对模块的源代码进行转换。\n它们被编写成一类将源代码作为参数传入，\n并将编译转换后的新版本代码传出的函数体。</p>\n<p><a href="/api/loaders">了解更多关于 loaders 的知识！</a></p>\n<h2 id="plugins">插件 <a href="#plugins" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>插件接口允许用户直接介入编译过程。\n插件可以在不同时期运行的生命周期挂钩上注册回调函数。\n在单个编译流程中，当每个钩子都被执行后，插件将拥有\n当前编译流程的完整访问权限。</p>\n<p><a href="/api/plugins">了解更多关于插件的知识！</a></p>\n'}}]);