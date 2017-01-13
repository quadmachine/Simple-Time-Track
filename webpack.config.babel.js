import path from  'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const isDevelopment = Boolean(process.env.NODE_ENV === 'dev');

module.exports = {
	context: path.resolve('./'),
	cache: isDevelopment,
	debug: isDevelopment,
	devtool: isDevelopment ? 'source-map' : '',

	entry: {
		popup: "./chrome/popup/popup.js",
		options: "./chrome/options/options.js"
	},

	output: {
		path: path.resolve('./dist'),
		pathinfo: true,
		filename: "[name].js",
		sourceMapFilename: "[name].js.map",
		publicPath: '/chrome/'
	},

	resolve: {
		extensions: ['', '.js', '.jsx', '.json'],
		modulesDirectories: ['node_modules']
	},


	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['babel-loader']
		}
		]
	},

	plugins: [
		new webpack.NoErrorsPlugin(),
		new CopyWebpackPlugin([
			{ignore: ['*.js', '*.jsx'], context: 'chrome', from: {glob: '**/*.*'}},
			{context: 'node_modules/bootstrap/dist', from: 'css/bootstrap.min.css', to: 'css'},
			{context: 'node_modules/bootstrap/dist', from: 'fonts/*.*'},
		]),
	].concat(
			isDevelopment ? [
						new webpack.DefinePlugin({dev: true}), // prida var dev = true;
					] : [
						// https://github.com/webpack/docs/wiki/optimization#deduplication
						new webpack.optimize.DedupePlugin(),
						// https://github.com/webpack/docs/wiki/optimization#minimize
						new webpack.optimize.OccurrenceOrderPlugin(),
						// https://github.com/webpack/docs/wiki/optimization#minimize
						// new webpack.optimize.UglifyJsPlugin(
						// 		{
						// 			minimize: true,
						// 			comments: false,
						// 			sourceMap: false,
						// 			pathinfo: false,
						// 			compress: {
						// 				warnings: false
						// 			}
						// 		}
						// )

					]
	)
};