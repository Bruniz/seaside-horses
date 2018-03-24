/**
 * Created by Mathias on 24-03-2018.
 */
module.exports = {
    entry: './src/index.js',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.css$/,loader: ['style-loader', 'css-loader'], exclude: /node_modules/},
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    }
};