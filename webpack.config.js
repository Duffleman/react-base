module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: './public/js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
};
