(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{405:function(n,s,a){"use strict";a.r(s),s.default='<p><a href="https://npmjs.com/package/mocha-loader"><img src="https://img.shields.io/npm/v/mocha-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org/"><img src="https://img.shields.io/node/v/mocha-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/mocha-loader"><img src="https://david-dm.org/webpack-contrib/mocha-loader.svg" alt="deps"></a>\n<a href="https://github.com/webpack-contrib/mocha-loader/actions"><img src="https://github.com/webpack-contrib/mocha-loader/workflows/mocha-loader/badge.svg" alt="tests"></a>\n<a href="https://codecov.io/gh/webpack-contrib/mocha-loader"><img src="https://codecov.io/gh/webpack-contrib/mocha-loader/branch/master/graph/badge.svg" alt="coverage"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://badges.gitter.im/webpack/webpack.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=mocha-loader"><img src="https://packagephobia.now.sh/badge?p=mocha-loader" alt="size"></a></p>\n<p>Allows <a href="https://mochajs.org/">Mocha</a> tests to be loaded and run via webpack.</p>\n<h2 id="getting-started">Getting Started <a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>mocha-loader</code> and <code>mocha</code>:</p>\n<pre><code class="hljs language-console">npm install --save-dev mocha-loader mocha\n</code></pre>\n<p>Then add the plugin to your <code>webpack</code> config. For example:</p>\n<p><strong>file.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> test <span class="token keyword">from</span> <span class="token string">\'./test.js\'</span><span class="token punctuation">;</span></code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'./entry.js\'</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> __dirname<span class="token punctuation">,</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'bundle.js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/test\\.js$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token string">\'mocha-loader\'</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>And run <code>webpack</code> via your preferred method.</p>\n<p>Alternative usage (without configuration):</p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> test <span class="token keyword">from</span> <span class="token string">\'mocha-loader!./test.js\'</span><span class="token punctuation">;</span></code></pre>\n<p>No options for loader.</p>\n<h2 id="examples">Examples <a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="basic">Basic <a href="#basic" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><strong>file.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></code></pre>\n<p><strong>test.js</strong></p>\n<pre><code class="hljs language-js"><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'Test\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should succeed\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should fail\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Failed\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should randomly fail\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./module\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Randomly failed\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="contributing">Contributing <a href="#contributing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Please take a moment to read our contributing guidelines if you haven\'t yet done so.</p>\n<p><a href="https://github.com/webpack-contrib/mocha-loader/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a></p>\n<h2 id="license">License <a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/mocha-loader/blob/master/LICENSE">MIT</a></p>\n'}}]);