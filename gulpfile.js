var gulp         = require('gulp');
var sass         = require('gulp-sass');
var del          = require('del');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var browsers = [
  "Android 2.3",
  "Android >= 4",
  "Chrome >= 20",
  "Firefox >= 24",
  "Explorer >= 8",
  "iOS >= 6",
  "Opera >= 12",
  "Safari >= 6"
];

gulp.task('init', ['build'], function() {
  return gulp.src(['node_modules/bootstrap-sass/assets/fonts/**',
                   'node_modules/bootstrap-sass/assets/javascripts/bootstrap.*'],
                   { base: 'node_modules/bootstrap-sass/assets'})
    .pipe(gulp.dest('build'));
});

gulp.task('sass', function() {
	return gulp.src('src/scss/*.scss')
		.pipe(sass({
      includePaths: ['node_modules/bootstrap-sass/assets/stylesheets'],
      precision: 8
    }))
    .pipe(postcss([autoprefixer({ browsers: browsers })]))
		.pipe(gulp.dest('build/css'));
});

gulp.task('build', ['sass']);

gulp.task('clean', function(){
  return del(['build/*']);  
});

gulp.task('watch', function() {
	gulp.watch('src/*.scss', ['build']);
});
