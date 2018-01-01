const webpack = require('webpack');
const path = require('path');

// including sass
module.exports = [{
  entry: [
    'eventsource-polyfill',
    './src/index'],
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.sass$/, loader: 'style-loader!css-loader!sass-loader', exclude: /node_modules/ },
    ]
  },
  resolve: {
    extensions: ['.js','.sass', ".jsx"]
  }
  ,
  devServer: {
    port: process.env.PORT || 8000,
    host: "localhost",
    contentBase: "./public",
    historyApiFallback: true,
    hot: true,
    inline: true
  }
  ,plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM:'react-dom'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(), //dedupe similar code 
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin()//Merge chunks 
  ]
}];