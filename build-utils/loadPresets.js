/*
	A Plugin helper
	pass the env to PASS to other configs in the fn
	ALLOWS
		creating smaller configs that can be appended to the 
		ROOT config
*/
const {merge, mergeWithCustomize} = require('webpack-merge')

const applyPresets = env => {
	console.log('----applyPresets----')
	console.log('env')
	console.log(env)
	
	const { presets } = env;
	const preset = Object.keys(presets)[0]
	

	//return arr of strs, arr of preset names
	const mergedPresets = [].concat(...[preset]);
	
	//loop through presets, by name, && require each preset
	//call each preset passing env to the preset
	const mergedConfigs = mergedPresets.map(presetName => {
		if(presetName){
			require(`./presets/webpack.${presetName}`)(env)
		}
	}
  );
	
	//returns the MERGED wpConfing including the presets
	return mergeWithCustomize({}, ...mergedConfigs)
}

module.exports = applyPresets