module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      less: {
        files: [
        'LESS/*',
        'bower_components/normalize-css/normalize.css'
        ],
        tasks: ['less']
      },
      css: {
        files: [
        'compiled_css/*'
        ],
        tasks: ['cssmin']
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      combinejs: {
        files: {
          '<%= ghost_location %>content/themes/<%= ghost_theme_name %>/assets/js/all.min.js':
          [
          'bower_components/modernizr/modernizr.js',
          'custom_components/responsive_iframes/responsive_iframes.js',
          'custom_components/magnum.js'
          ]
        }
      }
    },

    less: {
      components: {
        files: {
          'compiled_css/compiled_css.css': ['LESS/less_imports.less']
        }
      },
      options: {
        expand: true,
        paths: [
        'bower_components/lesshat',
        'LESS'
        ]
      }
    },

    cssmin: {
      combine: {
        files: {
          '<%= ghost_location %>content/themes/<%= ghost_theme_name %>/assets/css/style.css': ['bower_components/normalize-css/normalize.css', 'compiled_css/compiled_css.css']
        }
      }
    },

    'ghost_location': '../../Ghost/',
    'ghost_theme_name': 'magnum',

  });

  // Load grunt plugins.
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

};
