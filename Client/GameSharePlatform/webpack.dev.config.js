const webpack = require('webpack');
const config = require('./webpack.common.config');
config.devServer = {
  hot: true,
  historyApiFallback: {
    index: './index.html'
  },
  open:true
}
config.plugins.push(new webpack.HotModuleReplacementPlugin());
module.exports = config;