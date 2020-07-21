(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{394:function(n,s,a){"use strict";a.r(s),s.default='<p><a href="https://npmjs.com/package/eslint-loader"><img src="https://img.shields.io/npm/v/eslint-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org/"><img src="https://img.shields.io/node/v/eslint-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/eslint-loader"><img src="https://david-dm.org/webpack-contrib/eslint-loader.svg" alt="deps"></a>\n<a href="https://github.com/webpack-contrib/eslint-loader/actions"><img src="https://github.com/webpack-contrib/eslint-loader/workflows/eslint-loader/badge.svg" alt="tests"></a>\n<a href="https://codecov.io/gh/webpack-contrib/eslint-loader"><img src="https://codecov.io/gh/webpack-contrib/eslint-loader/branch/master/graph/badge.svg" alt="coverage"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://badges.gitter.im/webpack/webpack.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=eslint-loader"><img src="https://packagephobia.now.sh/badge?p=eslint-loader" alt="size"></a></p>\n<blockquote>\n<p>用于 Webpack 的 ESlint loader</p>\n</blockquote>\n<h2 id="install">安装 <a href="#install" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> eslint-loader --save-dev</code></pre>\n<p><strong>注意</strong>：如果还未安装 <code>eslint</code>，请先从 npm 进行安装：</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> eslint --save-dev</code></pre>\n<h2 id="usage">用法 <a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>在你的 webpack 设置中添加下列配置：</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          <span class="token comment">// eslint options (if necessary)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>当使用转译 loaders（如 <code>babel-loader</code>）时，请确保它们的顺序正确（从下到上）。否则，文件将会在 <code>babel-loader</code> 转译后被读取：</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'babel-loader\'</span><span class="token punctuation">,</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>安全起见，你可以使用 <code>enforce: \'pre\'</code> 片段来处理源文件，确保其没有被其他 loader（例如 <code>babel-loader</code>）修改：</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        enforce<span class="token punctuation">:</span> <span class="token string">\'pre\'</span><span class="token punctuation">,</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'babel-loader\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="options">选项 <a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>你可以通过标准 webpack <a href="/configuration/module/#useentry">loader 选项</a>传递<a href="http://eslint.org/docs/developer-guide/nodejs-api#cliengine"> eslint 选项</a>。</p>\n<p><strong>注意</strong>：你提供的配置选项将被传递给<code>CLIEngine</code>。这是与在 <code>package.json</code> 或 <code>.eslintrc</code> 中指定的选项不同的一组选项。查阅 <a href="http://eslint.org/docs/developer-guide/nodejs-api#cliengine">eslint 文档</a>以获取更多相关信息。</p>\n<h3 id="cache"><code>cache</code> <a href="#cache" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li>Type: <code>Boolean|String</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>此选项启用后，会将 lint 后的结果缓存至文件中。这对于在完整构建时减少 lint 所花费的时间上非常有用。</p>\n<p>这可以是一个 <code>boolean</code> 值，也可以是缓存目录路径（如：<code>\'./.eslint-loader-cache\'</code>）。</p>\n<p>如果使用 <code>cache: true</code> 的话，缓存将被写入 <code>./node_modules/.cache/eslint-loader</code> 目录，这是推荐的用法。</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          cache<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="eslintpath"><code>eslintPath</code> <a href="#eslintpath" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li>Type: <code>String</code></li>\n<li>Default: <code>eslint</code></li>\n</ul>\n<p>用于 linting 的 <code>eslint</code> 实例路径。如果 <code>eslintPath</code> 是官方 eslint 的文件夹，或已经指定了 <code>formatter</code> 选项，此时你无需安装 <code>eslint</code>。</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          eslintPath<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'reusable-eslint\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="fix"><code>fix</code> <a href="#fix" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>此选项将会启用 <a href="http://eslint.org/docs/user-guide/command-line-interface#fix">ESLint 自动修复功能</a>.</p>\n<p><strong>请注意: 该选项会更改源文件。</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          fix<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="formatter"><code>formatter</code> <a href="#formatter" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li>Type: <code>String|Function</code></li>\n<li>Default: <code>stylish</code></li>\n</ul>\n<p>该选项接受一个具有一个参数的函数：eslint 信息（对象）数组。该函数必须以字符串形式返回输出。你可以使用官方的 <a href="https://eslint.org/docs/user-guide/formatters/">eslint 格式化程序</a>。</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          <span class="token comment">// several examples !</span>\n\n          <span class="token comment">// default value</span>\n          formatter<span class="token punctuation">:</span> <span class="token string">\'stylish\'</span><span class="token punctuation">,</span>\n\n          <span class="token comment">// community formatter</span>\n          formatter<span class="token punctuation">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'eslint-friendly-formatter\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n          <span class="token comment">// custom formatter</span>\n          formatter<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>results<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// `results` format is available here</span>\n            <span class="token comment">// http://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles()</span>\n\n            <span class="token comment">// you should return a string</span>\n            <span class="token comment">// DO NOT USE console.*() directly !</span>\n            <span class="token keyword">return</span> <span class="token string">\'OUTPUT\'</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="errors-and-warning">错误与警告 <a href="#errors-and-warning" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><strong>默认情况下，加载程序将根据 eslint 错误/警告计数自动调整错误报告。</strong> 你仍然可以通过使用 <code>emitError</code> <strong>或</strong> <code>emitWarning</code> 选项来强制启用这种行为</p>\n<h4 id="emiterror"><code>emitError</code> <a href="#emiterror" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>如果此选项设置为 <code>true</code>，将始终返回错误。</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          emitError<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h4 id="emitwarning"><code>emitWarning</code> <a href="#emitwarning" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>如果此选项设置为 <code>true</code>，将会始终返回警告。<strong>如果你正在使用热模块替换，你可能希望在开发中启用此功能，否则在出现 eslint 错误时将会跳过此更新。</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          emitWarning<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h4 id="failonerror"><code>failOnError</code> <a href="#failonerror" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>如果此选项被设定为 <code>true</code>，在出现任何错误时都会导致模块构建失败。</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          failOnError<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h4 id="failonwarning"><code>failOnWarning</code> <a href="#failonwarning" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>如果此选项被设定为 <code>true</code>，在出现任何警告时都会导致模块构建失败。</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          failOnWarning<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h4 id="quiet"><code>quiet</code> <a href="#quiet" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>如果此选项被设定为 <code>true</code>，警告会被忽略，且只会处理和报告错误。</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          quiet<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h4 id="outputreport"><code>outputReport</code> <a href="#outputreport" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>Type: <code>Boolean|Object</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>将错误的输出写入文件，例如用于在 Jenkins CI 上进行报告的 checkstyle xml 文件。</p>\n<p><code>filePath</code> 是一个绝对路径，或相对于 webpack 配置 <code>output.path</code> 的相对路径。你可以为输出文件传递不同的 <code>formatter</code>，如果没有传入，默认/配置后的 formatter 将会被启用。</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          outputReport<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            filePath<span class="token punctuation">:</span> <span class="token string">\'checkstyle.xml\'</span><span class="token punctuation">,</span>\n            formatter<span class="token punctuation">:</span> <span class="token string">\'checkstyle\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="gotchas">陷阱 <a href="#gotchas" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="noemitonerrorsplugin">NoEmitOnErrorsPlugin <a href="#noemitonerrorsplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>当模式未被配置，或运行在生产环境下时，会在 webpack4 中自动启用 <code>NoEmitOnErrorsPlugin</code>。因此，无论 <code>eslint-loader</code> 中使用了什么错误配置，即使 ESLint 抛出警告也会导致构建失败，除非启用了 <code>emitWarning</code>。</p>\n<h3 id="defining-configfile-or-using-eslint--c-patheslintrc">定义 <code>configFile</code> 或使用 <code>eslint -c path/.eslintrc</code> <a href="#defining-configfile-or-using-eslint--c-patheslintrc" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>请记住，当你定义 <code>configFile</code> 时，<code>eslint</code> 不会在需要 lint 的文件目录中自动查找 <code>.eslintrc</code>。更多信息请参阅 eslint 官方文档中的此章节<a href="http://eslint.org/docs/user-guide/configuring#using-configuration-files"><em>使用配置文件</em></a>，以及此 issue <a href="https://github.com/webpack-contrib/eslint-loader/issues/129">#129</a>。</p>\n<h2 id="changelog">Changelog <a href="#changelog" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/eslint-loader/blob/master/CHANGELOG.md">Changelog</a></p>\n<h2 id="license">License <a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/eslint-loader/blob/master/LICENSE">MIT</a></p>\n'}}]);