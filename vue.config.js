const webpack = require('webpack')

module.exports = {
	devServer: {
		open: 'Google Chrome',
		port: 8081,
		overlay: {
			warnings: true,
			errors: true,
		},
	},
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@import "@/assets/scss/main.scss";`,
			},
		},
	},
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.(gif|jpe?g|svg)$/i,
					use: [
						'file-loader',
						{
							loader: 'image-webpack-loader',
							options: {
								webp: {
									quality: 80,
								},
							},
						},
					],
				},
			],
		},
	},
}
