const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    filename: "app.[hash].js",
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ["vue-style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 8081,
  },
  plugins: [],
});
