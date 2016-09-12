'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var pump = require('pump');


// compile all the *.scss of the modules
gulp.task('mystyles', function () {

  // return gulp.src('./sass/**/*.scss')
  return gulp.src('app/assets/css/src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('myApp.min.css'))
    .pipe(
      uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
      })
    )
    .pipe(gulp.dest('app/assets/css/build'));
    // .pipe(gulp.dest('./css'));
});

// compile all the *.scss of the modules
gulp.task('vendorstyles', function () {

  // return gulp.src('./sass/**/*.scss')
  return gulp.src('app/assets/css/src/vendor/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('vendorStyles.min.css'))
    .pipe(
      uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
      })
    )
    .pipe(gulp.dest('app/assets/css/build'));
    // .pipe(gulp.dest('./css'));
});

// check for JS errors in the code
gulp.task('checkJS', function () {
  gulp.src(['app/components/**/*.js','app/shared/**/*.js'])
    .pipe(jshint({esversion:6}))
    .pipe(jshint.reporter('jshint-stylish'));
});

// minify new images
gulp.task('imagemin', function() {
  var imgSrc = 'PopSpace/popspace_web/static/popspace_web/img/**/*',
      imgDst = 'PopSpace/popspace_web/static/popspace_web/build/img'; //aca no se a donde vamos a arrojar las images

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

// minify new or changed HTML pages
gulp.task('htmlpage', function() {
  // necesitamos redirigir pero esto quiza hasta la version 1
  var htmlSrc = 'PopSpace/popspace_web/templates/**/*.html',
      htmlDst = 'PopSpace/popspace_web/buildTemplates';

  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

// JS concat, strip debugging and minify of my static JS libs
gulp.task('scriptsStatics', function(cb) {
    // gulp.src(['assets/js/*.js','assets/libs/*.js'])
    pump([
        gulp.src(['app/assets/js/src/*.js','app/assets/libs/**/*.js']),
        concat('scriptsStatics.min.js'),
        // stripDebug(),
        // uglify(),
        gulp.dest('app/assets/js/build')
    ],cb);
});

// JS of every module
gulp.task('scriptsModules', function(cb) {
    // gulp.src(['assets/js/*.js','assets/libs/*.js'])
    pump([
        gulp.src(['app/components/**/*.js','app/shared/**/*.js', 'app/routes/*.js']),
        concat('scriptsComponentsShared.min.js'),
        // stripDebug(),
        // uglify(),
        gulp.dest('app/assets/js/build')
    ],cb);
});

// command 'gulp styles' which compiles vendor scss and scss of the modules
gulp.task('styles',['vendorstyles','mystyles'],function(){});

// command 'gulp scripts' that checks and minifies the js scripts of the app
gulp.task('scripts',['checkJS','scriptsStatics','scriptsModules']);

// command 'gulp dev' wich compiles all the scss and checks the js
gulp.task('dev',['styles','scripts'],function(){});

// comando que va a generar todo para produccion
//aun no funciona bien el uglify puesto que me arroja errores con los let y con unos objetos mal puestos
