const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    entry: './index.tsx',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, '..', 'dist'),
    },
    plugins: [
        new htmlWebpackPlugin({
            minify: true,
            template: path.join(__dirname, '..', 'public', 'index.html'),
            inject: true
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ],
            },
            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    "postcss-loader",
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    }
})