var gulp = require('gulp');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

// var gutil = require('gulp-util')
// var webpack = require('webpack')
// var WebpackDevServer = require('webpack-dev-server')

gulp.task('build', function () {
  return gulp.src('src/app.js')
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['build'], function () {
  gulp.watch(['src/**/*'], ['build']);
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
