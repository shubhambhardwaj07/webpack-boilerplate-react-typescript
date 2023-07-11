const webpack = require("webpack");
//we can deine env varibale name by ourserves as well if not it will take mode as values
// go to build folder and do npx serve
module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("ShubhProd"),
    }),
  ],
};
