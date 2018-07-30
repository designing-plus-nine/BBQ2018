const gulp         = require('gulp');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require("browser-sync");
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const paths = {
  'scss': './scss/',
  'css': './css/',
  'html': './pages/',
}
const sassOptions = {
  outputStyle: 'nested'
}
const autoPrefixerOptions = [
  'last 4 versions',
  '> 1%',
  '> 1% in JP',
]

gulp.task('default', [
  'watch',
  'scss',
  'browser-sync',
]);

gulp.task('watch', function () {
  gulp.watch(paths.scss + '**/*.scss', ['scss']);
});

gulp.task('scss', function () {
  gulp.src(paths.scss+'**/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>')
    }))
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(autoprefixer(autoPrefixerOptions))
		.pipe(gulp.dest(paths.css));
});

gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: './',
      index: paths.html + 'top.html'
    }
  });
  // gulp.watch(paths.js + "**/*.js", ['reload']);
  gulp.watch(paths.html + "**/*.html", ['reload']);
  gulp.watch(paths.css + "**/*.css", ['reload']);
});
gulp.task('reload', () => {
  browserSync.reload();
});
