const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "http://localhost:3002/",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "development",
  devServer: {
    port: 3002,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartIndex": "./src/bootstrap.js",
      },
      shared: {
        faker: {
          singleton: true,
        },
      },
    }),
  ],
};
