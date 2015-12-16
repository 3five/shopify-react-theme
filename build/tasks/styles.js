import gulp from 'gulp'
import sass from 'gulp-sass'

gulp.task('build:styles', ()=> {
  const opts = {
    
  }

  return gulp.src('assets/scss/styles.scss')
    .pipe(sass(opts).on('error', sass.logError))
    .pipe(gulp.dest('theme/assets'));
})

gulp.task('dev:styles', ()=> {
  return gulp.watch('assets/scss/**/*', ['build:styles'])
})