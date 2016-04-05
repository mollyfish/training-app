var gulp = require("gulp");
var config = require('../config').png;

gulp.task('png', function() {
  return gulp.src(config.src)
  .pipe(gulp.dest(config.dest));
});