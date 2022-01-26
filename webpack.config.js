const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  // devtool: "source-map",
  entry: "./src/index.js",
  output: {
    filename: "app.[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       defaultVendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "vendor",
  //         chunks: "all",
  //       },
  //     },
  //   },
  // },

  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       minify: (file, sourceMap) => {
  //         const uglifyJsOptions = {
  //           annotations: true, // 忽略注释
  //           compress: {
  //             drop_console: true, // 去掉console
  //             dead_code: true,
  //           },
  //         };
  //         return require("uglify-js").minify(file, uglifyJsOptions);
  //       },
  //     }),
  //   ],
  // },

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
  devServer: {
    port: 8081,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
