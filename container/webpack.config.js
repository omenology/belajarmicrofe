const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "http://localhost:3001/",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "development",
  devServer: {
    port: 3001,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://localhost:3000/remoteEntry.js",
        cart: "cart@http://localhost:3002/remoteEntry.js",
      },
    }),
  ],
};
