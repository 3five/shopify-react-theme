import path from 'path'

export default {
  context: path.resolve('src'),
  entry: './app',
  output: {
      path: path.resolve('theme/assets'),
      filename: 'app.js'
  },
  module: {
    loaders: [
      { 
        include: path.resolve('src'), 
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
}