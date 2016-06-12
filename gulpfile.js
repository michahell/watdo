var gulp = require('gulp');
var del = require('del');
var merge = require('merge-stream');
var runSequence = require('run-sequence');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

// var gutil = require('gulp-util')
// var webpack = require('webpack')
// var WebpackDevServer = require('webpack-dev-server')

gulp.task('clean', function () {
  return del(['dist/semantic', 'dist']);
});

gulp.task('css', function () {
  var semantic = gulp.src('node_modules/semantic-ui-css/**/*.*')
    .pipe(gulp.dest('dist/semantic'));

  var appcss = gulp.src('src/app.css')
    .pipe(gulp.dest('dist'));

  return merge(semantic, appcss);
});

gulp.task('webpack', function () {
  return gulp.src('src/app.js')
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', function () {
  runSequence('clean', ['webpack', 'css']);
});

// gulp.task('build', ['clean', 'webpack', 'css'], function () { // 'semantic'
//   return true
// })

gulp.task('default', ['build'], function () {
  return true;
});

gulp.task('watch', function () {
  return gulp.watch(['src/**/*'], ['build']);
});

// gulp.task('webpack-dev-server', function (callback) {
//   // Start a webpack-dev-server
//   var compiler = webpack({
//     // configuration
//   })

//   new WebpackDevServer(compiler, {
//     // server and middleware options
//   }).listen(8080, 'localhost', function (err) {
//     if (err) throw new gutil.PluginError('webpack-dev-server', err)
//     // Server listening
//     gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html')

//   // keep the server alive or continue?
//   // callback()
//   })
// })
