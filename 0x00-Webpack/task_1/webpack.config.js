const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js', // Entry point
  output: {
    filename: 'bundle.js',          // Output file name
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  mode: 'production',                // Set mode to production
};