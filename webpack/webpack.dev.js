const webpack = require("webpack");
//we can deine env varibale name by ourserves as well if not it will take mode as values
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("ShubhDev"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
