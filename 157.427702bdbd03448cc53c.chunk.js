(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{453:function(n,s,a){"use strict";a.r(s),s.default='<p>Generate Chrome profile file which includes timings of plugins execution. Outputs <code>events.json</code> file by default. It is possible to provide custom file path using <code>outputPath</code> option.</p>\n<blockquote>\n<p>Note : ProfilingPlugin accepts only absolute paths.</p>\n</blockquote>\n<h2 id="options">Options <a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><code>outputPath</code>: An absolute path to a custom output file (json)</li>\n</ul>\n<h2 id="usage-default">Usage: default <a href="#usage-default" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>debug<span class="token punctuation">.</span>ProfilingPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="usage-custom-outputpath">Usage: custom <code>outputPath</code> <a href="#usage-custom-outputpath" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>debug<span class="token punctuation">.</span>ProfilingPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  outputPath<span class="token punctuation">:</span> <span class="token string">\'profiling/profileEvents.json\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>In order to view the profile file:</p>\n<ol>\n<li>Run webpack with <code>ProfilingPlugin</code>.</li>\n<li>Go to Chrome, open DevTools, and go to the <code>Performance</code> tab (formerly <code>Timeline</code>).</li>\n<li>Drag and drop generated file (<code>events.json</code> by default) into the profiler.</li>\n</ol>\n<p>It will then display timeline stats and calls per plugin!</p>\n'}}]);