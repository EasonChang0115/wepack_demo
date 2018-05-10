const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

// 設定外掛進入點
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  file: 'index.html',
  inject: 'body'
});

module.exports = {
  // 檔案起始點從 entry 進入，因為是陣列所以也可以是多個檔案
  entry:[
    './app/index.js'
  ],


  // output 是放入產生出來的結果的相關參數
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },


  module: {
    // rules 則是放欲使用的 loaders，在這邊是使用 babel-loader 將所有 .js（這邊用到正則式）相關檔案（排除了 npm 安裝的套件位置 node_modules）
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader",
            options: {
                includePaths: ["absolute/path/a", "absolute/path/b"]
            }
        }]
      },
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['url-loader']
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['url-loader']
			}

    ],
  },

  // devServer 則是 webpack-dev-server 設定
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8008,
  },

  // plugins 放置所使用的外掛
  plugins: [
    HtmlWebpackPluginConfig,
    // hot 檢測文件改動替換的plugin
    new webpack.NamedModulesPlugin(),   
    new webpack.HotModuleReplacementPlugin()
  ],
};