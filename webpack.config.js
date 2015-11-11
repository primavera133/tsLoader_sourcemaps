var webpack = require('webpack');
module.exports = {
    entry: './src/public/app.ts',
    output: {
        filename: './public/js/bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};