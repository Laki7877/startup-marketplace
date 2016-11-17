module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      options: {
        paths: ["public/less/", "bower_components/bootstrap/less/", "bower_components/font-awesome/css/"],
      },
      development: {
        files: {
          'public/css/app.css': 'public/less/app.less'
        }
      }
    },
    watch: {
      files: ["public/less/*.less"],
      tasks: ["less"]
    },
  });

  grunt.registerTask('default', ['less', 'watch']);
};