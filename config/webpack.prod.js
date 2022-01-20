const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const path = require("path");

var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "app.[hash].js",
    path: path.resolve(__dirname, "../prod"),
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],
});
