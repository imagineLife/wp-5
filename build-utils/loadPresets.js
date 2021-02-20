/*
	A Plugin helper
	pass the env to PASS to other configs in the fn
	ALLOWS
		creating smaller configs that can be appended to the 
		ROOT config
*/
const { merge } = require('webpack-merge')

const applyPresets = env => {
	console.log('applyPresets env')
  console.log(env)
  
	const { presets } = env;

	//return arr of strs, arr of preset names
	const mergedPresets = [].concat(...[Object.keys(presets)]);
  console.log('mergedPresets')
  console.log(mergedPresets)
  

	//loop through presets, by name, && require each preset
	//call each preset passing env to the preset
	const mergedConfigs = mergedPresets.map(presetName => {
		if(presetName){
      let reqStr = `./presets/webpack.${presetName}`
			require(reqStr)(env)
		}
	}
  );
  console.log('mergedConfigs')
  console.log(mergedConfigs)
  

	//returns the MERGED wpConfing including the presets
	return merge({}, ...mergedConfigs)
}

module.exports = applyPresets