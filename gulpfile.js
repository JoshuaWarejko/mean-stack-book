var gulp = require('gulp');
var fs = require('fs');

fs.readdirSync(__dirname + '/gulp').forEach(function(task) {
	require('./gulp/' + task);
});

// Livereload isn't reloading the page but says it is reloading in terminal.
gulp.task('dev', ['watch:scss', 'watch:js', 'dev:server']);