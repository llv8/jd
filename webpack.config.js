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
			'Api': path.resolve(__dirname, 'src/api')
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
						sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
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
				test: /\.(ttf|eot|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: 'fonts/[name].[ext]',
				},
			}, {
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8192
					}
				}]
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