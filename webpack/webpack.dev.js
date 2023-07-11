const webpack = require("webpack");
//we can deine env varibale name by ourserves as well if not it will take mode as values

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("ShubhDev"),
    }),
  ],
};
