(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{444:function(e,i,t){"use strict";t.r(i),i.default='<p>webpack has a rich plugin interface. Most of the features within webpack itself use this plugin interface. This makes webpack <strong>flexible</strong>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/babel-minify-webpack-plugin"><code>BabelMinifyWebpackPlugin</code></a><p class="description mobile">Minification with <a href="https://github.com/babel/minify">babel-minify</a></p></p></div></td>\n<td class="description desktop">Minification with \n<a href="https://github.com/babel/minify">babel-minify</a></td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/banner-plugin"><code>BannerPlugin</code></a><p class="description mobile">Add a banner to the top of each generated chunk</p></p></div></td>\n<td class="description desktop">Add a banner to the top of each generated chunk</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/commons-chunk-plugin"><code>CommonsChunkPlugin</code></a><p class="description mobile">Extract common modules shared between chunks</p></p></div></td>\n<td class="description desktop">Extract common modules shared between chunks</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/compression-webpack-plugin"><code>CompressionWebpackPlugin</code></a><p class="description mobile">Prepare compressed versions of assets to serve them with Content-Encoding</p></p></div></td>\n<td class="description desktop">Prepare compressed versions of assets to serve them with Content-Encoding</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/context-replacement-plugin"><code>ContextReplacementPlugin</code></a><p class="description mobile">Override the inferred context of a <code>require</code> expression</p></p></div></td>\n<td class="description desktop">Override the inferred context of a \n<code>require</code>\n expression</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/copy-webpack-plugin"><code>CopyWebpackPlugin</code></a><p class="description mobile">Copies individual files or entire directories to the build directory</p></p></div></td>\n<td class="description desktop">Copies individual files or entire directories to the build directory</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/define-plugin"><code>DefinePlugin</code></a><p class="description mobile">Allow global constants configured at compile time</p></p></div></td>\n<td class="description desktop">Allow global constants configured at compile time</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/dll-plugin"><code>DllPlugin</code></a><p class="description mobile">Split bundles in order to drastically improve build time</p></p></div></td>\n<td class="description desktop">Split bundles in order to drastically improve build time</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/environment-plugin"><code>EnvironmentPlugin</code></a><p class="description mobile">Shorthand for using the <a href="/plugins/define-plugin"><code>DefinePlugin</code></a> on <code>process.env</code> keys</p></p></div></td>\n<td class="description desktop">Shorthand for using the \n<a href="/plugins/define-plugin"><code>DefinePlugin</code></a>\n on \n<code>process.env</code>\n keys</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/extract-text-webpack-plugin"><code>ExtractTextWebpackPlugin</code></a><p class="description mobile">Extract text (CSS) from your bundles into a separate file</p></p></div></td>\n<td class="description desktop">Extract text (CSS) from your bundles into a separate file</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/hot-module-replacement-plugin"><code>HotModuleReplacementPlugin</code></a><p class="description mobile">Enable Hot Module Replacement (HMR)</p></p></div></td>\n<td class="description desktop">Enable Hot Module Replacement (HMR)</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/html-webpack-plugin"><code>HtmlWebpackPlugin</code></a><p class="description mobile">Easily create HTML files to serve your bundles</p></p></div></td>\n<td class="description desktop">Easily create HTML files to serve your bundles</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/i18n-webpack-plugin"><code>I18nWebpackPlugin</code></a><p class="description mobile">Add i18n support to your bundles</p></p></div></td>\n<td class="description desktop">Add i18n support to your bundles</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/ignore-plugin"><code>IgnorePlugin</code></a><p class="description mobile">Exclude certain modules from bundles</p></p></div></td>\n<td class="description desktop">Exclude certain modules from bundles</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/limit-chunk-count-plugin"><code>LimitChunkCountPlugin</code></a><p class="description mobile">Set min/max limits for chunking to better control chunking</p></p></div></td>\n<td class="description desktop">Set min/max limits for chunking to better control chunking</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/min-chunk-size-plugin"><code>MinChunkSizePlugin</code></a><p class="description mobile">Keep chunk size above the specified limit</p></p></div></td>\n<td class="description desktop">Keep chunk size above the specified limit</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/mini-css-extract-plugin"><code>MiniCssExtractPlugin</code></a><p class="description mobile">creates a CSS file per JS file which requires CSS</p></p></div></td>\n<td class="description desktop">creates a CSS file per JS file which requires CSS</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/configuration/optimization/#optimizationnoemitonerrors"><code>NoEmitOnErrorsPlugin</code></a><p class="description mobile">Skip the emitting phase when there are compilation errors</p></p></div></td>\n<td class="description desktop">Skip the emitting phase when there are compilation errors</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/normal-module-replacement-plugin"><code>NormalModuleReplacementPlugin</code></a><p class="description mobile">Replace resource(s) that matches a regexp</p></p></div></td>\n<td class="description desktop">Replace resource(s) that matches a regexp</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/npm-install-webpack-plugin"><code>NpmInstallWebpackPlugin</code></a><p class="description mobile">Auto-install missing dependencies during development</p></p></div></td>\n<td class="description desktop">Auto-install missing dependencies during development</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/progress-plugin"><code>ProgressPlugin</code></a><p class="description mobile">Report compilation progress</p></p></div></td>\n<td class="description desktop">Report compilation progress</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/provide-plugin"><code>ProvidePlugin</code></a><p class="description mobile">Use modules without having to use import/require</p></p></div></td>\n<td class="description desktop">Use modules without having to use import/require</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/source-map-dev-tool-plugin"><code>SourceMapDevToolPlugin</code></a><p class="description mobile">Enables a more fine grained control of source maps</p></p></div></td>\n<td class="description desktop">Enables a more fine grained control of source maps</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/eval-source-map-dev-tool-plugin"><code>EvalSourceMapDevToolPlugin</code></a><p class="description mobile">Enables a more fine grained control of eval source maps</p></p></div></td>\n<td class="description desktop">Enables a more fine grained control of eval source maps</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/terser-webpack-plugin/"><code>TerserPlugin</code></a><p class="description mobile">Uses Terser to minify the JS in your project</p></p></div></td>\n<td class="description desktop">Uses Terser to minify the JS in your project</td>\n</tr>\n<tr>\n<td><div class="title"><p>Name</p><p>Description</p></div>\n<div class="content"><p><a href="/plugins/zopfli-webpack-plugin"><code>ZopfliWebpackPlugin</code></a><p class="description mobile">Prepare compressed versions of assets with node-zopfli</p></p></div></td>\n<td class="description desktop">Prepare compressed versions of assets with node-zopfli</td>\n</tr>\n</tbody>\n</table>\n<p>For more third-party plugins, see the list from <a href="https://github.com/webpack-contrib/awesome-webpack#webpack-plugins">awesome-webpack</a>.</p>\n'}}]);