module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                dist: {
                    src: ['assets/js/jquery.history.js', 'assets/js/nprogress.js', '/assets/js/scripts.js'],
                    dest: 'assets/js/site.js'
                }
            },
            css: {
                src: ['assets/css/normalize.css', 'assets/css/nprogress.css', 'assets/css/style.css'],
                dest: 'assets/css/site.css'
            }
        },
        cssmin: {
            minify: {
                src: 'assets/css/site.css',
                dest: 'assets/css/site.min.css'
            }
        },
        uglify: {
            theme: {
                files: {
                    'assets/js/site.min.js': ['assets/js/site.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);
};
