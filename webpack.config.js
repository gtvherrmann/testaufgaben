const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: '/js/',
        path: __dirname + '/public/js'
    },
    resolve: {
        modules: ['src/modules', 'node_modules']
    }
};
