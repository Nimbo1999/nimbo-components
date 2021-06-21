const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '..', 'dist'),
    },
    plugins: [
        new htmlWebpackPlugin({
            minify: true,
            template: path.join(__dirname, '..', 'public', 'index.html'),
            inject: true
        }),
    ]
})