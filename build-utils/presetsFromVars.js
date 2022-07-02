const wpBundleAnalyzer = require('webpack-bundle-analyzer');
const baPlugin = wpBundleAnalyzer.BundleAnalyzerPlugin;

module.exports = (({mode, presets}) => {
  console.log("PRESETS FROM VARS:")
  console.log({
    presets,
    mode
  })
  
  
  let plugins = []

  if(presets?.analyze){
    plugins.push(new baPlugin())
  }

  return {
    plugins
  };
})