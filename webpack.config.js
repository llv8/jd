const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports={
	mode: 'none',
	entry:{
		app: './src/main.js'
	},
	devServer:{

		contentBase: './dist'
	},
	module: {
		rules:[
			{
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
			}
		]
	},
	plugins: [                                      
		new VueLoaderPlugin()
	], 

	output:{
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}
