const tailwind = require('tailwindcss');
const cssnext = require('postcss-cssnext');

module.exports = {
  plugins: [
    // your file's name or path may differ:
    tailwind('./tailwind.config.js'),
    cssnext(),
    // add any other postcss plugins you like...
  ],
};
