process.noDeprecation = true
var path = require('path');

module.exports = {
    entry: __dirname + '/client/index.js',
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                query:
                {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        headers: { "Access-Control-Allow-Origin": "*" }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'webpack-bundle.js',
        publicPath: '/build/'
    }

}