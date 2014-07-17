

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

     aws: grunt.file.readJSON('grunt-aws.json'),

    'html-builder': {
      languages: ['it','en'],
      parallel: 3,
      blocks: {
                'header':'header',
                'footer':'footer'
              },
      sitemap:
      {
                    urlPrefix: 'http://www.residence-walsertal.com/',
                    changefreq: 'daily',
                    priority: 1
      },
      postBuild : function ($)
      {
          var p = $('body').attr('data-href'),
          l = $('body').attr('data-language'),
          s = $('.switcher');

          if(l == 'it')
          {
            s.attr('href','/en/'+p+'.html')
            s.html('EN');
          }
          else if (l == 'en')
          {
            s.attr('href','/'+p+'.html');
            s.html('IT');
          }

          _showContent = function ()
          {
            $('body').find('[data-language]').not('[data-language="'+l+'"]').remove();
          }
          _showContent();
      } 
    },
    watch: {
      files: ['Gruntfile.js','src/**/*.html','src/**/*.js','src/client/css/*.css'],
      tasks: ['default']
    },
    connect: {
       server: {
          options: {
              port: 8080,
              base: './dist'
          }
       }
    },
    clean: ['./dist'],
    copy: {
      client: {
         files: [ {expand: true, cwd: 'src/client/', src: ['**'], dest: 'dist/'},
                  {expand: true, cwd: 'src/html/template/', src: ['*'], dest: 'dist/js/template/'}]
      }
    },
    s3: {
      options: {
        key: '<%= aws.key %>',
        secret: '<%= aws.secret %>',
        bucket: '<%= aws.bucket %>',
        access: 'public-read',
        region: 'eu-west-1',
        headers: {
          // Two Year cache policy (1000 * 60 * 60 * 24 * 730)
          "Cache-Control": "max-age=630720000, public",
          "Expires": new Date(Date.now() + 63072000000).toUTCString()
        }
      },
      dev: {
        // These options override the defaults
        options: {
          maxOperations: 1
        },
        // Files to be uploaded.
        sync: [
          {
            src: 'dist/**/*.*',
            dest: '/',
            rel: 'dist',
            options: { gzip: true, verify: true}
          }
        ]
      }
    },
      uglify: {
      my_target:
      {
        options: {
          //compress: true,
          //beautify: false
        },
        files:
        {
          'dist/js/app.min.js':
          [
            'src/client/js/modernizr.custom.js',
            'src/client/js/jquery-1.9.1.js',
            'src/client/js/jquery-ui-1.10.3.js',
            'src/client/js/jquery.bxslider.min.js',
            'src/client/js/smoothscroll.js',
            'src/client/js/classie.js',
            'src/client/js/mlpushmenu.js',
            'src/client/js/script.js',
            'src/client/js/home.js',
            'src/client/js/form-prenotazioni.js'
          ]
        }
      }
    },
    cssmin: {
      combine: {
      options: {
        banner: '/* I\'ve compressed this stylesheet to save 25kb */'
      },
        files: {
          'dist/css/app.min.css':
          [
            'src/client/css/font.css',
            'src/client/css/libs/jquery-ui-1.10.3.custom.css',
            'src/client/css/jquery.bxslider.css',
            'src/client/css/style.css',
            'src/client/css/responsive.css',
            'src/client/css/responsive-menu.css',
            'src/client/css/tables.css'

          ]
        }
      }
    },
    processhtml: {
      dist: {
        files: [
          {
          expand: true,     
          cwd: 'dist/',   
          src: ['**/*.html'],
          dest: 'dist/',  
          ext: '.html'
        },
        ],
      }
    },
    imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'dist/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dist/'                  // Destination path prefix
        }]
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['html-builder','client']);
  grunt.registerTask('client', 'copy:client');
  grunt.registerTask('listen', ['connect','watch']);
  grunt.registerTask('uglify', ['uglify']);
  grunt.registerTask('cssmin', ['cssmin']);
  grunt.registerTask('processhtml', ['processhtml']);
  grunt.registerTask('deploy', ['html-builder','uglify','cssmin','processhtml','imagemin','s3']);
  
  // contrib
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-html-builder');
  grunt.loadNpmTasks('grunt-s3');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

};
