const path = require("path");

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
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      //可以通过查询传参，limit表示小于这个值的图片就要进行base64编码，单位是byte
      // 第二个参数name=[name]表示不要把图片的名称变成hash字符串,扩展名也保持原样
      {test: /\.(jpg|jpeg|png|gif|bmp)$/, use: "url-loader?limit=5869&name=[name].[ext]"},
      {test: /\.(ttf|eot|svg|woff|woff2)$/, use: "url-loader"},
      {test: /\.js$/, use: "babel-loader", exclude: /node_modules/},
      {test: /\.vue$/, use: "vue-loader"}
    ]
  }
};
