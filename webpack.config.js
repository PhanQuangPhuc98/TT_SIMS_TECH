const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const ExtractTextPlugin=require( 'extract-text-webpack-plugin' );
module.exports = {
    mode: 'development',
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "./static/js/bundle.js",
        assetModuleFilename: 'static/media/[name][ext][query]',
        publicPath: "/",
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [{
                use: 'babel-loader',
                test: /\.js$/,
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.tsx|ts?$/,
                use: 'babel-loader',
                exclude: [/node_modules/]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            // { test: /(\.css)$/, loader: ExtractTextPlugin.extract( "css?sourceMap" ) },
        ]
    },
    optimization: {
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },

    plugins: [
        // new ExtractTextPlugin( 'index.css' ),
        new MiniCssExtractPlugin({
                filename: 'static/css/[name].css',
            }

        ),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html')
        })
    ],
    devServer: {
        contentBase: '/build',
        publicPath: '/',
        hot: true,
        open: true,
        port: 3000,
        historyApiFallback: true,
    },

}