const { publicEncrypt } = require('crypto')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	assets: 'assets/',
}

module.exports = {
	externals: {
		paths: PATHS,
	},
	entry: {
		app: PATHS.src,
	},
	output: {
		filename: `${PATHS.assets}js/bundle.js`,
		path: PATHS.dist,
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/',
				options: {
					presets: ['@babel/preset-env'],
				},
			},
		],
		rules: [
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				},
			},
		],
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								autoprefixer({
									browsers: ['ie >= 8', 'last 4 version'],
								}),
							],
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: `${PATHS.assets}css/style.css`,
		}),
		new HtmlWebpackPlugin({
			hash: true,
			template: `${PATHS.src}/index.html`,
			filename: './index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: `${PATHS.src}/img`,
					to: `${PATHS.assets}img`,
				},
			],
		}),
	],
}
