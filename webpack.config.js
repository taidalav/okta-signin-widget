var path    = require('path');
var _ = require('underscore');
var commonConfig = require('./webpack.common.config');

module.exports = _.assign(commonConfig, {
  entry: './target/js/widget/OktaSignIn.js',
  output: {
    path: path.resolve(__dirname, 'target/js/'),
    filename: 'okta-sign-in.js',
    library: 'OktaSignIn',
    libraryTarget: 'umd'
  }
});