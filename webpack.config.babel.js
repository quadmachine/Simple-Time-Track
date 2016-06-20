import path from  'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
var argv = require('minimist')(process.argv.slice(2));

// Detekce webpack --stable
const isDevelopment = Boolean(argv.d || process.env.NODE_ENV === 'dev' || process.env.ENVNAME === 'dev' && !argv.stable);
if (!isDevelopment) {
	console.log("\n_.~._.~._.~._ RUNNING WEBPACK IN PRODUCTION MODE _.~._.~._.~._\n");
}

module.exports = {
	context: path.resolve('./'),
	cache: isDevelopment,
	debug: isDevelopment,
	devtool: isDevelopment ? 'source-map' : '',

	entry: {
		popup: "./src/js/popup.js"
	},

	output: {
		path: path.resolve('./dist'),
		pathinfo: true,
		filename: "[name].js",
		sourceMapFilename: "[name].js.map",
		publicPath: '/js/'
	},

	//externals: {'angular': 'angular'},

	resolve: {
		modulesDirectories: ['node_modules', 'src/js', 'src'],
		extensions: ['', '.js', '.jsx']
	},


	module: {
		loaders: [
			{test: require.resolve("jquery"), loader: "expose?$!expose?jQuery"},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['babel-loader']
			}
		]
	},

	plugins: [
		new webpack.NoErrorsPlugin(),
		new CopyWebpackPlugin([
			{ignore: ['*.js', '*.less'], context: 'src', from: {glob: '**/*.*'}},
			{from: 'node_modules/angular/angular-csp.css', to: 'css'},
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