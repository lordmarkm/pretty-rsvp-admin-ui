module.exports = {

    options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
    },
    build: {
        files: {
            'path/to/dist/file.min.css': 'path/to/src/file.css'
        }
    }
};
