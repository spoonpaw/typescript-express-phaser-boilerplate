// webpack.server.config.js

const path = require('path');
const nodeExternals = require('webpack-node-externals');

const dotenv = require('dotenv');

dotenv.config();

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
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile: 'tsconfig.server.json',
						},
					},
				],
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
