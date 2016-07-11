var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('scss', function() {
	gulp.src('scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('assets'))
	.pipe(livereload());
});

gulp.task('watch:scss', function() {
	livereload.listen();
	gulp.watch('scss/**/*.scss', ['scss']);
});
