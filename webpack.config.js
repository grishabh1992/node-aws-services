const webpack = require('webpack');
const path = require('path');
var WebpackShellPlugin = require('webpack-shell-plugin');
let plugins = [];
if (process.env.NODE_ENV !== 'production') {
    plugins.push(new WebpackShellPlugin({
        onBuildEnd: ['nodemon build/server.js --watch build']
    }));
}

module.exports = {
    entry: ['./server.ts'],
    watch: true,
    target: 'node',
    externals: [],
    module: {
        rules: [{
            test: /.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, ],
    },
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: plugins,
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'server.js',
    },
};