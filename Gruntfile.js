module.exports = function(grunt) {
    'use strict';

    var tasks = {scope: ['devDependencies', 'dependencies']};
    var options = {config: { src: "grunt/*.js" }};
    var configs = require('load-grunt-configs')(grunt, options);
    require('load-grunt-tasks')(grunt, tasks);
    grunt.initConfig(configs);
    grunt.registerTask('build', ['auto_install', 'copy:dev', 'copy:libs']);
    grunt.registerTask('staging', ['auto_install', 'copy:staging', 'copy:libs']);

};
