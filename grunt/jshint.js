module.exports = {
  options: {
      reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
  },

  build: ['Gruntfile.js', 'src/**/*.js']
};
