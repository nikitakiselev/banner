var gulp = require('gulp');
let webserver = require('gulp-webserver');

gulp.task('serve', function() {
    gulp.src('./')
        .pipe(webserver());
});