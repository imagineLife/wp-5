const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");
const { DefinePlugin } = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./common.webpack')
console.log('baseConfig')
console.log(baseConfig)

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
  console.log('mergedConfig')
  console.log(JSON.stringify(mergedConfig))
  
  return mergedConfig
};
