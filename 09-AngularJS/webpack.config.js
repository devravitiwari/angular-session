const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry: {
        app: path.resolve('./src/main.js')
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.png$/,
                use: {
                    loader: "url-loader",
                    options: { limit: 100000 }
                }
            },
            {
                test: /\.jpg$/,
                use: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: {
                        loader: 'css-loader'
                    },
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.ts$/,
                include: [path.resolve('src')],
                use: [
                    {
                        loader: 'awesome-typescript-loader'
                    }
                ]
            },
            
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            //$: 'jquery',
            //jQuery: 'jquery',
            //'window.jQuery': 'jquery',
            //angular: 'angular',
            //hostObj : 'RT'
        }),
        new ExtractTextPlugin('bootstrap.css'),
        //new ExtractTextPlugin('style.css'),
        new CopyWebpackPlugin([
            {
                from: 'src/**/*.html',
                flatten: true
            }
        ], { ignore: ['index.html']}),
        new HtmlWebpackPlugin({
            template: path.resolve('./src/index.html')            
        })
    ]
};

module.exports = config;