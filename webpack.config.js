const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env, argv) {
    console.log({ env, argv });
    const { WEBPACK_SERVE } = env;
    const mode = WEBPACK_SERVE ? 'development' : 'production';
    const isProduction = mode === 'production';

    const config = {
        mode,
        devtool: 'source-map',
        entry: './src/index.tsx',
        output: {
            filename: 'index.js',
            path: path.join(__dirname, 'dist'),
            publicPath: '/',
            clean: true,
            library: 'nimbo-components',
            libraryTarget: 'commonjs2',
        },
        target: 'node',
        plugins: [],
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: 'ts-loader',
                },
            ]
        },
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ]
        },
    }

    if (isProduction) {
        // Adiciona o Plugin MiniCssExtractPlugin.
        config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].css' }));

        // Adiciona o loader do MiniCssExtractPlugin no lugar do style loader.
        config.module.rules.push({
            test: /\.less$/i,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                    }
                },
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        });
    } else {
        const { open, port } = argv;

        // Insere a configuração do devServer.
        config.devServer = {
            contentBase: path.join(__dirname, 'dist'),
            open,
            port,
            historyApiFallback: true
        }

        // Adiciona o html para renderizar os componentes no dom.
        config.plugins.push(new htmlWebpackPlugin({
            minify: true,
            template: path.join(__dirname, 'public', 'index.html'),
            inject: true
        }));

        // Adiciona o style-loader como o loader do css.
        config.module.rules.push({
            test: /\.less$/i,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                    }
                },
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        });
    }

    return config;
}