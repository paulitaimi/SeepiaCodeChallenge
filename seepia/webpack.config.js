const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', 
  },
  devServer: {
    static:  [
      {
        directory: path.join(__dirname, 'public'), 
      },
      {
        directory: path.join(__dirname, 'dist'), 
      },
    ],
    port: 8080,
    hot: true,
    open: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(glb|gltf)$/, 
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/models', 
              name: '[name].[ext]', 
            },
          },
        ],
      },
    ],
  },
  mode: 'development',
};
