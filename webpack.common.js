// After installing webpack-dev-server I can specify in my package.json file to run "webpack-dev-server --config webpack.dev.js --open" which will allow live server updates and the "--open" flag makes it open in my browser

// We will install html-loader and file-loader that will require images and asks webpack to work it and then we will configure webpack to handle these image files (jpg,png,..any image format)


// The common config will have all of the aspects of the production and the development configs

// *Remember rules should be an array[]*

const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // we don't need the entry point since it will be in the production
    // we don't need mode in the common
    entry:{
        main:"./src/index.js",
        vendor:"./src/vendor.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/template.html"
        }),
        new CopyWebpackPlugin({
            patterns: [
              {
                from: path.resolve(path.resolve(__dirname, './src/'),'assets'),
                to: path.resolve(path.resolve(__dirname, './dist/'),'assets'),
                toType: 'dir',
                globOptions: {
                  ignore: ['*.DS_Store', 'Thumbs.db'],
                },
              },
            ],
          })
    ],
    module:{
        rules:[
            {
                test:/\.html$/,
                use:["html-loader"]
            },
            {
                test:/\.(svg|png|jpg|gif)$/,
                use:{
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    }
};