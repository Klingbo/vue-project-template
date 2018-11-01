const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Uglifyjs = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  resolve: {
    alias: { "@": path.join(__dirname, "/src") }
  },
  module: {
    rules: [
      { test: /\.css$/, use:ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })},
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      //可以通过查询传参，limit表示小于这个值的图片就要进行base64编码，单位是byte
      // 第二个参数name=[name]表示不要把图片的名称变成hash字符串,扩展名也保持原样
      {test: /\.(jpg|jpeg|png|gif|bmp)$/, use: "url-loader?limit=5869&name=[name].[ext]"},
      {test: /\.(ttf|eot|svg|woff|woff2)$/, use: "url-loader"},
      {test: /\.js$/, use: "babel-loader", exclude: /node_modules/},
      {test: /\.vue$/, use: "vue-loader"}
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),//指定模板文件路径
      filename: 'index.html',//设置生成的内存页面的名称
    }),
    new ExtractTextPlugin("styles.css"),
    new Uglifyjs()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
