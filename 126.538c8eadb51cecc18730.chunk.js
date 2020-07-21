(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{422:function(e,n,o){"use strict";o.r(n),n.default='<p>本指南目标是帮助你在使用webpack的时候直接迁移到 webpack 5。如果你使用更高层次的运行webpack的工具，请\n参考工具有关迁移的指引。</p>\n<h2 id="preparations">准备工作 <a href="#preparations" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>webpack 5 要求至少 Node.js 10.13.0 (LTS)。</p>\n<blockquote class="tip">\n<p>使用更新的 Node.js 版本能够改善构建性能。</p>\n</blockquote>\n<h3 id="upgrade-webpack-and-its-dependencies">升级 webpack 以及它的依赖 <a href="#upgrade-webpack-and-its-dependencies" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<h4 id="upgrade-webpack-4-to-the-latest-available-version">将 webpack 4 升级到最新的可用版本 <a href="#upgrade-webpack-4-to-the-latest-available-version" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>当使用 webpack >= 4 的版本, 升级到最新的 webpack 4 版本不需要额外的指南。\n如果你使用低于 4 的 webpack 版本，请参考 <a href="/migrate/4/">webpack 4 迁移指南</a>。</p>\n<h4 id="upgrade-webpack-cli-to-the-latest-available-version-when-used">将 webpack-cli 升级到最新的可用版本 (当有使用的时候) <a href="#upgrade-webpack-cli-to-the-latest-available-version-when-used" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<h4 id="upgrade-all-used-plugins-and-loaders-to-the-latest-available-version">将所有使用的插件与加载器升级到最新的可用版本 <a href="#upgrade-all-used-plugins-and-loaders-to-the-latest-available-version" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>有些插件和加载器可能有一个 beta 版本，必须被使用以适配 webpack5。</p>\n<blockquote class="warning">\n<p>当你升级到重大版本的时候，请参考相关插件与加载器迁移指南。</p>\n</blockquote>\n<blockquote class="warning">\n<p> ExtendedAPIPlugin 已经被去除，它的逻辑已经被整合到 <a href="https://github.com/webpack/webpack/blob/master/lib/APIPlugin.js"><code>APIPlugin</code></a>当中。</p>\n</blockquote>\n<h4 id="make-sure-your-build-has-no-errors-or-warnings">确保你的构建没有错误与警告 <a href="#make-sure-your-build-has-no-errors-or-warnings" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>这可能有新的错误与警告，是由于 webpack, webpack-cli，插件与加载器的升级版本。\n请关注构建中的废弃警告。</p>\n<p>你可以像如下的办法调用你的 webpack 以获取废弃告警的栈堆叠追踪并推断出是由哪个插件或加载器引起的。</p>\n<pre><code class="hljs language-bash">node --trace-deprecation node_modules/webpack/bin/webpack.js</code></pre>\n<blockquote class="warning">\n<p>webpack 5 会清除所有废弃的特性。为了继续推进，应该在构建中再无任何的废弃警告。</p>\n</blockquote>\n<h4 id="make-sure-you-are-using-entry-point-information-from-stats">确保你使用的是 stats 中的入口信息 <a href="#make-sure-you-are-using-entry-point-information-from-stats" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<blockquote class="tip">\n<p>如果你正使用 <a href="/plugins/html-webpack-plugin/">HtmlWebpackPlugin</a> ，可跳过该步骤。</p>\n</blockquote>\n<p>当使用静态 HTML 或通过其它的方式生成 HTML，请确保使用从 stats JSON 拿到的 入口文件，以生成 <code>&#x3C;script></code>, <code>&#x3C;style></code> 和\n<code>&#x3C;link></code> 标签。</p>\n<p>如果这不可行，请避免在本指南后面设置 <code>splitChunks.chunks: \'all\'</code> 和 <code>splitChunks.maxSize</code>。注意这是次优的方案\n和应通的办法。</p>\n<h4 id="make-sure-to-use-mode">请确保使用 <code>mode</code> <a href="#make-sure-to-use-mode" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>将 mode  设置成 <a href="/configuration/mode/#mode-production"><code>production</code></a> 或 <a href="/configuration/mode/#mode-development"><code>development</code></a> 以确保\n相应的默认值被设置。</p>\n<h4 id="update-outdated-options">升级废弃的配置 <a href="#update-outdated-options" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>将以下的配置升级到最新的版本 (如有使用):</p>\n<ul>\n<li><code>optimization.hashedModuleIds: true</code> ↦ <code>optimization.moduleIds: \'hashed\'</code></li>\n<li><code>optimization.namedChunks: true</code> ↦ <code>optimization.chunkIds: \'named\'</code></li>\n<li><code>optimization.namedModules: true</code> ↦ <code>optimization.moduleIds: \'named\'</code></li>\n<li><code>NamedModulesPlugin</code> ↦ <code>optimization.moduleIds: \'named\'</code></li>\n<li><code>NamedChunksPlugin</code> ↦ <code>optimization.chunkIds: \'named\'</code></li>\n<li><code>HashedModulesPlugin</code> ↦ <code>optimization.moduleIds: \'hashed\'</code></li>\n<li><code>optimization.occurrenceOrder: true</code> ↦ <code>optimization: { chunkIds: \'total-size\', moduleIds: \'size\' }</code></li>\n<li><code>optimization.splitChunks.cacheGroups.vendors</code> ↦ <code>optimization.splitChunks.cacheGroups.defaultVendors</code></li>\n<li><code>Compilation.entries</code> ↦ <code>Compilation.entryDependencies</code></li>\n<li><code>serve</code> ↦ <code>serve</code> 已被去掉，推荐使用 <a href="/configuration/dev-server/"><code>DevServer</code></a></li>\n</ul>\n<h4 id="test-webpack-5-compatibility">测试 webpack 5 兼容性 <a href="#test-webpack-5-compatibility" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>尝试在你的 webpack 4 中设置如下的配置，检查一下构建是否仍然正确的运行。</p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  node<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    Buffer<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    process<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="tip">\n<p>webpack 5 去掉了这些配置的的模式并且会永远设置成 <code>false</code>。你必须要再次去掉这些配置当\n你将配置升级到 webpack 5。</p>\n</blockquote>\n<h4 id="upgrade-webpack-version">升级 webpack 版本 <a href="#upgrade-webpack-version" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>npm: <code>npm install webpack@next --dev</code></p>\n<p>Yarn: <code>yarn add webpack@next -D</code></p>\n<h4 id="clean-up-configuration">清理配置 <a href="#clean-up-configuration" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>请考虑将 <code>optimization.moduleIds</code> 和 <code>optimization.chunkIds</code> 从你的 webpack 配置中清楚。使用默认值会更好，因为它们会在 <a href="/configuration/mode/#mode-production"><code>production 模式</code></a> 下支持长期缓存和在<a href="/configuration/mode/#mode-development"><code>development</code> 模式</a>\n下能进行调试。</li>\n<li>当在 webpack 配置中使用 <code>[hash]</code> 占位符时，请考虑将它改为 <code>[contenthash]</code>。它并不一样，但被证实更为\n有效。</li>\n<li>当你使用 Yarn 的 PnP 和 <code>pnp-webpack-plugin</code> 插件，好消息来了：它现在被默认支持了。你可以\n从配置中去除。</li>\n<li>如果你使用 <code>IgnorePlugin</code> 并带上一个正则表达式作用参数，它现在接受一个 <code>options</code> 对象：\n<code>new IgnorePlugin({ resourceRegExp: /regExp/ })</code>。</li>\n</ul>\n<p>如果你通过 import 使用 WASM，你应该跟着以下两个步骤：</p>\n<ul>\n<li>通过设置 <code>experiments.syncWebAssembly: true</code> 启动废弃细则，获得在 webpack 4 中的相同行为。</li>\n<li>在成功升级到 webpack 5 后，将  <code>experiments</code> 的值改为 <code>experiments: { asyncWebAssembly: true, importAsync: true }</code> 以使用\n更新 WASM 融合细则。</li>\n</ul>\n<p>重新思考 <code>optimization.splitChunks</code>:</p>\n<ul>\n<li>推荐使用默认配置或<code>optimization.splitChunks: { chunks: \'all\' }</code>。</li>\n<li>当使用 HTTP/2 和长期缓存，设置\n<code>optimization.splitChunks: { chunks: \'all\', maxInitialRequests: 30, maxAsyncRequests: 30, maxSize: 100000 }</code>。</li>\n<li>当使用自定义配置，将 <code>name</code> 替换为 <code>idHint</code>。</li>\n<li>通过设置 <code>optimization.splitChunks: { default: false, vendors: false }</code> 是可以关闭默认值的。我们不推荐\n这么做，但如果你真的想在 webpack 5 中获得相同的效果：设置 <code>optimization.splitChunks: { default: false, defaultVendors: false }</code>。</li>\n</ul>\n<h4 id="cleanup-the-code">清理代码 <a href="#cleanup-the-code" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>使用 <code>/* webpackChunkName: \'...\' */</code>：确定你明白其含义：</p>\n<ul>\n<li>文件束 (chunk) 的名字在这里本意是公共的。</li>\n<li>它不是一个仅用于开发模式的名字。</li>\n<li>webpack 会在生成与开发模式中使用它对文件进行命名。</li>\n<li>webpack 5 会自动在 <code>development</code> 模式下，分配有意义的文件名，即使不使用 <code>webpackChunkName</code>。</li>\n</ul>\n<p>使用从 JSON 模块的命名导出：新的规范已经不再支持所以你们得到一个警告。请使用 <code>import package from \'./package.json\'; const { version } = package;</code>\n而不是 <code>import { version } from \'./package.json\'</code>。</p>\n<h4 id="cleanup-the-build-code">清理构建代码 <a href="#cleanup-the-build-code" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>当使用  <code>const compiler = webpack(...);</code>，确保在你使用后用 <code>compiler.close();</code> 关闭编译器。</li>\n</ul>\n<h4 id="run-a-single-build-and-follow-advises">运行单个构建并跟随以下的建议 <a href="#run-a-single-build-and-follow-advises" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>如果没有相关的建议？请创建一个议题(issue)，我们会尝试解决它。重复以下的步骤，直到你至少解决到3或4层次：</p>\n<ul>\n<li>层次 1: 模式（Schema）校验失败。配置选项已经改变。它应该要有一个校验失败的信息且带上 <code>重大更新（BREAKING CHANGE）:</code> 提示。</li>\n<li>层次 2: webpack 退出错误。错误信息应该告诉你哪些需要被更改的。</li>\n<li>层次 3: 构建错误。错误信息应该要有一个 <code>重大更新（BREAKING CHANGE）:</code> 提示。</li>\n<li>层次 4: 构建警告。警告信息应该告诉你有哪些需要改进的。</li>\n</ul>\n<p>废弃警告。你可能会得到许多废弃的警告。目前这不需要是一个问题。插件需要时间跟上webpack内核的\n改变。请忽略这些警告直到发布候选版本推出而不再是Beta版本。</p>\n<ul>\n<li>你使用 <code>--no-deprecation</code> 标志运行 node 进行，可以隐藏废弃告警，例如：<code>node --no-deprecation node_modules/webpack/bin/webpack.js</code>。\n这只能作为一个临时的变通方案。</li>\n<li>插件和加载器贡献者，应该跟随废弃建议信息以改进代码。</li>\n</ul>\n<h4 id="turn-off-es2015-syntax-in-runtime-code-if-necessary">如有需要，在运行时代码中禁用 ES2015 语法 <a href="#turn-off-es2015-syntax-in-runtime-code-if-necessary" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>默认地，webpack 的运行时代码会使用 ES2015语法以使构建出来的包体积更小。如果你构建的目标环境中不支持这种语法（比如 IE11），你需要设置 <code>output.ecmaVersion: 5</code> 以将代码转换为 ES5 语法。</p>\n<h4 id="everything-works">所有情况都运行如常？ <a href="#everything-works" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>请发一个推特如果你成功地迁移到 webpack 5.<a href="https://twitter.com/intent/tweet?source=https://webpack.js.org/migrate/5/&#x26;text=I%20just%20migrated%20to%20webpack%205%20using%20its%20migration%20guide!%20&#x26;via=webpack&#x26;hashtags=webpack,webpack5">发一个推特</a></p>\n<h4 id="it-is-not-working">运行异常？ <a href="#it-is-not-working" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>创建一个 <a href="https://github.com/webpack/webpack/issues/new?template=Bug_report.md">议题（issue）</a> 并告诉我们\n在迁移过程中你遇到的问题。</p>\n<h4 id="something-missing-in-this-guide">有一些在本指南中缺失的东西？ <a href="#something-missing-in-this-guide" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>请打开一个 Pull Request 以帮助后面的开发者使用该指南。</p>\n<h2 id="changes-to-internals">内核的改变 <a href="#changes-to-internals" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>webpack 内核的改变有：添加类型，代码重构和方法重命令都在这里列出来，供那些有兴趣的开发者。但这些\n本并不被作为通用迁移使用案例的一部份。</p>\n<ul>\n<li><code>Module.nameForCondition</code>, <code>Module.updateCacheModule</code> 和 <code>Module.chunkCondition</code> 不再是可选的。</li>\n</ul>\n<h3 id="getoptions-method-for-loaders">加载器的 getOptions 方法 <a href="#getoptions-method-for-loaders" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>webpack 5 发布后，在加载器上下文中，带有内置的 <a href="/api/loaders/#thisgetoptionsschema"><code>this.getOptions</code></a> 方法。这对于那些已经使用来自之前推荐的 <a href="https://github.com/webpack/schema-utils">schema-utils</a> 的 <code>getOptions</code> 方法的加载器而言是重大的重新：</p>\n<ul>\n<li><code>this.getOptions</code> 自 webpack 5 起可使用</li>\n<li>它支持 JSON 作为一个查询字符串：如 <code>?{arg:true}</code> ↦ <code>?{"arg":true}</code> 而不仅是 JSON5。在相应的加载器文件中，\n使用 JSON5 应该被认为且被写在文档中是已废弃的并推荐使用 JSON。</li>\n<li><a href="https://github.com/webpack/loader-utils"><code>loader-utils</code></a> 有特定的解析查询字符串的行为（<code>true</code>, <code>false</code> 和 <code>null</code> 不会被解析成 <code>字符串</code>而是一个原始值）。\n这对于新的内置 <code>this.getOptions</code> 方法来说，不再适用，它使用原生的 <a href="https://nodejs.org/api/querystring.html"><code>querystring</code></a> 方法 （与 Node.js一同发布）进行解析。在这些情况下在加载器中使用 <code>this.getOptions</code> 获取配置选项之后，\n添加自定义行为仍然可行。</li>\n<li>模式(Schema) 参数对新的 <code>this.getOptions</code> 方法而言是可选的，但我们强烈建议给你的加载器选项添加模式校验。\n在模式中的 <code>title</code> 字段，可用作自定义校验的错误信息，比如  <code>"title": "My Loader ooooptions"</code>  会引致\n这种方式的错误展示：<code>Invalid ooooptions object. My Loader has been initialised using an ooooptions object that does not match the API schema. - ooooptions.foo.bar.baz should be a string.</code>。</li>\n</ul>\n'}}]);