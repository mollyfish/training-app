var gulp = require("gulp");
var server = require("gulp-express");
var sass = require("gulp-sass");
var webpack = require('webpack-stream');

gulp.task("build:css", function() {
  gulp.src("./src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./public/css"));
});

gulp.task("webpack", function(callback) {
  return gulp.src("src/js/index.js")
  .pipe(webpack({
    output: {
      filename: "packed.js"
    }
  }))
  .pipe(gulp.dest('public/js/'));
});

gulp.task("serve", function() {
  server.run([server.js]);
  gulp.watch("src/sass/**/*.scss", ["build:css"]);
  gulp.watch("src/js/**/*.js", ["webpack"]);
  gulp.watch("server.js", [server.run]);
});

gulp.task("default", ["build:css", "serve"]);
