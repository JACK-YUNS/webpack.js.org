(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{392:function(n,a,s){"use strict";s.r(a),a.default='<p><a href="https://npmjs.com/package/coffee-loader"><img src="https://img.shields.io/npm/v/coffee-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org/"><img src="https://img.shields.io/node/v/coffee-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/coffee-loader"><img src="https://david-dm.org/webpack-contrib/coffee-loader.svg" alt="deps"></a>\n<a href="https://github.com/webpack-contrib/coffee-loader/actions"><img src="https://github.com/webpack-contrib/coffee-loader/workflows/coffee-loader/badge.svg" alt="tests"></a>\n<a href="https://codecov.io/gh/webpack-contrib/coffee-loader"><img src="https://codecov.io/gh/webpack-contrib/coffee-loader/branch/master/graph/badge.svg" alt="coverage"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://badges.gitter.im/webpack/webpack.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=coffee-loader"><img src="https://packagephobia.now.sh/badge?p=coffee-loader" alt="size"></a></p>\n<p>Compile <a href="https://coffeescript.org/">CoffeeScript</a> to JavaScript.</p>\n<h2 id="getting-started">起步 <a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>安装 <code>coffeescript</code> 和 <code>coffee-loader</code>：</p>\n<pre><code class="hljs language-console">npm install --save-dev coffeescript coffee-loader\n</code></pre>\n<p>然后添加 plugin 到 <code>webpack</code> 配置文件. 例：</p>\n<p><strong>file.coffee</strong></p>\n<pre><code class="hljs language-coffee"># 任务：\nnumber   = 42\nopposite = true\n\n# 条件：\nnumber = -42 if opposite\n\n# 函数：\nsquare = (x) -> x * x\n\n# 数组：\nlist = [1, 2, 3, 4, 5]\n\n# 对象：\nmath =\n  root:   Math.sqrt\n  square: square\n  cube:   (x) -> x * square x\n\n# Splats：\nrace = (winner, runners...) ->\n  print winner, runners\n\n# 存在性：\nalert "I knew it!" if elvis?\n\n# 数组推导（comprehensions）：\ncubes = (math.cube num for num in list)\n</code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.coffee$/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'coffee-loader\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>替代方案：</p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> coffee <span class="token keyword">from</span> <span class="token string">\'coffee-loader!./file.coffee\'</span><span class="token punctuation">;</span></code></pre>\n<p>然后按偏好运行 <code>webpack</code></p>\n<h2 id="options">选项 <a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>类型：<code>Object</code>\n默认：<code>{ bare: true }</code></p>\n<p>所有 coffeescript 选项的文档 <a href="https://coffeescript.org/#nodejs-usage">点击查看</a>.</p>\n<p><code>transpile</code> 选项的文档 <a href="https://coffeescript.org/#transpilation">点击查看</a>.</p>\n<blockquote>\n<p>ℹ️ <code>sourceMap</code> 选项从 <code>compiler.devtool</code> 中选取一个值作为默认值。</p>\n<p>ℹ️ <code>filename</code> 选项从 webpack loader API 中选取一个值。 选项值将被忽略。</p>\n</blockquote>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.coffee$/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'coffee-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          bare<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n          transpile<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            presets<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'@babel/env\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="examples">示例 <a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="coffeescript-and-babel">CoffeeScript 与 Babel <a href="#coffeescript-and-babel" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>来自 CoffeeScript 2 的文档：</p>\n<blockquote>\n<p>CoffeeScript 2 使用最新的句法生成 JavaScript。\n代码运行所在的运行时或浏览器有可能无法支持全部相关句法。\n这种情况下，新的 JavaScript 句法将被转换为旧的 JavaScript 句法，以便在较低版本 Node 环境或浏览器中运行这些代码。比如将 { a } = obj 转换为 a = obj.a.\n这个转换的过程是由一些诸如 Babel, Bublé or Traceur Compiler 等转换工具完成的。</p>\n</blockquote>\n<p>安装 <code>@babel/core</code> 和 <code>@babel/preset-env</code>  然后创建配置文件：</p>\n<pre><code class="hljs language-console">npm install --save-dev @babel/core @babel/preset-env\necho \'{ "presets": ["@babel/env"] }\' > .babelrc\n</code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.coffee$/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'coffee-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          transpile<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            presets<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'@babel/env\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="literate-coffeescript">Literate CoffeeScript <a href="#literate-coffeescript" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>开启 Literate CoffeeScript 时需要设置：</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.coffee$/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'coffee-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          literate<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="contributing">贡献 <a href="#contributing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>如果您尚未了解，建议您阅读以下贡献指引。</p>\n<p><a href="https://github.com/webpack-contrib/coffee-loader/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a></p>\n<h2 id="license">许可 <a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/coffee-loader/blob/master/LICENSE">MIT</a></p>\n'}}]);