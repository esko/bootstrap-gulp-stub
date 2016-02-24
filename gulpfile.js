var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('init', ['build'], function() {
  return gulp.src(['node_modules/bootstrap-sass/assets/fonts/**',
                   'node_modules/bootstrap-sass/assets/javascripts/**'],
                   { base: 'node_modules/bootstrap-sass/assets'})
    .pipe(gulp.dest('build'));
});

gulp.task('sass', function() {
	return gulp.src('src/scss/*.scss')
		.pipe(sass({includePaths: ['node_modules/bootstrap-sass/assets/stylesheets']}))
		.pipe(gulp.dest('build/css'));
});

gulp.task('build', ['sass']);

gulp.task('clean', function(){
  return del(['build/*']);  
});

gulp.task('watch', function() {
	gulp.watch('src/*.scss', ['build']);
});
