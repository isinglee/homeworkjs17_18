/*jslint node: true */
'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

var jsFiles = 'js/src/**/*.js',
    jsDest = 'js/',
    cssFiles = 'css/src/*.css',
    cssDest = 'css/';

gulp.task('default', function () {
    return console.log('\n\nUse "gulp scripts" or "gulp css" to minify scripts or css\n\n');
});

gulp.task('scripts', function () {
    return gulp.src(jsFiles)
        .pipe(concat('script.main.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('script.main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('css', function () {
    return gulp.src(cssFiles)
        .pipe(concat('style.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(cssDest));
});
