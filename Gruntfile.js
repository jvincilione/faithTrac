'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                // the files to concatenate
                src: [
                    'public/libs/bootstrap/bootstrap.min.js', 
                    'public/libs/angular/angular.min.js', 
                    'public/libs/angular-route/angular-route.min.js',
                    'public/libs/angular-cookies/angular-cookies.min.js',
                    'public/js/routes.js',
                    'public/js/controllers/MainController.js',
                    'public/js/controllers/NavigationController.js',
                    'public/js/controllers/UserController.js',
                    'public/js/controllers/ClassController.js',
                    'public/js/controllers/MemberController.js',
                    'public/js/services/ClassService.js',
                    'public/js/services/MemberService.js',
                    'public/js/services/InfoService.js',
                    'public/js/services/UserService.js',
                    'public/js/services/AttendeeService.js',
                    'public/js/app.js', 
                ],
                // the location of the resulting JS file
                dest: 'public/dist/script.js'
            }
        },
        uglify: {
            options: {
            // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> Jacques Vincilione | Lucien Consulting, Inc */\n'
            },
            dist: {
                files: {
                    'public/script.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: false,
                    optimization: 2,
                    cleancss:false,  
                    paths: ['less'],   
                    syncImport: false,
                    strictUnits:false,
                    strictMath: true,
                    strictImports: true,
                    ieCompat: false    
                },
                files: {
                    'public/styles.min.css': 'public/less/custom.less'
                }
            }
        },
        watch: {
            files: ['public/**/*.js', 'public/**/*.less'],
            tasks: ['concat', 'uglify', 'less']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');


    grunt.registerTask('default', ['concat', 'uglify', 'less']);
    grunt.registerTask('w', ['watch']);
};