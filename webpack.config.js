module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist/assets',
    filename:'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader'],
        query: {
          presets: ['env', 'stage-0', 'react']
        }
      }
    ]
  }
}
