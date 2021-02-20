const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");
const { DefinePlugin } = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./common.webpack')
const presetConfig = require('./loadPresets')
const presetsFromVars = require(`./presetsFromVars`)
const wpBundleAnalyzer = require('webpack-bundle-analyzer');
const baPlugin = wpBundleAnalyzer.BundleAnalyzerPlugin;

module.exports = (env) => {  
  console.log('env')
  console.log(env)
  
  return merge(
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
    },
    presetsFromVars({mode: env.mode, presets: env.presets})
  )
};
