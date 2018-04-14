module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    node: {
        fs: 'empty',
        net: 'empty'
      },
    devtool: 'source-maps',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }

            }
        ]
    }
}
