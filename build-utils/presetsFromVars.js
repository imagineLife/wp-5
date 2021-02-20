const wpBundleAnalyzer = require('webpack-bundle-analyzer');
const baPlugin = wpBundleAnalyzer.BundleAnalyzerPlugin;

module.exports = (({mode, presets}) => {
  console.log(`PRESETS FROM VARS: mode ${mode}`)
  console.log('presets')
  console.log(presets)
  
  let plugins = []

  if(presets.analyze){
    plugins.push(new baPlugin())
  }

  return {
    plugins
  };
})