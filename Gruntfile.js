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
          'target/css/styles.css': 'app/styles/*.styl'
        }
      }
    },
    coffee: {
      compile: {
        files: {
          'target/js/app.js': 'app/scripts/*.coffee'
        }
      }
    },
    concat: {
      dist: {
        src: ['vendor/scripts/*.js'],
        dest: 'target/js/vendor.js'
      },
      extras: {
        src: ['vendor/styles/*.css'],
        dest: 'target/css/vendor.css'
      }
    },
    watch: {
      src: {
        files: ['app/styl/*.styl', 'app/scripts/*.coffee, vendor/scripts/*.js, vendor/styles/*.css'],
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