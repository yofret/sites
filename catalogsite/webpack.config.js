module.exports = {
	context : __dirname + "/app", // defining application context it will app folder created at root level
	entry   : "./scripts/app.js", // defining our main entry file, it will be app.js, look at it as the main class in java, or the first file in the execution 
  	
  	// resolve extensions
	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},

	// configure loaders This basically transpile our ES6 code to ES5 old standard, Transform JSX to JS, the browser can understand everything
	module: {
		loaders: [
			{
				test    : /\.jsx?$/,
				exclude : /node_modules/,
				loaders : ["babel-loader"]
			}
		]
	},

	output : {  // We define our ouput file, which will be bundle.js
		path     : __dirname + "/dist",
		filename : "bundle.js",
	}
}