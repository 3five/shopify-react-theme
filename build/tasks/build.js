import gulp from 'gulp'

gulp.task('default', ['build'])
gulp.task('build', ['build:styles', 'build:scripts'])
gulp.task('dev', ['dev:styles', 'dev:scripts'])