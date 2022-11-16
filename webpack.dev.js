const path = require("path");
const common = require("./webpack.common"); // doing this will require everything we need that is in the webpack.common.js config file
const {merge} = require("webpack-merge"); // we need this to be able to merge config files together

const {CleanWebpackPlugin} = require ("clean-webpack-plugin"); // we will need this to clean up the accumulating bundles in our dist folder 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // we use this to grab css lines, extract them, then add them to a new file

module.exports = merge(common, {
        // we don't need entry in dev config
        // we don't need the plugins in dev
        // we actually want the minifying in css in our development to speed things up
    mode: "development",
    output:{
        filename:"[name].bundle.js",
        path: path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.((c|sa|sc)ss)$/,
                use: [
                MiniCssExtractPlugin.loader, // 3. Extract CSS into files, we will use the MiniCss loader in production instead of the style loader
                "css-loader", // 2. Turns css into commonjs
                "sass-loader" // 1. Turns sass into css
            ]
        }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({filename: "[name].[contenthash].css"}),
        new CleanWebpackPlugin()]
    
});