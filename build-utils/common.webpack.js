const path = require('path');
const baseConfigFn = (mode) => {
  const FRONTEND_OUTPUT_DIR = 'frontend-src';
  const OUTPUT_STR = '[contenthash].js';
  return {
    mode,
    output: {
      filename: OUTPUT_STR,
      path: path.resolve(__dirname, FRONTEND_OUTPUT_DIR),
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
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
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
}

module.exports = baseConfigFn