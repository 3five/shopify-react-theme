var path = require('path')
require('babel-register')({
  presets: [
    'es2015',
    'react',
    'stage-0'
  ]
})
require('require-all')(path.resolve('build/tasks'))