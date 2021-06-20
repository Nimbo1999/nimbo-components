const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: '[name].[contenthash].bundle.js',
        clean: true,
        path: path.resolve(__dirname, 'dist')
    },
}