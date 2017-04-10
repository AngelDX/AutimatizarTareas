//npm install gulp --save-dev
//npm install gulp-cli -g
//npm install gulp-uglify --save-dev

var gulp=require('gulp');
var minjs=require('gulp-uglify');

gulp.task('test',function(){
	console.log("hola mundo");
});

gulp.task('mainjs',function(){
	gulp.src('./src/js/main.js')
		.pipe(minjs())
		.pipe(gulp.dest('./build/js/'))
});

gulp.task('vermainjs',function(){
	gulp.watch('./src/js/*.js',['mainjs']);
});