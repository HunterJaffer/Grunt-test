module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        src: ['js/javascript.js', 'js/javascript0.js'],
        dest: 'build/js/scripts.js',
      },
      css: {
        src: ['css/style.css', 'css/style0.css'],
        dest: 'build/css/styles.css',
      },
    },
    watch: {
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['concat:js'],
      },
      styles: {
        files: ['css/**/*.css'],
        tasks: ['concat:css'],
      },

    },
    });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default',['concat','watch']);


};
