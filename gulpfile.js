var gulp =require('gulp');

gulp.task('default',function(){
    console.log('Hello gulp.');
})

var tslint=require('gulp-tslint');

gulp.task('lint',function(){
    return gulp.src(['./graphs/**/*.ts'])
    .pipe(tslint())
    .pipe(tslint.report());
});

var ts=require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('tsc',function(){
    return gulp.src(['./graphs/**/*.ts'])
    .pipe(ts(tsProject()))
    .js.pipe(gulp.dest('./build'));
});

gulp.task('tsc-test',function(){
    return gulp.src(['./test/**/*.ts'])
    .pipe(ts(tsProject()))
    .js.pipe(gulp.dest('./temp/test'));
});    
gulp.task('default',['lint','tsc']);

gulp.task('tt',function(){
    return gulp.src('./**/*.ts')
        .pipe(gulp.dest("abc.ts"));
});

gulp.task('watch',function(){
    gulp.watch('**/*.ts',function(event){
        console.log(event.path);
        console.log(event.type);
    });
})