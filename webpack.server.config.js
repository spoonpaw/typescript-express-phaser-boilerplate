// webpack.server.config.js

const path = require('path');
const nodeExternals = require('webpack-node-externals');

const isProduction = process.env.NODE_ENV === 'production';

const serverConfig = {
	entry: './src/server/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist/server'),
		filename: 'index.js',
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	mode: isProduction ? 'production' : 'development',
	performance: {
		hints: isProduction ? 'warning' : false,
	},
	target: 'node',
	externals: [nodeExternals()],
};

module.exports = serverConfig;
