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
    
gulp.task('default',['lint','tsc']);