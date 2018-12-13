const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
	mode: 'none',
	entry: {
		app: './src//main.js'
	},
	devServer: {
		contentBase: './dist'
	},
	resolve: {
		alias: {

			'@': path.resolve(__dirname, 'src/components'),
			'Cmn': path.resolve(__dirname, 'src/common'),
			'Rtr': path.resolve(__dirname, 'src/router'),
			'Api': path.resolve(__dirname, 'src/api'),
			'Ast': path.resolve(__dirname, 'src/assets'),

		},
		extensions: ['.js', '.vue', '.json']
	},
	module: {
		rules: [{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
						sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax', // <style lang="sass">
						less: 'vue-style-loader!css-loader!less-loader'

					}
				}
			},
			{
				test: /\.s(a|c)ss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			}, {
				test: /\.css$/,
				loader: "style-loader!css-loader?importLoaders=1"
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				query: {
					limit: 10000
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				query: {
					limit: 10000,
					name: 'fonts/[name].[hash:7].[ext]'
				}
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			}, {
				test: /\.less$/,
				use: ['style-loader', {
					loader: 'css-loader',
					options: {
						importLoaders: 1
					}
				}, 'less-loader']
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	],

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}