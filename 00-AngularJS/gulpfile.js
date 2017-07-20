var gulp = require('gulp'),
    del = require('del');


var paths = {
    dist: './dist',
    src: './src/app/**/*.js',
    dependency: './src/resource',
    index: './src/app/index.html',
    pagelets: ['./src/app/**/*', '!./src/app/index.html'],
    vendor: [
        './src/resources/**/*',
        './src/resources/jquery.js',
        './src/resources/angular.js'
    ]
}

gulp.task('clean', function () {
    return del([
        paths.dist
    ]);
});

gulp.task('process:js', function () { 
    var stream = gulp.src(paths.src)
        .pipe(gulp.dest(paths.dist));
    return stream;
});

gulp.task('process:index', function () {
    var stream = gulp.src(paths.index)
        .pipe(gulp.dest(paths.dist));
    return stream;
});

gulp.task('process:pagelets', function () {
    var stream = gulp.src(paths.pagelets)
        .pipe(gulp.dest(paths.dist));
    return stream;
});

gulp.task('process:vendor', function () {
    var stream = gulp.src(paths.vendor)
        .pipe(gulp.dest(paths.dist+ '/vendor'));
    return stream;
});



gulp.task('default', [
    'clean',
    'process:js',
    'process:index',
    'process:pagelets',
    'process:vendor'
]);
