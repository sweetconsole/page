const gulp = require("gulp")
const del = require("del")
const include = require("gulp-file-include")
const concat = require("gulp-concat")
const autoprefixer = require("gulp-autoprefixer")
const browserSync = require("browser-sync").create()
const imagemin = require("gulp-imagemin")
const newer = require("gulp-newer")

const paths = {
    html: {
        src: "src/*.html",
        dest: "dist/"
    },
    styles: {
        src: "src/components/**/*.css",
        dest: "dist/"
    },
    scripts: {
        src: "src/scripts/**/*.js",
        dest: "dist/"
    },
    images: {
        src: ["src/image/**/*", "!src/image/**/*.svg"],
        svg: "src/image/**/*.svg",
        webp: "src/image/**/*.{png, jpg, jpeg}",
        dest: "dist/image/"
    },
    nothing: {
        src: ["src/video/**/*", "src/audio/**/*"],
        dest: "dist/assets/"
    }

}

function clean() {
    return del(["dist/*", "!dist/image"])
}

function html() {
    return gulp.src(paths.html.src)
        .pipe(include({
        prefix: "@"
        }))
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browserSync.stream())
}

function styles() {
    return gulp.src(["src/style/**.css", paths.styles.src])
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
        overrideBrowserslist: ['last 10 version'],
        grid: true
        }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream())
}

function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(concat('script.js'))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream())
}

function images() {
    return gulp.src(paths.images.webp)
        .pipe(gulp.dest(paths.images.dest))
        .pipe(browserSync.stream())
}

function sprite() {
    return gulp.src(paths.images.svg)
        .pipe(newer(paths.images.dest))
        .pipe(imagemin(
            [
                imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({ quality: 75, progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
                })
            ]
        ))
        .pipe(gulp.dest(paths.images.dest))
        .pipe(browserSync.stream())
}

function nothing() {
    return gulp.src(paths.nothing.src)
      .pipe(gulp.dest(paths.nothing.dest))
      .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
        baseDir: "./dist/"
    }
})

    gulp.watch(paths.html.dest).on("change", browserSync.reload)
    gulp.watch(paths.html.src, html)
    gulp.watch("src/components/**/*.html", html)
    gulp.watch("src/style/*.css", styles)
    gulp.watch(paths.styles.src, styles)
    gulp.watch(paths.scripts.src, scripts)
    gulp.watch(paths.images.src, images)
    gulp.watch(paths.images.svg, sprite)
    gulp.watch(paths.nothing.src, nothing)
}

exports.build = gulp.series(clean, html, gulp.parallel(styles, scripts, images, sprite, nothing))
exports.server = gulp.series(clean, html, gulp.parallel(styles, scripts, images, sprite, nothing), watch)