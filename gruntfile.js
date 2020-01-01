module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            dist: {
                src:[
                    'css/src/normalize.css',
                    'css/src/style.css',
                    'css/src/bigvid.css'
                    ],
                dest: 'css/concat.css',
            }
        },
        autoprefixer: {
            options: {
              browsers: ['last 5 versions']
            },
            dist: {
                files: {
                    'css/main.css': 'css/concat.css'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: 'main.css',
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
        watch: {
            scripts: {
                files: ['css/src/*.css'],
                tasks: ['concat', 'autoprefixer', 'cssmin'],
                options: {
                    spawn: false,
                },
            } 
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'cssmin', 'autoprefixer']);
};