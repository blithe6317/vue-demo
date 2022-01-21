const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"],
      },
      // {
      //   test: /\.less$/,
      //   use: ["vue-style-loader", "css-loader", "less-loader"],
      // },
      // {
      //   test: /\.css$/,
      //   use: ["vue-style-loader", "css-loader"],
      // },
      //   {
      //     test: /\.less$/,
      //     use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      //   },
      //   {
      //     test: /\.css$/,
      //     use: [MiniCssExtractPlugin.loader, "css-loader"],
      //   },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "server",
      generateStatsFile: true,
      statsOptions: { source: false },
    }),
  ],
};
