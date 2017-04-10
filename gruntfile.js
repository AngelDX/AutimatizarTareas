//npm install grunt-cli -g
//npm install grunt --save-dev
//npm install grunt-contrib-uglify --save-dev

module.exports=function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		author: 'AngelDX'
		uglify:{
			dist:{
				files:{
					'build/<%= pkg.name %>.min.js':[
					'src/js/main.js'
					]
				}
			}
		}
	})

	//grunt.registerTask('hola', 'Mi primera tarea', function(){
		//grunt.log.writeln("Hola es mi primera tarea por: "+grunt.config('autor'));
	//})

	grunt.loadNpnTask('grunt-contrib-uglify');

	grunt.registerTask('default',['uglify']);
}