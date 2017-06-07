module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      static_mappings: {
        options: {
          plugins: [
            // new (require('less-plugin-clean-css'))()
          ],
        },
        files: [
          {
            src: 'assets/less/index.less',
            dest: 'assets/css/index.css'
          }, 
        ]
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')
        ],
      },
      dist: {
        src: 'assets/css/*.css'
      }
    },
    watch: {
      files: ['assets/less/*.less', 'assets/less/**/*.less'],
      tasks: ['less', 'postcss']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.registerTask('default', ['less', 'watch']);

};
