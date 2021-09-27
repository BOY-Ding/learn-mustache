const path = require('path');

module.exports = {
    entry: './src/index.js',

    // output: {
    //     publicPath: 'xuni',
    //     fileName: 'bundle.js'
    // },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    devServer: {
        port: 8080,
        compress:false,
        contentBase:'www',
        publicPath:'/xuni/'
    }
}