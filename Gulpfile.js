var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var nodemon = require('gulp-nodemon');
var babelify = require('babelify');
var sass = require('gulp-sass');


gulp.task('serve', serve);

// simple gulp task to start the server
function serve() {
  nodemon({ script: 'server/server.js' });
}


gulp.task('styles', function(){
  gulp.src('./client/scss/application.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./client/stylesheets'))
})

gulp.task('browserify', function(){
  return browserify('./client/index.js').transform('babelify', {presets: ["es2015","react"]})
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./build/'))
})


gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });

// gulps default task is to call the serve task
gulp.task('default', ['styles', 'browserify']);
