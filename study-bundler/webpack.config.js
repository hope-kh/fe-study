const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
	entry: {
		main: './src/index',
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
	},
	module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
				exclude: /(node_modules)/,
      },
			{
        test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
      },
    ],
  },
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	devServer: {
		compress: true,
		port: 3000,
	},
	plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
    }),
  ],
};