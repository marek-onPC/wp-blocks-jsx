var gulp = require('gulp');
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

var adminStyleWatch = './assets/styles/admin/**/*.scss';
var adminStyleSrc = './assets/styles/admin.scss';

var scriptWatch = './assets/scripts/**/*.js';
var scriptSrc = './assets/scripts/main.js';
var scriptDist = './dist/scripts/';

var blocksScriptSrc = [{ 
    fileName: 'socialShareButtonsBlock.js',
    filePath: './assets/scripts/blocks/socialShareButtonsBlock/socialShareButtonsBlock.js'
  }];

var adminScriptWatch = './assets/scripts/**/*.js';
var adminScriptSrc = './assets/scripts/admin.js';

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

gulp.task('styles:admin', function () {
  return gulp.src(adminStyleSrc)
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

gulp.task('stylelint:admin', function () {
  return gulp.src(adminStyleWatch)
    .pipe(stylelint({
      failAfterError: global.production ? true : false,
      reporters: [
        {
          formatter: 'string', console: true
        }
      ]
    }));
});


gulp.task('block-scripts', function (resolve) {
  blocksScriptSrc.forEach((file) => {
    return browserify({
      entries: [file.filePath],
      debug: true
    })
      .transform(babelify,
        {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ],
          sourceMaps: true
        }
      )
      .bundle()
      .pipe(source(file.fileName))
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

  resolve();
});

gulp.task('scripts', function () {
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
        sourceMaps: true
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

gulp.task('scripts:admin', function () {
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
        sourceMaps: true
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
    .pipe(gulp.dest(scriptDist))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('eslint:admin', function () {
  return gulp.src(adminScriptWatch)
    .pipe(eslint())
    .pipe(eslint.format())
});

gulp.task('watch', gulp.parallel('browserSync', 'stylelint', 'styles', 'stylelint:admin', 'styles:admin', 'eslint', 'scripts', 'eslint:admin', 'scripts:admin', function () {
  gulp.watch(styleWatch, gulp.series('stylelint'));
  gulp.watch(styleWatch, gulp.series('styles'));
  gulp.watch(styleWatch, gulp.series('stylelint:admin'));
  gulp.watch(styleWatch, gulp.series('styles:admin'));
  gulp.watch(adminScriptWatch, gulp.series('eslint:admin'));
  gulp.watch(adminScriptWatch, gulp.series('scripts:admin'));
  gulp.watch(scriptWatch, gulp.series('eslint'));
  gulp.watch(scriptWatch, gulp.series('scripts'));
}));

/**
 * Build task (full - main styles and scripts + admin scripts)
 */
gulp.task('clean:dist', async function () {
  return del.sync('./dist');
})

gulp.task('build', gulp.series(
  gulp.parallel('clean:dist', 'styles', 'styles:admin', 'scripts', 'scripts:admin', 'block-scripts')
));