import gulp from 'gulp'
import webpack from 'webpack'
import config from '../webpack/base'

gulp.task('build:scripts', (done)=> {
  webpack(config).run((err, result)=> {
    let stats = result.toJson()
    if (err) {
      console.log(err)
      return done()
    }
    if (stats.warnings && stats.warnings.length) {
      console.log(stats.warnings)
    }
    if (stats.errors && stats.errors.length) {
      console.log(stats.errors)
    }
    done()
  })
})

gulp.task('dev:scripts', (done)=> {
  return gulp.watch('src/**/*', ['build:scripts'])
})