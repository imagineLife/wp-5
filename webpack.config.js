const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env) => {
  return {
    mode: env.mode,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/react"]
            }
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ],
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }
};
