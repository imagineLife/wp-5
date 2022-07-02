const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfigFn = (mode) => {
  const FRONTEND_OUTPUT_DIR = '../dist';
  const outputPath = path.resolve(__dirname, FRONTEND_OUTPUT_DIR)
  
  const OUTPUT_STR_OBJ = {
    production: '[contenthash].js',
    development: '[name].js'
  };

  const styleConfig = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  const config = {
    mode,
    output: {
      filename: OUTPUT_STR_OBJ[`${mode}`],
      path: outputPath,
      asyncChunks: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/react'],
            },
          },
        },
        {
          ...styleConfig
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            name: 'vendor',
            enforce: true,
          },
        },
      },
    },
  };

  if (mode === 'development') { 
    console.log('INLINE-SOURCE-MAP devtools in webpack config');
    
    config.devtool = 'inline-source-map'
  }
  return config
}

module.exports = baseConfigFn