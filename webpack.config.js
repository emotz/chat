module.exports = {
    entry: './frontend/lib/main.js',
    output: {
        filename: './frontend/public/bundle.js',
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100,
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader',
            },
        ],
    },
};