module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      compile: {
        options:{
          compress: true
        },
        files: {
          'css/styles.css': 'styl/*.styl'
        }
      }
    },
    coffee: {
      compile: {
        files: {
          'js/app.js': 'scripts/*.coffee'
        }
      }
    },
    watch: {
      src: {
        files: ['styl/*.styl', 'scripts/*.coffee'],
        tasks: ['default']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Default task(s).
  grunt.registerTask('default', ['stylus','coffee']);

};