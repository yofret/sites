module.exports = {
	context : __dirname + "/app", // defining application context it will app folder created at root level
	entry   : "./scripts/app.js", // defining our main entry file, it will be app.js, look at it as the main class in java, or the first file in the execution 

	output : {  // We define our ouput file, which will be bundle.js
		path     : __dirname + "/dist",
		filename : "bundle.js",
	}
}