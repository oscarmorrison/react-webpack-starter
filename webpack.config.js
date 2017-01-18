var webpack = require('webpack');
var path = require('path');
var copyWebpackPlugin = require('copy-webpack-plugin');
var WebpackBuildNotifierPlugin = require('webpack-notifier');
var autoprefixer = require('autoprefixer');
var jquery = require('jquery');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const isProd = (process.env.NODE_ENV === 'production');

var config = {
    entry: APP_DIR + '/js/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                include: APP_DIR,
                test: /\.jsx?$/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
                test: /\.scss$/
            },
            {
                  loader: 'file-loader',
                  test: /\.(jpg|png|svg)$/,
            }
        ]
    },
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    postcss: [
        autoprefixer({
            browsers: ['last 3 versions', '> 1%']
        })
    ],
    plugins: [
        copyWebpackPlugin([
            {
                from: 'src/html/index.html',
                to: 'index.html',
                force: true
            },
        ]),
        new WebpackBuildNotifierPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': isProd ? JSON.stringify('production') : JSON.stringify('development')
            }
        }),
    ]
};

module.exports = config;
