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
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    }
}