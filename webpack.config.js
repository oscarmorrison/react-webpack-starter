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
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                },
                include: APP_DIR,
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        copyWebpackPlugin([
            {
                from: 'src/html/index.html',
                to: 'index.html',
                force: true,
            },
        ]),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: ['last 3 versions', '> 1%'],
                    }),
                ],
            },
        }),
        new WebpackBuildNotifierPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isProd ? JSON.stringify('production') : JSON.stringify('development'),
            },
        }),
    ],
};

const dev = {
    devtool: 'source-map',
};

const prod = {
    optimization: {
        minimize: true,
    }
};

module.exports = isProd ? merge(base, prod) : merge(base, dev);
