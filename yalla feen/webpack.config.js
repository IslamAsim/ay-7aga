const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const TerserJSPlugin = require('terser-webpack-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    entry: {
        jobWizard: "./scripts/index.js",
        // viewBuilder: "./src/viewBuilder/js/index.js",
		// dataFilter: "./src/dataFilter/js/dataFilter.js",
        // commonView: "./src/common/js/commonView.js",
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: "[name]/[name]-bundle.js"
    },
	// mode: 'production', // Switch for production
	mode: 'development',
	watch: true,
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env'],
						plugins: [
							'@babel/plugin-proposal-class-properties',
							'@babel/plugin-proposal-object-rest-spread',
							'@babel/plugin-proposal-export-default-from',
							'@babel/plugin-proposal-export-namespace-from',
						],
					},
				},
			}, {
				test: /\.s?css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.WEBPACK_MODE === 'development',
							publicPath: '../',
						}
					},
					{loader: 'css-loader', options: {importLoaders: 1, sourceMap: true}},
					{loader: 'postcss-loader', options: {}},
					{loader: 'sass-loader', options: {sourceMap: true}},
				],
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: 'fonts/[name].[ext]',
					}
				}]
			}
		]
	},
	optimization: {
		sideEffects: false, // to allow GSAP with production mode
		// minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
	},
	plugins: [
		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map',
			exclude: ['/vendor/']
		}),
		new MiniCssExtractPlugin({
			filename: '[name]/[name].css',
		}),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.resolve(__dirname,'./index.html')
		}),
		new HtmlWebpackPlugin({
			filename: "sign_up.html",
			template: path.resolve(__dirname,'./sign_up.html')
		}),
		new HtmlWebpackPlugin({
			filename: "login.html",
			template: path.resolve(__dirname,'./login.html')
		}),
		new HtmlWebpackPlugin({
			filename: "review.html",
			template: path.resolve(__dirname,'./review.html')
		}),
		new HtmlWebpackPlugin({
			filename: "custom_trip.html",
			template: path.resolve(__dirname,'./custom_trip.html')
		}),
		new HtmlWebpackPlugin({
			filename: "trending.html",
			template: path.resolve(__dirname,'./trending.html')
		}),
		new HtmlWebpackPlugin({
			filename: "agent_profile.html",
			template: path.resolve(__dirname,'./agent_profile.html')
		}),
		new HtmlWebpackPlugin({
			filename: "aboutus.html",
			template: path.resolve(__dirname,'./aboutus.html')
		}),
	],
	// devtool: 'source-map', // ModySwitch
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		// contentBase: path.resolve(__dirname, './public'),
		historyApiFallback: true,
	}
};
