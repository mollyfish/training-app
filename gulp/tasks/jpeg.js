var gulp = require("gulp");
var config = require('../config').jpeg;

gulp.task('jpeg', function() {
  return gulp.src(config.src)
  .pipe(gulp.dest(config.dest));
});