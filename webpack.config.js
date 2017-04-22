const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const copyWebpackPlugin = require('copy-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-notifier');
const autoprefixer = require('autoprefixer');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const isProd = (process.env.NODE_ENV === 'production');

const base = {
    entry: path.join(APP_DIR, 'js', 'index.jsx'),
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
        ],
        resolve: {
            extensions: ["", ".js", ".jsx"]
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

const dev = {
    devtool: 'source-map',
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    }
}

const prod = {
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

module.exports = isProd ? merge(base, prod) : merge(base, dev);
