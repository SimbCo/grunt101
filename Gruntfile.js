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
          'css/styles.css': 'app/styles/*.styl'
        }
      }
    },
    coffee: {
      compile: {
        files: {
          'js/app.js': 'app/scripts/*.coffee'
        }
      }
    },
    concat: {
       dist: {
        src: ['vendors/scripts/jquery.js'],
        dest: 'js/vendor.js'
      }
    },
    watch: {
      src: {
        files: ['app/styl/*.styl', 'app/scripts/*.coffee, vendors/scripts/*.js, vendors/styles/*.css'],
        tasks: ['default']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['stylus','coffee','concat']);

};