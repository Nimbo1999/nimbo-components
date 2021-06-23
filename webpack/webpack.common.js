const path = require('path');

module.exports = {
    context: path.join(__dirname, '..', 'src'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/dist/'
    },
    target: 'web',
    module: {
        rules: [
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