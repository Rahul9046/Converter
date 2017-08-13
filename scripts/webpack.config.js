const path = require('path');
module.exports = {
  entry:'./src/chunk.js',
  output: {
   // library: "someLibName",
    //libraryTarget: "umd",
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js'
  },
  module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     }
};