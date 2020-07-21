(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{410:function(n,a,s){"use strict";s.r(a),a.default='<p><a href="https://npmjs.com/package/raw-loader"><img src="https://img.shields.io/npm/v/raw-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org/"><img src="https://img.shields.io/node/v/raw-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/raw-loader"><img src="https://david-dm.org/webpack-contrib/raw-loader.svg" alt="deps"></a>\n<a href="https://github.com/webpack-contrib/raw-loader/actions"><img src="https://github.com/webpack-contrib/raw-loader/workflows/raw-loader/badge.svg" alt="tests"></a>\n<a href="https://codecov.io/gh/webpack-contrib/raw-loader"><img src="https://codecov.io/gh/webpack-contrib/raw-loader/branch/master/graph/badge.svg" alt="coverage"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=raw-loader"><img src="https://packagephobia.now.sh/badge?p=raw-loader" alt="size"></a></p>\n<p>A loader for webpack that allows importing files as a String.</p>\n<h2 id="getting-started">Getting Started <a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>raw-loader</code>:</p>\n<pre><code class="hljs language-console">$ npm install raw-loader --save-dev\n</code></pre>\n<p>Then add the loader to your <code>webpack</code> config. For example:</p>\n<p><strong>file.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> txt <span class="token keyword">from</span> <span class="token string">\'./file.txt\'</span><span class="token punctuation">;</span></code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.txt$/i</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token string">\'raw-loader\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>And run <code>webpack</code> via your preferred method.</p>\n<h2 id="options">Options <a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n<thead>\n<tr>\n<th align="center">Name</th>\n<th align="center">Type</th>\n<th align="center">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><a href="#esmodule"><code>esModule</code></a></strong><p class="description mobile"><code>{Boolean}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Boolean}</code></td>\n<td align="center"><code>true</code></td>\n<td align="left">Uses ES modules syntax</td>\n</tr>\n</tbody>\n</table>\n<h3 id="esmodule"><code>esModule</code> <a href="#esmodule" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Boolean</code>\nDefault: <code>true</code></p>\n<p>By default, <code>raw-loader</code> generates JS modules that use the ES modules syntax.\nThere are some cases in which using ES modules is beneficial, like in the case of <a href="/plugins/module-concatenation-plugin/">module concatenation</a> and <a href="/guides/tree-shaking/">tree shaking</a>.</p>\n<p>You can enable a CommonJS module syntax using:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.txt$/i</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'raw-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              esModule<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="examples">Examples <a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="inline">Inline <a href="#inline" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> txt <span class="token keyword">from</span> <span class="token string">\'raw-loader!./file.txt\'</span><span class="token punctuation">;</span></code></pre>\n<p>Beware, if you already define loader(s) for extension(s) in <code>webpack.config.js</code> you should use:</p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> css <span class="token keyword">from</span> <span class="token string">\'!!raw-loader!./file.txt\'</span><span class="token punctuation">;</span> <span class="token comment">// Adding `!!` to a request will disable all loaders specified in the configuration</span></code></pre>\n<h2 id="contributing">Contributing <a href="#contributing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Please take a moment to read our contributing guidelines if you haven\'t yet done so.</p>\n<p><a href="https://github.com/webpack-contrib/raw-loader/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a></p>\n<h2 id="license">License <a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/raw-loader/blob/master/LICENSE">MIT</a></p>\n'}}]);