const path         = require('path'); // windows fix stuff?
const precss       = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
	context    : path.resolve(__dirname, 'app'), // defining application context it will app folder created at root level
	entry : {
		javascript : "./scripts/app.jsx", // defining our main entry file, it will be app.js, look at it as the main class in java, or the first file in the execution
		html       : "./index.html"
	},
  	
  	// resolve extensions
	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},

	devtool: 'inline-source-map', // or 'source-map'

	module: {
		loaders: [
			{
			// configure loaders This basically transpile our ES6 code to ES5 old standard, Transform JSX to JS, the browser can understand everything
				test    : /\.jsx?$/,
				exclude : /node_modules/,
				loaders : ["react-hot-loader/webpack", "babel-loader"]
			},
			// loading the index file we will require only one
			{
			    test   : /\.html$/,
			    loader : "file?name=[name].[ext]",
  			},
  			// SASS LOADER
  			{
				test   : /\.scss$/,
				loader: 'style!css?sourceMap!sass?sourceMap',
			}
		]
	},

	postcss() {
    	return [autoprefixer, precss];
  	},

	output : {  // We define our ouput file, which will be bundle.js
		path     : __dirname + "/dist",
		filename : "bundle.js",
	}
}