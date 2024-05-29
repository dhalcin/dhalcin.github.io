const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { watchFile } = require('fs');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Todo List',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        watchFiles: ['src/**/*.html'],
    }
};