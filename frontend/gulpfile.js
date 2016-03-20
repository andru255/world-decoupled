var gulp = require("gulp");

var jade = require("gulp-jade");
var stylus = require("gulp-stylus");
var concat = require("gulp-concat");

var schemaReader = require("./schemaReader");


gulp.task("pages", function(){
  return gulp.src("pages/**/*.jade")
        .pipe(jade({
            pretty: true
        }))
    .pipe(gulp.dest("build/"));
});

gulp.task("styles", function(){
    return gulp.src("pages/**/*.styl")
        .pipe(stylus({
            pretty: true
        }))
        .pipe(gulp.dest("build/"));
});

gulp.task("scripts", function(){
    var paths = schemaReader();
    console.log("paths", paths);
    return gulp.src(paths)
        .pipe(concat("default.js"))
        .pipe(gulp.dest("build/scripts/"));
});
