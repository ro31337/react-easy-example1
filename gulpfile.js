var gulp = require('gulp');
var reactEasy = require('gulp-react-easy');

gulp.task('build', function() {
  return reactEasy({
      file: 'app.jsx'
    })
    .to('bundle.js')
    .pipe(gulp.dest('.'));
});
