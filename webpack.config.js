const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
	  filename: 'script.js',
	  path: path.resolve(__dirname, 'dist')
	},
	module: {
	  rules: [
	    {
	      test: /.js$/,
	      exclude: /node_modules/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['@babel/preset-env']
	        }
	      }
	    },
		{
		  test: /.css$/,
		  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
		},
	  ]
	},
  plugins: [
    new HtmlWebpackPlugin({
      title: "title",
    }),
  ],
};