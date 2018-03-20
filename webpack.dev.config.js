let config = require('./webpack.config');

let devServer = 'webpack-dev-server/client?http://localhost:8080/';
config.entry.splice(0, 0, devServer);

config.output.publicPath = 'js'

module.exports = config;