module.exports = {
      options: {
          banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
          files: {
              'path/to/dist/file.min.*': 'path/to/src/file.*', // "*" => js, css or html
              'path/to/dist/file2.min.*': ['path/to/src/file1.*', 'path/to/src/file.*'] // Minifying Multiple Files into One
          }
      }
};
