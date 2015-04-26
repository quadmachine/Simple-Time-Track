var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: ['webpack/hot/dev-server', "./js/app"],
	output: {
		path: path.join(__dirname, 'js'),
		filename: "app.min.js",
		publicPath: '/js/'
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({sourceMap: false})
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'js')},
			{test: /\.css$/, loader: "style!css"}
		]
	},
	compress: {
		warnings: false
	}
};