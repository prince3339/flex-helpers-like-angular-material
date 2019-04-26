module.exports = function(grunt) {
  const sass = require('node-sass');
 
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dist: {
        files: {
          'style/main.css': 'main.scss'
        }
      }
    }
  });
  
  grunt.registerTask('default', ['sass']);
};

