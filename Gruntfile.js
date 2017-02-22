module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options:{
                style: 'compact',
                sourcemap: 'none',
                dest: 'public/stylesheets/'
            },
            dist: {
                files: {
                    'public/stylesheets/main.css': 'sass/main.scss'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            sass:{
                options:{
                    livereload: true
                },
                files:['sass/**/*.scss'],
                tasks:['sass']
            },
            express:{
                files: ['src/*.js'],
                tasks : ['express:dev'],
                options: {
                    spawn:false
                }
            }
        },
        express: {
            options: {
                // Override defaults here
            },
            dev: {
                options: {
                    script: 'src/server.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-express-server');


    grunt.registerTask('serve', [
        'sass',
        'express',
        'watch'
    ]);
};
