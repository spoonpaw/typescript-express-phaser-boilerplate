// webpack.client.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const clientConfig = {
	entry: './src/client/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist/client'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile: 'tsconfig.client.json',
						},
					},
				],

				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpe?g|gif|xml|svg)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
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
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/client/index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'src/client/assets',
					to: 'assets',
				},
			],
		}),
	],
};

module.exports = clientConfig;
