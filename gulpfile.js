var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var imagemin = require('gulp-imagemin');



function minify (){
  return gulp.src('app/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
}

function style(){
  return gulp.src('app/sass/style.scss')
  .pipe(sass())
  .pipe(cssnano())
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.stream())
}

 function js(){
  return gulp.src('app/js/*.js')
    .pipe(concat('all.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('dist/js'));
}


function watch(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./app/**/*.scss', style);
  gulp.watch('./app/js/*.js', js);
  gulp.watch('./app/images/*', minify).on('change', browserSync.reload);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./app/js/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
exports.js = js;
exports.minify = minify;

//
////browser sync
//gulp.task ('browser-sync', function(){
//  browserSync.init({
//    server: {
//      baseDir: './dist'
//    }
//  }); //init
//});
//
//
//
//// compiling sass and cssnano
//gulp.task('sass', function(){
//  return gulp.src('app/sass/style.scss')
//    .pipe(sass())
//    .pipe(cssnano())
//    .pipe(gulp.dest('dist/css'))
//});
//
//
////concatind and minifying js
//gulp.task('js', function(){
//  return gulp.src('app/*.js')
//    .pipe(concat('all.js'))
//    //.pipe(uglify())
//    .pipe(gulp.dest('dist/js'));
//})
//
//
////watching for changes
//gulp.task('watch', function(){
//  gulp.watch('app/sass/*.scss', gulp.series('sass'));
//  gulp.watch('app/**/*.js', gulp.series('js'));
//
//});
//
//gulp.task('default', gulp.parallel( 'browser-sync', 'sass', 'js', 'watch' ));
//
//exports.sass = sass;
//exports.browserSync = browserSync;
//exports.js = js;
//exports.watch = watch;
//
