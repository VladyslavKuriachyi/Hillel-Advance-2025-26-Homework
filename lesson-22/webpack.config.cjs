const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';

    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProd ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
            publicPath: '',
        },
        mode: isProd ? 'production' : 'development',
        devtool: isProd ? false : 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {loader: 'css-loader', options: {sourceMap: !isProd}},
                        {loader: 'sass-loader', options: {sourceMap: !isProd}},
                    ],
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                {
                    test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot)$/i,
                    type: 'asset',
                },
            ],
        },
        optimization: {
            minimize: isProd,
            minimizer: [
                new TerserPlugin({parallel: true}),
                new CssMinimizerPlugin(),
            ],
            splitChunks: {
                chunks: 'all', //
            },
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: isProd ? 'css/[name].[contenthash:8].css' : 'css/[name].css',
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                minify: isProd
                    ? {
                        collapseWhitespace: true,
                        removeComments: true,
                        removeRedundantAttributes: true,
                    }
                    : false,
            }),
        ],
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            compress: true,
            port: 8080,
            open: true,
            hot: true,
            client: {
                overlay: true
            }
        },
        performance: {hints: false},
    };
};
