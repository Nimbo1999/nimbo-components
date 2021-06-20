const path = require('path');

module.exports = {
    context: path.join(__dirname, '..', 'src'),
    entry: './index.tsx',
    output: {
        filename: '[name].[contenthash].bundle.js',
        clean: true,
        path: path.resolve(__dirname, '..', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    }
}