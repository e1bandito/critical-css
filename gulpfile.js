"use strict";

const gulp = require("gulp");
const del = require("del");
const critical = require('critical');

// Critical css

gulp.task('critical', async (done) => {
   await critical.generate({
       inline: true,
       base: './build/',
       src: 'index.html',
       target: {
           html: 'index.html',
       },
       width: 1340,
       height: 600,
       ignore: ['@font-face']
   });
    done();
});


// Очиска build
gulp.task("clean", () => {
    return del("build");
});

// Копирование в build
gulp.task("copy", () => {
    return gulp
        .src(["src/**"], {
            base: "src/",
        })
        .pipe(gulp.dest("build"));
});

gulp.task('build', gulp.series('clean', 'copy', 'critical'));
