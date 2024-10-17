const path = require('path');
const CopyPlugin = require('copy-webpack-plugin'); 

module.exports = {
  entry: {
    popup: './src/Popup.js',
    background: './src/background.js',
    contentScript: './public/contentScript.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: '[name].bundle.js', 
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public/manifest.json', to: '' },
        // { from: 'public/popup.html', to: '' }, 
      ],
    }),
  ],
};
