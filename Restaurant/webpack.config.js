const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new HtmlwebpackPlugin({
            template: './src/index.html',
            title: 'Restaurant',
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: {
                    loader: 'file-loader',
                }
            },
        ],
    },

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true,
        watchFiles: ['src/**/*.html'],
    }

};