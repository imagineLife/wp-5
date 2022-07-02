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
const miniCSS = require('mini-css-extract-plugin')
module.exports = (env, config) => {  
  console.log('Webpack Env: ', env)
  
  const plugins = [new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  })];
  
  // production plugins
  if (env?.mode === 'production') {
    plugins.push(
        new DefinePlugin({
          API_URL: JSON.stringify(env.API_URL),
        }),
        new CleanWebpackPlugin(),
    )
    plugins.push(new miniCSS());
  }
  return merge(
    baseConfig(env.mode),
    { plugins },
    presetsFromVars({mode: env.mode, presets: env.presets})
  )
};
