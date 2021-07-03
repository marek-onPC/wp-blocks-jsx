var gulp = require ( 'gulp' );
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));
var cleanCss = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var stylelint = require('gulp-stylelint')
var eslint = require('gulp-eslint');
var del = require('del');

var styleWatch = './assets/styles/**/*.scss';
var styleSrc = './assets/styles/main.scss';
var styleDist = './dist/styles/';

var scriptWatch = './assets/scripts/**/*.js';
var scriptSrc = './assets/scripts/main.js';
var scriptDist = './dist/scripts/';

var adminScriptWatch = './assets/scripts/admin.js';
var adminScriptSrc = './assets/scripts/admin.js';
var adminScriptDist = './dist/scripts/';

/**
 * Main task for styles and scripts.
 */
gulp.task('browserSync', function () {
  browserSync.init({
    proxy: "http://localhost:8888/",
    notify: true
  })
})

gulp.task('styles', function () {
  return gulp.src(styleSrc)
  .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cleanCss(
      {
        compatibility: 'ie8'
      }
    ))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(styleDist))
  .pipe(browserSync.reload({
    stream: true
    }))
});

gulp.task('stylelint', function () {
  return gulp.src(styleWatch)
  .pipe(stylelint({
    failAfterError: global.production ? true : false,
    reporters: [
      {
        formatter: 'string', console: true
      }
    ]
  }));
});

gulp.task('scripts', function() {
  return browserify({
    entries: [scriptSrc],
    debug: true
  })
  .transform(babelify, 
    {
      presets: [
        "@babel/preset-env", 
        "@babel/preset-react"
      ],
      sourceMaps:true
    }
  )
  .bundle()
  .pipe(source('main.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init(
    {
      loadMaps: true
    }
  ))
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(scriptDist))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('eslint', function () {
  return gulp.src(scriptWatch)
  .pipe(eslint())
  .pipe(eslint.format())
});

gulp.task('watch', gulp.parallel('browserSync', 'stylelint', 'styles', 'eslint', 'scripts', function () {
  gulp.watch(styleWatch, gulp.series('stylelint'));
  gulp.watch(styleWatch, gulp.series('styles'));
  gulp.watch(scriptWatch, gulp.series('eslint'));
  gulp.watch(scriptWatch, gulp.series('scripts'));
}));

/**
 * Admin panel only scripts.
 */
gulp.task('scripts:admin', function() {
  return browserify({
    entries: [adminScriptSrc],
    debug: true
  })
  .transform(babelify, 
    {
      presets: [
        "@babel/preset-env", 
        "@babel/preset-react"
      ],
      sourceMaps:true
    }
  )
  .bundle()
  .pipe(source('admin.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init(
    {
      loadMaps: true
    }
  ))
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(adminScriptDist))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('eslint:admin', function () {
  return gulp.src(adminScriptWatch)
  .pipe(eslint())
  .pipe(eslint.format())
});


gulp.task('watch:admin', gulp.parallel('browserSync', 'eslint:admin', 'scripts:admin', function () {
  gulp.watch(adminScriptWatch, gulp.series('eslint:admin'));
  gulp.watch(adminScriptWatch, gulp.series('scripts:admin'));
}));

/**
 * Build task (full - main styles and scripts + admin scripts)
 */
gulp.task('clean:dist', async function () {
  return del.sync('./dist');
})

gulp.task('build' , gulp.series(
  gulp.parallel('clean:dist', 'styles', 'scripts', 'scripts:admin')
));