const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");
const { DefinePlugin } = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./common.webpack')

module.exports = (env) => {  
  const mergedConfig = merge(
    baseConfig(env.mode),
    {
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),
        new DefinePlugin({
          API_URL: JSON.stringify(env.API_URL)
        }),
        new CleanWebpackPlugin()
      ]
    }
  )
  return mergedConfig
};
