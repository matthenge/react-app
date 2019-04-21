const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        './src/index.js'
      ],
      output: {
        path: __dirname,
        publicPath: '/',
        filename: 'main.js'
      },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: 'file-loader',
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};
