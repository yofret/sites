module.exports.getConfig = function(type) {
	var isDev = type === 'development';

	var config = {
		entry: './app/scripts/app.jsx',
		output: {
			path: __dirname,
			filename : 'bundle.js'
		},
		debug: isDev,
		module: {
			loaders:[{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: babel,
				query: {
					preset: ['react', 'es2015']
				}
			}]
		}
	}

	if(isDev){
		config.devtool = 'eval';
	}

	return config;
}