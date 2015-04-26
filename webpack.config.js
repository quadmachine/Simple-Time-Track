var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: "./js/app",
	output: {
		path: path.join(__dirname, 'build'),
		filename: "boundle.js",
		publicPath: '/js/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: ['react-hot', 'babel'],
				include: path.join(__dirname, 'js')
			}
		]
	}
};