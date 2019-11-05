const webpack               =   require('webpack');
const path                  =   require('path');
const HTMLWebpackPlugin     =   require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),

    entry: './index.js',

    output: {
        filename: 'bundle.webpack.js',
        path: path.join(__dirname, 'dist')
    },

    devtool: 'eval',

    devServer: {
        port: 4200
    },

    resolve: {
        alias: {
            'framework': path.join(__dirname, 'src/core')
        }
    },

    plugins: [
        new HTMLWebpackPlugin({
            title: 'SPA',
            template: './index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }
        ]
    }
};