const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../prod"),
  },
  // devtool: "source-map",
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          // test: /[\\/]node_modules[\\/](vue|vuex|vue-router|element-ui)[\\/]/,
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
    // minimize: true,
    // minimizer: [new TerserPlugin()],
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
